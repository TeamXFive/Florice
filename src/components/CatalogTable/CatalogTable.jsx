import React, { useState, useEffect } from 'react';
import '../../styles/CatalogTable/catalogtable.css';

const CatalogTable = () => {
    const [data, setData] = useState([]);
    const [expandedRow, setExpandedRow] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/catalog');
                if (!response.ok) throw new Error('Erro ao buscar dados');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };
        fetchData();
    }, []);

    const toggleExpand = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Espécie</th>
                        <th>Fenótipo</th>
                        <th>Clima</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td>{item.especie}</td>
                                <td>{item.fenotipo}</td>
                                <td>{item.clima}</td>
                                <td>
                                    <button onClick={() => toggleExpand(index)}>
                                        {expandedRow === index ? '▲' : '▼'}
                                    </button>
                                </td>
                            </tr>
                            {expandedRow === index && (
                                <tr>
                                    <td colSpan="4" style={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
                                        <p><strong>Local:</strong> {item.local}</p>
                                        <p><strong>Temperatura média:</strong> {item.temperatura_media}°C</p>
                                        <p><strong>Solo:</strong> {item.solo}</p>
                                        <p><strong>Observações:</strong> {item.observacoes}</p>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CatalogTable;
