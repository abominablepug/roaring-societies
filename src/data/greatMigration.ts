import type { Topic } from '../types';

const greatMigration: Topic = 
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
                  src: "/src/images/newNeighbors.jpg",
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
                  src: "/src/images/migrateGraph.png",
                  caption: "This graph shows the number of African-Americans leaving the South each decade"
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
                  src: "/src/images/migrationMap.jpg",
                  caption: "This map displays the movement of African-Americans from the South to other parts of the country during the Great Migration"
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
                  title: 'Southern Backlash',
                  text: 'As discussed in a newspaper excerpt from the time of the Great Migration, titled “South Unable to Put Stop to Negro Exodus,” this migration was often not smooth or unopposed, with many Southerners directly attacking African-Americans attempting to move North. This migration was the result of a multitude of push and pull factors, primarily due to extreme racial discrimination and the desire for economic freedoms.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Southern Newspaper",
                  src: "/src/images/southernNewspaper.jpg",
                  caption: "The following shows a newspaper on the Southern perspective excaliming that Southerners are helpless to prevent the exodus of African-Americans"
                },
                {
                  id: 'mcq-def',
                  type: 'question',
                  title: 'Review',
                  question: 'How did the Southerners attempt to keep African-Americans in the South?',
                  options: ['Forced Sharecropping', 'Physical Violence', 'Segregation', 'Jim Crow Laws'],
                  correctAnswer: 'Physical Violence'
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
                  text: 'Lynchings and racial attacks were prevalent within the South, especially from groups such as the Ku Klux Klan. The KKK would go out of their way to ambush Southern African-American communities.'
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
                  title: 'Jim Crow Laws',
                  text: 'It was around this time that discriminatory Jim-Crow laws also became prevalent, which would prohibit certain people from exercising their basic human and civil rights solely based on their race and ethnicity. This often encouraged oppressed individuals to move North in search of better living conditions.'
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
                  id: 'txt-money',
                  type: 'info',
                  title: 'Economic Struggles',
                  text: 'African Americans in the South were still facing the remaining economic hardships from the Civil War, as while they were technically emancipated, they often did not have the means to accrue wealth over such a short period of time.'
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
                  id: 'txt-sharecropping',
                  type: 'info',
                  title: 'Racial Violence',
                  text: 'Black citizens frequently took part in the sharecropping system due to the lack of present jobs, which led to extremely low wages and poverty. This, combined with present crop failures in the form of floods, earthquakes, and hurricanes, led to an unfortunate economic situation that pushed many black Americans to move North.'
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
              id: 'pull-impact',
              label: 'Economy',
              x: 15, y: 70, // Centered on sp-1
              image: 'DollarSign',
              destinationTitle: 'Economic Freedom',
              items: [
                {
                  id: 'txt-impct',
                  type: 'info',
                  title: 'The Impact of the Migration',
                  text: 'The Great Migration had lasting effects on the culture and society of America during and after the Roaring 20’s. African Americans would still feel ostracized within the North, and thus would feel the need to make their own cultures and communities within Northern cities, one of the most prominent of which being Harlem.'
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
  };

export default greatMigration;