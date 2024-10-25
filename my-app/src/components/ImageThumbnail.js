import React from "react";

export default function ImageThumbnail({ id, alt, path, handleClick }) {
  return (
    <figure className="thumbnail-image">
      <picture
        onClick={() => {
          handleClick(id);
        }}
      >
        <source
          srcSet={`${path}-small.webp 600w, ${path}-medium.webp 1024w, ${path}.webp 1600w`}
          type="image/webp"
          sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
        />
        <source
          srcSet={`${path}-small.jpg 600w, ${path}-medium.jpg 1024w, ${path}.jpg 1600w`}
          type="image/jpeg"
          sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
        />
        <img
          src={`${path}.jpg`} // Fallback
          alt={alt}
          loading="lazy"
        />
      </picture>
    </figure>
  );
}

/* {combinedImages.map((image, index) => (
  <ImageThumbnail
    key={image.alt}
    id={index}
    alt={image.alt}
    path={image.baseBath}
    handleClick={changeMainImage}
  />
))} */
