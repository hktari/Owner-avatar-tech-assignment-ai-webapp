import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
    background-color: #0070f3;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.2s;
    &:hover {
        background-color: #0050d3;
    }
    `

type Props = {
    onClick: () => void
    isLoading: boolean
}
const Button: FC<PropsWithChildren<Props>> = ({ children, onClick, isLoading }) => {
    return (
        <StyledButton onClick={onClick} disabled={isLoading}>{isLoading ? 'loading...' : children}</StyledButton>
    )
}

export default Button