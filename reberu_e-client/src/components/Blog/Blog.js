import { useContext, useEffect, useState } from 'react';
import { Pagination } from '../Common/Pagination';
import { PolygonSection } from '../Common/PolygonSection';
import { Article } from '../Common/Article';

import styles from './Blog.module.css';
import { BlogEntries } from './BlogEntries';
import { AuthContext } from '../../contexts/AuthContext';

const baseUrl = 'http://localhost:3030/data/topic';

const BlogCreation = {
  title: 'Share about your favorite place!',
  subtitle: 'Tell us the insight information',
  path: '/create-topic',
  btnMsg: 'Create a Topic',
};

export const Blog = () => {

  const { isAuthenticated } = useContext(AuthContext);

  const [article, setArticle] = useState([]);
  const [countTopics, setCountTopics] = useState(0);


  if (!isAuthenticated) {
    BlogCreation.path='/login';
  }

  const countTopicsHandler = () => {
    fetch(`${baseUrl}?count`)
      .then((res) => res.json())
      .then((result) => {
        setCountTopics(result);
      });
  };
  const onPaginateHandler = async (offset, size) => {
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
            <Article dest={'/blogs'} {...x} />
          </div>
        ))}
      </div>
      <BlogEntries blog={article[0]}/>
    </div>
  );
};
