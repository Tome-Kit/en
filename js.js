function createLink(div, id, href, text) {
  let a = document.createElement("a");
  a.setAttribute("id", id);
  a.setAttribute("href", href);
  a.innerHTML = text;
  let p = document.createElement("p");
  p.appendChild(a);
  div.appendChild(p);
}

function setTargets() {

  let divs = document.getElementsByClassName("csl-entry");
  
  for (let i = 0; i < divs.length; i++) {
    let as = divs[i].getElementsByTagName("a");
    
    for (let j = 0; j < as.length; j++)
    {
       as[j].target = "_blank";
    }
  
  }
  
  document.getElementById("book-edit").target = "GitHub";
  document.getElementById("book-repo").target = "GitHub";
  document.getElementById("book-source").target = "GitHub";
  
  let div = document.getElementById("main-nav").getElementsByTagName("nav")[0].getElementsByClassName("book-extra")[0];
  createLink(div, "book-print", "en.pdf", "View printable book");
  createLink(div, "presentation-selflearning", "selflearning-sciences.html", "Self-learning sciences");
}

window.onload = function () {
  setTargets();
};
