import Ticket from './../Ticket/Ticket';

import { useTickets } from './../../hooks/useTickets';

function Tickets() {
  const [tickets] = useTickets();

  const listTicket = tickets.map((ticket) => <Ticket ticket={ticket} key={ticket.id} />);

  return <div>{listTicket}</div>;
}

export default Tickets;
