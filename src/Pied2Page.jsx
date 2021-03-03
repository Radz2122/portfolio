import './Pied2Page.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Pied2Page(props) {
    function ouvrePage(){
        window.open("http://www.linkedin.com/in/radhika-patel12", "_blank");
    }
   
    return (
        <footer className="Pied2Page">
            <button className="linked"><LinkedInIcon onClick={ouvrePage}/></button>
            <div>Cell: 514-549-4169</div>
            <div>Courriel: radhika2122@icloud.com</div>
        </footer>
    );
}