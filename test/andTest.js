let responseBody = {
    data: {
        status: 'TransactionSuccess',
    }
};

let orderStstus = responseBody.data && responseBody.data.status;
console.log(orderStstus);