import type { Topic } from '../types';

const gitlow: Topic =
  // ==============================================================
  // 5. GITLOW V NEW YORK
  // ==============================================================
  {
    id: 'gitlow',
    title: 'Gitlow v. New York',
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
      // --- 5A. Cause ---
      {
        id: 'git-1',
        label: 'Gitlow v. NY Cause',
        x: 35, y: 20, // Centered on p1
        image: 'FileText',
        destinationTitle: 'The Cause',
        subRoom: {
          id: 'sub-git-cause',
          title: 'The Arrest',
          backgroundImage: "/images/museumBackground.png",
          platforms: [
            { id: 'eff-sp-1', x: 12.5, y: 67, width: 15 },
            { id: 'eff-sp-2', x: 42.5, y: 55, width: 15 },
            { id: 'eff-sp-3', x: 72.5, y: 67, width: 15 }
          ],
          doors: [
            {
              id: 'cause-1',
              label: 'The Arrest',
              x: 20, y: 67, // Centered on p1
              image: 'AlertCircle',
              destinationTitle: 'Gitlow Case',
              items: [
                {
                  id: 'txt-git',
                  type: 'info',
                  title: 'Benjamin Gitlow',
                  text: 'In 1919, Benjamin Gitlow was arrested for distributing the “Left Wing Manifesto”. This document advocated for the establishment of socialism through “revolutionary mass action”.'
                },
                {
                  id: 'img-git',
                  type: 'image',
                  title: 'Left Wing Manifesto',
                  src: '/images/gitlow/1-1.png',
                  caption: 'Image Taken of Benjamin Gitlow'
                },
                {
                  id: 'mcq-git',
                  type: 'question',
                  title: 'The Arrest',
                  question: 'Why was Benjamin Gitlow arrested in 1919?',
                  options: ['For organizing peaceful labor unions', 'For distributing the “Left Wing Manifesto,” which advocated establishing socialism through “revolutionary mass action”', 'For supporting the U.S. government during the Red Scare', 'For immigrating illegally to the United States'],
                  correctAnswer: 'For distributing the “Left Wing Manifesto,” which advocated establishing socialism through “revolutionary mass action”'
                }
              ]
            },
            {
              id: 'cause-2',
              label: 'The Ideology',
              x: 50, y: 55, // Centered on p1
              image: 'AlertCircle',
              destinationTitle: 'Gitlow Ideology',
              items: [
                {
                  id: 'txt-git',
                  type: 'info',
                  title: 'Ideology',
                  text: 'It declared that strikes of protest were necessary to dismantle the parliamentary state and remove power from the bourgeoisie. Gitlow argued that his ideology, fueled by collective ownership and equality, centered on long-term, structured reform rather than immediate violence.'
                },
                {
                  id: 'img-git-2',
                  type: 'image',
                  title: 'Left Wing Manifesto Excerpt',
                  src: '/images/gitlow/1-2.png',
                  caption: 'Industrial Portest Poster 1919'
                },
                {
                  id: 'mcq-git',
                  type: 'question',
                  title: 'Gitlow\'s Defense',
                  question: 'What was Benjamin Gitlow’s defense regarding the “Left Wing Manifesto”?',
                  options: ['He argued it promoted long-term, structured reform based on collective ownership and equality, not immediate violence', 'He claimed it encouraged immediate violent overthrow of the government', 'He stated it had no political or social message', 'He denied any involvement in the manifesto'],
                  correctAnswer: 'He argued it promoted long-term, structured reform based on collective ownership and equality, not immediate violence'
                }
              ]
            },
            {
              id: 'cause-3',
              label: 'The Conviction',
              x: 20, y: 67, // Centered on p1
              image: 'AlertCircle',
              destinationTitle: 'Gitlow Conviction',
              items: [
                {
                  id: 'txt-git',
                  type: 'info',
                  title: 'The Conviction',
                  text: 'However, the fear of radical movements post-World War I and amidst the Red Scare led to the government controlling speech even remotely resembling anarchist ideals. Gitlow was convicted under New York’s Criminal Anarchy Law, which punished those who publicly advocated overthrowing the government.'
                },
                {
                  id: 'img-git-3',
                  type: 'image',
                  title: 'Gitlow Trial Headlines',
                  src: '/images/gitlow/1-3.png',
                  caption: 'Benjamin Gitlow Trial Headlines 1919'
                },
                {
                  id: 'mcq-git',
                  type: 'question',
                  title: 'The Law',
                  question: 'Under what law was Benjamin Gitlow convicted, and why?',
                  options: ['Espionage Act, for spying on foreign governments', 'Sedition Act, for peaceful protest', 'Immigration Act, for distributing foreign literature', 'New York’s Criminal Anarchy Law, for publicly advocating the overthrow of the government'],
                  correctAnswer: 'New York’s Criminal Anarchy Law, for publicly advocating the overthrow of the government'
                }
              ]
            }
          ]
        }
      },
      // --- 5B. Opinions ---
      {
        id: 'git-2',
        label: 'Opinions',
        x: 55, y: 15, // Centered on p2
        image: 'Scale',
        destinationTitle: 'Supreme Court',
        subRoom: {
          id: 'sub-git-op',
          title: 'The Ruling',
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
              id: 'court-1',
              label: 'The Court Case',
              x: 12.5, y: 50, // Centered on p1
              image: 'Gavel',
              destinationTitle: 'Gitlow v. New York',
              items: [
                {
                  id: 'txt-ruling',
                  type: 'info',
                  title: 'The Case',
                  text: 'Benjamin Gitlow argued that no harmful action followed the publication of the manifesto; therefore, the statute was punishing him unfairly. Despite his defense, the trial court, along with the Appellate Division and the New York Court of Appeals, affirmed the ruling. Gitlow’s decision to challenge the case before the U.S. Supreme Court led to a landmark decision that affirmed the boundaries of the First Amendment on the state level.'
                },
                {
                    id: 'img-ruling-1',
                    type: 'image',
                    title: 'Mugshot',
                    src: '/images/gitlow/2-1.png',
                    caption: 'Benjamin Gitlow Mugshot 1919'
                },
                {
                  id: 'mcq-ruling',
                  type: 'question',
                  title: 'Dissent',
                  question: 'What was the significance of Benjamin Gitlow’s case when it reached the U.S. Supreme Court?',
                  options: ['It overturned all state-level restrictions on speech', 'It legalized the immediate overthrow of the government', 'It led to a landmark decision affirming the boundaries of the First Amendment on the state level', 'It had no impact on First Amendment interpretations'],
                  correctAnswer: 'It led to a landmark decision affirming the boundaries of the First Amendment on the state level'
                }
              ]
            },
            {
              id: 'court-2',
              label: 'The Ruling',
              x: 87.5, y: 50, // Centered on p1
              image: 'Gavel',
              destinationTitle: 'Supreme Court Ruling',
              items: [
                {
                  id: 'txt-ruling',
                  type: 'info',
                  title: 'The Verdict',
                  text: 'Justice Edward Sanford delivered the majority opinion, defending the Criminal Anarchy Law’s ability to prohibit violent speech. He cited both Schenck v. United States and Abrams v. United States to contend that speech that threatened the government’s own existence could be punished. The Supreme Court was not persuaded that Gitlow’s actions were too insignificant to have an impact.'
                },
                {
                  id: 'img-ruling-2',
                  type: 'image',
                  title: 'Justice Edward Sanford',
                  src: '/images/gitlow/2-2.png',
                  caption: 'Justice Edward Sanford who delivered the majority opinion in Gitlow v. New York 1919'
                },
                {
                  id: 'mcq-ruling',
                  type: 'question',
                  title: 'Rationale',
                  question: 'What was the rationale behind the Supreme Court’s decision in Gitlow v. New York?',
                  options: ['All speech, regardless of content, is completely protected under the First Amendment', 'Speech that threatens the government’s existence can be punished, citing precedent from Schenck v. United States and Abrams v. United States', 'Gitlow’s actions were deemed too insignificant to regulate', 'The Court ruled that the Criminal Anarchy Law was unconstitutional in all cases'],
                  correctAnswer: 'Speech that threatens the government’s existence can be punished, citing precedent from Schenck v. United States and Abrams v. United States'
                }
              ]
            },
            {
              id: 'court-3',
              label: 'Speech Restriction Justification',
              x: 40, y: 20, // Centered on p1
              image: 'Gavel',
              destinationTitle: 'Bad Tendency Test',
              items: [
                {
                  id: 'txt-ruling-3',
                  type: 'info',
                  title: 'Bad Tendency',
                  text: 'By using the “bad tendency” test, the Court was able to justify the restriction on speech that had the potential to encourage illegal actions.'
                },
                {
                  id: 'img-ruling-3',
                  type: 'image',
                  title: 'Bad Tendency Definition',
                  src: '/images/gitlow/2-3.png',
                  caption: 'Bad Tendency Test Definition'
                },
                {
                  id: 'mcq-ruling-3',
                  type: 'question',
                  title: 'Legal Test',
                  question: 'What legal test did the Supreme Court use in Gitlow v. New York to justify restricting speech?',
                  options: ['Bad Tendency Test, which allowed restriction of speech that could potentially encourage illegal actions', 'Clear and Present Danger Test', 'Imminent Threat Test', 'Strict Scrutiny Test'],
                  correctAnswer: 'Bad Tendency Test, which allowed restriction of speech that could potentially encourage illegal actions'
                }
              ]
            },
            {
              id: 'court-4',
              label: 'The Dissent',
              x: 60, y: 20, // Centered on p1
              image: 'Gavel',
              destinationTitle: 'Dissenting Opinions',
              items: [
                {
                  id: 'txt-ruling',
                  type: 'info',
                  title: 'Dissenting Justices',
                  text: 'Justice Oliver Wendell Holmes and Justice Louis Brandeis believed that Gitlow’s actions did not meet the “clear and present danger” test established in Schenck v. United States. Holmes believed that Gitlow’s manifesto and actions were too abstract and not nearly widespread enough to trigger immediate lawless action. He believed there was not enough evidence to convict Gitlow, and that a conviction would set a negative precedent regarding the extent of the government’s power. After all, the First Amendment is supposed to protect speech, regardless of how unpopular or even controversial it is.'
                },
                {
                  id: 'img-ruling-4',
                  type: 'image',
                  title: 'Justice Oliver Wendell Holmes',
                  src: '/images/gitlow/2-4.png',
                  caption: 'Justice Oliver Wendell Holmes who dissented in Gitlow v. New York 1919'
                },
                {
                  id: 'mcq-ruling',
                  type: 'question',
                  title: 'Dissenting Justification',
                  question: 'Why did Justices Holmes and Brandeis dissent in Gitlow v. New York?',
                  options: ['They agreed that Gitlow’s speech posed an immediate threat to the government', 'They believed the government should have broader powers to restrict speech', 'They argued Gitlow’s actions did not meet the “clear and present danger” standard, as the speech was too abstract and limited to justify conviction', 'They thought the Criminal Anarchy Law was unrelated to the case'],
                  correctAnswer: 'They argued Gitlow’s actions did not meet the “clear and present danger” standard, as the speech was too abstract and limited to justify conviction'
                }
              ]
            }
          ]
        }
      },
      // --- 5C. Significance ---
      {
        id: 'git-3',
        label: 'Impact',
        x: 80, y: 50, // Centered on p3
        image: 'Award',
        destinationTitle: 'Legacy',
        subRoom: {
          id: 'sub-git-sig',
          title: 'Modern Impact',
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
              id: 'impact-1',
              label: 'First Amendment',
              x: 27.5, y: 30, // Centered on p1
              image: 'BookOpen',
              destinationTitle: 'First Amendment Incorporation',
              items: [
                {
                  id: 'txt-incorp',
                  type: 'info',
                  title: 'Selective Incorporation',
                  text: 'Gitlow v. New York was the first Supreme Court case to apply the First Amendment’s free speech protections to state governments. It also held, through selective incorporation, that the Due Process Clause of the Fourteenth Amendment extended fundamental rights, like freedom of speech, to state actions, unlike the previous restriction to the federal government.'
                },
                {
                  id: 'img-incorp',
                  type: 'image',
                  title: 'The Court',
                  src: '/images/gitlow/3-1.png',
                  caption: 'Supreme Court Building 1920s'
                },
                {
                  id: 'mcq-incorp',
                  type: 'question',
                  title: 'Outcome',
                  question: 'What was a landmark outcome of Gitlow v. New York?',
                  options: ['It limited the First Amendment’s protections to the federal government only', 'It abolished the Due Process Clause of the Fourteenth Amendment', 'It ruled that states had unlimited authority to restrict speech', 'It applied the First Amendment’s free speech protections to state governments through selective incorporation of the Fourteenth Amendment'],
                  correctAnswer: 'It applied the First Amendment’s free speech protections to state governments through selective incorporation of the Fourteenth Amendment'
                }
              ]
            },
            {
              id: 'incorp-2',
              label: 'Raised Standards',
              x: 72.5, y: 25, // Centered on p1
              image: 'BookOpen',
              destinationTitle: 'Civil Liberties Standards',
              items: [
                {
                  id: 'txt-incorp-2',
                  type: 'info',
                  title: 'Raised Standards',
                  text: 'While Gitlow lost, the Supreme Court case led to the establishment of various standards for civil liberties in the states, allowing for the application of the First Amendment’s protections to the states. His case also triggered conversation about the restrictions on speech, regardless of how radical it is.'
                },
                {
                  id: 'img-incorp-2',
                  type: 'image',
                  title: 'Gitlow V. New York',
                  src: '/images/gitlow/3-2.png',
                  caption: 'Newspaper Headline on Gitlow v. New York, a Groundbreaking Supreme Court Decision, 1925'
                },
                {
                  id: 'mcq-incorp-2',
                  type: 'question',
                  title: 'Positive Precedents',
                  question: 'Even though Benjamin Gitlow lost his case, what broader impact did Gitlow v. New York have?',
                  options: ['It limited First Amendment protections solely to federal actions', 'It immediately legalized all forms of radical speech without limitation', 'It had no lasting effect on civil liberties jurisprudence', 'It established standards for applying civil liberties, including free speech, to state governments and sparked debate on restrictions of radical speech'],
                  correctAnswer: 'It established standards for applying civil liberties, including free speech, to state governments and sparked debate on restrictions of radical speech'
                }
              ]
            },
            {
              id: 'incorp-3',
              label: 'Test Abolishment',
              x: 35, y: 70, // Centered on p1
              image: 'BookOpen',
              destinationTitle: 'Evolving Speech Tests',
              items: [
                {
                  id: 'txt-incorp-3',
                  type: 'info',
                  title: 'Speech Tests Evolve',
                  text: 'In the years to follow, Supreme Court decisions rejected the “bad tendency” test used in Gitlow v. New York and focused on Holmes’s “clear and present danger” alongside the “imminent lawless action” test.'
                },
                {
                  id: 'img-incorp-3',
                  type: 'image',
                  title: 'Free Speech Test Evolution',
                  src: '/images/gitlow/3-3.png',
                  caption: 'Modern Diagram of the Evolution of Free Speech Legal Tests'
                },
                {
                  id: 'mcq-incorp-3',
                  type: 'question',
                  title: 'Constitution',
                  question: 'How did Supreme Court standards for restricting speech evolve after Gitlow v. New York?',
                  options: ['The “bad tendency” test continued to dominate all cases indefinitely', 'All restrictions on speech were immediately removed', 'Courts shifted to Holmes’s “clear and present danger” standard and the “imminent lawless action” test, moving away from the “bad tendency” test', 'The “bad tendency” test was reinforced as the primary standard'],
                  correctAnswer: 'Courts shifted to Holmes’s “clear and present danger” standard and the “imminent lawless action” test, moving away from the “bad tendency” test'
                }
              ]
            },
            {
              id: 'incorp-4',
              label: 'Improved Rights',
              x: 50, y: 60, // Centered on p1
              image: 'BookOpen',
              destinationTitle: 'Modern Protections',
              items: [
                {
                  id: 'txt-incorp-4',
                  type: 'info',
                  title: 'Modern Protections',
                  text: 'Today, Gitlow’s actions would almost certainly be protected under the states’ adoption of the First Amendment. However, his case marked the start of extending constitutional liberties past the federal government, to the states.'
                },
                {
                  id: 'img-incorp-4',
                  type: 'image',
                  title: 'First Amendment',
                  src: "/images/gitlow/3-4.png",
                  caption: "Infographic of All Rights Protected by the First Amendment"
                },
                {
                  id: 'mcq-incorp-4',
                  type: 'question',
                  title: 'Modern Implications',
                  question: 'How would Benjamin Gitlow’s actions likely be treated under today’s legal standards?',
                  options: ['They would still be criminalized under the “bad tendency” test', 'They would almost certainly be protected under state-level First Amendment protections, reflecting the extension of constitutional liberties to the states', 'They would be punished more harshly than in 1925', 'They would not be considered speech at all'],
                  correctAnswer: 'They would almost certainly be protected under state-level First Amendment protections, reflecting the extension of constitutional liberties to the states'
                }
              ]
            },
          ]
        }
      }
    ]
  };

export default gitlow;