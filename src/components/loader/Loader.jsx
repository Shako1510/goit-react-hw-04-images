import { MagnifyingGlass } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

const Loader = () => {
    return (
        <Spinner>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#c0efff'
                color='#e15b64'
            />
        </Spinner>
    );
};

export default Loader;