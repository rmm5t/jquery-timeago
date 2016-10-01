// Macedonian
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
 $.timeago.settings.strings={
    prefixAgo: "пред",
    prefixFromNow: "за",
    suffixAgo: null,
    suffixFromNow: null,
    seconds: "%d секунди",
    minute: "%d минута",
    minutes: "%d минути",
    hour: "%d час",
    hours: "%d часа",
    day: "%d ден",
    days: "%d денови" ,
    month: "%d месец",
    months: "%d месеци",
    year: "%d година",
    years: "%d години"
 };
}));
