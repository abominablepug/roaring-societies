import type { Topic } from './types';
import greatMigration from './data/greatMigration';
import racialTension from './data/racialTension';
import aclu from './data/aclu';
import xenoImm from './data/xenoImm';
import gitlow from './data/gitlow';
import prohibition from './data/prohibition';

export const TOPICS: Topic[] = [

  greatMigration,
  racialTension,
  aclu,
  xenoImm,
  gitlow,
  prohibition,
  {
    id: "eqs",
    title: "EQ Answers",
    backgroundImage: "/images/museumBackground.png",
    platforms: [
      { id: "sp-1", x: 17.5, y: 70, width: 15},
      { id: "sp-2", x: 67.5, y: 70, width: 15}
    ],
    doors: [
      {
        id: 'eq1',
        label: "EQ Answer 1",
        x: 25, y: 70,
        image: 'Info',
        destinationTitle: "A1",
        items: [
          {
            id: 'eq1',
            type: 'info',
            title: 'A1 Answer',
            text: 'The society of the Roaring Twenties reveals how expanding individual freedoms can clash with efforts to maintain the common good. On one hand, economic prosperity, consumer culture, and new social freedoms for some showed a growing emphasis on personal expression and individual rights. Innovations like mass entertainment, automobiles, and advertising celebrated the idea that citizens should pursue their own desires without heavy government interference. This shift showed how civic ideals of liberty and opportunity encouraged individuals to shape their identities and lifestyles more freely than ever before.\n\tHowever, the same decade also demonstrated the limits and challenges of balancing individual needs with societal stability. The rise of nativism, Prohibition, and the resurgence of the Ku Klux Klan reflected attempts by government institutions and certain civic groups to impose a narrow vision of morality and “Americanism” in the name of protecting the common good. These efforts often restricted freedoms and targeted marginalized communities, revealing deep tensions within American democracy. Ultimately, the Roaring Twenties showed that when rapid cultural change collides with fears about social order, the interaction between citizens, ideals, and institutions becomes a contested struggle over whose needs prevail.'
          }
        ]
      },
      {
        id: 'eq2',
        label: "EQ Answer 2",
        x: 75, y: 70,
        image: 'Info',
        destinationTitle: "C1",
        items: [
          {
            id: 'eq2',
            type: 'info',
            title: 'C1 Answer',
            text: 'The Roaring Twenties illustrates how individuals and societies use economic reasoning to navigate limited resources during times of rapid growth and change. As consumer culture expanded, many Americans made choices based on new ideas of convenience, status, and opportunity. Purchasing automobiles, radios, and household appliances required weighing costs against benefits, demonstrating how individuals applied economic reasoning to improve their quality of life. Businesses and investors also made decisions based on predictions of continued prosperity, directing resources toward mass production, stock speculation, and urban expansion.\n\tHowever, the decade also reveals the consequences of flawed or overly optimistic economic reasoning. Many citizens bought stocks on margin, ignoring long-term risk in favor of short-term gain, while companies overproduced goods without considering declining demand. These decisions contributed to widening wealth gaps and ultimately to the stock market crash of 1929. For society, the result was massive unemployment, failing banks, and a collapse of trust in economic institutions. The Roaring Twenties shows that economic choices, even those made during boom times, carry significant consequences, demonstrating the importance of balancing ambition with responsible use of scarce resources.'
          }
        ]
      },
    ]
  },
  {
    id: 'bibliography',
    title: 'Bibliography',
    isBibliography: true,
  }
];