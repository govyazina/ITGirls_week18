let input = document.querySelector('#input');
let notes = document.querySelector('.notes');
let string = '';
const error = document.querySelector('.error')
document.addEventListener('DOMContentLoaded', generateNote)
function addNote () {
    input.classList.remove('error-active')
    if ( validateNote(input.value) === false){
    showError()}
    else {
    string += `<div>${input.value}</div>`;
    input.value = '';
    notes.innerHTML = string;
    localStorage.setItem('allNotes', string)}

}

let validateNote = (input) => {
    return !!input;
};

function showError () {
    input.classList.add('error-active')
}
function generateNote (){
    string = localStorage.getItem('allNotes');
    notes.innerHTML = string;
}