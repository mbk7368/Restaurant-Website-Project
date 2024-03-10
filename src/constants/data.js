import images from './images';

const wines = [
  {
  title: 'Truffle-infused Sparkling Water',
  price: '$50',
  tags: 'AU | Bottle',
  },
  {
  title: 'Gold-leaf Herbal Elixir',
  price: '$80',
  tags: 'AU | Bottle',
  },
  {
  title: 'Diamond Sparkle Mocktail',
  price: '$95',
  tags: 'FR | 750 ml',
  },
  {
  title: 'Rare Botanical Tonic',
  price: '$35',
  tags: 'CA | 750 ml',
  },
  {
  title: 'White Truffle Virgin Martini',
  price: '$60',
  tags: 'IE | 750 ml',
  },
  ];

const cocktails = [
  {
    title: 'Truffle-infused Sparkling Water',
    price: '$50',
    tags: 'AU | Bottle',
    },
    {
    title: 'Gold-leaf Herbal Elixir',
    price: '$80',
    tags: 'AU | Bottle',
    },
    {
    title: 'Diamond Sparkle Mocktail',
    price: '$95',
    tags: 'FR | 750 ml',
    },
    {
    title: 'Rare Botanical Tonic',
    price: '$35',
    tags: 'CA | 750 ml',
    },
    {
    title: 'White Truffle Virgin Martini',
    price: '$60',
    tags: 'IE | 750 ml',
    },
    ];

const awards = [
  {
  imgUrl: images.award02,
  title: 'Michelin Star',
  subtitle: 'Recognizing culinary excellence and exceptional quality.',
  },
  {
  imgUrl: images.award01,
  title: 'James Beard Award',
  subtitle: 'Celebrating outstanding achievement in the culinary industry.',
  },
  {
  imgUrl: images.award05,
  title: `World's 50 Best Restaurants`,
  subtitle: 'Acknowledging the finest dining experiences worldwide.',
  },
  {
  imgUrl: images.award03,
  title: 'AAA Five Diamond Award',
  subtitle: 'Honoring exceptional service, cuisine, and ambiance.',
  },
  ];

export default { wines, cocktails, awards };
