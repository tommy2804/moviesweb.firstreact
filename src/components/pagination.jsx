import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination';

const Paginate = (props) => {
  const { activepage, activeChange, devided, movies } = props;
  let items = [];

  for (let number = 1; number <= Math.ceil(movies.length / devided); number++) {
    items.push(
      <Pagination.Item
        key={number}
        activepage={number === activepage}
        onClick={() => activeChange(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Pagination>{items}</Pagination>
    </>
  );
};
export default Paginate;
