/* this is a very simple MVAlib component which can be clicked to "turn on or off" */
/* TODO - Immediately Invoked Function Expression ? */

function OnOff( options ){

  // TODO - MVA will copy model to a safe place, pass safe model to renderer/template and adapter(s)
  this.model = {state:true};

  if (options && options.state){
    this.model.state = options.state;
  }

  // define how the model is displayed to the user
  this.views = [
      {
        // returns html to be placed in destination element
        renderer: function(model){
          return "<div class='onOffComponent state_" + String(model.state) + "'>" +
                 "<p>Click me</p><p>state = " + String(model.state) + "</p></div>";
        },
             // or
        // link to html template here, model state is mapped to keywords in template
        // template: "xxx"

        // jquery selector
        destination:options.destination || "#c0", // TODO - is this  a good name for using .html()
        destinationInsertionFunction:"html"

        // TODO - allow appending into a container element instead
        // TODO - or maybe allow supplying jquery methods like

        // $(dest).append, .appendTo, .html, .prepend, .prependTo
      }
  ];

  /* by default, model state changes are caught by MVA and the renderer is rerun.
     The adapters here are for UI events that affect the component model state.
       Also, async events can be added 
         TODO - what about streaming data?
         TODO - what about push events (socket.io?)
  */
  this.adapters = [
    function( id, views, model, setState ){

      var el = views[0].destination;

	  $(el).click(
		function(e){
		  model.state = !model.state;
		  setState( id, model );
		}
	  );
    }
  ];
}
