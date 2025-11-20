export type ContentType = 'info' | 'image' | 'question';

export interface BaseContent {
  id: string;
  type: ContentType;
  title: string;
}

export interface InfoContent extends BaseContent {
  type: 'info';
  text: string;
  audioUrl?: string; 
}

export interface ImageContent extends BaseContent {
  type: 'image';
  src: string;
  caption: string;
}

export interface QuestionContent extends BaseContent {
  type: 'question';
  question: string;
  options: string[];
  correctAnswer: string;
}

export type InteractionItem = InfoContent | ImageContent | QuestionContent;

export interface Door {
  id: string;
  label: string;
  x: number; // Percentage 0-100 relative to room width
  y: number; // Percentage 0-100 relative to room height
  image: string;
  destinationTitle: string;
  items: InteractionItem[];
}

export interface Topic {
  id: string;
  title: string;
  isBibliography?: boolean;
  // Game Props
  backgroundImage?: string;
  doors?: Door[];
}

export const TOPICS: Topic[] = [
  {
    id: 'jazz-age',
    title: 'The Jazz Age',
    backgroundImage: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1920&auto=format&fit=crop',
    doors: [
      {
        id: 'stage-door',
        label: 'The Bandstand',
        x: 50, y: 20,
        image: 'https://cdn-icons-png.flaticon.com/512/59/59800.png', // Placeholder Door
        destinationTitle: 'The Musicians',
        items: [
          { 
            id: 'louis', type: 'info', title: 'Louis Armstrong', 
            text: 'Nicknamed "Satchmo", Armstrong was one of the most influential figures in jazz.',
            audioUrl: '' // Add mp3 url here
          },
          {
            id: 'trumpet', type: 'image', title: 'The Golden Trumpet',
            src: 'https://images.unsplash.com/photo-1573871669414-010dbf73ca84?auto=format&fit=crop&w=800',
            caption: 'Brass instruments defined the era.'
          }
        ]
      },
      {
        id: 'bar-door',
        label: 'The Speakeasy Bar',
        x: 80, y: 60,
        image: 'https://cdn-icons-png.flaticon.com/512/823/823056.png',
        destinationTitle: 'Cocktail Culture',
        items: [
          {
            id: 'quiz1', type: 'question', title: 'Secret Passwords',
            question: 'What was the most common way to enter a speakeasy?',
            options: ['A Key', 'A Secret Knock/Password', 'Breaking In', 'A Ticket'],
            correctAnswer: 'A Secret Knock/Password'
          }
        ]
      }
    ]
  },
  {
    id: 'prohibition',
    title: 'Prohibition',
    backgroundImage: 'https://images.unsplash.com/photo-1569346967252-a50609409b86?auto=format&fit=crop&w=1920',
    doors: [
        {
            id: 'basement', label: 'Storage', x: 20, y: 80,
            image: 'https://cdn-icons-png.flaticon.com/512/823/823056.png',
            destinationTitle: 'Illegal Imports',
            items: []
        }
    ]
  },
  {
    id: 'fashion',
    title: '1920s Fashion',
    backgroundImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920',
    doors: []
  },
  {
    id: 'bibliography',
    title: 'Bibliography',
    isBibliography: true,
  }
];