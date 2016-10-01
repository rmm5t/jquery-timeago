// Italian
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
    suffixAgo: "fa",
    suffixFromNow: "da ora",
    seconds: "meno di un minuto",
    minute: "circa un minuto",
    minutes: "%d minuti",
    hour: "circa un'ora",
    hours: "circa %d ore",
    day: "un giorno",
    days: "%d giorni",
    month: "circa un mese",
    months: "%d mesi",
    year: "circa un anno",
    years: "%d anni"
  };
}));
