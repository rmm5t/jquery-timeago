(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // Latvian
  'use strict';
  jQuery.timeago.settings.strings = {
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
