import { useEffect, useState } from 'react';
import { Pagination } from '../Common/Pagination';
import { PolygonSection } from '../Common/PolygonSection';
import { Article } from '../Common/Article';

import styles from './Blog.module.css';

const baseUrl = 'http://localhost:3030/data/topic';

const BlogCreation = {
  title: 'Share about your favorite place!',
  subtitle: 'Tell us the insight information',
  path: '/',
  btnMsg: 'Create a Topic',
};


export const Blog = () => {
  const [article, setArticle] = useState([]);
const [countTopics, setCountTopics] = useState(0);

  const countTopicsHandler = ()=>{
    fetch(`${baseUrl}?count`)
    .then((res) => res.json())
    .then((result) => {
      setCountTopics(result);
    });
    
  }
const  onPaginateHandler = async(offset, size) => {
  const sizeTest = 3;

   countTopicsHandler();


  fetch(`${baseUrl}?offset=${offset}&pageSize=${sizeTest}`)
    .then((res) => res.json())
    .then((result) => {
      setArticle(Object.values(result));
    });
    
};

  return (
    <div>
      <div
        style={{
          marginTop: '125px',
          marginBottom: '25px',
        }}
      >
        <PolygonSection {...BlogCreation} />
      </div>
      <Pagination onPaginateHandler={onPaginateHandler} countTopics={countTopics} />
      <div className={styles['flex-articles']}>
        {article.map((x) => (
          <div key={x._id} className={styles['cardItem']}>
            <Article dest={baseUrl} {...x} />
          </div>
        ))}
      </div>
    </div>
  );
};
