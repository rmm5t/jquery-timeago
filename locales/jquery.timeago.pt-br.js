(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'jquery-timeago'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'), require('jquery-timeago'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // Brazilian Portuguese 
  jQuery.timeago.settings.strings = {
     prefixAgo: "há",
     prefixFromNow: "em",
     suffixAgo: null,
     suffixFromNow: null,
     seconds: "alguns segundos",
     minute: "um minuto",
     minutes: "%d minutos",
     hour: "uma hora",
     hours: "%d horas",
     day: "um dia",
     days: "%d dias",
     month: "um mês",
     months: "%d meses",
     year: "um ano",
     years: "%d anos"
  };
}));
