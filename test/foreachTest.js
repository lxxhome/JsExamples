let body = {
    "skuCodes": ["218425519F38", "218425519E09", "218425519E13", "218425519E39"]
}

let skuCode = body.skuCodes;

let msg = '';
skuCode.forEach(sku => {
    if (sku.indexOf('F') > 0) {
        msg += sku;
    }
})
if (msg != '') {
    console.log(msg)
}