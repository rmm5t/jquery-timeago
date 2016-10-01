// Romanian
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
    prefixAgo: "acum",
    prefixFromNow: "in timp de",
    suffixAgo: "",
    suffixFromNow: "",
    seconds: "mai putin de un minut",
    minute: "un minut",
    minutes: "%d minute",
    hour: "o ora",
    hours: "%d ore",
    day: "o zi",
    days: "%d zile",
    month: "o luna",
    months: "%d luni",
    year: "un an",
    years: "%d ani"
  };
}));
