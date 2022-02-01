// ( s ) exportando todos os elementos do style.js e utilizando s como parametro para chamar os demais, assim não preciso importar todos os componentes.
import * as s from './style';

import SvgSecurity from '../../../images/svgSecurity.svg';
import SvgMobile from '../../../images/svgMobile.svg';

import { DiAndroid } from 'react-icons/di';
import { BsFillBellFill } from 'react-icons/bs';
import { IoIosLock } from 'react-icons/io';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { GrApple } from 'react-icons/gr';

import Carousel from '../../../components/carousel/index';
import 'swiper/css/bundle';

const Home = () => {
  return (
    <s.Container>
      <section id="home">
        {/* Nome Empresa e Descrição */}
        <div className="AdaWendy">
          <div className="contentHome">
            <div className="name">
              <span>
                Adan<span style={{ color: '#7bcccc' }}>Wendy</span>
              </span>
            </div>
            <div className="description">
              <div className="texts">
                <p>Nós somos o futuro</p>
                <h1>Segurando do trabalho</h1>
                <p>
                  O projeto destinado a revolucionar a área de segurança do
                  trabalho.
                </p>
              </div>
            </div>
          </div>

          <div className="illustration">
            <img src={SvgSecurity} alt="Ilustração-segurança" />
          </div>
        </div>
        {/* Patricidade */}
        <div className="practicality">
          <div className="illustration-phone">
            <img src={SvgMobile} alt="Ilustração-celular" />
          </div>
          <div className="description-practicality">
            <div className="contentTexts">
              <h1>Praticidade</h1>
              <h2>Tudo o que você precisa na palma da sua mão.</h2>
              <p>
                Nosso aplicativo tem por objetivo proporcionar novas
                experiências de controle dos equipamentos de proteção.
              </p>
              <div className="list-features">
                <ul>
                  <li>
                    <IoIosLock />
                    <span>Acesso seguro</span>
                  </li>
                  <li>
                    <IoCheckmarkCircleSharp />
                    <span>Gestão de dados eficaz</span>
                  </li>
                  <li>
                    <BsFillBellFill />
                    <span>Acompanhemtno de pedidos em tempo real</span>
                  </li>
                </ul>
              </div>
              <p className="app-designated">
                O aplicativo será defignado para
                <span>
                  <GrApple />
                </span>
                e
                <span>
                  <DiAndroid />
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Várias funções */}

        <div className="manyFunctions">
          <div className="title">
            <span>Várias Funções em um único lugar.</span>
          </div>

          {/* slide */}

          <div className="carousel">
            <Carousel />
          </div>
        </div>
      </section>
    </s.Container>
  );
};

export default Home;
