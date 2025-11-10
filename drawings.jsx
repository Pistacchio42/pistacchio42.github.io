var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <title>Did id myself 42</title>
        <link rel="icon" type="image/x-icon" href="./src/logo/pink_logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./css/color.css" />
        <link rel="stylesheet" href="./css/forms.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
        <link rel="stylesheet" href="./font/stylesheet.css" />
        <style dangerouslySetInnerHTML={{__html: "\n    h1,h2,h3,h4,h5 {font-family: \"London\", sans-serif}\n    body {font-family: \"Poppins\", sans-serif}\n    * {\n        box-sizing: border-box;\n    }\n" }} />
        <div className="header main">
          <img className="spacer" src="./src/logo/purple_logo.svg" width="130&quot;" />
          <h2 className="spacer remove-on-hover secondary-color-hover header">Did-It-Myself-42</h2>
        </div>
        <h3 className="accent spacer secondary-color"><b>Questa è una lista di roba che ho fatto negli anni.</b></h3>
        <p><button className="w3-button main" onclick="myFunction()">Aggiungi spazio tra le foto</button></p>
        {/* Photo Grid */}
        <div className="w3-row" id="myGrid" style={{marginBottom: '128px'}}>
          <div className="w3-third">
            <img src="./src/drawings/Panino.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/PetaPetaPurin.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Snoo-Stand.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Sonny-Reference.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Void-Box-01.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Void-Box-02.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Void-Box-03.jpg" style={{width: '100%'}} />
          </div>
          <div className="w3-third">
            <img src="./src/drawings/Chrom.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Cinghiale.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/DeathTattoo.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Minecraft-Hotel-02.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/King-Frog-Smoking.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Jhonny.jpg" style={{width: '100%'}} />
          </div>
          <div className="w3-third">
            <img src="./src/drawings/Lamia-Ras-2.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Lamia.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Minecraft-Hotel-01.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Minecraft-Hotel-03.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Minecraft-Hotel-05.jpg" style={{width: '100%'}} />
            <img src="./src/drawings/Lamia-Ras-1.jpg" style={{width: '100%'}} />
          </div>
        </div>
        {/* End Page Content */}
        {/* Footer */}
        <footer className="w3-container main w3-center" style={{marginTop: '128px'}}>
          <p className>Powered by <a href="https://it.wikipedia.org/wiki/Giano">Stefano</a></p>
        </footer>
      </div>
    );
  }
});