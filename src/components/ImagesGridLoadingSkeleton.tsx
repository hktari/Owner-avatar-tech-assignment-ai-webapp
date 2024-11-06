import React from 'react'
import Container from './Container'
import Grid from './Grid'

const ImagesGridLoadingSkeleton = () => {
    return (
        <Container>
            <Grid>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="h-40 bg-gray-300"></div>
                    <div className="p-4">
                        <div className="h-4 w-3/4 bg-gray-300 mb-2"></div>
                        <div className="h-4 w-1/2 bg-gray-300"></div>
                    </div>
                    <div className="p-4">
                        <div className="h-8 w-1/2 bg-gray-300"></div>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="h-40 bg-gray-300"></div>
                    <div className="p-4">
                        <div className="h-4 w-3/4 bg-gray-300 mb-2"></div>
                        <div className="h-4 w-1/2 bg-gray-300"></div>
                    </div>
                    <div className="p-4">
                        <div className="h-8 w-1/2 bg-gray-300"></div>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="h-40 bg-gray-300"></div>
                    <div className="p-4">
                        <div className="h-4 w-3/4 bg-gray-300 mb-2"></div>
                        <div className="h-4 w-1/2 bg-gray-300"></div>
                    </div>
                    <div className="p-4">
                        <div className="h-8 w-1/2 bg-gray-300"></div>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <div className="h-40 bg-gray-300"></div>
                    <div className="p-4">
                        <div className="h-4 w-3/4 bg-gray-300 mb-2"></div>
                        <div className="h-4 w-1/2 bg-gray-300"></div>
                    </div>
                    <div className="p-4">
                        <div className="h-8 w-1/2 bg-gray-300"></div>
                    </div>
                </div>
            </Grid>
        </Container>

    )
}

export default ImagesGridLoadingSkeleton