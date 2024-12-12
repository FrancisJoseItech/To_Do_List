document.getElementById("addTaskBtn").addEventListener('click',()=> {
    const textInput= document.getElementById("taskInput")
    const task=textInput.value.trim();
    //console.log(task,"task");

    if(task == ''){
        return alert("Enter a task")
    }

    const li= document.createElement('li') /* creation of li tag*/
    li.classList.add("list-group-item") /*defined class in style is added */
    //li.innerText= task
   

    
    const span = document.createElement('span')
    span.innerText= task
    li.appendChild(span)

    const completed = document.createElement('i')
    completed.classList.add('bi', 'bi-check','fs-4','text-success')
    li.appendChild(completed)

    completed.addEventListener('click',()=>{
        span.classList.toggle('completed')

    })

    const deleteIcon= document.createElement('i')
    deleteIcon.classList.add('bi', 'bi-trash','fs-4','text-danger')
    li.appendChild(deleteIcon)

    deleteIcon.addEventListener('click',()=>{
        li.remove()
    })
    
    document.getElementById("tasklist").appendChild(li)

    textInput.value=''


})