
const btn = document.querySelector('#b1') as HTMLButtonElement;
const input = document.querySelector('#inp1') as HTMLInputElement;
const output = document.querySelector('#d1') as HTMLDivElement;
const inputBtn = document.querySelector('#inputBtn') as HTMLDivElement;

let level=0;

btn?.addEventListener('click', (e) => {

    if(input.value=='')
    alert("Please write something");

    else{
   // const div = document.createElement("div") as HTMLDivElement;
    let className=`class+${level}`;
    const div1=document.createElement('div') as HTMLDivElement;
    const done = document.createElement("button") as HTMLButtonElement ;
    done.innerText="Done";
    done.setAttribute("id","dn");
    div1.appendChild(done);
    div1.setAttribute('class','gridDiv');
    div1.setAttribute('class',className);

    const div2=document.createElement('div') as HTMLDivElement;
    const delet = document.createElement("button") as HTMLButtonElement ;
    delet.innerText="Remove";
    delet.setAttribute("id","del");
    div2.appendChild(delet);
    div2.setAttribute('class','gridDiv');
    div2.setAttribute('class',className);

    const div3=document.createElement('div') as HTMLDivElement;
    const span = document.createElement("span") as HTMLSpanElement;
    span.setAttribute('class','sp');
    span.innerText = input.value+" ";
    div3.appendChild(span);
    div3.setAttribute('class','gridDiv');
    div3.setAttribute('class',className);
    // const br = document.createElement("br") as HTMLBRElement;

    const div4=document.createElement('div') as HTMLDivElement;
    const editBtn = document.createElement("button") as HTMLButtonElement;
    //span.setAttribute('class','sp');
    editBtn.innerText = "Edit";
    div4.appendChild(editBtn);
    div4.setAttribute('class','gridDiv');
    div4.setAttribute('class',className);
    // div.appendChild(div3);
    // div.appendChild(div1);
    // div.appendChild(div2);

    // div?.appendChild(document.createElement("br"));
    // div?.appendChild(document.createElement("br"));


    output?.appendChild(div3);
    output?.appendChild(div1);
    output?.appendChild(div2);
    output?.appendChild(div4);

    input.value='';
    
delet?.addEventListener('click', (e) =>{
    const toDelete=document.getElementsByClassName(className);
    for(let i=toDelete.length-1;i>=0;i--)
    toDelete[i].remove();
})
done?.addEventListener('click', (e) =>{
    // const str:any =span.textContent ;
    // document.write(str.strike());

    span.style.textDecoration='line-through';
})

editBtn?.addEventListener('click',()=>{
    input.value=span.innerText;
    const save=document.createElement('button') as HTMLButtonElement;
    save.innerText="Save";
    inputBtn.appendChild(save);

    save.addEventListener('click',()=>{
        span.innerText=input.value;
        inputBtn.removeChild(save);
        input.value='';
    })
})
    level++;
    }

})
