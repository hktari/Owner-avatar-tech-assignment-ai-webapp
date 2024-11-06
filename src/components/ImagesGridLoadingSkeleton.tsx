import React from 'react'
import Container from './Container'
import Grid from './Grid'

const ImageCardLoadingSkeleton = () => {
    return (
        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md w-full max-w-[244px] h-72 animate-pulse space-y-4 relative">
            <div className="h-40 bg-gray-300"></div>
            <div className="h-4 w-3/4 bg-gray-300 mb-2 mx-auto"></div>
            <div className="h-8 w-1/2 bg-gray-300 absolute bottom-3 left-1/2 transform -translate-x-1/2"></div>

        </div>
    )
}

const ImagesGridLoadingSkeleton = () => {
    return (
        <Container>
            <Grid>
                {[...Array(12)].map((_, index) => <ImageCardLoadingSkeleton key={index} />)}
            </Grid>
        </Container>

    )
}

export default ImagesGridLoadingSkeleton