import './App.scss';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RocketPage } from './pages/RocketPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from './service/getRockets';
import { actions } from './store/rocketSlice';
import { FavouritesPage } from './pages/FavouritesPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getRockets().then((rocketsFromServer => {
      dispatch(actions.set(rocketsFromServer));
    }))
  }, []);
  
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rocket/:id" element={<RocketPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};
