import './Icones.scss';
import { useState } from "react";

export default function Icones({id, titre}) {
  
  const [cacheSommaire, setCacheSommaire] = useState(false);
  console.log(cacheSommaire+ id);
  const selection =  () => setCacheSommaire(!cacheSommaire);
  return (
     <button onClick={selection} className= {`Icones${cacheSommaire?' vert':''}`}><img src={`icones/${id}.png`} alt={titre}/><div className="nomIcone">{titre}</div></button>       
  );
}