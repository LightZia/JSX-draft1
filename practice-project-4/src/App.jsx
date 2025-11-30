import React from 'react'
import Card from './components/Card'
import { Star, Martini, Trophy, DollarSign } from 'lucide-react'

const App = () => {

  const residentials = [
    {
      name: "Santorini Cliffside Villa",
      description: "A stunning cliffside retreat overlooking the Aegean Sea, just minutes from Oia’s iconic blue-domed churches.",
      tag1: "4.9",
      tag2: "5 Night Stay",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      icon: Star
    },
    {
      name: "Kyoto Bamboo Grove House",
      description: "Traditional machiya-style home nestled beside the Arashiyama Bamboo Grove, offering an authentic Japanese experience.",
      tag1: "Great deal",
      tag2: "3 Night Stay",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      icon: Martini
    },
    {
      name: "Paris Louvre Apartment",
      description: "Charming apartment located steps away from the Louvre Museum, featuring modern décor and a private balcony.",
      tag1: "4.7",
      tag2: "4 Night Stay",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      icon: Star
    },
    {
      name: "Bali Ubud Jungle Villa",
      description: "Private eco-villa surrounded by lush rainforest, only a short walk from Ubud’s famous Monkey Forest.",
      tag1: "Top rated",
      tag2: "6 Night Stay",
      image: "https://images.unsplash.com/photo-1763300883076-4f18083e59d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Trophy
    },
    {
      name: "New York Central Park Loft",
      description: "Bright and stylish loft right across from Central Park, perfect for exploring Manhattan’s iconic landmarks.",
      tag1: "4.8",
      tag2: "2 Night Stay",
      image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      icon: Star
    },
    {
      name: "Cape Town Oceanview House",
      description: "Luxury oceanfront home near Table Mountain and Camps Bay Beach, offering panoramic sunset views.",
      tag1: "Special offer",
      tag2: "5 Night Stay",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      icon: Martini
    },
    {
      name: "Dubai Marina Skyline Apartment",
      description: "Stylish apartment with sweeping skyline views, just steps from Dubai Marina Walk and luxury shopping.",
      tag1: "4.6",
      tag2: "4 Night Stay",
      image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
      icon: Star
    },
    {
      name: "Sydney Harbourview Penthouse",
      description: "Modern penthouse overlooking the Sydney Opera House and Harbour Bridge, offering a premium cityscape stay.",
      tag1: "Premium pick",
      tag2: "3 Night Stay",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      icon: DollarSign
    }
  ];
  

  return (
    <div className="parent">
      {residentials.map(function(elem){
        return <Card name = {elem.name} description = {elem.description} tag2 = {elem.tag2} tag1 = {elem.tag1} image = {elem.image}/>
      })}
    </div>
  )
}

export default App