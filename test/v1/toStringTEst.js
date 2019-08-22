let skuArr={
	"brand": "JLINDEBERG",
	"skuArr": [{
		"sku": "51813Z509PAF",
		"price": 900,
		"discount_price": 400,
		"discount": 9,
		"description": "男士时尚纯色棉质短袖翻领T恤51813Z509"
	}, {
		"sku": "51823Z503OOA",
		"price": 900,
		"discount_price": 400,
		"discount": 9,
		"description": "男士时尚纯色棉质短袖翻领T恤51823Z503"
	}, {
		"sku": "519101518K00",
		"price": 500,
		"discount_price": 250,
		"discount": 9,
		"description": "男士早春刺绣时尚圆领纯色短袖T恤519101518"
	}, {
		"sku": "51923Z502OVQ",
		"price": 800,
		"discount_price": 560,
		"discount": 9,
		"description": "男士春夏新款潮流logo休闲翻领短袖T恤51923Z502"
	}, {
		"sku": "5181K1502OY2",
		"price": 1100,
		"discount_price": 490,
		"discount": 9,
		"description": "男士商务休闲纯色棉质短袖翻领T恤5181K1502"
	}, {
		"sku": "519101501RPR",
		"price": 700,
		"discount_price": 350,
		"discount": 9,
		"description": "男士棉质主题刺绣logo圆领短袖T恤519101501"
	}, {
		"sku": "518101503RAJ",
		"price": 700,
		"discount_price": 310,
		"discount": 9,
		"description": "J.LINDEBERG男士时尚胶印图案棉质圆领T恤518101503"
	}, {
		"sku": "51813Z509NMO",
		"price": 900,
		"discount_price": 400,
		"discount": 9,
		"description": "男士时尚纯色棉质短袖翻领T恤51813Z509"
	}],
	"utmSource": "wx_goods_pic_qr",
	"utmMedium": "guideshare",
	"utmCampaign": 21852,
	"utmTerm": "DA00403407",
	"share_by": "DA00403407",
	"share_by_shop": "0000",
	"coverimg_url": "https://cdn.bestseller.com.cn/coverImage/DA00403407/upload_0af66243f459c5ff690dc8dfc4c65cea.jpg",
	"qrcode_url": "https://cdn.bestseller.com.cn/shareQrImage/miniB/JLINDEBERG_zID=DA004034071565340558018.png",
	"wxMomentGoodsPicTheme": "20190103"
};



for (let oneSku of skuArr.skuArr) {
    for (let name in oneSku) {
        oneSku[name] = oneSku[name].toString();
        console.log(oneSku[name]);
    }
}


let a='test';
