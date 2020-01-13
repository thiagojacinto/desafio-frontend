export default function convertUTC(date) {
  // convert into milliseconds
  var localDate = new Date(
    date * 1000
  );
  // now, get the info:
  let hours = localDate.getHours();
  let minutes = localDate.getMinutes();
  let stringMinuts = ('' + minutes).substring(0,3)
  return hours + ':' + stringMinuts;
}