
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg px-2">
    <a className="navbar-brand font-italic" href="#">Chucklehub</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="w-100 collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  )
}

export default Navbar