import logo from '../assets/sotchi/logo/sootchi-logo.jpeg.jpeg'
function Navbar(){
    return (
        <header className="navbar">
            <div className="nabar-container">

                <a href="#" className="logo">
                    <img src={logo} alt="Sotchi Kids Wear" />
                    </a>

            <nav className="nav-links">   
                <a href="#home">Home</a>
                <a href="#collections">Collections</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                </nav>

                <a href="#collections" className="nav-button">
                    Shop Now
                </a>

                </div>
                </header>
          
    )
} 

export default Navbar