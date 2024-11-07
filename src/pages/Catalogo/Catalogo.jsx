import "../../styles/Catalogo/catalogo.css";
import Table from "../../components/CatalogTable/CatalogTable.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import { useState } from "react";

function Catalogo() {

    const [search, setSearch] = useState('');

    return (
        <div className="catalogo-container">
            <div className="catalogo-content">
                <div className="search-container">
                    <SearchBar search={search} setSearch={setSearch}/>
                </div>
                <div className="catalog-table">
                    <Table search={search}/>
                </div>
            </div>
        </div>

    );
}

export default Catalogo;
