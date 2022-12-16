let input = document.querySelector('#input');
let notes = document.querySelector('.notes');
let string = '';
const error = document.querySelector('.error')

document.addEventListener('DOMContentLoaded', generateNote)
function addNote () {
    // validateNote(input.value);
    string += `<div>${input.value}</div>`;
    input.value = '';
    notes.innerHTML = string;
    localStorage.setItem('allNotes', string)

}

function generateNote (){
    string = localStorage.getItem('allNotes');
    notes.innerHTML = string;
}