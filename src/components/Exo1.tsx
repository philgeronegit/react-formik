function Exo1() {
  return (
    <>
      <h2>Formulaire de recherche</h2>
      <form action="/search" method="get" className="m-3">
        <div className="mb-2">
          <label htmlFor="query" className="mx-3">
            Entrez un mot-clé :
          </label>
          <input id="query" name="query" type="text" className="mx-3" />
        </div>
        <button type="submit" className="btn">
          Rechercher
        </button>
      </form>
    </>
  );
}

export default Exo1;
