(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // Thai
  'use strict';
  jQuery.timeago.settings.strings = {
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
