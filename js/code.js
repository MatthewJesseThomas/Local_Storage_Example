let espers/*People*/  = [];
// Buttons//
let submit = document.querySelector('#submit');
let display = document.querySelector('#display');

// Add Event Listener
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let Name = document.querySelector('#firstName').value;
    let Powers = document.querySelector('#surName').value;
    let City = document.querySelector('#email').value;

// Push an Object
    espers.push(
    {
    Name,
    Powers,
    City
    })
    // Local Storage
    localStorage.setItem('data',JSON.stringify(espers));
})
// Display
display.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(
        JSON.parse(localStorage.getItem('data'))
    );
        
})