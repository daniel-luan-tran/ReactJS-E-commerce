import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({className,imageUrl,style}) => (
  <>
    <LazyLoadImage
      className={className}
      style={style}
      // alt={image.alt}
      // height={image.height}
      src={imageUrl} // use normal <img> attributes as props
      // width={image.width} 
      effect="blur"
      />
    {/* <span>{image.caption}</span> */}
  </>
);

export default MyImage;