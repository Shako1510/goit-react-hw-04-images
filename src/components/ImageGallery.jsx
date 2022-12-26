import ImageGalleryItem from './ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
    return (
        <GalleryList>
            {images.map(image => (
                <ImageGalleryItem key={image.id} image={image} />
            ))}
        </GalleryList>
    );
};

export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
};