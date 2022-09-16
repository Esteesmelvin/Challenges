export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QXaYXUIJFzIjE0VxmZKOxAoL7cWCK5oT&q=${category}&limit=25&offset=0&rating=g&lang=en`
    const resp= await fetch (url) // invocar apis
    const {data}= await resp.json() // acomodar y sacar lo que se necesita de la api
    const gifs=data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    })
    return gifs
}