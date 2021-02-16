/* this is a very simple MVAlib component which can be clicked to "turn on or off" */
/* TODO - Immediately Invoked Function Expression ? */

function videoComponent( options ){

  this.model = {
     source:'<iframe src="https://www.youtube.com/embed/DWcJFNfaw9c" ' +
            'frameborder="0" allowfullscreen></iframe>'
  };

  if (options && options.state){
    this.model.source = options.source;
  }

  // define how the model is displayed to the user
  this.views = [
    {
      // returns html to be placed in destination element
      renderer: function(model){
        return "<div class='videoComponent'>" + String(model.source) + "</div>";
      },
      destination:options.destination,
      destinationInsertionFunction:"html"

    }
  ];

  this.adapters = [];
}
