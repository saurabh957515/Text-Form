import React from 'react'
import propTypes from 'prop-types' 
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">{props.aboutText}</a>
          {/* you were having trobule here you didn't set path of 'to=__' you were thinking why's that cursor is not showing on the button. */}
          
        </li>
       
      </ul>
      {/* <div className="d-flex"> */}
        {/* <div className="bg-primary rounded mx-2 " onClick={()=>{props.togglemode('primary')}} style={{height:'30px',width:'30px'}}> </div> */}
        {/* <div className="bg-danger rounded mx-2 " onClick={()=>{props.togglemode('danger')}} style={{height:'30px',width:'30px'}}> </div>
        <div className="bg-success rounded mx-2 " onClick={()=>{props.togglemode('success')}} style={{height:'30px',width:'30px'}}> </div>
        <div className="bg-warning rounded mx-2 " onClick={()=>{props.togglemode('warning')}} style={{height:'30px',width:'30px'}}> </div>
        <div className="bg-dark rounded mx-2 " onClick={()=>{props.togglemode('dark')}} style={{height:'30px',width:'30px'}}> </div>
        <div className="bg-light rounded mx-2 " onClick={()=>{props.togglemode('light')}} style={{height:'30px',width:'30px'}}> </div> */}

        
      {/* </div> */}
      {/*for under line 24 <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> 
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':"light"}`}>
      <input className="form-check-input" onClick={()=>{props.togglemode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/></div>
      {/* //you(saurabh) were getting error on function on switch it wasn't working cause you didn't write in the navbar title learn little bit more how this function works and it's pros and cons */}
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabke DarkMode</label> 
    </div>
  </div>
</nav>
  
  )
 }

Navbar.prototypes = {title:propTypes.string.isRequired,
                  aboutText:propTypes.string.isRequired
}


Navbar.defaultProps =  {
    // here if you write "defaultprops than it will be wrong you have to use case sensitive p=P"
    title:'set title here',
    aboutText:'About '
};
