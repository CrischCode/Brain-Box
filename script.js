let notes = []

function loadNotes() {
    const saveNotes = localStorage.getItem('quickNotes')
    return saveNotes ? JSON.parse(saveNotes) : []
}

// para guardar las notas
function saveNote(event) {
    event.preventDefault()

    const title = document.getElementById('noteTitle').value.trim()
    const content = document.getElementById('noteContent').value.trim()

    notes.unshift({
        id: generateId(),
        title: title,
        content: content
    })

    saveNotes()
    renderNotes()
    closeNoteDialog()
}

function renderNotes() {
    const notesContainer = document.getElementById('notesContainer')

    if (notes.length === 0) {
        notesContainer.innerHTML = `
        <div class="empty-state">
            <h2>No notes yet</h2>
            <p>Crea tu primera nota</p>
            <button class="add-note-btn" onclick="openNoteDialog()">+ Add First Note</button>
        </div>
        `
        return
    }

    notesContainer.innerHTML = notes.map(note => `
        <div class="note-card">
            <h3 class="note-title">${note.title}</h3>
            <p class="note-content">${note.content}</p>
        </div> 
    `).join('')
}

function generateId() {
    return Date.now().toString()
}

function saveNotes() {
    localStorage.setItem('quickNotes', JSON.stringify(notes))
}

// abrir y cerrar el dialogo
function openNoteDialog() {
    const dialog = document.getElementById('noteDialog')
    dialog.showModal()
}

function closeNoteDialog() {
    document.getElementById('noteDialog').close()
}

document.addEventListener('DOMContentLoaded', function () {
    notes = loadNotes()
    renderNotes()

    const form = document.getElementById('noteForm')
    if (form) {
        form.addEventListener('submit', saveNote)
    }

    document.getElementById('noteDialog').addEventListener('click', function (event) {
        if (event.target === this) {
            closeNoteDialog()
        }
    })
})
