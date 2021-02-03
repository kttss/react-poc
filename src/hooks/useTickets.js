import { useState, useEffect } from 'react';

import { getTickets } from './../services/ticket';

export function useTickets() {
    const [tickets,setTickets]  = useState([]);

    const  getdata = async function() {
        const res = await  getTickets();
        setTickets(res);
    };
    
     useEffect(()=>{
        getdata();
    },[]);

   

    return [tickets];
}