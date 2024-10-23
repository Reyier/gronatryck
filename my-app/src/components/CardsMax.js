import { Link } from "react-router-dom";
import "../styles/searchbar-filter.css";
import slugify from "../utils/slugify";

function CardMax({
  id,
  name,
  category,
  modelImages,
  smallImageFormats,
  mediumImageFormats,
  largeImageFormats,
  minPrice,
  maxPrice,
  sizeVariantsLength,
  variantsLength,
  colorCodes,
}) {
  return (
    <article className="card">
      <Link to={`/produkter/${id}/${slugify(name)}`}>
        <figure className="card-image">
          <picture className="default-image">
            <source
              srcSet={`${modelImages.small.formats.webp.replace(
                /\s/g,
                "%20"
              )} 600w, ${modelImages.medium.formats.webp.replace(
                /\s/g,
                "%20"
              )} 1024w, ${modelImages.large.formats.webp.replace(
                /\s/g,
                "%20"
              )} 1600w`}
              type="image/webp"
              sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
            />
            <source
              srcSet={`${modelImages.small.formats.jpg.replace(
                /\s/g,
                "%20"
              )} 600w, ${modelImages.medium.formats.jpg.replace(
                /\s/g,
                "%20"
              )} 1024w, ${modelImages.large.formats.jpg.replace(
                /\s/g,
                "%20"
              )} 1600w`}
              type="image/jpeg"
              sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
            />
            <img
              src={modelImages.large.formats.jpg} // Fallback
              alt={modelImages.alt}
              loading="lazy"
            />
          </picture>

          <picture className="hover-image">
            <source
              srcSet={`${smallImageFormats.webp.replace(
                /\s/g,
                "%20"
              )} 600w, ${mediumImageFormats.webp.replace(
                /\s/g,
                "%20"
              )} 1024w, ${largeImageFormats.webp.replace(/\s/g, "%20")} 1600w`}
              type="image/webp"
              sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
            />
            <source
              srcSet={`${mediumImageFormats.jpg.replace(
                /\s/g,
                "%20"
              )} 600w, ${mediumImageFormats.jpg.replace(
                /\s/g,
                "%20"
              )} 1024w, ${mediumImageFormats.jpg.replace(/\s/g, "%20")} 1600w`}
              type="image/jpeg"
              sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
            />
            <img
              src={largeImageFormats.jpg} // Fallback
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
          <p className="main-body">{sizeVariantsLength} olika storlekar</p>
          <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
            <span
              className="circle-color"
              style={{ backgroundColor: colorCodes[0] }}
            ></span>
            <span
              className="circle-color"
              style={{ backgroundColor: colorCodes[1] }}
            ></span>
            {variantsLength - 2 === 0 ? (
              ""
            ) : (
              <p className="main-body">
                +{variantsLength - 2}
                {variantsLength - 2 > 1 ? " färger" : " färg"} till
              </p>
            )}
          </div>
        </div>

        <section className="card-info">
          <p className="card-price .subheading-2">Från {minPrice},00 SEK</p>
        </section>
      </div>
    </article>
  );
}

export default CardMax;
