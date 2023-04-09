import { Link } from "react-router-dom";
import styles from "./Article.module.css";

export const Article =({
  dest,
  title,
  img,
  content,
  _id,
}
)=>{

    return(

        <article className={`tm-bg-white ${styles['flex-articles']}`}>
        <img src={img} alt="" className="img-fluid" />
        <div className={`tm-article-pad ${styles['flex-articles-content']}`}>
          <header>
            <h3 className="text-uppercase tm-article-title-2">{title}</h3>
          </header>
          <p>
            {content}
          </p>
          <Link to={`${dest}/${_id}`} className="text-uppercase btn-primary tm-btn-primary">
            Get More Info.
          </Link>
        </div>
      </article>
    )
}