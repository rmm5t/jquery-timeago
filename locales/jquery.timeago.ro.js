(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // Romanian
  jQuery.timeago.settings.strings = {
    prefixAgo: "acum",
    prefixFromNow: "peste",
    suffixAgo: "",
    suffixFromNow: "",
    seconds: "mai puțin de un minut",
    minute: "un minut",
    minutes: "%d minute",
    hour: "o oră",
    hours: "%d ore",
    day: "o zi",
    days: "%d zile",
    month: "o lună",
    months: "%d luni",
    year: "un an",
    years: "%d ani"
  };
}));

