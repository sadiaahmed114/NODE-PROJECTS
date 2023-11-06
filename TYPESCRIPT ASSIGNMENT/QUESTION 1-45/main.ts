// question 02

 let fullName="asma ahmed";
let topic ="python";
console.log(`Hello ${fullName},would you like to learn some ${topic} today?`);
 
// question 03

 let InLowercase =fullName.toLowerCase();
 console.log("InLowercase");

 let InUppercase = fullName.toUpperCase();
 console.log("InUppercase");

 let Intitlecase = fullName.toString();
 console.log("Intitlecase");




// question 04

let author = ("Albert Einstine"); 
let famous_quote = "A person who never made a mistake never tried anything new";
console.log(`${author} once said,${famous_quote}`);

// question 05 

let famousPerson = ("Albert Einstine");
let famous_quote2 = "A person who never made a mistake never tried anything new";
let message1=`${famousPerson} once said,${famous_quote2}`;
console.log(message1);

// question 06

let personName ="\t Ayan \n ";

console.log("name with whitespace",personName);

let strippingName = personName.trim();

console.log(strippingName);


// question 07

addition:

let additionResult = 4+4;

console.log("Addition Result", additionResult);

Subtraction:

let subtractionResult = 10-2;

console.log("Subtraction Result", subtractionResult);

// Multiplication :

let multiplicationResult = 2*4;

console.log("Multiplication Result", multiplicationResult);

//Division :

let divisionResult = 16/2;

console.log("Division Result", divisionResult);

// question 08:

console.log(5+3);
console.log(10-2);
console.log(2*4);
console.log(16/2);

// question 09:

let favoriteNumber = 5
let message2 = `my favourite number is ${favoriteNumber}`
console.log(message2)

// question 10

// name = asama
// date : 13-08-2023

// question 11:

let friendsName1 : string []= ["asma","sadia","shaheer","malaika"];

 console.log(friendsName1[0])
 console.log(friendsName1[1])
 console.log(friendsName1[2])
 console.log(friendsName1[3])

// question 12:

let friendsName : string []= ["asma","sadia","shaheer","malaika"]; 

for(let name of friendsName) {

    console.log(`Hello ${name},I hope you are having a fantastic day!`);

}

// question 13

let transportation : string []= ["honda motorcycle","civic car", "BMW"];

for(let name of transportation) {

   console.log(`i would like to own a ${name}`);

}

// question 14:

let guestlist:Array<string>=["asma","sadia","ayan","meral"];

 guestlist.forEach((guestName) =>
 {
    console.log(`Dear ${guestName},you are invited to dinner please join us`)
 })


// question 15 :

let guests1 = ["asma","sadia","ayan","meral"];
for (let i = 0; i < guests1.length; i++) {
    console.log(`${guests1[i]}, You are invited to dinner party`)
}
console.log(`${guests1[0]} and ${guests1[2]} are not coming`);

guests1.splice(0,1,"Umer");
guests1.splice(2,1,"Faizan");

for (let i = 0; i < guests1.length; i++) {
    console.log(`${guests1[i]}, You are invited to dinner party`)
}

// question 16 :

let guests2 = ["Ali", "Amir", "Talha", "Nasir"];
for (let i = 0; i < guests2.length; i++) {
    console.log(`${guests2[i]}, You are invited to dinner party`)
}
console.log(`${guests2[0]} and ${guests2[2]} are not coming`);

guests2.splice(0, 1, "Umer");
guests2.splice(2, 1, "Faizan");

for (let i = 0; i < guests2.length; i++) {
    console.log(`${guests2[i]}, You are invited to dinner party`)
}

console.log("I am inviting more guests to dinner because I found a bigger table")

guests2.splice(2, 0, "Rizwan")
guests2.unshift("Babar")
guests2.push("Sharjeel")

for (let i = 0; i < guests2.length; i++) {
    console.log(`${guests2[i]}, You are invited to dinner party`)
}

// question 17:

let guests3 = ["Ali", "Amir", "Talha", "Nasir"];
for (let i = 0; i < guests3.length; i++) {
    console.log(`${guests3[i]}, You are invited to dinner party`)
}
console.log(`${guests3[0]} and ${guests3[2]} are not coming`);

guests3.splice(0, 1, "Umer");
guests3.splice(2, 1, "Faizan");

for (let i = 0; i < guests3.length; i++) {
    console.log(`${guests3[i]}, You are invited to dinner party`)
}

console.log("I am inviting more guests to dinner because I found a bigger table")

guests3.splice(2, 0, "Rizwan")
guests3.unshift("Babar")
guests3.push("Sharjeel")

for (let i = 0; i < guests3.length; i++) {
    console.log(`${guests3[i]}, You are invited to dinner party`)
}

console.log("we can invite only two people for dinner.")

let uninvited = guests3.splice(0,guests3.length-2)

for (let i = 0; i < uninvited.length; i++) {
    console.log(`I am sorry ${uninvited[i]} I can not invite you to dinner`)
}

