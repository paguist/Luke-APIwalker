import React from 'react';

const MenuDesplegable = ({ recurso, setRecurso }) => {
    const handleChange = (e) => {
        setRecurso(e.target.value);
    };

    return (
        <select value={recurso} onChange={handleChange}>
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="starships">Starships</option>
        </select>
    );
};

export default MenuDesplegable;
