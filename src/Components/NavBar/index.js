const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Categories</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Apron</a></li>
                            <li><a className="dropdown-item" href="#">Hat</a></li>
                            <li><a className="dropdown-item" href="#">T-shirts</a></li>
                            <li><a className="dropdown-item" href="#">Mug</a></li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Characters</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Fred</a></li>
                            <li><a className="dropdown-item" href="#">Rex</a></li>
                            <li><a className="dropdown-item" href="#">Bubbles</a></li>
                            <li><a className="dropdown-item" href="#">Dolores</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                </div>
            </nav>
         </>
    )
}

export default NavBar;