var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <title>Pistacchio42</title>
        <link rel="icon" type="image/x-icon" href="./src/logo/pink_logo.svg" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
        <link rel="stylesheet" href="./css/color.css" />
        <link rel="stylesheet" href="./font/stylesheet.css" />
        <style dangerouslySetInnerHTML={{__html: "\n  h1,h2,h3,h4,h5 {font-family: \"London\", sans-serif}\n  body {font-family: \"Poppins\", sans-serif}\n  body {font-size:16px;}\n  .w3-half img{margin-bottom:-6px;margin-top:16px;opacity:0.8;cursor:pointer}\n  .w3-half img:hover{opacity:1}\n  " }} />
        {/* Sidebar/menu */}
        <nav className="w3-sidebar main w3-collapse w3-top w3-large w3-padding" style={{zIndex: 3, width: '300px', fontWeight: 'bold'}} id="mySidebar"><br />
          <a href="javascript:void(0)" onclick="w3_close()" className="w3-button w3-hide-large w3-display-topleft" style={{width: '100%', fontSize: '22px'}}>Close Menu</a>
          <div className="w3-container">
            <h3 className="w3-padding-64 "><img src="./src/logo/purple_logo.svg" style={{width: '75%'}} />
            </h3></div>
          <div className="w3-bar-block">
            <a onclick="location.href = './drawings.jsx';" className="w3-bar-item w3-button accent-hover">Cosa facciamo</a>
            <a onclick="location.href = './blog.jsx';" className="w3-bar-item w3-button accent-hover">Blog</a> 
            <a href="#team" onclick="w3_close()" className="w3-bar-item w3-button accent-hover">Chi siamo</a> 
            <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button accent-hover">Contatti</a>
          </div>
        </nav>
        {/* Top menu on small screens */}
        <header className="w3-container w3-top w3-hide-large main w3-xlarge w3-padding">
          <a href="javascript:void(0)" className="w3-button main w3-margin-right" onclick="w3_open()">☰</a>
          <span><img src="./src/logo/purple_logo.svg" style={{height: '30px'}} /></span>
        </header>
        {/* Overlay effect when opening sidebar on small screens */}
        <div className="w3-overlay w3-hide-large" onclick="w3_close()" style={{cursor: 'pointer'}} title="close side menu" id="myOverlay" />
        {/* !PAGE CONTENT! */}
        <div className="w3-main" style={{marginLeft: '340px', marginRight: '40px'}}>
          {/* Header */}
          <div className="w3-container" style={{marginTop: '80px'}} id="showcase">
            <h1 className="w3-jumbo tertiary-color"><b>Pistacchio &amp; Co.</b></h1>
            <h1 className="w3-xxxlarge main-text"><b>Un nuovo modo di scoprire il Mondo.</b></h1>
            <hr style={{width: '420px', border: '5px solid rgb(28, 170, 151)'}} className="w3-round" />
          </div>
          {/* Photo grid (modal) */}
          <div className="w3-row-padding" id="opere">
            <div className="w3-half">
              <img src="./src/images/Eva.png" style={{width: '100%'}} onclick="onClick(this)" alt="Evangelion EVA 001" />
              <img src="./src/images/MinecraftBuild.png" style={{width: '100%'}} onclick="onClick(this)" alt="The whole of a Minecraft Build" />
              <img src="./src/images/VoidBoxViewport.png" style={{width: '100%'}} onclick="onClick(this)" alt="A render of a box" />
            </div>
            <div className="w3-half">
              <img src="./src/images/Ciclopi.png" style={{width: '100%'}} onclick="onClick(this)" alt="Two Cyclops forging a lightning" />
              <img src="./src/images/Texture500.png" style={{width: '100%'}} onclick="onClick(this)" alt="Texture for a low poly yellow Cinquecento" />
              <img src="./src/images/Senza titolo.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Cinquecento for race" />
            </div>
          </div>
          {/* Modal for full size images on click*/}
          <div id="modal01" className="w3-modal tertiary" style={{paddingTop: 0}} onclick="this.style.display='none'">
            <span className="w3-button tertiary w3-xxlarge w3-display-topright">×</span>
            <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
              <img id="img01" className="w3-image" />
              <p id="caption" />
            </div>
          </div>
          {/* Services */}
          <div className="w3-container" id="services" style={{marginTop: '75px'}}>
            <h1 className="w3-xxxlarge main-text accent-color-hover"><b>Servizi.</b></h1>
            <hr style={{width: '420px', border: '5px solid rgb(28, 170, 151)'}} className="w3-round" />
            <p>Sono una singola famiglia che perde un sacco di tempo in progetti perfetti non finiti.</p>
            <p>Siamo una piccola realtà composta da 8 persone unite dalla passione per il fare bene ad un prezzo conveniente. La nostra azienda nasce con un obiettivo semplice: creare tutto ciò di cui puoi avere bisogno, con cura, qualità e attenzione ai dettagli.<br />
              Ogni prodotto che realizziamo racconta il nostro impegno quotidiano e il desiderio di offrire soluzioni su misura, pensate per semplificare più possibile la vita dei nostri clienti.<br />
              La nostra punta di diamante è il “prodotto perfetto”, il risultato di esperienza, creatività e dedizione: una sintesi di funzionalità e bellezza che rappresenta al meglio ciò che siamo.<br />
              Per chi se lo stesse chiedendo: sì, siamo gli stessi che vi hanno portato la "forbice da topologia" e la "pressa idraulica per arance"; anche se non ci conosci ti siamo sempre vicino.<br />
            </p>
          </div>
          {/* Designers */}
          <div className="w3-container" id="team" style={{marginTop: '75px'}}>
            <h1 className="w3-xxxlarge main-text accent-color-hover"><b>Chi siamo.</b></h1>
            <hr style={{width: '420px', border: '5px solid rgb(28, 170, 151)'}} className="w3-round" />
            <p>Il Team migliore da questa parte del pacifico.</p>
            <p>Siamo otto. Tutti Stefano.<br />
              Otto persone, un solo nome, ma tante menti e mani diverse che danno vita a un’unica visione: creare senza limiti.<br />
              C’è Stefano, il CEO &amp; Fondatore, che da 25 anni non ha mai smesso di produrre, sperimentare e inseguire l’idea del “prodotto perfetto”.<br />
              Poi Stefano, il Lead Designer, che dà forma alle intuizioni con una plasticità inconfondibile; ogni sua curva, ogni linea, parla il suo linguaggio.<br />
              A seguire Stefano, lo scultore, che trasforma in materia le idee: argilla, plastica, legno e carta, tutto prende vita dalle sue mani.<br />
              Gli altri cinque Stefani completano la squadra:<br />
              Stefano 3D Render, che illumina e modella il futuro digitale,<br />
              Stefano il Mangaka, che traduce emozioni in tratti e inchiostro,<br />
              Stefano il Cinofilo, che porta equilibrio e istinto nel gruppo,<br />
              Stefano il Programmatore, che dà logica e struttura ai nostri sogni,<br />
              e Stefano delle Risorse Umane, che tiene uniti tutti… anche quando discutiamo su chi sia “il vero” Stefano.<br />
              Otto nomi, una sola identità: Stefano.<br />
              Insieme, creiamo tutto ciò che puoi immaginare.<br />
            </p>
            <p><b>Le tre teste principali per i nostri svariati progetti</b>:</p>
          </div>
          {/* The Team */}
          <div className="w3-row-padding w3-grayscale">
            <div className="w3-col m4 w3-margin-bottom">
              <div className="w3-light-grey">
                <img src="./src/images/Faccia 1.png" alt="John" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3>Stefano</h3>
                  <p className="w3-opacity">CEO &amp; Founder</p>
                  <p>Il colore giallo mi ricorda tanto i limoni, e a me proprio non piacciono i limoni.</p>
                </div>
              </div>
            </div>
            <div className="w3-col m4 w3-margin-bottom">
              <div className="w3-light-grey">
                <img src="./src/images/Faccia 2.png" alt="Jane" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3>Stefano</h3>
                  <p className="w3-opacity">Disegnatore</p>
                  <p>Le forme sono la prima fonte di ispirazione per alzarmi la mattina.</p>
                </div>
              </div>
            </div>
            <div className="w3-col m4 w3-margin-bottom">
              <div className="w3-light-grey">
                <img src="./src/images/Faccia 3.png" alt="Mike" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3>Stefano</h3>
                  <p className="w3-opacity">Modellista</p>
                  <p>La pietra fredda non la tocco ormai da anni.</p>
                </div>
              </div>
            </div>
          </div>
          {/* End page content */}
        </div>
        {/* W3.CSS Container */}
        <div className="w3-light-grey w3-container w3-padding-32" style={{marginTop: '75px', paddingRight: '58px'}}><p className="w3-right">Powered by <a href="https://en.wikipedia.org/wiki/Phallus" title="W3.CSS" target="_blank" className="w3-hover-opacity">Stefano</a></p></div>
      </div>
    );
  }
});