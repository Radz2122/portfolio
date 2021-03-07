import ReactDOM from "react-dom";
import {useState} from 'react';
import SimpleReactLightbox from 'simple-react-lightbox'
import './Appli.scss';
import Entete from './Entete';
import ListeProjets from './ListeProjets';
import Pied2Page from './Pied2Page';
import Sidebar from './Sidebar';
export default function Appli() {
  const [compteur,setCompteur]= useState(0);
  return (
    
    
    <div className="Appli" id="outer-container">
      <SimpleReactLightbox>
       <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
       <div id="page-wrap">
      <Entete/>
      <ListeProjets/>
      <Pied2Page/>
      </div>
      </SimpleReactLightbox>
    </div>
    

  );
}
