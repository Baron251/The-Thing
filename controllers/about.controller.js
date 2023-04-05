const router = require("express").Router();

// Singular bingus route
router.get("/bingus", (req, res) => {
	res.send(`
	<head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head>
	<h2>Bingus</h2>
	<a href="http://localhost:4000/">Home</a>
	<a href="http://localhost:4000/meme/bingus">Bingus</a>
    <p class="infop">Bingus is a hairless Sphynx cat that originated from a video in which he is pet while staring at his owner. Attracting attention on Instagram in March 2020, Bingus’ popularity exploded in September after he appeared in a viral Reddit post, which later resulted in online users referring to all Sphynxes as "Bingus."</p>`);
});

// Singular floppa route
router.get("/floppa", (req, res) => {
	res.send(`
	<head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head>
	<h2>Floppa</h2>
	<a href="http://localhost:4000/">Home</a>
	<a href="http://localhost:4000/meme/floppa">Floppa</a>
    <p class="infop">Big Floppa or simply Floppa refers to a series of ironic memes based on photographs of a caracal named Gregory, and sometimes photographs of other medium-sized cats. Originally circulated among ironic Instagram meme accounts starting in late December 2019, the meme gained more widespread popularity online starting in May 2020.</p>`
	);
});

// Singular froge route
router.get("/froge", (req, res) => {
	res.send(`
	<head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head>
	<h2>Froge</h2>
	<a href="http://localhost:4000/">Home</a>
	<a href="http://localhost:4000/meme/froge">Froge</a>
    <p class="infop">Mmmm Myes Pet Froge refers to a GIF caption of a frog being petted that inspired a series of similar GIF captions in early-to-mid 2020. A series of Twitch emotes known as PETTHE emotes depicting various subjects being petted began circulating in May 2020.</p>`);
});

// ! Going Further (partially)
// Dynamic GET Route.
router.get("/:page", (req, res) => {
	try {
		const { page } = req.params
// Page = bingus? Render bingus page
if (page === "bingus") {
	res.send(`
	<head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head>
	<h2>Bingus</h2>
	<a href="http://localhost:4000/">Home</a>
	<a href="http://localhost:4000/meme/bingus">Bingus</a>
    <p class="infop">Bingus is a hairless Sphynx cat that originated from a video in which he is pet while staring at his owner. Attracting attention on Instagram in March 2020, Bingus’ popularity exploded in September after he appeared in a viral Reddit post, which later resulted in online users referring to all Sphynxes as "Bingus."</p>`);
}
// Page = floppa? Render floppa page
if (page === "floppa") {
	res.send(`
	<head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head>
	<h2>Floppa</h2>
	<a href="http://localhost:4000/">Home</a>
	<a href="http://localhost:4000/meme/floppa">Floppa</a>
    <p class="infop">Big Floppa or simply Floppa refers to a series of ironic memes based on photographs of a caracal named Gregory, and sometimes photographs of other medium-sized cats. Originally circulated among ironic Instagram meme accounts starting in late December 2019, the meme gained more widespread popularity online starting in May 2020.</p>`
	);
}
// Page = froge? Render froge page
if (page === "froge"){
	res.send(`
	<head>
	<link rel="stylesheet" href="../styles/styles.css">
	</head>
	<h2>Froge</h2>
	<a href="http://localhost:4000/">Home</a>
	<a href="http://localhost:4000/meme/froge">Froge</a>
    <p class="infop">Mmmm Myes Pet Froge refers to a GIF caption of a frog being petted that inspired a series of similar GIF captions in early-to-mid 2020. A series of Twitch emotes known as PETTHE emotes depicting various subjects being petted began circulating in May 2020.</p>`);
} else {
	// In the event user tries to find a page that doesn't exist or is down
	res.send(`
	<body>
		<h1>Da Memez Page</h1>
		<p>Hi! The page you are looking for either doesn't exist, or is too awesome to be seen with mortal eyeballs. Try again later, or make it less awesome.</p>
	</body>`)
}

	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
})

module.exports = router;
