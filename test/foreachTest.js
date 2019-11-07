let body = {
    "codes": ["19F38", "19E09", "519E13", "19E39"]
}

let skuCode = body.codes;

let msg = '';
code.forEach(sku => {
    if (sku.indexOf('F') > 0) {
        msg += sku;
    }
})
if (msg != '') {
    console.log(msg)
}