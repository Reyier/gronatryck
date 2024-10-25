import { Link } from "react-router-dom";
import "../styles/searchbar-filter.css";
import slugify from "../utils/slugify";

function Card({
  id,
  name,
  category,
  modelImage,
  firstVariantImage,
  minPrice,
  maxPrice,
  sizeVariantsCount,
  variantsCount,
  colorCodes,
}) {
  const path = modelImage.basePath.replace(/\s/g, "%20");

  const variantPath = firstVariantImage.replace(/\s/g, "%20");

  return (
    <article className="card">
      <Link to={`/produkter/${id}/${slugify(name)}`}>
        <figure className="card-image">
          <picture className="default-image">
            <source
              srcSet={`${path}-small.webp 600w, ${path}-medium.webp 1024w, ${path}.webp 1600w`}
              type="image/webp"
              sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
            />
            <source
              srcSet={`${path}-small.jpg 600w, ${path}-medium.jpg 1024w, ${path}.jpg 1600w`}
              type="image/webp"
              sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
            />
            <img
              src={`${path}.jpg`} // Fallback
              alt={modelImage.alt}
              loading="lazy"
            />
          </picture>
          <picture className="hover-image">
            <source
              srcSet={`${variantPath}-small.jpg 600w, ${variantPath}-medium.webp 1024w, ${variantPath}.webp 1600w`}
              type="image/webp"
              sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
            />
            <source
              srcSet={`${variantPath}-small.jpg 600w, ${variantPath}-medium.jpg 1024w, ${variantPath}.jpg 1600w`}
              type="image/webp"
              sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
            />
            <img
              src={`${path}.jpg`} // Fallback
              alt={name}
              loading="lazy"
            />
          </picture>
        </figure>
      </Link>
      <div className="card-content">
        <header className="card-header">
          <p className="card-category info-text">{category}</p>
          <Link to={`/produkter/${id}/${slugify(name)}`}>
            <h2 className="card-name main-body">{name}</h2>
          </Link>
        </header>

        <div className="card-footer">
          <p className="main-body">{sizeVariantsCount} olika storlekar</p>
          <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
            <span
              className="circle-color"
              style={{ backgroundColor: colorCodes[0] }}
            ></span>
            <span
              className="circle-color"
              style={{ backgroundColor: colorCodes[1] }}
            ></span>
            <p className="main-body">
              {" "}
              + {variantsCount - 2} {variantsCount - 2 > 1 ? "färger" : "färg"}{" "}
              till
            </p>
          </div>
        </div>

        <section className="card-info">
          <p className="card-price .subheading-2">Från {minPrice},00 SEK</p>
        </section>
      </div>
    </article>
  );
}

export default Card;
