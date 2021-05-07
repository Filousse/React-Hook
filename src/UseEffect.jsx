import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

 // Similaire à componentDidMount et componentDidUpdate :
 useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
}, [count]); // N’exécute l’effet que si count a changé
// OU : []Si vous voulez exécuter un effet et le nettoyer une seule fois 
// (au montage puis au démontage), vous pouvez passer un tableau vide ([])
//  comme second argument. Ça indique à React que votre effet ne dépend
//  d’aucune valeur issue des props ou de l’état local, donc il n’a jamais
//  besoin d’être ré-exécuté. Il ne s’agit pas d’un cas particulier : ça découle
//  directement de la façon dont le tableau des dépendances fonctionne à la base.

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
      <p>L’effet ci-dessus met à jour le titre du document, mais il pourrait aussi bien 
    charger des données distantes, ou appeler n’importe quelle autre API impérative.</p>
    <h5>Charger des données depuis un serveur distant, s’abonner à quelque chose et modifier manuellement le DOM sont autant d’exemples "effets". </h5>
    <h3>Logique du temps <br></br> mets à jour le DOM => charge et mets à jour les effect (api/abonnement/mise à jour du dom) => render() rends ton components</h3>
    <h5>À l’instar du Hook useState qui peut être utilisé plusieurs fois, il est possible d’utiliser plusieurs effets. Cela nous permet de séparer correctement les sujets sans rapport au sein d’effets distincts </h5>
    <h5>Si vous voulez exécuter un effet et le nettoyer une seule fois (au montage puis au démontage), vous pouvez passer un tableau vide ([]) comme second argument. Ça indique à React que votre effet ne dépend d’aucune valeur issue des props ou de l’état local, donc il n’a jamais besoin d’être ré-exécuté. Il ne s’agit pas d’un cas particulier : ça découle directement de la façon dont le tableau des dépendances fonctionne à la base.</h5>
    </div>
  );
}