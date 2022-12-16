let input = document.querySelector('#input');
let notes = document.querySelector('.notes');
let string = '';

document.addEventListener('DOMContentLoaded', generateNote)
function addNote () {
    string += `${input.value} <br>`;
    notes.innerHTML = string;
    localStorage.setItem(notes, string)

}

function generateNote (){
    notes.innerHTML = localStorage.getItem(notes)
}