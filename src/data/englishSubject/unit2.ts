import { BookChapter } from '../../types/math';

export const unit2EnglishSubject: BookChapter = {
  id: 'en_sub_unit_2',
  chapterNumber: 2,
  romanNumeral: 'II',
  title: 'Unit 2: Humor & Domestic Eccentricity',
  subtitle: "Prose: The Night the Ghost Got In | Poem: The Grumble Family | Supplementary: Zigzag | Grammar: Prepositions",
  synopsis:
    'Complete Samacheer Kalvi SSLC English Unit 2 Study Guide. Contains James Thurber’s classic domestic farce ‘The Night the Ghost Got In’, Lucy Maud Montgomery’s didactic poem ‘The Grumble Family’, Asha Nehemiah’s delightful comedy ‘Zigzag’, and formal grammar on Prepositions and Prepositional Phrases with full-mark rubrics.',
  prerequisites: ['Basic Sentence Structures', 'Parts of Speech: Prepositions'],
  sections: [
    {
      id: 'en_sub_sec_2_1',
      sectionNumber: '2.1',
      title: 'Prose - The Night the Ghost Got In (James Thurber)',
      introText:
        'A masterclass in comic timing and cascading misunderstanding. James Thurber recounts a night of utter confusion when imaginary footsteps cause his mother to summon the police and his grandfather to shoot an officer.',
      items: [
        {
          id: 'en_sub_item_2_1_vocab',
          type: 'definition',
          number: '2.1.1',
          title: 'Unit 2 Core Vocabulary, Synonyms & Antonyms',
          statementLatex:
            '\\begin{array}{|l|l|l|l|} \\hline \\textbf{Word} & \\textbf{Contextual Meaning} & \\textbf{Synonym} & \\textbf{Antonym} \\\\ \\hline \\text{Hullabaloo} & \\text{A lot of loud noise or commotion} & \\text{Uproar / Tumult} & \\text{Calm / Silence} \\\\ \\text{Indignant} & \\text{Angered by perceived injustice} & \\text{Resentful / Fuming} & \\text{Pleased / Serene} \\\\ \\text{Deserter} & \\text{One who abandons military duty} & \\text{Fugitive / Renegade} & \\text{Loyalist / Patriot} \\\\ \\text{Rafters} & \\text{Sloping internal roof beams} & \\text{Beams / Joists} & \\text{Floor / Foundation} \\\\ \\text{Bodily} & \\text{With the entire weight of the body} & \\text{Physically / Fully} & \\text{Partially / Mildly} \\\\ \\hline \\end{array}',
          statementText:
            'Frequent questions from Government Public Exams testing humorous and archaic idioms.'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_2_1',
          number: 'Unit 2 - Synonym MCQ',
          title: 'Synonym of Hullabaloo',
          difficulty: 'Foundational',
          statementLatex: '\\text{There was a tremendous } \\mathbf{\\text{hullabaloo}}\\text{ in the whole house. Choose the correct synonym.}',
          description: 'Identify the exact contextual synonym.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What kind of sound was echoing throughout the house?',
              hint: 'A noisy commotion or uproar.',
              expectedInsight: 'Hullabaloo signifies a great deal of loud noise and confused excitement.',
              latexIntermediate: '\\text{Hullabaloo} \\implies \\text{Loud uproar / commotion}',
              options: ['A great uproar / commotion', 'Dead silence', 'Delicate music'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: A great uproar / commotion}}',
          fullSolutionWalkthrough:
            'The word "hullabaloo" means a commotion or a loud, confused noise resulting from excitement or panic.'
        },
        {
          id: 'en_sub_prob_2_2',
          number: 'Unit 2 - Short Answer (2 Marks)',
          title: 'Why did the mother throw a shoe through the neighbor’s window?',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Why did Thurber’s mother throw a shoe through Mr. Bodwell’s window? [2 Marks]}',
          description: 'Reason for the shoe incident.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Where was the telephone located and why couldn’t she use it?',
              hint: 'The phone was downstairs where burglars were suspected; she wanted the neighbor to call police.',
              expectedInsight: 'She wanted the neighbors to call the police since the phone was downstairs.',
              latexIntermediate: '\\text{Burglars suspected downstairs} \\implies \\text{Shoe thrown to wake Bodwell to call police}',
              options: ['To wake them up so they would call the police, as the house phone was downstairs near the suspected burglars', 'Out of personal enmity with Mr. Bodwell'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Phone downstairs near burglars (1 Mark) + Waking neighbors to call police (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'The mother suspected that burglars were downstairs in the dining room. Since the only telephone in the house was downstairs, she could not access it safely. Therefore, she hurled a shoe through the window of their neighbor, Mr. Bodwell, to awaken him so he would contact the police.'
        },
        {
          id: 'en_sub_prob_2_3',
          number: 'Unit 2 - Short Answer (2 Marks)',
          title: 'How did the grandfather react to the police in the attic?',
          difficulty: 'Intermediate',
          statementLatex: '\\text{What did the grandfather do when the policemen entered the attic? [2 Marks]}',
          description: 'Grandfather’s Civil War delusion.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Whom did the grandfather mistake the policemen for?',
              hint: 'Deserters from General Meade’s army during the Civil War.',
              expectedInsight: 'He believed they were deserters from the army and fired at officer Bierce.',
              latexIntermediate: '\\text{Mistook police for Civil War deserters} + \\text{Grabbed gun and shot officer in shoulder}',
              options: ['He mistook them for Meade’s deserters, snatched a gun, and shot a policeman in the shoulder', 'He welcomed them warmly and offered tea'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Mistook for Meade’s deserters (1 Mark) + Shot a policeman in the shoulder (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'Grandfather was trapped in a historical delusion that the American Civil War was still raging. When the flashlight-wielding policemen barged into the attic, he mistook them for cowardly deserters from General Meade’s army. He leaped from bed, seized an officer’s gun, and shot Patrolman Bierce in the shoulder.'
        },
        {
          id: 'en_sub_prob_2_4',
          number: 'Unit 2 - Paragraph Question (5 Marks)',
          title: 'Describe the Comic Turmoil in "The Night the Ghost Got In"',
          difficulty: 'Advanced',
          statementLatex: '\\text{Narrate the chaotic events that unfolded on the night the ghost got in. [5 Marks]}',
          description: 'Standard 5-mark Sura Guide essay with Title, Author, Subheadings, Quotes, and Humor Analysis.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Structure the essay chronologically: Footsteps -> Shoe -> Police invasion -> Grandfather -> Morning resolution.',
              hint: 'Focus on comic misunderstanding.',
              expectedInsight: 'Every rational response created higher disorder.',
              latexIntermediate: '\\text{Rubric: Title/Author (1) + Mysterious Footsteps (1) + Shoe Episode (1) + Police/Grandfather (1) + Conclusion (1) = 5 Marks}',
              options: ['Complete 5-mark Sura humorous narrative essay', 'Short two-line note'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Score: 5/5 Marks (State Board Full Evaluation Standard)}}',
          fullSolutionWalkthrough:
            'TITLE: THE NIGHT THE GHOST GOT IN\nAUTHOR: James Thurber\nGENRE: Humorous Reminiscence / Farce\n\nOUTLINE:\nIntroduction – Mysterious Footsteps – Mother’s Dramatic Action – Police Arrival – Chaotic Search – Grandfather’s Attack – Morning Revelation – Conclusion.\n\n1. Introduction:\nJames Thurber’s "The Night the Ghost Got In" is a satirical masterpiece that illustrates how imagination and panic can transform an ordinary incident into utter catastrophe.\n\n2. The Mysterious Footsteps:\nAt about 1:15 AM, the narrator heard rhythmic footsteps circling the dining room table downstairs. Thinking it was a burglar (or possibly a ghost), he woke his brother Herman. When the noise stopped abruptly, the brothers panicked and slammed doors shut.\n\n3. The Shoe Incident:\nAroused by the noise, their mother sprang out of bed convinced that burglars had invaded. Because the telephone was downstairs near the intruders, she impulsively flung a shoe through the closed glass window of her neighbor Mr. Bodwell, screaming, "Burglars! Burglars!" Bodwell eventually understood and phoned the police.\n\n4. The Police Invasion:\n"When panic takes the wheel, common sense jumps out the window."\nA large squad of policemen, reporters, and patrol wagons surrounded the house. Finding the doors locked, the police broke down the front door and ransacked every closet, drawer, and table, overturning furniture in search of imaginary robbers.\n\n5. Grandfather’s Heroic Charge:\nAttracted by the uproar, the grandfather in the attic awoke. Believing that the policemen were deserters from General Meade’s army fleeing battle, he sprang from bed, roared with fury, struck two officers, seized a gun, and shot Patrolman Bierce in the shoulder before retiring back to bed.\n\n6. The Morning After:\nNext morning at breakfast, grandfather casually inquired why so many policemen had been running around in the house the previous night, revealing he had only gone downstairs at 1:15 AM to drink a glass of water!\n\nMORAL: "Imagination without reason turns shadows into monsters."'
        }
      ]
    },
    {
      id: 'en_sub_sec_2_2',
      sectionNumber: '2.2',
      title: 'Poem - The Grumble Family (Lucy Maud Montgomery)',
      introText:
        'A didactic poem warning readers against the infectious habit of chronic complaining. Describes the residents of "Complaining Street" in the city of "Never-Are-Pleased".',
      items: [
        {
          id: 'en_sub_item_2_2_analysis',
          type: 'theorem',
          number: '2.2.1',
          title: 'Poetic Techniques & Satirical Elements',
          statementLatex:
            '\\begin{array}{|l|l|} \\hline \\textbf{Poetic Feature} & \\textbf{Illustration from Poem} \\\\ \\hline \\text{Rhyme Scheme} & \\text{aabb / ccdd (Strict rhyming couplets)} \\\\ \\text{Personification} & \\text{"The River of Discontent", "Complaining Street"} \\\\ \\text{Alliteration} & \\text{"they growl at the rain and they growl at the sun"} \\\\ \\text{Satire} & \\text{Mocking habitual fault-finders who complain even about good fortune} \\\\ \\hline \\end{array}',
          statementText:
            'The poem emphasizes the psychological principle that constant negativity is contagious.'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_2_5',
          number: 'Unit 2 - Poetic Appreciation (2 Marks)',
          title: 'Where does the Grumble Family live?',
          difficulty: 'Foundational',
          statementLatex: '\\text{Where does the Grumble family reside according to the poet? [2 Marks]}',
          description: 'Allegorical geography in poem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Identify the imaginary street and city mentioned in stanza 1.',
              hint: 'Complaining Street in Never-Are-Pleased beside River Discontent.',
              expectedInsight: 'Complaining Street, City of Never-Are-Pleased, River of Discontent.',
              latexIntermediate: '\\text{Street} = \\text{Complaining}, \\quad \\text{City} = \\text{Never-Are-Pleased}',
              options: ['On Complaining Street, in the city of Never-Are-Pleased, beside the River of Discontent', 'On Sunshine Avenue in London'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Complaining Street (1 Mark) + City of Never-Are-Pleased / River Discontent (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'The Grumble Family resides on "Complaining Street", in the mythical city called "Never-Are-Pleased", situated alongside the gloomy "River of Discontent".'
        },
        {
          id: 'en_sub_prob_2_6',
          number: 'Unit 2 - Poem Paragraph (5 Marks)',
          title: 'Message and Moral of "The Grumble Family"',
          difficulty: 'Advanced',
          statementLatex: '\\text{What warning does L.M. Montgomery offer against grumbling? [5 Marks]}',
          description: 'Complete 5-mark Sura Guide analytical poem essay.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Cover: Characteristics of the family, danger of contagion, poet\'s advice.',
              hint: 'Learn to smile when things go wrong and stay off Complaining Street.',
              expectedInsight: 'Keep feet off Complaining Street and cherish a grateful mindset.',
              latexIntermediate: '\\text{Rubric: Characteristics (2) + Danger of Contagion (1.5) + Poet’s Solution (1.5) = 5 Marks}',
              options: ['Full 5-mark analytical essay with moral', 'Short rhyming summary'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Score: 5/5 Marks (Board Examination Centum Format)}}',
          fullSolutionWalkthrough:
            'TITLE: THE GRUMBLE FAMILY\nPOET: Lucy Maud Montgomery\nTHEME: Gratitude and contentment versus the toxic habit of chronic complaining.\n\nOUTLINE:\nIntroduction – Residence of Discontent – The Habit of Fault-Finding – The Danger of Contagion – Poet’s Golden Rule – Conclusion & Moral.\n\n1. Introduction:\nLucy Maud Montgomery’s poem "The Grumble Family" is a delightful yet sharp didactic poem highlighting how perpetual fault-finding poisons human happiness.\n\n2. The Chronic Fault-Finders:\nThe Grumble family lives on Complaining Street in the city of Never-Are-Pleased. Nothing ever satisfies them. They growl at the rain and they growl at the sun. If cold, they complain; if warm, they scold. Even when fortune smiles upon them, they growl that they have nothing left to grumble about!\n\n3. The Peril of Contagion:\n"Negativity is an invisible contagion that infects the unsuspecting."\nThe poet warns that the worst danger of associating with grumblers is that anyone who stays in their company long enough unconsciously catches their terrible habit. Before knowing it, an innocent person is adopted into the Grumble family and loses all peace of mind.\n\n4. The Poet’s Wise Counsel:\nThe poet gives practical advice: never set foot into Complaining Street, never wander beside the River of Discontent, and never grumble at whatever happens. We must learn to sing and smile even when everything seems to go wrong.\n\n5. Conclusion & Moral:\nMORAL: "A grateful heart sees a blessing in every storm, while a grumbling spirit finds a fault in paradise."'
        }
      ]
    },
    {
      id: 'en_sub_sec_2_3',
      sectionNumber: '2.3',
      title: 'Supplementary - Zigzag (Asha Nehemiah)',
      introText:
        'A hilarious story about an unusual African bird named Zigzag, gifted to Dr. Krishnan’s family by his globetrotting friend Dr. Somu. The bird causes domestic bedlam before miraculously transforming into an efficient clinic assistant.',
      items: [
        {
          id: 'en_sub_item_2_3_chars',
          type: 'definition',
          number: '2.3.1',
          title: 'Character Sketch & Plot Points',
          statementLatex:
            '\\begin{array}{|l|l|} \\hline \\textbf{Character} & \\textbf{Role & Quirk} \\\\ \\hline \\text{Dr. Ashok Krishnan} & \\text{Child specialist (pediatrician) with a noisy clinic} \\\\ \\text{Mrs. Krishnan} & \\text{Talented artist preparing for her maiden art exhibition} \\\\ \\text{Dr. Somu} & \\text{Eccentric globetrotter who deposits bizarre pets} \\\\ \\text{Zigzag (Ziggy)} & \\text{African multilingual bird (speaks 21 languages, snores deafeningly)} \\\\ \\text{Visu} & \\text{Dr. Somu’s loyal cook who brings Zigzag} \\\\ \\hline \\end{array}',
          statementText:
            'Zigzag teaches us that judging by appearances or first impressions is often misleading.'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_2_7',
          number: 'Unit 2 - Supplementary Short Answer (2 Marks)',
          title: 'Why did Zigzag snore so loudly in the house?',
          difficulty: 'Intermediate',
          statementLatex: '\\text{What caused Zigzag to fall asleep and snore thunderously? [2 Marks]}',
          description: 'Zigzag’s peculiar sleep habits.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What did Zigzag do with the fruit and nuts given to him?',
              hint: 'He deposited them on the chandelier and ceiling fan, then perched on curtain rod and slept.',
              expectedInsight: 'He tucked fruit onto chandelier blades and slept heavily, snoring like a jet engine.',
              latexIntermediate: '\\text{Deposited fruit on chandelier} \\implies \\text{Fell into deep thunderous slumber}',
              options: ['He placed fruit and nuts on the fan blades, perched on the curtain rod, and went into a deep slumber', 'He was sick with an avian virus'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Perched on curtain rod after hanging fruit (1 Mark) + Slept and snored like an engine (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'Zigzag deposited the walnuts and papaya slices given by the children onto the blades of the ceiling fan and the chandelier. Refusing to speak a word, he perched atop the curtain rod, closed his eyelids, and drifted into a deep sleep, producing ear-splitting snores resembling a jet engine.'
        },
        {
          id: 'en_sub_prob_2_8',
          number: 'Unit 2 - Supplementary Paragraph (5 Marks)',
          title: 'How Zigzag Saved Mrs. Krishnan’s Painting and Solved Clinic Chaos',
          difficulty: 'Advanced',
          statementLatex: '\\text{Describe how Zigzag transformed from a domestic nuisance into an invaluable asset. [5 Marks]}',
          description: 'Sura Guide standard narrative structure.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Trace the progression: Arrival -> Disaster on painting -> Clinic transformation -> Art critic sale.',
              hint: 'Mrs. Jhunjhunwala buys the papaya-stained painting for Rs. 5,000.',
              expectedInsight: 'The painting became a masterpiece and the bird calmed unruly children.',
              latexIntermediate: '\\text{Rubric: Introduction (1) + Domestic Disaster (1) + Clinic Calm (1) + Art Triumph (1) + Moral (1) = 5 Marks}',
              options: ['Full 5-mark narrative essay', 'Brief plot summary'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Score: 5/5 Marks (Government Evaluation Standard)}}',
          fullSolutionWalkthrough:
            'TITLE: ZIGZAG\nAUTHOR: Asha Nehemiah\nGENRE: Humorous Fiction\n\nOUTLINE:\nIntroduction – Arrival of Zigzag – The Snoring Nightmare & Ruined Painting – Clinic Transformation – The Masterpiece Sale – Conclusion & Moral.\n\n1. Introduction:\nAsha Nehemiah’s "Zigzag" is a hilarious short story illustrating how misunderstood talents can shine brightly when placed in the right environment.\n\n2. The Domestic Disaster:\nDr. Somu sent his pet bird Zigzag to stay with Dr. Krishnan’s family. Claiming the bird could speak twenty-one languages, Dr. Somu promised endless joy. Instead, Zigzag remained utterly silent, transferred slices of papaya and walnuts onto the ceiling fan blades, and fell asleep, snoring like an express train. When the maid switched on the fan, sticky orange papaya flew across the room and splattered Mrs. Krishnan’s prized canvas painting, "Sunset at Marina".\n\n3. The Miracle at the Clinic:\nDesperate to save his wife’s sanity, Dr. Krishnan took Zigzag to his pediatric clinic. Immediately, a miraculous change occurred! Instead of sleeping, Zigzag perched high on the reception desk and commanded the crying children like an experienced captain. He spoke politely in French, Tamil, and English, entertained crying babies, and restored pin-drop silence in the usually noisy clinic.\n\n4. The Grand Art Sale:\nMeanwhile, art critic Mrs. Jhunjhunwala visited Mrs. Krishnan’s studio. Seeing the papaya-splattered painting, she was ecstatic, praising the "deliberate new artistic technique" and purchased it on the spot for Rs. 5,000!\n\n5. Conclusion & Moral:\nRealizing that Zigzag was a gem when given meaningful work, the Krishnan family happily invited Zigzag to stay with them permanently.\nMORAL: "Do not judge a book by its cover; every creature has a unique calling."'
        }
      ]
    },
    {
      id: 'en_sub_sec_2_4',
      sectionNumber: '2.4',
      title: 'Grammar - Prepositions & Prepositional Phrases',
      introText:
        'Rules, spatial/temporal relationships, and compound prepositional idioms frequently asked in SSLC Board Examination sentence completion.',
      items: [
        {
          id: 'en_sub_item_2_4_rules',
          type: 'definition',
          number: '2.4.1',
          title: 'Classification of Prepositions & Compound Phrases',
          statementLatex:
            '\\begin{array}{|l|l|l|} \\hline \\textbf{Prepositional Type} & \\textbf{Words / Phrases} & \\textbf{SSLC Board Standard Example} \\\\ \\hline \\text{Simple Prepositions} & \\text{in, on, at, by, for, from, with} & \\text{The meeting starts at 10:00 AM.} \\\\ \\text{Compound Prepositions} & \\text{in front of, on behalf of, according to} & \\text{He stood in front of the audience.} \\\\ \\text{Cause / Reason} & \\text{because of, due to, on account of} & \\text{The match was cancelled due to rain.} \\\\ \\text{Concession / Contrast} & \\text{in spite of, despite} & \\text{In spite of his poverty, he is honest.} \\\\ \\hline \\end{array}',
          statementText:
            'Note: "Despite" never takes the preposition "of". Write "despite his poverty" or "in spite of his poverty".'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_2_9',
          number: 'Unit 2 - Preposition Board Question 1',
          title: 'Preposition of Concession',
          difficulty: 'Foundational',
          statementLatex: '\\text{\\underline{\\hspace{2cm}} his hard work, he could not secure the first rank. (Fill in with a compound preposition)}',
          description: 'Identify contrast/concession idiom.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Which prepositional phrase denotes "even though" or contrast?',
              hint: 'In spite of / Despite.',
              expectedInsight: '"In spite of" expresses concession.',
              latexIntermediate: '\\text{Hard work (positive)} \\leftrightarrow \\text{Not securing rank (negative)} \\implies \\text{In spite of}',
              options: ['In spite of', 'Because of', 'In addition to'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: In spite of}}',
          fullSolutionWalkthrough:
            '"In spite of" shows that something occurred contrary to expectation: "In spite of his hard work, he could not secure the first rank."'
        }
      ]
    }
  ]
};
