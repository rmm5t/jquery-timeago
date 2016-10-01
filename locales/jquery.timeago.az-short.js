// Azerbaijani shortened
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
  // Azerbaijani shortened
  $.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: "",
    suffixFromNow: "",
    seconds: '1 dəq',
    minute: '1 dəq',
    minutes: '%d dəq',
    hour: '1 saat',
    hours: '%d saat',
    day: '1 gün',
    days: '%d gün',
    month: '1 ay',
    months: '%d ay',
    year: '1 il',
    years: '%d il',
    wordSeparator: '',
    numbers: []
  };
}));
