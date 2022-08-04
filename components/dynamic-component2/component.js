const lassoLoader = require("lasso-loader");

module.exports = {
	onCreate() {
        this.state = { template: undefined, err: undefined }
	},
	onMount() {
		const { state, input } = this;
		lassoLoader.async(function (err) {
			if (err) {
				state.err = err;
				return;
			}
			state.template = require(`../component-${input.template}/index.marko`);
		});
	},
};
