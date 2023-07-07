const addNoteBtn = document.getElementById('add-item');
const notesWrapper = document.getElementById('main');

if (localStorage) {
    const lcsLength = localStorage.length;
    console.log(lcsLength);
    for (let i = 0; i < lcsLength; i++){
        const getNoteText = localStorage.getItem(localStorage.key(i));
        const domEl = `
        <div class="tool-set">
            <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
            <div class="delete"><i class="fa-solid fa-trash"></i></div>
        </div>
        <div class="wrap-note">
            <div class="note-area">
                <textarea id="note-text" placeholder="Type something..." disabled cols="30" rows="8">${getNoteText}</textarea>
            </div>
            <button id="save-btn">SAVE</button>
        </div>`;
        const createDiv = document.createElement('div');
        createDiv.classList.add('note-item');
        createDiv.id = localStorage.key(i);
        createDiv.innerHTML = domEl;
        notesWrapper.prepend(createDiv);
    }
}
// Dom element for note item
const storageDataLen = localStorage.length;
let noteCounter = storageDataLen;
function domElement(itemNumber)
{
    const domEl = `
        <div class="tool-set">
            <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
            <div class="delete"><i class="fa-solid fa-trash"></i></div>
        </div>
        <div class="wrap-note">
            <div class="note-area">
                <textarea id="note-text" placeholder="Type something..." cols="30" rows="8"></textarea>
            </div>
            <button id="save-btn">SAVE</button>
        </div>`;

    const createDiv = document.createElement('div'); // Create new div element
    createDiv.classList.add('note-item'); // Add class to new div element
    createDiv.id = itemNumber; // Add identity number every note item
    createDiv.innerHTML = domEl;

    notesWrapper.prepend(createDiv);
}

// Add new button handler
addNoteBtn.addEventListener('click', function ()
{
    noteCounter++; // Give a identity number for every note for set local storage key
    domElement(noteCounter); // Load new note dom element by click add new
    
    // Note save config
    const saveBtn = document.getElementById('save-btn');
    const noteAreaText = document.getElementById('note-text');
    const noteItemIdentity = document.querySelector('.note-item').id;
    console.log(saveBtn);
    // Save note event handler
    saveBtn.addEventListener('click', function ()
    {
        console.log(noteAreaText.value);
        if (!localStorage.getItem(noteItemIdentity)) {
            localStorage.setItem(noteItemIdentity, noteAreaText.value);
        }else{alert('already exist')}
    })
});

