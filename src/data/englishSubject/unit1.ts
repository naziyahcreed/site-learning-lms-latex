import { BookChapter } from '../../types/math';

export const unit1EnglishSubject: BookChapter = {
  id: 'en_sub_unit_1',
  chapterNumber: 1,
  romanNumeral: 'I',
  title: 'Unit 1: Exploration & Perseverance',
  subtitle: "Prose: His First Flight | Poem: Life | Supplementary: The Tempest | Grammar: Modals",
  synopsis:
    'Complete Samacheer Kalvi SSLC English Unit 1 Study Guide. Contains Liam O’Flaherty’s inspirational story of the fledgling seagull, Henry Van Dyke’s immortal philosophical sonnet ‘Life’, William Shakespeare’s classic romance ‘The Tempest’, and formal grammar rules for Modal Auxiliaries and Semi-Modals with full-mark rubrics.',
  prerequisites: ['Basic Parts of Speech', 'Auxiliary Verbs', 'Poetic Forms (Sonnet)'],
  sections: [
    {
      id: 'en_sub_sec_1_1',
      sectionNumber: '1.1',
      title: "Prose - His First Flight (Liam O'Flaherty)",
      introText:
        "The story of a timid young seagull who learns that fear is conquered only when necessity forces us to spread our wings. Essential for 1-mark vocabulary, 2-mark short answers, and 5-mark paragraph questions.",
      items: [
        {
          id: 'en_sub_item_1_1_vocab',
          type: 'definition',
          number: '1.1.1',
          title: 'Exhaustive Board Exam Vocabulary, Synonyms & Antonyms',
          statementLatex:
            '\\begin{array}{|l|l|l|l|} \\hline \\textbf{Word} & \\textbf{Contextual Meaning} & \\textbf{Synonym} & \\textbf{Antonym} \\\\ \\hline \\text{Ledge} & \\text{A narrow horizontal projection} & \\text{Ridge / Shelf} & \\text{Abyss / Chasm} \\\\ \\text{Muster} & \\text{To gather or summon up} & \\text{Assemble / Gather} & \\text{Disperse / Scatter} \\\\ \\text{Plunge} & \\text{A sudden and drastic dive} & \\text{Dive / Drop} & \\text{Ascend / Rise} \\\\ \\text{Monstrous} & \\text{Shocking, terrifying, abnormal} & \\text{Horrific / Huge} & \\text{Tiny / Pleasant} \\\\ \\text{Preening} & \\text{Cleaning feathers with beak} & \\text{Grooming / Cleaning} & \\text{Dirtying / Messing} \\\\ \\text{Whet} & \\text{To sharpen by rubbing} & \\text{Hone / Sharpen} & \\text{Blunt / Dull} \\\\ \\text{Beckoning} & \\text{Calling or gesturing to approach} & \\text{Signaling / Calling} & \\text{Dismissing / Repelling} \\\\ \\hline \\end{array}',
          statementText:
            'Key words frequently tested in the Government Public Examination Section I (Questions 1 to 6).'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_1_1',
          number: 'Unit 1 - Synonym MCQ',
          title: 'Synonym of Beckoning',
          difficulty: 'Foundational',
          statementLatex: '\\text{The mother seagull was } \\mathbf{\\text{beckoning}}\\text{ to him, calling shrilly. Choose the correct synonym.}',
          description: 'Identify the exact contextual synonym.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What gesture was the mother bird making towards the young one?',
              hint: 'She was signaling him to take the flight.',
              expectedInsight: 'Beckoning means signaling with hands or head to come near.',
              latexIntermediate: '\\text{Beckoning} \\implies \\text{Signaling or summoning}',
              options: ['Signaling / Calling to come closer', 'Ignoring completely', 'Punishing severely'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: Signaling / Calling to come closer}}',
          fullSolutionWalkthrough:
            'The word "beckon" means to make a gesture with the hand, arm, or head to encourage someone to come nearer or follow.'
        },
        {
          id: 'en_sub_prob_1_2',
          number: 'Unit 1 - Antonym MCQ',
          title: 'Antonym of Cowardice',
          difficulty: 'Foundational',
          statementLatex: '\\text{His parents scolded him for his } \\mathbf{\\text{cowardice}}\\text{. Choose the correct antonym.}',
          description: 'Identify the opposite of lack of bravery.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What is the opposite of being a coward?',
              hint: 'Courage or bravery.',
              expectedInsight: 'The antonym of cowardice is bravery or courage.',
              latexIntermediate: '\\text{Cowardice} \\iff \\neg(\\text{Bravery})',
              options: ['Bravery / Courage', 'Timidness', 'Fear'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: Bravery / Courage}}',
          fullSolutionWalkthrough:
            'Cowardice means lack of courage or bravery. Its opposite is bravery, courage, or valor.'
        },
        {
          id: 'en_sub_prob_1_3',
          number: 'Unit 1 - Short Answer (2 Marks)',
          title: 'Why was the young seagull afraid to fly?',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Why was the young seagull afraid to take his first flight? [2 Marks]}',
          description: 'Samacheer Kalvi Sura Guide key answer points.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State the two reasons for the bird’s fear.',
              hint: 'Vast sea below + lack of trust in his own wings.',
              expectedInsight: 'He looked at the vast sea and felt certain his wings would never support him.',
              latexIntermediate: '\\text{Marks: 1 for sea expanse + 1 for lack of confidence}',
              options: ['He lacked confidence that his wings would support his weight over the vast sea', 'His wings were broken by hunters'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Vast sea below (1 Mark) + Lack of trust in wings (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'The young seagull was afraid to fly because:\n1. He saw the vast expanse of the green sea stretched down miles beneath his ledge.\n2. He felt desperate and convinced that his small wings would never support his weight. Unlike his younger siblings who had shorter wings yet flew courageously, he was paralyzed by fear.'
        },
        {
          id: 'en_sub_prob_1_4',
          number: 'Unit 1 - Short Answer (2 Marks)',
          title: 'What did the parents do when the young seagull refused to fly?',
          difficulty: 'Intermediate',
          statementLatex: '\\text{How did the parents react when the fledgling refused to leave the ledge? [2 Marks]}',
          description: 'Parental tough love strategy.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'How did they discipline the young bird?',
              hint: 'Scolding, shrill calling, threatening to let him starve.',
              expectedInsight: 'They flew around calling shrilly and threatened starvation.',
              latexIntermediate: '\\text{Calling shrilly} + \\text{Threat of starvation}',
              options: ['They called shrilly, scolded him, and threatened to let him starve unless he flew', 'They abandoned him permanently to predators'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Calling shrilly and scolding (1 Mark) + Threatening starvation (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'When the young seagull refused to fly, his parents flew around him calling shrilly, upbraiding and scolding him. They warned and threatened that he would starve to death on his ledge unless he summoned up the courage to fly.'
        },
        {
          id: 'en_sub_prob_1_5',
          number: 'Unit 1 - Paragraph Question (5 Marks)',
          title: 'Describe the Role of the Mother Seagull in His First Flight',
          difficulty: 'Advanced',
          statementLatex: '\\text{Describe how the mother seagull cleverly compelled the fledgling to fly. [5 Marks]}',
          description: 'Centum-standard essay with Title, Outline, Subheadings, Quotes, and Moral.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Outline the key events of the mother’s strategy.',
              hint: 'Starvation for 24 hours, picking up fish, halting in mid-air, bird dives out of hunger.',
              expectedInsight: 'Hunger maddened him into taking the involuntary leap.',
              latexIntermediate: '\\text{Rubric: Title/Author (1) + Conflict (1) + Strategy (1) + Flight (1) + Moral (1) = 5 Marks}',
              options: ['Comprehensive 5-point Sura essay structure', 'Brief one-line summary'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Score: 5/5 Marks (State Board Full Evaluation Standard)}}',
          fullSolutionWalkthrough:
            'TITLE: HIS FIRST FLIGHT\nAUTHOR: Liam O\'Flaherty\nTHEME: Necessity is the mother of courage.\nCHARACTERS: The Young Seagull, Mother Seagull, Father Seagull, Siblings.\n\nOUTLINE:\nIntroduction – Paralyzing Fear – 24 Hours of Starvation – Mother’s Ingenious Trick – The Involuntary Dive – Soaring with Joy – Conclusion & Moral.\n\n1. Introduction:\nLiam O\'Flaherty’s "His First Flight" is a timeless allegorical narrative illustrating how maternal tough love and the pressure of necessity compel a timid individual to conquer internal fear.\n\n2. The Fear & Starvation:\nThe young seagull was terrified of the boundless sea. Even though his younger brothers and sister had shorter wings, they flew courageously. Left completely alone on the ledge without food for twenty-four hours, the young bird suffered intense hunger.\n\n3. The Mother’s Ingenious Plan:\nWhile the father and siblings paid him no attention, the mother seagull stood on a plateau, tearing at a piece of fish. Maddened by the sight of food, the young bird begged her for nourishment. The mother picked up a piece of fish and flew across towards him.\n\n4. The Instinctive Leap & First Flight:\n"Necessity breaks through the hardest chains of fear."\nJust when she reached opposite the ledge, she halted motionless in mid-air, holding the fish just beyond his grasp. Driven mad by excruciating hunger, the young seagull forgot his paralyzing fear and dived straight at the fish. He lost his footing and plunged into empty space. Though monstrous terror seized him for a heartbeat, his wings automatically spread outward. The wind rushed past his feathers, and he found himself gloriously soaring and banking over the emerald sea.\n\n5. Conclusion & Moral:\nThus, the mother’s wisdom and strategic starvation liberated the young bird from self-doubt.\nMORAL: "Courage is not the absence of fear, but the triumph over it."'
        }
      ]
    },
    {
      id: 'en_sub_sec_1_2',
      sectionNumber: '1.2',
      title: 'Poem - Life (Henry Van Dyke)',
      introText:
        'A fourteen-line sonnet composed by American poet Henry Van Dyke. It radiates optimism, courage, and a serene philosophy of embracing every moment of life without haste or mourning for the past.',
      items: [
        {
          id: 'en_sub_item_1_2_poem_text',
          type: 'theorem',
          number: '1.2.1',
          title: 'Poem Lines & Structural Analysis',
          statementLatex:
            '\\begin{array}{|l|l|} \\hline \\textbf{Line Excerpt} & \\textbf{Poetic Device / Meaning} \\\\ \\hline \\text{"Let me but live my life from year to year,"} & \\text{Theme: Autonomous, proactive living} \\\\ \\text{"With forward face and unreluctant soul;"} & \\text{Alliteration (forward face) / Optimism} \\\\ \\text{"Not hurrying to, nor turning from the goal;"} & \\text{Antithesis / Balance in life} \\\\ \\text{"Not mourning for the things that disappear"} & \\text{Letting go of grief and past regrets} \\\\ \\text{"So let the way wind up the hill or down,"} & \\text{Metaphor: Ups and downs of life journey} \\\\ \\text{"My heart will keep the courage of the quest,"} & \\text{Metaphor: Life as an adventurous quest} \\\\ \\text{"And hope the road\'s last turn will be the best."} & \\text{Ultimate faith in the future} \\\\ \\hline \\end{array}',
          statementText:
            'Rhyme Scheme: abba cddc (Octave) + efef gg or effe gg (Sestet). A classic Italian/Petrarchan sonnet structure.'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_1_6',
          number: 'Unit 1 - Poetic Appreciation (2 Marks)',
          title: 'Poetic Device in "forward face"',
          difficulty: 'Foundational',
          statementLatex: '\\text{Identify the figure of speech / poetic device in: } \\textit{"With forward face and unreluctant soul"}',
          description: 'Board exam poetic device analysis.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Notice the repetition of initial consonant sound /f/.',
              hint: 'Repetition of the same sound at the start of adjacent words.',
              expectedInsight: 'Alliteration: "forward face" repeats the consonant /f/.',
              latexIntermediate: '\\text{Alliterated words: } \\mathbf{\\text{"forward"}}, \\mathbf{\\text{"face"}} \\implies /f/',
              options: ['Alliteration', 'Simile', 'Hyperbole'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: Alliteration (forward face - repetition of /f/ sound)}}',
          fullSolutionWalkthrough:
            'The poetic device is Alliteration. The consonant sound /f/ is repeated at the beginning of the adjacent words "forward" and "face". Additionally, "unreluctant soul" signifies Personification/Synecdoche.'
        },
        {
          id: 'en_sub_prob_1_7',
          number: 'Unit 1 - Poetic Appreciation (2 Marks)',
          title: 'Metaphor in "wind up the hill or down"',
          difficulty: 'Intermediate',
          statementLatex: '\\text{What does the poet mean by: } \\textit{"So let the way wind up the hill or down"} \\text{? [2 Marks]}',
          description: 'Analyze the metaphorical road of life.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What do hills and valleys represent in human experience?',
              hint: 'Joys and hardships, successes and failures.',
              expectedInsight: 'The winding road symbolizes the unpredictable ups and downs of human life.',
              latexIntermediate: '\\text{Hill} \\implies \\text{Hardships/Challenges}, \\quad \\text{Down} \\implies \\text{Ease/Pleasure}',
              options: ['The hardships and pleasures of life’s journey', 'Geographical terrain of a mountain'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Hill = Challenges (1 Mark) + Down = Ease (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'The poet uses the winding road as a Metaphor for the journey of life. "Up the hill" represents steep challenges, trials, and difficulties, while "down" represents ease, comfort, and smooth sailing. The poet resolves to journey forward cheerfully regardless of circumstances.'
        },
        {
          id: 'en_sub_prob_1_8',
          number: 'Unit 1 - Poem Paragraph (5 Marks)',
          title: 'Describe the Journey of Life as Portrayed by Henry Van Dyke',
          difficulty: 'Advanced',
          statementLatex: '\\text{How does Henry Van Dyke guide the reader to live a purposeful life? [5 Marks]}',
          description: 'Sura Guide standard poem paragraph with Title, Poet, Rhyme Scheme, and Quotes.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Draft an answer covering attitude to past, present, and future.',
              hint: 'No regret for the past, fully living the present, confident hope in the future.',
              expectedInsight: 'Live with forward face, courage of the quest, and hope for the best.',
              latexIntermediate: '\\text{Rubric: Structure (1) + Octave Analysis (1.5) + Sestet Analysis (1.5) + Moral (1) = 5 Marks}',
              options: ['Comprehensive 5-mark Sura poem essay', 'Short informal notes'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Score: 5/5 Marks (Board Examination Centum Format)}}',
          fullSolutionWalkthrough:
            'TITLE: LIFE\nPOET: Henry Van Dyke\nFORM: Sonnet (14 lines)\nRHYME SCHEME: abba cddc efef gg\nTHEME: Live life with courage, purpose, and unconditional cheerfulness.\n\nOUTLINE:\nIntroduction – Living in the Present – Leaving Past Sorrows – Facing Ups and Downs – The Courage of the Quest – Conclusion & Moral.\n\n1. Introduction:\nHenry Van Dyke’s sonnet "Life" is a noble, introspective anthem advocating a positive and forward-looking philosophy of life. The poet desires to live authentically without haste and without debilitating sorrow.\n\n2. Living in the Present:\nThe poet wishes to live his life year to year with a "forward face and unreluctant soul." He neither hurries impulsively towards his goal nor retreats timidly from it. He maintains a steady, unshakeable balance.\n\n3. Overcoming Past Regrets:\n"Not mourning for the things that disappear in the dim past."\nVan Dyke advises against wasting precious present moments grieving over lost opportunities or past tragedies. Instead, he welcomes the future with a youthful, wholehearted embrace.\n\n4. Weathering the Winding Path:\nLife is compared to a journey along a winding road that travels through rough hills (adversities) and easy slopes (comforts). Whether rough or smooth, the journey will be joyous as long as the traveler retains inner fortitude.\n\n5. Conclusion & Moral:\nThe poet concludes with radiant optimism: "My heart will keep the courage of the quest, and hope the road’s last turn will be the best."\nMORAL: "A cheerful heart turns every stumbling block into a stepping stone."'
        }
      ]
    },
    {
      id: 'en_sub_sec_1_3',
      sectionNumber: '1.3',
      title: 'Supplementary - The Tempest (William Shakespeare)',
      introText:
        'Adapted from William Shakespeare’s romance by Charles and Mary Lamb. Tells of Prospero, the exiled Duke of Milan, who uses benevolent magic on an enchanted island to forgive his treacherous brother and restore harmony.',
      items: [
        {
          id: 'en_sub_item_1_3_chars',
          type: 'definition',
          number: '1.3.1',
          title: 'Dramatis Personae & Character Archetypes',
          statementLatex:
            '\\begin{array}{|l|l|} \\hline \\textbf{Character} & \\textbf{Role & Key Identity} \\\\ \\hline \\text{Prospero} & \\text{The rightful Duke of Milan, master of magic} \\\\ \\text{Miranda} & \\text{Prospero\'s compassionate, gentle daughter} \\\\ \\text{Ariel} & \\text{Gentle spirit of the air, faithful servant to Prospero} \\\\ \\text{Caliban} & \\text{Deformed savage son of the wicked witch Sycorax} \\\\ \\text{Antonio} & \\text{Prospero\'s treacherous younger brother} \\\\ \\text{Alonzo} & \\text{King of Naples, accomplice in Prospero\'s overthrow} \\\\ \\text{Ferdinand} & \\text{Noble Prince of Naples, son of Alonzo, lover of Miranda} \\\\ \\text{Gonzalo} & \\text{Kind old courtier who provided food, clothes, and magic books} \\\\ \\hline \\end{array}',
          statementText:
            'Understanding character motivations is critical for the 5-mark narrative question.'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_1_9',
          number: 'Unit 1 - Supplementary Short Answer (2 Marks)',
          title: 'Who was Ariel and how was he released by Prospero?',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Who was Ariel? How did Prospero release him? [2 Marks]}',
          description: 'Ariel’s imprisonment and liberation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Where was Ariel trapped and by whom?',
              hint: 'Witch Sycorax trapped him in a cloven pine.',
              expectedInsight: 'Prospero used his magic to split the pine and liberate Ariel.',
              latexIntermediate: '\\text{Ariel} = \\text{Gentle spirit imprisoned in pine by Sycorax for 12 years}',
              options: ['A gentle spirit trapped in a split pine by Sycorax and released by Prospero', 'A sea monster captured by Ferdinand'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Gentle spirit (1 Mark) + Released from Sycorax’s pine tree trap by Prospero (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'Ariel was a gentle, loyal spirit of the elements. He had been imprisoned inside a cloven pine tree by the wicked witch Sycorax for twelve years because he refused to carry out her cruel commands. Prospero arrived on the island and, using his benevolent magical art, freed Ariel from the tree.'
        },
        {
          id: 'en_sub_prob_1_10',
          number: 'Unit 1 - Supplementary Paragraph (5 Marks)',
          title: 'Prospero’s Magic, Trial of Ferdinand, and Ultimate Forgiveness',
          difficulty: 'Advanced',
          statementLatex: '\\text{Narrate how Prospero reconciled with his enemies through forgiveness. [5 Marks]}',
          description: 'Full-mark SSLC Board exam narrative response.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Trace the progression: Betrayal -> Tempest -> Repentance -> Restoration.',
              hint: 'Prospero chooses virtue over vengeance.',
              expectedInsight: 'The rarer action is in virtue than in vengeance.',
              latexIntermediate: '\\text{Rubric: Title/Author (1) + Betrayal (1) + Magic/Tempest (1) + Reconcile (1) + Moral (1) = 5 Marks}',
              options: ['Comprehensive 5-mark structured narrative essay', 'Short outline only'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Score: 5/5 Marks (Government Evaluation Rubric)}}',
          fullSolutionWalkthrough:
            'TITLE: THE TEMPEST\nAUTHOR: William Shakespeare (Adapted by Charles Lamb)\nTHEME: Forgiveness is nobler than revenge.\n\nOUTLINE:\nIntroduction – Betrayal by Antonio – Life on the Desert Island – The Raising of the Tempest – The Testing of Ferdinand – Repentance of Alonzo & Antonio – Universal Pardon – Conclusion.\n\n1. Introduction:\n"The Tempest" is one of Shakespeare’s final masterpieces, illustrating how spiritual maturity and boundless compassion triumph over political treachery.\n\n2. The Treachery & Exile:\nProspero, the Duke of Milan, devoted himself entirely to secret studies of philosophy and magic. Taking advantage of his absorption, his ambitious brother Antonio conspired with Alonzo, King of Naples, to usurp the dukedom. Prospero and his infant daughter Miranda were cast adrift in a rotten boat, but thanks to the kind courtier Gonzalo, who provided food, garments, and prized magical books, they survived and reached a lonely island.\n\n3. The Raising of the Tempest:\nTwelve years later, a ship carrying his treacherous brother Antonio, Alonzo, and Prince Ferdinand passed near the island. Prospero commanded the spirit Ariel to stir up a violent storm. However, he specifically ordered Ariel that not a single hair of any passenger should perish. The passengers were safely brought ashore in separate groups.\n\n4. The Union of Ferdinand & Miranda:\nFerdinand was guided to Prospero’s cell, where he and Miranda instantly fell in love. To test Ferdinand’s constancy, Prospero pretended to treat him harshly as a spy and forced him to carry heavy logs of wood. Ferdinand accepted the labor with humility and joy for Miranda’s sake.\n\n5. Noble Forgiveness & Restoration:\nAriel brought Antonio and Alonzo, stricken with guilt and remorse, before Prospero. Though he had absolute power to destroy them, Prospero declared: "The rarer action is in virtue than in vengeance." He fully pardoned their past crimes, gave his blessing to the marriage of Ferdinand and Miranda, restored his dukedom of Milan, and gave Ariel his cherished freedom.\n\nMORAL: "Forgiveness heals the soul that vengeance would poison."'
        }
      ]
    },
    {
      id: 'en_sub_sec_1_4',
      sectionNumber: '1.4',
      title: 'Grammar - Modal Auxiliaries & Semi-Modals',
      introText:
        'Rules, functions, and exam-oriented sentence exercises for Primary Modals (can, could, may, might, will, would, shall, should, must) and Quasi/Semi-Modals (ought to, used to, need, dare).',
      items: [
        {
          id: 'en_sub_item_1_4_table',
          type: 'definition',
          number: '1.4.1',
          title: 'Comprehensive Modal Functions Table',
          statementLatex:
            '\\begin{array}{|l|l|l|} \\hline \\textbf{Modal Verb} & \\textbf{Primary Functions} & \\textbf{SSLC Board Standard Example} \\\\ \\hline \\text{Can / Could} & \\text{Ability, Informal Permission, Polite Request} & \\text{Could you please lend me your pen?} \\\\ \\text{May / Might} & \\text{Formal Permission, Possibility, Blessing} & \\text{May God bless you! / It might rain today.} \\\\ \\text{Must} & \\text{Compulsion, Absolute Necessity, Strong Duty} & \\text{Students must wear uniform to school.} \\\\ \\text{Should / Shall} & \\text{Advice, Suggestion, Future Intention} & \\text{You should consult a doctor immediately.} \\\\ \\text{Would} & \\text{Polite Offer, Past Habit, Preference} & \\text{Would you like a cup of tea?} \\\\ \\text{Ought to} & \\text{Moral Duty, Social Obligation} & \\text{We ought to obey traffic rules.} \\\\ \\text{Used to} & \\text{Discontinued Past Habit} & \\text{My grandfather used to walk 5 km daily.} \\\\ \\text{Need (not)} & \\text{Necessity / Absence of Obligation} & \\text{You need not pay fee today.} \\\\ \\text{Dare} & \\text{Courage / Challenge (mostly in negative/interrogative)} & \\text{How dare you speak like this?} \\\\ \\hline \\end{array}',
          statementText:
            'Modal verbs never take "-s", "-ing", or "-ed" forms. They are invariably followed by Bare Infinitive ($V_1$).'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_1_11',
          number: 'Unit 1 - Grammar Board Question 1',
          title: 'Modal for Compulsion',
          difficulty: 'Foundational',
          statementLatex: '\\text{Candidates \\underline{\\hspace{1.5cm}} produce their hall tickets at the examination hall. (Fill in with a modal)}',
          description: 'Identify the modal denoting mandatory compliance.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Is carrying a hall ticket optional or mandatory?',
              hint: 'It is a strict legal and institutional requirement.',
              expectedInsight: '"Must" expresses compulsory requirements.',
              latexIntermediate: '\\text{Compulsion / Strict Rule} \\implies \\mathbf{\\text{"must"}}',
              options: ['must', 'might', 'could'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: must}}',
          fullSolutionWalkthrough:
            'The modal "must" indicates an inescapable obligation or official command. "Candidates must produce their hall tickets."'
        },
        {
          id: 'en_sub_prob_1_12',
          number: 'Unit 1 - Grammar Board Question 2',
          title: 'Semi-modal for Past Habit',
          difficulty: 'Foundational',
          statementLatex: '\\text{My grandmother \\underline{\\hspace{1.5cm}} tell me moral stories when I was young. (Fill in with a semi-modal)}',
          description: 'Identify the quasi-modal that expresses past routine.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Which semi-modal denotes a routine in the past that has stopped now?',
              hint: 'It ends with the preposition "to".',
              expectedInsight: '"used to" expresses discontinued past actions.',
              latexIntermediate: '\\text{Discontinued Past Habit} \\implies \\mathbf{\\text{"used to"}}',
              options: ['used to', 'ought to', 'dare to'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: used to}}',
          fullSolutionWalkthrough:
            'The semi-modal "used to" expresses an action that happened regularly in the past but no longer occurs in the present: "My grandmother used to tell me moral stories."'
        }
      ]
    }
  ]
};
