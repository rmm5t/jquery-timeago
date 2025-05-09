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
    seconds: "लगभग एक मिनेट पहिले",
    minute: "एक मिनेट पहिले",
    minutes: "%d मिनेट पहिले",
    hour: "एक घण्टा पहिले",
    hours: "%d घण्टा पहिले",
    day: "एक दिन",
    days: "%d दिन",
    month: "एक महिना पहिले",
    months: "%d महिना पहिले",
    year: "एक वर्ष पहिले",
    years: "%d वर्ष पहिले",
    wordSeparator: " ",
    numbers: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"]
};
}));
