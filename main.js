let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() => {
    search.classList.toggle('active'); 
}



let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY >0);
});
var formdata1 = new FormData();
formdata1.append("type", "Vertical Strip");
formdata1.append("tags", "Cappuccino,Espresso, Doppio,Irish,Latte");

var formdata2 = new FormData();
formdata2.append("type", "Horizontal Strip");
formdata2.append("tags","Nescafe,Frisco,Jacobs,Ricoffy,Douwe");

var ajax1 = new XMLHttpRequest();
    ajax1.addEventListener("load", completeHandler1, false);
    ajax1.open("POST", "https://ad.simaneka.com/api/get");
    ajax1.setRequestHeader("authorisation",  "unk63DzzpkMVQX8FTdvpN0KbDYavAzWI");
    ajax1.send(formdata1);

    var ajax2 = new XMLHttpRequest();
    ajax2.addEventListener("load", completeHandler2, false);
    ajax2.open("POST", "https://ad.simaneka.com/api/get");
    ajax2.setRequestHeader("authorisation",  "unk63DzzpkMVQX8FTdvpN0KbDYavAzWI");
    ajax2.send(formdata2);

function completeHandler1(event) {
    var response = JSON.parse(event.target.responseText);
    console.log(response);
    document.querySelector('.advertIMG1').src = response.link;
    document.querySelector('.advertIMG1').alt = response.alt;
    document.querySelector('.anchorElement1').href = response.href;
    document.querySelector('.headerText1').innerHTML = response.message;
}
function completeHandler2(event) {
    var response = JSON.parse(event.target.responseText);
    console.log(response);
    document.querySelector('.advertIMG2').src = response.link;
    document.querySelector('.advertIMG2').alt = response.alt;
    document.querySelector('.anchorElement2').href = response.href;
    document.querySelector('.headerText2').innerHTML = response.message;
}
