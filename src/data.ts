import type { Topic } from './types';

export const TOPICS: Topic[] = [

{
    id: 'great-migration',
    title: 'The Great Migration',
    backgroundImage: '/src/images/station_bg.png', // Placeholder path
    platforms: [
      { id: 'p1', x: 10, y: 75, width: 30 },
      { id: 'p2', x: 60, y: 75, width: 30 }
    ],
    doors: [
      {
        id: 'train-door',
        label: 'Northbound Train',
        x: 25, y: 75,
        image: 'TrainFront',
        destinationTitle: 'The Journey North',
        subRoom: {
          id: 'sub-migration',
          title: 'Chicago Terminal',
          backgroundImage: '/src/images/city_bg.png',
          platforms: [
            { id: 'sp1', x: 20, y: 60, width: 20 },
            { id: 'sp2', x: 60, y: 60, width: 20 }
          ],
          doors: [
            {
              id: 'push-factors',
              label: 'Why Leave?',
              x: 30, y: 60,
              image: 'AlertTriangle',
              destinationTitle: 'Push Factors',
              items: [
                {
                  id: 'push-1',
                  type: 'info',
                  title: 'Racial Violence & Discrimination',
                  text: 'Lynchings and racial attacks were prevalent in the South. According to the Tuskegee Institute, 3,446 African Americans were lynched between 1882 and 1968. The KKK ambushed communities, and Jim Crow laws prohibited basic civil rights. '
                },
                {
                  id: 'push-2',
                  type: 'info',
                  title: 'Economic Hardship',
                  text: 'Despite emancipation, the sharecropping system kept many in poverty. Crop failures (floods, boll weevil infestations) destroyed livelihoods. The lack of ability to accrue wealth pushed many to look elsewhere.'
                }
              ]
            },
            {
              id: 'pull-factors',
              label: 'Why the North?',
              x: 70, y: 60,
              image: 'Factory',
              destinationTitle: 'Pull Factors',
              items: [
                {
                  id: 'pull-1',
                  type: 'info',
                  title: 'Industrial Opportunity',
                  text: 'The North offered industrial jobs with higher wages than Southern sharecropping. Between 1910 and 1920, the black population of Northern cities exploded: New York grew by 66%, Chicago by 148%, and Detroit by 611%.'
                },
                {
                  id: 'pull-2',
                  type: 'info',
                  title: 'Social Relief',
                  text: 'The North offered more political freedoms (voting rights) and educational opportunities. By the end of the migration in 1970, approximately 47% of African Americans lived outside the South. '
                }
              ]
            },
            {
              id: 'source-news',
              label: 'Newspaper',
              x: 50, y: 82, // Ground level
              image: 'Newspaper',
              destinationTitle: 'Primary Source',
              items: [
                {
                  id: 'ps-1',
                  type: 'info',
                  title: 'South Unable to Put Stop to Negro Exodus',
                  text: 'Primary Source (1916): Southerners attempted to stop the migration by attacking those attempting to leave. Link: https://www.loc.gov/resource/sn84026749/1916-10-23/ed-1'
                }
              ]
            }
          ]
        }
      }
    ]
  },

  // 2. Racial Tension & Violence
  {
    id: 'racial-tension',
    title: 'Racial Tension & Laws',
    backgroundImage: '/src/images/street_bg.png',
    platforms: [
      { id: 'p1', x: 30, y: 65, width: 40 }
    ],
    doors: [
      {
        id: 'courthouse',
        label: 'The Courthouse',
        x: 50, y: 65,
        image: 'Landmark',
        destinationTitle: 'Systemic Oppression',
        subRoom: {
          id: 'sub-court',
          title: 'Segregated Square',
          backgroundImage: '/src/images/court_bg.png',
          platforms: [
            { id: 'sp1', x: 15, y: 50, width: 20 }, // High left
            { id: 'sp2', x: 85, y: 50, width: 20 }  // High right
          ],
          doors: [
            {
              id: 'jim-crow',
              label: 'Jim Crow Laws',
              x: 15, y: 50,
              image: 'Scale',
              destinationTitle: 'Legalized Segregation',
              items: [
                {
                  id: 'jc-1',
                  type: 'info',
                  title: 'Separate and Unequal',
                  text: 'Named after a minstrel character, these laws segregated schools, hospitals, and transport. Plessy v. Ferguson provided the legal "separate but equal" framework. Poll taxes and literacy tests effectively banned black voting.'
                },
                {
                  id: 'jc-source',
                  type: 'info',
                  title: 'Primary Source: Jim Crow Song',
                  text: 'Source Link: https://www.loc.gov/resource/amss.as106690'
                }
              ]
            },
            {
              id: 'violence',
              label: 'Racial Violence',
              x: 85, y: 50,
              image: 'Flame',
              destinationTitle: 'The KKK & Red Summer',
              items: [
                {
                  id: 'kkk-stats',
                  type: 'info',
                  title: 'Resurgence of the KKK',
                  text: 'The KKK re-emerged promoting "100% Americanism." By the mid-1920s, membership reached an estimated 4 to 5 million men. They targeted African Americans, immigrants, Catholics, and Jews. '
                },
                {
                  id: 'red-summer',
                  type: 'info',
                  title: 'The Red Summer (1919)',
                  text: 'A period of numerous riots in over 20 cities resulting in hundreds of deaths. In Elaine, Arkansas alone, estimates suggest between 100 and 240 African Americans were killed.'
                }
              ]
            },
            {
              id: 'native-americans',
              label: 'Native Policies',
              x: 50, y: 82,
              image: 'Scroll',
              destinationTitle: 'Native American Oppression',
              items: [
                {
                  id: 'na-1',
                  type: 'info',
                  title: 'Forced Assimilation',
                  text: 'The Indian Citizenship Act of 1924 granted citizenship but was often used to force assimilation and break up tribal lands. The Racial Integrity Laws (e.g., Virginia) further ostracized Native Americans by classifying them solely as "colored" to erase indigenous identity.'
                }
              ]
            }
          ]
        }
      }
    ]
  },

  // 3. The ACLU
  {
    id: 'aclu',
    title: 'Birth of the ACLU',
    backgroundImage: '/src/images/office_bg.png',
    platforms: [
      { id: 'p1', x: 20, y: 60, width: 20 }
    ],
    doors: [
      {
        id: 'office-door',
        label: 'Civil Liberties Office',
        x: 30, y: 60,
        image: 'Briefcase',
        destinationTitle: 'Defending Rights',
        subRoom: {
          id: 'sub-aclu',
          title: 'Legal Defense HQ',
          backgroundImage: '/src/images/library_bg.png',
          platforms: [],
          doors: [
            {
              id: 'red-scare',
              label: 'The Red Scare',
              x: 20, y: 82,
              image: 'Siren',
              destinationTitle: 'Palmer Raids',
              items: [
                {
                  id: 'rs-1',
                  type: 'info',
                  title: 'Fear of Communism',
                  text: 'Following the Bolshevik Revolution, fear of communism led to the Palmer Raids. Attorney General A. Mitchell Palmer ordered raids without warrants, arresting thousands of suspected anarchists and immigrants.'
                }
              ]
            },
            {
              id: 'aclu-origin',
              label: 'The ACLU',
              x: 80, y: 82,
              image: 'Shield',
              destinationTitle: 'Roger Baldwin & The ACLU',
              items: [
                {
                  id: 'aclu-1',
                  type: 'info',
                  title: 'From NCLB to ACLU',
                  text: 'The NCLB was formed to protect conscientious objectors in WWI. After being forced to disband, Roger Baldwin reorganized it into the ACLU to fight for rights for all citizens, regardless of political affiliation—even defending the KKK\'s right to free speech.'
                }
              ]
            }
          ]
        }
      }
    ]
  },

  // 4. Xenophobia & Immigration
  {
    id: 'xenophobia',
    title: 'Social Intolerance',
    backgroundImage: '/src/images/dock_bg.png',
    platforms: [
      { id: 'p1', x: 50, y: 60, width: 30 }
    ],
    doors: [
      {
        id: 'immigration',
        label: 'Immigration Dept.',
        x: 65, y: 60,
        image: 'Globe',
        destinationTitle: 'Borders & Quotas',
        subRoom: {
          id: 'sub-immi',
          title: 'Processing Center',
          backgroundImage: '/src/images/wire_bg.png',
          platforms: [
            { id: 'sp1', x: 50, y: 50, width: 40 }
          ],
          doors: [
            {
              id: 'quotas',
              label: 'Quotas',
              x: 50, y: 50,
              image: 'Ban',
              destinationTitle: 'Restrictive Legislation',
              items: [
                {
                  id: 'quota-1',
                  type: 'info',
                  title: 'Closing the Gates',
                  text: 'The Dillingham Commission labeled Southern/Eastern Europeans as "undesirable." The Emergency Quota Act (1921) and Johnson-Reed Act (1924) severely limited immigration from Russia, Italy, and Poland to preserve the "racial composition" of the US.'
                }
              ]
            },
            {
              id: 'labor',
              label: 'Labor & Anarchy',
              x: 20, y: 82,
              image: 'Hammer',
              destinationTitle: 'Unions under Fire',
              items: [
                {
                  id: 'lab-1',
                  type: 'info',
                  title: 'Fear of Anarchy',
                  text: 'Immigrant labor organizations (like the IWWW) were accused of spreading Bolshevik propaganda. The government used "criminal syndicalism" laws to arrest union leaders, conflating labor rights with national security threats.'
                }
              ]
            }
          ]
        }
      }
    ]
  },

  // 5. Gitlow v. New York
  {
    id: 'gitlow',
    title: 'Gitlow v. New York',
    backgroundImage: '/src/images/courtsteps_bg.png',
    platforms: [
      { id: 'p1', x: 50, y: 50, width: 20 }
    ],
    doors: [
      {
        id: 'scotus',
        label: 'Supreme Court',
        x: 50, y: 50,
        image: 'Gavel',
        destinationTitle: 'Constitutional Law',
        subRoom: {
          id: 'sub-scotus',
          title: 'The Bench',
          backgroundImage: '/src/images/justice_bg.png',
          platforms: [],
          doors: [
            {
              id: 'case-facts',
              label: 'The Case',
              x: 30, y: 82,
              image: 'FileText',
              destinationTitle: 'Left Wing Manifesto',
              items: [
                {
                  id: 'fact-1',
                  type: 'info',
                  title: 'Benjamin Gitlow',
                  text: 'Arrested in 1919 for distributing the "Left Wing Manifesto," which advocated for revolutionary mass action. He was convicted under New York\'s Criminal Anarchy Law.'
                }
              ]
            },
            {
              id: 'ruling',
              label: 'The Ruling',
              x: 70, y: 82,
              image: 'Scale',
              destinationTitle: 'Selective Incorporation',
              items: [
                {
                  id: 'rule-1',
                  type: 'info',
                  title: 'Significance',
                  text: 'Though Gitlow lost (the court applied the "bad tendency" test), this was the first case to apply the First Amendment to State governments via the 14th Amendment. It marked the beginning of "selective incorporation."'
                },
                {
                  id: 'rule-2',
                  type: 'info',
                  title: 'The Dissent',
                  text: 'Justices Holmes and Brandeis dissented, arguing there was no "clear and present danger" in Gitlow\'s abstract writings.'
                }
              ]
            }
          ]
        }
      }
    ]
  },

  // 6. Prohibition
  {
    id: 'prohibition',
    title: 'Prohibition',
    backgroundImage: '/src/images/alley_bg.png',
    platforms: [
      { id: 'p1', x: 80, y: 60, width: 15 }
    ],
    doors: [
      {
        id: 'speakeasy',
        label: 'Hidden Door',
        x: 85, y: 60,
        image: 'Eye',
        destinationTitle: 'The Speakeasy',
        subRoom: {
          id: 'sub-speak',
          title: 'Underground Bar',
          backgroundImage: '/src/images/bar_interior_bg.png',
          platforms: [
            { id: 'sp1', x: 50, y: 50, width: 30 } // Bar counter
          ],
          doors: [
            {
              id: 'cause-effect',
              label: 'Causes & Effects',
              x: 50, y: 50,
              image: 'Wine',
              destinationTitle: 'The Noble Experiment',
              items: [
                {
                  id: 'law',
                  type: 'info',
                  title: '18th Amendment',
                  text: 'Ratified in 1919 and enforced by the Volstead Act. Supported by the "Drys" (WCTU, Anti-Saloon League) to improve morality and productivity.'
                },
                {
                  id: 'crime',
                  type: 'info',
                  title: 'Rise of Organized Crime',
                  text: 'Prohibition fueled illegal bootlegging and speakeasies. Figures like Al Capone built empires on illegal alcohol, merging it with prostitution and violence. The government lost millions in tax revenue.'
                }
              ]
            },
            {
              id: 'letters',
              label: 'Letters',
              x: 20, y: 82,
              image: 'Mail',
              destinationTitle: 'Public Opinion',
              items: [
                {
                  id: 'let-1',
                  type: 'info',
                  title: 'Citizen Letters',
                  text: '1. Otto E. Schulz (Milwaukee) wrote against Prohibition.\n2. Mrs. Hillyer wrote complaining of her husband\'s drinking despite the law.\n3. O.A. Calandria wrote to report specific speakeasies in New Jersey.'
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

