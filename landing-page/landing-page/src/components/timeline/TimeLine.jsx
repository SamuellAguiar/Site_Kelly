import React, { useEffect, useRef } from "react";
import "./TimeLine.css";

const timelineData = [
     {
          title: "Planejamento",
          category: "Teoria",
     },
     {
          title: "Seleção de cor",
          category: "Teoria",
     },
     {
          title: "Mapeamento restaurador",
          category: "Teoria",
     },
     {
          title: "Trabalhando o enceramento e guias de silicone",
          category: "Teoria",
     },
     {
          title: "Conhecendo o Material: Sistemas restauradores e suas possibilidades",
          category: "Teoria",
     },
     {
          title: "Estratificação com resinas compostas",
          category: "Teoria",
     },
     {
          title: "Classe IV extensa em incisivo central",
          category: "Prática",
     },
     {
          title: "Incisivo lateral conóide",
          category: "Prática",
     },
     {
          title: "Incisivo central escurecido",
          category: "Prática",
     },
     {
          title: "Acabamento e polimento",
          category: "Prática",
     },
     {
          title: "16 horas de curso",
          category: "Carga Horária",
     },
     {
          title: "Com certificado de conclusão",
          category: "Certificado",
     },
     {
          title: "Todo material fornecido pelo curso",
          category: "Material",
     },
     {
          title: "Micromotor, contra angulo e fotopolimerizador",
          category: "Levar",
     },
     {
          title: "Sexta e Sábado \n das 8h às 12h e das 14h às 18h",
          category: "Dias de curso",
     },
     {
          title: "Consultar próximas datas",
          category: "Datas",
     }
];

export default function Timeline() {
     const itemsRef = useRef([]);

     useEffect(() => {
          const observer = new IntersectionObserver(
               (entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                              entry.target.classList.remove("hidden"); // <- remove
                              entry.target.classList.add("show");      // <- adiciona
                              observer.unobserve(entry.target);        // opcional: para de observar
                         }
                    });
               },
               { threshold: 0.2 }
          );

          itemsRef.current.forEach((el) => el && observer.observe(el));
          return () => observer.disconnect();
     }, []);


     return (
          <div className="timeline-section">
               <div className="timeline-container">
                    <h2 className="timeline-title">Conteúdo Programático</h2>
                    <div className="timeline">
                         {timelineData.map((item, index) => (
                              <div
                                   key={index}
                                   ref={(el) => (itemsRef.current[index] = el)}
                                   className="timeline-item hidden"
                              >
                                   <div className="timeline-icon"></div>
                                   <div className="timeline-content">
                                        <span className="timeline-category">{item.category}</span>
                                        <h3>{item.title}</h3>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>

     );
}
