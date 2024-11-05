import "./Dashboard.css";
import { useEffect, useState } from "react";

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

export const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {},
        };

        fetch("http://localhost:8000/api/places", options)
            .then((response) => response.json())
            .then((response) => setPlaces(response))
            .catch((err) => console.error(err));
    }, []);

    console.log(places);

    return (
        <div className="places">
            <div className="content section">
                <h1>Places</h1>

                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    Launch demo modal
                </button>

                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Display Name</th>
                                <th>Place Type</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Address</th>
                                <th>Postal Code</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {places.map((place) => (
                                <tr key={place.id}>
                                    <td>{place.display_name}</td>
                                    <td>{place.place_type}</td>
                                    <td>{place.country}</td>
                                    <td>{place.state}</td>
                                    <td>{place.city}</td>
                                    <td>{place.address}</td>
                                    <td>{place.postal_code}</td>
                                    <td>{place.created_at}</td>
                                    <td>{place.updated_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
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
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
