import React, { createContext, useState, useEffect, useContext } from 'react';

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {

    const fetchTickets = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        const updatedTickets = addUserInfoToTickets(data.tickets, data.users);
        setTickets(updatedTickets);
        setUsers(data.users);
        groupTickets(updatedTickets, groupBy);
        setLoader(false)
      } catch (error) {
        console.error('Error fetching tickets:', error);
        setLoader(false)
      }
    };

    fetchTickets();
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  const groupTickets = (tickets, groupBy) => {
    const grouped = tickets.reduce((acc, ticket) => {
      const key = groupBy === 'status' ? ticket[groupBy].toLowerCase().replace(" ","_") : ticket[groupBy];
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});
    setGroupedTickets(grouped);
  };

 

  const addUserInfoToTickets = (tickets, users) => {
    const userMap = users.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});

    return tickets.map(ticket => ({
      ...ticket,
      username: userMap[ticket.userId]?.name || 'Unknown',
      availability: userMap[ticket.userId]?.available ?? false
    }));
  };

  const handleGroupByChange = (e) => {
    setGroupBy(e.target.value);
    groupTickets(tickets, e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    const sortedTickets = [...tickets].sort((a, b) => {
      if (e.target.value === 'priority') {
        return b.priority - a.priority;
      } else if (e.target.value === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    setTickets(sortedTickets);
    groupTickets(sortedTickets, groupBy);
  };

  return (
    <TicketContext.Provider value={{ groupedTickets, handleGroupByChange, handleSortByChange, groupBy, sortBy, users, loader }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => {
  return useContext(TicketContext);
};
