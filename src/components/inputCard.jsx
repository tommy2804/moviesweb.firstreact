import React, { useContext } from 'react';
import NavBar from './navBar';
import { useNavigate, Navigate } from 'react-router-dom';

const InputCard = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const handleSubmit = (event) => {
    let ids = 18;
    event.preventDefault();
    const id = event.target.movieId.value;
    const name = event.target.movieName.value;
    const length = event.target.movieLength.value;
    const genre = event.target.movieGenre.value;

    const newMovie = [
      {
        id: ids++,
        name,
        length,
        genre,
        isLike: false,
      },
    ];
    localStorage.setItem('newMovie', JSON.stringify(newMovie));
  };

  return (
    <>
      <NavBar />
      <form action="" onSubmit={handleSubmit}>
        <div class="InputCard">
          <div class="tools"></div>
          <div class="InputCard__content">
            <ul>
              <li className="m-3">
                <div className="group">
                  <input
                    type="text"
                    className="inputin"
                    name="movieId"
                    placeholder="movie id"
                    // ref={(node) => (inputNode = node)}
                  />
                  <span className="bar"></span>
                  <label htmlFor=""></label>
                </div>
              </li>

              <li className="m-3">
                <div className="group">
                  <input
                    type="text"
                    className=" form-control inputin"
                    name="movieName"
                    placeholder="enter the movie name"
                    id="form1"
                  />
                  <span className="bar"></span>
                  <label className="form-label" htmlFor="form1"></label>
                </div>
              </li>
              <li className="m-3">
                <div className="group">
                  <label htmlFor=""></label>
                  <input
                    type="text"
                    className="inputin"
                    name="movieLength"
                    placeholder="how long is the movie? (in minutes)"
                  />
                  <span className="bar"></span>
                </div>
              </li>
              <li className="m-3">
                <div className="group">
                  <label htmlFor=""></label>
                  <select
                    type="select"
                    className="inputin"
                    name="movieGenre"
                    placeholder="what is the
                    movies genre?">
                    <option value="">choose</option>
                    <option value="action">action</option>
                    <option value="drama">drama</option>
                    <option value="comedy">comedy</option>
                    <option value="fantasy">fantasy</option>
                    <option value="horror">Horror</option>
                  </select>
                </div>
              </li>
              <button type="submit">Submit Movie</button>
              <button className="noStylebtn" onClick={navigateHome}>
                <div className="alert alert-dark">
                  click here and submit movie and see movie list
                </div>
              </button>
            </ul>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputCard;
