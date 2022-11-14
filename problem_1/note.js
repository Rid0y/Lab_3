
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

    //making color
    let colorbutton = document.getElementById("color");
    noteText.style.backgroundColor = colorbutton.value
   
    newNote.appendChild(deletebutton);

}


function deleteNote(note){
    note.remove();
}



/*
<ul id=notes>
    <li><textarea>
</ul>
 */