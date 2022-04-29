import styled from 'styled-components'

export const Container = styled.article`
    background-color: #2a2f40;
    color: white;
    display: flex;
    flex-direction: row;
`

export const PhotoArea = styled.div`
    background-color: #ff6d39;
    border-radius: 0 50% 50% 0;
    height: 300px;
    width: 300px;
    position: relative;

    & img {
        position: absolute;
        top: -15px;
        height: 300px;
        width: 300px;
    }
`

export const InfoArea = styled.div`
    flex: 1;
    padding: 15px;
`

export const ModelLine = styled.h3`
    color: #ff6d39;
    margin-bottom: 50px;
`

export const Collection = styled.p`
    font-size: 18px;
    margin: 0;
`

export const ModelDescription = styled.p`
    font-size: 26px;
    margin: 0 0 5px 0
`

export const PriceArea = styled.div`
    display: flex;
`

export const Price = styled.p`
    ${({ scratched }) => scratched && `
        text-decoration: line-through;
        text-decoration-color: red;
    `
    }
    &::before {
        content:'$'
    }
    &:first-of-type {
        margin-right: 20px;
    }
`

export const SizeArea = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    & Button {
        margin: 0 10px;
    }

    & Button:first-of-type {
        margin-left: 30px;
    }
`

export const ColorsArea = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    & > div {
        margin-right: 10px;
    }

    & > div:first-of-type {
        margin-left: 25px;
    }
`

export const ActionsArea = styled.div`
    display: flex;

    & Button:first-of-type {
        margin-right: 20px;
    }

`



