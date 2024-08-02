import React from 'react';
import { useTickets } from '../utils/TicketContext';
import GroupByStatus from './GroupByStatus';
import GroupByPriority from './GroupByPriority';
import GroupByUser from './GroupByUser';

const List = () => {
    const { groupBy } = useTickets();

    const renderGroup = () => {
        switch (groupBy) {
            case 'status':
                return <GroupByStatus />;
            case 'priority':
                return <GroupByPriority />;
            case 'userId':
                return <GroupByUser />;
            default:
                return null;
        }
    };

    return (
        <div>
            {renderGroup()}
        </div>
    );
};

export default List;
