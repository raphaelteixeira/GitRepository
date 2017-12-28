var element = document.getElementById('titulo');
console.log(element.innerText);
console.log(element.innerText = "Hello World! JavaScript training is so much fun");
console.dir(element);
console.log(element.innerHTML += " <i>Uhuull!!</i>");
element.outerHTML = '<h2 id="titulo">Hello World! JavaScript training is so much fun <i>Uhuull!!</i></h2>';
var element1 = document.getElementsByClassName('subTitulo')[0];

element1.innerText = "HAHAHA!";