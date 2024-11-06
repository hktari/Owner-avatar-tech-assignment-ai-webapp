import React, { useEffect, useState } from 'react'
import { Random } from 'unsplash-js/dist/methods/photos/types'
import { getImages } from '@/services/imagesApi'
import ImageCard from './ImageCard'
import styled from 'styled-components'
import Grid from './Grid'

// const Grid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//     gap: 1rem;
// `

type Props = {
    images: Random[]
}
const ImagesGrid = ({ images }: Props) => {
    return (
        <Grid>
            {images.map((image) => (
                <ImageCard key={image.id} image={image} />
            ))}
        </Grid>
    )
}

export default ImagesGrid