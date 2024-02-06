const art = document.getElementById("container");

document.getElementById("open").addEventListener("click", () => {
  art.classList.add("show-nav");
  console.log("open");
});
document.getElementById("close").addEventListener("click", () => {
  art.classList.remove("show-nav");
  console.log("close");
});