for (let i = 0; i < guests3.length; i++) {
    console.log(`${guests3[i]} you're still invited.`)
}

guests3.splice(0,guests3.length);
console.log(guests3);


// question 18:

let places = ["Kashmir", "Toronto", "Makkah", "Madina", "Egypt"];
console.log(places)
console.log(places.slice().sort())
console.log(places)
console.log(places.slice().sort().reverse())
console.log(places)
console.log(places.reverse())
console.log(places.reverse())
console.log(places.sort())
console.log(places.reverse())

// question 19: 

let guests = ["asma","sadia","meral","ayan"];
let noOfGuests = guests.length
console.log(`${noOfGuests} people are invited to dinner`);

// question 20:

let countries :string[] =["pakistan","UK","USA","Asia"];

console.log(" list of countries");

for(let country of countries)
{
    console.log(country);
}

// question 21:


let book = {
          title: "It starts with us",
          author: "colleen hoover",
          price: "1100",
 }
     let books: Array<typeof book> =[];

     books.push(book)
    
 let book1 = {
          title: "It ends with us",
          author: "coolen hoover",
          price: "900",
 }
     books.push(book1) 
   
     let book2 = {
         title: "Hopeless",
         author: "cooleen hoover",
         price: "1500",
 } 
     
     books.push(book2)
 console.log (books);

// question 22:

let abc = [''];
abc[0] = "Karachi"
abc[1] = "Lahore"
abc[2] = "Peshawar"
abc[3] = "Quetta"
console.log(abc)

// question 23 :

let lname = "okasha"
let _age = '19'
console.log(10 === 10);
console.log(10 > 5);
console.log(10 < 5)
console.log(10/2 === 5)
console.log(10%2 === 1)
console.log(lname === 'okasha')
console.log(_age === '19')
console.log(_age !== '19')
console.log(typeof(_age) == "number")
console.log(typeof(lname) !== "string")

//  question 24:
let _name = "Ayan";
console.log(_name === "Ayan")
console.log(_name === "ali")
console.log(10 === 10)
console.log(10 > 5)
console.log(5 != 5)
console.log(10 < 5)
console.log(10 >= 5)
console.log(10 <= 5)
console.log(10 < 5 && _name === "Ayan")
console.log(10 < 5 || _name === "Ayan")

let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    arr[i] === 2 && console.log(true)
}

console.log(arr[1] !== 3 )

// question 25:

let alien_color = "red";

if(alien_color == "green"){
    console.log("the player just earned 5 points");
}else{
    console.log();
}


// question 26:

let alien_color1 = "red";

if(alien_color1 == "green"){
    console.log("the player just earned 5 points for shooting the alien");
}else{
    console.log("the player just earned 10 points for shooting the alien");
}


// question 27 :
//1st condition 

let alien :string = "green";

if(alien === "green" ){
    console.log(" the player earned 5 points ");
}else if(alien === "yellow"){
    console.log("the player earned 10 points ");
}else if (alien ==="red"){
    console.log ("the player earned 15 points ");
}else {
    console.log("unkown alien");
}
// 2nd condition :

let alienColors2 :string = "yellow";

if(alienColors2 === "green" ){
    console.log(" the player earned 5 points ");
}else if(alienColors2 === "yellow"){
    console.log("the player earned 10 points ");
}else if (alienColors2 ==="red"){
    console.log ("the player earned 15 points ");
}else {
    console.log("unkown alien");
}

// 3rd condition :

let alienColors3 : string = "red";

if(alienColors3 === "green" ){
    console.log(" the player earned 5 points ");
}else if(alienColors3 === "yellow"){
    console.log("the player earned 10 points ");
}else if (alienColors3 ==="red"){
    console.log ("the player earned 15 points ");
}else {
    console.log("unkown alien");
}

// question 28

let age = 14;

if(age < 2){
    console.log("the person is baby");
}else if (age < 4 ){
    console.log("the person is a toddler");
}else if(age < 13){
    console.log(" the person is a kid");
}else if(age < 20){
    console.log("the person is teenager");
}else if(age <  65){
    console.log ("the person is adult");
}else{
    console.log("the person is an elder");
}

// question 29:

let favourite_fruit  =["apple","orange","mango"];

if("favourite_fruit === apple" ){
    console.log("I like apples");
}
if("favourite_fruit === banana"){
    console.log("I enjoy banana");
}
if("favourite_fruit === mango"){
    console.log("my favourite fruit");
}
if("favourite_fruit === orange"){
    console.log("i also like orange");
}
if("favourite_fruit === melon"){
    console.log("I also enjoy melon");
}

// question 30:

let userNames: string [] =["admin","eric","ali","zain","ayan"];

function greetUser(): void {
    for(let i in userNames){
        if(userNames[i]=== "admin"){
            console.log(`Hello admin, would you like to see a status report?`)
        }else{
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
        }
    }
    
} 
greetUser();

// question 31:

let users :string[] =[];

