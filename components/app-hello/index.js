"use strict";

var defineComponent = require("marko-widgets").defineComponent;

module.exports = defineComponent({
	template: require("./template.marko"),

	getInitialState: function (input) {},

	init: function () {},

	async sendEmail() {
		const response = await axios({
			method: "POST",
			url: `/api/forms/post.promotions?lang=${this.state.lang}`,
			data: data,
		});
	},
});
