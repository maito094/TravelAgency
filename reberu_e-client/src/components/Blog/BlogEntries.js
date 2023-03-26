import { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';

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
      className="tm-section tm-section-pad tm-bg-img"
      id="tm-section-5"
      style={{
        backgroundImage: `linear-gradient(rgba(74, 74, 66, 0.703),  rgba(167, 165, 146, 0.708)), url(${initialBlogEntry?.img ?? ''})`,
      }}
    >
      <div className="row tm-flex-align-center tm-media-body-v-center">
        <div className="col-xs-12 col-md-12 col-lg-9 col-xl-9 tm-media-title-container">
          <h2 className="text-uppercase tm-section-title-2">{initialBlogEntry?.Continent ?? ''}</h2>
          <h3 className="tm-color-primary tm-font-semibold tm-section-subtitle-2">{initialBlogEntry?.title ?? ''}</h3>
        </div>
        <div className=" mt-0 mt-sm-3 ">
          <div className="ml-auto tm-bg-white-shadow tm-pad tm-media-container ">
            <article className="media tm-margin-b-20 tm-media-1">
              <img className="media tm-margin-b-20 tm-media-1" src={initialBlogEntry?.img ?? ''} alt="" style={{ height: '250px' }} />
              <div className="media-body tm-media-body-1 tm-media-body-v-center">
                <h3 className="tm-font-semibold tm-color-primary tm-article-title-3">
                  Suspendisse vel est libero sem phasellus ac laoreet
                </h3>
                <p style={{ color: 'whitesmoke' }}>{initialBlogEntry?.description ?? ''}</p>
              </div>
            </article>

            <article className="media tm-margin-b-20 tm-media-1 flex-row justify-content-between tm-media-body-v-center flex-wrap">
              <h3 className='font-weight-bold tm-color-primary' style={{maxWidth:"200px", minWidth:"200px"}}>Things to do around:</h3>
              {initialBlogEntry?.Do?.map((x) => {
                return <BlogCard key={x.name} {...x} />;
              }) ?? ''}
            </article>
            <article className="media tm-margin-b-20 tm-media-1 flex-row justify-content-between tm-media-body-v-center flex-wrap">
              <h3 className='font-weight-bold tm-color-primary' style={{maxWidth:"200px", minWidth:"200px"}}>Where to stay:</h3>
              {initialBlogEntry?.Stay?.map((x) => {
                return <BlogCard key={x.name} {...x} />;
              }) ?? ''}
            </article>
            <article className="media tm-margin-b-20 tm-media-1 flex-row justify-content-between tm-media-body-v-center flex-wrap">
              <h3 className='font-weight-bold tm-color-primary' style={{maxWidth:"200px", minWidth:"200px"}}>What to eat:</h3>
              {initialBlogEntry?.Eat?.map((x) => {
                return <BlogCard key={x.name} {...x} />;
              }) ?? ''}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
