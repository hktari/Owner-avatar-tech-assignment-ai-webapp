import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Random } from 'unsplash-js/dist/methods/photos/types'
import Button from './Button'
import { analyzeImage } from '@/services/imagesApi'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Caption = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 0.6rem;
`

const Link = styled.a`
    color: #666;
`

type Props = {
    image: Random
}

const ImageCard = ({ image }: Props) => {

    const [tags, setTags] = useState<string[]>([])
    const [isAnalyzing, setIsAnalyzing] = useState(false)

    const onAnalyze = async () => {
        try {
            setIsAnalyzing(true)
            setTags(await analyzeImage(image.urls.regular))
        } catch (error) {
            // TODO: display user friendly error message
            console.error(error)
            window.alert('Failed to analyze image')
        }
        finally {
            setIsAnalyzing(false)
        }
    }

    return (
        <Container>
            <Image width={300} height={200} src={image.urls.regular} alt={image.alt_description || ''} />
            <Caption>
                {image.user.portfolio_url && <Link href={image.user.portfolio_url}>by {image.user.name} </Link>}
                |
                <Link href={image.links.html}>Unsplash</Link>
            </Caption>
            <Button onClick={onAnalyze} isLoading={isAnalyzing}>Analyze</Button>
        </Container>
    )
}

export default ImageCard