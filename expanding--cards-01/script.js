const images = document.querySelectorAll(".image");
const description = document.querySelectorAll(".description");
let items = document.getElementById("items");

let imageArray = [];
let descriptionArray = [];

for (let i = 0; i < images.length; i++) {
  const element = images[i];
  imageArray.push(element);
}
for (let i = 0; i < description.length; i++) {
  const element = description[i];
  descriptionArray.push(element);
}

if (window.innerWidth > 900) {
  imageArray.map((image, index) => {
    image.addEventListener("click", () => {
      imageArray.forEach((img) => img.classList.remove("active2"));
      descriptionArray.forEach((des) => des.classList.remove("visibile"));
      imageArray.forEach((img) => img.classList.remove("active"));
      descriptionArray[index].classList.add("visibile");
      image.classList.add("active");
    });
  });
  console.log("900");
} else {
  imageArray.map((image, index) => {
    image.addEventListener("click", () => {
      imageArray.forEach((img) => img.classList.remove("active"));
      descriptionArray.forEach((des) => des.classList.remove("visibile"));
      imageArray.forEach((img) => img.classList.remove("active2"));
      descriptionArray[index].classList.add("visibile");
      image.classList.add("active2");
    });
  });
  console.log("900px");
}
