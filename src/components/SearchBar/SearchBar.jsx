import '../../styles/SearchBar/searchbar.css'

export default function SearchBar() {
    return (
        <div className="search-content">
            <div className="input-container">
                <input className="input-search" type="text" placeholder='Search'/>
                <button type="submit" className="search-image">
                    <img src="src\assets\images\catalogo\search.png"/>
                </button>
                
            </div>
            
        </div>
        
    )
}