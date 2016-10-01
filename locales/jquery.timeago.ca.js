// Catalan
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
    prefixAgo: "fa",
    prefixFromNow: "d'aquí",
    suffixAgo: null,
    suffixFromNow: null,
    seconds: "menys d'un minut",
    minute: "un minut",
    minutes: "%d minuts",
    hour: "una hora",
    hours: "%d hores",
    day: "un dia",
    days: "%d dies",
    month: "un mes",
    months: "%d mesos",
    year: "un any",
    years: "%d anys",
    wordSeparator: " ",
    numbers: []
  };
}));
