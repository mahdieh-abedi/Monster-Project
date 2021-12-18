import "./Menu.css"
import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Menu = () => (
    <Container className='Menu'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/monsters">Monsters</Link>
          </li>
        </ul>
        <Outlet />
    </Container>
  );
  export default Menu