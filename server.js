"use strict";

require("@babel/register");
require("marko/node-require").install();
const createGzip = require("zlib").createGzip;

const Koa = require("koa");
const R = require("koa-router");
const mount = require("koa-mount");

const app = new Koa();
const port = 8080;
const serve = require("koa-static");

const isProduction = process.env.NODE_ENV === "production";

// Configure lasso to control how JS/CSS/etc. is delivered to the browser
require("lasso").configure({
	require: {
		transforms: [
			{
				transform: "lasso-babel-transform",
			},
		],
	},
	plugins: [
		"lasso-marko", // Allow Marko templates to be compiled and transported to the browser
	],
	outputDir: __dirname + "/static", // Place all generated JS/CSS/etc. files into the "static" dir
	bundlingEnabled: isProduction, // Only enable bundling in production
	minify: isProduction, // Only minify JS and CSS code in production
	fingerprintsEnabled: isProduction, // Only add fingerprints to URLs in production
});

app.use(mount("/static", serve(`${__dirname}/static`)));

const router = new R();
const template = require("marko").load(require("./index.marko"));

router.get('/', (ctx, next) => {

	ctx.type = "html";
	ctx.body = template.stream({
		name: "Frank",
		count: 30,
		colors: ["red", "green", "blue"],
		tpl: ["1"]
	});

	ctx.vary("Accept-Encoding");
	if (ctx.acceptsEncodings("gzip")) {
		ctx.set("Content-Encoding", "gzip");
		ctx.body = ctx.body.pipe(createGzip());
	}
});
const sendAdminEmail = async (data, transporter) => {
	const emailPath = "emails/adminEmail.marko";
	const template = require("marko").load(emailPath, {
		writeToDisk: false,
	});

	const message = {
		to: "admin@admin.com",
		subject: "Subject of the email",
		html: template.stream(data),
	};

	try {
		await transporter.sendMail(message);
	} catch (error) {
		console.log("Sending admin email failed: ", error.message);
	}
};
router.post('/api/forms/post.promotions', async () => {
	const smtp = {
		host: "localhost",
		port: 25,
		secure: false,
	}
	const data = {
		firstName: "asd",
		lastName: "asd222",
		email: "sometempEmail@gasd.com",
		phone: "45635735735",
	};
	const transporter = mailer.createTransport(smtp, {
		from: "noreply@eh.com",
	});
	await sendAdminEmail(data, transporter);
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, function () {
	console.log(`Server started! Try it out:\nhttp://localhost:${port}/`);

	if (process.send) {
		process.send("online");
	}
});
