// Swedish
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
    prefixAgo: "för",
    prefixFromNow: "om",
    suffixAgo: "sedan",
    suffixFromNow: "",
    seconds: "mindre än en minut",
    minute: "ungefär en minut",
    minutes: "%d minuter",
    hour: "ungefär en timme",
    hours: "ungefär %d timmar",
    day: "en dag",
    days: "%d dagar",
    month: "ungefär en månad",
    months: "%d månader",
    year: "ungefär ett år",
    years: "%d år"
  };
}));
