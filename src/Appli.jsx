import './Appli.scss';
import Entete from './Entete';
import ListeProjets from './ListeProjets';
import Pied2Page from './Pied2Page';
import Sidebar from './Sidebar';
export default function Appli() {
  return (
    <div className="Appli" id="outer-container">
       <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
       <div id="page-wrap">
      <Entete/>
      <ListeProjets/>
      <Pied2Page/>
      </div>
    </div>
  );
}
