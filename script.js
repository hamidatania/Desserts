document.getElementById("addButton").addEventListener("click", addImage);
document.getElementById("removeButton").addEventListener("click", removeLastImage);
function addImage() {
  const inputField = document.getElementById("imageUrl");
  const captionField = document.getElementById("caption"); 
  const imageUrl = inputField.value.trim();
  const caption = captionField.value.trim(); 
  const errorMessage = document.getElementById("errorMessage");
  const galleryContainer = document.getElementById("gallery");

  if (!imageUrl) {
    errorMessage.style.display = "block";
    return;
  }

  errorMessage.style.display = "none";

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const image = document.createElement("img");
  image.src = imageUrl;

  imageContainer.appendChild(image);
  
  if (caption) { 
    const captionElement = document.createElement("p");
    captionElement.textContent = caption;
    imageContainer.appendChild(captionElement);
  }

  galleryContainer.appendChild(imageContainer);

  inputField.value = ""; 
  captionField.value = ""; 
}

function removeLastImage() {
  const galleryContainer = document.getElementById("gallery");
  const images = galleryContainer.querySelectorAll(".image-container");
  
  if (images.length > 3) {
    galleryContainer.removeChild(images[images.length - 1]);
  }
}

function addCaption() {
  const galleryContainer = document.getElementById("gallery");
  const images = galleryContainer.querySelectorAll(".image-container");

  images.forEach(imageContainer => {
    const caption = document.createElement("p");
    caption.textContent = "Your caption here";
    imageContainer.appendChild(caption);
  });
}
