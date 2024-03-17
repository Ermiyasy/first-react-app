


function Header(){
    return(
       <header>
           <h1> Welcome to Manitamance Management System</h1>
           <nav>
           <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
           
           </nav>

       </header>
    );
}
export default Header