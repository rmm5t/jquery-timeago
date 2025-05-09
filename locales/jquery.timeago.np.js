(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // Nepali
  jQuery.timeago.settings.strings = {
    suffixAgo: "पहिले",
    suffixFromNow: "अहिले देखि",
    suffixAgo: "पहिले",
    suffixFromNow: "पछि",
    seconds: "लगभग एक मिनेट",
    minute: "एक मिनेट",
    minutes: "%d मिनेट",
    hour: "एक घण्टा",
    hours: "%d घण्टा",
    day: "एक दिन",
    days: "%d दिन",
    month: "एक महिना",
    months: "%d महिना",
    year: "एक वर्ष",
    years: "%d वर्ष",
    wordSeparator: " ",
    numbers: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"]
};
}));
