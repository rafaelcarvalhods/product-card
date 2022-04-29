import styled from 'styled-components'

export const StyledContainer = styled.div`
    ${({ color }) => color && `
        background-color: ${color};
    `}

    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: .15s transform ease;
    transform: scale(1);

    &:hover {
        transform: scale(1.2)
    }
`