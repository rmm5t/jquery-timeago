// French
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
    // environ ~= about, it's optional
    prefixAgo: "il y a",
    prefixFromNow: "d'ici",
    seconds: "moins d'une minute",
    minute: "environ une minute",
    minutes: "environ %d minutes",
    hour: "environ une heure",
    hours: "environ %d heures",
    day: "environ un jour",
    days: "environ %d jours",
    month: "environ un mois",
    months: "environ %d mois",
    year: "un an",
    years: "%d ans"
  };
}));
