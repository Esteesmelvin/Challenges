import { useEffect, useState } from "react"
import { getGifs } from "./Fetch";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const _images = await getGifs(category)
        setImages(_images);
    }

    useEffect(()=>{
        getImages();
    },[])

    return {
        images: images,
        isLoading: false
    }
}