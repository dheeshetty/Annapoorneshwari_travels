import {
  Bus, Car, Plane, Navigation,
  ShieldCheck, Clock, BadgeCheck, Star
} from "lucide-react";
import Bus1 from "./assets/Bus_1.jpg";
import Bus2 from "./assets/Bus_2.jpg";
import Bus3 from "./assets/Bus_3.jpg";
import Bus4 from "./assets/Bus_4.jpg";
import Bus5 from "./assets/Bus_5.jpg";
import Bus6 from "./assets/Bus_6.jpg";
import Bus7 from "./assets/Bus_7.jpg";
import Bus8 from "./assets/Bus_8.jpg";
import Bus9 from "./assets/Bus_9.jpg";
import Bus10 from "./assets/Bus_10.jpg";

export const BRAND = {
  name: "Annapoorneshwari Travels",
  tagline: "Safe • Affordable • Comfortable",
  phone: "+91-9900800210",
  whatsapp: "+91-63629-00210",
  email: "booking@annaporneshwaritravels.com",
  address: "MK Road Konandur Thirthahalli,Shivamogga, Karnataka - 577432",
  mapLink:
    "https://maps.app.goo.gl/2gkrYuGxzjsGKVTe7",
};

export const SERVICES = [
  { icon: Bus, title: "Bus Rentals", desc: "AC / Non-AC buses for family, corporate, and school trips." },
  { icon: Car, title: "Car & SUV Rentals", desc: "Sedan, SUV, and tempo traveller with experienced drivers." },
  { icon: Plane, title: "Airport Pick & Drop", desc: "On-time transfers, 24/7 availability, hassle-free rides." },
  { icon: Navigation, title: "Customized Tour Packages", desc: "Pilgrimage, hill stations, weekend getaways, and more." },
];

export const WHY_US = [
  { icon: ShieldCheck, title: "Safe & Reliable", desc: "Verified drivers and well-maintained vehicles." },
  { icon: Clock, title: "On-Time, Every Time", desc: "Punctual pickups with live trip coordination." },
  { icon: BadgeCheck, title: "Transparent Pricing", desc: "Clear quotes, no hidden charges." },
  { icon: Star, title: "Happy Customers", desc: "Trusted by families and corporates alike." },
];

export const GALLERY = [
  Bus1,
  Bus2,
  Bus3,
  Bus4,
  Bus5,
  Bus6,
  Bus7,
  Bus8,
  Bus9,
  Bus10,
];


export const TESTIMONIALS = [
  { name: "Rohit S.", text: "Booked a tempo traveller for Coorg trip. Clean vehicle, polite driver, and punctual service!", role: "",avatar: "", },
  { name: "Divya P.", text: "Airport drop at 4 AM was smooth and on time. Highly recommend Annaporneshwari Travels." },
  { name: "Kiran M.", text: "Good pricing and zero hidden charges. Our family pilgrimage was comfortable throughout." },
    { name: "Rohit S.", text: "Booked a tempo traveller for Coorg trip. Clean vehicle, polite driver, and punctual service!", role: "",avatar: "", },
  { name: "Divya P.", text: "Airport drop at 4 AM was smooth and on time. Highly recommend Annaporneshwari Travels." },
  { name: "Kiran M.", text: "Good pricing and zero hidden charges. Our family pilgrimage was comfortable throughout." },
];
