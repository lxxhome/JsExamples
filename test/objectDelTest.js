//以下用于测试对象在内存中的存储（指向地址相同）

let body = {
    "brand": "FOL",
    "utmSource": "wx_goods_pic_qr",
    "utmMedium": "guideshare",
    "utmCampaign": 582838,
    "utmTerm": "DA00521325",
    "share_by": "DA00521325",
    "share_by_shop": "3X40",
    "nickname": "wly",
    "face_image": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJZHYUkrE0MiaVPbxxASUic3Z0oto62lrvC5Bvu886cY5BR0RX2kRJxeoOib2ia4LX2KmfqibAxM6ic6hYw/132",
    "coverimg_url": "https://cdn.bestseller.com.cn/assets/db_common/FOL/images/upload_897b9c3b25c3bf2c0c455b6154332b94.jpg",
    "qrcode_url": "https://cdn.bestseller.com.cn/shareQrImage/miniB/FOL_zID=DA005213251561684689460.png",
    "wxMomentGoodsPicTheme": "20190612"
};

let req=body;

delete body.nickname;
delete body.face_image;
delete body.utmSource;
delete body.utmMedium;
delete body.share_by;
delete body.share_by_shop;


console.log(body);
console.log('=================================================================================')
console.log(req);

