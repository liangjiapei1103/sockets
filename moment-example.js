var moment = require('moment');
var now = moment();

console.log(now.format());

console.log(now.format('X'));
console.log(now.format('x'));
console.log(now.valueOf());

var timestamp = 123124134;

var timestampMoment = moment.utc(timestamp);



console.log(timestampMoment.local().format("MMM DD YYYY, h:mm a"));

// now.subtract(1, 'year');

// console.log(now.format());
// console.log(now.format("MMM DD YYYY, h:mm a")); "Jan 29 2016, 6:45 pm"