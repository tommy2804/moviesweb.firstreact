import React, { Redirect, Route, Switch } from 'react';
import { Prop } from './movie';

function Movies({ movies, myDelete, addToFavorites, fillheart, addObj, number1, number2 }) {
  let temp = movies.slice(number1, number2);
  return (
    <>
      <div className="movie-container">
        {temp.map((val) => (
          <Prop
            key={val.id}
            name={val.name}
            id={val.id}
            genre={val.genre}
            length={val.length}
            mydelete={() => myDelete(val.id)}
            fillheart={() => fillheart(val.id)}
            isLike={val.isLike}
            poster={val.poster}
            reting={val.rating}
          />
        ))}
      </div>
      <p className="ms-3"> there are {movies.length} Movies</p>
    </>
  );
}

export default Movies;
