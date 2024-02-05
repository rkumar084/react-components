import { useState } from "react";

function ImageGrid({ images }) {
  //const [images, setImages] = useState([]);
  const imagesStyling = {   columns: '50px 4', padding: '10px'};

  const renderedImages = images.map((image, index) => {
    return <img src={image.urls.small} id={index.id} />;
  });

  return <div style={imagesStyling}>{renderedImages}</div>;
}

export default ImageGrid;
