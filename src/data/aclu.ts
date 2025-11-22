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
        x: 35, y: 20, // Centered on p1
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
              id: 'palmer-1',
              label: 'Raids',
              x: 15, y: 70, // Centered on p1
              image: 'Gavel',
              destinationTitle: 'The Red Scare',
              items: [
                {
                  id: 'txt-palmer',
                  type: 'info',
                  title: 'The Red Scare',
                  text: 'The First Red Scare, taking place in the early 20th century, was a response to the growing communist sentiment in America during the establishment and growth of the Soviet Union (USSR). Many believed that communism was an inherent threat to capitalism, and thus, when combined with increased anarchist activity, many began to fear and subsequently hate communism as a whole (Effact #16).'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Red Scare Cartoon",
                  src: "/images/aclu/redscarecartoon.png",
                  caption: "Red Scare 1920s political cartoon"
                },
                {
                  id: 'mcq-palmer',
                  type: 'question',
                  title: 'Civil Liberties',
                  question: 'What triggered the First Red Scare in the United States?',
                  options: [' The end of World War II and the rise of fascism in Europe', 'The success of the Harlem Renaissance', 'Growing communist sentiment in America, influenced by the establishment of the Soviet Union, combined with increased anarchist activity', 'Economic prosperity and industrial growth in the 1920s'],
                  correctAnswer: 'Growing communist sentiment in America, influenced by the establishment of the Soviet Union, combined with increased anarchist activity'
                }
              ]
            },
            {
              id: 'palmer-2',
              label: 'Raids',
              x: 35, y: 60, // Centered on p1
              image: 'Gavel',
              destinationTitle: 'The Palmer Raids',
              items: [
                {
                  id: 'txt-palmer',
                  type: 'info',
                  title: 'The Palmer Raids',
                  text: 'The Palmer Raids, named for then Attorney General A. Mitchell Palmer who was personally affected by the anarchist movement, were a set of raids on many supposed communist party members, often without warrants or legal justification.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "A. Mitchell Palmer",
                  src: "/images/aclu/palmer.png",
                  caption: "A. Mitchell Palmer 1920"
                },
                {
                  id: 'mcq-palmer',
                  type: 'question',
                  title: 'Civil Liberties',
                  question: 'What were the Palmer Raids during the First Red Scare?',
                  options: ['Peaceful protests advocating for labor rights', 'A series of government raids on suspected communists and anarchists, often conducted without warrants or legal justification', 'Military campaigns against foreign powers', 'Laws passed to protect civil liberties'],
                  correctAnswer: 'A series of government raids on suspected communists and anarchists, often conducted without warrants or legal justification'
                }
              ]
            },
            {
              id: 'palmer-3',
              label: 'Raids',
              x: 65, y: 50, // Centered on p1
              image: 'Gavel',
              destinationTitle: 'Unlawful Arrests',
              items: [
                {
                  id: 'txt-palmer',
                  type: 'info',
                  title: 'Unlawful Arrests',
                  text: 'While these raids did result in the imprisonment of a handful of anarchists and violent dissenters, many of the raids resulted in the unlawful arrests of innocent citizens who were simply voicing their opinions on politics and the American government.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Palmer Raids",
                  src: "/images/aclu/palmerraids.png",
                  caption: "Palmer Raids arrested anarchists"
                },
                {
                  id: 'mcq-palmer',
                  type: 'question',
                  title: 'Check',
                  question: 'What was a major issue with the Palmer Raids during the First Red Scare?',
                  options: ['They completely eliminated anarchist and communist activity in the U.S.', 'They only targeted foreign nationals with no connection to political movements', 'They were universally supported as a defense of civil liberties', 'They resulted in the unlawful arrests of many innocent citizens who were simply expressing political opinions'],
                  correctAnswer: 'They resulted in the unlawful arrests of many innocent citizens who were simply expressing political opinions'
                }
              ]
            },
            {
              id: 'palmer-4',
              label: 'Raids',
              x: 85, y: 40, // Centered on p1
              image: 'Gavel',
              destinationTitle: 'Civil Liberties',
              items: [
                {
                  id: 'txt-palmer',
                  type: 'info',
                  title: 'Civil Liberties',
                  text: 'The Palmer Raids would generally go down in American history as a severe infringement on American liberties, and, even at the time, many would begin to speak out against these raids and the violation of said American liberties (Effact #17).'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Raids History",
                  src: "/images/aclu/raidshistory.png",
                  caption: "ACLU Palmer Raids history"
                },
                {
                  id: 'mcq-palmer',
                  type: 'question',
                  title: 'Civil Liberties',
                  question: 'How are the Palmer Raids generally remembered in American history?',
                  options: ['As a necessary measure to protect the nation from foreign threats', 'As a severe infringement on American liberties, prompting criticism even at the time', 'As a minor event with little impact on civil rights', 'As a successful campaign that strengthened freedom of speech'],
                  correctAnswer: 'As a severe infringement on American liberties, prompting criticism even at the time'
                }
              ]
            },
          ]
        }
      },
      // --- 3B. NCLB ---
      {
        id: 'aclu-nclb',
        label: 'NCLB',
        x: 55, y: 15, // Centered on p2
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
              id: 'obj-1',
              label: 'Objectors',
              x: 20, y: 67, // Centered on p1
              image: 'UserX',
              destinationTitle: 'NCLB',
              items: [
                {
                  id: 'txt-obj',
                  type: 'info',
                  title: 'NCLB Formation',
                  text: 'The NCLB, which was a reincarnation of the former Civil Liberties Bureau (CLB), was formed in response to the prosecution of conscientious objectors during World War I who would openly refuse the draft for religious or moral reasons, and would subsequently be punished by law.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "NCLB Document",
                  src: "/images/aclu/nclbdoc.png",
                  caption: "National Civil Liberties Bureau document"
                },
                {
                  id: 'mcq-obj',
                  type: 'question',
                  title: 'Origins',
                  question: 'Why was the National Civil Liberties Bureau (NCLB) formed?',
                  options: ['To support the government’s prosecution of draft evaders', 'To create a national military draft system', 'To respond to the punishment of conscientious objectors during World War I who refused the draft for religious or moral reasons', 'To enforce wartime censorship laws'],
                  correctAnswer: 'To respond to the punishment of conscientious objectors during World War I who refused the draft for religious or moral reasons'
                }
              ]
            },
            {
              id: 'obj-2',
              label: 'Objectors',
              x: 50, y: 55, // Centered on p1
              image: 'UserX',
              destinationTitle: 'NCLB Mission',
              items: [
                {
                  id: 'txt-obj',
                  type: 'info',
                  title: 'NCLB Mission',
                  text: 'The NCLB viewed these imprisonments and arrests as a violation of the freedoms of the American people directly listed in the Constitution, and would go on to provide aid and legal backing to conscientious objectors and the many others affected by the Espionage Acts.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "NCLB Lawyers",
                  src: "/images/aclu/nclblawyers.png",
                  caption: "National Civil Liberties Bureau lawyers 1910s"
                },
                {
                  id: 'mcq-obj',
                  type: 'question',
                  title: 'Check',
                  question: 'What was a key role of the National Civil Liberties Bureau (NCLB)?',
                  options: ['To enforce the Espionage Acts strictly against all citizens', 'To provide legal aid and support to conscientious objectors and others whose rights were violated under the Espionage Acts', 'To limit free speech during wartime', 'To promote compulsory military service for all Americans'],
                  correctAnswer: 'To provide legal aid and support to conscientious objectors and others whose rights were violated under the Espionage Acts'
                }
              ]
            },
            {
              id: 'obj-3',
              label: 'Objectors',
              x: 80, y: 67, // Centered on p1
              image: 'UserX',
              destinationTitle: 'NCLB Legacy',
              items: [
                {
                  id: 'txt-obj',
                  type: 'info',
                  title: 'NCLB Legacy',
                  text: 'The NCLB would act as the foundation for and the direct precursor of the American Civil Liberties Union (ACLU).'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "ACLU Founders",
                  src: "/images/aclu/aclufounders.png",
                  caption: "ACLU founders photo 1920s"
                },
                {
                  id: 'mcq-obj',
                  type: 'question',
                  title: 'Origins',
                  question: 'What organization did the National Civil Liberties Bureau (NCLB) directly precede?',
                  options: ['The Federal Bureau of Investigation (FBI)', 'The Ku Klux Klan (KKK)', 'The Department of Justice (DOJ)', 'The American Civil Liberties Union (ACLU)'],
                  correctAnswer: 'The American Civil Liberties Union (ACLU)'
                }
              ]
            },
          ]
        }
      },
      // --- 3C. ACLU Origins ---
      {
        id: 'aclu-org',
        label: 'ACLU',
        x: 80, y: 50, // Centered on p3
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
              id: 'baldwin-1',
              label: 'Baldwin',
              x: 22.5, y: 30, // Centered on p1
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
            },
            {
              id: 'baldwin-2',
              label: 'Baldwin',
              x: 72.5, y: 25, // Centered on p1
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
            },
            {
              id: 'baldwin-3',
              label: 'Baldwin',
              x: 35, y: 70, // Centered on p1
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
            },
            {
              id: 'baldwin-4',
              label: 'Baldwin',
              x: 62.5, y: 60, // Centered on p1
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
            },
          ]
        }
      }
    ]
  };

export default aclu;