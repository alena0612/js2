let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName("contactform_name")[0],
    //получаем элемент с помощью селекторов
    //Команда получает элемент с помощью CSS селектора, только первый элемент на странице, который попал под критерии
    phoneInput = document.querySelector('.contactform_phone'),
    //команда получает все элементы с селектором
    mailInput = document.querySelectorAll('.contactform_mail')[0],
    //два последних элемента более гибкие
    //нужно указывать номер элемента где это необходими
    modal = document.querySelector('.modal'),
    close = document.querySelector(".close"),
    text = document.getElementsByName('message')[0];

function hover(){
  //при наведении на заголовок heading изменялся текст
  //команда меняет текст, который есть внутри этого элемента
  heading.textContent = "Действительно все!"
}

//Когда мышка будет покидать заголовок
function out(){
  heading.textContent = "Все включено!"
}

//назначаем обработчик события с помощью специальной программы
heading.addEventListener("mouseenter", hover);
//когда в коде необходимо будет удалить, то heading.removerEventListener("mouseenter", hover)
//также можно добавлять другие функции heading.addEventListener("mouseenter", <имя функции>)

heading.addEventListener("mouseleave", out);

//модальное окно
receiveBtn.addEventListener('click', function() {
  modal.style.display = "block"
});
// Закрываем модальное окно Х
close.addEventListener('click', function() {
  modal.style.display = "none"
});
//при вводе в input получать значения и передавать в другой input
//событие происходит всегда, когда нажимается какая то клавиша
nameInput.addEventListener("input", function(){
  //получаем значение в данный момент
  text.value = "Меня зовут " + nameInput.value + ". И  я хочу спросить";

  if (nameInput.value == "") {
    text.value = "";
  }
} )

