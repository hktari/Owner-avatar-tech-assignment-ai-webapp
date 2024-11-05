"use client"

import React, { useEffect, useState } from 'react'
import { Random } from 'unsplash-js/dist/methods/photos/types'
import { getImages } from '@/services/imagesApi'
import ImageCard from './ImageCard'

type Props = {}

const ImagesGrid = (props: Props) => {

    const [images, setImages] = useState<Random[]>([])
    const query = 'nature'

    useEffect(() => {
        // fetch images
        async function fetchImages() {
            try {
                setImages(await getImages(query))
            } catch (error) {
                // TODO: display user friendly error message
                console.error(error)
                window.alert('Failed to fetch images')
            }
        }
        fetchImages()
    }, [])

    return (
        <div>
            {images.map((image) => (
                <ImageCard key={image.id} image={image} />
            ))}
        </div>
    )
}

export default ImagesGrid