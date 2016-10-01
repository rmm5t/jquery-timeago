// Norwegian
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
    prefixAgo: "for",
    prefixFromNow: "om",
    suffixAgo: "siden",
    suffixFromNow: "",
    seconds: "mindre enn et minutt",
    minute: "ca. et minutt",
    minutes: "%d minutter",
    hour: "ca. en time",
    hours: "ca. %d timer",
    day: "en dag",
    days: "%d dager",
    month: "ca. en måned",
    months: "%d måneder",
    year: "ca. et år",
    years: "%d år"
  };
}));
