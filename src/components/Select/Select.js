function Select({options}){
    return (
        <select>
            {options.map(e => (<option value={e.id}>{e.value}</option>))}
        </select>
    );
}

export default Select;