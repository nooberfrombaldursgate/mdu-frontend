"use strict";

// =========== Movie SPA functionality =========== //

//global variable
let _movies = [];

// fetch all movies from WP
async function fetchMovies() {
  let response = await fetch("https://wordpress.joachimdanielsen.dk/wp-json/wp/v2/posts?_embed");
  let data = await response.json();
  setMovies(data);
  appendMovies(_movies);
}

function setMovies(movies) {
  for (const movie of movies) {
    _movies.push({
      title: movie.title.rendered,
      description: movie.acf.description,
      img: movie.acf.img,
      trailer: movie.acf.trailer,
      rating: movie.acf.rating,
      year: movie.acf.year,
      director: movie.acf.director,
      writers: movie.acf.writers,
      actors: movie.acf.actors
    })
  }
  console.log(_movies);
}

// append movies to the DOM
function appendMovies() {
  let template = "";
  for (const movie of _movies) {
    template += /*html*/`
      <article>
        <img src="${movie.img}">
        <h2>${movie.title} (${movie.year})</h2>
        ${movie.description}
        <iframe width="500px" height="300px" src="${movie.trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Rating: ${movie.rating}%</p>
        <p>Director: ${movie.director}</p>
        <p>Writers: ${movie.writers}</p>
        <p>Stars: ${movie.actors}</p>
        </article>
    `;
  }
  document.getElementById("movies-container").innerHTML = template;
}

// search functionality
function search(searchValue, filterByGenre) {
  let results = Array.from(_movies);
  if (filter) {
    // TODO: Make filter function
  }
  results.filter((movie) => {
    let title = movie.title.toLowerCase();
    return title.includes(searchValue);
  });
  let filteredResults = filterByGenre(results);
  let sortedResults = sortSearchResults(filteredResults);
  appendUsers(sortedResults);
  }
}





// fetch all genres / categories from WP
function getGenres() {
  // TODO: get categories from wp headless
  // https://movie-api.cederdorff.com/wp-json/wp/v2/categories
}

// append all genres as select options (dropdown)
function appendGenres(genres) {
  // TODO: append categories to #select-genre
}

// genre selected event - fetch movies by selected category
function genreSelected(genreId) {
  // TODO: fetch movies matching the given genreId
  // `https://movie-api.cederdorff.com/wp-json/wp/v2/posts?_embed&categories=${genreId}`
}

// append movies by genre
function appendMoviesByGenre(moviesByGenre) {
  // TODO: append movies using a for-of loop
}


// =========== Loader functionality =========== //

function showLoader(show) {
  let loader = document.querySelector('#loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}

fetchMovies();