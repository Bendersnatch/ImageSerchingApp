import './ImageList.css'
import ImageShow from './ImageShow';

function ImageList({images}) {
    const renderedImages = images.map((image) => {
        return <ImageShow kay={image.id} image={image} />;
    });
    return <div className='image-list'>{renderedImages} </div>;
}

export default ImageList;
