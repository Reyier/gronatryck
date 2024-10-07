import React, { useState, useEffect } from "react";
import ImageThumbnail from "./ImageThumbnail";

function ProductGallery(props) {
  const [
    { mainImageLarge, mainImageMedium, mainImageSmall, mainImageAlt },
    setMainImage,
  ] = useState({});

  const flattenImagesToArray = (imagesObject) => {
    const flattenedArray = [];

    // Push modelUrl and sizeGuideUrl into the array
    flattenedArray.push(imagesObject.modelUrl);

    // Iterate over the variants and push each variant's images into the array
    imagesObject.variants.forEach((variant) => {
      flattenedArray.push(variant.images);
    });
    flattenedArray.push(imagesObject.sizeGuideUrl);

    return flattenedArray;
  };

  // Flattened images as an array
  const flattenedImagesArray = flattenImagesToArray(props.images);

  useEffect(() => {
    if (flattenedImagesArray.length > 0) {
      const firstVariant = flattenedImagesArray[1];
      setMainImage({
        mainImageLarge: firstVariant.large,
        mainImageMedium: firstVariant.medium,
        mainImageSmall: firstVariant.small,
        mainImageAlt: firstVariant.alt,
      });
    }
  }, [props.images]);

  console.log(flattenedImagesArray);
  function changeMainImage(id) {
    console.log(id);
    setMainImage({
      mainImageLarge: flattenedImagesArray[id].large,
      mainImageMedium: flattenedImagesArray[id].medium,
      mainImageSmall: flattenedImagesArray[id].small,
      mainImageAlt: flattenedImagesArray[id].alt,
    });
  }

  return (
    <div className="product-gallery">
      <div className="main-image">
        <img
          src={mainImageLarge}
          srcSet={`${mainImageSmall}, 600w, ${mainImageMedium}, 1024w, ${mainImageLarge}, 1600w,`}
          sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
          alt={mainImageAlt}
          loading="lazy"
        />
      </div>
      <div className="thumbnail-images">
        {flattenedImagesArray.map((variant, index) => {
          return (
            <ImageThumbnail
              key={index}
              id={index}
              small={variant.small}
              medium={variant.medium}
              large={variant.large}
              alt={variant.alt}
              handleClick={changeMainImage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductGallery;
