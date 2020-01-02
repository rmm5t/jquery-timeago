(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // English (Template) -> Esperanto
  jQuery.timeago.settings.strings = {
    prefixAgo: "antaŭ",
    prefixFromNow: null,
    suffixAgo: null,
    suffixFromNow: "de nun",
    seconds: "malpli ol minuto",
    minute: "ĉirkaŭ uno minuto",
    minutes: "%d minutoj",
    hour: "ĉirkaŭ uno horo",
    hours: "ĉirkaŭ %d horojn",
    day: "ĉirkaŭ tago",
    days: "%d tagoj",
    month: "ĉirkaŭ unu monato",
    months: "%d monatoj",
    year: "ĉirkaŭ unu jaro",
    years: "%d jaroj",
    wordSeparator: " ",
    numbers: []
  };
}));
