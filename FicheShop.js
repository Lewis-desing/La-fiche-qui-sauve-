
import { useState } from 'react';

export default function FicheShop() {
  const [access, setAccess] = useState(false);

  const handlePayment = () => {
    alert("Veuillez effectuer un dépôt Wave de 200 FCFA au 07 XX XX XX XX. Ensuite, cliquez sur 'J'ai payé'.");
  };

  const confirmPayment = () => {
    setAccess(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">La fiche qui sauve</h1>
      <div className="border p-4 mb-6 rounded shadow">
        <h2 className="text-xl font-semibold">Fiche : Les limites et continuité</h2>
        <p className="text-sm text-gray-600 mb-4">Une fiche claire, concise et visuelle sur les limites et continuités en mathématiques.</p>
        {!access ? (
          <div className="space-y-2">
            <button onClick={handlePayment} className="px-4 py-2 bg-blue-600 text-white rounded">Payer avec Wave (200 FCFA)</button>
            <button onClick={confirmPayment} className="px-4 py-2 border rounded">J'ai payé</button>
          </div>
        ) : (
          <a href="/fiches/les_limites_et_continuite.pdf" download className="px-4 py-2 bg-green-600 text-white rounded">Télécharger la fiche</a>
        )}
      </div>
    </div>
  );
}
