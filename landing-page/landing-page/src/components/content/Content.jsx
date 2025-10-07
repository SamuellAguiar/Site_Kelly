import React from 'react';
import './Content.css';
import CheckIcon from '@mui/icons-material/Check'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 

const Content = () => {
     return (
          <div className="content-section" id='conteudo'>
               <h2>Conteúdo Programático</h2>

               <ul className="checklist">
                    <li className="section">
                         <div className="section-header">
                              <CheckIcon className="icon" />
                              <strong>Teoria:</strong>
                         </div>

                         <ul className="sublist">
                              <li><CheckCircleIcon className="subicon" /><span>Planejamento</span></li>
                              <li><CheckCircleIcon className="subicon" /><span>Seleção de cor</span></li>
                              <li><CheckCircleIcon className="subicon" /><span>Mapeamento restaurador</span></li>
                              <li><CheckCircleIcon className="subicon" /><span>Trabalhando o enceramento e guias de silicone</span></li>
                              <li><CheckCircleIcon className="subicon" /><span>Conhecendo o Material: Sistemas restauradores e suas possibilidades</span></li>
                              <li><CheckCircleIcon className="subicon" /><span>Estratificação com resinas compostas</span></li>
                         </ul>
                    </li>

                    <li className="section">
                         <div className="section-header">
                              <CheckIcon className="icon" />
                              <strong>Demonstração prática e execução em manequim:</strong>
                         </div>

                         <ul className="sublist">
                              <li><CheckCircleIcon className="subicon" /><span>Classe IV extensa em incisivo central</span></li>
                              <li><CheckCircleIcon className="subicon" /><span>Incisivo lateral conóide</span></li>
                              <li><CheckCircleIcon className="subicon" /><span>Incisivo central escurecido</span></li>
                              <li><CheckCircleIcon className="subicon" /><span>Acabamento e polimento</span></li>
                         </ul>
                    </li>
               </ul>
          </div>
     );
};

export default Content;
