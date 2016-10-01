// Javanesse (Boso Jowo)
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
    suffixAgo: "kepungkur",
    suffixFromNow: "seko saiki",
    seconds: "kurang seko sakmenit",
    minute: "kurang luwih sakmenit",
    minutes: "%d menit",
    hour: "kurang luwih sakjam",
    hours: "kurang luwih %d jam",
    day: "sedina",
    days: "%d dina",
    month: "kurang luwih sewulan",
    months: "%d wulan",
    year: "kurang luwih setahun",
    years: "%d tahun"
  };
}));
