"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
var utils_1 = require("./utils");
var enums_1 = require("./enums");
var propertyContainer = document.querySelector('.properties');
var reviewContainer = document.querySelector('.reviews');
var container = document.querySelector('.container');
var button = document.querySelector('button');
var footer = document.querySelector('.footer');
var isLoggedIn;
// Reviews
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: enums_1.LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: enums_1.LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: 'Great host, location was a bit further than said',
    },
];
// User 
var you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: enums_1.Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
// Array Of Properties
var properties = [
    {
        image: '',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: '',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: '',
        title: 'Londan Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'Londan',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: true
    },
    {
        image: string,
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'room 4',
            city: 'Malai',
            code: 43224,
            country: 'Malaysia',
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false,
    }
];
// Functions
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.firstName);
// Add the properties
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    var image_1 = document.createElement('img');
    image_1.setAttribute('src', properties[i].image);
    card.appendChild(image_1);
    (0, utils_1.showDetails)(you.permissions, card, properties[i].price);
    propertyContainer.appendChild(card);
}
var count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        var topTwo = (0, utils_1.getTopTwoReviews)(array);
        for (var i = 0; i < topTwo.length; i++) {
            var card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener('click', function () { return addReviews(reviews); });
var currentLocation = ['London', '11.03', 17];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
// Classes
var MainProperty = /** @class */ (function () {
    function MainProperty() {
    }
    return MainProperty;
}());
this.src = scr;
this.title = title;
this.reviews = reviews;
var yourMainProperty = new MainProperty(images / italian - property.jpg, ', , 'Italian House', [{
        name: 'Olive',
        stars: 5,
        LoyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: '12-04-2021',
    }]);
var mainImageContainer = document.querySelector('.main-image');
var image = document.querySelector('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer.appendChild(image);
