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
      { id: 'p1', x: 5, y: 70, width: 20 },   // Door 1 Base
      { id: 'p2', x: 30, y: 60, width: 20 },  // Door 2 Base
      { id: 'step-p3', x: 55, y: 70, width: 10 }, // Step to P3
      { id: 'p3', x: 60, y: 50, width: 20 },  // Door 3 Base (High)
      { id: 'p4', x: 85, y: 70, width: 15 },  // Door 4 Base
    ],
    doors: [
      // --- 6A. Causes (From previous turn) ---
      {
        id: 'pro-cause',
        label: 'Causes',
        x: 15, y: 70,
        image: 'Droplet',
        destinationTitle: 'Temperance',
        subRoom: {
          id: 'sub-pro-cause',
          title: 'Origins of Prohibition',
          backgroundImage: "/images/museumBackground.png",
          platforms: [
             { id: 'pull-sp-1', x: 10, y: 70, width: 10 }, // Step
             { id: 'pull-sp-2', x: 30, y: 60, width: 10 }, // Step
             { id: 'pull-sp-3', x: 60, y: 50, width: 10 }, // Step
             { id: 'pull-sp-4', x: 80, y: 40, width: 10 }, // Step
          ],
          doors: [
            {
              id: 'temp-move',
              label: 'The Union',
              x: 15, y: 70,
              image: 'Users',
              destinationTitle: 'Temperance Movement',
              items: [
                {
                  id: 'txt-temp',
                  type: 'info',
                  title: 'Temperance Movement',
                  text: 'The Temperance Movement sought prohibition, or the banning of alcohol use, since the early 1800s. The Women\'s Christian Temperance Union (WCTU) fought for the passing of numerous local laws restricting alcohol use, and developed an anti-alcohol education curriculum, which was implemented in nearly every school in the U.S.'
                },
                {
                  id: 'img-temp',
                  type: 'image',
                  title: 'WCTU',
                  src: "/images/prohibition/1-1.png",
                  caption: 'WCTU Logo'
                },
                {
                  id: 'mcq-temp',
                  type: 'question',
                  title: 'Key Goal',
                  question: 'What was a key goal of the Temperance Movement in the United States?',
                  options: [
                    'To promote alcohol use in schools',
                    'To achieve prohibition and restrict alcohol consumption, supported by organizations like the Women’s Christian Temperance Union (WCTU)',
                    'To legalize all alcoholic beverages nationwide',
                    'To increase taxes on tobacco products'
                  ],
                  correctAnswer: 'To achieve prohibition and restrict alcohol consumption, supported by organizations like the Women’s Christian Temperance Union (WCTU)'
                }
              ]
            },
            {
              id: 'f-willard',
              label: 'The Leader',
              x: 35, y: 60,
              image: 'User',
              destinationTitle: 'Frances Willard',
              items: [
                {
                  id: 'txt-willard',
                  type: 'info',
                  title: 'Frances Willard',
                  text: 'In her Temperance and Home Protection (1876) speech, Frances Willard, the WCTU president, condemned alcohol use, calling it the “worst foe of the social state” and the “home\'s arch enemy”.'
                },
                {
                  id: 'img-willard',
                  type: 'image',
                  title: 'Frances Willard',
                  src: "/images/prohibition/1-2.png",
                  caption: 'Photograph of Francis Willard'
                },
                {
                  id: 'mcq-willard',
                  type: 'question',
                  title: 'Rhetoric',
                  question: 'How did Frances Willard, president of the WCTU, describe alcohol in her 1876 speech Temperance and Home Protection?',
                  options: [
                    'As the “worst foe of the social state” and the “home’s arch enemy”',
                    'As a harmless recreational substance',
                    'As a necessary part of American culture',
                    'As a minor issue with no social impact'
                  ],
                  correctAnswer: 'As the “worst foe of the social state” and the “home’s arch enemy”'
                }
              ]
            },
            {
              id: 'prog-align',
              label: 'The Context',
              x: 65, y: 50,
              image: 'Globe',
              destinationTitle: 'War & Reform',
              items: [
                {
                  id: 'txt-prog',
                  type: 'info',
                  title: 'Progressive Alignment',
                  text: 'The WCTU\'s goal aligned with that of the Progressives, who were trying to improve the quality of life and saw alcohol indulgence as a social ill.'
                },
                {
                  id: 'img-prog',
                  type: 'image',
                  title: 'Propaganda',
                  src: "/images/prohibition/1-3.png",
                  caption: 'Anti-Alcohol Propaganda Illustrating Social Ills'
                },
                {
                  id: 'mcq-prog',
                  type: 'question',
                  title: 'Progressive Era',
                  question: 'How did the goals of the WCTU align with Progressive Era reforms?',
                  options: [
                    'Both aimed to improve quality of life and viewed alcohol indulgence as a social ill',
                    'The WCTU opposed Progressive reforms entirely',
                    'Both sought to increase alcohol consumption for economic growth',
                    'Progressives focused only on industrial regulation, unrelated to alcohol'
                  ],
                  correctAnswer: 'Both aimed to improve quality of life and viewed alcohol indulgence as a social ill'
                },
              ]
            },
            {
              id: 'wwi-temp',
              label: 'The Context',
              x: 85, y: 40,
              image: 'Globe',
              destinationTitle: 'War & Reform',
              items: [
                {
                  id: 'txt-wwi',
                  type: 'info',
                  title: 'WWI and Temperance',
                  text: 'In addition, World War I increased support for temperance as it was deemed unpatriotic to use bread supplies meant for soldiers to make alcohol. The passing of an amendment to officially ban alcohol seemed entirely out of reach until the emergence of the Anti-Saloon League.'
                },
                {
                  id: 'img-wwi',
                  type: 'image',
                  title: 'Amendment',
                  src: "/images/prohibition/1-4.png",
                  caption: 'Prohibition Amendment (18th) Document'
                },
                {
                  id: 'mcq-wwi',
                  type: 'question',
                  title: 'World War I',
                  question: 'How did World War I influence support for the temperance movement?',
                  options: [
                    'It decreased support because alcohol was needed for soldiers',
                    'It increased support, as using grain to make alcohol was seen as unpatriotic, benefiting soldiers\' food supplies',
                    'It encouraged increased alcohol production for wartime morale',
                    'It had no impact on the temperance movement'
                  ],
                  correctAnswer: 'It increased support, as using grain to make alcohol was seen as unpatriotic, benefiting soldiers\' food supplies'
                }
              ]
            }
          ]
        }
      },
      // --- 6B. Details ("The Details of Prohibition") ---
      {
        id: 'pro-det',
        label: 'Details',
        x: 40, y: 60,
        image: 'FileText',
        destinationTitle: 'The Law',
        subRoom: {
          id: 'sub-pro-det',
          title: 'The Details of Prohibition',
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
            // Column 1: 18th Amendment
            {
              id: 'amend-18',
              label: 'Amendment',
              x: 12.5, y: 50,
              image: 'Book',
              destinationTitle: '18th Amendment',
              items: [
                {
                  id: 'txt-amend18',
                  type: 'info',
                  title: '18th Amendment',
                  text: 'In 1919, Congress ratified the 18th Amendment, which officially forbade the manufacture, distribution, and sale of alcohol throughout the United States.'
                },
                {
                  id: 'img-amend18',
                  type: 'image',
                  title: 'Ratification',
                  src: '/images/prohibition/2-1.png',
                  caption: 'Political Cartoon Celebrating the Ratification of the 18th Amendment'
                },
                {
                  id: 'mcq-amend18',
                  type: 'question',
                  title: 'Ratification',
                  question: 'What did the 18th Amendment, ratified in 1919, accomplish?',
                  options: [
                    'It prohibited the manufacture, distribution, and sale of alcohol in the United States',
                    'It legalized alcohol nationwide',
                    'It only restricted alcohol consumption for minors',
                    'It increased taxes on alcohol without banning it'
                  ],
                  correctAnswer: 'It prohibited the manufacture, distribution, and sale of alcohol in the United States'
                }
              ]
            },
            // Column 2: Volstead Act
            {
              id: 'volstead-law',
              label: 'Volstead',
              x: 87.5, y: 50,
              image: 'Shield',
              destinationTitle: 'The Volstead Act',
              items: [
                {
                  id: 'txt-volstead',
                  type: 'info',
                  title: 'Volstead Act',
                  text: 'It subsequently passed the Volstead Act, the law that enforced the amendment.'
                },
                {
                  id: 'img-volstead',
                  type: 'image',
                  title: 'Document',
                  src: '/images/prohibition/2-2.png',
                  caption: 'Volstead Act Document 1919'
                },
                {
                  id: 'mcq-volstead',
                  type: 'question',
                  title: 'Enforcement',
                  question: 'What was the purpose of the Volstead Act?',
                  options: [
                    'To repeal the 18th Amendment',
                    'To promote alcohol production for medicinal purposes only',
                    'To enforce the 18th Amendment by prohibiting the manufacture, distribution, and sale of alcohol',
                    'To regulate tobacco rather than alcohol'
                  ],
                  correctAnswer: 'To enforce the 18th Amendment by prohibiting the manufacture, distribution, and sale of alcohol'
                }
              ]
            },
            // Column 3: Rural Support
            {
              id: 'rural-sup',
              label: 'Support',
              x: 40, y: 20,
              image: 'Users',
              destinationTitle: 'Rural Support',
              items: [
                {
                  id: 'txt-rural',
                  type: 'info',
                  title: 'Rural Support',
                  text: 'The passing votes for the 18th Amendment were largely supplied by rural areas. The Progressives believed the amendment to be one of its greatest contributions to society.'
                },
                {
                  id: 'img-rural',
                  type: 'image',
                  title: 'Rally',
                  src: '/images/prohibition/2-3.png',
                  caption: 'Temperacen Rally in Rural America 1920s'
                },
                {
                  id: 'mcq-rural',
                  type: 'question',
                  title: 'The Votes',
                  question: 'Which group largely supplied the votes for ratifying the 18th Amendment, and how did Progressives view it?',
                  options: [
                    'Urban populations; Progressives opposed it',
                    'Rural populations; Progressives considered it one of their greatest contributions to society',
                    'Northern industrial workers; Progressives were indifferent',
                    'Southern politicians; Progressives had no opinion'
                  ],
                  correctAnswer: 'Rural populations; Progressives considered it one of their greatest contributions to society'
                }
              ]
            },
            // Column 4: Drys vs Wets
            {
              id: 'dry-wet',
              label: 'Conflict',
              x: 60, y: 20,
              image: 'AlertCircle',
              destinationTitle: 'Drys vs. Wets',
              items: [
                {
                  id: 'txt-conflict',
                  type: 'info',
                  title: 'Drys vs. Wets',
                  text: 'The “drys”, or supporters of Prohibition, believed this “noble experiment” would allow society to strengthen, families to grow closer, and individuals to improve. The “wets”, or opposers, believed Prohibition did not stop people from consuming alcohol, but rather, contributed to an increase in organized crime.'
                },
                {
                  id: 'img-conflict',
                  type: 'image',
                  title: 'Political Cartoon',
                  src: '/images/prohibition/2-4.png',
                  caption: 'Politcal Cartoon depicting the Drys vs the Wets 1920s'
                },
                {
                  id: 'mcq-conflict',
                  type: 'question',
                  title: 'Ideologies',
                  question: 'What were the main beliefs of the "drys" and "wets" during Prohibition?',
                  options: [
                    'Both groups supported Prohibition for moral reasons',
                    '“Drys” believed Prohibition would strengthen society and families; “wets” argued it failed to stop drinking and increased organized crime',
                    '“Drys” supported alcohol consumption; “wets” wanted total prohibition',
                    '“Drys” focused on economic growth; “wets” focused on health benefits'
                  ],
                  correctAnswer: '“Drys” believed Prohibition would strengthen society and families; “wets” argued it failed to stop drinking and increased organized crime'
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
        x: 70, y: 50,
        image: 'Smile',
        destinationTitle: 'Goals',
        subRoom: {
          id: 'sub-pro-int',
          title: 'Intended Effects',
          backgroundImage: "/images/museumBackground.png",
          platforms: [
            { id: 'eff-sp-1', x: 12.5, y: 67, width: 15 },
            { id: 'eff-sp-2', x: 42.5, y: 55, width: 15 },
            { id: 'eff-sp-3', x: 72.5, y: 67, width: 15 }
          ],
          doors: [
            // Column 1: Social Reform
            {
              id: 'soc-reform',
              label: 'Reform',
              x: 20, y: 67,
              image: 'Sun',
              destinationTitle: 'Social Reform',
              items: [
                {
                  id: 'txt-reform',
                  type: 'info',
                  title: 'Social Reform',
                  text: 'Anti-alcohol advocates, like WCTU and the ASL, intended for Prohibition to reduce social problems. They believed that without alcohol, abuse and violence within homes would reduce.'
                },
                {
                  id: 'img-reform',
                  type: 'image',
                  title: 'Poster',
                  src: '/images/prohibition/3-1.png',
                  caption: 'Anti-Saloon League (ASL) Poster'
                },
                {
                  id: 'mcq-reform',
                  type: 'question',
                  title: 'Advocacy',
                  question: 'What was a primary goal of anti-alcohol advocates like the WCTU and ASL during Prohibition?',
                  options: [
                    'To increase alcohol production for export',
                    'To eliminate all forms of government regulation',
                    'To reduce social problems such as abuse and violence within homes by banning alcohol',
                    'To encourage alcohol use in rural communities'
                  ],
                  correctAnswer: 'To reduce social problems such as abuse and violence within homes by banning alcohol'
                }
              ]
            },
            // Column 2: Wayne Wheeler
            {
              id: 'w-wheeler',
              label: 'Wheeler',
              x: 50, y: 55,
              image: 'User',
              destinationTitle: 'Wayne Wheeler',
              items: [
                {
                  id: 'txt-wheeler',
                  type: 'info',
                  title: 'Wayne Wheeler',
                  text: 'Wayne Wheeler, the leader of the ASL, believed that banning alcohol would lead to fewer arrests, increased productivity, and safer communities.'
                },
                {
                  id: 'img-wheeler',
                  type: 'image',
                  title: 'The Mastermind',
                  src: '/images/prohibition/3-2.png',
                  caption: 'Photograph of Wayne Wheeler'
                },
                {
                  id: 'mcq-wheeler',
                  type: 'question',
                  title: 'Expectations',
                  question: 'What did Wayne Wheeler, leader of the Anti-Saloon League (ASL), believe Prohibition would achieve?',
                  options: [
                    'More arrests and increased crime',
                    'Economic decline and social unrest',
                    'Fewer arrests, increased productivity, and safer communities',
                    'No change in social behavior'
                  ],
                  correctAnswer: 'Fewer arrests, increased productivity, and safer communities'
                }
              ]
            },
            // Column 3: Moral Goal
            {
              id: 'moral-goal',
              label: 'Morality',
              x: 80, y: 67,
              image: 'Heart',
              destinationTitle: 'Moral Goal',
              items: [
                {
                  id: 'txt-moral',
                  type: 'info',
                  title: 'Moral Goal',
                  text: 'The main intended goal of Prohibition was to create a morally-upright and ordered society, one that was safeguarded from corruption.'
                },
                {
                  id: 'img-moral',
                  type: 'image',
                  title: 'Family',
                  src: '/images/prohibition/3-3.png',
                  caption: 'Photograph of an Idealized 1920s Family'
                },
                {
                  id: 'mcq-moral',
                  type: 'question',
                  title: 'The Purpose',
                  question: 'What was the main intended goal of Prohibition?',
                  options: [
                    'To boost alcohol sales and increase government revenue',
                    'To create a morally upright and ordered society protected from corruption',
                    'To promote urban nightlife and entertainment',
                    'To reduce taxes on imported goods'
                  ],
                  correctAnswer: 'To create a morally upright and ordered society protected from corruption'
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
        x: 92.5, y: 70,
        image: 'Eye',
        destinationTitle: 'Unintended Effects',
        subRoom: {
          id: 'sub-pro-un',
          title: 'Unintended Effects',
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
            // Column 1: The Volstead Act Fails
            {
              id: 'vol-fail',
              label: 'Failure',
              x: 27.5, y: 30,
              image: 'XCircle',
              destinationTitle: 'The Volstead Act Fails',
              items: [
                {
                  id: 'txt-fail',
                  type: 'info',
                  title: 'The Volstead Act Fails',
                  text: 'As the “wets” predicted, the Volstead Act did not stop Americans from drinking, but rather, prevented them from purchasing alcohol legally. Prohibition unintentionally led to the establishment of large, illegal networks, created to smuggle alcohol.'
                },
                {
                  id: 'img-fail',
                  type: 'image',
                  title: 'Failure',
                  src: '/images/prohibition/4-1.png',
                  caption: 'Volstead Act Failure, 1919 Headlines'
                },
                {
                  id: 'mcq-fail',
                  type: 'question',
                  title: 'Unintended Consequence',
                  question: 'What was an unintended consequence of the Volstead Act during Prohibition?',
                  options: [
                    'It completely eliminated alcohol consumption in the U.S.',
                    'It strengthened legal alcohol distribution channels',
                    'It prevented legal alcohol sales but led to large illegal networks smuggling alcohol',
                    'It reduced organized crime'
                  ],
                  correctAnswer: 'It prevented legal alcohol sales but led to large illegal networks smuggling alcohol'
                }
              ]
            },
            // Column 2: Bootlegging
            {
              id: 'bootleg',
              label: 'Bootleg',
              x: 72.5, y: 25,
              image: 'Briefcase', // Represents business/sales
              destinationTitle: 'Bootlegging',
              items: [
                {
                  id: 'txt-boot',
                  type: 'info',
                  title: 'Bootlegging',
                  text: 'Bootleggers sold illegal merchandise to consumers, while speakeasies and other secret establishments were created to attract them.'
                },
                {
                  id: 'img-boot',
                  type: 'image',
                  title: 'Operation',
                  src: '/images/prohibition/4-2.png',
                  caption: 'Bootlegging Operation 1920s'
                },
                {
                  id: 'mcq-boot',
                  type: 'question',
                  title: 'Access',
                  question: 'How did Americans continue to access alcohol during Prohibition?',
                  options: [
                    'Only through legal government-run stores',
                    'Alcohol consumption completely stopped nationwide',
                    'Through illegal networks, including bootleggers and secret establishments like speakeasies',
                    'Only imported alcohol was available legally'
                  ],
                  correctAnswer: 'Through illegal networks, including bootleggers and secret establishments like speakeasies'
                }
              ]
            },
            // Column 3: Economic and Criminal Impact
            {
              id: 'eco-crime',
              label: 'Impact',
              x: 35, y: 70,
              image: 'TrendingDown',
              destinationTitle: 'Economic & Criminal Impact',
              items: [
                {
                  id: 'txt-impact',
                  type: 'info',
                  title: 'Economic and Criminal Impact',
                  text: 'Prohibition had numerous negative economic effects, especially due to a loss in tax revenue. The alcohol industry proved to be one worth millions of dollars and the government soon acknowledged the takeover attempts of many organized and unorganized criminals. Those like Al Capone were able to merge their illegal distributions of alcohol with other unsavory “businesses” like prostitution, drugs, and murder.'
                },
                {
                  id: 'img-impact',
                  type: 'image',
                  title: 'Arrest',
                  src: '/images/prohibition/4-3.png',
                  caption: 'Al Capone Mugshot 1919'
                },
                {
                  id: 'mcq-impact',
                  type: 'question',
                  title: 'Negative Effects',
                  question: 'What were some negative consequences of Prohibition on the economy and society?',
                  options: [
                    'Increased government tax revenue and elimination of crime',
                    'Loss of tax revenue, rise of organized crime, and criminal figures like Al Capone merging alcohol distribution with other illegal activities',
                    'Strengthening of the legal alcohol industry',
                    'Complete eradication of illegal businesses'
                  ],
                  correctAnswer: 'Loss of tax revenue, rise of organized crime, and criminal figures like Al Capone merging alcohol distribution with other illegal activities'
                }
              ]
            },
            // Column 4: The End of Prohibition
            {
              id: 'end-pro',
              label: 'Repeal',
              x: 62.5, y: 60,
              image: 'CheckCircle',
              destinationTitle: 'The End of Prohibition',
              items: [
                {
                  id: 'txt-end',
                  type: 'info',
                  title: 'The End of Prohibition',
                  text: 'Prohibition proved to be one of the U.S. government\'s biggest mistakes; because alcohol was made illegal, the government struggled to regulate it (Effact #20). Congress finally repealed Prohibition with the ratification of the 21st Amendment.'
                },
                {
                  id: 'img-end',
                  type: 'image',
                  title: 'Celebration',
                  src: '/images/prohibition/4-4.png',
                  caption: 'Celebration of the Repeal to Prohibition through the 21st Amendment'
                },
                {
                  id: 'mcq-end',
                  type: 'question',
                  title: 'Repeal',
                  question: 'What amendment repealed Prohibition?',
                  options: [
                    'The 20th Amendment',
                    'The 21st Amendment',
                    'The 19th Amendment',
                    'The 22nd Amendment'
                  ],
                  correctAnswer: 'The 21st Amendment'
                }
              ]
            }
          ]
        }
      }
    ]
  };

export default prohibition;