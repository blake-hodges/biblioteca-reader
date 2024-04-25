


const listBooks = async () => {
    try {
        let response = await fetch("/api/books")
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}

// const listAuthors = async () => {
//     let response = await fetch("/api/authors")
//     return await response.json()
// }


export { listBooks }