// Sticky navbar
// =========================
$(document).ready(function () {
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop) {
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else {
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function () {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
      stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});




$(window).scroll(function () {
  var sticky = $('#header'),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('header-scrolled');
  else sticky.removeClass('header-scrolled');
});





$(".client-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 4000,
  dots: false,
  nav: false,
  margin: 30,
  loop: true,
  items: 5,
  navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
  responsive: {
    0: {
      items: 2
    },
    640: {
      items: 3
    },
    767: {
      items: 3
    },
    768: {
      items: 4
    },
    991: {
      items: 4
    },
    1000: {
      items: 5
    }
  }
});


$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("fa-minus fa-plus");
});

// Smooth scroll for the navigation and links with .scrollto classes
$('.main-nav a, .mobile-nav a, .scrollto').on('click', function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    if (target.length) {
      var top_space = 0;

      if ($('#header').length) {
        top_space = $('#header').outerHeight();

        if (!$('#header').hasClass('header-scrolled')) {
          top_space = top_space - 10;
        }
      }

      $('html, body').animate({
        scrollTop: target.offset().top - top_space
      }, 1500, 'easeInOutExpo');

      if ($(this).parents('.main-nav, .mobile-nav').length) {
        $('.main-nav .active, .mobile-nav .active').removeClass('active');
        $(this).closest('li').addClass('active');
      }

      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('.mobile-nav-overly').fadeOut();
      }
      //return false;
    }
  }

});

// Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('.main-nav, .mobile-nav');
var main_nav_height = $('#header').outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  nav_sections.each(function () {
    var top = $(this).offset().top - main_nav_height,
      bottom = top + 0;

    if (cur_pos >= top && cur_pos <= bottom) {
      main_nav.find('li').removeClass('active');
      main_nav.find('[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    }
  });
});

function owlInitialize() {
  if ($(window).width() < 767) {
    $('#amenities-carousel').addClass("owl-carousel");
    $('#amenities-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout: 6000,
      loop: true,
      dots: true,
      margin: 5,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        640: {
          items: 1,
        },
        767: {
          items: 1,
        }
      }
    });
  }
}





$("#gallery-others").owlCarousel({
  autoplay: true,
  autoplayTimeout: 6000,
  dots: false,
  loop: true,
  nav: true,
  autoWidth: true,
  margin: 0,
  items: 5,
  navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    640: {
      items: 1
    },
    767: {
      items: 2
    },
    768: {
      items: 3
    },
    991: {
      items: 3
    },
    1000: {
      items: 5,

    }
  }
});

$("#project-carousel").owlCarousel({
  autoplay: true,
  autoplayHoverPause: false,
  autoplay: 15000,
  smartSpeed: 700,
  nav: false,
  dots: true,
  loop: true,
  margin: 10,

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    800: {
      items: 3
    },
    1024: {
      items: 4
    },
    1100: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
});

$('#floor-plan-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: false,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: true,
    },
    600: {
      items: 1,
      nav: true,
      dots: true,

    },
    1000: {
      items: 2
    }
  }
})
$('#gallery-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: false,
  dots: false,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: true,
    },
    600: {
      items: 1,
      nav: true,
      dots: true,

    },
    1000: {
      items: 2
    }
  }
})
$('#amenities-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: false,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: true,
    },
    600: {
      items: 1,
      nav: true,
      dots: true,

    },
    1000: {
      items: 3
    }
  }
})

//floor-plan-gallery


//gallery

$(document).ready(function () {
  // add all to same gallery
  $(".gallery a").attr("data-fancybox", "mygallery");
  // assign captions and title from alt-attributes of images:
  $(".gallery a").each(function () {
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
  });
  // start fancybox:
  $(".gallery a").fancybox();
});

//image zoom script


$('.tile')
  // tile mouse actions
  .on('mouseover', function () {
    $(this).children('.photo').css({ 'transform': 'scale(' + $(this).attr('data-scale') + ')' });
  })
  .on('mouseout', function () {
    $(this).children('.photo').css({ 'transform': 'scale(1)' });
  })
  .on('mousemove', function (e) {
    $(this).children('.photo').css({ 'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%' });
  })
  // tiles set up
  .each(function () {
    $(this)
      // add a photo container
      .append('<div class="photo"></div>')
      // some text just to show zoom level on current item in this example
      .append('<div class="txt"><div class="x">' + $(this).attr('data-scale') + 'x</div>ZOOM ON<br>HOVER</div>')
      // set up a background image for each tile based on data-image attribute
      .children('.photo').css({ 'background-image': 'url(' + $(this).attr('data-image') + ')' });
  })


