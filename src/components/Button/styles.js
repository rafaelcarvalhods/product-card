import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 12px;
    font-weight: 350;
    cursor: pointer;
    opacity: 1;
    padding: 0;
    transition: .15s opacity ease;

    &:hover {
        opacity: .50;
    }

`