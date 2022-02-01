import * as s from './style';

import svgMeet from '../../../images/svgMeet.svg';

import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Project = () => {
  return (
    <s.Container>
      <div className="project" id="project">
        <div className="title">Projeto</div>

        <div className="contentProjec">
          <div className="left">
            <span>Projeto é destinado para ajudar você.</span>
            <img src={svgMeet} alt="ilustração-meet" />
            <div className="description">
              <p>
                Projeto AdaWendy tem como proposito ajudar todas as empresas,
                estamos desenvolvendo um aplicativo que tem como foco
                automatizar vários procedimentos, assim ajudando a área do
                SESMT.
              </p>
              <br />
              <p>
                Nós seguimos uma fórmula de inovação que é utilizar a tecnologia
                e o design para criarmos um aplicativo mais simples e bonito
              </p>
            </div>
          </div>
          <div className="right">
            <div className="contentTexts">
              <span>
                Iniciaremos o aplicativo para os dispositivos android.
              </span>
              <p>
                Queremos envolver uma série de funcionalidades em nosso
                aplicativo. Na primeira versão vamos disponibilizar a ficha de
                EPI digital e leitura das normas regulamentadoras. Lembrando a
                ficha digital é válida, devido ao nosso sistema ser eletrônico.
              </p>
              <p>
                Nós estamos estudando várias tecnologias para o Back-End,
                queremos proporcionar um desempenho absoluto para nossos
                usuários. O front-end será também com tecnologia de ponta para
                proporcionar uma experiência única para todos os públicos.
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
          <div className="left-masters">
            <div className="contentTexts-left">
              <span>
                Os 4 <br />
                mestres.
              </span>
              <p>As funcionalidades mais simples e fáceis de usar.</p>
            </div>
          </div>
          <div className="right-masters">
            <div className="contentTexts-right">
              <ul>
                <li>
                  <div className="num-title">
                    <span className="number-list">01</span>{' '}
                    <span className="title-list">Cadastrar o colaborador.</span>
                  </div>
                  <p>
                    Esta função tem como objetivo salvar dados do colaborador,
                    como: nome completo, setor e função. E há um termo em que o
                    colaborador deverá aceitar, esse termo destaca as obrigações
                    do empregador e do empregado.
                  </p>
                </li>
                <li>
                  <div className="num-title">
                    <span className="number-list">02</span>{' '}
                    <span className="title-list">Adicionar EPI.</span>
                  </div>
                  <p>
                    Aqui, você seguirá todas as informações obrigatórias para
                    registar o EPI do seu colaborador por exemplo: Descrição do
                    equipamento, quantidade, certificado de aprovação, data em
                    que o EPI foi solicitado, fabricante e motivos para entrega
                    e recebimento.
                  </p>
                </li>
                <li>
                  <div className="num-title">
                    <span className="number-list">03</span>{' '}
                    <span className="title-list">Consultar fichas.</span>
                  </div>
                  <p>
                    Destaque as fichas de cada colaborador através de uma busca
                    simples pelo nome completo ou CPF.
                  </p>
                </li>
                <li>
                  <div className="num-title">
                    <span className="number-list">04</span>{' '}
                    <span className="title-list">Registrar equipamento.</span>
                  </div>
                  <p>
                    E por fim o tão amado registro de equipamento. Aqui você vai
                    descrever qual o nome do equipamento, certificado de
                    aprovação fabricante e a validade do equipamento.
                  </p>
                </li>
              </ul>
            </div>
            ;
          </div>
        </div>
      </div>
    </s.Container>
  );
};

export default Project;
