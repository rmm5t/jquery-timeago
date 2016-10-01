// Hungarian
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
    suffixAgo: null,
    suffixFromNow: null,
    seconds: "kevesebb mint egy perce",
    minute: "körülbelül egy perce",
    minutes: "%d perce",
    hour: "körülbelül egy órája",
    hours: "körülbelül %d órája",
    day: "körülbelül egy napja",
    days: "%d napja",
    month: "körülbelül egy hónapja",
    months: "%d hónapja",
    year: "körülbelül egy éve",
    years: "%d éve"
  };
}));
