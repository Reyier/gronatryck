import { Link } from "react-router-dom";
//import slugify from "../../utils/slugify";

const hello = `asd`;

function Card(props) {
    function slugify(text) {
        return text
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with -
          .replace(/[åä]/g, "a") // Replace å and ä with a
          .replace(/ö/g, "o") // Replace ö with o
          .replace(/[^\w\-]+/g, "") // Remove all non-word chars
          .replace(/\-\-+/g, "-") // Replace multiple - with single -
          .replace(/^-+/, "") // Trim - from start of text
          .replace(/-+$/, ""); // Trim - from end of text
      }
      
  return (
    <article className="card">
      <Link to={`/produkter/${props.id}/${slugify(props.name)}`}>
        <figure className="card-image">
          <img
            className="default-image"
            src={props.modelImage.large}
            srcSet={`${props.modelImage.small}, 600w, ${props.modelImage.medium}, 1024w, ${props.modelImage.large}, 1600w,`}
            sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
            alt={props.modelImage.alt}
            loading="lazy"
          />
          <img
            className="hover-image"
            src={props.firstVariantImage.large}
            srcSet={`${props.firstVariantImage.small}, 600w, ${props.firstVariantImage.medium}, 1024w, ${props.firstVariantImage.large}, 1600w,`}
            sizes="(max-width: 600px) 600px, (max-width: 1024px) 1024px, 1600px"
            alt="Tjock vintage infärgad sweatshirt"
            loading="lazy"
          />
        </figure>
      </Link>
      <div className="card-content">
        <header className="card-header">
          <p className="card-category info-text">{props.category}</p>
          <Link to={`/produkter/${props.id}/${slugify(props.name)}`}>
            <h2 className="card-name main-body">{props.name}</h2>
          </Link>
        </header>

        <div className="card-footer">
          <p className="main-body">{props.sizeVariantsCount} olika storlekar</p>
          <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
            <span
              className="circle-color"
              style={{ backgroundColor: props.colorCodes[0] }}
            ></span>
            <span
              className="circle-color"
              style={{ backgroundColor: props.colorCodes[1] }}
            ></span>
            <p className="main-body">
              {" "}
              + {props.variantsCount - 2}{" "}
              {props.variantsCount - 2 > 1 ? "färger" : "färg"} till
            </p>
          </div>
        </div>

        <section className="card-info">
          <p className="card-price .subheading-2">
            Från {props.minPrice},00 SEK
          </p>
        </section>

       
      </div>
    </article>
  );
}

export default Card;
