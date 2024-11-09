import '../../styles/SearchBar/searchbar.css'
import { useState } from 'react';

export default function SearchBar({ search, setSearch }) {

    const [isVisible, setIsVisible] = useState(false);
    

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    
    const handleReset = () => {
        setSearch("")
    }

    const checkBox = (e) => {
        let isChecked = e.target.checked
        let checkBoxName = e.target.value

        setSearch ((prevSearch) => {
            let newSearch = prevSearch.trim().split(" ");
            let newSearchString;
            let emptyIndex;

            if (!isChecked) {
                const index = newSearch.indexOf(checkBoxName);
                if (index > -1) {
                    newSearch.splice(index, 1);
                }

            } else {
    
                if (!newSearch.includes(checkBoxName)) {
                    newSearch.push(checkBoxName);
                }
               
            }

            console.log(newSearch)
            if (newSearch.includes('')) {
                emptyIndex = newSearch.indexOf('')
                console.log(`index vazio: ${emptyIndex}`)
                newSearch.splice(emptyIndex, 1)
            }

            newSearchString = newSearch.join(" ");
            
            return newSearchString
            
                
            }   
        )
    }

    return (
        <div className="search-content">
            <form action="">
            <div className="input-container">
                <input 
                    className="input-search" 
                    type="text" 
                    placeholder='Search'
                    onChange={(e) => setSearch(e.target.value)}    
                />
            </div>
        
            <div className="filter-container">

                

                
                <div className="filter-options">
                    <p className="filter-name">Localidade</p>
                    <div className="filter-content">
                        <label><input type="checkbox" value="Sul" onClick={(e) => {
                            checkBox(e)
                        }}/>  América do Sul</label>
                        <label><input type="checkbox" value="Norte" onClick={(e) => {
                            checkBox(e)
                        }}/>  América do Norte</label>
                        <label><input type="checkbox" value="Ásia" onClick={(e) => {
                            checkBox(e)
                        }}/>  Ásia</label>
                        <label><input type="checkbox" value="Europa" onClick={(e) => {
                            checkBox(e)
                        }}/>  Europa</label>
                    </div>
                </div>

                <div className="filter-options">
                    <p className="filter-name">Clima</p>
                    <div className="filter-content">
                        <label><input type="checkbox" value="semiárido" onClick={(e) => {
                            checkBox(e)
                        }}/>  Semiárido</label>
                        <label><input type="checkbox" value="subtropical" onClick={(e) => {
                            checkBox(e)
                        }}/>  Subtropical</label>
                        <label><input type="checkbox" value="tropical" onClick={(e) => {
                            checkBox(e)
                        }}/>  Tropical</label>
                        <label><input type="checkbox" value="árido" onClick={(e) => {
                            checkBox(e)
                        }}/>  Árido</label>
                        <label><input type="checkbox" value="temperado" onClick={(e) => {
                            checkBox(e)
                        }}/>  Temperado</label>
                        <label><input type="checkbox" value="frio" onClick={(e) => {
                            checkBox(e)
                        }}/>  Frio</label>
                        <label><input type="checkbox" value="quente" onClick={(e) => {
                            checkBox(e)
                        }}/>  Quente</label>
                    </div>
                </div>

                <div className="filter-options">
                    <p className="filter-name">Solo</p>
                    <div className="filter-content">
                        <label><input type="checkbox" value="arenoso" onClick={(e) => {
                                checkBox(e)
                            }}/>  Arenoso</label>
                        <label><input type="checkbox" value="argiloso" onClick={(e) => {
                                checkBox(e)
                            }}/>  Argiloso</label>
                        <label><input type="checkbox" value="rochoso" onClick={(e) => {
                                checkBox(e)
                            }}/>  Rochoso</label>
                    </div>
                </div>

                <div className="reset-filter">
                    <input className="reset-input" type="reset" value="Limpar filtros" onClick={handleReset}/>
                </div>

                

            </div>
            </form>
        </div>
        
    )
}