import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import { useEffect } from 'react';

import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {

    useEffect(() => {
        scrollPage();
    }, [images]);

    const scrollPage = () => {
        const { height: cardHeight } = document
            .querySelector('#gallery')
            .firstElementChild.getBoundingClientRect();

        window.scrollBy({
            top: cardHeight,
            behavior: 'smooth',
        });
    }


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
    images: PropTypes.array,

};

