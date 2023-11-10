const os = require("os");

// info about crrent user
const user = os.userInfo();
console.log(user);

// method returns system uptime in secs
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release()
}

console.log(currentOS);