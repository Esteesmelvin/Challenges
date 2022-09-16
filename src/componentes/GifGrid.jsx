import { GifItem } from "./GifItem"
import { useFetchGifs } from "./useFetchGifs"

export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h2>{category}</h2>
            <div className="card-grid">
                {
                    images.map( (image, key) => { // arreglo.map( (item, index) => { ... })

                        return <GifItem key={key} {...image} ></GifItem> 
                        // return <GifItem key={key} id={image.id} title={image.title} url={image.url} ></GifItem>
                        
                    })
                }
            </div>
        
        </>
    )
}