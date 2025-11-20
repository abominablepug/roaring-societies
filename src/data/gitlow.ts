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
          backgroundImage: "/images/museumBackground.png",
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
          backgroundImage: "/images/museumBackground.png",
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
          backgroundImage: "/images/museumBackground.png",
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
  };

export default gitlow;