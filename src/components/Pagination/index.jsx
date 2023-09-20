import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';

const Pagination = ({ onChangePage }) => {
  return (
    <div className={styles.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(obj) => onChangePage(obj.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={4}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
