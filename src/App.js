import React from 'react';
import './style.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import NewsContainer from './components/news/newscontainer/NewsContainer';

export default function App() {
  return (
    <React.Fragment>
      <div className="appContainer">
        <Topbar />
        <Sidebar />
        <div className="bodyContainer">
          <main className="mainContainer">
            <section>
              <NewsContainer />
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
