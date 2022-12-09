type userId_Type = string | number;

interface I_User {
  userId: userId_Type;
  userName: string;
}

const users: I_User[] = [
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

function getUserData(userId: userId_Type) {
  return users.find((item) => item.userId === userId)
    ? users.find((item) => item.userId === userId)
    : false;
}

function getUserRepositories(user: I_User) {
  // get From GITHUB API
  // ..
  // ..
  const userRepos: string[] = ["repo1", "repo2", "repo3"];
  console.log(
    `for user ${user.userId} - save ${userRepos.length} repos - repos are : ${userRepos}`
  );
  return userRepos;
}

const promise = new Promise((resolve: Function, reject: Function) => {
  const user = getUserData(2);
  if (user) {
    resolve(user);
  } else {
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
