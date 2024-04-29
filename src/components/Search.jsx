import React, { useState } from 'react';

const Search = ({searchTerm, handleSearch }) => {

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search transactions..."
        className='form-control'
      />
      </>

  );
};

export default Search;
