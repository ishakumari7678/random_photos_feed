import React, { useState, useEffect } from "react";
import "./App.css";

const getRandomImageUrl = () => {
  const width = 300;
  const height = 300;
  const randomNum = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/${width}/${height}?random=${randomNum}`;
};

// Utility function to split array into chunks of 4
const chunkArray = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const initialImages = Array.from({ length: 6 }, () => getRandomImageUrl());
    setImages(initialImages);
  }, []);

  const addNewImage = () => {
    setImages(prev => [...prev, getRandomImageUrl()]);
  };

  const imageChunks = chunkArray(images, 4);

  return (
    <div className="app">
      <div className="grid-wrapper">
        {imageChunks.map((chunk, rowIndex) => (
          <div className="row" key={rowIndex}>
            {chunk.map((url, index) => (
              <img
                src={url}
                alt={`Random ${rowIndex * 4 + index}`}
                key={rowIndex * 4 + index}
                className="image-box"
              />
            ))}
          </div>
        ))}
      </div>
      <button className="add-btn" onClick={addNewImage}>
        Add New Image
      </button>
    </div>
  );
}

export default App;
