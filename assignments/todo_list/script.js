
let todoAll = document.querySelector('.all');
let todoCompleted = document.querySelector('.completed');
let todoPending = document.querySelector('.pending');
let todoList =  document.querySelector('#box');


fetchtodo();
async function fetchtodo(){
    let output=await fetch('https://jsonplaceholder.typicode.com/todos')
    let data=await output.json()
        todoAll.addEventListener("click",()=>{
            loadItems(data)
        });
        todoCompleted.addEventListener("click",()=>{
            let comptodo=data.filter(e=>e.completed)
            loadItems(comptodo)
        })
        todoPending.addEventListener("click",()=>{
            let pendtodo=data.filter(e=>!e.completed)
            loadItems(pendtodo)
        })   
}



function loadItems(data){
    let result=''
    data.forEach((todo)=>{
        let checker
        if (todo.completed){
            checker="true";
        }
        else{
            checker="false";
        }
        result+=`<div class="whole_value">
                <h4>${todo.title}</h4>
                <p>Userid=${todo.userId}</p>
                <p>Id=${todo.id}</p>
                <p>status=${checker}</p>
                <br>
                </div>
                `
    });
    todoList.innerHTML=result
}


