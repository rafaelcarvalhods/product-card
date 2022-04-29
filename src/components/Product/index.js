import airmax from './airmax.json'
import { Container, InfoArea, PhotoArea, ModelLine, Collection, ModelDescription, PriceArea, Price, ActionsArea, SizeArea, ColorsArea } from './styles'
import Button from '../Button'
import { BsFillHandbagFill, BsFillCartFill } from 'react-icons/bs'
import ColorDisplay from '../ColorDisplay'

const Product = () => (
    <Container>
        <PhotoArea>
            <img src={airmax.photos[0]} />
        </PhotoArea>
        <InfoArea>
            <ModelLine>{airmax.model.line}</ModelLine>
            <Collection>{airmax.collection}</Collection>
            <ModelDescription>{airmax.model.description}</ModelDescription>
            <PriceArea>
                <Price>{airmax.price.discountedPrice}</Price>
                <Price scratched={true}>{airmax.price.originalPrice}</Price>
            </PriceArea>
            <SizeArea>
                Size
                {
                    airmax.model.sizes.map(
                        size => <Button>{size}</Button>
                    )
                }
            </SizeArea>
            <ColorsArea>
                Color
                {
                    airmax.model.colors.map(
                        color => <ColorDisplay color={color.hex} />
                    )
                }
            </ColorsArea>   
            <ActionsArea>
                <Button
                    onClick={() => {}}
                    icon={ <BsFillHandbagFill /> }>
                    Buy Now
                </Button>
                <Button
                    onClick={() => {}}
                    icon={ <BsFillCartFill /> }>              
                    Add to Cart
                </Button>
            </ActionsArea>
        </InfoArea>
    
    </Container>
)

export default Product