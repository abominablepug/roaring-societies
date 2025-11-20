import type { Topic } from './types';
import greatMigration from './data/greatMigration';
import racialTension from './data/racialTension';
import aclu from './data/aclu';
import xenoImm from './data/xenoImm';
import gitlow from './data/gitlow';
import prohibition from './data/prohibition';

export const TOPICS: Topic[] = [

  greatMigration,
  racialTension,
  aclu,
  xenoImm,
  gitlow,
  prohibition,
  {
    id: 'bibliography',
    title: 'Bibliography',
    isBibliography: true,
  }
];