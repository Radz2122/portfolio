import './ListeProjets.scss';
import Projet from './Projet';
import Icones from './Icones';
import tabProjets from "./data/liste-projets.json";
import tabIcones from "./data/liste-icones.json";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function ListeProjets(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
 

    return (
    <div className="SectionProjets">
        <div className="titreSection"> <span>PROJETS</span></div>
        <div className="contenu">
          <ul className="listeIcones">
          {tabIcones.map((ic) => (
            <Icones 
              key={ic.id}
              id={ic.id}
              titre={ic.titre}
            />
          ))}
          </ul>
          <ul className="listeProjets">
          {tabProjets.map((prj) => (
            <Projet
              key={prj.id}
              id={prj.id}
              titre={prj.titre}
              desc={prj.description}
              url={prj.url}
              cat={prj.categorie}
              outils={prj.outils}
            />
          ))}
        </ul>
      </div>
      <button className="backTop"><ArrowUpwardIcon style={{ fontSize:40, marginTop:10, marginBottom:10,padding:0}} onClick={scrollToTop}/></button>
    </div>
    );
  }