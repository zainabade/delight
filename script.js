const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    })
}) 

function backgroundChanger() {
    if(this.scrollY > this.innerHeight / 1.5) {
        document.body.classList.add("jumbotron-active");
    } else {
        document.body.classList.remove("jumbotron-active");
    }
}



window.addEventListener("scroll", backgroundChanger);


$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
