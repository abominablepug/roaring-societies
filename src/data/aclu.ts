import type { Topic } from '../types';

const aclu: Topic =
  // ==============================================================
  // 3. ACLU
  // ==============================================================
  {
    id: 'aclu',
    title: 'Birth of the ACLU',
    backgroundImage: "/images/museumBackground.png",
    platforms: [
      { id: 'p1', x: 10, y: 67, width: 10 },
      { id: 'p2', x: 10, y: 54, width: 10 },
      { id: 'p3', x: 10, y: 41, width: 10 },
      { id: 'p4', x: 10, y: 28, width: 10 },
      { id: 's1', x: 30, y: 20, width: 10 },
      { id: 's2', x: 50, y: 15, width: 10 },
      { id: 's3', x: 70, y: 50, width: 20 },
    ],
    doors: [
      // --- 3A. Red Scare ---
      {
        id: 'aclu-red',
        label: 'Red Scare',
        x: 25, y: 70, // Centered on p1
        image: 'Siren',
        destinationTitle: 'Palmer Raids',
        subRoom: {
          id: 'sub-aclu-red',
          title: 'The Red Scare',
          backgroundImage: "/images/museumBackground.png",
          platforms: [
            { id: 'red-sp-1', x: 10, y: 70, width: 10 }, // Step
            { id: 'red-sp-2', x: 30, y: 60, width: 10 }, // Step
            { id: 'red-sp-3', x: 60, y: 50, width: 10 }, // Step
            { id: 'red-sp-4', x: 80, y: 40, width: 10 }, // Step
          ],
          doors: [
            {
              id: 'palmer',
              label: 'Raids',
              x: 50, y: 60, // Centered on p1
              image: 'Gavel',
              destinationTitle: 'Palmer Raids',
              items: [
                {
                  id: 'txt-palmer',
                  type: 'info',
                  title: 'Warrantless Raids',
                  text: 'Fear of communism (USSR) led to the Red Scare. Attorney General A. Mitchell Palmer ordered raids on suspected communists/anarchists without warrants, arresting innocent citizens.'
                },
                {
                  id: 'mcq-palmer',
                  type: 'question',
                  title: 'Civil Liberties',
                  question: 'What was the primary legal criticism of the Palmer Raids?',
                  options: ['They were too expensive', 'They arrested people without warrants', 'They only targeted the rich', 'They happened at night'],
                  correctAnswer: 'They arrested people without warrants'
                }
              ]
            }
          ]
        }
      },
      // --- 3B. NCLB ---
      {
        id: 'aclu-nclb',
        label: 'NCLB',
        x: 55, y: 60, // Centered on p2
        image: 'Shield',
        destinationTitle: 'Civil Liberties Bureau',
        subRoom: {
          id: 'sub-aclu-nclb',
          title: 'National Civil Liberties Bureau',
          backgroundImage: "/images/museumBackground.png",
          platforms: [
            { id: 'eff-sp-1', x: 12.5, y: 67, width: 15 },
            { id: 'eff-sp-2', x: 42.5, y: 55, width: 15 },
            { id: 'eff-sp-3', x: 72.5, y: 67, width: 15 }
          ],
          doors: [
            {
              id: 'obj',
              label: 'Objectors',
              x: 50, y: 60, // Centered on p1
              image: 'UserX',
              destinationTitle: 'Conscientious Objectors',
              items: [
                {
                  id: 'txt-obj',
                  type: 'info',
                  title: 'WWI Origins',
                  text: 'The NCLB formed to protect Conscientious Objectors in WWI who refused the draft. They viewed arrests under the Espionage Acts as unconstitutional. This group was the precursor to the ACLU.'
                },
                {
                  id: 'mcq-obj',
                  type: 'question',
                  title: 'Origins',
                  question: 'Who did the NCLB primarily defend during World War I?',
                  options: ['German spies', 'Conscientious Objectors', 'Factory owners', 'Politicians'],
                  correctAnswer: 'Conscientious Objectors'
                }
              ]
            }
          ]
        }
      },
      // --- 3C. ACLU Origins ---
      {
        id: 'aclu-org',
        label: 'ACLU',
        x: 85, y: 70, // Centered on p3
        image: 'Briefcase',
        destinationTitle: 'Roger Baldwin',
        subRoom: {
          id: 'sub-aclu-org',
          title: 'The ACLU Formed',
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
              id: 'baldwin',
              label: 'Baldwin',
              x: 50, y: 60, // Centered on p1
              image: 'UserCheck',
              destinationTitle: 'Defending Everyone',
              items: [
                {
                  id: 'txt-bald',
                  type: 'info',
                  title: 'Roger Baldwin',
                  text: 'After the NCLB disbanded, Roger Baldwin formed the ACLU to fight for ALL citizens\' rights. They worked with the NAACP but also defended the KKK\'s right to free speech. '
                },
                {
                  id: 'mcq-bald',
                  type: 'question',
                  title: 'Principles',
                  question: 'Which controversial group did the ACLU defend to protect free speech?',
                  options: ['The Bolsheviks', 'The Ku Klux Klan', 'The British Army', 'The Prohibitionists'],
                  correctAnswer: 'The Ku Klux Klan'
                }
              ]
            }
          ]
        }
      }
    ]
  };

export default aclu;