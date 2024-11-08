import React, { useState, useEffect } from 'react';
import '../../styles/CatalogTable/catalogtable.css';

const CatalogTable = ({search}) => {
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

    const searchPattern = new RegExp(search.split(" ").map(term => `(${term})`).join("|"), "i");
    console.log(searchPattern)

    return (
            
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th className="table-head">Espécie</th>
                            <th className="table-head">Fenótipo</th>
                            <th className="table-head">Clima</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter((item) => {
                            // return search.toLowerCase() === '' 
                            // ? item : item.especie.toLowerCase().includes(search) ||
                            // item.fenotipo.toLowerCase().includes(search) ||
                            // item.clima.toLowerCase().includes(search) ||
                            // item.local.toLowerCase().includes(search) ||
                            // item.temperatura_media.toString().includes(search) ||
                            // item.solo.toLowerCase().includes(search)
                            // console.log(search)

                            // Convert search terms into a regex pattern
                            
                            // Array of fields to search in each item
                            const fields = ['especie', 'fenotipo', 'clima', 'local', 'temperatura_media', 'solo'];
                        
                            // Check if any field matches the regex pattern
                            return fields.some(field => searchPattern.test(item[field]?.toString()));
                            
                        }).map((item, index) => (
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
