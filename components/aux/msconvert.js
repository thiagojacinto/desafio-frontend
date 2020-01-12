export default function convertMS( milliseconds ) {
  var hour, minute, seconds;

  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  // day = Math.floor(hour / 24);
  hour = hour % 24;
  // day = day * 1;
  // Return in text

  var AMPM = hour > 12 ? ' PM' : ' AM';
  return hour + ' :' + minute + AMPM

  // return {
  //     // day: day,
  //     // hour: hour,
  //     // minute: minute,
  //     // seconds: seconds
  //     hour + 'h'
  // };
}

// Acknowledgements: Erichain Git: https://gist.github.com/Erichain/6d2c2bf16fe01edfcffa
