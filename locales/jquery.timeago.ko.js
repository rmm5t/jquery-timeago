// Korean
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
    suffixAgo: "전",
    suffixFromNow: "후",
    seconds: "1분",
    minute: "약 1분",
    minutes: "%d분",
    hour: "약 1시간",
    hours: "약 %d시간",
    day: "하루",
    days: "%d일",
    month: "약 1개월",
    months: "%d개월",
    year: "약 1년",
    years: "%d년",
    wordSeparator: " ",
    numbers: []
  };
}));
