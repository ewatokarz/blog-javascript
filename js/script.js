"use strict";

// document.getElementById("test-button").addEventListener("click", function () {
//   const links = document.querySelectorAll(".titles a");
//   console.log("links:", links);
// });

const titleClickHandler = function (event) {
  event.preventDefault();

  const clickedElement = this;

  console.log("Link was clicked!");
  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  /* add class 'active' to the clicked link */

  console.log("clickedElement:", clickedElement);

  clickedElement.classList.add("active");

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll("article.active");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute("href");
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */

  targetArticle.classList.add("active");
};

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}
console.log(links);

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles";

function generateTitleLinks() {
  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = "";
  console.log(titleList);

  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector);

  for (let article of articles) {
    const articleId = document.getElementById("article");
    console.log(articleId);
  }

  /* get the article id odczytaj jego id i zapisz je do stałej*/

  /* find the title element znajdź element z tytułem i zapisz jego zawartość do stałej*/

  /* get the title from the title element na podstawie tych informacji stwórz kod HTML linka i zapisz go do stałej*/

  /* create HTML of the link wstaw stworzony kod HTML do listy linków w lewej kolumnie*/

  /* insert link into titleList */
}

generateTitleLinks();
