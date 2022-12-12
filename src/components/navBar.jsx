import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import netfliximg from '/Users/tommyrz/Desktop/course CyberPro/React/first-app/src/images/netfliximg.jpeg';

const NavBar = (props) => {
  const { addObj } = props;
  const navigate = useNavigate();

  const navigateInput = () => {
    navigate('/InputCard');
  };
  const navigateHome = () => {
    navigate('/');
  };
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              Movie.IL
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <button className="nav-link noStylebtn" onClick={navigateHome}>
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <a className="nav-link">add the movie</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    All Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={netfliximg} alt="First slide" style={{}} />
              <div className="carousel-caption d-none d-md-block">
                <h2>Unlimited movies, TV shows, and more.</h2>
                <h1>Watch anywhere. Cancel anytime.</h1>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <button className="navbtn" onClick={navigateInput}>
                  click here and ender your favorite movie
                </button>
                <br />
                <button className="noStylebtn navbtn" onClick={() => addObj()}>
                  Submit Movie
                </button>
                <br />

                <input
                  className="inputin"
                  placeholder="how many movies do you want to present?"
                  style={{ width: '20vw' }}
                  type="text"
                  name=""
                  id=""
                  onKeyPress={(ev) => props.devided(ev)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
