const myContainer = document.querySelector('.event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const answer = document.querySelector('p');
const mousemove = document.querySelector('.mousemove');



myContainer.addEventListener('click', () => {
 myContainer.style.background = "pink";
 myContainer.style.borderRadius = "240px";

});



btn1.addEventListener('click', () => {
    answer.style.visibility = "visible";
    answer.style.color = "red";

})



btn2.addEventListener('click', () => {
    answer.style.visibility = "visible";
    answer.style.color = "green";

})


window.addEventListener('mousemove', (e) => {
mousemove.style.left = e.pageX + "px";
mousemove.style.top = e.pageY + "px";

});



window.addEventListener('mousedown', () => {
mousemove.style.transform = "scale(2) translate(-25%, -25%)";

});



window.addEventListener('mouseup', () => {
mousemove.style.transform = "scale(1) translate(-50%, -50%)";
mousemove.style.border = "2px solid red";

    });



   
 myContainer.addEventListener('mouseenter', () => {
 myContainer.style.background = "rgba(0, 0, 0, 0.6)";

    });
 
 
 
myContainer.addEventListener('mouseout', () => {
myContainer.style.background = "blue";

    }); 
    
   
    
answer.addEventListener('mouseover', () => { 
answer.style.transform = "rotate(5deg)";

});

//---------------------------------------------------------------
const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

document.addEventListener('keypress', (e) => {
key.textContent = e.key;
if ( e.key === "j"){
    keypressContainer.style.background = "violet";
} else if (e.key === "m") {
    keypressContainer.style.background = "green";
}
});