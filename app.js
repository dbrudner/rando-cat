const express = require("express");
const PORT = process.env.PORT || 3000;
const Scrapelizer = require("@dbrudner/goog-web-scraper");

const app = express();

app.get("/", async (req, res) => {
	const catScraper = new Scrapelizer("cat");

	const img = await catScraper.scrape();

	console.log(img);

	res.json({ img: await img });
});

app.listen(PORT, () => console.log("Goliath online, go ahead tac-com"));
