const baseUrl = `${import.meta.env.VITE_URL}`;
const getAllNote = () => {
    return fetch(baseUrl)
        .then((response) => response.json())
}

const createNote = (newNote) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id: newNote.id ? newNote.id.toString() : Date.now().toString(),
            name: newNote.name,
            number: newNote.number
        })
    })
        .then(response => response.json())
}

const updateNote = ({ id, name, number }) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id: id,
            name: name,
            number: number
        })
    })
        .then(response => response.json())
}

const deleteNote = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
}

export default {
    getAllNote: getAllNote,
    createNote: createNote,
    updateNote: updateNote,
    deleteNote: deleteNote,
}