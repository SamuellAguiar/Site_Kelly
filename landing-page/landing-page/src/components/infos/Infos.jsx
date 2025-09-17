import React from 'react';
import './Infos.css';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People'; // Ícone para "Para quem é"

const Infos = () => {
  return (
    <section className="infos-section" id="info">
      <div className="infos-container">
        <h3 className="infos-title">
          <InfoIcon className="infos-icon" /> Informações do Curso
        </h3>

        <p><strong>Carga Horária:</strong> 16 horas – com certificado de conclusão.</p>
        <p><strong>Material:</strong> Todo material fornecido pelo curso. Levar apenas micromotor, contra-ângulo e fotopolimerizador.</p>

        <h4 className="infos-subtitle">
          <EventIcon className="infos-icon" /> Datas e Horários
        </h4>

        <p>Serão dois dias de curso (sexta e sábado):</p>
        <p><strong>08:00 – 12:00</strong> e <strong>14:00 – 18:00</strong></p>

        <p className="consultar-datas">Consultar próximas datas.</p>

        {/* NOVA SEÇÃO - Para quem é */}
        <h4 className="infos-subtitle">
          <PeopleIcon className="infos-icon" /> Para quem é?
        </h4>
        <p>
          Projetado para <strong>Cirurgiões-Dentistas</strong> e <strong>estudantes de odontologia </strong>
          que já possuem conhecimentos básicos da <strong>dentística restauradora</strong>.
        </p>
      </div>
    </section>
  );
};

export default Infos;
