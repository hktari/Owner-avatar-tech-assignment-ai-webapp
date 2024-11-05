import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Random } from 'unsplash-js/dist/methods/photos/types'
import Button from './Button'
import { analyzeImage } from '@/services/imagesApi'


const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const CardBody = styled.div`
    padding: 0.5rem;
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
    align-items: center;
`

const Caption = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 0.6rem;
`

const Link = styled.a`
    color: #666;
`
const TagList = styled.ul`
    display: flex;
    gap: 0.2rem;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
`

const TagListItem = styled.li`
    background-color: #f0f0f0;
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

    const imageAnalyzed = tags.length > 0

    const hasPortfolioUrl = !!image.user.portfolio_url

    return (
        <Card>
            <Image width={300} height={200} src={image.urls.regular} alt={image.alt_description || ''} />
            <CardBody>
                <Caption>
                    {hasPortfolioUrl && <Link href={image.user.portfolio_url}>by {image.user.name} </Link>}
                    {hasPortfolioUrl && <>|</>}
                    <Link href={image.links.html}>Unsplash</Link>
                </Caption>
                {!imageAnalyzed && <Button onClick={onAnalyze} isLoading={isAnalyzing}>Analyze</Button>}

                {imageAnalyzed && tags &&
                    <TagList>
                        {tags.map((tag, index) => (
                            <TagListItem key={index}>{tag}</TagListItem>
                        ))}
                    </TagList>
                }
            </CardBody>
        </Card>
    )
}

export default ImageCard