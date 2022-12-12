import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Movies from './movies';
import NavBar from './navBar';
import SideBar from './sideBar';

import Paginate from './pagination';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: 'The Dark Knight',
      length: 152,
      rating: 9.0,
      genre: 'action',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    },
    {
      id: 2,

      name: 'The Shawshank Redemption',
      length: 142,
      rating: 9.2,
      genre: 'drama',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    },
    {
      id: 3,
      name: 'The Godfather',
      length: 175,
      rating: 9.2,
      genre: 'drama',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
    },
    {
      id: 4,
      name: 'The Lord of the Rings: The Return of the King',
      length: 201,
      rating: 8.9,
      genre: 'fantasy',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg',
    },
    {
      id: 5,
      name: 'Pulp Fiction',
      length: 154,
      rating: 8.9,
      genre: 'drama',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg',
    },
    {
      id: 6,
      name: 'die hard2',
      genre: 'action',
      length: '2:30',
      rating: 8.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
    },
    {
      id: 7,
      name: 'fast five',
      genre: 'comedy',
      length: '4:20',
      rating: 8.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjExMGE4NDQtM2MwMS00YzhlLTlkYjgtNmExNzM1ZDBhYzg1XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg',
    },
    {
      id: 8,
      name: 'Taken',
      genre: 'comedy',
      length: '1:20',
      rating: 8.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTkxMDczOTM3OF5BMl5BanBnXkFtZTgwNTg1MzM4MDE@._V1_SX300.jpg',
    },
    {
      id: 9,
      name: 'die hard',
      genre: 'drama',
      length: '123',
      rating: 4.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      id: 10,
      name: 'die hard2',
      genre: 'drama',
      length: '42',
      rating: 8.2,
      poster:
        'https://m.media-amazon.com/images/M/MV5BZGFhMGVkY2QtNTUxNy00NTdmLWE3ZDYtMjQyZWYxNzQwMzMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    },
    {
      id: 11,
      name: 'fast five',
      genre: 'drama',
      length: '320',
      rating: 7.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      id: 12,
      name: 'Taken',
      genre: 'action',
      length: '120',
      rating: 5.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
    {
      id: 13,
      name: 'Avengers Assemble',
      rating: 8.7,
      genre: 'action',
      length: 120,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg',
    },

    {
      id: 14,
      name: 'Inception',
      rating: 8.7,
      genre: 'action',
      length: 137,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    },
    {
      id: 15,
      name: 'Goodfellas',
      rating: 8.7,
      genre: 'fantasy',
      length: 57,
      poster:
        'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      id: 16,
      name: 'The Matrix',
      rating: 8.6,
      genre: 'horror',
      length: 147,
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      id: 17,
      name: 'The Matrix Reloaded',
      rating: 8.6,
      genre: 'action',
      length: 167,
      poster:
        'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      id: 18,
      name: 'The Matrix Resurrections',
      rating: 8.6,
      genre: 'fantasy',
      length: 197,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
    },
    {
      id: 19,
      name: 'The Matrix Revolutions',
      rating: 8.6,
      genre: 'drama',
      length: 117,
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      id: 20,
      name: 'The Silence of the Lambs',
      rating: 8.6,
      genre: 'horror',
      length: 159,
      poster:
        'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      id: 21,
      name: 'The Wolf of Wall Street',
      rating: 8.5,
      genre: 'drama',
      length: 151,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
    },
    {
      id: 22,
      name: 'The Witcher: Nightmare of the Wolf',
      rating: 8.5,
      genre: 'comedy',
      length: 155,
      poster:
        'https://m.media-amazon.com/images/M/MV5BY2ViMDQ3NDgtNjFkNy00ZTUzLThmMDYtYTMzY2IyZmYwNWJmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg',
    },
    {
      id: 23,
      name: 'The Wolf Man',
      rating: 8.5,
      genre: 'fantasy',
      length: 137,
      poster:
        'https://m.media-amazon.com/images/M/MV5BODRmMDBjMTYtZmJiZi00Mzk3LWFhZDAtMDExNDFhMWQzNzEyXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg',
    },
    {
      id: 24,
      name: 'The Bugs Bunny/Looney Tunes Comedy Hour',
      rating: 8.5,
      genre: 'comedy',
      length: 127,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMDEwNTAwNjMtNTgwZC00Y2RjLTliOTYtZWI4NGNlNjI4ZTVjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg',
    },
    {
      id: 25,
      name: 'The Broken Hearts Club: A Romantic Comedy',
      rating: 8.4,
      genre: 'fantasy',
      length: 157,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMmZlODkzNmItZmIwZi00OGYxLTkwMjQtMzlhYmYwNjMwNzlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    },
  ]);
  const [elseMovies, setElseMovies] = useState([
    {
      id: 1,
      name: 'The Dark Knight',
      length: 152,
      rating: 9.0,
      genre: 'action',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    },
    {
      id: 2,

      name: 'The Shawshank Redemption',
      length: 142,
      rating: 9.2,
      genre: 'drama',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    },
    {
      id: 3,
      name: 'The Godfather',
      length: 175,
      rating: 9.2,
      genre: 'drama',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
    },
    {
      id: 4,
      name: 'The Lord of the Rings: The Return of the King',
      length: 201,
      rating: 8.9,
      genre: 'fantasy',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg',
    },
    {
      id: 5,
      name: 'Pulp Fiction',
      length: 154,
      rating: 8.9,
      genre: 'drama',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg',
    },
    {
      id: 6,
      name: 'die hard2',
      genre: 'action',
      length: '2:30',
      rating: 8.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
    },
    {
      id: 7,
      name: 'fast five',
      genre: 'comedy',
      length: '4:20',
      rating: 8.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjExMGE4NDQtM2MwMS00YzhlLTlkYjgtNmExNzM1ZDBhYzg1XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg',
    },
    {
      id: 8,
      name: 'Taken',
      genre: 'comedy',
      length: '1:20',
      rating: 8.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTkxMDczOTM3OF5BMl5BanBnXkFtZTgwNTg1MzM4MDE@._V1_SX300.jpg',
    },
    {
      id: 9,
      name: 'die hard',
      genre: 'drama',
      length: '123',
      rating: 4.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      id: 10,
      name: 'die hard2',
      genre: 'drama',
      length: '42',
      rating: 8.2,
      poster:
        'https://m.media-amazon.com/images/M/MV5BZGFhMGVkY2QtNTUxNy00NTdmLWE3ZDYtMjQyZWYxNzQwMzMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    },
    {
      id: 11,
      name: 'fast five',
      genre: 'drama',
      length: '320',
      rating: 7.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      id: 12,
      name: 'Taken',
      genre: 'action',
      length: '120',
      rating: 5.9,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
    {
      id: 13,
      name: 'Avengers Assemble',
      rating: 8.7,
      genre: 'action',
      length: 120,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg',
    },

    {
      id: 14,
      name: 'Inception',
      rating: 8.7,
      genre: 'action',
      length: 137,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    },
    {
      id: 15,
      name: 'Goodfellas',
      rating: 8.7,
      genre: 'fantasy',
      length: 57,
      poster:
        'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      id: 16,
      name: 'The Matrix',
      rating: 8.6,
      genre: 'horror',
      length: 147,
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      id: 17,
      name: 'The Matrix Reloaded',
      rating: 8.6,
      genre: 'action',
      length: 167,
      poster:
        'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      id: 18,
      name: 'The Matrix Resurrections',
      rating: 8.6,
      genre: 'fantasy',
      length: 197,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
    },
    {
      id: 19,
      name: 'The Matrix Revolutions',
      rating: 8.6,
      genre: 'drama',
      length: 117,
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      id: 20,
      name: 'The Silence of the Lambs',
      rating: 8.6,
      genre: 'horror',
      length: 159,
      poster:
        'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      id: 21,
      name: 'The Wolf of Wall Street',
      rating: 8.5,
      genre: 'drama',
      length: 151,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
    },
    {
      id: 22,
      name: 'The Witcher: Nightmare of the Wolf',
      rating: 8.5,
      genre: 'comedy',
      length: 155,
      poster:
        'https://m.media-amazon.com/images/M/MV5BY2ViMDQ3NDgtNjFkNy00ZTUzLThmMDYtYTMzY2IyZmYwNWJmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg',
    },
    {
      id: 23,
      name: 'The Wolf Man',
      rating: 8.5,
      genre: 'fantasy',
      length: 137,
      poster:
        'https://m.media-amazon.com/images/M/MV5BODRmMDBjMTYtZmJiZi00Mzk3LWFhZDAtMDExNDFhMWQzNzEyXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg',
    },
    {
      id: 24,
      name: 'The Bugs Bunny/Looney Tunes Comedy Hour',
      rating: 8.5,
      genre: 'comedy',
      length: 127,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMDEwNTAwNjMtNTgwZC00Y2RjLTliOTYtZWI4NGNlNjI4ZTVjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg',
    },
    {
      id: 25,
      name: 'The Broken Hearts Club: A Romantic Comedy',
      rating: 8.4,
      genre: 'fantasy',
      length: 157,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMmZlODkzNmItZmIwZi00OGYxLTkwMjQtMzlhYmYwNjMwNzlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    },
  ]);
  const [apiMovies, setApiMovies] = useState([]);

  const [activeGenre, setActiveGenre] = useState([
    'All',
    // 'Action',
    // 'comedy',
    // 'drama',
    // 'Fantasy',
    // 'Horror',
  ]);
  const [numb, setNumb] = useState(0);

  const [num2, setNum2] = useState(30);

  const [activePage, setActivePage] = useState(1);

  const [pageDevide, setPageDevide] = useState(30);

  const removeItem = (id) => {
    const newSetMovies = movies.filter((movie) => movie.id !== id);
    setElseMovies(newSetMovies);
    setMovies(newSetMovies);
  };

  const AddFavorites = (id) => {
    const isLike = elseMovies.map((val) => {
      if (val.id == id) {
        return (val.isLike = !val.isLike);
      }
      setElseMovies();
    });
  };
  const updateLocalStorage = () => {
    localStorage.setItem('newMovie', elseMovies);
  };

  const addObj = () => {
    const newmovie = localStorage.getItem('newMovie');
    const newElse = JSON.parse(newmovie);

    // updateLocalStorage();

    setElseMovies((prev) => [...prev, newElse]);
    setMovies((prev) => [...prev, newElse]);
  };
  const devided = (ev) => {
    if (ev.key == 'Enter' && ev.target.value > 0) {
      const setevent = ev.target.value;
      setPageDevide(setevent);
      setNumb(0);
      setNum2(setevent);
    }
  };
  const activeChange = (num) => {
    const number = pageDevide * (num - 1);
    const number2 = pageDevide * num;
    console.log(number, number2);
    setActivePage(num);

    setNumb(number);
    setNum2(number2);
  };

  return (
    <React.Fragment>
      <div>
        <div className=" nav-div ">
          <SideBar
            movieNum={movies.length}
            allMovies={movies}
            setElseMovies={setElseMovies}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />

          <NavBar addObj={() => addObj()} devided={(ev) => devided(ev)} />
        </div>

        <div className="movie-app">
          <div className>
            <Movies
              movies={elseMovies}
              myDelete={(id) => removeItem(id)}
              addToFavorites={(id) => AddFavorites(id)}
              number1={numb}
              number2={num2}
              apimovie={apiMovies.poster}
            />
          </div>
          <Paginate
            movies={elseMovies}
            devided={pageDevide}
            activePage={activePage}
            activeChange={activeChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
