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
    suffixFromNow: "अब देखि",
    suffixAgo: "पहिले",
    suffixFromNow: "पछि",
    seconds: "एक मिनेट भन्दा कम",
    minute: "लगभग एक मिनेट",
    minutes: "%d मिनेट",
    hour: "लगभग एक घण्टा",
    hours: "लगभग %d घण्टा",
    day: "एक दिन",
    days: "%d दिन",
    month: "लगभग एक महिना",
    months: "%d महिना",
    year: "लगभग एक वर्ष",
    years: "%d वर्ष",
    wordSeparator: " ",
    numbers: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"]
};
}));
