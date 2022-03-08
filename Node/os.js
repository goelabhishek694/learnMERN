const os = require("os");
// returns the underlying architecture 
let mySystemArch = os.arch();
// console.log(mySystemArch);

//return information on the cpus 
let myCpuInfo = os.cpus();
// console.log(myCpuInfo);

//Returns the host name of the operating system as a string
let hostName = os.hostname();
// console.log(hostName);
//Returns an object containing network interfaces that have been assigned a network address.
let networkInfo = os.networkInterfaces();
// console.log(networkInfo);

//Returns the operating system as a string.
console.log(os.release());

//Returns the platform nodejs was compiled for 
console.log(os.platform());

// Returns the operating system name
console.log(os.type());

//Returns the total amount of system memory in bytes as an integer.
console.log(os.totalmem());

//returns the system uptime in number of seconds.
// console.log(os.uptime());
let uptimeInHours = os.uptime() / 3600;
console.log(uptimeInHours);

//Returns information about the currently effective user
console.log(os.userInfo());