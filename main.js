let shibaUrl = "https://api.thecatapi.com/v1/images/search";
let catImageSource = document.querySelector(".card-img-top");
showShiba = () => {
  fetch(shibaUrl)
    .then((results) => {
      Promise.resolve(results.json()).then((value) => {
        showImage(value);
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
};

showImage = (val) => {
  console.log("val", val);
  imageUrl = val[0].url;
  catImageSource.style.display = "block";
  catImageSource.src = imageUrl;
};
