import React from 'react';
import './Projet.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { SRLWrapper } from "simple-react-lightbox";


const useStyles = makeStyles((theme) => ({
  //pour slide in transition
  root: {
    height: 350,
  },
  container: {
    display:'block',
  },

}));
//pour lightbox
const options = {
  settings: {
    disableKeyboardControls:true,
    disableWheelControls:true,
  },
  buttons: {
    backgroundColor: 'transparent',
    iconColor: '#88A6B5',
    showAutoplayButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,}
}


export default function Projet(props) {
  //toooltip  handler
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
    //sliding in for info
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
     };
     
  return (
    <div className="Projet">
      <div className={classes.container}>
        <button className="ouvreInfo" onClick={handleChange}><img src={props.cat}alt={props.cat} ></img></button>
        <Collapse  in={checked}>
          <div className="titreProjet">{props.titre}</div>
          <p className="descProjet">{props.desc}
          <p className="outils"><span>Réalisé avec:</span><br></br>{props.outils}</p>
          </p>
            <div className="plusInfoContainer">
              <Tooltip  arrow disableFocusListener disableTouchListener open={open} onClose={handleClose} onOpen={handleOpen} title="Voir plus" placement="left">
                <button className="plusInfo"><NavigateNextIcon style={{ fontSize:30}} onClick={infoAdd}/></button>
              </Tooltip> 
            </div>
        </Collapse>
      </div>
      <SRLWrapper options={options} > 
      <img  className="imgProjet" style={{width:'100%',height:'100%',objectFit:'fill', cursor:'pointer'}}src={`images-projets/${props.id}.png`} alt={props.titre}/>  
      </SRLWrapper>
    
     
    
    </div>
    );
  }