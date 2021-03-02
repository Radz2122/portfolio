import './ListeProjets.scss';
import Projet from './Projet';
import tabProjets from "./data/liste-projets.json";

export default function ListeProjets() {
    return (
    <div className="SectionProjets">
        <div className="titreSection"> <span>PROJETS</span></div>
        <ul className="categories">
            <li>ANIMATION</li>
            <li>DESIGN GRAPHIQUE</li>
            <li>3D</li>
            <li>ILLUSTRATION</li>
            <li>JEUX</li>
            <li>SITES WEB</li>
        </ul>
        <ul className="listeProjets">
        {tabProjets.map((prj) => (
          <Projet
            key={prj.id}
            id={prj.id}
            titre={prj.titre}
            desc={prj.description}
            url={prj.url}
          />
        ))}
      </ul>
    </div>
    );
  }