//Fact Counter + Text Count
if ($('.count-box').length) {
  $('.count-box').appear(function () {

    var $t = $(this),
      n = $t.find(".count-text").attr("data-stop"),
      r = parseInt($t.find(".count-text").attr("data-speed"), 10);

    if (!$t.hasClass("counted")) {
      $t.addClass("counted");
      $({
        countNum: $t.find(".count-text").text()
      }).animate({
        countNum: n
      }, {
        duration: r,
        easing: "linear",
        step: function () {
          $t.find(".count-text").text(Math.floor(this.countNum));
        },
        complete: function () {
          $t.find(".count-text").text(this.countNum);
        }
      });
    }

  }, { accY: 0 });
}


$(document).ready(function () {
  var submitIcon = $('.searchbox-icon');
  var inputBox = $('.searchbox-input');
  var searchBox = $('.searchbox');
  var isOpen = false;
  submitIcon.click(function () {
    if (isOpen == false) {
      searchBox.addClass('searchbox-open');
      inputBox.focus();
      isOpen = true;
    } else {
      searchBox.removeClass('searchbox-open');
      inputBox.focusout();
      isOpen = false;
    }
  });
  submitIcon.mouseup(function () {
    return false;
  });
  searchBox.mouseup(function () {
    return false;
  });
  $(document).mouseup(function () {
    if (isOpen == true) {
      $('.searchbox-icon').css('display', 'block');
      submitIcon.click();
    }
  });
});
function buttonUp() {
  var inputVal = $('.searchbox-input').val();
  inputVal = $.trim(inputVal).length;
  if (inputVal !== 0) {
    $('.searchbox-icon').css('display', 'none');
  } else {
    $('.searchbox-input').val('');
    $('.searchbox-icon').css('display', 'block');
  }
}

(function ($) {

  // Open Lightbox
  $('.open-lightbox').on('click', function (e) {
    e.preventDefault();
    var image = $(this).attr('href');
    $('html').addClass('no-scroll');
    $('body').append('<div class="lightbox-opened"><span class="zoom" id="ex1"><img src="' + image + '" width="555px" ></span></div>')
    $('#ex1').zoom();
  });
  $('.open-lightbox2').on('click', function (e) {
    e.preventDefault();
    var image = $(this).attr('href');
    $('html').addClass('no-scroll');
    $('body').append('<div class="lightbox-opened"><img src="' + image + '" width="800px" ></div>')

  });

  // Close Lightbox
  $('body').on('click', '.lightbox-opened', function () {
    $('html').removeClass('no-scroll');
    $('.lightbox-opened').remove();
  });

})(jQuery);



$(document).ready(function () {

  if ($('#header').hasClass('header-scrolled')) {
    $('.mobile-nav-toggle').addClass('position-menu');
    $('.mobile-nav-toggle').removeClass('position-none');
  } else {
    $('.mobile-nav-toggle').addClass('position-none');
    $('.mobile-nav-toggle').removeClass('position-menu');
  }



});

// Testimonials carousel (uses the Owl Carousel library)
$(".testimonials-carousel").owlCarousel({
  autoplay: false,
  nav: true,
  dots: false,
  navText: ["<i class='fa fa-chevron-left'></i> Prev", "Next <i class='fa fa-chevron-right'></i>"],
  loop: true,
  animateOut: 'fadeOut',
  responsive: {
    0: {
      items: 1,
      mouseDrag: false,
      touchDrag: true
    },
    768: {
      items: 1,
      mouseDrag: false,
      touchDrag: true
    },
    900: {
      items: 1
    }
  }
});

