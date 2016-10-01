//Lithuanian
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
    prefixAgo: "prieš",
    prefixFromNow: null,
    suffixAgo: null,
    suffixFromNow: "nuo dabar",
    seconds: "%d sek.",
    minute: "min.",
    minutes: "%d min.",
    hour: "val.",
    hours: "%d val.",
    day: "1 d.",
    days: "%d d.",
    month: "mėn.",
    months: "%d mėn.",
    year: "metus",
    years: "%d metus",
    wordSeparator: " ",
    numbers: []
  };
}));
