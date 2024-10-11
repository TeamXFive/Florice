import "../../styles/Mapa/Mapa.css";

function Mapa() {
    return (
        <article className="mapa-container">
            <section className="looker-container">
                <iframe
                    className="embed-iframe"
                    src="https://lookerstudio.google.com/embed/reporting/54a3d92e-94f3-42e5-b2c9-3aa450a63b5a/page/jLkEE"
                    allowfullscreen
                    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                ></iframe>
            </section>
        </article>
    );
}

export default Mapa;
