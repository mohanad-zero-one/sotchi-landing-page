import heroimage from'../assets/sotchi/hero/hero-main.jpeg.jpeg'

function Hero() {
    return(
        <section className="hero" id="home">
            <div className="hero-container">

            <div className="hero-content">
                <p className="hero-subtitle">Sotchi Kids Wear - Wholesale</p>

                <h1>
                    kids fashion
                    <br />
                    made for business.
                </h1>

                <p className="hero-description">
                    Discover Sotchi Kids Wear collections designed for 
                    retailers and wholesale partners.
                </p>

                <a href="#collections" className="hero-button">
                    Explore Collections
                </a>
            </div>

            <div className="hero-image">
                <img src={heroimage} alt="Sotchi Kids Wear collection" /> 
            </div>
            </div>

            
        </section>
    )
}

export default Hero