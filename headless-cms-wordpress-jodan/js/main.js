"use strict";

async function getData() {
  let response = await fetch("https://wordpress.joachimdanielsen.dk/wp-json/wp/v2/posts?_embed");
  let data = await response.json();
  console.log(data);
  appendPosts(data);
}

getData();

// append wp posts to the DOM
function appendPosts(posts) {
  let template = "";
  for (const post of posts) {
    console.log(post);
    template += /*html*/`
      <article>
        <img src="${post.acf.img}">
        <h2>${post.title.rendered} (${post.acf.year})</h2>
        ${post.acf.description}
        <iframe width="500px" height="300px" src="${post.acf.trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </article>
    `;
  }
  document.getElementById("content").innerHTML = template;
}

// get the featured image url
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}

function createUser() {

}