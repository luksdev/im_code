// ( s ) exportando todos os elementos do style.js e utilizando s como parametro para chamar os demais, assim não preciso importar todos os componentes.
import * as s from './styles';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <s.Container>
      <nav>
        <ul>
          <li>
            <Link to="#" className="nav-item">
              Início
            </Link>
          </li>
          <li>
            <Link
              to="project"
              className="nav-item"
              spy={true}
              smooth={100}
              duration={500}
            >
              Projeto
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="nav-item"
              spy={true}
              smooth={100}
              duration={500}
            >
              Contato
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-item">
              Equipe
            </Link>
          </li>
        </ul>
      </nav>
    </s.Container>
  );
};

export default NavBar;
