import React, { } from 'react'
import { Random } from 'unsplash-js/dist/methods/photos/types'
import Grid from './Grid'
import ImageCard from './ImageCard'

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