import type { Topic } from '../types';

const greatMigration: Topic = 
  // ==============================================================
  // 1. THE GREAT MIGRATION
  // ==============================================================
  {
    id: 'great-migration',
    title: 'The Great Migration',
    backgroundImage: '/images/greatMigration.jpg', 
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
          backgroundImage: '/images/map_room.png',
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
                  src: "/images/newNeighbors.jpg",
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
                  src: "/images/migrateGraph.png",
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
                  src: "/images/migrationMap.jpg",
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
                  src: "/images/southernNewspaper.jpg",
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
          backgroundImage: '/images/field_bg.png',
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
                  title: 'Southern Violence',
                  text: 'Lynchings and racial attacks were prevalent within the South, especially from groups such as the Ku Klux Klan. The KKK would go out of their way to ambush Southern African-American communities.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "KKK Robe",
                  src: "/images/kkkrobeartifact.jpg",
                  caption: "KKK Robe Museum Artifact"
                },
                {
                  id: 'mcq-kkk',
                  type: 'question',
                  title: 'Check',
                  question: 'Which statement best describes the role of the Ku Klux Klan in the South during the Great Migration?',
                  options: ['The KKK worked to promote lawful protection of African-American communities.', 'The KKK largely ignored African-American migration efforts.', 'The KKK carried out lynchings and violent attacks, targeting African-American communities.', 'The KKK focused solely on political protests rather than violence.'],
                  correctAnswer: 'The KKK carried out lynchings and violent attacks, targeting African-American communities.'
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
                  id: "img-def",
                  type: "image",
                  title: "Jim Crow Image",
                  src: "/images/jimcrowlaws.png",
                  caption: "Jim Crow colored-only signs"
                },
                {
                  id: 'mcq-share',
                  type: 'question',
                  title: 'Economics',
                  question: 'How did Jim Crow laws influence the Great Migration?',
                  options: ['They expanded civil rights in the South, encouraging people to remain there.', 'They had no significant impact on African-American mobility.', 'They restricted rights based on race, pushing many African-Americans to move North for better conditions.', 'They provided economic incentives for African-Americans to stay in the South.'],
                  correctAnswer: 'They restricted rights based on race, pushing many African-Americans to move North for better conditions.'
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
                  title: 'Post-War Hardship',
                  text: 'African Americans in the South were still facing the remaining economic hardships from the Civil War, as while they were technically emancipated, they often did not have the means to accrue wealth over such a short period of time.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Poverty",
                  src: "/images/africanamericanpoverty.png",
                  caption: "African American poverty 1900s"
                },
                {
                  id: 'mcq-kkk',
                  type: 'question',
                  title: 'Check',
                  question: 'Why did many African Americans in the South continue to face economic hardship after the Civil War?',
                  options: ['They were prohibited from working in any Southern industries.', 'They lacked sufficient time and resources to build wealth despite emancipation.', 'They were given large amounts of land that were difficult to manage.', 'They chose not to participate in the Southern economy.'],
                  correctAnswer: 'They lacked sufficient time and resources to build wealth despite emancipation.'
                }
              ]
            },
            {
              id: 'push-sharecrop',
              label: 'Discrimination',
              x: 60, y: 20,
              image: 'AlertTriangle',
              destinationTitle: 'Violence & Laws',
              items: [
                {
                  id: 'txt-sharecropping',
                  type: 'info',
                  title: 'Sharecropping',
                  text: 'Black citizens frequently took part in the sharecropping system due to the lack of present jobs, which led to extremely low wages and poverty. This, combined with present crop failures in the form of floods, earthquakes, and hurricanes, led to an unfortunate economic situation that pushed many black Americans to move North.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Great Mississppi Flood",
                  src: "/images/greatflood.png",
                  caption: "Great Mississippi Flood 1927"
                },
                {
                  id: 'mcq-kkk',
                  type: 'question',
                  title: 'Check',
                  question: 'How did the sharecropping system contribute to the Great Migration?',
                  options: ['It provided high wages that encouraged African Americans to stay in the South.', 'It offered stable income despite natural disasters.', 'It trapped African Americans in low-wage poverty, and crop failures worsened their economic situation, pushing them to move North.', 'It allowed African Americans to easily buy their own land and build wealth.'],
                  correctAnswer: 'It trapped African Americans in low-wage poverty, and crop failures worsened their economic situation, pushing them to move North.'
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
          backgroundImage: '/images/factory_bg.png',
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
              destinationTitle: 'Pull Factors',
              items: [
                {
                  id: 'txt-impct',
                  type: 'info',
                  title: 'Northern Opportunity',
                  text: 'The North offered more economic opportunities due to its ongoing industrialization, innovation, and urbanization. Urban jobs were numerous, highly stable, and provided a much better source of income than the sharecropping that many African-Americans were accustomed to in the South.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Factory",
                  src: "/images/africanamericanfactory.png",
                  caption: "African American factory workers 1920s"
                },
                {
                  id: 'mcq-ind',
                  type: 'question',
                  title: 'Jobs',
                  question: 'Why did many African Americans view the North as a better place to live during the Great Migration?',
                  options: ['Northern cities relied solely on agriculture and needed more sharecroppers.', 'Industrialization and urbanization created abundant, stable jobs with better wages.', 'The North had fewer cities and more rural land available.', 'Northern jobs generally paid less but offered shorter hours.'],
                  correctAnswer: 'Industrialization and urbanization created abundant, stable jobs with better wages.'
                }
              ]
            },
            {
              id: 'pull-soc',
              label: 'Relief',
              x: 35, y: 60, // Centered on sp-2
              image: 'Users',
              destinationTitle: 'Pull Factors',
              items: [
                {
                  id: 'txt-soc',
                  type: 'info',
                  title: 'Economic Stability',
                  text: 'This source of income would allow black families to establish themselves and their homes, providing grounds for future economic stability and community growth.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Businesses",
                  src: "/images/blackownedbusiness.png",
                  caption: "Black-owned business 1920s"
                },
                {
                  id: 'mcq-soc',
                  type: 'question',
                  title: 'Society',
                  question: 'How did improved income opportunities in the North impact African-American families during the Great Migration?',
                  options: ['It prevented families from forming long-term communities.', 'It allowed families to establish homes and build future economic stability.', 'It caused many families to return to the South.'],
                  correctAnswer: 'It allowed families to establish homes and build future economic stability.'
                }
              ]
            },
            {
              id: 'pull-income',
              label: 'Economy',
              x: 65, y: 50, // Centered on sp-3
              image: 'DollarSign',
              destinationTitle: 'Pull Factors',
              items: [
                {
                  id: 'txt-ind',
                  type: 'info',
                  title: 'Northern Freedom',
                  text: 'The North was also known to offer more political and social freedoms and aid for oppressed groups, such as the formerly lesser population of Northern African-Americans, which often enticed many Southerners to move North.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "NAACP",
                  src: "/images/naacp.png",
                  caption: "NAACP 1920s activism"
                },
                {
                  id: 'mcq-ind',
                  type: 'question',
                  title: 'Jobs',
                  question: 'Besides economic opportunities, what other factor attracted African-Americans to the North during the Great Migration?',
                  options: ['Strict segregation laws and limited social freedoms', 'Greater political and social freedoms, as well as support for oppressed groups', ' Greater political and social freedoms, as well as support for oppressed groups', 'Government-mandated relocation programs'],
                  correctAnswer: 'Greater political and social freedoms, as well as support for oppressed groups'
                }
              ]
            },
            {
              id: 'pull-edu',
              label: 'Economy',
              x: 85, y: 40, // Centered on sp-4
              image: 'DollarSign',
              destinationTitle: 'Pull Factors',
              items: [
                {
                  id: 'txt-ind',
                  type: 'info',
                  title: 'Education & Family',
                  text: 'Furthermore, the North had a number of educational institutions and opportunities for children and adults alike, which would subsequently allow black families to establish themselves and grow away from their formerly oppressed state. Finally, many former slaves and their families were either forced to move North or voluntarily moved North after emancipation, and thus many relatives wished to reunite with their estranged families.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Students",
                  src: "/images/africanamericanstudents.png",
                  caption: "African American students 1920s Northern school"
                },
                {
                  id: 'mcq-ind',
                  type: 'question',
                  title: 'Jobs',
                  question: 'Which factors further encouraged African-Americans to migrate North during the Great Migration?',
                  options: ['Access to educational opportunities and the chance to reunite with family members', 'Lack of schools and the impossibility of finding relatives', 'Lack of schools and the impossibility of finding relatives', 'Only temporary work opportunities with no long-term benefits'],
                  correctAnswer: 'Access to educational opportunities and the chance to reunite with family members'
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
          backgroundImage: '/images/harlem_bg.png',
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
              destinationTitle: 'The Drive',
              items: [
                {
                  id: 'txt-harl',
                  type: 'info',
                  title: 'The Drive',
                  text: 'The Great Migration had lasting effects on the culture and society of America during and after the Roaring 20’s. African Americans would still feel ostracized within the North, and thus would feel the need to make their own cultures and communities within Northern cities, one of the most prominent of which being Harlem.'
                },
                {
                  id: "img-harl",
                  type: "image",
                  src: "/images/harlemstreet.png",
                  title: "Harlem Streets",
                  caption: "Early Harlem neighborhood street scenes"
                },
                {
                  id: 'mcq-harl',
                  type: 'question',
                  title: 'Culture',
                  question: 'How did the Great Migration influence African-American culture in Northern cities?',
                  options: ['African-Americans fully integrated with existing Northern communities without forming separate cultures.', 'Ostracism in the North led African-Americans to create their own cultural communities, such as Harlem.', 'African-Americans avoided Northern cities and primarily settled in rural areas.', 'Northern cities offered no opportunities for cultural or community development.'],
                  correctAnswer: 'Ostracism in the North led African-Americans to create their own cultural communities, such as Harlem.'
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
                  title: 'The Renaissance',
                  text: 'The Harlem Renaissance, which was a wonderful explosion of black culture and intellect during the 1920’s and 1930’s, would stem from the creation of Harlem as a safe haven for African-Americans in the North.'
                },
                {
                  id: "img-harl",
                  type: "image",
                  src: "/images/harlemjazz.png",
                  title: "Harlem Jazz",
                  caption: "Harlem Renaissance jazz musicians"
                },
                {
                  id: 'mcq-harl',
                  type: 'question',
                  title: 'Culture',
                  question: 'The ____ Renaissance of the 1920s-1930s was an explosion of African-American culture and intellect',
                  options: ['New York City', 'Chicago', 'Harlem', 'Detroit'],
                  correctAnswer: 'Harlem'
                }
              ]
            },
            {
              id: 'eff-impact',
              label: 'Harlem',
              x: 80, y: 67, // Centered on sp-3
              image: 'Music',
              destinationTitle: 'The Impact',
              items: [
                {
                  id: 'txt-harl',
                  type: 'info',
                  title: 'The Impact',
                  text: 'These newly established cultures would subsequently leave a lasting impact on the culture of America as a whole, the effects of which are still being shown today.'
                },
                {
                  id: "img-harl",
                  type: "image",
                  src: "/images/harlemexhibit.png",
                  title: "Harlem Exhibit",
                  caption: "Harlem Renaissance legacy exhibit"
                },
                {
                  id: 'mcq-harl',
                  type: 'question',
                  title: 'Culture',
                  question: 'What is one impact from the Harlem Renaissance and the overall growth of African-American life today?',
                  options: ['Culture', 'Economy', 'Immigration', 'Agriculture'],
                  correctAnswer: 'Culture'
                }
              ]
            }
          ]
        }
      }
    ]
  };

export default greatMigration;