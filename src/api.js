


const listBooks = async () => {
    try {
        let response = await fetch("/api/books")
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}

const listAuthors = async () => {
    try {
        let response = await fetch("/api/authors")
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}

const listBooksByAuthor = async (url) => {
    try {
        let response = await fetch(url)
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}


export { listBooks, listAuthors, listBooksByAuthor }