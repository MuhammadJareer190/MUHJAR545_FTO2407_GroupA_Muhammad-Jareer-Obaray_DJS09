// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
import { showReviewTotal, populateUser } from "./utils";
import { Permissions, LoyaltyUser } from "./enums";
const propertiesContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

let isLoggedIn : boolean


const reviews : any[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021'
        description: 'Great host, location was a bit further than said',
    },
]

// User 
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    Permissions: Permissions.ADMIN,
    isReturning: true,
    age : 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
} 

// Properties
const properties : {
    image: string;
    title:string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean
}[] = [
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
        contact: [ +1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: '',
        title: 'Polish Cottage',
        price: 34,
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
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'Londan',
            code: 35433,
            country: 'United Kingdom'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: true
    },
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)

isLoggedIn = true

let authorityStatus : any

function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
    showDetails(you.Permissions,authorityStatus, card, properties[i].price)
}

// use your location, your current time, and the current temperature of your
// location
let currentLocation: [string, string, number] = ['Cape Town', '11;30', 25]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'