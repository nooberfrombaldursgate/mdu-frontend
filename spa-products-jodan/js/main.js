'use strict';

// =========== Product functionality =========== //

/**
 * Array of product objects
 */

let _products;

function Product(model, brand, price, img, status) {
  this.model = model;
  this.brand = brand;
  this.price = price;
  this.img = img;
  this.status = status;
}

/**
 * Appending products to the DOM using a for-of loop
 */
function appendProducts(products) {
  let productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = '';
  for (let product of products) {
    productsContainer.innerHTML += /*html*/ `
    <article>
      <p class="product-brand">${product.brand}</p>
      <h3 class="product-model">${product.model}</h3>
      <p class="product-price">${new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK'}).format(product.price)}</p>
      <p class="product-status">${formatProductStatus(product.status)}</p>
      <img class="product-img" src="${product.img}" alt="${product.brand} product">
    <article>
    `;
  }
}

function formatProductStatus(status) {
  let formattedStatus = '';
  switch (status) {
    case 'inStock':
      formattedStatus = 'In stock.';
      break;   
    case 'outOfStock':
      formattedStatus = 'Out of stock.';
      break;
    default:
      formattedStatus = 'Please contact dealer for stock status.';
  }
  return formattedStatus;
}

/**
 * Adding a new product to the Array of products
 */
function addNewProduct() {
  let brand = document.getElementById('product-create-brand').value;
  let model = document.getElementById('product-create-model').value;
  let price = document.getElementById('product-create-price').value;
  let img = document.getElementById('product-create-img').value;
  let status = document.getElementById('product-create-status').value;
  let newProduct = new Product(model, brand, price, img, status);
  _products.push(newProduct);
  // dispatch search event
  let searchInput = document.getElementById('product-search-filter'); 
  let event = new Event('keyup');
  searchInput.dispatchEvent(event);
}

/**
 * Searching for products matching the input value
 */


function search() {
  let searchQuery = document.getElementById('product-search-filter').value.toLowerCase();
  let filterOutOutOfStock = document.getElementById('product-checkbox-filter').checked;
  if (filterOutOutOfStock) {
    let results = _products.filter(product => {
      let name = product.brand.toLowerCase();
      let status = product.status;
      return name.includes(searchQuery) && status === 'inStock';
    });  
    let sortedResults = sortResults(results)
    appendProducts(sortedResults);
  } else {
    let results = _products.filter(product => {
      let name = product.brand.toLowerCase();
      return name.includes(searchQuery);
    });
    let sortedResults = sortResults(results)
    appendProducts(sortedResults);
  }
}

function sortResults(products) {
  let sortBySelectionValue = document.getElementById('product-select-sort').value;
  let sortedResults = Array.from(products); 
  switch (sortBySelectionValue) {
    case 'Name':
     sortProductsByBrandName(sortedResults);
     break;   
    case 'Price (ascending)':
      sortProductsByPriceAscending(sortedResults);
      break;
    case 'Price (descending)':
      sortProductsByPriceDescending(sortedResults);
      break;
    case 'Status':
      sortProductsByStatus(sortedResults);
      break;
  }
  return sortedResults;
}

function sortProductsByBrandName(array) {
  array.sort(function (a, b) {
    let propertyA = a.brand;
    let propertyB = b.brand;
    if (propertyA < propertyB) {
      return -1;
    }
    if (propertyA > propertyB) {
      return 1;
    }
    return 0;
  });
}

function sortProductsByPriceAscending(array) {
  array.sort(function (a, b) {
    let propertyA = a.price;
    let propertyB = b.price;
    if (propertyA < propertyB) {
      return -1;
    }
    if (propertyA > propertyB) {
      return 1;
    }
    return 0;
  });
}

function sortProductsByPriceDescending(array) {
  array.sort(function (a, b) {
    let propertyA = a.price;
    let propertyB = b.price;
    if (propertyA > propertyB) {
      return -1;
    }
    if (propertyA < propertyB) {
      return 1;
    }
    return 0;
  });
}

function sortProductsByStatus(array) {
  array.sort(function (a, b) {
    let propertyA = a.status;
    let propertyB = b.status;
    if (propertyA < propertyB) {
      return -1;
    }
    if (propertyA > propertyB) {
      return 1;
    }
    return 0;
  });
}

/**
 * IIFE Init 
 */

(function() {
  // create products
  let product1 = new Product('MDR-Z1R', 'Sony', 14999, 'img/sony.jpg', 'inStock');
  let product2 = new Product('HD 820', 'Sennheiser', 14999, 'img/sennheiser.jpg', 'outOfStock');
  let product3 = new Product('AH-D9200', 'Denon', 11999, 'img/sony.jpg', 'outOfStock');
  let product4 = new Product('LCD-X', 'Audeze', 9990, 'img/audeze.jpg', 'inStock');

  // initialize arrays
  _products = [product1, product2, product3, product4];
  // append products to dom
  appendProducts(_products);
})();
