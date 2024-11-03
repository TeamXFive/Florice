import "../../styles/Catalogo/catalogo.css";
import Table from "../../components/CatalogTable/CatalogTable.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

function Catalogo() {
    return (
        <div className="catalogo-container">
            <div className="catalogo-content">
                <div className="search-container">
                    <SearchBar/>
                </div>
                <div className="catalog-table">
                    <Table/>
                </div>
            </div>
        </div>

    );
}

export default Catalogo;
