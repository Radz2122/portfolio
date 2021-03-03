import './Appli.scss';
import Entete from './Entete';
import ListeProjets from './ListeProjets';
import Pied2Page from './Pied2Page';
export default function Appli() {
  return (
    <div className="Appli">
      <Entete/>
      <ListeProjets/>
      <Pied2Page/>
    </div>
  );
}
