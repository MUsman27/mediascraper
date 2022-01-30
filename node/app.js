
const express = require('express');
const app = express();
const cors = require('cors');

function init() {
	try {
		//cookieParser middleware
	
		app.use(express.json());
		app.use(cors());


		// express validator middleware
		const scraper = require('./scraper');
		app.get('/',(req,res)=>{res.status(200).send("welcome")})

		app.use('/scraper', scraper);

		const port = process.env.PORT || 4000;
		app.listen(port)
			.on("error", error => console.log('Error in initializing', error))
			.on("listening", () => console.log(`Express listening on ${port}`));
	} catch (error) {
		console.log('Error in initializing', error);
	}
};
init();