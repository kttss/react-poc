import {TICKETS}   from './../data/ticket';

export function getTickets(params) {
    return new Promise((resolve)=>{
        resolve(TICKETS)
    });
}  
