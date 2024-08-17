// https://exarcheia.com/img/darkened.jpg?v=4

var state = false;

const style = document.getElementsByTagName('style')[0];

async function loadImage(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    xhr.onload = function () {
      if (xhr.status === 200) {
        const imgUrl = URL.createObjectURL(xhr.response);
        resolve(imgUrl);
      } else {
        reject(`Failed to load image: ${url}`);
      }
    };

    xhr.onerror = () => reject(`Network error for image: ${url}`);
    xhr.send();
  });
}

async function setBackgroundImage(selector, url) {
  const imgUrl = await loadImage(url);
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      style.innerHTML += `${selector}{background-image: url('${imgUrl}');}`;
      resolve();
    };
  });
}

async function setLogoImage(selector, url) {
  const imgUrl = await loadImage(url);
  return new Promise((resolve) => {
    const img = document.querySelector(selector);
    img.src = imgUrl;
    img.onload = () => resolve();
  });
}

async function loadDarkend() {
  await setBackgroundImage('#one-section > div:last-child::before', './darkened.jpg');
}

async function loadLauncher() {
  await setBackgroundImage('#launcher', './launcher.jpg');
}

async function loadShop() {
  await setBackgroundImage('#shop', './shop.jpg');
}

async function loadFAQ() {
  await setBackgroundImage('#faq', './faq.jpg');
}

async function loadLogo() {
  await Promise.all([setLogoImage('#header_logo img', './svg.svg'), setLogoImage('#footer-logo img', './svg.svg')]);
}

async function main() {
  await loadLogo();
  await Promise.all([loadDarkend(), loadLauncher(), loadShop(), loadFAQ()]);
  document.querySelector('preloader').setAttribute('close', '');
}

window.onload = () => {
  main();
};

Array.from(document.getElementsByTagName('a')).forEach((elem) => {
  elem.onclick = (e) => {
    e.preventDefault();
  };
});

const inputElement = document.getElementById('header_search').querySelector('input');
const searchListElement = document.querySelector('#search-list');
document.querySelector('#search-list');

inputElement.addEventListener('focus', (e) => {
  searchListElement.setAttribute('open', '');
});

const closeSearchList = () => searchListElement.removeAttribute('open');

window.addEventListener('click', (e) => {
  if (inputElement.value.length == 0 && e.target != searchListElement && e.target != inputElement) {
    closeSearchList();
  } else if (e.target != searchListElement && e.target != inputElement) {
    console.log(inputElement.value.length, e.target == searchListElement);
    closeSearchList();
  }
});

const menuButton = document.getElementById('open-menu');
const menuElement = document.getElementById('menu');
