#! /usr/bin/env node
const yargs = require("yargs");

const days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var number_of_days = yargs.argv._[0];
var first_day_of_the_month = yargs.argv._[1];
var day_of_the_week_position = days_of_the_week.findIndex((element) => element === first_day_of_the_month);

var dinners = [
	{name: "tacos", tags: ["tacos"]},
	{name: "sloppy joes", tags: ["easy"]},
	{name: "spaghetti", tags: ["easy"]},
	{name: "hamburger helper", tags: ["easy"]},
	{name: "tortellini soup", tags: ["easy", "vegetarian"]},
	{name: "breakfast casserole", tags: ["slowcooker"]},
	{name: "parmesan garlic spaghetti", tags: ["vegetarian"]},
	{name: "garlic chicken penne pasta", tags: ["chicken"]},
	{name: "salsa verde tacos", tags: ["weekend"]},
	{name: "enchiladas", tags: ["weekend"]},
	{name: "creamy tomato chicken", tags: ["slowcooker"]},
	{name: "lasagna soup", tags: ["onepot"]},
	{name: "lemon garlic pasta", tags: ["vegetarian"]},
	{name: "mexican quinoa", tags: ["vegetarian"]},
	{name: "creamy lemon chicken pasta", tags: ["chicken"]},
	{name: "creamy chicken noodles", tags: ["chicken","onepot"]},
	{name: "biscuits and gravy", tags: ["weekend"]},
	{name: "burgers", tags: ["weekend"]},
	{name: "crockpot chicken pot pie", tags: ["weekend","slowcooker"]},
	{name: "manicotti", tags: ["weekend"]},
	{name: "chicken fettuccine alfredo", tags: ["chicken"]},
	{name: "baked chicken", tags: ["chicken"]},
	{name: "taco spaghetti", tags: ["weekend","easy","onepot"]},
	{name: "cheeseburger grilled cheese", tags: ["weekend"]},
	{name: "baked cream cheese spaghetti", tags: ["weekend","onepot"]},
	{name: "buffalo chicken wraps", tags: ["weekend"]},
	{name: "brooks chili", tags: ["weekend","onepot"]},
	{name: "mozzarella stuffed meatloaf", tags: ["weekend"]},
	{name: "taco casserole", tags: ["weekend","slowcooker"]},
	{name: "cream cheese chicken chili", tags: ["weekend","slowcooker"]},
	{name: "creamy ranch chicken", tags: ["weekend","slowcooker"]},
	{name: "pancakes", tags: ["vegetarian"]},
	{name: "dirty rice", tags: ["weekend","onepot"]},
	{name: "chicken broccoli rice casserole", tags: ["weekend"]},
	{name: "nacho beef skillet", tags: ["weekend","onepot"]},
	{name: "mexican beef and rice casserole", tags: ["weekend","onepot"]},
	{name: "mexican stuffed shells", tags: ["weekend"]},
	{name: "oven tacos", tags: ["weekend"]},
	{name: "sheet pan nachos", tags: ["weekend"]},
	{name: "spicy tomato cream pasta", tags: ["easy"]},
	{name: "white chicken chili", tags: ["weekend"]},
	{name: "grilled taco lime chicken", tags: ["weekend"]},
	{name: "one pot beans, chicken, and rice", tags: ["chicken","onepot"]},
	{name: "chili mac and chesse", tags: ["onepot"]},
	{name: "beefy potato taco casserole", tags: ["onepot"]},
	{name: "ravioli lasagna", tags: ["weekend","onepot"]},
	{name: "buffalo chicken", tags: ["weekend","onepot"]},
	{name: "pork tenderloin", tags: ["weekend","easy"]},
	{name: "pork steaks", tags: ["weekend"]},
	{name: "mexican meatloaf", tags: ["weekend"]},
	{name: "barbeque quicken quesadillas", tags: ["chicken"]},
	{name: "cajun chicken pasta", tags: ["chicken"]},
	{name: "cheesy broccoli quinoa and chicken", tags: ["chicken"]},
];
var dinnersEnjoyed = [];

const getRandomDinner = (array) => array[Math.floor(Math.random()*array.length)];
var matchingDinners = dinners.filter((element) => element.tags.includes("easy"));
var food = getRandomDinner(matchingDinners).name;
dinnersEnjoyed.push(food);

console.log(`1: ${first_day_of_the_month}: ${food}`);
for (var i = 2; i <= number_of_days; i++) {
	if(day_of_the_week_position === 6) {
		day_of_the_week_position = 0;
	}
	else {
		day_of_the_week_position++;
	}

	var day_of_the_week = days_of_the_week[day_of_the_week_position];

	var tags = [];
	var preventDuplicates = true;
	switch(day_of_the_week) {
		case "Monday":
			tags = ["vegetarian"];
			break;
		case "Tuesday":
			tags = ["tacos"];
			preventDuplicates = false;
			break;
		case "Wednesday":
			tags = ["easy"];
			break;
		case "Thursday":
			tags = ["chicken"];
			break;
		case "Friday":
			tags = ["weekend"];
			break;
		case "Saturday":
			tags = ["weekend"];
			break;
		case "Sunday":
			tags = ["slowcooker","onepot"];
			break;
	}

	matchingDinners = dinners.filter((element) => element.tags.some((element) => tags.includes(element)));
	if (preventDuplicates){
		dinnersNotYetEnjoyed = matchingDinners.filter((element) => !dinnersEnjoyed.includes(element.name));
	        var randomDinner = getRandomDinner(dinnersNotYetEnjoyed) || getRandomDinner(matchingDinners);
		food = randomDinner.name;
	}
	else {
		food = getRandomDinner(matchingDinners).name;
	}
	dinnersEnjoyed.push(food);
	console.log(`${i}: ${day_of_the_week}: ${food}`);

	if (day_of_the_week === "Saturday")
		console.log("");
}


