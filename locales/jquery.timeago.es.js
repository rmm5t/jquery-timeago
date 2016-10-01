// Spanish
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.timeago.settings.strings = {
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
