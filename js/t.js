  let navbar = document.querySelector('.header .flex .navbar');
 
 let menuBtn = document.querySelector('#menu-btn').onclick = () => {

navbar.classList.toggle('active');
 
}

window.onscroll = () =>{
    navbar.classList.remove('active');
     
}  
/*     اخر الشغل على ال header   */
document.querySelectorAll('input[type="number"]').forEach(inputNumber =>{

inputNumber.oninput = () =>{
if(inputNumber.ariaValueMax.length > inputNumber.maxLength) inputNumber.value
= inputNumber.value.slice(0, inputNumber.maxLength);
};
});















 