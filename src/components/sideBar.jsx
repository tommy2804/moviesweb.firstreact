import React, { useEffect } from 'react';

function SideBar({ setActiveGenre, activeGenre, setElseMovies, allMovies }) {
  useEffect(() => {
    if (activeGenre == 'All') {
      setElseMovies(allMovies);
      return;
    }
    const filtered = allMovies.filter((movie) => movie.genre.includes(activeGenre));
    setElseMovies(filtered);
  }, [activeGenre]);

  return (
    <React.Fragment>
      <>
        <div className="container">
          <ul className="sidebar">
            <li>{/* <span>{props.movieNum} movies</span> */}</li>
            <li>
              <button className="noStylebtn" onClick={() => setActiveGenre('All')}>
                All Movies
              </button>
            </li>
            <li>
              <button className="noStylebtn" onClick={() => setActiveGenre('action')}>
                Action
              </button>
            </li>
            <li>
              <button className="noStylebtn" onClick={() => setActiveGenre('Comedy')}>
                Comedy
              </button>
            </li>
            <li>
              <button className="noStylebtn" onClick={() => setActiveGenre('Drama')}>
                Drama
              </button>
            </li>
            <li>
              <button className="noStylebtn" onClick={() => setActiveGenre('Fantasy')}>
                Fantasy
              </button>
            </li>
            <li>
              <button className="noStylebtn" onClick={() => setActiveGenre('Horror')}>
                Horror
              </button>
            </li>
          </ul>

          <div className="content"></div>
        </div>
      </>
    </React.Fragment>
  );
}

export default SideBar;
