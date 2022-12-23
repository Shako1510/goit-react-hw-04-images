import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from '../modal/Modal';
import { useState } from 'react';


export function ImageGalleryItem(props) {

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(prevState => !prevState,
        )
    };

    const { largeImageURL, webformatURL, tags } = props.image;

    return (
        <GalleryItem>
            <GalleryItemImage
                src={webformatURL}
                alt={tags}
                onClick={toggleModal}
            />
            {modalOpen && (
                <Modal src={largeImageURL} alt={tags} onClose={toggleModal} />
            )}
        </GalleryItem>
    );

}


export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string,
    }).isRequired,
};

// class ImageGalleryItem extends Component {
//     state = {
//         isModalOpen: false,
//     };

//     toggleModal = () => {
//         this.setState(prevState => ({
//             isModalOpen: !prevState.isModalOpen,
//         }));
//     };

//     render() {
//         const { largeImageURL, webformatURL, tags } = this.props.image;

//         return (
//             <GalleryItem>
//                 <GalleryItemImage
//                     src={webformatURL}
//                     alt={tags}
//                     onClick={this.toggleModal}
//                 />
//                 {this.state.isModalOpen && (
//                     <Modal src={largeImageURL} alt={tags} onClose={this.toggleModal} />
//                 )}
//             </GalleryItem>
//         );
//     }
// }
