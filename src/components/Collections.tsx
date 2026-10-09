import collection01 from '../assets/sotchi/collections/collection-01.jpeg.jpeg'
import collection02 from '../assets/sotchi/collections/collection-02.jpeg.jpeg'
import collection03 from '../assets/sotchi/collections/collection-03.jpeg.jpeg'
function Collections() {
    return (
        <section className="collections" id="collections">o

            <div className="collections-container">

                <div className="section-heading">
                    <p className="section-subtitle">Our Collections</p>

                    <h2>
                        Explore Sotchi
                        <br />
                        collections
                    </h2>

                    <p>
                        Discover our latest kidswear collections 
                        for wholesale partners.
                    </p>
                </div>

                <div className="collections-grid">

                    <div className="collection-card">
                        <div className="collection-image">
                            <img src={collection01} alt="Sotchi Winter Collection" />
                        </div>
                        
                        <h3>Winter Collection</h3>
                        <p>Explore our winter styles.</p>
                    </div>

                    <div className="collection-card">
                        <div className="collection-image">
                            <img src={collection02} alt="Sotchi Latest Collection" />
                        </div>

                        <h3>Latest Collection</h3>
                        <p>Discover our latest designs.</p>
                    </div>

                    <div className="collection-card">
                        <div className="collection-image">
                            <img src={collection03} alt="Sotchi Kids Wear" />
                        </div>

                        <h3>Kids Wear</h3>
                        <p>Styles for different kidswear categories.</p>
                    </div>

                </div>

            </div>
        </section>
    ) 
    
}

export default Collections