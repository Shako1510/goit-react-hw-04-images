import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

import PropTypes from 'prop-types';

export default function ImageGallery(images) {
    console.log(images);
    return (
        <GalleryList>
            {images.map(image => (
                <ImageGalleryItem key={image.id} image={image} />
            ))}
        </GalleryList>
    );
};



ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
};