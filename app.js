const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const Scrapelizer = require("@dbrudner/goog-web-scraper");

const app = express();

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/:term", async (req, res) => {
	const { term } = req.params;

	const scraper = new Scrapelizer(term || "cat", {
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	});

	const img = await scraper.scrape();

	res.json({ img: await img });
});

app.listen(PORT, () => console.log("Goliath online, go ahead tac-com"));
