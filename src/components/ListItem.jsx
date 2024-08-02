import React from 'react';

const ListItem = ({item, groupBy}) => {

  console.log(item)
  return (
    <div className='card'>
        <div className='row justify-content-between'>
          <div className='col'>{item?.id}</div>
          <div className='col'>
            <div className='user-icon'>
              <span>U</span>
            </div>
          </div>
        </div>
        <h3 className='card-title'>{item?.title}</h3>
        <div className='row justify-content-start align-items-center'>
          {groupBy === 'status' || groupBy === 'user' ? <span className={`priority-icon mb-0 priority_${item?.priority}`}></span> : <span className={`status-icon mb-0 status_${item?.status?.toLowerCase().replace(" ","_")}`}></span> }
          <button className='btn feature-request'>Feature Request</button>
        </div>
      </div>
   
  );
};

export default ListItem;
