"use strict";

// document.getElementById("test-button").addEventListener("click", function () {
//   const links = document.querySelectorAll(".titles a");
//   console.log(links);
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

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);

  let html = "";
  console.log(html);

  for (let article of articles) {
    /* get the article id - odczytaj jego id i zapisz je do stałej */
    const articleId = article.getAttribute("id");

    /* find the title element - znajdź element z tytułem i zapisz jego zawartość do stałej*/
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element - na podstawie tych informacji stwórz kod HTML linka i zapisz go do stałej */
    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      "</span></a></li>";

    console.log(linkHTML);

    /* insert link into titleList */
    html = html + linkHTML;
  }
  titleList.innerHTML = html;

  const links = document.querySelectorAll(".titles a");

  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }
}

generateTitleLinks();

// function generateTitleLinks() {
//   /* remove contents of titleList */

//   /* pobieramy liste linkow do artykulu, sekcja z lewej */
//   const titleList = document.querySelector(optTitleListSelector);

//   titleList.innerHTML = "";
//   console.log(titleList);

//   /* for each article - pobieramy kazdy artykul*/
//   const articles = document.querySelectorAll(optArticleSelector);

//   let html = "";

//   for (let article of articles) {
//     /* get the article id odczytaj jego id i zapisz je do stałej*/

//     const articleId = article.getAttribute("id");
//     /* find the title element znajdź element z tytułem i zapisz jego zawartość do stałej*/
//     /* get the title from the title element na podstawie tych informacji stwórz kod HTML linka i zapisz go do stałej*/
//     const articleTitle = article.querySelector(optTitleSelector).innerHTML;
//     const linkHTML =
//       '<li><a href="#' +
//       articleId +
//       '"><span>' +
//       articleTitle +
//       "</span></a></li>";

//     /* create HTML of the link wstaw stworzony kod HTML do listy linków w lewej kolumnie*/
//     titleList.innerHTML = titleList.innerHTML + linkHTML;
//     console.log(articleTitle);

//     /* insert link into titleList */
//     html = html + linkHTML;
//   }

//   titleList.innerHTML = html;
// }

// generateTitleLinks();
