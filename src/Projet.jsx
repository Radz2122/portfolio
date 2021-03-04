import React from 'react';
import './Projet.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Tooltip from '@material-ui/core/Tooltip';


export default function Projet(props) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    function infoAdd(){
        window.open(props.url, "_blank");
    }
    return (
    <div className="Projet">
      <button className="ouvreInfo">+</button>
      <img  className="imgProjet"src={`images-projets/${props.id}.png`} alt={props.titre}/>
        <div className="titreProjet">{props.titre}</div>
        <p className="descProjet">{props.desc}</p>
        <Tooltip arrow disableFocusListener disableTouchListener open={open} onClose={handleClose} onOpen={handleOpen} title="Voir plus" placement="left">
            <button className="plusInfo"><NavigateNextIcon onClick={infoAdd}/></button>
        </Tooltip>   
    </div>
    );
  }