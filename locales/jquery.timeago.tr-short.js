// Turkish shortened
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
    suffixAgo: "",
    suffixFromNow: "",
    seconds: "1sn",
    minute: "1d",
    minutes: "%dd",
    hour: "1s",
    hours: "%ds",
    day: "1g",
    days: "%dg",
    month: "1ay",
    months: "%day",
    year: "1y",
    years: "%dy",
    wordSeparator: " ",
    numbers: []
  };
}));
