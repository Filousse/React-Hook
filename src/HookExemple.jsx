import React, { useState } from 'react';

export default function Example() {
    // Déclare une nouvelle variable d'état, que l'on va appeler « count »
    const [count, setCount] = useState(0);
  
    return (
      <div>
          <h1>HookExemple</h1>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count + 1)}>
          Cliquez ici
        </button>
      </div>
    );
  }

