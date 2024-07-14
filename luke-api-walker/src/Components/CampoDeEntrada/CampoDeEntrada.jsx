import React from 'react';

const CampoDeEntrada = ({ id, setId }) => {
    const handleChange = (e) => {
        setId(e.target.value);
    };

    return (
        <div>
            <label>ID:</label>
            <input
                type="number"
                value={id}
                onChange={handleChange}
                placeholder="Enter ID"
            />
        </div>
    );
};

export default CampoDeEntrada;
