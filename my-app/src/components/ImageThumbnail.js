import React from "react";

function ImageThumbnail(props) {
  return (
    <img
      className="thumbnail-image"
      src={props.large}
      srcSet={`${props.large}, 600w, ${props.large}, 1024w, ${props.large}, 1600w,`}
      sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
      alt={props.alt}
      loading="lazy"
      title={props.alt}
      onClick={() => {
        props.handleClick(props.id);
      }}
    />
  );
}

export default ImageThumbnail;
