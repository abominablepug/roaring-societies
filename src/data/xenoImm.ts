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
      { id: 'p1', x: 5, y: 70, width: 20 },   // Door 1 Base
      { id: 'p2', x: 30, y: 60, width: 20 },  // Door 2 Base
      { id: 'step-p3', x: 55, y: 70, width: 10 }, // Step to P3
      { id: 'p3', x: 60, y: 50, width: 20 },  // Door 3 Base (High)
      { id: 'p4', x: 85, y: 70, width: 15 },  // Door 4 Base
    ],
    doors: [
      // --- 4A. Social Intolerance ---
      {
        id: 'xeno-soc',
        label: 'Intolerance',
        x: 15, y: 70, // Centered on p1
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
              id: 'immigrantIntolerance',
              label: 'Immigrant Intolerance',
              x: 27.5, y: 30, // Centered on p1
              image: 'FileText',
              destinationTitle: 'The Discrimination',
              items: [
                {
                  id: 'txt-intolerance',
                  type: 'info',
                  title: 'Social Intolerance',
                  text: 'During the 1920s, social intolerance towards immigrants intensified. As Americans began to view foreign-born populations as potential threats, the perception of immigrants grew increasingly negative.'
                },
                {
                  id: "img-intolerance",
                  type: "image",
                  title: "Cartoon",
                  src: "/images/xenoImm/1-1.png",
                  caption: "1920s anti-immigration cartoon"
                },
                {
                  id: 'mcq-intolerance',
                  type: 'question',
                  title: 'Attitude Shift',
                  question: 'How did American attitudes toward immigrants change during the 1920s?',
                  options: [
                    'Immigrants were widely welcomed and integrated without opposition',
                    'Social intolerance intensified, and immigrants were increasingly viewed as potential threats',
                    'Immigrant populations were unaffected by social perceptions',
                    'Americans encouraged unrestricted immigration during this period'
                  ],
                  correctAnswer: 'Social intolerance intensified, and immigrants were increasingly viewed as potential threats'
                }
              ]
            },
            {
              id: 'dillinghamReports',
              label: 'The "Undesirables"',
              x: 72.5, y: 25, // Centered on p1
              image: 'FileText',
              destinationTitle: 'The Dillingham Reports',
              items: [
                {
                  id: 'txt-dill',
                  type: 'info',
                  title: 'The "Undesirables"',
                  text: 'The 1911 Dillingham Commission Reports labelled immigrants from Southern and Eastern Europe as “undesirable” and manufactured claims regarding their contribution to crime and poverty. These reports favored the “Old Immigrants”, who were from Northern Europe, and opposed “New Immigrants”, who were from Eastern and Southern Europe (Effact #7).'
                },
                {
                  id: "img-dill",
                  type: "image",
                  title: "Dillingham Report",
                  src: "/images/xenoImm/1-2.png",
                  caption: "Cover of the Dillingham Commission 1911 Report"
                },
                {
                  id: 'mcq-dill',
                  type: 'question',
                  title: 'Findings',
                  question: 'What was a key finding of the 1911 Dillingham Commission Reports?',
                  options: ['All immigrants contributed equally to American society', 'Immigrants from Southern and Eastern Europe were labeled “undesirable,” while Northern European immigrants were favored', 'Immigrants had no impact on crime or poverty', 'Immigration from Northern and Southern Europe was equally discouraged'],
                  correctAnswer: 'Immigrants from Southern and Eastern Europe were labeled “undesirable,” while Northern European immigrants were favored'
                }
              ]
            },
            {
              id: 'cpiTargeting',
              label: 'Government Sponsored Spying',
              x: 35, y: 70, // Centered on p1
              image: 'FileText',
              destinationTitle: 'CPI Targeting',
              items: [
                {
                  id: 'txt-cpi',
                  type: 'info',
                  title: 'CPI Targeting',
                  text: 'The Committee on Public Information (CPI) targeted German, Slavic, and Italian immigrants and urged American citizens to look out for “unpatriotic” behavior from these specific groups.'
                },
                {
                  id: "img-cpi",
                  type: "image",
                  title: "Public Information",
                  src: "/images/xenoImm/1-3.png",
                  caption: "Committee on Public Information 1920s"
                },
                {
                  id: 'mcq-cpi',
                  type: 'question',
                  title: 'CPI Focus',
                  question: 'Which groups were specifically targeted by the Committee on Public Information (CPI) during the early 20th century?',
                  options: ['Only African-Americans in the South', "Native-born Americans who opposed the government", 'German, Slavic, and Italian immigrants, urging citizens to watch for “unpatriotic” behavior', 'Northern European immigrants exclusively'],
                  correctAnswer: 'German, Slavic, and Italian immigrants, urging citizens to watch for “unpatriotic” behavior'
                }
              ]
            },
            {
              id: 'immigrantBias',
              label: 'Growing Racism',
              x: 62.5, y: 60, // Centered on p1
              image: 'FileText',
              destinationTitle: 'Immigration Bias',
              items: [
                {
                  id: 'txt-bias',
                  type: 'info',
                  title: 'Growing Racism',
                  text: 'By erroneously correlating immigration to America’s own pitfalls, society began to discriminate against foreigners more and more. This widespread hostility justified the nationality-based restrictions the federal government placed on immigration.'
                },
                {
                  id: "img-bias",
                  type: "image",
                  title: "The Discriminated",
                  src: "/images/xenoImm/1-4.png",
                  caption: "Ellis Island Immigrants 1920s"
                },
                {
                  id: 'mcq-bias',
                  type: 'question',
                  title: 'Societal Effect',
                  question: 'What societal effect contributed to nationality-based immigration restrictions in the early 20th century?',
                  options: ['Immigrants were universally celebrated for their contributions', 'Immigrants faced no legal or social obstacles', 'The government encouraged unrestricted immigration from all countries', 'False correlations between immigration and societal problems led to increased discrimination and hostility toward foreigners'],
                  correctAnswer: 'False correlations between immigration and societal problems led to increased discrimination and hostility toward foreigners'
                }
              ]
            }
          ]
        }
      },
      // --- 4B. Xenophobia ---
      
      {
        id: 'xeno-law',
        label: 'Anti-Immigration Legislation',
        x: 40, y: 60, // Centered on p2
        image: 'Gavel',
        destinationTitle: 'Immigration Acts',
        subRoom: {
          id: 'sub-xeno-law',
          title: 'Immigration Acts',
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
              id: 'xenophobia',
              label: 'Growing Legal Tensions',
              x: 12.5, y: 50, // Centered on p1
              image: 'Ban',
              destinationTitle: 'Xenophobia',
              items: [
                {
                  id: 'txt-xeno',
                  type: 'info',
                  title: 'Fear of Foreigners',
                  text: 'Xenophobia is the fear or hatred of foreigners. In the 1920s, xenophobia manifested itself in restrictive immigration laws that targeted specific foreign populations.'
                },
                {
                  id: "img-xeno",
                  type: "image",
                  title: "Xenophobia",
                  src: "/images/xenoImm/2-1.png",
                  caption: "Ku Klux Klan Anti-Immigrant Rally 1920s"
                },
                {
                  id: 'mcq-xeno',
                  type: 'question',
                  title: 'Manifestation',
                  question: 'How did xenophobia manifest in the United States during the 1920s?',
                  options: ['Through restrictive immigration laws targeting specific foreign populations', 'By promoting cultural exchange programs', 'By encouraging unrestricted immigration from all countries', 'By eliminating all border controls'],
                  correctAnswer: 'Through restrictive immigration laws targeting specific foreign populations'
                }
              ]
            },
            {
              id: 'immigrationStereotypes',
              label: 'Stereotypes Fuel Dissent',
              x: 87.5, y: 50, // Centered on p1
              image: 'Ban',
              destinationTitle: 'Immigration Stereotypes',
              items: [
                {
                  id: 'txt-stereotypes',
                  type: 'info',
                  title: 'Closing the Door',
                  text: 'In the debates leading up to the Immigration Act of 1917, Asian and European immigrants were considered to bring “moral degeneracy”. Stereotypes fueled discriminatory beliefs, that certain nationalities endangered national security and American values.'
                },
                {
                  id: "img-stereotypes",
                  type: "image",
                  title: "Stereotypes",
                  src: "/images/xenoImm/2-2.png",
                  caption: "Political Cartoon About 'Moral Degeneracy' of immigrants"
                },
                {
                  id: 'mcq-stereotypes',
                  type: 'question',
                  title: 'Debates',
                  question: 'What beliefs influenced the debates leading up to the Immigration Act of 1917?',
                  options: ['Asian and European immigrants were stereotyped as bringing “moral degeneracy” and threatening national security and American values', 'All immigrants were equally welcomed regardless of origin', 'Only Northern European immigrants were considered a threat', 'Immigration was seen as unrelated to national security or morality'],
                  correctAnswer: 'Asian and European immigrants were stereotyped as bringing “moral degeneracy” and threatening national security and American values'
                }
              ]
            },
            {
              id: 'quotas',
              label: 'Immigration Quotas',
              x: 40, y: 20, // Centered on p1
              image: 'Ban',
              destinationTitle: 'Quota Acts',
              items: [
                {
                  id: 'txt-quota',
                  type: 'info',
                  title: 'Closing the Door',
                  text: 'The Emergency Quota Act of 1921 and the Johnson-Reed Act of 1924 significantly limited the immigration of Russian, Italian, and Polish people to the U.S. based on national-origin quotas.'
                },
                {
                  id: "img-quota",
                  type: "image",
                  title: "Quota Acts",
                  src: "/images/xenoImm/2-3.png",
                  caption: "Immigration Line with Restricted Groups 1920s"
                },
                {
                  id: 'mcq-quota',
                  type: 'question',
                  title: 'The Effects',
                  question: 'What was the effect of the Emergency Quota Act of 1921 and the Johnson-Reed Act of 1924?',
                  options: ['They encouraged unrestricted immigration from all countries', 'They only applied to immigrants from Northern Europe', 'They abolished all immigration restrictions', 'They significantly limited immigration from Russia, Italy, and Poland through national-origin quotas'],
                  correctAnswer: 'They significantly limited immigration from Russia, Italy, and Poland through national-origin quotas'
                }
              ]
            },
            {
              id: 'racialPreservation',
              label: 'Preservation of America',
              x: 60, y: 20, // Centered on p1
              image: 'Ban',
              destinationTitle: 'Racial Preservation',
              items: [
                {
                  id: 'txt-preservation',
                  type: 'info',
                  title: 'Closing the Door',
                  text: 'These restrictions demonstrated America’s desire at the time to preserve its racial composition by limiting immigration to mainly Northern Europeans.',
                },
                {
                  id: "img-preservation",
                  type: "image",
                  title: "Racial Preservation",
                  src: "/images/xenoImm/2-4.png",
                  caption: "1920s Immigration Quota Chart"
                },
                {
                  id: 'mcq-preservation',
                  type: 'question',
                  title: 'The Motivation',
                  question: 'What was a key motivation behind the immigration restrictions of the 1920s?',
                  options: ['To encourage diversity from all regions equally', 'To preserve America’s racial composition by favoring Northern European immigrants', 'To eliminate all Northern European immigration', 'To prioritize Asian and Southern European immigrants'],
                  correctAnswer: 'To preserve America’s racial composition by favoring Northern European immigrants'
                }
              ]
            },
          ]
        }
      },
      // --- 4C. Anarchy ---
      {
        id: 'xeno-annarchy',
        label: 'Labor',
        x: 70, y: 50, // Centered on p3
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
              id: 'radicalCrackdowns',
              label: 'Anti-Anarchy',
              x: 15, y: 70, // Centered on p1
              image: 'Users',
              destinationTitle: 'Crackdowns',
              items: [
                {
                  id: 'txt-crackdown',
                  type: 'info',
                  title: 'Suppression',
                  text: 'The 1920s was a particularly tumultuous time. An increase in foreign anarchy and revolutionaries lead to government crackdowns on radical views and speech within the United States.'
                },
                {
                  id: 'img-crackdown',
                  type: 'image',
                  title: 'Raid',
                  src: '/images/xenoImm/3-1.png',
                  caption: 'Crowds Protesting the Palmer Raids 1920s'
                },
                {
                  id: 'mcq-crackdown',
                  type: 'question',
                  title: 'Government Action',
                  question: 'What prompted government crackdowns on radical views and speech in the United States during the 1920s?',
                  options: ['A decrease in foreign immigration and revolutionary activity', 'Complete public support for radical political ideas', 'An increase in foreign anarchy and revolutionary movements', 'The absence of any anarchist activity'],
                  correctAnswer: 'An increase in foreign anarchy and revolutionary movements'
                }
              ]
            },
            {
              id: 'redMenace',
              label: 'The Bolshevik Fears',
              x: 35, y: 60, // Centered on p1
              image: 'Users',
              destinationTitle: 'Red Menace',
              items: [
                {
                  id: 'txt-menace',
                  type: 'info',
                  title: 'Red Menace',
                  text: 'The Bolshevik Revolution of 1917 was a direct factor leading to Attorney General A. Mitchell Palmer’s statements about the brewing Red Menace, that “aliens” of the disloyal classes were looking to overthrow the U.S. government.'
                },
                {
                  id: 'img-menace',
                  type: 'image',
                  title: 'Red Menace',
                  src: '/images/xenoImm/3-2.png',
                  caption: 'Bolshevik Revolution Propaganda Poster 1917'
                },
                {
                  id: 'mcq-menace',
                  type: 'question',
                  title: 'Bolshevik Influence',
                  question: 'How did the Bolshevik Revolution of 1917 influence U.S. domestic policy?',
                  options: ['It led to increased cultural exchange programs with Russia', 'It prompted Attorney General A. Mitchell Palmer to warn of a “Red Menace,” claiming disloyal “aliens” sought to overthrow the U.S. government', 'It had no effect on American perceptions of foreign radicals', 'It encouraged unrestricted immigration from Russia'],
                  correctAnswer: 'It prompted Attorney General A. Mitchell Palmer to warn of a “Red Menace,” claiming disloyal “aliens” sought to overthrow the U.S. government'
                }
              ]
            },
            {
              id: 'raidJustification',
              label: 'The Palmer Raids',
              x: 65, y: 50, // Centered on p1
              image: 'Users',
              destinationTitle: 'Raid Justification',
              items: [
                {
                  id: 'txt-raid',
                  type: 'info',
                  title: 'Justification',
                  text: 'His rhetoric was used to justify the Palmer Raids, in which thousands of immigrants were arrested without warrants and soon deported.'
                },
                {
                  id: 'img-raid',
                  type: 'image',
                  title: 'Palmer Raids',
                  src: '/images/xenoImm/3-3.png',
                  caption: 'Red Scare Newspaper Clippings 1920s'
                },
                {
                  id: 'mcq-union',
                  type: 'question',
                  title: 'Red Menace Rhetoric',
                  question: 'How was Attorney General A. Mitchell Palmer’s rhetoric about the “Red Menace” used domestically?',
                  options: ['To promote immigrant rights and free speech', 'To justify the Palmer Raids, resulting in the arrest and deportation of thousands of immigrants without warrants', 'To encourage peaceful political discussion', 'To expand legal protections for immigrants'],
                  correctAnswer: 'To justify the Palmer Raids, resulting in the arrest and deportation of thousands of immigrants without warrants'
                }
              ]
            },
            {
              id: 'redMenaceSuppresion',
              label: 'Suppression of Free Speech',
              x: 85, y: 40, // Centered on p1
              image: 'Users',
              destinationTitle: 'Red Menace Suppression',
              items: [
                {
                  id: 'txt-suppression',
                  type: 'info',
                  title: 'Suppression',
                  text: 'The Red Menace was used to suppress thousands of voices, with the help of the Espionage and Sedition Acts. Radical speech, political advocacy, and essentially, nonconforming ideals, were seen as a threat to national security.'
                },
                {
                  id: 'img-suppression',
                  type: 'image',
                  title: 'Civil Liberties',
                  src: '/images/xenoImm/3-4.png',
                  caption: 'Esponage Act Document 1917'
                },
                {
                  id: 'mcq-suppression',
                  type: 'question',
                  title: 'Civil Liberties',
                  question: 'How did the concept of the “Red Menace” impact civil liberties in the United States?',
                  options: ['It was used, along with the Espionage and Sedition Acts, to suppress radical speech, political advocacy, and nonconforming ideals as threats to national security', 'It encouraged free political debate and radical speech', 'It promoted unrestricted immigration and diversity of thought', 'It only targeted foreign governments, not domestic citizens'],
                  correctAnswer: 'It was used, along with the Espionage and Sedition Acts, to suppress radical speech, political advocacy, and nonconforming ideals as threats to national security'
                }
              ]
            },
          ]
        }
      },
      // --- 4D. Labor ---
      {
        id: 'xeno-labor',
        label: 'Labor',
        x: 92.5, y: 70, // Centered on p3
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
              id: 'laborRestrictions',
              label: 'Labor Restrictions',
              x: 20, y: 70, // Centered on p1
              image: 'Users',
              destinationTitle: 'Anarchy Prevention',
              items: [
                {
                  id: 'txt-restrictions',
                  type: 'info',
                  title: 'Labor Restriction',
                  text: 'As the government began to fear that immigrant labor movements were connected to anarchist plots, major restrictions were placed on labor organizations and worker’s rights.'
                },
                {
                  id: 'img-restrictions',
                  type: 'image',
                  title: 'Labor Restrictions',
                  src: '/images/xenoImm/4-1.png',
                  caption: 'Industrial Workers of the World 1920s'
                },
                {
                  id: 'mcq-restrictions',
                  type: 'question',
                  title: 'Restrictions Cause',
                  question: 'Why were labor organizations and workers’ rights restricted in the 1920s?',
                  options: ['The government wanted to strengthen labor unions', 'Fear that immigrant labor movements were linked to anarchist plots led to major restrictions', 'Workers voluntarily gave up their rights', 'There was no connection between labor movements and government policy'],
                  correctAnswer: 'Fear that immigrant labor movements were linked to anarchist plots led to major restrictions'
                }
              ]
            },
            {
              id: 'iwwCrackdown',
              label: 'Union Suspicions',
              x: 50, y: 57, // Centered on p1
              image: 'Users',
              destinationTitle: 'IWW Crackdown',
              items: [
                {
                  id: 'txt-crackdown',
                  type: 'info',
                  title: 'IWW Crackdown',
                  text: 'Federal agents infiltrated the Industrial Workers of the World (IWWW), accusing the majority-immigrant population of spreading Bolshevik propaganda. Newspapers like The New York Times faulted "foreign agitators” for the unrest leading to textile and steel strikes.'
                },
                {
                  id: 'img-crackdown',
                  type: 'image',
                  title: 'Growing Socialism',
                  src: '/images/xenoImm/4-2.png',
                  caption: 'Boolshevik Propaganda Poster 1920s'
                },
                {
                  id: 'mcq-union',
                  type: 'question',
                  title: 'Government Response',
                  question: 'How did the U.S. government and media respond to the Industrial Workers of the World (IWW) during the 1920s?',
                  options: ['They supported the IWW’s labor strikes and immigrant workers', 'They ignored all labor movements and strikes', 'Federal agents infiltrated the IWW, accusing its majority-immigrant members of spreading Bolshevik propaganda, and media blamed “foreign agitators” for labor unrest', 'They promoted unrestricted immigration to strengthen labor unions'],
                  correctAnswer: 'Federal agents infiltrated the IWW, accusing its majority-immigrant members of spreading Bolshevik propaganda, and media blamed “foreign agitators” for labor unrest'
                }
              ]
            },
            {
              id: 'syndicalismLaws',
              label: 'Union Control',
              x: 80, y: 70, // Centered on p1
              image: 'Users',
              destinationTitle: 'Syndicalism Laws',
              items: [
                {
                  id: 'txt-syndicalism',
                  type: 'info',
                  title: 'Syndicalism Laws',
                  text: 'Criminal syndicalism laws allowed the government to arrest union leaders and take over union offices. These actions ultimately limited the rights of immigrant workers by crippling the labor organizations themselves.'
                },
                {
                  id: 'img-syndicalism',
                  type: 'image',
                  title: 'Syndicalism Laws',
                  src: '/images/xenoImm/4-3.png',
                  caption: 'Union Office Raid Photograph 1920s'
                },
                {
                  id: 'mcq-syndicalism',
                  type: 'question',
                  title: 'Criminal Syndicalism Effect',
                  question: 'What was the effect of criminal syndicalism laws on immigrant workers in the 1920s?',
                  options: ['They strengthened labor unions and protected workers’ rights', 'They allowed the government to arrest union leaders and seize union offices, limiting the rights of immigrant workers', 'They had no impact on labor organizations or workers’ rights', 'They only applied to non-immigrant workers'],
                  correctAnswer: 'They allowed the government to arrest union leaders and seize union offices, limiting the rights of immigrant workers'
                }
              ]
            },
          ]
        }
      }
    ]
  };

export default xenoImm;