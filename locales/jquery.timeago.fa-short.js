// persion shortened
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
    seconds: "1دقیقه",
    minute: "1دقیقه",
    minutes: "%dدقیقه",
    hour: "1ساعت",
    hours: "%dساعت",
    day: "1روز",
    days: "%dروز",
    month: "1ماه",
    months: "%dماه",
    year: "1سال",
    years: "%dسال",
    wordSeparator: " ",
    numbers: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  };
}));
