jQuery.timeago.settings.strings = {
    prefixAgo: "منذ",
    prefixFromNow: "يتبقى",
    suffixAgo: null,
    suffixFromNow: null, // null OR "من الآن"
    second: function(value) { return numpf(value, [
      'أقل من ثانية',
       'ثانية واحدة',
       'ثانيتين',
       '%d ثوانٍ',
       '%d ثانية',
       '%d ثانية']); },
    seconds: function(value) { return numpf(value, [
      'أقل من ثانية',
       'ثانية واحدة',
       'ثانيتين',
       '%d ثوانٍ',
       '%d ثانية',
       '%d ثانية']); },
    minute: function(value) { return numpf(value, [
      'أقل من دقيقة',
       'دقيقة واحدة',
       'دقيقتين',
       '%d دقائق',
       '%d دقيقة',
       'دقيقة']); },
    minutes: function(value) { return numpf(value, [
      'أقل من دقيقة',
       'دقيقة واحدة',
       'دقيقتين',
       '%d دقائق',
       '%d دقيقة',
       'دقيقة']); },
    hour:  function(value) { return numpf(value, [
      'أقل من ساعة',
       'ساعة واحدة',
       'ساعتين',
       '%d ساعات',
       '%d ساعة',
       '%d ساعة']); },
    hours: function(value) { return numpf(value, [
      'أقل من ساعة',
       'ساعة واحدة',
       'ساعتين',
       '%d ساعات',
       '%d ساعة',
       '%d ساعة']); },
    day:  function(value) { return numpf(value, [
      'أقل من يوم',
       'يوم واحد',
       'يومين',
       '%d أيام',
       '%d يومًا',
       '%d يوم']); },
    days: function(value) { return numpf(value, [
      'أقل من يوم',
       'يوم واحد',
       'يومين',
       '%d أيام',
       '%d يومًا',
       '%d يوم']); },
    month:  function(value) { return numpf(value, [
      'أقل من شهر',
       'شهر واحد',
       'شهرين',
       '%d أشهر',
       '%d شهرًا',
       '%d شهر']); },
    months: function(value) { return numpf(value, [
      'أقل من شهر',
       'شهر واحد',
       'شهرين',
       '%d أشهر',
       '%d شهرًا',
       '%d شهر']); },
    year:  function(value) { return numpf(value,  [
      'أقل من عام',
       'عام واحد',
       '%d عامين',
       '%d أعوام',
       '%d عامًا']);
     },
    years: function(value) { return numpf(value,  [
      'أقل من عام',
       'عام واحد',
       'عامين',
       '%d أعوام',
       '%d عامًا',
       '%d عام']);}
  };
})();
