(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // English (Template)
  jQuery.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: "dura",
    suffixFromNow: "booda",
    seconds: "daqiiqa tokko dura",
    minute: "gara daqiiqa tokko",
    minutes: "daqiiqa %d irraa",
    hour: "gara sa'atii tokkoo",
    hours: "gara daqiiqa %d ",
    day: "guyyaa tokko irraa",
    days: "guyyaa %d ",
    month: "gara ji'a tokkoo",
    months: "ji'a %d irraa",
    year: "gara waggaa tokkoo",
    years: "waggaa %d irraa ",
    wordSeparator: " ",
    numbers: []
  };
}));
