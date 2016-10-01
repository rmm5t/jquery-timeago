// Persian
// Use DIR attribute for RTL text in Persian Language for ABBR tag .
// By MB.seifollahi@gmail.com
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
    suffixAgo: "پیش",
    suffixFromNow: "از حال",
    seconds: "کمتر از یک دقیقه",
    minute: "حدود یک دقیقه",
    minutes: "%d دقیقه",
    hour: "حدود یک ساعت",
    hours: "حدود %d ساعت",
    day: "یک روز",
    days: "%d روز",
    month: "حدود یک ماه",
    months: "%d ماه",
    year: "حدود یک سال",
    years: "%d سال",
    wordSeparator: " ",
    numbers: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  };
}));
