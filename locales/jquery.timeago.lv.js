//Latvian
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
    prefixAgo: "pirms",
    prefixFromNow: null,
    suffixAgo: null,
    suffixFromNow: "no šī brīža",
    seconds: "%d sek.",
    minute: "min.",
    minutes: "%d min.",
    hour: "st.",
    hours: "%d st.",
    day: "1 d.",
    days: "%d d.",
    month: "mēnesis.",
    months: "%d mēnesis.",
    year: "gads",
    years: "%d gads",
    wordSeparator: " ",
    numbers: []
  };
}));
