import React, { useEffect, useState } from 'react';
import List from '../components/List';
import FilterOptions from '../components/FilterOptions';

const ListingPage = () => {

  return (
    <div className="container">
      <FilterOptions></FilterOptions>
      <List></List>
    </div>
  );
};

export default ListingPage;
