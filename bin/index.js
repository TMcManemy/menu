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
	{name: "hambuger helper", tags: ["easy"]},
	{name: "tortellini soup", tags: ["easy"]},
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
	{name: "creamy chicken noodles", tags: ["chicken"]},
	{name: "biscuits and gravy", tags: ["weekend"]},
	{name: "burgers", tags: ["weekend"]},
	{name: "corckpot chicken pot pie", tags: ["weekend"]},
	{name: "manicotti", tags: ["weekend"]},
	{name: "chicken fettuccine alfredo", tags: ["chicken"]},
	{name: "baked chicken", tags: ["chicken"]},
	{name: "taco spaghetti", tags: ["weekend","easy","onepot"]},
	{name: "cheeseburger grilled cheese", tags: ["weekend"]},
	{name: "baked cream cheese spaghetti", tags: ["weekend","onepot"]},
	{name: "buffalo chicken wraps", tags: ["weekend"]},
	{name: "brooks chili", tags: ["weekend","onepot"]},
	{name: "mozzarella stuffed meatloaf", tags: ["weekend"]},
	{name: "taco casserole", tags: ["weekend","crockpot"]},
	{name: "cream cheese chicken chili", tags: ["weekend","crockpot"]},
	{name: "creamy ranch chicken", tags: ["weekend","crockpot"]},
	{name: "pancakes", tags: ["vegetarian"]},
	{name: "dirty rice", tags: ["weekend","onepot"]},
	{name: "chicken broccoli rice casserole", tags: ["weekend"]},
	{name: "nacho beef skillet", tags: ["weekend","onepot"]},
	{name: "mexican beef and rice cassrole", tags: ["weekend","onepot"]},
];

const getRandomDinner = (array) => array[Math.floor(Math.random()*array.length)];
var matchingDinners = dinners.filter((element) => element.tags.includes("easy"));
var food = getRandomDinner(matchingDinners).name;

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
	switch(day_of_the_week) {
		case "Monday":
			tags = ["vegetarian"];
			break;
		case "Tuesday":
			tags = ["tacos"];
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
	food = getRandomDinner(matchingDinners).name;
	console.log(`${i}: ${day_of_the_week}: ${food}`);
}


