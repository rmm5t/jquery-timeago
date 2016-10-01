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
    prefixAgo: "duela",
    prefixFromNow: "hemendik",
    suffixAgo: "",
    suffixFromNow: "barru",
    seconds: "minutu bat bainu gutxiago",
    minute: "minutu bat",
    minutes: "%d minutu inguru",
    hour: "ordu bat",
    hours: "%d ordu",
    day: "egun bat",
    days: "%d egun",
    month: "hilabete bat",
    months: "%d hilabete",
    year: "urte bat",
    years: "%d urte"
  };
}));
