(function(){
  $(window).scroll(function () {
      var top = $(document).scrollTop();
      $('.splash').css({
        'background-position': '0px -'+(top/3).toFixed(2)+'px'
      });
      if(top > 50)
        $('#home > .navbar').removeClass('navbar-transparent');
      else
        $('#home > .navbar').addClass('navbar-transparent');
  });

  $("a[href='#']").click(function(e) {
    e.preventDefault();
  });

  var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function(){
    var html = $(this).parent().html();
    html = cleanSource(html);
    $("#source-modal pre").text(html);
    $("#source-modal").modal();
  });

  $('.bs-component [data-toggle="popover"]').popover();
  $('.bs-component [data-toggle="tooltip"]').tooltip();

  $(".bs-component").hover(function(){
    $(this).append($button);
    $button.show();
  }, function(){
    $button.hide();
  });

  function cleanSource(html) {
    html = html.replace(/×/g, "&times;")
               .replace(/«/g, "&laquo;")
               .replace(/»/g, "&raquo;")
               .replace(/←/g, "&larr;")
               .replace(/→/g, "&rarr;");

    var lines = html.split(/\n/);

    lines.shift();
    lines.splice(-1, 1);

    var indentSize = lines[0].length - lines[0].trim().length,
        re = new RegExp(" {" + indentSize + "}");

    lines = lines.map(function(line){
      if (line.match(re)) {
        line = line.substring(indentSize);
      }

      return line;
    });

    lines = lines.join("\n");

    return lines;
  }

  var hover_menu = function(){

    var nav_item =  $('.navbar__item--parent'),
        submenu = nav_item.children('.submenu');

        nav_item.mouseenter(function(){
          submenu.fadeIn();
        })
        .mouseleave(function(){
          submenu.fadeOut('fast');
        });

  };

  var hide_menu = function(){

    var main_menu = $('.main-menu'),
        the_menu = $('#the-menu');

    $('#menu-hover').mouseenter(function(){

      if($(window).innerWidth() >= 768 && the_menu.visible(true) === false){
        
       the_menu.addClass('show-the-menu');

      }
    })
    .mouseleave(function(){
     the_menu.removeClass('show-the-menu');
    });

  }

  hover_menu();

  hide_menu();

})();
