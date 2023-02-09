import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const reanderdImagea = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{reanderdImagea}</div>;
}

export default ImageList;
