<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Il Mio Blog</title>
  <style>
    body {
      margin: 0;
      font-family: 'Georgia', serif;
      background-color: #fafafa;
      color: #333;
      line-height: 1.6;
    }

    header {
      background-color: #f8f9fa;
      padding: 1.5rem 2rem;
      border-bottom: 1px solid #ddd;
    }

    header div {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header h1 {
      margin: 0;
      font-size: 1.8rem;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
    }

    nav a {
      text-decoration: none;
      color: #555;
    }

    nav a:hover {
      color: #000;
    }

    main {
      max-width: 1000px;
      margin: 2rem auto;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }

    article {
      background-color: #fff;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    article h2 {
      margin-top: 0;
    }

    aside {
      background-color: #fff;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    footer {
      background-color: #f8f9fa;
      text-align: center;
      padding: 1rem;
      border-top: 1px solid #ddd;
      font-size: 0.9rem;
      color: #666;
    }

    @media (max-width: 768px) {
      main {
        grid-template-columns: 1fr;
      }

      nav ul {
        flex-direction: column;
        gap: 1rem;
      }
    }
  </style>
</head>
<body>

  <header>
    <div>
      <h1>Il Mio Blog</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#articoli">Articoli</a></li>
          <li><a href="#about">Chi sono</a></li>
          <li><a href="#contatti">Contatti</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <article>
      <h2>Titolo del primo articolo</h2>
      <p>
        Benvenuto nel mio blog! Qui condivido pensieri, idee e storie che mi ispirano ogni giorno.
      </p>
      <p>
        Questo è un esempio di paragrafo introduttivo. Puoi aggiungere immagini, citazioni o link ad altri articoli.
      </p>
    </article>

    <aside>
      <h3>Chi sono</h3>
      <p>Ciao! Mi chiamo [il tuo nome] e amo scrivere di tecnologia, libri e vita quotidiana.</p>
      <h3>Articoli recenti</h3>
      <ul>
        <li><a href="#">Come ho iniziato a scrivere</a></li>
        <li><a href="#">Le mie letture preferite</a></li>
        <li><a href="#">Cosa sto imparando ora</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>© 2025 Il Mio Blog — Tutti i diritti riservati.</p>
  </footer>

</body>
</html>
