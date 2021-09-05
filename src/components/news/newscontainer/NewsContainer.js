import React from "react";
import "./newscontainer.css";
import NewsItem from "./newsitem/NewsItem";

export default function NewsContainer(props) {
  return (
    <>
      <div className="newsContainer">
        {props.news.map((newsItem) => {
          return <NewsItem key={newsItem.id} singleNewsItem={newsItem} />;
        })}
      </div>
    </>
  );
}
