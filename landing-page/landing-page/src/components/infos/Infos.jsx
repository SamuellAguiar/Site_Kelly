import './Infos.css';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Infos = () => {
  return (
    <section className="infos-section" id="info">
      <div className="infos-container">
        <h3 className="infos-title">
          <InfoIcon className="infos-icon" /> Informações do Curso
        </h3>

        <p><strong>Carga Horária:</strong> 16 horas – com certificado de conclusão.</p>
        <p><strong>Material:</strong> Todo material fornecido pelo curso. Levar apenas contra-ângulo.</p>

        <h4 className="infos-subtitle">
          <EventIcon className="infos-icon" /> Datas e Horários
        </h4>

        <p>Serão dois dias de curso (sexta e sábado):</p>
        <p><strong>08:00 – 12:00</strong> e <strong>14:00 – 18:00</strong></p>

        <p className="datas-confirmadas">
          Primeira turma: <strong>28 e 29 de Novembro</strong>
        </p>

        <h4 className="infos-subtitle">
          <PeopleIcon className="infos-icon" /> Para quem é?
        </h4>
        <p>
          Projetado para <strong>Cirurgiões-Dentistas</strong> e <strong>estudantes de odontologia </strong>
          que já possuem conhecimentos básicos da <strong>dentística restauradora</strong>.
        </p>

        <h4 className="infos-subtitle">
          <LocationOnIcon className="infos-icon" /> Local do Curso
        </h4>
        <p>
          R. Randolfo Baião, 54 - Centro, Manhuaçu - MG, Brasil
        </p>

        <p className="local-curso">
          <strong>Real Work</strong>
        </p>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.101604938553!2d-42.033855388195576!3d-20.254620481129678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbafd877508c777%3A0x670da7e66e3a8991!2sR.%20Randolfo%20Bai%C3%A3o%2C%2054%20-%20Centro%2C%20Manhua%C3%A7u%20-%20MG%2C%2036900-019!5e0!3m2!1spt-BR!2sbr!4v1759798264694!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Curso"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Infos;
