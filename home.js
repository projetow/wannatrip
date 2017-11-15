function fadeInElements() {
  var allElements = document.querySelectorAll('.hide'); // é uma Node list
  var allElementsArr = Array.prototype.slice.call(allElements); // Trasforma a Node list em array

  for(var i = 0; i < allElementsArr.length; i++) {
    var bottom_of_object = allElementsArr[i].offsetTop + allElementsArr[i].offsetHeight; //Descobre o tamanho de cada elemento
    var bottom_of_window = (window.scrollY + window.innerHeight) + 200; // tamanho do window + 200. Explicação abaixo

    if(bottom_of_window > bottom_of_object) { // add 200 ao window pois assim não precisa esperar o window passar totalmente o object
      allElementsArr[i].classList.add('show'); // dá o 'show' um de cada vez
    }
  }
};

window.onscroll = function() {
  //navScroll();
  fadeInElements();
  //scrollPosition(); ver a posição y no console
};
