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
  // Amharic
  'use strict';
  jQuery.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: "በፊት",
    suffixFromNow: "በኋላ",
    seconds: "ከአንድ ደቂቃ በታች",
    minute: "ከአንድ ደቂቃ ገደማ",
    minutes: "ከ%d ደቂቃ",
    hour: "ከአንድ ሰዓት ገደማ",
    hours: "ከ%d ሰዓት ገደማ",
    day: "ከአንድ ቀን",
    days: "ከ%d ቀን",
    month: "ከአንድ ወር ገደማ",
    months: "ከ%d ወር",
    year: "ከአንድ ዓመት ገደማ",
    years: "ከ%d ዓመት",
    wordSeparator: " ",
    numbers: []
  };
}));
