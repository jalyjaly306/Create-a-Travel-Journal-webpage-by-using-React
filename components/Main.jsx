export default function Main() {
    return (
        <>
            <main>
                <div className="destination">
                    <img className="destination-img" src="../images/fuji.jpg" alt="Fuji image" />
                    <div className="description">
                            <div className="location-link">
                                <span><ion-icon name="location-outline"></ion-icon></span>
                                <span>JAPAN</span>
                                <span><a href="https://maps.app.goo.gl/ez9e41m69BpgupwaA">View on Google Maps</a></span>
                            </div>
                            <h2 className="destination-name">Mount Fuji</h2>
                            <span className="destination-date">12 Jan, 2021 - 24 Jan, 2021</span>
                            <p className="destination-description">Mount Fuji is the tallest mountain in Japan, standing at 3776
                            meters (12360 feet). Mount Fuji is the single most popular tourist
                            site in Japan, for both Japanese and foreign tourists.
                            </p>
                    </div>
                </div>

                <div className="destination">
                    <img className="destination-img" src="../images/sydneyopera.jpg" alt="Sydney Opera House image" />
                    <div className="description">
                            <div className="location-link">
                                <span><ion-icon name="location-outline"></ion-icon></span>
                                <span>AUSTRALIA</span>
                                <span><a href="https://maps.app.goo.gl/xCTNGiPcnAj8cBwZA">View on Google Maps</a></span>
                            </div>
                            <h2 className="destination-name">Sydney Opera House</h2>
                            <span className="destination-date">27 May, 2021 - 8 Jun, 2021</span>
                            <p className="destination-description">The Sydney Opera House is a multi-venue performing arts centre in Sydney.
                                Location on the banks of the Sydney Harbour. It is often regarded as one 
                                of the 20th century's most famous and distintive buildings.
                            </p>
                    </div>
                </div>

                <div className="destination">
                    <img className="destination-img" src="../images/geirangerfjord.jpg" alt="geirangerfjord image" />
                    <div className="description">
                            <div className="location-link">
                                <span><ion-icon name="location-outline"></ion-icon></span>
                                <span>NORWAY</span>
                                <span><a href="https://maps.app.goo.gl/GwyQJ5eBrqyUo8vD8">View on Google Maps</a></span>
                            </div>
                            <h2 className="destination-name">Geirangerfjord</h2>
                            <span className="destination-date">01 Oct, 2021 - 18 Nov, 2021</span>
                            <p className="destination-description">The Geiranger Fjord  is a fjor in the Summers region of More og Ronsdal county, Norway.
                                It is located entirely in the Stranda Municipally.
                            </p>
                    </div>
                </div>

                <div className="destination">
                    <img className="destination-img" src="../images/paris.jpg" alt="paris image" />
                    <div className="description">
                            <div className="location-link">
                                <span><ion-icon name="location-outline"></ion-icon></span>
                                <span>FRANCE</span>
                                <span><a href="https://maps.app.goo.gl/aJZR2R7XCfzgt1PNA">View on Google Maps</a></span>
                            </div>
                            <h2 className="destination-name">Effel Tower</h2>
                            <span className="destination-date">01 Nov, 2021 - 18 Dec, 2021</span>
                            <p className="destination-description">The Eiffel Tower is a lattice tower on the Champ de Mars in Paris, France. 
                                It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889.
                            </p>
                    </div>
                </div>
            </main>
        </>
    )
}