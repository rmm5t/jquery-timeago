/**
 * Dhivehi time in Thaana for timeago.js
 **/
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
    suffixAgo: "ކުރިން",
    suffixFromNow: "ފަހުން",
    seconds: "ސިކުންތުކޮޅެއް",
    minute: "މިނިޓެއްވަރު",
    minutes: "%d މިނިޓު",
    hour: "ގަޑިއެއްވަރު",
    hours: "ގާތްގަނޑަކަށް %d ގަޑިއިރު",
    day: "އެއް ދުވަސް",
    days: "މީގެ %d ދުވަސް",
    month: "މަހެއްވަރު",
    months: "މީގެ %d މަސް",
    year: "އަހަރެއްވަރު",
    years: "މީގެ %d އަހަރު",
    wordSeparator: " ",
    numbers: []
  };
}));
