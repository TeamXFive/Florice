import '../../styles/SearchBar/searchbar.css';
import { useState } from 'react';

export default function SearchBar({ filters, setFilters }) {
    const handleSearchChange = (e) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            search: e.target.value
        }));
    };

    const handleCheckboxChange = (category, value) => {
        setFilters(prevFilters => {
            const categoryValues = prevFilters[category];
            const updatedValues = categoryValues.includes(value)
                ? categoryValues.filter(item => item !== value)
                : [...categoryValues, value];

            return { ...prevFilters, [category]: updatedValues };
        });
    };

    return (
        <div className="search-content">
            <div className="input-container">
                <input
                    className="input-search"
                    type="text"
                    placeholder="Search"
                    value={filters.search}
                    onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">
                    <img className="search-image" src="src/assets/images/catalogo/search.png" alt="Search"/>
                </button>
            </div>

            <div className="filter-container">
                <form>
                    <div className="filter-options">
                        <p className="filter-name">Localidade</p>
                        <div className="filter-content">
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("location", "brasil")} /> Brasil</label>
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("location", "eua")} /> EUA</label>
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("location", "suecia")} /> Suécia</label>
                        </div>
                    </div>

                    <div className="filter-options">
                        <p className="filter-name">Clima</p>
                        <div className="filter-content">
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("climate", "subtropical")} /> subtropical</label>
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("climate", "tropical_umido")} /> Tropical Úmido</label>
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("climate", "umido")} /> Úmido</label>
                        </div>
                    </div>

                    <div className="filter-options">
                        <p className="filter-name">Solo</p>
                        <div className="filter-content">
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("soil", "arenoso")} /> Arenoso</label>
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("soil", "argiloso")} /> Argiloso</label>
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("soil", "humoso")} /> Humoso</label>
                        </div>
                    </div>

                    <div className="filter-options">
                        <p className="filter-name">Temperatura</p>
                        <div className="filter-content">
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("temperature", "30")} /> 30°</label>
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("temperature", "25")} /> 25°</label>
                            <label><input type="checkbox" onChange={() => handleCheckboxChange("temperature", "24")} /> 24°</label>
                        </div>
                    </div>

                    <div className="reset-filter">
                        <p>Filtros</p>
                        <input className="reset-input" type="reset" value="Limpar"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
