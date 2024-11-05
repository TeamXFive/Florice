import '../../styles/SearchBar/searchbar.css'
import { useState } from 'react';

export default function SearchBar() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    
    return (
        <div className="search-content">
            <div className="input-container">
                <input className="input-search" type="text" placeholder='Search'/>
                <button type="submit" className="search-button">
                    <img className="search-image" src="src\assets\images\catalogo\search.png"/>
                </button>
            </div>
        
            <div className="filter-container">

                <form action="">

                
                <div className="filter-options">
                    <p className="filter-name">Localidade</p>
                    <div className="filter-content">
                        <label><input type="checkbox"/>  brasil</label>
                        <label><input type="checkbox"/>  eua</label>
                        <label><input type="checkbox"/>  suécia</label>
                    </div>
                </div>

                <div className="filter-options">
                    <p className="filter-name">Clima</p>
                    <div className="filter-content">
                        <label><input type="checkbox"/>  semiárido</label>
                        <label><input type="checkbox"/>  tropical úmido</label>
                        <label><input type="checkbox"/>  úmido</label>
                    </div>
                </div>

                <div className="filter-options">
                    <p className="filter-name">Solo</p>
                    <div className="filter-content">
                        <label><input type="checkbox"/>  arenoso</label>
                        <label><input type="checkbox"/>  argiloso</label>
                        <label><input type="checkbox"/>  humoso</label>
                    </div>
                </div>

                <div className="filter-options">
                    <p className="filter-name">Temperatura</p>
                    <div className="filter-content">
                        <label><input type="checkbox"/>  30°</label>
                        <label><input type="checkbox"/>  25°</label>
                        <label><input type="checkbox"/>  24°</label>
                    </div>
                </div>

                <div className="reset-filter">
                    <p>Filtros</p>
                    <input className="reset-input" type="reset" value="Limpar"/>
                </div>

                </form>

            </div>
        </div>
        
    )
}