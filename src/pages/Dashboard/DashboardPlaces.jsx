import { useEffect, useState } from "react";
import "./DashboardPlaces.css";

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

export const DashboardPlaces = () => {
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
        <div className="dashboard places-container">
            <div className="sidebar">
                <h3>Dashboard</h3>
                <ul>
                    <li>Catalogue</li>
                    <li>Places</li>
                    <li>Users</li>
                </ul>
            </div>

            <div className="content">
                <h1>Places</h1>

                <table>
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
    );
};
