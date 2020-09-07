import svg4everybody from 'svg4everybody';
// import { tns } from "tiny-slider/src/tiny-slider"
// import pickmeup from 'pickmeup';
// import exhibitionSlider from '../../blocks/exhibition/exhibition';
// import aboutSlider from '../../blocks/about/about';
// import featuredSlider from '../../blocks/featured/featured';
// import popup from '../../blocks/popup/popup';

// import Tabby from 'tabbyjs';

// import levelsSlider from '../../blocks/levels/levels';
// import paymentSlider from '../../blocks/payment/payment';
// import faq from '../../blocks/faq/faq';

// import $ from 'jquery';

(function ($) {

  svg4everybody();

  let styles = [
    'padding: 2px 9px',
    'background: #2948ff',
    'color: #fff',
    'display: inline-block',
    'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 1.56',
    'text-align: left',
    'font-size: 16px',
    'font-weight: 400'
  ].join(';');

  console.log('%c Made with love ❤️ by Igor Gorlov https://igrlv.ru' , styles);


  /*
    Lazyload images
  */


  let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    // load_delay: 500,
    use_native: true
  });


  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }


  $(function() {


    // Nav

    // const $navTrigger = $('.header__trigger');
    // const $navMain = $('.header__nav');


    // $navTrigger.on( 'click', function(e) {
    //   $(this).toggleClass('header__trigger_active');
    //   $navMain.toggleClass('header__nav_active nav_active');
    // });


    // Sliders

    // if ($('.hero__slider').length > 0) {
    //   const slider = tns({
    //     container: '.hero__slider',
    //     autoHeight: true,
    //     items: 1,
    //     mode: 'gallery',
    //     speed: 300,
    //     mouseDrag: true,
    //     nav: false,
    //     controls: false,
    //     autoplayButton: false,

    //   });
    // }

    // Gallery

    const $galleryLink = $('.gallery__link');


    $galleryLink.magnificPopup({
      'type': 'image',
      'gallery': {
        enabled: true
      }
    });


    // Text more

    const $text = $('.text__text');
    const $textTrigger = $('.text__more');

    $textTrigger.on( 'click', function (e) {
      e.preventDefault();
      const $this = $(this);
      $this.toggleClass('text__more_active');
      $text.toggleClass('text__text_active');
      if ($this.hasClass('text__more_active')) {
        $this.html('Скрыть текст <svg class= "text__more-icon" width = "11px" height = "6px" ><use xlink: href="#arrow-down"></use></svg>');
      } else {
        $this.html('Раскрыть текст полностью <svg class= "text__more-icon" width = "11px" height = "6px" ><use xlink: href="#arrow-down"></use></svg>');
      }

    });


    /* Page list */

    function pageWidget(pages) {
      const widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
      widgetWrap.prependTo("body");
      for (let i = 0; i < pages.length; i++) {
        $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
      }
      const widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
      widgetStilization.prependTo(".widget_wrap");
    }

    pageWidget([
      'index',
      'category',

    ]);






  });




})(jQuery);
