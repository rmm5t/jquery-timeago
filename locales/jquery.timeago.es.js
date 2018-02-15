(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'jquery-timeago'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'), require('jquery-timeago'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // Spanish
  jQuery.timeago.settings.strings = {
     prefixAgo: "hace",
     prefixFromNow: "dentro de",
     suffixAgo: "",
     suffixFromNow: "",
     seconds: "menos de un minuto",
     minute: "un minuto",
     minutes: "unos %d minutos",
     hour: "una hora",
     hours: "%d horas",
     day: "un día",
     days: "%d días",
     month: "un mes",
     months: "%d meses",
     year: "un año",
     years: "%d años"
  };
}));

