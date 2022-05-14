function displayAbout(){
    var arrow = document.getElementById('animation');
    arrow.classList.toggle('rotate');
    var display= document.getElementById('about');
    display.classList.toggle('active');
} 

const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){
   
    e.preventDefault();
    const email = document.querySelector("#email");

    const value = email.value;

    console.log(value);
    
})