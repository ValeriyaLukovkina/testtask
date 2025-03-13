type ImageKey = 'image1' | 'image2' | 'image3' | 'image4';

export interface OfferData {
  id: number;
  title: string;
  description: string;
  image: ImageKey;
}

export const offers: OfferData[] = [
  {
    id: 1,
    title: 'Move the borders of reality!',
    description: "Go on a space adventure - it's possible with us!",
    image: 'image1',
  },
  {
    id: 2,
    title: 'Space is not just stars and planets',
    description: 'Go on a space adventure ',
    image: 'image2',
  },
  {
    id: 3,
    title: 'For those who dream of stars',
    description: 'Our offer: make your dream come true',
    image: 'image3',
  },
  {
    id: 4,
    title: 'Fulfill your fantastic dreams',
    description: 'Space has never been so close',
    image: 'image4',
  },
];
