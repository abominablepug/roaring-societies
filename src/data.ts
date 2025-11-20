import type { Topic } from './types'; // Assuming your base types are here


export const TOPICS: Topic[] = [
  {
    id: 'jazz-age',
    title: 'The Jazz Age',
    backgroundImage: '/src/images/background.png',
    // Platforms arranged to help player reach the high doors
    platforms: [
      { id: 'p1', x: 10, y: 70, width: 15 },
      { id: 'p2', x: 30, y: 55, width: 10 },
      { id: 'p3', x: 60, y: 45, width: 15 },
      { id: 'p4', x: 80, y: 30, width: 10 },
    ],
    doors: [
      {
        id: 'stage-door',
        label: 'The Bandstand',
        x: 15, y: 55, // On top of Platform 2 (approx)
        image: 'Music', 
        destinationTitle: 'The Musicians',
        items: [] // ... keep your items
      },
      {
        id: 'bar-door',
        label: 'The Speakeasy',
        x: 85, y: 30, // High up, on Platform 4
        image: 'Wine',
        destinationTitle: 'Cocktail Culture',
        items: [] // ... keep your items
      },
      {
        id: 'basement-door',
        label: 'The Cellar',
        x: 50, y: 82, // On the ground floor
        image: 'Key',
        destinationTitle: 'Secrets',
        items: []
      }
    ]
  },
  {
    id: 'prohibition',
    title: 'Prohibition',
    backgroundImage: 'https://images.unsplash.com/photo-1569346967252-a50609409b86',
    platforms: [
        { id: 'p-main', x: 40, y: 60, width: 20 }
    ],
    doors: [
        {
            id: 'storage', label: 'Storage', x: 50, y: 60,
            image: 'Box',
            destinationTitle: 'Illegal Imports',
            items: []
        }
    ]
  },
  {
    id: 'bibliography',
    title: 'Bibliography',
    isBibliography: true,
  }
];