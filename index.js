"use strict";
const users = [
    {
        userId: 1,
        userName: "hydra 1",
    },
    {
        userId: 2,
        userName: "hydra 2",
    },
    {
        userId: 3,
        userName: "hydra 3",
    },
];
function getUserData(userId) {
    return users.find((item) => item.userId === userId)
        ? users.find((item) => item.userId === userId)
        : false;
}
function getUserRepositories(user) {
    // get From GITHUB API
    // ..
    // ..
    const userRepos = ["repo1", "repo2", "repo3"];
    console.log(`for user ${user.userId} - save ${userRepos.length} repos - repos are : ${userRepos}`);
    return userRepos;
}
const promise = new Promise((resolve, reject) => {
    const user = getUserData(2);
    if (user) {
        resolve(user);
    }
    else {
        reject(new Error("selected User Not Found !"));
    }
});
promise
    .then((result) => {
    console.log(result);
})
    .catch((err) => {
    console.log(err);
});
