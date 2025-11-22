import type { Topic } from '../types';

const racialTension: Topic =
  // ==============================================================
  // 2. RACIAL TENSION
  // ==============================================================
  {
    id: 'racial-tension',
    title: 'Racial Tension & Violence',
    backgroundImage: "/images/museumBackground.png",
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
              id: 'jc-1',
              label: 'Laws',
              x: 12.5, y: 50, // Centered on p1
              image: 'Book',
              destinationTitle: 'Legal Oppression',
              items: [
                {
                  id: 'txt-jc',
                  type: 'info',
                  title: 'Who was Jim-Crow?',
                  text: 'Jim-Crow Laws, named for a character that a white performer would play by painting his face black and mocking black Americans, were local and state level laws often implemented in the South that allowed segregation of a variety of institutions around the country by skin color. As can be observed in a depiction of Jim Crow as a character from the time titled “Jim Crow”, the character promoted harmful stereotypes through purposeful grammatical and linguistic errors, depicting African-Americans as uneducated and rash.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Jim Crow",
                  src: "/images/racialtensions/caricature.png",
                  caption: "Jim Crow caricature 19th century"
                },
                {
                  id: 'mcq-jc',
                  type: 'question',
                  title: 'Court Cases',
                  question: 'Who were Jim-Crow Laws named after?',
                  options: ['A racist character depiction of African-Americans named “Jim Crow”', 'A corrupt, racist politician who vouched for the oppression of Black people', 'A former KKK Grandmaster', 'A crow that stood as a symbol of black oppression in America'],
                  correctAnswer: 'A racist character depiction of African-Americans named “Jim Crow”'
                }
              ]
            },
            {
              id: 'jc-2',
              label: 'Laws',
              x: 87.5, y: 50, // Centered on p1
              image: 'Book',
              destinationTitle: 'Legal Oppression',
              items: [
                {
                  id: 'txt-jc',
                  type: 'info',
                  title: 'Segregation',
                  text: 'These laws would force a multitude of public institutions to become segregated, including schools, hospitals, restaurants, and transportation, often greatly reducing the quality of these services for African-Americans due to lack of funding and resources.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Segregation",
                  src: "/images/racialtensions/segregatedbuses.png",
                  caption: "Segregated buses"
                },
                {
                  id: 'mcq-jc',
                  type: 'question',
                  title: 'Court Cases',
                  question: 'Where  did segregation from Jim-Crow Laws legally apply?',
                  options: ['Schools', 'All Public Institutions', 'Restaurants', 'Public Transportation'],
                  correctAnswer: 'Restaurants'
                }
              ]
            },
            {
              id: 'jc-3',
              label: 'Laws',
              x: 40, y: 20, // Centered on p1
              image: 'Book',
              destinationTitle: 'Legal Oppression',
              items: [
                {
                  id: 'txt-jc',
                  type: 'info',
                  title: 'Voting Barriers',
                  text: 'These laws would also prevent African-Americans from voting through backwards poll taxes and literacy tests, which were evidently biased against African-American voting groups.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Literacy Test",
                  src: "/images/racialtensions/literacytest.png",
                  caption: "Jim Crow literacy test exam"
                },
                {
                  id: 'mcq-jc',
                  type: 'question',
                  title: 'Court Cases',
                  question: 'How did certain laws in the South restrict African-American voting rights during the early 20th century?',
                  options: ['By providing easy access to voter registration', 'Through poll taxes and literacy tests designed to disproportionately prevent African-Americans from voting', 'By offering incentives for African-Americans to vote', 'By requiring all citizens to vote regardless of race'],
                  correctAnswer: 'Through poll taxes and literacy tests designed to disproportionately prevent African-Americans from voting'
                }
              ]
            },
            {
              id: 'jc-4',
              label: 'Laws',
              x: 60, y: 20, // Centered on p1
              image: 'Book',
              destinationTitle: 'Legal Oppression',
              items: [
                {
                  id: 'txt-jc',
                  type: 'info',
                  title: 'Legal Support',
                  text: 'To make matters worse, court cases such as Plessy v. Ferguson would provide support and reasoning for these Jim-Crow laws to exist, allowing for the oppression of black Americans for decades to come, only ending after the success of the Civil Rights Movement.'
                },
                {
                  id: "img-def",
                  type: "image",
                  title: "Plessy v Ferguson",
                  src: "/images/racialtensions/plessy.png",
                  caption: "Plessy v Ferguson 1896 Supreme Court document"
                },
                {
                  id: 'mcq-jc',
                  type: 'question',
                  title: 'Court Cases',
                  question: 'How did the Supreme Court case Plessy v. Ferguson affect African-Americans in the South?',
                  options: ['It outlawed segregation and strengthened civil rights protections', 'It upheld segregation laws, providing legal justification for Jim Crow laws and long-term oppression', 'It had no significant impact on racial policies', 'It encouraged Northern cities to adopt segregation'],
                  correctAnswer: 'It upheld segregation laws, providing legal justification for Jim Crow laws and long-term oppression'
                }
              ]
            },
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
              id: 'kkk-1',
              label: 'The KKK',
              x: 27.5, y: 30, // Centered on p1
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
            },
            {
              id: 'kkk-2',
              label: 'The KKK',
              x: 72.5, y: 25, // Centered on p1
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
            },
            {
              id: 'kkk-3',
              label: 'The KKK',
              x: 35, y: 70, // Centered on p1
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
            },
            {
              id: 'kkk-4',
              label: 'The KKK',
              x: 62.5, y: 60, // Centered on p1
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
            },
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
          backgroundImage: "/images/museumBackground.png",
          platforms: [
            { id: 'rt-sp1', x: 80, y: 67, width: 10 },
            { id: 'rt-sp2', x: 45, y: 54, width: 10 },
            { id: 'rt-sp3', x: 10, y: 40, width: 10 }
          ],
          doors: [
            {
              id: 'native-1',
              label: 'Citizenship',
              x: 85, y: 67, // Centered on p1
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
            },
            {
              id: 'native-2',
              label: 'Citizenship',
              x: 50, y: 54, // Centered on p1
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
            },
            {
              id: 'native-3',
              label: 'Citizenship',
              x: 15, y: 40, // Centered on p1
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
            },
          ]
        }
      }
    ]
  };

export default racialTension;