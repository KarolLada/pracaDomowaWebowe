import { useState } from "react";

function ProductCard({ nazwa, cena, staraCena, zdjecie, kategoria }) {
  const [dodano, setDodano] = useState(false);
  const [polubiono, setPolubiono] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={zdjecie} alt={nazwa} />
      </div>

      <h2>{nazwa}</h2>

      <p className="current-price">Cena: {cena.toFixed(2)} zł</p>

      <p className="stara-cena">
        Cena sprzed 30 dni: {staraCena.toFixed(2)} zł
      </p>

      <p>Kategoria: {kategoria}</p>

      <div className="product-actions">
        <button
          onClick={() => setDodano(true)}
          disabled={dodano}
        >
          {dodano ? "Dodano" : "Dodaj do koszyka"}
        </button>

        <button
          className="heart-button"
          onClick={() => setPolubiono(!polubiono)}
          aria-label={polubiono ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
        >
          {polubiono ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;