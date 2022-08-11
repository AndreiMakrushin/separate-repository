const eBtn = document.getElementById('e_btn');
eBtn.style="display: none;"
//------------------------------------------------------------

const btn = document.getElementById('btn');
const text = document.getElementById('text');
const square = document.getElementById('square');

btn.addEventListener('click', function(){
    square.style.background = `${text.value}`;
    text.value = ''
});
//-------------------------------------------------------------

const range = document.getElementById('range');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');

range.addEventListener ('input', e => {
    span.textContent = e.target.value + "%";
    circle.style.height = `${span.textContent}`;
    circle.style.width = `${span.textContent}`;
    
});

