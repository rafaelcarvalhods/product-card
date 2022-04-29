import { StyledButton } from "./styles";
import PropTypes from 'prop-types'

const Button = (props) => (
    <StyledButton>
        {props.icon}
        {props.children}
    </StyledButton>
)
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.element
}
export default Button;