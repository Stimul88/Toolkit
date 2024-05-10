import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import {Layout} from "./components";
import {Card, Favourites, Movie, NotFound, Search} from "./pages";

function App() {
  return (
    <div className="container">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Search />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/card" element={<Card />} />
          {/*<Route path="/add" element={<AddPost />} />*/}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
