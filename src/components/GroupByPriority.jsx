import React from 'react';
import { useTickets } from '../utils/TicketContext';
import ListItem from './ListItem'

const GroupByPriority = () => {
  const { groupedTickets } = useTickets();
  const priorityList = [
    {title:'Urgent',id:4},
    {title:'High',id:3}, 
    {title:'Medium',id:2},
    {title:'Low',id:1},
    {title:'No priority',id:0}];

  return (
    <div className="d-flex status-view group-by-priority">
      {priorityList.map((priority) => (
        <div key={priority.title} className="status-col">
          <h2 className={`priority-icon priority_${priority.title.toLowerCase().replace(" ","_")}`}>{priority.title}</h2>
          {groupedTickets[priority.id]?.map((ticket) => (
            <div key={ticket.id} className="ticket">
            <ListItem item={ticket} groupBy={'priority'}></ListItem>
        </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GroupByPriority;
