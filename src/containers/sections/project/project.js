import * as s from './style';

import svgMeet from '../../../images/svgMeet.svg';

import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Project = () => {
  return (
    <s.Container>
      <div className="title">Projeto</div>

      <div className="contentProjec">
        <div className="left">
          <span>Projeto é destinado para ajudar você.</span>
          <img src={svgMeet} alt="ilustração-meet" />
          <div className="description">
            <p>
              Projeto AdaWendy tem como proposito ajudar todas as empresas,
              estamos desenvolvendo um aplicativo que tem como foco automatizar
              vários procedimentos, assim ajudando a área do SESMT.
            </p>
            <br />
            <p>
              Nós seguimos uma fórmula de inovação que é utilizar a tecnologia e
              o design para criarmos um aplicativo mais simples e bonito
            </p>
          </div>
        </div>
        <div className="right">
          <div className="contentTexts">
            <span>Iniciaremos o aplicativo para os dispositivos android.</span>
            <p>
              Queremos envolver uma série de funcionalidades em nosso
              aplicativo. Na primeira versão vamos disponibilizar a ficha de EPI
              digital e leitura das normas regulamentadoras. Lembrando a ficha
              digital é válida, devido ao nosso sistema ser eletrônico.
            </p>
            <p>
              Nós estamos estudando várias tecnologias para o Back-End, queremos
              proporcionar um desempenho absoluto para nossos usuários. O
              front-end será também com tecnologia de ponta para proporcionar
              uma experiência única para todos os públicos.
            </p>
            <p>
              Vamos adicionar ferramentas que indique como utilizar todo o
              aplicativo, esse tipo de funcionalidade possibilita pessoas que
              tenham alguma limitação tenham autonomia para utilizar nosso
              serviço.
            </p>
            <p>
              O aplitivo está passando pela fase de design e desenvolvimento,
              não temos uma data prevista para o lançamento, manteremos as
              atualizações do projeto no{' '}
              <span className="socials-name">Instagram</span> e{' '}
              <span className="socials-name">Linkedin</span>
            </p>
            <div className="socials">
              <FaLinkedinIn size={'2.5em'} />
              <FaInstagram id="instagram-logo" size={'2.5em'} />
            </div>
          </div>
        </div>
      </div>

      {/* Os 4 mestres */}

      <div className="fourMasters">
        <div className="left">
          <div className="contentTexts-left"></div>
        </div>
        <div className="right">
          <div className="contentTexts-right"></div>;
        </div>
      </div>
    </s.Container>
  );
};

export default Project;
