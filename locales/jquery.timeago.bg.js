// Bulgarian
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
    prefixAgo: "преди",
    prefixFromNow: "след",
    suffixAgo: null,
    suffixFromNow: null,
    seconds: "по-малко от минута",
    minute: "една минута",
    minutes: "%d минути",
    hour: "един час",
    hours: "%d часа",
    day: "един ден",
    days: "%d дни",
    month: "един месец",
    months: "%d месеца",
    year: "една година",
    years: "%d години"
  };
}));
