
/*
will not work because this inside applyDiscounts inner function is global


var cart = {
	items: [
		{ name: 'apple', category: 'produce', price: 0.97, qty: 3 },
		{ name: 'whole canned corn', category: 'canned goods', price: 0.79, qty: 1 },
		{ name: 'lettuce', category: 'produce', price: 0.79, qty: 1 },
		{ name: '2% milk (1q)', category: 'dairy', price: 2.79, qty: 1 },
	],
	discounts: {
		'produce': 0.1,
		'canned goods': 0.2,
	},
	applyDiscounts: function () {
		this.items.forEach(function (item) {
			var discount = this.discounts[item.category];
			if(!discount) return;
			item.discount = item.price * discount;

        });

    }
};
 */


var cart = {
    items: [
        { name: 'apple', category: 'produce', price: 0.97, qty: 3 },
        { name: 'whole canned corn', category: 'canned goods', price: 0.79, qty: 1 },
        { name: 'lettuce', category: 'produce', price: 0.79, qty: 1 },
        { name: '2% milk (1q)', category: 'dairy', price: 2.79, qty: 1 },
    ],
    discounts: {
        'produce': 0.1,
        'canned goods': 0.2,
    },
    applyDiscounts: function () {
        var that = this; // that is a regular var, not a special this, so even that and this point to the same obj, that way will work
    	this.items.forEach(function (item) {
            var discount = that.discounts[item.category];
            if(!discount) return;
            item.discount = item.price * discount;

        });

    }
};

cart.applyDiscounts();
cart.items;