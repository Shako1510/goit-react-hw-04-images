import { LoadMore } from './Button.styled';



const Button = ({ clickHandle }) => {
    return (
        <LoadMore type="button" onClick={clickHandle}>
            завантажити ще
        </LoadMore>
    );
};

export default Button;