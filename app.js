const b = document.querySelector('button.button--no')
b.addEventListener("mouseover", moveHover)

function moveHover(){
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;

    b.style.left=i+"px"
    b.style.top=j+"px"
}
const yes = document.getElementById('yes');

yes.addEventListener("click", function handleClick() {
    yes.innerHTML = 'Then its a date! <33';

});




