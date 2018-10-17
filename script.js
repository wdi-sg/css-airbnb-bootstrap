const guidebookClick = document
  .getElementById("see-guidebooks")
  .addEventListener("click", () => {
    alert("This function is not ready yet.");
  });

const destinationClick = document
  .getElementById("see-destinations")
  .addEventListener("click", () => {
    alert("This function is not ready yet.");
  });

const imageClick = document.getElementsByTagName("img");

for (i in imageClick) {
  imageClick[i].addEventListener("click", () => {
    window.open(
      "https://www.google.com.sg/maps/place/Sonoma,+CA+95476,+USA/@38.291092,-122.4666091,14z/data=!3m1!4b1!4m5!3m4!1s0x8085ac43817b9d77:0x380ed210ee6e045!8m2!3d38.291859!4d-122.4580356?hl=en"
    );
  });
}
