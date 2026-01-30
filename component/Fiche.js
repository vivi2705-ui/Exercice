const Fiche = ({ nom, prenom, genre, competence}) => {
  return (
    <section className="fiche-section">
    <h1>Fiche Etudiant<h1/>
      <h3><strong>Nom:</strong> {nom}</h3>
      <h3><strong>Prénom:</strong> {prenom}</h3>
      <h3><strong>Genre:</strong> {genre}</h3>
      <div className="competence-container">
        <span className="competence-label"><strong>Compétences:</strong></span>
        <ul className="competence-list">
          {competence.map((comp)=>(
            <li key={Math.random()}>{comp}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};


export default Fiche;
