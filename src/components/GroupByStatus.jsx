import React from 'react';
import { useTickets } from '../utils/TicketContext';
import ListItem from './ListItem'

const GroupByStatus = () => {
  const { groupedTickets } = useTickets(); 
  const statusList = ['Backlog', 'Todo', 'In Progress', 'Done', 'Canceled'];

  return (
    <div className="d-flex status-view group-by-status">
      {statusList.map((group) => (
        <div key={group} className="status-col">
          <h2 className={`status-icon status_${group.toLowerCase().replace(" ","_")}`}>{group}</h2>
          {groupedTickets[group.toLowerCase().replace(" ","_")]?.map((ticket) => (
            <div key={ticket.id} className="ticket">
              <ListItem item={ticket} groupBy={'status'}></ListItem>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GroupByStatus