/*$(document).ready(function(e) {
  var t = "socket.io",
      n = "8080",
      r = "localhost",
      i = "localhost/";
  var s = ("https:" == document.location.protocol ? "https://" : "http://") + i;
$.when(
  $.getScript( "/mypath/myscript1.js" ),
  $.getScript( "/mypath/myscript2.js" ),
  $.getScript( "/mypath/myscript3.js" ),
  $.Deferred(function( deferred ){
      $( deferred.resolve );
  })
).done(function(){

  //place your code here, the scripts are all loaded

});
  $.getScript("https://" + r + ":" + n + "/" + t + "/" + t + ".js", function() {

      $(".chat_message").animate({
          scrollTop: $(".chat_message").outerHeight() + 1e7
      }, 1e3);
      var e = $(".id").val();
      var t = $(".my_user").val();
      var i = io.connect("https://" + r + ":" + n);
      var s = "id=" + e;
      $.ajax({
          type: "POST",
          url: name + "chat/login_check.php",
          data: s,
          success: function(e) {
              if (e != "") {
                  i.emit("new_chat_js_user_enter", e)
              }
          }
      });
      $.validate({
          form: "#chat_form",
          onSuccess: function() {
              var e = $("#chat_form").serialize();
              $.ajax({
                  type: "POST",
                  url: name + "chat/login_user.php",
                  data: e,
                  success: function(e) {
                      var t = e.split("-");
                      $(".my_user").val(t[1]);
                      $(".logout").attr("name", e);
                      $(".chat_form")[0].reset();
                      $(".logout").show();
                      $(".chat_message").show();
                      $(".chat_text_area").show();
                      $(".chat_entry").hide();
                      i.emit("new_chat_js_user_enter", e)
                  }
              })
          }
      });
      i.on("admin_chat_status_update", function(t) {
          var n = t.user_id;
          var r = t.status;
          if (n == e) {
              if (r == "1") {
                  $(".no_provider").text("Operator Joined the Chat.")
              } else {
                  $(".no_provider").text("Sorry, no operators are currently available")
              }
          }
      });
      i.on("admin_message_emit_update", function(e) {
          var t = e.from_id;
          var n = e.to_id;
          var r = "from_id=" + t + "&to_id=" + n;
          $.ajax({
              type: "POST",
              url: name + "chat/get_last_message.php",
              data: r,
              success: function(e) {
                  $(".chat_message").append(e);
                  $(".chat_message div:last-child").hide().fadeIn("slow");
                  $(".chat_message").animate({
                      scrollTop: $(".chat_message").outerHeight() + 1e8
                  }, 1e3)
              }
          })
      });
      $(".messag_send").keypress(function(e) {
          if (e.which == 13) {
              var t = $(".id").val();
              var n = $(".my_user").val();
              var r = $(this).val();
              var s = $(this).val().replace(/(^[\s]+|[\s]+$)/g, "");
              var o = "message=" + r + "&id=" + t;
              if (s != "") {
                  $(".messag_send").val("");
                  $.ajax({
                      type: "POST",
                      url: name + "chat/message_send.php",
                      data: o,
                      success: function(e) {
                          i.emit("user_message_emit", {
                              from_id: n,
                              to_id: t
                          });
                          $(".chat_message").append(e);
                          $(".chat_message div:last-child").hide().fadeIn("slow");
                          $(".chat_message").animate({
                              scrollTop: $(".chat_message").outerHeight() + 1e8
                          }, 1e3)
                      }
                  })
              }
              return false
          }
      });
      $(".logout").click(function(e) {
          var t = $(this).attr("name");
          i.emit("user_left_chat", t);
          $.ajax({
              type: "POST",
              url: name + "chat/user_logout.php",
              success: function(e) {
                  $(".chat_message").text("");
                  $(".logout").hide();
                  $(".chat_message").hide();
                  $(".chat_text_area").hide();
                  $(".chat_entry").show();
                  $(".my_user").val("");
                  $(".logout").attr("name", "")
              }
          });
          return false
      })
  })
});
*/
$(function () {
  $(".c_h").click(function (e) {
    if ($(".chat_container").is(":visible")) {
      $(".c_h .right_c .mini").text("+")
    } else {
      $(".c_h .right_c .mini").text("-")
    }
    $(".chat_container").slideToggle("slow");
    return false
  });
});


