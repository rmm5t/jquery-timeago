// Brazilian Portuguese
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
