// Traditional Chinese, zh-tw
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
    prefixFromNow: "從現在開始",
    suffixAgo: "之前",
    suffixFromNow: null,
    seconds: "不到1分鐘",
    minute: "大約1分鐘",
    minutes: "%d分鐘",
    hour: "大約1小時",
    hours: "%d小時",
    day: "大約1天",
    days: "%d天",
    month: "大約1個月",
    months: "%d個月",
    year: "大約1年",
    years: "%d年",
    numbers: [],
    wordSeparator: ""
  };
}));
