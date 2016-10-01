// Vietnamese
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
    prefixAgo: 'cách đây',
    prefixFromNow: null,
    suffixAgo: null,
    suffixFromNow: "trước",
    seconds: "chưa đến một phút",
    minute: "khoảng một phút",
    minutes: "%d phút",
    hour: "khoảng một tiếng",
    hours: "khoảng %d tiếng",
    day: "một ngày",
    days: "%d ngày",
    month: "khoảng một tháng",
    months: "%d tháng",
    year: "khoảng một năm",
    years: "%d năm",
    wordSeparator: " ",
    numbers: []
  };
}));
