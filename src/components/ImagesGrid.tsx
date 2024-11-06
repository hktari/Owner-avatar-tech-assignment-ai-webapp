"use client"

import React, { useEffect, useState } from 'react'
import { Random } from 'unsplash-js/dist/methods/photos/types'
import { APIErrorPayload, getImages } from '@/services/imagesApi'
import ImageCard from './ImageCard'
import styled from 'styled-components'
import axios, { AxiosError } from 'axios'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
`
const ErrorMessage = styled.h2`
    font-size: 1.5rem;
    text-align: center;
`

const ImagesGrid = () => {
    const [images, setImages] = useState<Random[]>([])
    const query = 'nature'
    const [errorMessage, setErrorMessage] = useState<string>()

    useEffect(() => {
        async function fetchImages() {
            try {
                setImages(await getImages(query))
                setErrorMessage(undefined)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const axiosErr = error as AxiosError
                    const errorMessage = (axiosErr.response?.data as APIErrorPayload).error
                    setErrorMessage(errorMessage)

                } else {
                    setErrorMessage('An error occurred while fetching images. Please try again at a later time')
                }
                console.error(error)
            }
        }
        fetchImages()
    }, [])

    return (
        <Grid>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {images.map((image) => (
                <ImageCard key={image.id} image={image} />
            ))}
        </Grid>
    )
}

export default ImagesGrid