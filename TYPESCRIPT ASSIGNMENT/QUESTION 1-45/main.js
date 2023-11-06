// question 02
var fullName = "asma ahmed";
var topic = "python";
console.log("Hello ".concat(fullName, ",would you like to learn some ").concat(topic, " today?"));
// question 03
var InLowercase = fullName.toLowerCase();
console.log("InLowercase");
var InUppercase = fullName.toUpperCase();
console.log("InUppercase");
var Intitlecase = fullName.toString();
console.log("Intitlecase");
// question 04
var author = ("Albert Einstine");
var famous_quote = "A person who never made a mistake never tried anything new";
console.log("".concat(author, " once said,").concat(famous_quote));
// question 05 
var famousPerson = ("Albert Einstine");
var famous_quote2 = "A person who never made a mistake never tried anything new";
var message1 = "".concat(famousPerson, " once said,").concat(famous_quote2);
console.log(message1);
// question 06
var personName = "\t Ayan \n ";
console.log("name with whitespace", personName);
var strippingName = personName.trim();
console.log(strippingName);
// question 07
addition: var additionResult = 4 + 4;
console.log("Addition Result", additionResult);
Subtraction: var subtractionResult = 10 - 2;
console.log("Subtraction Result", subtractionResult);
// Multiplication :
var multiplicationResult = 2 * 4;
console.log("Multiplication Result", multiplicationResult);
//Division :
var divisionResult = 16 / 2;
console.log("Division Result", divisionResult);
// question 08:
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
// question 09:
var favoriteNumber = 5;
var message2 = "my favourite number is ".concat(favoriteNumber);
console.log(message2);
// question 10
// name = asama
// date : 13-08-2023
// question 11:
var friendsName1 = ["asma", "sadia", "shaheer", "malaika"];
console.log(friendsName1[0]);
console.log(friendsName1[1]);
console.log(friendsName1[2]);
console.log(friendsName1[3]);
// question 12:
var friendsName = ["asma", "sadia", "shaheer", "malaika"];
for (var _i = 0, friendsName_1 = friendsName; _i < friendsName_1.length; _i++) {
    var name_1 = friendsName_1[_i];
    console.log("Hello ".concat(name_1, ",I hope you are having a fantastic day!"));
}
// question 13
var transportation = ["honda motorcycle", "civic car", "BMW"];
for (var _a = 0, transportation_1 = transportation; _a < transportation_1.length; _a++) {
    var name_2 = transportation_1[_a];
    console.log("i would like to own a ".concat(name_2));
}
// question 14:
var guestlist = ["asma", "sadia", "ayan", "meral"];
guestlist.forEach(function (guestName) {
    console.log("Dear ".concat(guestName, ",you are invited to dinner please join us"));
});
// question 15 :
var guests1 = ["asma", "sadia", "ayan", "meral"];
for (var i = 0; i < guests1.length; i++) {
    console.log("".concat(guests1[i], ", You are invited to dinner party"));
}
console.log("".concat(guests1[0], " and ").concat(guests1[2], " are not coming"));
guests1.splice(0, 1, "Umer");
guests1.splice(2, 1, "Faizan");
for (var i = 0; i < guests1.length; i++) {
    console.log("".concat(guests1[i], ", You are invited to dinner party"));
}
// question 16 :
var guests2 = ["Ali", "Amir", "Talha", "Nasir"];
for (var i = 0; i < guests2.length; i++) {
    console.log("".concat(guests2[i], ", You are invited to dinner party"));
}
console.log("".concat(guests2[0], " and ").concat(guests2[2], " are not coming"));
guests2.splice(0, 1, "Umer");
guests2.splice(2, 1, "Faizan");
for (var i = 0; i < guests2.length; i++) {
    console.log("".concat(guests2[i], ", You are invited to dinner party"));
}
console.log("I am inviting more guests to dinner because I found a bigger table");
guests2.splice(2, 0, "Rizwan");
guests2.unshift("Babar");
guests2.push("Sharjeel");
for (var i = 0; i < guests2.length; i++) {
    console.log("".concat(guests2[i], ", You are invited to dinner party"));
}
// question 17:
var guests3 = ["Ali", "Amir", "Talha", "Nasir"];
for (var i = 0; i < guests3.length; i++) {
    console.log("".concat(guests3[i], ", You are invited to dinner party"));
}
console.log("".concat(guests3[0], " and ").concat(guests3[2], " are not coming"));
guests3.splice(0, 1, "Umer");
guests3.splice(2, 1, "Faizan");
for (var i = 0; i < guests3.length; i++) {
    console.log("".concat(guests3[i], ", You are invited to dinner party"));
}
console.log("I am inviting more guests to dinner because I found a bigger table");
guests3.splice(2, 0, "Rizwan");
guests3.unshift("Babar");
guests3.push("Sharjeel");
for (var i = 0; i < guests3.length; i++) {
    console.log("".concat(guests3[i], ", You are invited to dinner party"));
}
console.log("we can invite only two people for dinner.");
var uninvited = guests3.splice(0, guests3.length - 2);
for (var i = 0; i < uninvited.length; i++) {
    console.log("I am sorry ".concat(uninvited[i], " I can not invite you to dinner"));
}
for (var i = 0; i < guests3.length; i++) {
    console.log("".concat(guests3[i], " you're still invited."));
}
guests3.splice(0, guests3.length);
console.log(guests3);
// question 18:
var places = ["Kashmir", "Toronto", "Makkah", "Madina", "Egypt"];
console.log(places);
console.log(places.slice().sort());
console.log(places);
console.log(places.slice().sort().reverse());
console.log(places);
console.log(places.reverse());
console.log(places.reverse());
console.log(places.sort());
console.log(places.reverse());
// question 19: 
var guests = ["asma", "sadia", "meral", "ayan"];
var noOfGuests = guests.length;
console.log("".concat(noOfGuests, " people are invited to dinner"));
// question 20:
var countries = ["pakistan", "UK", "USA", "Asia"];
console.log(" list of countries");
for (var _b = 0, countries_1 = countries; _b < countries_1.length; _b++) {
    var country = countries_1[_b];
    console.log(country);
}
// question 21:
var book = {
    title: "It starts with us",
    author: "colleen hoover",
    price: "1100",
};
var books = [];
books.push(book);
var book1 = {
    title: "It ends with us",
    author: "coolen hoover",
    price: "900",
};
books.push(book1);
var book2 = {
    title: "Hopeless",
    author: "cooleen hoover",
    price: "1500",
};
books.push(book2);
console.log(books);
// question 22:
var abc = [''];
abc[0] = "Karachi";
abc[1] = "Lahore";
abc[2] = "Peshawar";
abc[3] = "Quetta";
console.log(abc);
// question 23 :
var lname = "okasha";
var _age = '19';
console.log(10 === 10);
console.log(10 > 5);
console.log(10 < 5);
console.log(10 / 2 === 5);
console.log(10 % 2 === 1);
console.log(lname === 'okasha');
console.log(_age === '19');
console.log(_age !== '19');
console.log(typeof (_age) == "number");
console.log(typeof (lname) !== "string");
//  question 24:
var _name = "Ayan";
console.log(_name === "Ayan");
console.log(_name === "ali");
console.log(10 === 10);
console.log(10 > 5);
console.log(5 != 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);
console.log(10 < 5 && _name === "Ayan");
console.log(10 < 5 || _name === "Ayan");
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    arr[i] === 2 && console.log(true);
}
console.log(arr[1] !== 3);
// question 25:
var alien_color = "red";
if (alien_color == "green") {
    console.log("the player just earned 5 points");
}
else {
    console.log();
}
// question 26:
var alien_color1 = "red";
if (alien_color1 == "green") {
    console.log("the player just earned 5 points for shooting the alien");
}
else {
    console.log("the player just earned 10 points for shooting the alien");
}
// question 27 :
//1st condition 
var alien = "green";
if (alien === "green") {
    console.log(" the player earned 5 points ");
}
else if (alien === "yellow") {
    console.log("the player earned 10 points ");
}
else if (alien === "red") {
    console.log("the player earned 15 points ");
}
else {
    console.log("unkown alien");
}
// 2nd condition :
var alienColors2 = "yellow";
if (alienColors2 === "green") {
    console.log(" the player earned 5 points ");
}
else if (alienColors2 === "yellow") {
    console.log("the player earned 10 points ");
}
else if (alienColors2 === "red") {
    console.log("the player earned 15 points ");
}
else {
    console.log("unkown alien");
}
// 3rd condition :
var alienColors3 = "red";
if (alienColors3 === "green") {
    console.log(" the player earned 5 points ");
}
else if (alienColors3 === "yellow") {
    console.log("the player earned 10 points ");
}
else if (alienColors3 === "red") {
    console.log("the player earned 15 points ");
}
else {
    console.log("unkown alien");
}
// question 28
var age = 14;
if (age < 2) {
    console.log("the person is baby");
}
else if (age < 4) {
    console.log("the person is a toddler");
}
else if (age < 13) {
    console.log(" the person is a kid");
}
else if (age < 20) {
    console.log("the person is teenager");
}
else if (age < 65) {
    console.log("the person is adult");
}
else {
    console.log("the person is an elder");
}
// question 29:
var favourite_fruit = ["apple", "orange", "mango"];
if ("favourite_fruit === apple") {
    console.log("I like apples");
}
if ("favourite_fruit === banana") {
    console.log("I enjoy banana");
}
if ("favourite_fruit === mango") {
    console.log("my favourite fruit");
}
if ("favourite_fruit === orange") {
    console.log("i also like orange");
}
if ("favourite_fruit === melon") {
    console.log("I also enjoy melon");
}
// question 30:
var userNames = ["admin", "eric", "ali", "zain", "ayan"];
function greetUser() {
    for (var i in userNames) {
        if (userNames[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(userNames[i], ", thank you for logging in again."));
        }
    }
}
greetUser();
// question 31:
var users = [];
if (users.length == 0) {
    console.log("we find to some users");
}
else {
    console.log("Current users", users);
}
// remove all usernames from the array:
console.log("all usernames have been removed,Current users", users);
// question 32:
var current_users = ["Ali", "Amir", "Talha", 'Kami', "Nasir"];
var new_users = ["Umer", "daniyal", "ali", "umair", "kami"];
for (var i = 0; i < new_users.length; i++) {
    var duplicate = void 0;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
            duplicate = true;
            break;
        }
        else {
            duplicate = false;
        }
    }
    if (duplicate) {
        console.log("".concat(new_users[i], " is not available, You will need to enter a new username"));
    }
    else {
        console.log("".concat(new_users[i], ", username is available."));
    }
}
// question 33:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(number).concat(ordinal));
}
// question 34:
var favouritePizza = ["pepproni", "chickenTikka", "sicilian"];
for (var _d = 0, favouritePizza_1 = favouritePizza; _d < favouritePizza_1.length; _d++) {
    var pizza = favouritePizza_1[_d];
    console.log("i like ".concat(pizza, " pizza"));
}
console.log("i really like pizza!");
// question 35:
// list of animals:
var animals = ['cat', 'dog', 'goat'];
// printing the name of each animals:
console.log("list of animals");
for (var _e = 0, animals_1 = animals; _e < animals_1.length; _e++) {
    var animal = animals_1[_e];
    console.log(animal);
}
//  printing a statement about each animal:
console.log("\nstatement about each animal");
for (var _f = 0, animals_2 = animals; _f < animals_2.length; _f++) {
    var animal = animals_2[_f];
    if (animal === "cat") {
        console.log("A ".concat(animal, " would ba a good companion at home"));
    }
    else if (animal === "dog") {
        console.log("A ".concat(animal, " is a great pet"));
    }
    else if (animal === "goat") {
        console.log("A ".concat(animal, " is an adorable pet that also give us milk"));
    }
}
console.log("\nwhat these animals have in common?");
console.log("any of these animals would make a great pet!");
// question 36:
function make_shirt(size, message) {
    console.log("Size ".concat(size, ",Message ").concat(message));
}
// call the function:
var size = "Large";
var message = "Hello World!";
make_shirt(size, message);
// question 37:
function makeshirt(size, message) {
    if (size === void 0) { size = "large "; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("size ".concat(size, ",message ").concat(message));
}
makeshirt();
makeshirt('medium');
makeshirt("small", " typescript insight with ali");
//  question 38:
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown country"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("karachi", "pakistan");
describe_city("New York");
describe_city("berlin", "Germany");
// question 39: 
var city_country = function (city, country) {
    return "".concat(city, ",").concat(country);
};
// test the function with three city_country paris:
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New york", "USA"));
console.log(city_country("Tokyo", "Japan"));
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three different albums
var album1 = makeAlbum("Artist1", "Album 1");
var album2 = makeAlbum("Artist2", "Album 2", 12); // Include the number of tracks
var album3 = makeAlbum("Artist3", "Album 3");
// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
// question 41:
var magicianNames = ['David Blaine', 'Dynamo', 'Criss Angel'];
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var items = magicians_1[_i];
        console.log(items);
    }
}
show_magician(magicianNames);
// question 42:
var _megicians = ['David Blaine', 'Dynamo', 'Criss Angel'];
function make_great(list) {
    for (var i = 0; i < list.length; i++) {
        list[i] = "The great ".concat(list[i]);
    }
}
function show_magicians(list) {
    for (var i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
make_great(_megicians);
show_magicians(_megicians);
// question 43:
var megicians = ['Davis Blaine', 'Dynamo', 'Criss Angle'];
function make_great1(list) {
    for (var i = 0; i < list.length; i++) {
        great_megicians: "The great ".concat(list[i]);
    }
    return great_megicians;
}
function show_magicians1(list) {
    for (var i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
var great_megicians = make_great(megicians);
show_magicians(megicians);
show_magicians(great_megicians);
// question 44:
function make_sandwich() {
    var list = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        list[_i] = arguments[_i];
    }
    console.log(list);
    for (var i = 0; i < list.length; i++) {
        console.log("we are adding ".concat(list[i], " to your sandwich"));
    }
}
make_sandwich('roast beaf', 'chadder cheese', 'lettuce', 'honey dijon');
make_sandwich('turkey', 'apple slices', 'honey mustard');
make_sandwich('peanut butter', 'strawberry jam');
// question 45:
function cars_info(company, model, extra_info) {
    var obj = {
        company: company,
        model: model,
        extra_info: extra_info,
    };
    return obj;
}
console.log(cars_info('subaru', 'outback', { color: 'blue', tow_package: true }));
console.log(cars_info('honda', 'accord', { year: 1991, color: 'black' }));
