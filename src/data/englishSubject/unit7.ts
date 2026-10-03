import { BookChapter } from '../../types/math';

export const unit7EnglishSubject: BookChapter = {
  id: 'en_sub_unit_7',
  chapterNumber: 7,
  romanNumeral: 'VII',
  title: 'Unit 7: Mystery & Deductive Brilliance',
  subtitle: "Prose: The Dying Detective | Poem: The House on Elm Street | Grammar: Conditionals",
  synopsis:
    'Complete Samacheer Kalvi SSLC English Unit 7 Study Guide. Contains Sir Arthur Conan Doyle’s gripping Sherlock Holmes thriller ‘The Dying Detective’, Nadia Bush’s eerie atmospheric poem ‘The House on Elm Street’, and formal grammar rules for Conditionals (If-Clauses) and Simple/Compound/Complex Sentence Transformations with full-mark rubrics.',
  prerequisites: ['Complex Sentence Structures', 'Past Perfect Tense'],
  sections: [
    {
      id: 'en_sub_sec_7_1',
      sectionNumber: '7.1',
      title: 'Prose - The Dying Detective (Sir Arthur Conan Doyle)',
      introText:
        'A battle of wits between Sherlock Holmes and the murderous planter Culverton Smith. Holmes feigns a deadly tropical illness to extract a spontaneous confession for the murder of Victor Savage.',
      items: [
        {
          id: 'en_sub_item_7_1_vocab',
          type: 'definition',
          number: '7.1.1',
          title: 'Detective Vocabulary & Medical Terms',
          statementLatex:
            '\\begin{array}{|l|l|l|l|} \\hline \\textbf{Word} & \\textbf{Contextual Meaning} & \\textbf{Synonym} & \\textbf{Antonym} \\\\ \\hline \\text{Gaunt} & \\text{Lean and haggard from suffering} & \\text{Emaciated / Skeletal} & \\text{Plump / Robust} \\\\ \\text{Delirious} & \\text{In a state of wild excitement or fevered delusion} & \\text{Feverish / Incoherent} & \\text{Lucid / Sane} \\\\ \\text{Malady} & \\text{A disease or ailment} & \\text{Illness / Affliction} & \\text{Health / Wellness} \\\\ \\text{Contagious} & \\text{Spread from one person to another by contact} & \\text{Infectious / Catching} & \\text{Non-infectious} \\\\ \\text{Tallow} & \\text{Hard animal fat; pale waxen appearance} & \\text{Waxen / Pallid} & \\text{Flushed / Rosy} \\\\ \\hline \\end{array}',
          statementText:
            'Sherlock Holmes’s mastery of physical acting, psychological manipulation, and forensic evidence.'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_7_1',
          number: 'Unit 7 - Short Answer (2 Marks)',
          title: 'Why did Holmes refuse to let Watson examine him?',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Why did Sherlock Holmes strictly forbid Dr. Watson from treating or approaching him? [2 Marks]}',
          description: 'Holmes’s tactical deception.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Was Holmes genuinely ill, and what would Watson discover upon close clinical examination?',
              hint: 'Watson was a trained doctor and would instantly detect that Holmes had no fever or pulse irregularities.',
              expectedInsight: 'Watson would discover that Holmes’s disease was completely staged.',
              latexIntermediate: '\\text{Clinical examination} \\implies \\text{Discovery that illness is fake}',
              options: ['Because Watson, being an experienced doctor, would immediately discover that Holmes was faking the symptoms', 'Because Holmes genuinely had a contagious plague'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Watson is an experienced physician (1 Mark) + Would detect that the fever and illness were fake (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'Sherlock Holmes strictly forbade Dr. Watson from examining him because Watson was a competent physician who would immediately discover that Holmes’s temperature, pulse, and symptoms were completely fabricated with makeup and three days of starvation.'
        },
        {
          id: 'en_sub_prob_7_2',
          number: 'Unit 7 - Short Answer (2 Marks)',
          title: 'What was inside the small ivory box sent to Holmes?',
          difficulty: 'Intermediate',
          statementLatex: '\\text{What lethal trap was hidden inside the carved ivory box sent by Culverton Smith? [2 Marks]}',
          description: 'The murder weapon.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What was designed to happen when the lid of the box was opened?',
              hint: 'A sharp poisoned spring needle was designed to prick the opener’s finger.',
              expectedInsight: 'A sharp infected spring needle designed to draw blood and inject the deadly black Formosa plague.',
              latexIntermediate: '\\text{Ivory Box} = \\text{Poisoned spring-loaded needle}',
              options: ['A sharp poisoned spring needle designed to prick the finger and inoculate the deadly Tapanuli fever', 'A venomous spider'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\text{Key Points: Spring-loaded needle (1 Mark) + Infected with deadly tropical poison/plague (1 Mark) = 2 Marks}',
          fullSolutionWalkthrough:
            'The carved ivory box contained a concealed, spring-loaded sharp needle coated with the deadly Tapanuli fever pathogen. It was designed so that whoever opened the sliding lid would inadvertently prick their finger and become lethally infected.'
        },
        {
          id: 'en_sub_prob_7_3',
          number: 'Unit 7 - Paragraph Question (5 Marks)',
          title: 'The Masterful Trap: How Sherlock Holmes Outwitted Culverton Smith',
          difficulty: 'Advanced',
          statementLatex: '\\text{Narrate how Sherlock Holmes trapped Culverton Smith into a full confession. [5 Marks]}',
          description: 'Standard 5-mark Sura Guide structured essay with Title, Author, Deception, Climax, and Moral.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Trace the sequence: Staged illness -> Watson sent for Smith -> Smith arrives believing victory -> Confession behind the bed -> Signal with the gas lamp -> Inspector Morton arrests him.',
              hint: 'Watson hidden behind the head of the bed as an impartial witness.',
              expectedInsight: 'A brilliant psychological trap that secured a legal confession.',
              latexIntermediate: '\\text{Rubric: Staged Illness (1) + Culverton\'s Arrival (1.5) + The Trap & Witness (1.5) + Moral (1) = 5 Marks}',
              options: ['Full 5-mark Sura analytical narrative essay', 'Brief summary outline'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Score: 5/5 Marks (Government Evaluation Standard)}}',
          fullSolutionWalkthrough:
            'TITLE: THE DYING DETECTIVE\nAUTHOR: Sir Arthur Conan Doyle\nGENRE: Detective Fiction\nCHARACTERS: Sherlock Holmes, Dr. John Watson, Culverton Smith, Inspector Morton, Mrs. Hudson.\n\nOUTLINE:\nIntroduction – The Gaunt and Dying Holmes – Watson’s Mission – Culverton Smith’s Arrogance – The Confession – The Signal & Arrest – Conclusion & Moral.\n\n1. Introduction:\n"The Dying Detective" showcases Sherlock Holmes’s consummate acting skill and deductive genius as he stages his own impending death to catch a cunning murderer.\n\n2. The Staged Illness:\nMrs. Hudson summoned Dr. Watson, crying that Holmes was dying of a deadly, contagious tropical disease contracted in the London docks. Watson arrived at Baker Street to find Holmes gaunt, pale, shivering, and delirious. Holmes had starved himself for three days and applied vaseline, rouge, and beeswax to simulate the deadly Tapanuli fever.\n\n3. The Arrival of Culverton Smith:\nHolmes refused Watson’s medical treatment, claiming only one man understood the disease: Mr. Culverton Smith, an expert planter from Sumatra. Holmes sent Watson to summon Smith, but instructed Watson to return first and hide silently behind the head of the bed.\n\n4. The Trap & The Confession:\nBelieving Holmes was in his final death throes, Culverton Smith entered the bedroom with smug arrogance. He mocked Holmes and openly confessed to murdering his nephew Victor Savage using the exact same disease. Smith admitted sending the poisoned ivory box to kill Holmes as well: "You knew too much about Victor Savage’s death; you had to die!"\n\n5. The Dramatic Arrest:\n"Match your wits with a master, and your own trap will snap on your neck."\nSmith pocketed the ivory box to destroy the evidence. Holmes then asked Smith to turn up the gas lamp. As the room illuminated, Holmes spoke in a completely clear, robust voice! The gas lamp was a prearranged signal to Inspector Morton, who burst through the door and arrested Culverton Smith for murder, while Watson emerged from behind the bed as an unimpeachable legal witness.\n\n6. Conclusion & Moral:\nMORAL: "Criminal arrogance always leaves the door wide open to justice."'
        }
      ]
    },
    {
      id: 'en_sub_sec_7_2',
      sectionNumber: '7.2',
      title: 'Grammar - Conditionals (If-Clauses)',
      introText:
        'Rules, formulas, and transformations for Real (Zero & First), Unreal (Second), and Impossible (Third) Conditionals in the SSLC Examination.',
      items: [
        {
          id: 'en_sub_item_7_2_table',
          type: 'definition',
          number: '7.2.1',
          title: 'Classification of Conditional Sentences',
          statementLatex:
            '\\begin{array}{|l|l|l|l|} \\hline \\textbf{Type} & \\textbf{Condition} & \\textbf{If-Clause Tense} & \\textbf{Main Clause Verb} \\\\ \\hline \\text{Type 0} & \\text{Universal Truth / Scientific Fact} & \\text{Simple Present } (V_1) & \\text{Simple Present } (V_1) \\\\ \\text{Type 1} & \\text{Probable / Real Condition} & \\text{Simple Present } (V_1) & \\text{will / can / may} + V_1 \\\\ \\text{Type 2} & \\text{Improbable / Hypothetical} & \\text{Simple Past } (V_2) & \\text{would / could / might} + V_1 \\\\ \\text{Type 3} & \\text{Impossible / Past Unfulfilled} & \\text{Past Perfect } (\\text{had } + V_3) & \\text{would have } + V_3 \\\\ \\hline \\end{array}',
          statementText:
            'Type 3 Inversion: "If I had known" can be rewritten as "Had I known...".'
        }
      ],
      problems: [
        {
          id: 'en_sub_prob_7_4',
          number: 'Unit 7 - Conditional Question 1',
          title: 'Complete the Third Conditional Sentence',
          difficulty: 'Intermediate',
          statementLatex: '\\text{If they had played well, they \\underline{\\hspace{2.5cm}} (win) the match. (Fill in the correct verb form)}',
          description: 'Type 3 Impossible Conditional completion.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Identify the tense in the if-clause: "had played". What is the corresponding main clause formula?',
              hint: 'If-clause has Past Perfect (had + V3) -> Main clause requires "would have + V3".',
              expectedInsight: 'would have won.',
              latexIntermediate: '\\text{If } + \\text{had } V_3 \\implies \\mathbf{\\text{would have }} + V_3',
              options: ['would have won', 'will win', 'would win'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: would have won}}',
          fullSolutionWalkthrough:
            'In Type 3 (Impossible Conditional), when the if-clause is in the Past Perfect tense ("had played"), the main clause verb must be in the Perfect Conditional: "would have + V3" ("would have won"). Hence: "If they had played well, they would have won the match."'
        }
      ]
    }
  ]
};
