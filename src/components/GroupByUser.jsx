import React from 'react';
import { useTickets } from '../utils/TicketContext';
import ListItem from './ListItem'

const GroupByUser = () => {
const { groupedTickets, users} = useTickets(); 

return (
    <div className="d-flex status-view group-by-user">
      {users.map((user) => (
        <div key={user.id} className="status-col">
          <h2 className='user-name'>{user.name}</h2>
          {groupedTickets[user.id]?.map((ticket) => (
            <div key={ticket.id} className="ticket">
                <ListItem item={ticket} groupBy={'user'}></ListItem>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GroupByUser;
