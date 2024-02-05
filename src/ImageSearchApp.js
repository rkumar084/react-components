import {useState} from 'react';
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";
import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID LbaSBpZ-b93UcY72mOTOoXRxKKW_o0bCOXKQrYWj5pw",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

function ImageSearchApp() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const images = await searchImages(term);
    //console.log('no of images ' + images.length);
    setImages(images);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGrid images={images} />
    </div>
  );
}

export default ImageSearchApp;
