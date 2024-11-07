import React, { useState, useEffect } from 'react';
import '../../styles/CatalogTable/catalogtable.css';

const CatalogTable = ({ filters }) => {
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

    const applyFilters = (item) => {
        const { search, location, climate, soil, temperature } = filters;
        const matchesSearch = item.especie.toLowerCase().includes(search.toLowerCase());
        const matchesLocation = !location.length || location.includes(item.local.toLowerCase());
        const matchesClimate = !climate.length || climate.includes(item.clima.toLowerCase());
        const matchesSoil = !soil.length || soil.includes(item.solo.toLowerCase());
        const matchesTemperature = !temperature.length || temperature.includes(item.temperatura_media.toString());

        return matchesSearch && matchesLocation && matchesClimate && matchesSoil && matchesTemperature;
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
                    {data.filter(applyFilters).map((item, index) => (
                        <tr key={index}>
                            <td colSpan="4" className="expanded-cell">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ flex: 1 }}>{item.especie}</div>
                                    <div style={{ flex: 1 }}>{item.fenotipo}</div>
                                    <div style={{ flex: 1 }}>{item.clima}</div>
                                    <div>
                                        <button onClick={() => toggleExpand(index)}>
                                            {expandedRow === index ? '▲' : '▼'}
                                        </button>
                                    </div>
                                </div>
                                {expandedRow === index && (
                                    <div className="expanded-details">
                                        <p><strong>Local:</strong> {item.local}</p>
                                        <p><strong>Temperatura média:</strong> {item.temperatura_media}°C</p>
                                        <p><strong>Solo:</strong> {item.solo}</p>
                                        <p><strong>Observações:</strong> {item.observacoes}</p>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CatalogTable;
