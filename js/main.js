document.addEventListener("DOMContentLoaded", function () {
  //Menu
  var buttonGroupMenu = document.getElementById("buttonGroup");
  buttonGroupMenu.classList.remove("btn-group-vertical");
  buttonGroupMenu.classList.add("btn-group");

  var buttonsMenu = buttonGroup.getElementsByTagName("button");
  for (var i = 0; i < buttonsMenu.length; i++) {
    buttonsMenu[i].classList.add("mr-1", "rounded");
  }

  //Header
  var header = document.getElementById("header");
  header.classList.add("bg-secondary", "text-right", "text-white");

  var buttonHeader = document.getElementById("buttonHeader");
  buttonHeader.classList.remove("btn-primary");
  buttonHeader.classList.add("btn-success");

  //Cards
  var cardAnimais = document.getElementById("cardAnimais");
  var cardTecnologia = document.getElementById("cardTecnologia");
  var cardPessoas = document.getElementById("cardPessoas");
  var cardNatureza = document.getElementById("cardNatureza");

  var parentCard = cardAnimais.parentNode;

  parentCard.removeChild(cardAnimais);
  parentCard.removeChild(cardTecnologia);
  parentCard.removeChild(cardPessoas);
  parentCard.removeChild(cardNatureza);

  parentCard.appendChild(cardNatureza);
  parentCard.appendChild(cardAnimais);
  parentCard.appendChild(cardPessoas);
  parentCard.appendChild(cardTecnologia);

  var buttonCard = document.getElementById("buttonCard");
  buttonCard.classList.add("btn-success");

  //List
  var item1 = document.getElementById("item1");
  item1.classList.remove("active");

  var newItem4 = document.createElement("li");
  newItem4.className = "list-group-item active";
  newItem4.textContent = "Quarto item";

  var newItem5 = document.createElement("li");
  newItem5.className = "list-group-item";
  newItem5.textContent = "Quinto item";

  var list = document.querySelector(".list-group");

  list.appendChild(newItem4);
  list.appendChild(newItem5);
});
