var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <title>Blog42</title>
        <link rel="icon" type="image/x-icon" href="./src/logo/pink_logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./font/stylesheet.css" />
        <link rel="stylesheet" href="./css/color.css" />
        <link rel="stylesheet" href="./css/forms.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
        <style dangerouslySetInnerHTML={{__html: "\n    h1,h2,h3,h4,h5 {font-family: \"London\", sans-serif}\n    body {font-family: \"Poppins\", sans-serif}\n    * {\n        box-sizing: border-box;\n    }\n" }} />
        <div className="header main">
          <img className="spacer" src="./src/logo/purple_logo.svg" width="130&quot;" />
          <fuzzytext baseintensity="{0.2}" hoverintensity="{hoverIntensity}" enablehover="{enableHover}"><h2 className="spacer remove-on-hover secondary-color-hover header" fontSize={42}>Blog42</h2></fuzzytext>
        </div>
        <div id="modal01" className="w3-modal tertiary" style={{paddingTop: 0}} onclick="this.style.display='none'">
          <span className="w3-button tertiary w3-xxlarge w3-display-topright">×</span>
          <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
            <img id="img01" className="w3-image" />
            <p id="caption" />
          </div>
        </div>
        <div className="row">
          <div className="leftcolumn">
            <div className="card tertiary-color">
              <h2>Sto montando Sailor-Gunpla</h2>
              <h3>Dopo un recente acquisto a <a href="https://www.luccacomicsandgames.com/">Lucca Comics</a> mi sono trovato a montare un Gunpla inaspettato, 5 Nov 2025</h3>
              <div className="blog-image-expo accent">
                <img className="blog-images" src="./src/gundams/gf13-instructions.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/gundams/gf13-no-bow.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/gundams/gf13-torso.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/gundams/gf13-torso-head.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/gundams/gf13-torso-head-detail.jpg" onclick="enlarge(this)" />
              </div>
              <p>
                Questo è uno dei pezzi che verranno aggiunti alla collezione. L'ho preso perchè mi sembrava molto molto divertente.
                Le foto qui sopra sono di ieri sera, appena sono arrivato a casa (siamo andati a mangiare al burgy) mi sono messo a costruirlo con un film e del vino.
                Sto iniziando a utilizzare anche i colori per accentuare i dettavgli, spero di starlo facendo bene...
                Queste sono solo le foto di ieri sera ma man mano che vado avanti proverò a tenere aggiornato il blog.
              </p>
              <h5>Come lo feci</h5>
              <p>
                Ho comprato recentemente un nuovo paio di <a href="https://www.amazon.com/stedi-Ultra-thin-Single-edge-Plastic-Repairing/dp/B0BF4JKZDK?th=1" className="accent-hover ">nipper</a> per gunpla, un modello figo della Stedi.
                Il cambiamento di qualità che c'è tra i due è incredibile, quello che avevo <a href="https://www.networkhardwares.com/en-it/products/plato-170-wishful-clamp-diy-electronic-diagonal-pliers-side-cutting-nippers-wire-cutter-shears-1-piece-to-5-pack?variant=48466438291661" className="accent-hover">prima</a> hanno visto la guerra e stavano iniziando a fare fatica a tagliare.
                Informandomi un pochino ho scoperto che per tagliare meglio la plastica è utile avere una sola lama in modo che la plastica venga tagliata e non schiacciata. Sono costate un pochino ma ne è assolutamente valsa la pena.
                <br />
              </p>
              <p>
                Tornando al prima. Ho iniziato a segnare i dettagli della plastica con un simil-"uniposca" nero. Come si vede daalle foto il risultato è un po' quello che è.
                Forse dovrei usare un colore più chiaro.
                <br />Non ho molto da dire perchè ho appena iniziato... vi aggiorno. Baci!
              </p>
              <h5>Giorno 2</h5>
              <div className="blog-image-expo accent">
                <img className="blog-images" src="./src/gundams/gf13-arms.jpg" onclick="enlarge(this)" />
              </div>
              <p>
                Oggi invece mi sono dedicato alle braccia, le braccia sono composte da polso grigio, avambraccio, protettore del gomito e due pezzi per l'articolazione. Il colore che ho aggiunto come dettaglio è stato messo nella articolazione.
                C'è un piccolo pezzo circolare con incavi e ho colorato quello, dalla foto si vede che è leggermente sozzo ma prossimamente lo pulisco.
              </p>
              <p>
                Non ho avuto molto tempo per montare niente perchè il giovedì frequento un corso di teatro e sono tornato a casa tardissimo. Doccina e poi ho continuato a montare il modellino con Franci accanto. &lt;\3
              </p>
              <h5>Giorno 3</h5>
              <div className="blog-image-expo accent">
                <img className="blog-images" src="./src/gundams/gf13-shoulder.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/gundams/gf13-arm.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/gundams/gf13-hand-alt.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/gundams/gf13-franci-hand.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/gundams/gf13-hand.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/gundams/gf13-torso-head-arms.jpg" onclick="enlarge(this)" />
              </div>
              <p>
                Weekend pieno, sono riuscito però a completare le braccia, con dettagli, mani e colori.
              </p>
              <div className="blog-image-expo accent">
                <img className="blog-images" src="./src/gundams/gf13-torso-head-arms-pose.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/gundams/gf13-ankles.jpg" onclick="enlarge(this)" />
              </div>
              <p>
                Oltre a tutto ciò sono anche riuscito ad iniziare le gambe, qui le foto delle caviglie!
              </p>
            </div>
            <div className="card tertiary-color">
              <h2>Lucca Comics '25</h2>
              <h3>Siamo andati a lucca comics &amp; games, 31 Ott - 2 Nov 2025</h3>
              <p>
                Questo finesettimana siamo andati a Lucca per l'annuale comics che c'è ormai dal (controllo la data) 1966 ed è la seconda Convention più grande al mondo (un attimo fa non lo sapevo).
                Comunque, quest'anno c'erano un paio di ospiti interessanti e altri che ho scoperto durante il viaggio.
                <br />
                Siamo andati principalmente per due persone: <a href="https://en.wikipedia.org/wiki/Hideo_Kojima" className="accent-hover">Hideo Kojima</a> e <a href="https://rickriordan.com/" className="accent-hover">Rick Riordan</a>
              </p>
              <div className="blog-image-expo accent">
                <img className="blog-images" src="./src/lucca2025/lc-treno-forza-ciccio.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/lucca2025/lc-zaino-fra.jpg" onclick="enlarge(this)" />
                <img className="blog-images" src="./src/lucca2025/lc-franci-mangia.jpg" onclick="enlarge(this)" />
              </div>      
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="card">
              <h2>Naviga</h2>
              <div className="main minimal-space accent-hover" onclick="location.href = './index.jsx';">Home Page</div><br />
              <div className="main minimal-space accent-hover" onclick="location.href = './drawings.jsx';">Cosa faccio</div><br />
            </div>
          </div>
        </div>
        <div className="footer">
          <h2>Foot</h2>
        </div>
      </div>
    );
  }
});