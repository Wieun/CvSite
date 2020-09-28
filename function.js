var $header_top = $('.header-top');
var $nav = $('nav');

$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

$('#fullpage').fullpage({
  sectionsColor: ['#6D8C91', '#5A7478', '#6D8C91', '#5A7478', '#6D8C91'],
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    /*if (index == 5) {
        $('#fp-nav').hide();
      }*/
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },
});
