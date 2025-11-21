import type { Topic } from '../types';

const xenoImm: Topic =
  // ==============================================================
  // 4. XENOPHOBIA & IMMIGRATION
  // ==============================================================
  {
    id: 'xenophobia',
    title: 'Xenophobia & Immigration',
    backgroundImage: "/images/museumBackground.png",
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
          backgroundImage: "/images/museumBackground.png",
          platforms: [
            { id: 'def-sp1', x: 15, y: 30, width: 25 },
            { id: 'def-sp2', x: 60, y: 25, width: 25 },
            { id: 'def-sp3', x: 25, y: 70, width: 20 },
            { id: 'def-sp4', x: 55, y: 60, width: 15 },
            { id: 'def-step1', x: 20, y: 50, width: 10 },
            { id: 'def-step2', x: 45, y: 40, width: 8 }
          ],
          doors: [
            {
              id: 'radicalCrackdowns',
              label: 'The Crackdown',
              x: 27.5, y: 30, // Centered on p1
              image: 'FileText',
              destinationTitle: 'Radical Crackdowns',
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
            },
            {
              id: 'redMenace',
              label: 'The Red Menace Arrives',
              x: 72.5, y: 25, // Centered on p1
              image: 'FileText',
              destinationTitle: 'Red Menace',
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
            },
            {
              id: 'raidJustification',
              label: 'The Palmer Raids',
              x: 35, y: 70, // Centered on p1
              image: 'FileText',
              destinationTitle: 'Raid Justification',
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
            },
            {
              id: 'redMenaceSuppression',
              label: 'The Suppression of the Red Menace',
              x: 62.5, y: 60, // Centered on p1
              image: 'FileText',
              destinationTitle: 'Red Menace Suppression',
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
      // --- 4B. Xenophobia ---
      {
        id: 'xeno-law',
        label: 'Laws',
        x: 50, y: 50, // Centered on p2
        image: 'Gavel',
        destinationTitle: 'Immigration Acts',
        subRoom: {
          id: 'sub-xeno-law',
          title: 'Restrictive Laws',
          backgroundImage: "/images/museumBackground.png",
          platforms: [
            { id: 'push-sp-1', x: 0, y: 50, width: 25 },
            { id: 'push-sp-2', x: 75, y: 50, width: 25 },
            { id: 'push-sp-3', x: 35, y: 20, width: 10 },
            { id: 'push-sp-4', x: 55, y: 20, width: 10 },
            { id: 'push-step-1', x: 30, y: 70, width: 10 },
            { id: 'push-step-2', x: 60, y: 70, width: 10 },
            { id: 'push-step-3', x: 42.5, y: 57, width: 15 },
            { id: 'push-step-4', x: 25, y: 35, width: 10 },
            { id: 'push-step-5', x: 65, y: 35, width: 10 }
          ],
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
      // --- 4C. Anarchy ---
      {
        id: 'xeno-annarchy',
        label: 'Labor',
        x: 80, y: 65, // Centered on p3
        image: 'Hammer',
        destinationTitle: 'Labor & Anarchy',
        subRoom: {
          id: 'sub-xeno-labor',
          title: 'Fear of Anarchy',
          backgroundImage: "/images/museumBackground.png",
          platforms: [
             { id: 'pull-sp-1', x: 10, y: 70, width: 10 }, // Step
             { id: 'pull-sp-2', x: 30, y: 60, width: 10 }, // Step
             { id: 'pull-sp-3', x: 60, y: 50, width: 10 }, // Step
             { id: 'pull-sp-4', x: 80, y: 40, width: 10 }, // Step
          ],
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
      },
      // --- 4D. Labor ---
      {
        id: 'xeno-labor',
        label: 'Labor',
        x: 80, y: 65, // Centered on p3
        image: 'Hammer',
        destinationTitle: 'Labor & Anarchy',
        subRoom: {
          id: 'sub-xeno-labor',
          title: 'Fear of Anarchy',
          backgroundImage: "/images/museumBackground.png",
          platforms: [
            { id: 'eff-sp-1', x: 12.5, y: 70, width: 15 },
            { id: 'eff-sp-2', x: 42.5, y: 57, width: 15 },
            { id: 'eff-sp-3', x: 72.5, y: 70, width: 15 }
          ],
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