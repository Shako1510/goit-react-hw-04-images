import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
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

// 
