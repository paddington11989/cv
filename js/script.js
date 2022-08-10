
const button = document.querySelector('.toggle');
const menu = document.getElementById("menu__show");
button.addEventListener('click', function(){
    menu.classList.toggle('menu');
})
const toggle= document.querySelector('.toggle');
toggle.onclick = function(){
    toggle.classList.toggle('active');
}

