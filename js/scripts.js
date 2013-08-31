// We assume that the
// latest version of jQuery is bound to jQ and the
// Drupal core version is bound to jQuery.
(function(jQuery, $, window, undefined) {

  // Document ready.
  $(function(){
      $.localScroll();

      $.stellar({
        verticalOffset: 250
      });

  });

  // Window load.
  $(window).load(function(){

  });
})(jQuery, $, window);


