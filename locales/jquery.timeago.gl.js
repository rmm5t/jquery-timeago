// Galician
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery', 'jquery.timeago'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery', 'jquery.timeago'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.timeago.settings.strings = {
    prefixAgo: "hai",
    prefixFromNow: "dentro de",
    suffixAgo: "",
    suffixFromNow: "",
    seconds: "menos dun minuto",
    minute: "un minuto",
    minutes: "uns %d minutos",
    hour: "unha hora",
    hours: "%d horas",
    day: "un día",
    days: "%d días",
    month: "un mes",
    months: "%d meses",
    year: "un ano",
    years: "%d anos"
  };
}));
