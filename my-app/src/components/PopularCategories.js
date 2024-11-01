// PopularCategories component
import { Link } from "react-router-dom";

export default function PopularCategories({ title, categoryList }) {
  console.log(categoryList);

  return (
    <section className="popular-categories">
      {title ? <h2 className="section-heading">{title}</h2> : ""}
      <div className="categories-grid">
        {categoryList.map((item) => {
          return (
            <Link to={item.to} className="category" key={item.label}>
              <img src={item.img} alt={item.alt} />{" "}
              {/* Display category image */}
              <div className="label-with-bg">
                <div className="category-label">{item.label}</div>{" "}
                {/* Display category label */}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
