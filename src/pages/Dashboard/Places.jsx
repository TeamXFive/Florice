import "./Places.css";
import { countries } from "../../utils/countries";
import {
    formatTimestamp,
    toFirstUpperCase,
    toTitleCase,
} from "../../utils/text";
import { useEffect, useState, useRef } from "react";
import { apiEndpoint } from "../../utils/api";

// Place fields
// id
// display_name
// place_type (enum) = ['germplasm_bank', 'university', 'lab', 'farm', 'company', 'other']
// latitude
// longitude
// country
// state
// city
// address
// postal_code
// created_at
// updated_at

const placeTypes = {
    germplasm_bank: "Banco de Germoplasma",
    university: "Universidade",
    lab: "Laboratório",
    farm: "Fazenda",
    company: "Companhia",
    other: "Outro",
};

export const Places = () => {
    const contentRef = useRef();
    const [places, setPlaces] = useState([]);
    const [formInput, setFormInput] = useState({});
    const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);

    const loadPlaces = () => {
        const options = {
            method: "GET",
            headers: {},
        };

        fetch(`${apiEndpoint()}/places`, options)
            .then((response) => response.json())
            .then((response) => setPlaces(response))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        loadPlaces();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
    };

    const handleClearAndClose = () => {
        setIsCreationModalOpen(false);
        setFormInput({});
    };

    const handlePlaceDeletion = (id) => {
        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };

        fetch(`${apiEndpoint()}/places?id=${id}`, options)
            .then((response) => response.json())
            .then((response) => {
                if (response.error) {
                    throw new Error(response.error);
                }

                if (contentRef.current) {
                    const successAlert = document.createElement("div");
                    successAlert.innerHTML = `
                     <div class="alert alert-success fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Sucesso!</strong> 
                        <br/>
                        O lugar foi deletado com sucesso.
                    </div>`;
                    contentRef.current.prepend(successAlert);
                    setTimeout(
                        () => successAlert.children[0].classList.remove("show"),
                        5000
                    );
                    setTimeout(() => successAlert.remove(), 5100);
                }
                loadPlaces();
            })
            .catch((err) => {
                console.error(err);
                if (contentRef.current) {
                    const successAlert = document.createElement("div");
                    successAlert.innerHTML = `
                     <div class="alert alert-danger fade show" role="alert">
                        <button type="button" class="close float-right" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Erro!</strong> 
                        <br/>
                        Algo deu errado ao tentar deletar o lugar, por favor tente novamente.
                        <br/>
                        <muted><small> <sub><strong>Erro:</strong> ${err}</sub> </small></muted>
                    </div>`;
                    contentRef.current.prepend(successAlert);
                    setTimeout(
                        () => successAlert.children[0].classList.remove("show"),
                        5000
                    );
                    setTimeout(() => successAlert.remove(), 5100);
                }
            });
    };

    const handlePlaceCreation = () => {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInput),
        };

        fetch(`${apiEndpoint()}/places`, options)
            .then((response) => response.json())
            .then((response) => {
                if (response.error) {
                    throw new Error(response.error);
                }

                if (contentRef.current) {
                    const successAlert = document.createElement("div");
                    successAlert.innerHTML = `
                     <div class="alert alert-success fade show" role="alert">
                        <strong>Sucesso!</strong> 
                        <br/>
                        O novo lugar foi cadastrado com sucesso.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
                    contentRef.current.prepend(successAlert);
                    setTimeout(
                        () => successAlert.children[0].classList.remove("show"),
                        5000
                    );
                    setTimeout(() => successAlert.remove(), 5100);
                }
                loadPlaces();
            })
            .catch((err) => {
                console.error(err);
                if (contentRef.current) {
                    const successAlert = document.createElement("div");
                    successAlert.innerHTML = `
                     <div class="alert alert-danger fade show" role="alert">
                        <button type="button" class="close float-right" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Erro!</strong> 
                        <br/>
                        Algo deu errado ao tentar cadastrar o novo lugar, por favor tente novamente.
                        <br/>
                        <muted><small> <sub><strong>Erro:</strong> ${err}</sub> </small></muted>
                    </div>`;
                    contentRef.current.prepend(successAlert);
                    setTimeout(
                        () => successAlert.children[0].classList.remove("show"),
                        5000
                    );
                    setTimeout(() => successAlert.remove(), 5100);
                }
            });

        handleClearAndClose();
    };

    return (
        <div ref={contentRef} className="places content section">
            <h1>Places</h1>

            <div className="px-3 row">
                <button
                    type="button"
                    className="btn btn-primary mb-3"
                    onClick={() => setIsCreationModalOpen((prev) => !prev)}
                >
                    + Novo lugar
                </button>
            </div>

            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Endereço</th>
                            <th>City - Estado</th>
                            <th>Country</th>
                            <th>Criado em</th>
                            <th>Atualizado em</th>
                            <th aria-label="actions"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {places.map((place) => (
                            <tr key={place.id}>
                                <td>{toFirstUpperCase(place.display_name)}</td>
                                <td>
                                    {toFirstUpperCase(
                                        placeTypes[place.place_type]
                                    )}
                                </td>
                                <td>{toTitleCase(place.address)}</td>
                                <td>
                                    {toTitleCase(place.city)} -{" "}
                                    {toTitleCase(place.state)}
                                </td>
                                <td>{place.country?.toUpperCase() || "-"}</td>
                                <td>{formatTimestamp(place.created_at)}</td>
                                <td>{formatTimestamp(place.updated_at)}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-warning mr-3"
                                    >
                                        <i className="fas fa-pencil"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-danger"
                                        onClick={() =>
                                            handlePlaceDeletion(place.id)
                                        }
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isCreationModalOpen && (
                <div
                    className="modal fade show d-block"
                    id="creationModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="creationModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="creationModalLabel"
                                >
                                    Novo Lugar
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="nameInput">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nameInput"
                                        name="display_name"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="typeInput">Tipo</label>
                                    <select
                                        className="form-control"
                                        id="typeInput"
                                        name="place_type"
                                        onChange={handleInputChange}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Selecione uma opção
                                        </option>
                                        {Object.keys(placeTypes).map((type) => (
                                            <option key={type} value={type}>
                                                {toFirstUpperCase(
                                                    placeTypes[type]
                                                )}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cityInput">Cidade</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cityInput"
                                        name="city"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="addressInput">
                                        Logradouro
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="addressInput"
                                        name="address"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="postalCodeInput">CEP</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="postalCodeInput"
                                        name="postal_code"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="stateInput">Estado</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="stateInput"
                                        name="state"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="countryInput">Pais</label>
                                    <select
                                        className="form-control"
                                        id="countryInput"
                                        name="country"
                                        onChange={handleInputChange}
                                        defaultValue={"BRA"}
                                    >
                                        <option value="" disabled>
                                            Selecione uma opção
                                        </option>
                                        {countries.map(
                                            ({ code, displayName }) => (
                                                <option key={code} value={code}>
                                                    {toTitleCase(displayName)}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    onClick={handleClearAndClose}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    onClick={handlePlaceCreation}
                                    className="btn btn-primary"
                                >
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
