var geoip = require('geoip-lite');
const publicIp = require('public-ip');

publicIp.v4().then(ip => {
  console.log("your public ip address", ip);
});

var ip = "72.21.215.90";

var geo = geoip.lookup(ip);

console.log(geo);

