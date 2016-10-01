// Simplified Chinese
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
    prefixAgo: null,
    prefixFromNow: "从现在开始",
    suffixAgo: "之前",
    suffixFromNow: null,
    seconds: "不到1分钟",
    minute: "大约1分钟",
    minutes: "%d分钟",
    hour: "大约1小时",
    hours: "大约%d小时",
    day: "1天",
    days: "%d天",
    month: "大约1个月",
    months: "%d月",
    year: "大约1年",
    years: "%d年",
    numbers: [],
    wordSeparator: ""
  };
}));
