import "./Entete.scss";

export default function Entete(props) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const scrollToMid = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth"
    });
  };
 
  const scrollToEnd = () => {
    window.scrollTo({
      top: 1000000,
      behavior: "smooth"
    });
  };
    return (
    <header className="Entete">
      <div className="prenomNom">Radhika Patel</div>
      <ul className="navPrincipale">
        <button onClick={scrollToTop}><li>À PROPOS</li></button>
        <button onClick={scrollToMid}><li>PORTFOLIO</li></button>
        <button onClick={scrollToEnd}><li>CONTACT</li></button>
      </ul>
      <p> Passionnée de design, j’adore créer des sites web, des logos, des affiches, des pochettes d’albums et des jeux. Je suis une personne organisée, forte en gestion et en travail d’équipe. Je cherche continuellement à apprendre afin d’améliorer mes compétences.</p>
    </header>
      );
}