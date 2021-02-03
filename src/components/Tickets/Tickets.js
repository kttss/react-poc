import Ticket from './../Ticket/Ticket';
import { TICKETS } from './../../services/ticket';

function Tickets() {

    const listTicket = TICKETS.map(ticket=> <Ticket ticket={ticket} key={ticket.id}/>)
 
    return (
        <div>
            {listTicket}
        </div>
    )
}

export default Tickets;