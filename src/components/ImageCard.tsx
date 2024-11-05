import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Random } from 'unsplash-js/dist/methods/photos/types'


const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `


type Props = {
    image: Random
}

const ImageCard = ({ image }: Props) => {
    return (
        <Container>
            <Image width={300} height={200} src={image.urls.regular} alt={image.alt_description || ''} />
        </Container>
    )
}

export default ImageCard