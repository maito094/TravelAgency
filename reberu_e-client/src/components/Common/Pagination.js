import { useEffect, useState } from 'react';
import styles from './Pagination.module.css';

export const Pagination = ({ onPaginateHandler, countTopics }) => {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    onPaginateHandler(pageIndex);
  }, [pageIndex]);

  const previousPage = () => {
    setPageIndex((x) => Math.max(0, x - 1));
  };
  const nextPage = () => {
    setPageIndex((x) => x + 1);
  };

  const paginateHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.nodeName === 'A') {
      if (e.target.text === 'Previous') {
        previousPage();
      } else if (e.target.text === 'Next') {
        nextPage();
      } else {
        setPageIndex(Number(e.target.text) - 1);
      }
    }
  };

  return (
    <nav className={styles.paginationSection} aria-label="Page navigation example">
      <ul onClick={paginateHandler} className={`pagination ${styles['ul-nav']}`}>
        <li className={`page-item ${styles['li-index']}`}>
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        {0 <= pageIndex && (
          <li className={`page-item ${styles['li-index']}`}>
            <a className="page-link" href="#">
              {pageIndex + 1}
            </a>
          </li>
        )}
        {countTopics - 3 > pageIndex && (
          <li className={`page-item ${styles['li-index']}`}>
            <a className="page-link" href="#">
              {pageIndex + 2}
            </a>
          </li>
        )}
        {countTopics - 4 > pageIndex && (
          <li className={`page-item ${styles['li-index']}`}>
            <a className="page-link" href="#">
              {pageIndex + 3}
            </a>
          </li>
        )}
        {countTopics - 3 > pageIndex && (
          <li className={`page-item ${styles['li-index']}`}>
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
