import React from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "./config/config";
import Search from "./components/Search/Search";
import { initializeApp } from "firebase/app";
import {useEffect} from 'react';

function App() {
useEffect(()=> {
  const firebaseConfig = {
    apiKey: "AIzaSyDpe9S1L8CxaeD6KCGo1YbqAG2eWfsxMWM",
    authDomain: "news-app-fe41e.firebaseapp.com",
    projectId: "news-app-fe41e",
    storageBucket: "news-app-fe41e.appspot.com",
    messagingSenderId: "732958342800",
    appId: "1:732958342800:web:871fa22b7a71e695af6215"
  };
  initializeApp(firebaseConfig);
}, []);


  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {router.map((path) => (
            <Route
              exact
              key={uuidv4()}
              path={path.path}
              element={
                <News
                  key={path.key}
                  newscategory={path.category}
                  country={path.country}
                />
              }
            />
          ))}
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;