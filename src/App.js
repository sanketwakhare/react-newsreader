import React, { useState } from 'react';
import './style.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import NewsContainer from './components/news/newscontainer/NewsContainer';

export default function App() {
  const [currentCategory, setCurrentCategory] = useState({
    id: 1,
    name: 'covid19'
  });

  const [news, setNews] = useState([]);

  const getNews = category => {
    return fetch(
      'http://localhost:8080/news/get_news_by_cat_name?catId=' + category.id
    ).then(data => data.json());
  };

  const getAllNews = () => {
    return fetch('http://localhost:8080/news/get_all').then(data =>
      data.json()
    );
  };

  const categoryClickHandler = category => {
    console.log(category);
    setCurrentCategory(category);

    // get all news with selected category
    getNews(category).then(newsItems => {
      console.log(newsItems);
      setNews(newsItems);
    });
  };

  const allNewsClickHandler = () => {
    getAllNews().then(newsItems => {
      console.log(newsItems);
      setNews(newsItems);
    });
  };

  return (
    <React.Fragment>
      <div className="appContainer">
        <Topbar />
        <Sidebar
          currentCategory={currentCategory}
          categoryClickHandler={categoryClickHandler}
          allNewsClickHandler={allNewsClickHandler}
        />
        <div className="bodyContainer">
          <main className="mainContainer">
            <section>
              <NewsContainer currentCategory={currentCategory} news={news} />
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
