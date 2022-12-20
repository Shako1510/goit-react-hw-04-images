import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, alt, src }) {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    function handleKeyDown(event) {
        if (event.code === 'Escape')
            onClose();
    }
    function handleBackdropClick(event) {
        if (event.target === event.currentTarget) onClose();
    };
    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalContainer>
                <img src={src} alt={alt} />
            </ModalContainer>
        </Overlay>,
        modalRoot
    );

}

// export class Modal extends Component {
//     state = {
//         isOpen: false,
//     };

//     componentDidMount() {
//         window.addEventListener('keydown', this.handleKeyDown);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleKeyDown);
//     }

//     handleKeyDown = event => {
//         if (event.code === 'Escape') this.props.onClose();
//     };

//     handleBackdropClick = event => {
//         if (event.target === event.currentTarget) this.props.onClose();
//     };

//     render() {
//         const { src, alt } = this.props;
//         return createPortal(
//             <Overlay onClick={this.handleBackdropClick}>
//                 <ModalContainer>
//                     <img src={src} alt={alt} />
//                 </ModalContainer>
//             </Overlay>,
//             modalRoot
//         );
//     }
// }

Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};