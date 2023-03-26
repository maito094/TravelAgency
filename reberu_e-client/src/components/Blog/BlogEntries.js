import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:3030/data/topic';

export const BlogEntries = () => {
  const [initialBlogEntry, setInitialBlogEntry] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}?_createdOn%20desc`)
      .then((res) => res.json())
      .then((result) => {
        console.log(Object.values(result)[0]);
        setInitialBlogEntry(Object.values(result)[0]);
      });
  }, []);

  return (
    <div
      className="tm-section tm-section-pad tm-bg-img "
      id="tm-section-5"
      style={{
        backgroundImage: `linear-gradient(rgba(74, 74, 66, 0.703),  rgba(167, 165, 146, 0.708)), url(${initialBlogEntry?.img ?? ''})`,
      }}
    >
      <div className="container ie-h-align-center-fix">
        <div className="row tm-flex-align-center">
          <div className="col-xs-12 col-md-12 col-lg-3 col-xl-3 tm-media-title-container">
            <h2 className="text-uppercase tm-section-title-2">{initialBlogEntry?.Continent ?? ''}</h2>
            <h3 className="tm-color-primary tm-font-semibold tm-section-subtitle-2">{initialBlogEntry?.title ?? ''}</h3>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-9 col-xl-9 mt-0 mt-sm-3">
            <div className="ml-auto tm-bg-white-shadow tm-pad tm-media-container">
              <article className="media tm-margin-b-20 tm-media-1">
                <img src={initialBlogEntry?.img ?? ''} alt="" style={{ height: '250px' }} />
                <div className="media-body tm-media-body-1 tm-media-body-v-center">
                  <h3 className="tm-font-semibold tm-color-primary tm-article-title-3">
                    Suspendisse vel est libero sem phasellus ac laoreet
                  </h3>
                  <p style={{ color: 'whitesmoke' }}>{initialBlogEntry?.description ?? ''}</p>
                </div>
              </article>
              <article className="media tm-margin-b-20 tm-media-1">
                <img src="img/img-04.jpg" alt="Image" />
                <div className="media-body tm-media-body-1 tm-media-body-v-center">
                  <h3 className="tm-font-semibold tm-article-title-3">Suspendisse vel est libero sem phasellus ac laoreet</h3>
                  <p style={{ color: 'whitesmoke' }}>
                    Duis accumsan sagittis tortor in ultrices. Praesent tortor ante, fringilla ac nibh porttitor, fermentum commodo nulla.
                  </p>
                  <a href="#" className="text-uppercase tm-color-primary tm-font-semibold">
                    Continue reading...
                  </a>
                </div>
              </article>
              <article className="media tm-margin-b-20 tm-media-1">
                <img src="img/img-05.jpg" alt="Image" />
                <div className="media-body tm-media-body-1 tm-media-body-v-center">
                  <h3 className="tm-font-semibold tm-article-title-3">Faucibus dolor ligula nisl metus auctor aliquet</h3>
                  <p style={{ color: 'whitesmoke' }}>
                    Nunc in felis aliquet metus luctus iaculis vel et nisi. Nulla venenatis nisl orci, laoreet ultricies massa tristique id.
                  </p>
                  <a href="#" className="text-uppercase tm-color-primary tm-font-semibold">
                    Continue reading...
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
