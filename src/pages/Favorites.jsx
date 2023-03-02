import React from 'react';

import FavoriteItem from '../components/FavoriteItem';
import { useSelector } from 'react-redux';
import { selectFavs } from '../redux/slices/favoritesSlice';

import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useSelector(selectFavs);

  if (!favorites.length) {
    return (
      <div className="favoritesBlock">
        <div className="withoutFavs">
          <span>Sorry, but you dont have favorites yet</span>
          <p>You can go back and choose something</p>
          <Link to="/">
            <button className="goBackButton">
              <span>Go back</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="favoritesBlock">
      <h2>Favorites</h2>

      <div className="content__items">
        {favorites.map((fav, id) => (
          <FavoriteItem key={id} {...fav} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
