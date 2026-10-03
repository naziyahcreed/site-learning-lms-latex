import { BookChapter } from '../../types/math';

export const unit5EnglishSubject: BookChapter = {
  id: 'en_sub_unit_5',
  chapterNumber: 5,
  romanNumeral: 'V',
  title: 'Unit 5: Technological Transformation',
  subtitle: "Prose: Tech Bloomers | Poem: The Secret of the Machines | Supplementary: A Dilemma | Grammar: Relative Clauses",
  synopsis:
    'Complete Samacheer Kalvi SSLC English Unit 5 Study Guide. Contains the inspiring study of assistive technology in ‘Tech Bloomers’, Rudyard Kipling’s prophetic industrial poem ‘The Secret of the Machines’, Silas Weir Mitchell’s suspenseful mystery ‘A Dilemma’, and formal grammar rules for Relative Clauses and Pronouns.',
  prerequisites: ['Basic Pronouns', 'Complex Sentence Subordination'],
  sections: [
    {
      id: 'en_sub_sec_5_1',
      sectionNumber: '5.1',
      title: 'Prose - Tech Bloomers',
      introText:
        'An enlightening essay illustrating how modern assistive technology bridges the gap for differently-abled individuals like Alisha and David, granting them independence, academic success, and social inclusion.',
      items: [
        {
          id: 'en_sub_item_5_1_vocab',
          type: 'definition',
          number: '5.1.1',
          title: 'Assistive Tech Vocabulary & Key Terms',
          statementLatex:
            '\\begin{array}{|l|l|l|} \\hline \\textbf{Device / Term} & \\textbf{Mechanism / Function} & \\textbf{Beneficiary in Lesson} \\\\ \\hline \\text{Dragon Dictate} & \\text{Speech-to-text software for typing with voice} & \\text{Alisha (Cerebral Palsy)} \\\\ \\text{Eye-Gaze / ECO2} & \\text{Control computer screen cursor using eye movements} & \\text{David (Athetoid Cerebral Palsy)} \\\\ \\text{AAC} & \\text{Augmentative and Alternative Communication} & \\text{Differently-abled individuals} \\\\ \\text{Liberator Communication} & \\text{Synthesizes speech and controls appliances with foot/switch} & \\text{David} \\\\ \\hline \\end{array}',
          statementText:
            'Technology transforms disability into different capability, breaking physical and communication barriers.'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_5_1',
          number: 'Unit 5 - Short Answer (2 Marks)',
          title: 'How does Dragon Dictate assist Alisha?',
          difficulty: 'Intermediate',
          statementLatex: '\\text{How does the software \'Dragon Dictate\' help Alisha in her studies? [2 Marks]}',
          description: 'Assistive software application.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What physical difficulty did Alisha face and how did Dragon Dictate solve it?',
              hint: 'She had cerebral palsy and could not type with hands; the software converted her speech into text.',
              expectedInsight: 'It allows her to speak into a microphone and types the words on the screen automatically.',
              latexIntermediate: '\\text{Alisha\'s speech} \\xrightarrow{\\text{Dragon Dictate}} \\text{Screen text (no manual typing)}',
              options: ['It converts her spoken words directly into text on the screen, allowing her to write exams independently', 'It controls her electric wheelchair'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Speech-to-text conversion (1 Mark) + Overcoming physical inability to type exams (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'Alisha suffers from cerebral palsy and cannot use her hands to type on a keyboard. "Dragon Dictate" is a voice-recognition software that listens to her voice and instantly types the words onto the computer screen, enabling her to study, complete assignments, and take exams without relying on a scribe.'
        },
        {
          id: 'en_sub_prob_5_2',
          number: 'Unit 5 - Paragraph Question (5 Marks)',
          title: 'How Assistive Technology Empowers Alisha and David in "Tech Bloomers"',
          difficulty: 'Advanced',
          statementLatex: '\\text{Explain how technology has transformed the lives of disabled people as described in "Tech Bloomers". [5 Marks]}',
          description: 'Full-mark Sura Guide structured essay with Title, Overview, Devices, and Conclusion.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Structure: Introduction -> Alisha’s case -> David’s case -> Technological devices -> Conclusion & Moral.',
              hint: 'Highlight Dragon Dictate, ECO2, Eye-Gaze, and Liberator system.',
              expectedInsight: 'Technology empowers disabled individuals to live independent and dignified lives.',
              latexIntermediate: '\\text{Rubric: Introduction (1) + Alisha (1.5) + David (1.5) + Moral (1) = 5 Marks}',
              options: ['Complete 5-mark Sura analytical essay', 'Short summary notes'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Score: 5/5 Marks (Government Evaluation Standard)}}',
          fullSolutionWalkthrough:
            'TITLE: TECH BLOOMERS\nTHEME: Assistive technology is a liberating equalizer for differently-abled individuals.\n\nOUTLINE:\nIntroduction – Alisha’s Digital Liberation – David’s Triumph over Athetoid Palsy – The Power of Eye-Gaze – Social Inclusion – Conclusion & Moral.\n\n1. Introduction:\n"Tech Bloomers" explores how technological advancements break physical shackles, allowing differently-abled individuals to communicate, learn, and live independently.\n\n2. Alisha’s Journey:\nAlisha suffered from severe cerebral palsy and was unable to use her hands to type on a keyboard. Simple daily tasks felt impossible until she was introduced to "Dragon Dictate". This voice-recognition software converts her spoken words into written text on the monitor. Today, Alisha uses technology to draft essays, excel academically, and write her own examinations with complete autonomy.\n\n3. David’s Transformation:\nDavid, born with athetoid cerebral palsy, was unable to move his limbs or speak clearly. However, with the aid of the ECO2 communication aid mounted on his electric wheelchair and an Eye-Gaze camera, David controls the computer cursor simply by looking at icons on the screen.\n\n4. Beyond Communication:\n"Technology turns disability into possibility."\nUsing a foot switch and infrared technology, David commands his household environment: he turns lights and television on or off, plays music, studies for GCSE exams, and advocates for disabled rights across the nation.\n\n5. Conclusion & Moral:\nAssistive technology removes pity and restores human dignity. It proves that physical limitations are no longer barriers to human genius.\nMORAL: "Where nature places a barrier, human innovation builds a highway."'
        }
      ]
    },
    {
      id: 'en_sub_sec_5_2',
      sectionNumber: '5.2',
      title: 'Poem - The Secret of the Machines (Rudyard Kipling)',
      introText:
        'A dramatic monologue delivered by modern machines. Kipling personifies industrial machinery, cataloging their superhuman physical feats while issuing a terrifying warning about their complete absence of moral compassion.',
      items: [
        {
          id: 'en_sub_item_5_2_poem',
          type: 'theorem',
          number: '5.2.1',
          title: 'Industrial Personification & Structural Analysis',
          statementLatex:
            '\\begin{array}{|l|l|} \\hline \\textbf{Line Excerpt} & \\textbf{Poetic Device / Thematic Significance} \\\\ \\hline \\text{"We were taken from the ore-bed and the mine,"} & \\text{Origin: Extraction of iron and metal from earth} \\\\ \\text{"We were melted in the furnace and the pit—"} & \\text{Metaphor: Fiery industrial birth of machines} \\\\ \\text{"We can pull and haul and push and lift and drive,"} & \\text{Polysyndeton & Personification: Superhuman labor} \\\\ \\text{"We can print and plough and weave and heat and light,"} & \\text{Alliteration / Catalog of civilizational roles} \\\\ \\text{"We are not built to comprehend a lie,"} & \\text{Fatal Limitation: Total absence of moral consciousness} \\\\ \\text{"If you make a slip in handling us you die!"} & \\text{Warning: Inexorable law of mechanics} \\\\ \\text{"We are nothing more than children of your brain!"} & \\text{Final Metaphor: Human intellect is the ultimate master} \\\\ \\hline \\end{array}',
          statementText:
            'Rhyme Scheme: abab cdcd efef ghgh. Regular mechanical rhythm mirroring pistons and gears.'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_5_3',
          number: 'Unit 5 - Poetic Appreciation (2 Marks)',
          title: 'The Law of the Machines',
          difficulty: 'Intermediate',
          statementLatex: '\\text{What is the stern law that governs machines according to Kipling? [2 Marks]}',
          description: 'Explain the fatal warning in the poem.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Can machines feel mercy or forgive human mistakes?',
              hint: 'They cannot comprehend a lie or forgive a slip; they crush those who err.',
              expectedInsight: 'Machines live by strict physical laws; they have no pity or forgiveness.',
              latexIntermediate: '\\text{Machines} \\implies \\neg(\\text{Mercy}) \\land \\neg(\\text{Forgiveness})',
              options: ['They are not built to understand lies, feel pity, or forgive; a single slip in handling leads to death', 'They are programmed to be merciful to children'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Cannot comprehend lies/feel pity (1 Mark) + Slip in handling results in death (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'The machines explicitly state their law: they are governed purely by physics and mechanics. They cannot understand lies, love, pity, or forgiveness. If a human operator makes a single slip or careless mistake while handling them, the penalty is instant death.'
        },
        {
          id: 'en_sub_prob_5_4',
          number: 'Unit 5 - Poem Paragraph (5 Marks)',
          title: 'The Mighty Power and Ultimate Limitations of Machines',
          difficulty: 'Advanced',
          statementLatex: '\\text{Describe how Rudyard Kipling brings out the superhuman power and the fatal defect of machines. [5 Marks]}',
          description: 'Full-mark Sura Guide analytical essay.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Cover: Birth of machines, diverse tasks, the stern warning, and their subjection to human brain.',
              hint: 'They are children of the human brain.',
              expectedInsight: 'Machines are all-powerful servants, but only humans possess a moral soul.',
              latexIntermediate: '\\text{Rubric: Origin & Feats (1.5) + The Stern Warning (1.5) + Children of Brain (1) + Moral (1) = 5 Marks}',
              options: ['Complete 5-mark Sura analytical essay with quotes and moral', 'Short rhyming overview'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Score: 5/5 Marks (Government Evaluation Standard)}}',
          fullSolutionWalkthrough:
            'TITLE: THE SECRET OF THE MACHINES\nPOET: Rudyard Kipling\nTHEME: The awe-inspiring power of industrial technology and its moral limitations.\n\nOUTLINE:\nIntroduction – Creation of Machines – Superhuman Capabilities – The Unforgiving Law – The Final Truth – Conclusion & Moral.\n\n1. Introduction:\nRudyard Kipling’s "The Secret of the Machines" is a visionary poem written in the voice of machines, celebrating man’s industrial ingenuity while issuing a grave warning against technological arrogance.\n\n2. The Genesis & Nourishment of Machines:\nThe machines recount how they were extracted from iron-ore mines, melted in scorching blast furnaces, cast, wrought, and hammered into precision gears. All they require to operate is a little water, coal, and oil, along with a thousandth of an inch of clearance, and they will labor tirelessly twenty-four hours a day.\n\n3. Superhuman Capabilities:\nThe machines can perform every task known to civilization: they can pull, haul, push, lift, drive, print, plough, weave, heat, light, see, hear, count, read, and write. Their physical speed and strength dwarf human capacity.\n\n4. The Fatal Flaw & Chilling Warning:\n"We are not built to comprehend a lie; we can neither love nor pity nor forgive. If you make a slip in handling us you die!"\nDespite their might, machines lack a conscience. They do not know mercy or love. Any negligence on the operator’s part results in fatal disaster.\n\n5. Conclusion & Moral:\nIn the final stanza, the machines humbly remind humanity of their true identity: when the smoke clears and the stars shine again, machines are "nothing more than children of your brain!" Man’s mind created them, and man must remain their master.\nMORAL: "Technology is a wonderful servant, but a catastrophic master."'
        }
      ]
    },
    {
      id: 'en_sub_sec_5_3',
      sectionNumber: '5.3',
      title: 'Grammar - Relative Pronouns & Relative Clauses',
      introText:
        'Rules for joining sentences using defining and non-defining relative pronouns (who, whom, whose, which, that, where, when).',
      items: [
        {
          id: 'en_sub_item_5_3_rules',
          type: 'definition',
          number: '5.3.1',
          title: 'Relative Pronoun Usage Guidelines',
          statementLatex:
            '\\begin{array}{|l|l|l|} \\hline \\textbf{Relative Pronoun} & \\textbf{Referent / Antecedent} & \\textbf{SSLC Board Standard Example} \\\\ \\hline \\text{Who} & \\text{Persons (Subject pronoun)} & \\text{The boy who won the race is my brother.} \\\\ \\text{Whom} & \\text{Persons (Object pronoun)} & \\text{This is the teacher whom we all admire.} \\\\ \\text{Whose} & \\text{Possession (Persons / Animals)} & \\text{The girl whose purse was lost cried.} \\\\ \\text{Which / That} & \\text{Things and Animals} & \\text{This is the watch which my uncle gifted.} \\\\ \\text{Where} & \\text{Places} & \\text{This is the house where I was born.} \\\\ \\hline \\end{array}',
          statementText:
            'Relative clauses give essential identifying information about the preceding noun (antecedent).'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_5_5',
          number: 'Unit 5 - Relative Clause Question 1',
          title: 'Combine Sentences using Relative Pronoun',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Combine into a single sentence using a relative pronoun: } \\mathbf{\\text{"This is the doctor. He cured my grandmother."}}',
          description: 'Subject relative pronoun combination.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Which relative pronoun replaces the subject pronoun "He"?',
              hint: 'For persons acting as subject, use "who".',
              expectedInsight: 'Combine using "who".',
              latexIntermediate: '\\text{"This is the doctor"} + \\mathbf{\\text{"who"}} + \\text{"cured my grandmother."}',
              options: ['This is the doctor who cured my grandmother.', 'This is the doctor which cured my grandmother.', 'This is the doctor whom cured my grandmother.'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: This is the doctor who cured my grandmother.}}',
          fullSolutionWalkthrough:
            'Because "He" refers to a person acting as the grammatical subject of the second clause, the relative pronoun "who" is used: "This is the doctor who cured my grandmother."'
        }
      ]
    }
  ]
};
