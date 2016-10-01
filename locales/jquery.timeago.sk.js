// Slovak
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
    prefixAgo: "pred",
    prefixFromNow: null,
    suffixAgo: null,
    suffixFromNow: null,
    seconds: "menej než minútou",
    minute: "minútou",
    minutes: "%d minútami",
    hour: "hodinou",
    hours: "%d hodinami",
    day: "1 dňom",
    days: "%d dňami",
    month: "1 mesiacom",
    months: "%d mesiacmi",
    year: "1 rokom",
    years: "%d rokmi"
  };
}));
