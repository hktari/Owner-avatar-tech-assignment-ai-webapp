"use client";

import React from 'react'
import Container from './Container'
import Grid from './Grid'
import styled from 'styled-components';

const SkeletonCard = styled.div`
    background-color: #e5e7eb;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 244px;
    height: 18rem;
    animation: pulse 1.5s ease-in-out infinite;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const SkeletonImage = styled.div`
    height: 10rem;
    background-color: #d1d5db;
`;

const SkeletonText = styled.div`
    height: 1rem;
    width: 75%;
    background-color: #d1d5db;
    margin-bottom: 0.5rem;
    margin-left: auto;
    margin-right: auto;
`;

const SkeletonButton = styled.div`
    height: 2rem;
    width: 50%;
    background-color: #d1d5db;
    position: absolute;
    bottom: 0.75rem;
    left: 50%;
    transform: translateX(-50%);
`;

const ImageCardLoadingSkeleton = () => {
    return (
        <SkeletonCard>
            <SkeletonImage />
            <SkeletonText />
            <SkeletonButton />
        </SkeletonCard>
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