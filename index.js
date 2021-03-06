let express     = require("express"),
    app         = express(),
    request     = require("request"),
    rp          = require("request-promise"),
    mongoose    = require("mongoose"),
    cheerio     = require("cheerio");

//https://codeburst.io/an-introduction-to-web-scraping-with-node-js-1045b55c63f7
//https://www.esquire.com/food-drink/restaurants/a15120/biggest-fast-food-11215111/

//Config    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
let food_list = ["Mcdonald's", "BurgerKing", "Wendy's"];
/*
Scraping steps
Step 1: Get and setup request, cheerio, and request-promise
Step 2: create an object that has the options(uri, promise for the reques-promise


*/

//THE ARRAY KEEPS RETURNING UNDEFINED. MAYBE TRY ANOTHER LOOP OR SELECTOR?

/*const options = {
  uri: `https://en.wikipedia.org/wiki/List_of_fast_food_restaurant_chains`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    $('li').each(function(i, elem) {
  food_list[i] = $(this).text();
});
  })
  .catch((err) => {
    console.log(err);
  });
console.log(food_list[1]);*/

//Routes
app.get("/", (req, res) => {
    res.render("home", {food_list: food_list});
});

function foodStuff() {
    food_list.forEach((entry) => {
    app.get("/" + entry, (req, res) => {
        res.render("foodPage", {food_list: food_list});
    })
});
}
foodStuff();


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("fastfood_guru up");
});