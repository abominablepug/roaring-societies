import type { Topic } from './types';

export const TOPICS: Topic[] = [

  // ==============================================================
  // 1. THE GREAT MIGRATION
  // ==============================================================
  {
    id: 'great-migration',
    title: 'The Great Migration',
    backgroundImage: '/src/images/greatMigration.jpg', 
    platforms: [
      { id: 'p1', x: 5, y: 70, width: 20 },   // Door 1 Base
      { id: 'p2', x: 30, y: 60, width: 20 },  // Door 2 Base
      { id: 'step-p3', x: 55, y: 70, width: 10 }, // Step to P3
      { id: 'p3', x: 60, y: 50, width: 20 },  // Door 3 Base (High)
      { id: 'p4', x: 85, y: 70, width: 15 },  // Door 4 Base
    ],
    doors: [
      // --- 1A. Definition ---
      {
        id: 'gm-def',
        label: 'Definition',
        x: 15, y: 70, // Centered on p1 (5 + 20/2)
        image: 'BookOpen',
        destinationTitle: 'Context',
        subRoom: {
          id: 'sub-gm-def',
          title: 'What was the Great Migration?',
          backgroundImage: '/src/images/map_room.png',
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
              id: 'info-def',
              label: 'Overview',
              x: 27.5, y: 30, // Centered on sp1
              image: 'Info',
              destinationTitle: 'The Movement',
              items: [
                {
                  id: 'txt-def',
                  type: 'info',
                  title: 'Mass Movement',
                  text: 'The Great Migration was a mass movement of African-Americans out of the South, where they had primarily resided since the abolition of slavery due to a lack of ability to accrue wealth.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "The New Neighbors",
                  src: "/src/images/temp.png",
                  caption: "The following image depicts some of those who moved to the North during the time"
                },
                {
                  id: 'mcq-def',
                  type: 'question',
                  title: 'Review',
                  question: 'During which decade did the Great Migration experience a "considerable peak"?',
                  options: ['1890s', '1920s', '1950s', '1970s'],
                  correctAnswer: '1920s'
                }
              ]
            },
            {
              id: 'info-news',
              label: 'The Statistics',
              x: 72.5, y: 25, // Centered on sp2
              image: 'Statistics',
              destinationTitle: 'What were the effects?',
              items: [
                {
                  id: 'txt-stat',
                  type: 'info',
                  title: 'Some numbers',
                  text: 'Between 300,000 and 800,000 African-Americans migrated each year within the first few decades of the migration  (Effact #8).'
                },
                {
                  id: "img-stat",
                  type: "image",
                  title: "Migration Graph",
                  src: "/src/images/temp.png",
                  caption: "This graph shows the number of African-Americans migrating North each decade"
                },
                {
                  id: 'mcq-news',
                  type: 'question',
                  title: 'How many? Who?',
                  question: 'How many of which people were involved in the Great Migration during its peak?',
                  options: ['100,000-400,000 Jews', '1,000,000-1,200,000 Native Americans', '300,000-670,000 Colombians', '300,000-800,000 African-Americans'],
                  correctAnswer: '300,000-800,000 African-Americans'
                }
              ]
            },
            {
              id: 'time-def',
              label: 'The Time Span of The Migration',
              x: 35, y: 70, // Centered on sp3
              image: 'Info',
              destinationTitle: 'The Span',
              items: [
                {
                  id: 'txt-def',
                  type: 'info',
                  title: 'The Years',
                  text: 'This migration took place over a few decades, generally considered to have lasted from 1910–1970, but had a considerable peak in the 1920s, with about 75% of all Southern African-Americans having moved to the North by the end of the migration.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Migration Timeline",
                  src: "/src/images/temp.png",
                  caption: "This timeline shows the key events during the Great Migration"
                },
                {
                  id: 'mcq-def',
                  type: 'question',
                  title: 'Review',
                  question: 'During which decade did the Great Migration experience a "considerable peak"?',
                  options: ['1890s', '1920s', '1950s', '1970s'],
                  correctAnswer: '1920s'
                }
              ]
            },
            {
              id: 'backlash-def',
              label: 'Overview',
              x: 62.5, y: 60, // Centered on sp1
              image: 'Info',
              destinationTitle: 'The Movement',
              items: [
                {
                  id: 'txt-def',
                  type: 'info',
                  title: 'Mass Movement',
                  text: 'The Great Migration (1910-1970) was the movement of African-Americans from the South to the North/West to accrue wealth. Between 300,000 and 800,000 migrated each year initially. It peaked in the 1920s. By the end, ~75% of Southern African-Americans had moved. '
                },
                {
                  id: 'mcq-def',
                  type: 'question',
                  title: 'Review',
                  question: 'During which decade did the Great Migration experience a "considerable peak"?',
                  options: ['1890s', '1920s', '1950s', '1970s'],
                  correctAnswer: '1920s'
                }
              ]
            }
          ]
        }
      },
      // --- 1B. Push Factors ---
      {
        id: 'gm-push',
        label: 'Push Factors',
        x: 40, y: 60, // Centered on p2
        image: 'ArrowUpCircle',
        destinationTitle: 'Why Leave?',
        subRoom: {
          id: 'sub-gm-push',
          title: 'Push Factors',
          backgroundImage: '/src/images/field_bg.png',
          platforms: [
            { id: 'push-sp-1', x: 0, y: 50, width: 25 },
            { id: 'push-sp-2', x: 75, y: 50, width: 25 },
            { id: 'push-sp-3', x: 35, y: 20, width: 10 },
            { id: 'push-sp-4', x: 55, y: 20, width: 10 },
            { id: 'push-step-1', x: 30, y: 70, width: 10 },
            { id: 'push-step-2', x: 60, y: 70, width: 10 },
            { id: 'push-step-3', x: 42.5, y: 57, width: 15 },
            { id: 'push-step-4', x: 25, y: 35, width: 10 },
            { id: 'push-step-5', x: 65, y: 35, width: 10 },
          ],
          doors: [
            {
              id: 'push-kkk',
              label: 'Discrimination',
              x: 12.5, y: 50, // Centered on sp-1
              image: 'AlertTriangle',
              destinationTitle: 'Violence & Laws',
              items: [
                {
                  id: 'txt-kkk',
                  type: 'info',
                  title: 'Racial Violence',
                  text: 'Lynchings were prevalent. The KKK ambushed communities. Jim Crow laws prohibited basic rights based on race, encouraging oppressed individuals to move North. '
                },
                {
                  id: 'mcq-kkk',
                  type: 'question',
                  title: 'Check',
                  question: 'What specific group is mentioned as ambushing Southern African-American communities?',
                  options: ['The Red Shirts', 'The White League', 'The Ku Klux Klan', 'The Know-Nothings'],
                  correctAnswer: 'The Ku Klux Klan'
                }
              ]
            },
            {
              id: 'push-econ',
              label: 'Hardship',
              x: 87.5, y: 50, // Centered on sp-2
              image: 'TrendingDown',
              destinationTitle: 'Economic Hardship',
              items: [
                {
                  id: 'txt-share',
                  type: 'info',
                  title: 'Sharecropping',
                  text: 'African Americans lacked wealth from the Civil War era. Sharecropping led to low wages/poverty. Natural disasters (floods, boll weevils) destroyed crops, pushing people away.'
                },
                {
                  id: 'mcq-share',
                  type: 'question',
                  title: 'Economics',
                  question: 'Which agricultural system contributed to the poverty of Southern African-Americans?',
                  options: ['Plantation slavery', 'Sharecropping', 'Industrial farming', 'Subsistence gardening'],
                  correctAnswer: 'Sharecropping'
                }
              ]
            },
            {
              id: 'push-jc',
              label: 'Discrimination',
              x: 40, y: 20, // Centered on sp-3
              image: 'AlertTriangle',
              destinationTitle: 'Violence & Laws',
              items: [
                {
                  id: 'txt-kkk',
                  type: 'info',
                  title: 'Racial Violence',
                  text: 'Lynchings were prevalent. The KKK ambushed communities. Jim Crow laws prohibited basic rights based on race, encouraging oppressed individuals to move North. '
                },
                {
                  id: 'mcq-kkk',
                  type: 'question',
                  title: 'Check',
                  question: 'What specific group is mentioned as ambushing Southern African-American communities?',
                  options: ['The Red Shirts', 'The White League', 'The Ku Klux Klan', 'The Know-Nothings'],
                  correctAnswer: 'The Ku Klux Klan'
                }
              ]
            },
            {
              id: 'push-sharecrop',
              label: 'Discrimination',
              x: 60, y: 20, // Centered on sp-4
              image: 'AlertTriangle',
              destinationTitle: 'Violence & Laws',
              items: [
                {
                  id: 'txt-kkk',
                  type: 'info',
                  title: 'Racial Violence',
                  text: 'Lynchings were prevalent. The KKK ambushed communities. Jim Crow laws prohibited basic rights based on race, encouraging oppressed individuals to move North. '
                },
                {
                  id: 'mcq-kkk',
                  type: 'question',
                  title: 'Check',
                  question: 'What specific group is mentioned as ambushing Southern African-American communities?',
                  options: ['The Red Shirts', 'The White League', 'The Ku Klux Klan', 'The Know-Nothings'],
                  correctAnswer: 'The Ku Klux Klan'
                }
              ]
            }
          ]
        }
      },
      // --- 1C. Pull Factors ---
      {
        id: 'gm-pull',
        label: 'Pull Factors',
        x: 70, y: 50, // Centered on p3
        image: 'Magnet',
        destinationTitle: 'Why the North?',
        subRoom: {
          id: 'sub-gm-pull',
          title: 'Pull Factors',
          backgroundImage: '/src/images/factory_bg.png',
          platforms: [
             { id: 'pull-sp-1', x: 10, y: 70, width: 10 }, // Step
             { id: 'pull-sp-2', x: 30, y: 60, width: 10 }, // Step
             { id: 'pull-sp-3', x: 60, y: 50, width: 10 }, // Step
             { id: 'pull-sp-4', x: 80, y: 40, width: 10 }, // Step
          ],
          doors: [
            {
              id: 'pull-jobs',
              label: 'Economy',
              x: 15, y: 70, // Centered on sp-1
              image: 'DollarSign',
              destinationTitle: 'Economic Freedom',
              items: [
                {
                  id: 'txt-ind',
                  type: 'info',
                  title: 'Industrialization',
                  text: 'The North offered stable urban jobs due to industrialization, providing better income than sharecropping. This allowed families to establish homes.'
                },
                {
                  id: 'mcq-ind',
                  type: 'question',
                  title: 'Jobs',
                  question: 'What characterized the Northern economy compared to the South?',
                  options: ['Agricultural focus', 'Industrialization and stable urban jobs', 'Tourism based', 'Reliance on slave labor'],
                  correctAnswer: 'Industrialization and stable urban jobs'
                }
              ]
            },
            {
              id: 'pull-soc',
              label: 'Relief',
              x: 35, y: 60, // Centered on sp-2
              image: 'Users',
              destinationTitle: 'Social Relief',
              items: [
                {
                  id: 'txt-soc',
                  type: 'info',
                  title: 'Freedoms',
                  text: 'The North offered voting rights, educational institutions, and aid for oppressed groups. Many also moved to reunite with estranged family members.'
                },
                {
                  id: 'mcq-soc',
                  type: 'question',
                  title: 'Society',
                  question: 'Besides money, what institutions in the North attracted families?',
                  options: ['Educational institutions', 'Religious monasteries', 'Military academies', 'Private clubs'],
                  correctAnswer: 'Educational institutions'
                }
              ]
            },
            {
              id: 'pull-income',
              label: 'Economy',
              x: 65, y: 50, // Centered on sp-3
              image: 'DollarSign',
              destinationTitle: 'Economic Freedom',
              items: [
                {
                  id: 'txt-ind',
                  type: 'info',
                  title: 'Industrialization',
                  text: 'The North offered stable urban jobs due to industrialization, providing better income than sharecropping. This allowed families to establish homes.'
                },
                {
                  id: 'mcq-ind',
                  type: 'question',
                  title: 'Jobs',
                  question: 'What characterized the Northern economy compared to the South?',
                  options: ['Agricultural focus', 'Industrialization and stable urban jobs', 'Tourism based', 'Reliance on slave labor'],
                  correctAnswer: 'Industrialization and stable urban jobs'
                }
              ]
            },
            {
              id: 'pull-edu',
              label: 'Economy',
              x: 85, y: 40, // Centered on sp-4
              image: 'DollarSign',
              destinationTitle: 'Economic Freedom',
              items: [
                {
                  id: 'txt-ind',
                  type: 'info',
                  title: 'Industrialization',
                  text: 'The North offered stable urban jobs due to industrialization, providing better income than sharecropping. This allowed families to establish homes.'
                },
                {
                  id: 'mcq-ind',
                  type: 'question',
                  title: 'Jobs',
                  question: 'What characterized the Northern economy compared to the South?',
                  options: ['Agricultural focus', 'Industrialization and stable urban jobs', 'Tourism based', 'Reliance on slave labor'],
                  correctAnswer: 'Industrialization and stable urban jobs'
                }
              ]
            }
          ]
        }
      },
      // --- 1D. Effects ---
      {
        id: 'gm-eff',
        label: 'Effects',
        x: 92.5, y: 70, // Centered on p4
        image: 'Star',
        destinationTitle: 'Roaring 20s Impact',
        subRoom: {
          id: 'sub-gm-eff',
          title: 'Cultural Effects',
          backgroundImage: '/src/images/harlem_bg.png',
          platforms: [
            { id: 'eff-sp-1', x: 12.5, y: 67, width: 15 },
            { id: 'eff-sp-2', x: 42.5, y: 55, width: 15 },
            { id: 'eff-sp-3', x: 72.5, y: 67, width: 15 }
          ],
          doors: [
            {
              id: 'eff-culture',
              label: 'Harlem',
              x: 20, y: 67, // Centered on sp-1
              image: 'Music',
              destinationTitle: 'The Renaissance',
              items: [
                {
                  id: 'txt-harl',
                  type: 'info',
                  title: 'Harlem Renaissance',
                  text: 'Feeling ostracized, blacks created enclaves like Harlem. This became a safe haven, leading to the Harlem Renaissance—an explosion of black culture and intellect in the 20s/30s.'
                },
                {
                  id: "img-harl",
                  type: "image",
                  src: "/src/images/temp.png",
                  title: "Harlem Band",
                  caption: "A Harlem Band"
                },
                {
                  id: 'mcq-harl',
                  type: 'question',
                  title: 'Culture',
                  question: 'Why did African Americans establish communities like Harlem?',
                  options: ['They were forced by new laws', 'They felt ostracized in the North', 'The government paid them to', 'It was the only affordable area'],
                  correctAnswer: 'They felt ostracized in the North'
                }
              ]
            },
            {
              id: 'eff-harl',
              label: 'Harlem',
              x: 50, y: 55, // Centered on sp-2
              image: 'Music',
              destinationTitle: 'The Renaissance',
              items: [
                {
                  id: 'txt-harl',
                  type: 'info',
                  title: 'Harlem Renaissance',
                  text: 'Feeling ostracized, blacks created enclaves like Harlem. This became a safe haven, leading to the Harlem Renaissance—an explosion of black culture and intellect in the 20s/30s.'
                },
                {
                  id: "img-harl",
                  type: "image",
                  src: "/src/images/temp.png",
                  title: "Harlem Band",
                  caption: "A Harlem Band"
                },
                {
                  id: 'mcq-harl',
                  type: 'question',
                  title: 'Culture',
                  question: 'Why did African Americans establish communities like Harlem?',
                  options: ['They were forced by new laws', 'They felt ostracized in the North', 'The government paid them to', 'It was the only affordable area'],
                  correctAnswer: 'They felt ostracized in the North'
                }
              ]
            },
            {
              id: 'eff-impact',
              label: 'Harlem',
              x: 80, y: 67, // Centered on sp-3
              image: 'Music',
              destinationTitle: 'The Renaissance',
              items: [
                {
                  id: 'txt-harl',
                  type: 'info',
                  title: 'Harlem Renaissance',
                  text: 'Feeling ostracized, blacks created enclaves like Harlem. This became a safe haven, leading to the Harlem Renaissance—an explosion of black culture and intellect in the 20s/30s.'
                },
                {
                  id: "img-harl",
                  type: "image",
                  src: "/src/images/temp.png",
                  title: "Harlem Band",
                  caption: "A Harlem Band"
                },
                {
                  id: 'mcq-harl',
                  type: 'question',
                  title: 'Culture',
                  question: 'Why did African Americans establish communities like Harlem?',
                  options: ['They were forced by new laws', 'They felt ostracized in the North', 'The government paid them to', 'It was the only affordable area'],
                  correctAnswer: 'They felt ostracized in the North'
                }
              ]
            }
          ]
        }
      }
    ]
  },

  // ==============================================================
  // 2. RACIAL TENSION
  // ==============================================================
  {
    id: 'racial-tension',
    title: 'Racial Tension & Violence',
    backgroundImage: '/src/images/court_exterior.png',
    platforms: [
      { id: 'p1', x: 10, y: 65, width: 25 },
      { id: 's2', x: 40, y: 70, width: 10 }, // Step to P2
      { id: 'p2', x: 45, y: 50, width: 20 }, 
      { id: 'p3', x: 75, y: 65, width: 20 }
    ],
    doors: [
      // --- 2A. Jim Crow ---
      {
        id: 'rt-jc',
        label: 'Jim Crow',
        x: 22.5, y: 65, // Centered on p1
        image: 'Scale',
        destinationTitle: 'Segregation',
        subRoom: {
          id: 'sub-rt-jc',
          title: 'Jim Crow Laws',
          backgroundImage: '/src/images/segregated_fountain.png',
          platforms: [{ id: 'p1', x: 35, y: 60, width: 30 }],
          doors: [
            {
              id: 'jc-laws',
              label: 'Laws',
              x: 50, y: 60, // Centered on p1
              image: 'Book',
              destinationTitle: 'Legal Oppression',
              items: [
                {
                  id: 'txt-jc',
                  type: 'info',
                  title: 'Origin & Impact',
                  text: 'Named after a racist minstrel character, these laws segregated schools, hospitals, and transport. Plessy v. Ferguson upheld this. Poll taxes and literacy tests banned voting. '
                },
                {
                  id: 'mcq-jc',
                  type: 'question',
                  title: 'Court Cases',
                  question: 'Which Supreme Court case provided reasoning for Jim Crow laws to exist?',
                  options: ['Roe v. Wade', 'Plessy v. Ferguson', 'Brown v. Board', 'Marbury v. Madison'],
                  correctAnswer: 'Plessy v. Ferguson'
                }
              ]
            }
          ]
        }
      },
      // --- 2B. KKK & Violence ---
      {
        id: 'rt-kkk',
        label: 'Violence',
        x: 55, y: 50, // Centered on p2
        image: 'Flame',
        destinationTitle: 'Racial Violence',
        subRoom: {
          id: 'sub-rt-kkk',
          title: 'The KKK & Red Summer',
          backgroundImage: '/src/images/burning_cross_bg.png',
          platforms: [{ id: 'p1', x: 40, y: 65, width: 20 }],
          doors: [
            {
              id: 'kkk-info',
              label: 'The KKK',
              x: 50, y: 65, // Centered on p1
              image: 'AlertOctagon',
              destinationTitle: 'Organized Violence',
              items: [
                {
                  id: 'txt-red',
                  type: 'info',
                  title: 'Red Summer',
                  text: 'Red Summer (1919) saw riots in tens of cities with hundreds of deaths. The KKK resurged, targeting blacks, immigrants, Catholics, and Jews to protect "True Americanism." '
                },
                {
                  id: 'mcq-kkk-targ',
                  type: 'question',
                  title: 'Targets',
                  question: 'Who did the KKK target besides African-Americans?',
                  options: ['Only African-Americans', 'Immigrants, Catholics, and Jews', 'Rich Landowners', 'British Loyalists'],
                  correctAnswer: 'Immigrants, Catholics, and Jews'
                }
              ]
            }
          ]
        }
      },
      // --- 2C. Native Americans ---
      {
        id: 'rt-native',
        label: 'Native Rights',
        x: 85, y: 65, // Centered on p3
        image: 'Feather', // Lucide icon (approx)
        destinationTitle: 'Native American Oppression',
        subRoom: {
          id: 'sub-rt-native',
          title: 'Native American Policies',
          backgroundImage: '/src/images/reservation_bg.png',
          platforms: [{ id: 'p1', x: 20, y: 70, width: 15 }, { id: 'p2', x: 65, y: 70, width: 15 }],
          doors: [
            {
              id: 'native-act',
              label: 'Citizenship',
              x: 27.5, y: 70, // Centered on p1
              image: 'Scroll',
              destinationTitle: '1924 Act',
              items: [
                {
                  id: 'txt-nat',
                  type: 'info',
                  title: 'Forced Assimilation',
                  text: 'The Indian Citizenship Act (1924) granted citizenship but forced assimilation and reservation abandonment. Racial Integrity Laws (e.g., VA) banned interracial marriage, harming Native identity.'
                },
                {
                  id: 'mcq-nat',
                  type: 'question',
                  title: 'Citizenship',
                  question: 'What was an unintended negative effect of the Indian Citizenship Act of 1924?',
                  options: ['It revoked voting rights', 'It forced assimilation and loss of culture', 'It caused immediate war', 'It doubled reservation sizes'],
                  correctAnswer: 'It forced assimilation and loss of culture'
                }
              ]
            }
          ]
        }
      }
    ]
  },

  // ==============================================================
  // 3. ACLU
  // ==============================================================
  {
    id: 'aclu',
    title: 'Birth of the ACLU',
    backgroundImage: '/src/images/office_interior.png',
    platforms: [
      { id: 'p1', x: 15, y: 70, width: 20 },
      { id: 's2', x: 40, y: 75, width: 10 },
      { id: 'p2', x: 45, y: 60, width: 20 },
      { id: 'p3', x: 75, y: 70, width: 20 }
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
          backgroundImage: '/src/images/jail_cell.png',
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
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
          backgroundImage: '/src/images/ww1_poster.png',
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
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
          backgroundImage: '/src/images/meeting_room.png',
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
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
  },

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
  },

  // ==============================================================
  // 5. GITLOW V NEW YORK
  // ==============================================================
  {
    id: 'gitlow',
    title: 'Gitlow v. New York',
    backgroundImage: '/src/images/scotus_building.png',
    platforms: [
      { id: 'p1', x: 10, y: 70, width: 20 },
      { id: 's1', x: 35, y: 75, width: 10 },
      { id: 'p2', x: 45, y: 55, width: 20 },
      { id: 'p3', x: 80, y: 70, width: 15 }
    ],
    doors: [
      // --- 5A. Cause ---
      {
        id: 'git-cause',
        label: 'Cause',
        x: 20, y: 70, // Centered on p1
        image: 'FileText',
        destinationTitle: 'The Manifesto',
        subRoom: {
          id: 'sub-git-cause',
          title: 'The Arrest',
          backgroundImage: '/src/images/police_station.png',
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
          doors: [
            {
              id: 'manifesto',
              label: 'Arrest',
              x: 50, y: 60, // Centered on p1
              image: 'AlertCircle',
              destinationTitle: 'Left Wing Manifesto',
              items: [
                {
                  id: 'txt-git',
                  type: 'info',
                  title: 'Benjamin Gitlow',
                  text: 'In 1919, Gitlow was arrested for distributing the "Left Wing Manifesto," advocating socialism. He was convicted under New York’s Criminal Anarchy Law. '
                },
                {
                  id: 'mcq-git',
                  type: 'question',
                  title: 'Crime',
                  question: 'What law was Gitlow convicted under?',
                  options: ['The Espionage Act', 'NY Criminal Anarchy Law', 'The Volstead Act', 'The Sedition Act'],
                  correctAnswer: 'NY Criminal Anarchy Law'
                }
              ]
            }
          ]
        }
      },
      // --- 5B. Opinions ---
      {
        id: 'git-op',
        label: 'Opinions',
        x: 55, y: 55, // Centered on p2
        image: 'Scale',
        destinationTitle: 'Supreme Court',
        subRoom: {
          id: 'sub-git-op',
          title: 'The Ruling',
          backgroundImage: '/src/images/court_bench.png',
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
          doors: [
            {
              id: 'bad-tend',
              label: 'Ruling',
              x: 50, y: 60, // Centered on p1
              image: 'Gavel',
              destinationTitle: 'Majority vs Dissent',
              items: [
                {
                  id: 'txt-ruling',
                  type: 'info',
                  title: 'Bad Tendency',
                  text: 'The Court upheld the conviction using the "bad tendency" test (speech that CAN lead to illegal action). Holmes dissented, arguing there was no "clear and present danger" in abstract writing.'
                },
                {
                  id: 'mcq-ruling',
                  type: 'question',
                  title: 'Dissent',
                  question: 'What legal test did Justice Holmes argue should be used?',
                  options: ['Bad Tendency Test', 'Lemon Test', 'Clear and Present Danger Test', 'Rational Basis Test'],
                  correctAnswer: 'Clear and Present Danger Test'
                }
              ]
            }
          ]
        }
      },
      // --- 5C. Significance ---
      {
        id: 'git-sig',
        label: 'Impact',
        x: 87.5, y: 70, // Centered on p3
        image: 'Award',
        destinationTitle: 'Legacy',
        subRoom: {
          id: 'sub-git-sig',
          title: 'Modern Impact',
          backgroundImage: '/src/images/const_bg.png',
          platforms: [{ id: 'p1', x: 40, y: 60, width: 20 }],
          doors: [
            {
              id: 'incorp',
              label: 'Legacy',
              x: 50, y: 60, // Centered on p1
              image: 'BookOpen',
              destinationTitle: 'Incorporation',
              items: [
                {
                  id: 'txt-incorp',
                  type: 'info',
                  title: 'Selective Incorporation',
                  text: 'This case was the first to apply the 1st Amendment to STATES via the 14th Amendment (Due Process). It started "selective incorporation," extending federal liberties to state actions.'
                },
                {
                  id: 'mcq-incorp',
                  type: 'question',
                  title: 'Constitution',
                  question: 'What legal doctrine began with Gitlow v. New York?',
                  options: ['Judicial Review', 'Selective Incorporation', 'Executive Privilege', 'Sovereign Immunity'],
                  correctAnswer: 'Selective Incorporation'
                }
              ]
            }
          ]
        }
      }
    ]
  },

  // ==============================================================
  // 6. PROHIBITION
  // ==============================================================
  {
    id: 'prohibition',
    title: 'Prohibition',
    backgroundImage: '/src/images/speakeasy_alley.png',
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
          backgroundImage: '/src/images/temperance_march.png',
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
          backgroundImage: '/src/images/congress_vote.png',
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
          backgroundImage: '/src/images/church_hall.png',
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
          backgroundImage: '/src/images/speakeasy_inside.png',
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
  },
  {
    id: 'bibliography',
    title: 'Bibliography',
    isBibliography: true,
  }
];