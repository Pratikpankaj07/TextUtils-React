// always name a component with starting letter capital N    rfc for react based component

import PropTypes from 'prop-types';




export default function Navbar(props) {
  return (
  <div>
  <nav className="navbar navbar-expand-lg bg-body-secondary" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.about|| "write about here"}</a>  
           
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="form-check form-switch mx-3">
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="switchCheckDefault">{props.btntxt}</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={title:PropTypes.string.isRequired,
    about: PropTypes.string,
};

// Navbar.defaultProps = {     not in react 19
//     title: "My Website",
//     about: "Write about here",
//   };


