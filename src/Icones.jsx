import './Icones.scss';

export default function Icones({id, titre}) {
 
  return (
    <div className="Icones"><img src={`icones/${id}.png`} alt={titre}></img><div className="nomIcone">{titre}</div> </div> 
  );
}