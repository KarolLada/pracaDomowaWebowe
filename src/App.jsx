
import { useState } from "react";
import ProductList from "./view/productList";
import {
  filtrujProdukty,
  wyszukajProdukty,
  sortujProdukty,
} from "./controllers/productController";
import "./App.css";

function App() {
  const [kategoria, setKategoria] = useState("wszystkie");
  const [szukaj, setSzukaj] = useState("");
  const [sortowanie, setSortowanie] = useState("domyslne");

  const produktyPoKategorii = filtrujProdukty(kategoria);
  const produktyPoWyszukiwaniu = wyszukajProdukty(
    produktyPoKategorii,
    szukaj
  );
  const przefiltrowaneProdukty = sortujProdukty(
    produktyPoWyszukiwaniu,
    sortowanie
  );

  function wyczyscFiltry() {
    setSzukaj("");
    setKategoria("wszystkie");
    setSortowanie("domyslne");
  }

  return (
    <main className="store">
      <header className="store-header">
        <p className="eyebrow">Świadome wybory na co dzień</p>
        <h1>Sklep konkurencyjny</h1>
        <p className="store-intro">
          Odkryj starannie wybrane produkty eco, bio i naturalne.
        </p>
      </header>

      <section className="catalog" aria-label="Katalog produktów">
        <div className="catalog-heading">
          <div>
            <h2>Nasze produkty</h2>
            <p>
              Liczba znalezionych produktów: {przefiltrowaneProdukty.length}
            </p>
          </div>
        </div>

        <div className="filtry">
          <div className="filter-field search-field">
            <label htmlFor="wyszukiwanie">Szukaj produktu</label>
            <input
              id="wyszukiwanie"
              type="search"
              placeholder="Np. herbata, krem..."
              value={szukaj}
              onChange={(e) => setSzukaj(e.target.value)}
            />
          </div>

          <div className="filter-field">
            <label htmlFor="filtr">Kategoria</label>
            <select
              id="filtr"
              value={kategoria}
              onChange={(e) => setKategoria(e.target.value)}
            >
              <option value="wszystkie">Wszystkie</option>
              <option value="eco">ECO</option>
              <option value="bio">BIO</option>
              <option value="naturalne">Naturalne</option>
            </select>
          </div>

          <div className="filter-field">
            <label htmlFor="sortowanie">Sortowanie</label>
            <select
              id="sortowanie"
              value={sortowanie}
              onChange={(e) => setSortowanie(e.target.value)}
            >
              <option value="domyslne">Domyślne</option>
              <option value="rosnaco">Cena: rosnąco</option>
              <option value="malejaco">Cena: malejąco</option>
              <option value="nazwa-az">Nazwa: A–Z</option>
              <option value="nazwa-za">Nazwa: Z–A</option>
            </select>
          </div>

          <button className="clear-filters" onClick={wyczyscFiltry}>
            Wyczyść filtry
          </button>
        </div>

        {przefiltrowaneProdukty.length > 0 ? (
          <ProductList produkty={przefiltrowaneProdukty} />
        ) : (
          <p className="empty-state">
            Nie znaleziono produktów. Zmień kryteria wyszukiwania.
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
