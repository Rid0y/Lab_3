
 rxjs.fromEvent(document.getElementById('add-btn'),'click')  
 .subscribe(() => addNote()
)

function addNote(){
   
    // create elements
    let newNote = document.createElement("li");
    let noteText = document.createElement("textarea");

    newNote.appendChild(noteText);

    // adds text to paragraph tag
    let text = document.getElementById("message").value;

    noteText.innerHTML = text;

    let createdNote = document.getElementById("notes");
    createdNote.appendChild(newNote);


    //Making delete button
    let deletebutton = document.createElement("button");
    deletebutton.innerHTML = "delete"
    //deletebutton.onclick = () => {deleteNote(newNote)}
   
    //rxjs to delete
    rxjs.fromEvent(deletebutton,'click')  
    .subscribe(() => deleteNote(newNote)
   )

   //Making sub note button
   let createSubNote = document.createElement("button");
   createSubNote.innerHTML = "Sub Note"
  
   
   rxjs.fromEvent(createSubNote,'click')  
    .subscribe(() => Sub_Note_Function(newNote)
   )

   
    //making color
    let colorbutton = document.getElementById("color");
    noteText.style.backgroundColor = colorbutton.value;
   
    newNote.appendChild(deletebutton);
    newNote.appendChild(createSubNote);

    function Sub_Note_Function(){
        //console.log("works");
        let childNote = document.createElement("p");
        childNote.innerHTML="";
        childNote.contentEditable="true"
        childNote.style.backgroundColor = colorbutton.value;
        childNote.style.width = '100px';
        newNote.appendChild(childNote);
        
    }

}



function deleteNote(note){
    note.remove();
}



