import React, { useState } from "react";

const ParagraphCounter = () => {
  const [inputText, setInputText] = useState("");
  const [paragraphCount, setParagraphCount] = useState(0);

  // Fonction pour compter le nombre de paragraphes dans le texte
  const countParagraphs = () => {
    // Séparer le texte en paragraphes en utilisant des sauts de ligne (nouvelles lignes)
    const paragraphs = inputText.split(/\n+/);

    // Filtrer les paragraphes vides (considérant qu'un paragraphe vide n'est pas valide)
    const nonEmptyParagraphs = paragraphs.filter((paragraph) => paragraph.trim() !== "");

    // Mettre à jour le nombre de paragraphes non vides
    setParagraphCount(nonEmptyParagraphs.length);
  };

  // Gérer le changement du texte saisi
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Gérer la soumission du formulaire pour compter les paragraphes
  const handleFormSubmit = (e) => {
    e.preventDefault();
    countParagraphs();
  };

  return (
    <div>
      <h2>Détecteur de paragraphes</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows={5}
          value={inputText}
          onChange={handleInputChange}
          placeholder="Saisissez votre texte avec des paragraphes ici"
        />
        <button type="submit">Compter les paragraphes</button>
      </form>
      <div>Nombre de paragraphes : {paragraphCount}</div>
    </div>
  );
};

export default ParagraphCounter;
