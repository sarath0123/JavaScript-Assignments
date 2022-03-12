let newTodoInput = document.querySelector('input');
let addTodobutton = document.querySelector('button');
let todolist = document.querySelector('div.todos');
let count=0;
addTodobutton.onclick = function(){
    var input = newTodoInput.value;
    if(input.length>0){
        let paragraph = document.createElement("p")
        paragraph.setAttribute("key", count)
        paragraph.innerHTML = input
        todolist.appendChild(paragraph)
        paragraph.addEventListener('click',function(){
            todolist.removeChild(paragraph)
        })
        count++
    }
}


