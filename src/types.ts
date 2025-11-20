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

export interface Platform {
  id: string;
  x: number; // % from left
  y: number; // % from top
  width: number; // % width
}

// New Interface to define the nested room structure
export interface SubRoom {
  id: string;
  title: string;
  backgroundImage?: string;
  platforms?: Platform[];
  doors?: Door[]; // Recursive: A subroom has its own doors
}

export interface Door {
  id: string;
  label: string;
  x: number; // Percentage 0-100 relative to room width
  y: number; // Percentage 0-100 relative to room height
  image: string;
  destinationTitle: string; // Used for the tooltip or header
  
  // CHANGE 1: Items are now optional (a door might just be a portal to a subroom)
  items?: InteractionItem[]; 
  
  // CHANGE 2: Optional nested room configuration
  subRoom?: SubRoom;

  // CHANGE 3: Helper for the UI (Exit/Return buttons)
  isSystemDoor?: boolean; 
}

export interface Topic {
  id: string;
  title: string;
  isBibliography?: boolean;
  backgroundImage?: string;
  doors?: Door[];
  platforms?: Platform[]; 
}