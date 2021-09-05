import React from "react";
import "./newsitem.css";

export default function NewsItem(props) {
  const { singleNewsItem } = props;
  return (
    <>
      <div className="newsItem">
        <h1>{singleNewsItem ? singleNewsItem.title : "No news Item"}</h1>
        <p>{singleNewsItem ? singleNewsItem.contents : "No content"}</p>
      </div>
    </>
  );
}
