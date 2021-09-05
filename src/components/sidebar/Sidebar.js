import React, { useEffect, useState } from "react";
import "./sidebar.css";

export default function Sidebar(props) {
  const [categories, setCategories] = useState([]);

  // https://jsonplaceholder.typicode.com/todos
  function getCategories() {
    return fetch("http://localhost:8080/news_categories/get_all").then((data) =>
      data.json()
    );
  }

  const catClickHandler = (category) => {
    props.categoryClickHandler(category);
    let sidebarItems = document.querySelectorAll(".sidebarItem");
    sidebarItems.forEach((item) => {
      item.classList.remove("active");
    });
    let activeDiv = document.querySelector("#category_" + category.name);
    activeDiv.classList.add("active");
  };

  const allNewsClickHandler = (category) => {
    props.allNewsClickHandler();
    let sidebarItems = document.querySelectorAll(".sidebarItem");
    sidebarItems.forEach((item) => {
      item.classList.remove("active");
    });
    let activeDiv = document.querySelector("#category_" + category.name);
    activeDiv.classList.add("active");
  };

  useEffect(function () {
    let mounted = true;
    getCategories().then((items) => {
      if (mounted) {
        console.log(items);
        setCategories(items);
        allNewsClickHandler({ name: "topstories" });
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="sidebarContainer">
      <div className="sidebarItemsContainer">
        <div
          id="category_topstories"
          className="sidebarItem"
          onClick={() => allNewsClickHandler({ name: "topstories" })}
        >
          Top Stories
        </div>
        <hr />
        {categories.map((category) => {
          return (
            <div
              id={"category_" + category.name}
              key={category.name}
              className="sidebarItem"
              onClick={() => catClickHandler(category)}
            >
              {category.name}
            </div>
          );
        })}

        <hr />
        <div className="sidebarItem">Language</div>
        <div className="sidebarItem">Help</div>
        <div className="sidebarItem">Send Feedback</div>
        <div className="sidebarItem">About</div>
        <div className="sidebarItem">Settings</div>
      </div>
    </div>
  );
}
