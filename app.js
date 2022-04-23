let addToDoBtn = document.getElementById('addToDoBtn')
let toDoContainer = document.getElementById('toDoContainer')
let deleteBtn= document.getElementById('deleteBtn')
let inputField= document.getElementById('inputField')

addToDoBtn.addEventListener("click", displayList);
function displayList(){
    let paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    paragraph.classList.add('todoParagraph');
    toDoContainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click', function(){
        paragraph.style.color="gray"
        paragraph.style.textDecoration="line-through"
    })
    deleteBtn.addEventListener("click",function() {
        toDoContainer.removeChild(paragraph)
        toDoContainer.removeChild(deleteBtn)
    })
}
