import React from 'react'

export default function Hookpersonnalise(props) {
    

    return (
        <>
            <h3>Lorsque nous souhaitons partager de la logique entre deux fonctions JavaScript, nous l’extrayons dans une troisième fonction. Les composants et les Hooks sont des fonctions, ça fonctionne donc aussi pour eux !
Un Hook personnalisé est une fonction JavaScript dont le nom commence par ”use” et qui peut appeler d’autres Hooks.</h3>
            <h3>Essayez de résister à la tentation de faire des extractions prématurées de Hooks. À présent que les fonctions composants peuvent en faire plus, il est probable que les fonctions composants de votre base de code grossissent, en moyenne. C’est normal : ne vous sentez pas obligé·e d’en extraire des Hooks. Ceci dit, nous vous encourageons tout de même à commencer à repérer des cas où un Hook personnalisé pourrait masquer une logique complexe derrière une interface simple, ou aider à démêler un composant dont le code est incompréhensible</h3>
            <h2>TROUVER UN HOOK PERSO SUR LE PROJET IME</h2>
        </>



        // 1)  CREATION D'UN FICHIER HOOK PERSO
        // import { useState, useEffect } from 'react';

        // function useFriendStatus(friendID) {
        //   const [isOnline, setIsOnline] = useState(null);
        
        //   useEffect(() => {
        //     function handleStatusChange(status) {
        //       setIsOnline(status.isOnline);
        //     }
        
        //     ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        //     return () => {
        //       ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        //     };
        //   });
        
        //   return isOnline;
        // }

        
        // // 2) Utiliser un Hook personnalisé
        // // EXEMPLE 1
        // function FriendStatus(props) {
        //     const isOnline = useFriendStatus(props.friend.id);
          
        //     if (isOnline === null) {
        //       return 'Chargement...';
        //     }
        //     return isOnline ? 'En ligne' : 'Hors-ligne';
        //   }
        // //   EXEMPLE 2
        // function FriendListItem(props) {
        //     const isOnline = useFriendStatus(props.friend.id);
          
        //     return (
        //       <li style={{ color: isOnline ? 'green' : 'black' }}>
        //         {props.friend.name}
        //       </li>
        //     );
        //   }
    )
}


