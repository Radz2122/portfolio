import './Icones.scss';

export default function Icones({id, titre}) {
    function selection(){
        window.open("https://www.andreasreiterer.at/dynamically-add-classes/", "_blank");
      }

  return (
     <button onClick={selection} className="Icones"><img src={`icones/${id}.png`} alt={titre}/><div className="nomIcone">{titre}</div></button>       
  );
}