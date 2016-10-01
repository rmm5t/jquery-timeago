// Indonesian
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
    prefixFromNow: null,
    suffixAgo: "yang lalu",
    suffixFromNow: "dari sekarang",
    seconds: "kurang dari semenit",
    minute: "sekitar satu menit",
    minutes: "%d menit",
    hour: "sekitar sejam",
    hours: "sekitar %d jam",
    day: "sehari",
    days: "%d hari",
    month: "sekitar sebulan",
    months: "%d bulan",
    year: "sekitar setahun",
    years: "%d tahun"
  };
}));
