"use client";
import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{ variant: 'primary' | 'error' }>`
    background-color: ${({ variant }) => (variant === 'primary' ? '#0070f3' : '#ff4d4f')};
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: ${({ variant }) => (variant === 'primary' ? '#0050d3' : '#d43f3a')};
    }
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`

type Props = {
    onClick: () => void
    isLoading: boolean
    variant: 'primary' | 'error'
}
const Button: FC<PropsWithChildren<Props>> = ({ variant, children, onClick, isLoading }) => {
    return (
        <StyledButton variant={variant} onClick={onClick} disabled={isLoading}>{isLoading ? 'loading...' : children}</StyledButton>
    )
}

export default Button