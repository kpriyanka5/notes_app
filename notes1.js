//with including local storage
//getting info from ls
//local storage is used to store the array elements
const addBtn=document.getElementById('add');

const notes=JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach(note =>{
        addNewNote(note);
    });
}
addBtn.addEventListener('click',()=>{
    addNewNote();
});

function addNewNote(text=''){
    const note=document.createElement('div');
    note.classList.add('note');
    note.innerHTML=`
     <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <div class="main ${text ? '' :'hidden'}"></div>
            <textarea  class=" ${text ?'hidden':''}"></textarea>
         </div>
    `;
const editBtn=note.querySelector('.edit');
const deleteBtn=note.querySelector('.delete');
const main=note.querySelector('.main');
const textArea=note.querySelector('textarea');

textArea.value=text;


editBtn.addEventListener('click',()=>{
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
});
deleteBtn.addEventListener('click',()=>{
    note.remove();
})

textArea.addEventListener('input',(e)=>{
    const value=e.target;
    main.innerHTML=value;

    updateLS();
});
    document.body.appendChild(note);
}

function updateLS(){
    const notesText=document.querySelectorAll('textarea');

    const notes=[];

    notesText.forEach(note =>{
        notes.push(note.value);
    });
    localStorage.setItem('notes',JSON.stringify(notes));
    //Json stringify is used to change the value to object
}
