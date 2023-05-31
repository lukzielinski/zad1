let counter = 0;

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const randomOffers = getRandomElements(data.offers, 4);
    const offerts = document.querySelectorAll(".offert");

    randomOffers.forEach((offer) => {
      createOfferElement(offer, offerts[counter]);
      counter++;
    });
  })
  .catch((err) => console.log(err));

function getRandomElements(array, count) {
  const shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function createOfferElement(offer, container) {
  const { price, currency, imgURL } = offer;

  const div = document.createElement("div");
  div.classList.add("offert-element");
  const imgElement = document.createElement("img");
  const priceElement = document.createElement("span");

  imgElement.classList.add("img");
  priceElement.classList.add("price");

  priceElement.innerText = `${price} ${currency}`;
  imgElement.src = imgURL;

  div.appendChild(imgElement);
  div.appendChild(priceElement);

  container.appendChild(div);
}
