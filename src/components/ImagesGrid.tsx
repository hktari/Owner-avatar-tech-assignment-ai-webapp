"use client"

import React, { useEffect, useState } from 'react'
import { Random } from 'unsplash-js/dist/methods/photos/types'
import { getImages } from '@/services/imagesApi'
import ImageCard from './ImageCard'
import styled from 'styled-components'

type Props = {}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
`

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
        <Grid>
            {images.map((image) => (
                <ImageCard key={image.id} image={image} />
            ))}
        </Grid>
    )
}

export default ImagesGrid