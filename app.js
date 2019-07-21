const express = require("express");
const PORT = process.env.PORT || 3000;
const Scrapelizer = require("@dbrudner/goog-web-scraper");

const app = express();

app.get("/:term", async (req, res) => {
	const { term } = req.params;

	const scraper = new Scrapelizer(term || "cat");

	const img = await scraper.scrape();

	res.json({ img: await img });
});

app.listen(PORT, () => console.log("Goliath online, go ahead tac-com"));