if(users.length == 0){
    console.log("we find to some users");
}else{
    console.log("Current users",users);
}
// remove all usernames from the array:
console.log("all usernames have been removed,Current users",users);

// question 32:

let current_users = ["Ali", "Amir", "Talha", 'Kami', "Nasir"];
let new_users = ["Umer", "daniyal", "ali", "umair", "kami"]
for (let i = 0; i < new_users.length; i++) {
    let duplicate;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
            duplicate = true;
            break;
        }
        else {
            duplicate = false;
        }

    }
    if (duplicate) {
        console.log(`${new_users[i]} is not available, You will need to enter a new username`)
    }
    else {
        console.log(`${new_users[i]}, username is available.`)
    }
}

// question 33:

let numbers : number[] = [1,2,3,4,5,6,7,8,9];

for(let number of numbers ){
    
    let ordinal: string;

    if(number === 1){
        ordinal ="st";
    }else if(number === 2){
        ordinal ="nd";
    }else if(number === 3){
        ordinal ="rd";
    }else{
        ordinal ="th";
    }
 console.log(`${number}${ordinal}`);
}

// question 34:

let favouritePizza : string[]=["pepproni","chickenTikka","sicilian"];

for(let pizza of favouritePizza){
    console.log(`i like ${pizza} pizza`);
}
console.log("i really like pizza!");

// question 35:

// list of animals:
let animals =['cat','dog','goat'];
// printing the name of each animals:
console.log( "list of animals");
for(let animal of animals){
    console.log(animal);
} 
//  printing a statement about each animal:
console.log("\nstatement about each animal");
for(const animal of animals){
    if(animal === "cat"){
        console.log(`A ${animal} would ba a good companion at home`);
    }else if(animal === "dog"){
        console.log(`A ${animal} is a great pet`);
    }else if(animal === "goat"){
        console.log(`A ${animal} is an adorable pet that also give us milk`);
    }
}
console.log("\nwhat these animals have in common?");
console.log("any of these animals would make a great pet!");

// question 36:

function make_shirt(size : string , message : string): void {
    console.log(`Size ${size},Message ${message}`);
}
// call the function:
let size = "Large";
let message = "Hello World!";
make_shirt(size,message);

// question 37:

function makeshirt(size = "large " , message = "i love typescript"): void{
    console.log(`size ${size},message ${message}`);
}
makeshirt();
makeshirt('medium');
makeshirt("small", " typescript insight with ali");

//  question 38:

function describe_city(city:string , country:string ="Unknown country"):void{ 
    console.log(`${city} is in ${country}`);
}
describe_city("karachi", "pakistan");
describe_city("New York");
describe_city("berlin", "Germany")

// question 39: 

let city_country =(city : string , country :string): string => {
    return `${city},${country}`;
}
// test the function with three city_country paris:
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("New york","USA"));
console.log(city_country("Tokyo","Japan"));

// question 40:

interface Album {
  artist: string;
    title: string;
    tracks?: number;
 }
  
  function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist,
      title,
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
}

// Create three different albums
const album1 = makeAlbum("Artist1", "Album 1");
const album2 = makeAlbum("Artist2", "Album 2", 12); // Include the number of tracks
const album3 = makeAlbum("Artist3", "Album 3");

// Print the album information
console.log(album1);
console.log(album2);
console.log(album3); 

// question 41:

 
let magicianNames : string []=['David Blaine','Dynamo','Criss Angel']

function show_magician(magicians :string[]): void 
{
    for(let items of  magicians){
        console.log(items);
    }
}
show_magician(magicianNames);

// question 42:

 let _megicians = ['David Blaine','Dynamo','Criss Angel']

function make_great(list):void{
    for (let i = 0; i < list.length; i++){
        list[i] = `The great ${list[i]}`
    }
}
function show_magicians(list){

    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
    }
}
make_great(_megicians)
show_magicians(_megicians)

// question 43:

let megicians =['Davis Blaine','Dynamo','Criss Angle'];

function make_great1(list){

    for(let i =0; i< list.length; i++){
        great_megicians : `The great ${list[i]}`
    } 
    return great_megicians
    
}
function show_magicians1(list){

    for(let i =0 ; i<list.length; i++){
        console.log(list[i])
    }
}
let great_megicians = make_great(megicians)
show_magicians(megicians)
show_magicians(great_megicians)

// question 44:

function make_sandwich(...list){
    console.log(list)
    for(let i = 0;i< list.length; i++){
        console.log(`we are adding ${list[i]} to your sandwich`)
    }
}
make_sandwich('roast beaf','chadder cheese','lettuce','honey dijon');
make_sandwich('turkey','apple slices','honey mustard');
make_sandwich('peanut butter','strawberry jam')

// question 45:

function cars_info(company,model,extra_info){
    let obj = {
        company,
        model,
        extra_info,
    }
    return obj 

}
console.log(cars_info('subaru','outback',{color : 'blue', tow_package: true}))
console.log(cars_info('honda','accord',{year :1991,color:'black'}))








