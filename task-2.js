import galleryitems from "./src/gallery-items.js";

("use·strict");

const creatCard = (items) => {
  const addLi = document.createElement("li");

  addLi.classList.add("gallery__item");

  const addLink = document.createElement("a");

  addLink.classList.add("gallery__link");
  addLink.setAttribute("href", galleryitems[0].original);

  const addImg = document.createElement("img");
  addImg.classList.add("gallery__image");
  addLink.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
  );

  addLink.setAttribute(
    "data-source",
    "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  );

  addLink.setAttribute("alt", "Tulips");

  addLi.append(addLink, addImg);

  const ulRef = document.querySelector(".js-gallery");

  ulRef.appendChild(addLi);

  return addLi;
};

console.log(creatCard(galleryitems[0]));
console.log(creatCard(galleryitems[1]));

// console.log(galleryitems[0].preview);
