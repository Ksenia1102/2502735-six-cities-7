import { Offers } from '../types/offer';

export const offers: Offers = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: 'b83c5b5f-14c1-4b11-a8b2-48f8f2b1d311',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'img/room.jpg'
  },
  {
    id: 'c94d6c6g-25d2-5c22-b9c3-59g9g3c2e422',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 8
      }
    },
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 8
    },
    isFavorite: true, // И этот в избранном, но в другом городе
    isPremium: false,
    rating: 4.5,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: 'd05e7d7h-36e3-6d33-cad4-60h0h4d3f533',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false, // Не в избранном (останется только на главной)
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg'
  }
];
