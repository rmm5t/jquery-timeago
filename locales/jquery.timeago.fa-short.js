(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // persian shortened
  jQuery.timeago.settings.strings["fa-short"] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: "",
    suffixFromNow: "",
    seconds: "1دقیقه",
    minute: "1دقیقه",
    minutes: "%dدقیقه",
    hour: "1ساعت",
    hours: "%dساعت",
    day: "1روز",
    days: "%dروز",
    month: "1ماه",
    months: "%dماه",
    year: "1سال",
    years: "%dسال",
    wordSeparator: " ",
    numbers: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  };
}));
