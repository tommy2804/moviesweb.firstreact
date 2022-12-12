import React from 'react';
import { FaTrash } from 'react-icons/fa';

export function Prop(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img className="poster" src={props.poster} alt="" />
        <button className="noStylebtn" onClick={props.heart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            className="bi bi-heart-fill position-absolute top-0 start-0"
            viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </button>

        <button className="noStylebtn" onClick={props.mydelete}>
          <FaTrash size="30px" className="position-absolute top-0 start-100 " />
        </button>
        <span className="position-absolute top-0 start-50 ">{props.rating}</span>
      </div>
      <div className="card-description">
        <p className="text-title">
          {props.id} <br />
          {props.genre} <br />
          {props.name} <br />
          {props.length}
        </p>
        <p className="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}
function isItLike(Props) {}
