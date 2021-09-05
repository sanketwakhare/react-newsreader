import React from 'react';
import './newscontainer.css';
import NewsItem from './newsitem/NewsItem';

export default function NewsContainer() {
  return (
    <>
      <div className="newsContainer">
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </>
  );
}
