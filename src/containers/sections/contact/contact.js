import * as s from './style';

import SvgTeam from '../../../images/svgTeam.svg';

import { FaLinkedinIn, FaInstagram, FaHandshake } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';

const Contact = () => {
  return (
    <s.Container>
      <div className="contact" id="contact">
        <div className="contentContact">
          <div className="left">
            <div className="contentText-left">
              <span className="title">Nossos valores</span>
              <p>
                A Wendy tem como foco trazer o máximo de segurança e respeito
                para os trabalhadores, queremos levar nossa perspectiva de
                segurança do trabalho combinando design e tecnologia.
              </p>
              <p>
                Nós queremos apresentar na primeira versão nossas ideas, nossos
                desejos e sentimentos para os usuários do nosso aplicativo,
                somos fissurados em inovação, simplicidade e criação de valor a
                long prazo. Nossa cultura é fazer o mundo se sentir mais seguro
                com a AdaWendy.
              </p>
              <p>
                Pensamos, conversamos e criamos tudo de forma diferente vamos
                quebrar o padrão e deixar tudo mais simples e bonito.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="contentText-right">
              <img src={SvgTeam} alt="ilustração-time" />
              <span className="team-subtitle">
                <strong>Equipe</strong> Ada
                <span style={{ color: '#83C3C3' }}>Wendy</span>
              </span>
            </div>
          </div>
        </div>

        {/* linkedin area */}

        <div className="socials-media">
          <div className="left-socials">
            <div className="follows">
              <div className="arrow">
                <MdArrowForwardIos size={'2rem'} />
              </div>
              <span>Nos siga no instagram e linkedin</span>
              <div className="socials">
                <FaLinkedinIn size={'3rem'} />
                <hr class="solid"></hr>
                <FaInstagram size={'3rem'} />
              </div>
            </div>

            <div className="donate">
              <div className="title-donate">
                <span>Doação</span> <FaHandshake size={'4rem'} />
              </div>
              <p>
                Gostou da nossa ideia e quer acelerar o processo de
                desenvolvimento?
              </p>
              <p>Nos ajude com qualquer quantia.</p>
            </div>
          </div>
          <div className="right-socials">
            <div className="contentRight">
              <div className="idealizador">
                <span className="position">Idealizador</span>
                <span className="name">Felipe "Nit" Rodrigues</span>
                <span className="description">
                  Opá tudo bem? Um cara que curte fazer coisas diferentes,
                  estudante da área de segurança do trabalho e viciado em
                  consumir qualquer coisa que envolva tecnologia.
                </span>
                <hr class="solid"></hr>
                <div className="followme">
                  <span className="followMe">_Me siga no</span>
                  <FaLinkedinIn size={'2rem'} style={{ marginTop: '10px' }} />
                </div>
              </div>
              <div className="design">
                <span className="position">Design</span>
                <span className="name">Isabela "Yui" Messias</span>
                <span className="description">
                  Opá tudo bem? Um cara que curte fazer coisas diferentes,
                  estudante da área de segurança do trabalho e viciado em
                  consumir qualquer coisa que envolva tecnologia.
                </span>
                <hr class="solid"></hr>
                <div className="followme">
                  <span className="followMe">_Me siga no</span>
                  <FaLinkedinIn size={'2rem'} style={{ marginTop: '10px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </s.Container>
  );
};

export default Contact;
