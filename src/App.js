import React from 'react';
import Header from './Header.js';
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";
import './App.css';
// import Login from "./Login.js";
// import { useSelector } from 'react-redux';
// import { selectUser } from "./features/counter/userSlice.js";

function App() {

  // const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>

    </div>
  );
}

export default App;
