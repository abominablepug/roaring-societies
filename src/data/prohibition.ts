import type { Topic } from '../types';

const prohibition: Topic =
  // ==============================================================
  // 6. PROHIBITION
  // ==============================================================
  {
    id: 'prohibition',
    title: 'Prohibition',
    backgroundImage: "/images/museumBackground.png",
    platforms: [
      { id: 'p1', x: 5, y: 70, width: 15 },
      { id: 's2', x: 23, y: 75, width: 8 },
      { id: 'p2', x: 30, y: 60, width: 15 },
      { id: 's3', x: 48, y: 65, width: 8 },
      { id: 'p3', x: 55, y: 50, width: 15 },
      { id: 'p4', x: 80, y: 70, width: 15 }
    ],
    doors: [
      // --- 6A. Causes ---
      {
        id: 'pro-cause',
        label: 'Causes',
        x: 12.5, y: 70, // Centered on p1
        image: 'Droplet', // Water/Liquid
        destinationTitle: 'Temperance',
        subRoom: {
          id: 'sub-pro-cause',
          title: 'Origins of Prohibition',
          backgroundImage: "/images/museumBackground.png",
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
          doors: [
            {
              id: 'wctu',
              label: 'WCTU',
              x: 50, y: 60, // Centered on p1
              image: 'Users',
              destinationTitle: 'The Movement',
              items: [
                {
                  id: 'txt-wctu',
                  type: 'info',
                  title: 'Temperance',
                  text: 'The WCTU and Anti-Saloon League fought to ban alcohol. Frances Willard called alcohol the "home\'s arch enemy." WWI increased support as using grain for alcohol was seen as unpatriotic. '
                },
                {
                  id: 'mcq-wctu',
                  type: 'question',
                  title: 'WWI',
                  question: 'Why did World War I increase support for Prohibition?',
                  options: ['Soldiers don\'t like beer', 'Using grain for alcohol was seen as unpatriotic', 'Germany stopped exporting beer', 'The army banned it'],
                  correctAnswer: 'Using grain for alcohol was seen as unpatriotic'
                }
              ]
            }
          ]
        }
      },
      // --- 6B. Details ---
      {
        id: 'pro-det',
        label: 'Details',
        x: 37.5, y: 60, // Centered on p2
        image: 'FileText',
        destinationTitle: 'The Law',
        subRoom: {
          id: 'sub-pro-det',
          title: 'The 18th Amendment',
          backgroundImage: "/images/museumBackground.png",
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
          doors: [
            {
              id: 'volstead',
              label: 'Volstead',
              x: 50, y: 60, // Centered on p1
              image: 'Book',
              destinationTitle: 'Enforcement',
              items: [
                {
                  id: 'txt-vol',
                  type: 'info',
                  title: '18th Amendment',
                  text: 'Ratified in 1919, enforced by the Volstead Act. "Drys" believed it would improve society; "Wets" predicted crime. It was largely supported by rural areas.'
                },
                {
                  id: 'mcq-vol',
                  type: 'question',
                  title: 'Legislation',
                  question: 'Which Act was passed to enforce the 18th Amendment?',
                  options: ['The Espionage Act', 'The Volstead Act', 'The Sedition Act', 'The Homestead Act'],
                  correctAnswer: 'The Volstead Act'
                }
              ]
            }
          ]
        }
      },
      // --- 6C. Intended Effects ---
      {
        id: 'pro-int',
        label: 'Intended',
        x: 62.5, y: 50, // Centered on p3
        image: 'Smile',
        destinationTitle: 'Goals',
        subRoom: {
          id: 'sub-pro-int',
          title: 'Hopes for Prohibition',
          backgroundImage: "/images/museumBackground.png",
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
          doors: [
            {
              id: 'goals',
              label: 'Goals',
              x: 50, y: 60, // Centered on p1
              image: 'Sun',
              destinationTitle: 'A Moral Society',
              items: [
                {
                  id: 'txt-goals',
                  type: 'info',
                  title: 'Noble Experiment',
                  text: 'Supporters believed banning alcohol would reduce abuse in homes, increase worker productivity, and create a morally upright society safeguarded from corruption.'
                },
                {
                  id: 'mcq-goals',
                  type: 'question',
                  title: 'Objectives',
                  question: 'What did Wayne Wheeler believe banning alcohol would lead to?',
                  options: ['More tax revenue', 'Fewer arrests and safer communities', 'More dance halls', 'Cheaper grain'],
                  correctAnswer: 'Fewer arrests and safer communities'
                }
              ]
            }
          ]
        }
      },
      // --- 6D. Unintended Effects ---
      {
        id: 'pro-un',
        label: 'Reality',
        x: 87.5, y: 70, // Centered on p4
        image: 'Eye',
        destinationTitle: 'Crime & Letters',
        subRoom: {
          id: 'sub-pro-un',
          title: 'The Reality',
          backgroundImage: "/images/museumBackground.png",
          platforms: [
            { id: 'p1', x: 20, y: 60, width: 20 },
            { id: 'p2', x: 60, y: 60, width: 20 }
          ],
          doors: [
            {
              id: 'crime',
              label: 'Crime',
              x: 30, y: 60, // Centered on p1
              image: 'Skull',
              destinationTitle: 'Organized Crime',
              items: [
                {
                  id: 'txt-capone',
                  type: 'info',
                  title: 'Bootlegging',
                  text: 'Prohibition created illegal networks. Al Capone merged alcohol smuggling with prostitution/murder. The government lost millions in tax revenue. '
                },
                {
                  id: 'mcq-capone',
                  type: 'question',
                  title: 'Result',
                  question: 'What was a major unintended economic effect of Prohibition?',
                  options: ['Increase in farming', 'Loss of tax revenue', 'Cheaper alcohol', 'Higher wages'],
                  correctAnswer: 'Loss of tax revenue'
                }
              ]
            },
            {
              id: 'letters',
              label: 'Letters',
              x: 70, y: 60, // Centered on p2
              image: 'Mail',
              destinationTitle: 'Citizen Letters',
              items: [
                {
                  id: 'txt-let',
                  type: 'info',
                  title: 'Public Outcry',
                  text: 'Letters show the failure: Otto Schulz wrote against it; Mrs. Hillyer complained her husband still drank; O.A. Calandria reported speakeasies in NJ. It was repealed by the 21st Amendment.'
                },
                {
                  id: 'mcq-let',
                  type: 'question',
                  title: 'Repeal',
                  question: 'Which Amendment finally repealed Prohibition?',
                  options: ['19th', '20th', '21st', '22nd'],
                  correctAnswer: '21st'
                }
              ]
            }
          ]
        }
      }
    ]
  };

export default prohibition;