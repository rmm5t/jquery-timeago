// Estonian
jQuery.timeago.settings.strings = {
  prefixAgo: null,
  prefixFromNow: null,
  suffixAgo: "tagasi",
  suffixFromNow: "tulevikus",
  seconds: "vähem kui minut",
  minute: "umbes minut",
  minutes: "%d minutit",
  hour: "umbes tund aega",
  hours: "%d tundi",
  day: "päev",
  days: "%d päeva",
  month: "kuu",
  months: "%d kuud",
  year: "umbes aasta",
  years: "%d aastat"
};

// The above is not a great localization because one would usually
// write "2 minutes ago" in Estonian as "2 minutit tagasi", however
// one would write "2 minutes into the future" as "2 minuti pärast"
// which cannot be achieved with localization support this simple.
// This is because Estonian has case suffixes attached directly
// to the end of the word). As a workaround, the above localizations
// will say "2 minutit tulevikus" which is understandable but
// not as fluent.
// (Explanation borrowed from Finnish, with adaptations.)
