function clone(_in){
  return jQuery.extend(true, {}, _in);
}

function sidewaysBarGraphComponent( options ){

  this.model = { graph1: [[0, 3], [1,1], [2,2], [3,3], [4, 8], [5,5], [6,6], [7,7], [8, 5], [9, 13]] };

  if (options && options.state){
    this.model.state = options.state;
  }

  // define how the model is displayed to the user
  this.views = [
    { // not returning anything from the renderer function means that the 
      // rendering is handled already in this function and MVA doesn't need to
      // insert any html into the destination
      renderer: function(model){
        $.plot(options.destination,
               [ model.graph1 ],
               { xaxis: { min:0, max:10 },
                 yaxis: { min:0, max:10 },
                 series: {
                   bars: {
                     horizontal:true,
                     show: true,
                     barWidth: 0.6,
                     align: "center"
                   }
                 }
               }
        );
      },
      destination:options.destination
    }
  ];

  this.adapters = [
    function( id, views, model, setState ){

      model.interval = setInterval( 
        function(){
          var mod = clone(model);
          for ( var i = 0; i < mod.graph1.length; i++){
            mod.graph1[i][0] = parseInt( Math.random() * 10 );
          }
          setState(id, mod);
        },
        300
      );
    }
  ];
}
