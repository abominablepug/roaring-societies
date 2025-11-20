import type { Topic } from '../types';

const xenoImm: Topic =
  // ==============================================================
  // 4. XENOPHOBIA & IMMIGRATION
  // ==============================================================
  {
    id: 'xenophobia',
    title: 'Xenophobia & Immigration',
    backgroundImage: '/src/images/ellis_island.png',
    platforms: [
      { id: 'p1', x: 10, y: 65, width: 20 },
      { id: 's1', x: 35, y: 70, width: 10 },
      { id: 'p2', x: 40, y: 50, width: 20 },
      { id: 'p3', x: 70, y: 65, width: 20 }
    ],
    doors: [
      // --- 4A. Social Intolerance ---
      {
        id: 'xeno-soc',
        label: 'Intolerance',
        x: 20, y: 65, // Centered on p1
        image: 'Frown',
        destinationTitle: 'Social Views',
        subRoom: {
          id: 'sub-xeno-soc',
          title: 'Social Intolerance',
          backgroundImage: '/src/images/crowd.png',
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
          doors: [
            {
              id: 'dillingham',
              label: 'Reports',
              x: 50, y: 60, // Centered on p1
              image: 'FileText',
              destinationTitle: 'Dillingham Commission',
              items: [
                {
                  id: 'txt-dill',
                  type: 'info',
                  title: 'Old vs New',
                  text: 'The 1911 Dillingham Reports labeled Southern/Eastern Europeans (New Immigrants) as "undesirable" compared to Northern Europeans. The CPI urged citizens to watch for "unpatriotic" behavior from Germans/Slavs.'
                },
                {
                  id: 'mcq-dill',
                  type: 'question',
                  title: 'Reports',
                  question: 'Which group was labeled "undesirable" by the Dillingham Commission?',
                  options: ['Northern Europeans', 'Southern and Eastern Europeans', 'Canadians', 'Western Europeans'],
                  correctAnswer: 'Southern and Eastern Europeans'
                }
              ]
            }
          ]
        }
      },
      // --- 4B. Legislation ---
      {
        id: 'xeno-law',
        label: 'Laws',
        x: 50, y: 50, // Centered on p2
        image: 'Gavel',
        destinationTitle: 'Immigration Acts',
        subRoom: {
          id: 'sub-xeno-law',
          title: 'Restrictive Laws',
          backgroundImage: '/src/images/congress.png',
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
          doors: [
            {
              id: 'quotas',
              label: 'Quotas',
              x: 50, y: 60, // Centered on p1
              image: 'Ban',
              destinationTitle: 'Quota Acts',
              items: [
                {
                  id: 'txt-quota',
                  type: 'info',
                  title: 'Closing the Door',
                  text: 'Xenophobia led to the 1917 Immigration Act (barring Asians) and the Quota Acts of 1921 & 1924. These limited Russians, Italians, and Poles to preserve the "racial composition" of the US.'
                },
                {
                  id: 'mcq-quota',
                  type: 'question',
                  title: 'Policy',
                  question: 'What was the main goal of the Quota Acts of 1921 and 1924?',
                  options: ['Increase workforce', 'Preserve racial composition (favoring Northern Europe)', 'Encourage Asian immigration', 'Stop all tourism'],
                  correctAnswer: 'Preserve racial composition (favoring Northern Europe)'
                }
              ]
            }
          ]
        }
      },
      // --- 4C. Anarchy/Labor ---
      {
        id: 'xeno-labor',
        label: 'Labor',
        x: 80, y: 65, // Centered on p3
        image: 'Hammer',
        destinationTitle: 'Labor & Anarchy',
        subRoom: {
          id: 'sub-xeno-labor',
          title: 'Fear of Anarchy',
          backgroundImage: '/src/images/strike.png',
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
          doors: [
            {
              id: 'unions',
              label: 'Unions',
              x: 50, y: 60, // Centered on p1
              image: 'Users',
              destinationTitle: 'Crackdowns',
              items: [
                {
                  id: 'txt-union',
                  type: 'info',
                  title: 'Suppression',
                  text: 'The government feared unions were anarchist. They infiltrated the IWWW and used "criminal syndicalism" laws to arrest leaders, crippling labor organizations under the guise of national security.'
                },
                {
                  id: 'mcq-union',
                  type: 'question',
                  title: 'Labor',
                  question: 'What type of laws were used to arrest union leaders?',
                  options: ['Traffic laws', 'Criminal syndicalism laws', 'Maritime laws', 'Housing codes'],
                  correctAnswer: 'Criminal syndicalism laws'
                }
              ]
            }
          ]
        }
      }
    ]
  };

export default xenoImm;