$(document).ready(function () {
  //called when key is pressed in textbox
  $("#frmphone, #frmphone2").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      //display error message
      $("#errmsg").html("Digits Only").show().fadeOut("slow");
      return false;
    }
  });
});

function testInput(event) {
  if ((event.keyCode != 8) && (event.keyCode != 37) && (event.keyCode != 39) && (event.keyCode != 46)) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/[a-zåäö ]/i);
    return pattern.test(value);
  }
}

$('#frmname, #frmname2').bind('keypress', testInput);

function validateEmail(emailField) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField.value) == false) {
    alert('Invalid Email Address');
    return false;
  }

  return true;

}


$('.our-video a').fancybox({
  caption: function (instance, item) {
    return $(this).parent().find('.card-text').html();
  }
});

$('.md-trigger').on('click', function (e) {
  $('#modal-1').toggleClass("md-show"); //you can list several class names
  e.preventDefault();
  $('.md-overlay').toggleClass("show"); //you can list several class names
  e.preventDefault();
});
$('#md-close').on('click', function (e) {
  $('#modal-1').toggleClass("md-show"); //you can list several class names
  e.preventDefault();
  $('.md-overlay').toggleClass("show"); //you can list several class names
  e.preventDefault();
});

$('.mobile-nav ul li a#md-trigger').on('click', function (e) {
  $("#menu").hide();
  $("body").removeClass("mobile-nav-active").css('overflow', 'visible');
  $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  $('#modal-1').addClass("md-show"); //you can list several class names
  e.preventDefault();
  $('.md-overlay').addClass("show"); //you can list several class names
  e.preventDefault();
});




let currentCaptchaCode = '';

function generateCaptcha() {
  currentCaptchaCode = Math.floor(1000 + Math.random() * 9000).toString();
  const captchaContainers = $('.imgcaptcha');
  if (captchaContainers.length > 0) {
    captchaContainers.each(function() {
      if (this.tagName === 'IMG') {
        const span = $('<span class="imgcaptcha imgcaptcha-text" style="font-family: \'Courier New\', Courier, monospace; font-weight: bold; font-size: 24px; letter-spacing: 5px; color: #d9232d; background: #e9ecef; padding: 6px 15px; border: 1px dashed #ccc; display: inline-block; user-select: none; text-shadow: 1px 1px #fff; line-height: 24px; vertical-align: middle;">' + currentCaptchaCode + '</span>');
        $(this).replaceWith(span);
      } else {
        $(this).text(currentCaptchaCode);
      }
    });
  }
}

$(document).ready(function() {
  generateCaptcha();
  $(document).on('click', '.refresh', function(e) {
    e.preventDefault();
    generateCaptcha();
  });
});

function validateCaptcha(event, formobj, type) {
  event.preventDefault();
  const form_id = formobj.id;
  const currentForm = $('#'+form_id); 
  const name = currentForm.find('.name-field').val();
  const phone = currentForm.find('.phone-field').val();
  
  var captchaInput = currentForm.find('#captcha').val();
  if (captchaInput === currentCaptchaCode) {
     // Send AJAX request to FormSubmit.co to email enquiries
     $.ajax({
         url: "https://formsubmit.co/ajax/javheri80@gmail.com",
         method: "POST",
         data: {
             name: name,
             phone: phone,
             _subject: "New Enquiry - Usha Residency Website"
         },
         dataType: "json",
         success: function(data) {
             console.log("Enquiry sent successfully:", data);
         },
         error: function(err) {
             console.error("Failed to send enquiry:", err);
         }
     });

     alert("Thank you for your enquiry! We have received your request and will contact you soon.");
     currentForm[0].reset();
     generateCaptcha();
     if ($('#modal-1').hasClass('md-show')) {
        $('#modal-1').removeClass('md-show');
        $('.md-overlay').removeClass('show');
     }
  } else {
     currentForm.find('#captcha').val('');
     alert("Please enter the correct captcha code!");
  }
  return false;
}

(function ($) {
    "use strict";
     $(function() {
        $('input').focus(function(){
          $(this).parents('.form-group').addClass('focused');
        });

        $('input').blur(function(){
          var inputValue = $(this).val();
          if ( inputValue == "" ) {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');  
          } else {
            $(this).addClass('filled');
          }
        });  
    });
}(jQuery));