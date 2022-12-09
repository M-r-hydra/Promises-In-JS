const promise = new Promise((resolve: Function, reject: Function) => {
  const err: boolean = false;
  if (!err) {
    resolve("Done !");
  } else [reject(new Error("Error Msg !"))];
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
