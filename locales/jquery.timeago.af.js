// Afrikaans
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
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: "gelede",
    suffixFromNow: "van nou af",
    seconds: "%d sekondes",
    minute: "1 minuut",
    minutes: "%d minute",
    hour: "1 uur",
    hours: "%d ure",
    day: "1 dag",
    days: "%d dae",
    month: "1 maand",
    months: "%d maande",
    year: "1 jaar",
    years: "%d jaar",
    wordSeparator: " ",
    numbers: []
  };
}));
