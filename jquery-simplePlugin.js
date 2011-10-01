(function($){
  
  $.fn.simplePlugin = function() {
    
    var defaults = {};

    return this.each(function(options) {
      if(options) { 
        settings = $.extend({}, settings, options );
      }
      
      //Plugin Logic
        
    });

  };

})(jQuery);


$("#selector").simplePlugin({myOption:true});