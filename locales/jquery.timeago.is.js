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
    prefixAgo: "fyrir",
    prefixFromNow: "eftir",
    suffixAgo: "síðan",
    suffixFromNow: null,
    seconds: "minna en mínútu",
    minute: "mínútu",
    minutes: "%d mínútum",
    hour: "klukkutíma",
    hours: "um %d klukkutímum",
    day: "degi",
    days: "%d dögum",
    month: "mánuði",
    months: "%d mánuðum",
    year: "ári",
    years: "%d árum",
    wordSeparator: " ",
    numbers: []
  };
}));
