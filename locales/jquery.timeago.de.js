// German
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
    prefixAgo: "vor",
    prefixFromNow: "in",
    suffixAgo: "",
    suffixFromNow: "",
    seconds: "wenigen Sekunden",
    minute: "etwa einer Minute",
    minutes: "%d Minuten",
    hour: "etwa einer Stunde",
    hours: "%d Stunden",
    day: "etwa einem Tag",
    days: "%d Tagen",
    month: "etwa einem Monat",
    months: "%d Monaten",
    year: "etwa einem Jahr",
    years: "%d Jahren"
  };
}));
