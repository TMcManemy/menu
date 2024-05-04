#! /usr/bin/env node
const yargs = require("yargs");

const days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var number_of_days = yargs.argv._[0];
var first_day_of_the_month = yargs.argv._[1];
var day_of_the_week_position = days_of_the_week.findIndex((element) => element === first_day_of_the_month);

const tags = {
  tacos: "tacos",
  easy: "easy",
  vegetarian: "vegetarian",
  slowcooker: "slowcooker",
  chicken: "chicken",
  weekend: "weekend",
  onepot: "onepot"
}

var dinners = [
	{name: "tacos", tags: [tags.tacos]},
	{name: "sloppy joes", tags: [tags.easy]},
	{name: "spaghetti", tags: [tags.easy], ignore: true},
	{name: "hamburger helper", tags: [tags.easy]},
	{name: "tortellini soup", tags: [tags.easy, tags.vegetarian]},
	{name: "breakfast casserole", tags: [tags.slowcooker]},
	{name: "parmesan garlic spaghetti", tags: [tags.vegetarian]},
	{name: "garlic chicken penne pasta", tags: [tags.chicken]},
	{name: "salsa verde tacos", tags: [tags.weekend]},
	{name: "enchiladas", tags: [tags.weekend]},
	{name: "creamy tomato chicken", tags: [tags.slowcooker]},
	{name: "lasagna soup", tags: [tags.onepot]},
	{name: "lemon garlic pasta", tags: [tags.vegetarian]},
	{name: "mexican quinoa", tags: [tags.vegetarian]},
	{name: "creamy lemon chicken pasta", tags: [tags.chicken]},
	{name: "creamy chicken noodles", tags: [tags.chicken, tags.onepot]},
	{name: "biscuits and gravy", tags: [tags.weekend]},
	{name: "burgers", tags: [tags.weekend]},
	{name: "crockpot chicken pot pie", tags: [tags.weekend,tags.slowcooker]},
	{name: "manicotti", tags: [tags.weekend]},
	{name: "chicken fettuccine alfredo", tags: [tags.chicken]},
	{name: "baked chicken", tags: [tags.chicken]},
	{name: "taco spaghetti", tags: [tags.weekend,tags.easy,tags.onepot]},
	{name: "cheeseburger grilled cheese", tags: [tags.weekend]},
	{name: "baked cream cheese spaghetti", tags: [tags.weekend,tags.onepot]},
	{name: "buffalo chicken wraps", tags: [tags.weekend]},
	{name: "brooks chili", tags: [tags.weekend,tags.onepot]},
	{name: "mozzarella stuffed meatloaf", tags: [tags.weekend]},
	{name: "taco casserole", tags: [tags.weekend,tags.slowcooker]},
	{name: "cream cheese chicken chili", tags: [tags.weekend,tags.slowcooker]},
	{name: "creamy ranch chicken", tags: [tags.weekend,tags.slowcooker]},
	{name: "pancakes", tags: [tags.vegetarian], notes: "heat skillet to 3; 45-50 seconds per side"},
	{name: "dirty rice", tags: [tags.weekend,tags.onepot]},
	{name: "chicken broccoli rice casserole", tags: [tags.weekend]},
	{name: "nacho beef skillet", tags: [tags.weekend,tags.onepot]},
	{name: "mexican beef and rice casserole", tags: [tags.weekend,tags.onepot]},
	{name: "mexican stuffed shells", tags: [tags.weekend]},
	{name: "oven tacos", tags: [tags.weekend]},
	{name: "sheet pan nachos", tags: [tags.weekend]},
	{name: "spicy tomato cream pasta", tags: [tags.easy]},
	{name: "white chicken chili", tags: [tags.weekend]},
	{name: "grilled taco lime chicken", tags: [tags.weekend], notes: "heat skillet to 4"},
	{name: "one pot beans, chicken, and rice", tags: [tags.chicken,tags.onepot]},
	{name: "chili mac and chesse", tags: [tags.onepot]},
	{name: "beefy potato taco casserole", tags: [tags.onepot]},
	{name: "ravioli lasagna", tags: [tags.weekend,tags.onepot]},
	{name: "buffalo chicken", tags: [tags.weekend,tags.onepot]},
	{name: "pork tenderloin", tags: [tags.weekend,tags.easy]},
	{name: "pork steaks", tags: [tags.weekend]},
	{name: "mexican meatloaf", tags: [tags.weekend]},
	{name: "barbeque quicken quesadillas", tags: [tags.chicken]},
	{name: "cajun chicken pasta", tags: [tags.chicken]},
	{name: "cheesy broccoli quinoa and chicken", tags: [tags.chicken]},
];
var dinnersEnjoyed = [];

const getRandomDinner = (array) => array[Math.floor(Math.random()*array.length)];
var matchingDinners = dinners.filter((element) => element.tags.includes(tags.easy) && !element.hasOwnProperty("ignore"));
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

	var dinner_tags = [];
	var preventDuplicates = true;
	switch(day_of_the_week) {
		case "Monday":
			dinner_tags = [tags.vegetarian];
			break;
		case "Tuesday":
			dinner_tags = [tags.tacos];
			preventDuplicates = false;
			break;
		case "Wednesday":
			dinner_tags = [tags.easy];
			break;
		case "Thursday":
			dinner_tags = [tags.chicken];
			break;
		case "Friday":
			dinner_tags = [tags.weekend];
			break;
		case "Saturday":
			dinner_tags = [tags.weekend];
			break;
		case "Sunday":
			dinner_tags = [tags.slowcooker, tags.onepot];
			break;
	}

	matchingDinners = dinners.filter((element) => element.tags.some((element) => dinner_tags.includes(element)) && !element.hasOwnProperty("ignore"));
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


