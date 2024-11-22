import { LoyaltyUser } from "./enums";
import { Price, Country } from "./type";

export  interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description?: string; // ? Makes it optional
}

export interface Properties{
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number| string;
        country: Country;
    }
    contact: [number, string]
    isAvailable: boolean;
}