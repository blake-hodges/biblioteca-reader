


const listBooks = async () => {
    let response = await fetch("/api/books")
    return await response.json()
}


export { listBooks }