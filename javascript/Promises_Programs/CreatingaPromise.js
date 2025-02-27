const myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Operation successful");
        } else {
            reject("Operation failed");
        }
    }, 2000);
});

myPromise
    .then(result => console.log(result)) // Runs if resolved
    .catch(error => console.error(error)) // Runs if rejected
    .finally(() => console.log("Promise completed!"));