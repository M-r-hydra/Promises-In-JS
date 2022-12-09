"use strict";
const promise = new Promise((resolve, reject) => {
    const err = false;
    if (!err) {
        resolve("Done !");
    }
    else
        [reject(new Error("Error Msg !"))];
});
promise
    .then((result) => {
    console.log(result);
})
    .catch((err) => {
    console.log(err);
});
