import React, { useEffect, useState } from 'react';
import './sidebar.css';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  function getCategories() {
    return fetch('https://jsonplaceholder.typicode.com/todos').then(data =>
      data.json()
    );
  }

  useEffect(function() {
    let mounted = true;
    getCategories().then(items => {
      if (mounted) {
        console.log(items);
        setCategories(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="sidebarContainer">
      <div className="sidebarItemsContainer">
        <div className="sidebarItem">Top Stories</div>
        <hr />
        {
          // categories.map( (category, index ) => {
          //     return <div className="sidebarItem">
          //       {/* {category.title} */}
          //     </div>
          // })
        }
        <div className="sidebarItem">COVID 19</div>
        <hr />
        <div className="sidebarItem">India</div>
        <div className="sidebarItem">World</div>
        <hr />
        <div className="sidebarItem">Technology</div>
        <div className="sidebarItem">Business</div>
        <div className="sidebarItem">Sports</div>
        <div className="sidebarItem">Entertainment</div>
        <div className="sidebarItem">Science</div>
        <div className="sidebarItem">Health</div>
        <hr />
        <div className="sidebarItem">Help</div>
        <div className="sidebarItem">Send Feedback</div>
        <div className="sidebarItem">About</div>
        <div className="sidebarItem">Settings</div>
        <div className="sidebarItem">User</div>
      </div>
    </div>
  );
}
