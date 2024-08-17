// https://exarcheia.com/img/darkened.jpg?v=4

var state = false;

const style = document.getElementsByTagName('style')[0];

async function loadDarkend() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './darkened.jpg', true);
  xhr.responseType = 'blob'; // Указываем, что ожидаем blob (байтовые данные)

  xhr.onload = function () {
    if (xhr.status === 200) {
      const imgUrl = URL.createObjectURL(xhr.response);

      // Находим нужный элемент и устанавливаем background-image
      style.innerHTML += `#one-section > div:last-child::before {background-image: url('${imgUrl}') ; }`;
    }
  };

  xhr.send();
}
async function loadLauncher() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './launcher.jpg', true);
  xhr.responseType = 'blob'; // Указываем, что ожидаем blob (байтовые данные)

  xhr.onload = function () {
    if (xhr.status === 200) {
      const imgUrl = URL.createObjectURL(xhr.response);

      // Находим нужный элемент и устанавливаем background-image
      style.innerHTML += `#launcher{background-image: url('${imgUrl}');}`;
    }
  };

  xhr.send();
}
async function loadShop() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './shop.jpg', true);
  xhr.responseType = 'blob'; // Указываем, что ожидаем blob (байтовые данные)

  xhr.onload = function () {
    if (xhr.status === 200) {
      const imgUrl = URL.createObjectURL(xhr.response);

      // Находим нужный элемент и устанавливаем background-image
      style.innerHTML += `#shop{background-image: url('${imgUrl}');}`;
    }
  };

  xhr.send();
}
async function loadFAQ() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './faq.jpg', true);
  xhr.responseType = 'blob'; // Указываем, что ожидаем blob (байтовые данные)

  xhr.onload = function () {
    if (xhr.status === 200) {
      const imgUrl = URL.createObjectURL(xhr.response);

      // Находим нужный элемент и устанавливаем background-image
      style.innerHTML += `#faq{background-image: url('${imgUrl}');}`;
    }
  };

  xhr.send();
}

async function loadLogo() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './svg.svg', true);
  xhr.responseType = 'blob'; // Указываем, что ожидаем blob (байтовые данные)

  xhr.onload = function () {
    if (xhr.status === 200) {
      const imgUrl = URL.createObjectURL(xhr.response);

      // Находим нужный элемент и устанавливаем background-image
      document.getElementById('header_logo').querySelector('img').src = imgUrl;
      document.getElementById('footer-logo').querySelector('img').src = imgUrl;
    }
  };

  xhr.send();
}

async function main() {
  await loadLogo();
  await loadDarkend();
  await loadLauncher();
  await loadShop();
  await loadFAQ();
  document.getElementsByTagName('preloader')[0].setAttribute('close', '');
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
