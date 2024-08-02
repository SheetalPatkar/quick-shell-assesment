import React, { useState } from 'react';
import { useTickets } from '../utils/TicketContext';

const FilterOptions = ({item}) => {
  const { handleGroupByChange, handleSortByChange, groupBy, sortBy } = useTickets();
  const[isShow, setIsShow] = useState(false)

  const toggleDropdown = () =>{
    setIsShow(!isShow)
  }

  return (
    <div className='filter-Dropdown'>
      <button onClick={toggleDropdown} className='toggle-btn'>Display</button>
      {isShow ? <div className="controls">
        <div className='d-flex'>
          <label>Group By: </label>
          <select value={groupBy} onChange={handleGroupByChange}>
            <option value="status">Status</option>
            <option value="userId">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='d-flex'>
          <label>Sort By: </label>
          <select value={sortBy} onChange={handleSortByChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div> : ""}
    </div>
    
   
  );
};

export default FilterOptions;
