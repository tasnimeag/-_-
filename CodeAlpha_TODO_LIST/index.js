let task=document.getElementById("task");
let btn=document.getElementById("add");
let tasks=document.querySelector(".all-tasks");
btn.addEventListener("click",()=>{
    if(task.value === "")
    {
        alert("Enter your task, please!");
    }
    else{
        let el=document.createElement('div');
        el.classList.add('task');
        
        /*Add a check button*/ 
        let d=document.createElement('button');
        d.classList.add('done');
        d.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
        el.appendChild(d);
    
        let task1=document.createElement('li');
        task1.innerHTML=`${task.value}`;
        el.appendChild(task1);
    
        /*Add a trash button to task1*/
        let del=document.createElement('button');
        del.classList.add('delete');
        del.innerHTML=`<i class="fa-solid fa-trash"></i>`;
        task1.appendChild(del);
        
        /*Add a date to your task mentioned*/
        let agenda=document.createElement("input");
        agenda.setAttribute("type","date");
        agenda.setAttribute("id","calendrier")
        task1.appendChild(agenda);

        tasks.appendChild(el);
        task.value="";
        d.addEventListener('click',function(){
            this.parentElement.style.textDecoration="line-through";
            
        })
        del.addEventListener('click',function(){
            el.remove();
        })
    }
    
});





























