function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("User data fetched");
            resolve({ userId: 101, name: "Devendra" });
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Orders for User ID ${userId} fetched`);
            resolve(["Order1", "Order2", "Order3"]);
        }, 1000);
    });
}

function processPayment(order) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Payment processed for ${order}`);
            resolve("Payment Successful ✅");
        }, 1000);
    });
}

// **Chaining Promises**
getUser()
    .then(user => getOrders(user.userId))
    .then(orders => processPayment(orders[0]))
    .then(paymentStatus => console.log(paymentStatus))
    .catch(error => console.error("Error:", error));
