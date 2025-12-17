let notes = []

// Para abrir y cerrar el dialogo de agregar notas 
function openNoteDialog() {
    const dialog = document.getElementById('noteDialog')
    const titleInput = document.getElementById('noteTitle')
    const contentInput = document.getElementById('noteContent')
    dialog.showModal()
    titleInput.focus()
}

function closeNoteDialog() {
    document.getElementById('noteDialog').close()
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('noteDialog').addEventListener('click', function(event) {
        if(event.target === this) {
            closeNoteDialog()
        }
    })
})

///////