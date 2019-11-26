(function (factory) {
    if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
      factory(require('jquery'));
    } else {
      factory(jQuery);
    }
  }(function (jQuery) {
    // English (Template)
    jQuery.timeago.settings.strings = {
      prefixAgo: null,
      prefixFromNow: null,
      suffixAgo: "ის წინ",
      suffixFromNow: null,
      seconds: "რამდენიმე წამ",
      minute: "1 წუთ",
      minutes: "%d წუთ",
      hour: "1 საათ",
      hours: "%d საათ",
      day: "1 დღ",
      days: "%d დღ",
      month: "1 თვ",
      months: "%d თვ",
      year: "1 წლ",
      years: "%d წლ",
      wordSeparator: "",
    };
  })
);