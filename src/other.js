import _ from 'lodash';

// export default function () {
  
//   console.log(' call print.js');
//   return 1;
// }

const val = _.defaults({a: 10}, {a: 2, b: 5});
console.log(val);