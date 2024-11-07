import "../../styles/Catalogo/catalogo.css";
import CatalogTable from "../../components/CatalogTable/CatalogTable.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import { useState } from "react";

function Catalogo() {
    const [filters, setFilters] = useState({
        search: "",
        location: [],
        climate: [],
        soil: [],
        temperature: []
    });

    return (
        <div className="catalogo-container">
            <div className="catalogo-content">
                <div className="search-container">
                    <SearchBar filters={filters} setFilters={setFilters} />
                </div>
                <div className="catalog-table">
                    <CatalogTable filters={filters} />
                </div>
            </div>
        </div>
    );
}

export default Catalogo;
