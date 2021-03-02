import './Projet.scss';

export default function Projet(props) {
    return (
    <div className="Projet">
        <div className="titreProjet">{props.titre}</div>
        <p className="descProjet">{props.desc}</p>
        <div className="flecheUrl"></div> 
    </div>
    );
  }