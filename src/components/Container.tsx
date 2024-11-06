"use client"

import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
`;

const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container