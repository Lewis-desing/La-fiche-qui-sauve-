
import React, { useState } from "react";

function App() {
  const [access, setAccess] = useState(false);

  const handlePayment = () => {
    alert("Faites un dépôt Wave de 200 FCFA au 07 XX XX XX XX. Cliquez ensuite sur 'J'ai payé'.");
  };

  const confirmPayment = () => {
    setAccess(true);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1 style={{ fontSize: 28, textAlign: 'center' }}>La fiche qui sauve</h1>
      <div style={{ padding: 20, border: '1px solid #ccc', borderRadius: 10, marginTop: 20 }}>
        <h2>Fiche : Les limites et continuité</h2>
        <p>Une fiche claire et concise sur les limites et la continuité en mathématiques.</p>
        {!access ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button onClick={handlePayment} style={{ padding: 10, background: '#0070f3', color: 'white', border: 'none', borderRadius: 5 }}>Payer avec Wave (200 FCFA)</button>
            <button onClick={confirmPayment} style={{ padding: 10, border: '1px solid #0070f3', borderRadius: 5 }}>J'ai payé</button>
          </div>
        ) : (
          <a href="/les_limites_et_continuite.pdf" download style={{ display: 'inline-block', padding: 10, background: 'green', color: 'white', textDecoration: 'none', borderRadius: 5 }}>Télécharger la fiche</a>
        )}
      </div>
    </div>
  );
}

export default App;
