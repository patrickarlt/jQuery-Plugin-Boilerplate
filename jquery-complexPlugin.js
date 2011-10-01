(function($){
    
  var defaults = {};

  var methods = {
    init: function(options) {
      //Merge Options With Defaults
      var settings = $.extend({}, settings, options ),

      return this.each(function(){
        //Setup Variables
        var $this = $(this), //jQuery Object
            self = $this, //self can be passed to anonymous functions
            data = $this.data('complexPlugin'); //Store data about the plugin
  
        //Plugin Has Not Been Intialized Yet
        if(!data){
          
          //Setup Plugin Data
          $this.data('complexPlugin', {
            target : $this,
            options : settings
          });
            
          //Intialization Logic
        }
      });
    },
    sampleMethod: function(arguments) {
      //Setup Variables
      var settings = $.extend({}, settings, options ),
          $this = $(this),
          self = $this,
          data = $this.data('complexPlugin');
      
      //Method Logic  
      return this.each(function(){
        
      });
    }
  };

  $.fn.complexPlugin = function( method ) {
    
    // Method Calling Logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.complexPlugin' );
    }    
  
  };

})(jQuery);