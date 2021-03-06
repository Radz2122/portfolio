import React from 'react';
import './Projet.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const useStyles = makeStyles((theme) => ({
  root: {
    height: 350,
  },
  container: {
    display:'block',
  },

}));


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
        <button className="ouvreInfo" onClick={handleChange}>+</button>
        <Collapse  in={checked}>
          <div className="titreProjet">{props.titre}</div>
          <p className="descProjet">{props.desc}</p>
            <div className="plusInfoContainer">
              <Tooltip  arrow disableFocusListener disableTouchListener open={open} onClose={handleClose} onOpen={handleOpen} title="Voir plus" placement="left">
                <button className="plusInfo"><NavigateNextIcon style={{ fontSize:30}} onClick={infoAdd}/></button>
              </Tooltip> 
            </div>
        </Collapse>
      </div>
      <img  className="imgProjet"src={`images-projets/${props.id}.png`} alt={props.titre}/>  
    </div>
    );
  }