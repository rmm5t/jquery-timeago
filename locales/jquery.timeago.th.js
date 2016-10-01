// Thai
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
    suffixAgo: "ที่แล้ว",
    suffixFromNow: "จากตอนนี้",
    seconds: "น้อยกว่าหนึ่งนาที",
    minute: "ประมาณหนึ่งนาที",
    minutes: "%d นาที",
    hour: "ประมาณหนึ่งชั่วโมง",
    hours: "ประมาณ %d ชั่วโมง",
    day: "หนึ่งวัน",
    days: "%d วัน",
    month: "ประมาณหนึ่งเดือน",
    months: "%d เดือน",
    year: "ประมาณหนึ่งปี",
    years: "%d ปี",
    wordSeparator: "",
    numbers: []
  };
}));
