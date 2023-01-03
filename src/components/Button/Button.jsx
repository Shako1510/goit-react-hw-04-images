import { LoadMore } from './Button.styled';
import PropTypes from 'prop-types';


const Button = ({ clickHandle }) => {
    return (
        <LoadMore type="button" onClick={clickHandle}>
            LOAD MORE
        </LoadMore>
    );
};

Button.propTypes = {
    clickHandle: PropTypes.func.isRequired,
}
export default Button;