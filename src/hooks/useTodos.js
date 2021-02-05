import  { useState,useEffect } from 'react'

import { getTodos } from '../services/todo';

export function useTodos() {
    const [Todos, setTodos] = useState([]);

    const loadData = async ()=>{ 
        const res = await getTodos();
        setTodos(res);
    }

    useEffect(() => {
       loadData();
    },[])

    return [Todos,setTodos];
}