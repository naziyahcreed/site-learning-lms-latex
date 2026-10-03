import { BookChapter } from '../../types/math';

export const unit7ScienceSubject: BookChapter = {
  id: 'sci_unit_7',
  chapterNumber: 7,
  romanNumeral: 'VII',
  title: 'Unit 7: Plant Anatomy, Physiology & Reproduction (தாவர உள்ளமைப்பியல் & இனப்பெருக்கம்)',
  subtitle: 'Photosynthesis, Dicot vs Monocot Stem, Plant Hormones, Double Fertilization',
  synopsis:
    'Tamil Nadu Class 10 Science (Biology) Units 12, 14, 16 & 17. Internal anatomical tissue systems of dicot and monocot roots and stems, Chloroplast ultra-structure, overall Photosynthesis equation ($6\\text{CO}_2 + 12\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{H}_2\\text{O} + 6\\text{O}_2$), Ascent of sap, Transpiration pull, Plant phytohormones (Auxins, Gibberellins, Cytokinins, ABA, Ethylene), and Sexual Reproduction in flowering plants (Double Fertilization & Triple Fusion).',
  prerequisites: ['Plant Cell Structure', 'Light & Dark Reactions of Photosynthesis'],
  sections: [
    {
      id: 'sci_sec_7_1',
      sectionNumber: '7.1',
      title: 'Plant Anatomy & Photosynthesis',
      introText:
        'Cellular tissue systems and the biochemical energetics of carbon fixation.',
      items: [
        {
          id: 'sci_item_7_1',
          type: 'theorem',
          number: '7.1',
          title: 'Overall Equation of Photosynthesis',
          statementLatex: '6\\text{CO}_2 + 12\\text{H}_2\\text{O} \\xrightarrow[\\text{Chlorophyll}]{\\text{Light Energy}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{H}_2\\text{O} + 6\\text{O}_2 \\uparrow',
          statementText:
            'Occurs within chloroplasts. Light reaction occurs in the thylakoid membrane (grana) releasing oxygen and generating ATP and $\\text{NADPH}_2$. Dark reaction (Calvin cycle) occurs in the stroma synthesizing glucose.'
        },
        {
          id: 'sci_item_7_2',
          type: 'definition',
          number: '7.2',
          title: 'Plant Phytohormones',
          statementLatex: '\\text{Hormones} = \\begin{cases} \\text{Growth Promoters:} & \\text{Auxin, Gibberellins, Cytokinins} \\\\[2pt] \\text{Growth Inhibitors:} & \\text{Abscisic Acid (ABA), Ethylene } (\\text{C}_2\\text{H}_4 - \\text{gaseous}) \\end{cases}',
          statementText:
            'Chemical regulators coordinating growth, phototropism, cell division, fruit ripening, and drought stress responses.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_7_1',
          number: 'Unit 7 - 2 Marks Question',
          title: 'Gaseous Plant Hormone',
          difficulty: 'Foundational',
          statementLatex: '\\text{Name the only gaseous plant hormone and mention its major agricultural application.}',
          description: 'Ethylene fruit ripening.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Which hormone is a gas?',
              hint: 'Ethylene ($\text{C}_2\text{H}_4$).',
              expectedInsight: 'Ethylene promotes rapid ripening of fleshy fruits (bananas, mangoes, apples).',
              latexIntermediate: '\\text{Ethylene } (\\text{C}_2\\text{H}_4) \\implies \\text{Artificial ripening of fruits}',
              options: [
                'Ethylene; induces commercial fruit ripening',
                'Auxin; inhibits flowering'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: Ethylene } (\\text{C}_2\\text{H}_4) \\text{ - used for commercial ripening of fruits like bananas and mangoes.}}',
          fullSolutionWalkthrough:
            'Ethylene is the only gaseous phytohormone. Its primary physiological roles include accelerating fruit ripening (climacteric rise), promoting senescence and abscission of leaves and flowers, and breaking seed dormancy.'
        },
        {
          id: 'sci_prob_7_3',
          number: 'Unit 7 - 4 Marks Anatomy Question',
          title: 'Differentiate Dicot Stem and Monocot Stem',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Tabulate four anatomical differences between a Dicot Stem and a Monocot Stem. [4 Marks]}',
          description: 'Internal vascular tissue organization.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'How are the vascular bundles arranged in a dicot stem vs a monocot stem?',
              hint: 'Dicot: ring arrangement, open, with cambium. Monocot: scattered, closed, no cambium.',
              expectedInsight: 'Ring/open bundles vs scattered/closed bundles.',
              latexIntermediate: '\\text{Dicot: Ring (eustele), Open} \\quad \\text{vs} \\quad \\text{Monocot: Scattered (atactostele), Closed}',
              options: ['Ring vs scattered arrangement', 'Identical arrangement in both'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\begin{array}{|l|l|l|} \\hline \\textbf{Feature} & \\textbf{Dicot Stem (e.g., Sunflower)} & \\textbf{Monocot Stem (e.g., Maize)} \\\\ \\hline \\text{Hypodermis} & \\text{Collenchymatous} & \\text{Sclerenchymatous} \\\\ \\text{Ground Tissue} & \\text{Differentiated into cortex, endodermis, pericycle, pith} & \\text{Undifferentiated continuous parenchyma} \\\\ \\text{Vascular Bundles} & \\text{Arranged in a ring, limited in number} & \\text{Scattered throughout ground tissue, numerous} \\\\ \\text{Bundle Nature} & \\text{Conjoint, collateral, } \\mathbf{\\text{open}} \\text{ (cambium present)} & \\text{Conjoint, collateral, } \\mathbf{\\text{closed}} \\text{ (cambium absent)} \\\\ \\text{Secondary Growth} & \\text{Present (thickening occurs)} & \\text{Absent} \\\\ \\hline \\end{array}',
          fullSolutionWalkthrough:
            '1. Hypodermis: Collenchyma in dicot stem providing flexible mechanical support; Sclerenchyma in monocot stem providing rigid strength.\n2. Ground Tissue: Differentiated into distinct zones (cortex, endodermis, pericycle, medullary rays, and central pith) in dicots; undifferentiated uniform mass in monocots.\n3. Vascular Bundles: In dicot stem, bundles are uniform and arranged in a ring; in monocot stem, bundles are scattered (smaller and more numerous towards periphery, larger towards center).\n4. Cambium & Secondary Growth: Dicot vascular bundles are OPEN with fascicular cambium between xylem and phloem, permitting secondary thickening. Monocot bundles are CLOSED without cambium, preventing secondary growth.'
        }
      ]
    },
    {
      id: 'sci_sec_7_2',
      sectionNumber: '7.2',
      title: 'Plant Reproduction - Double Fertilization',
      introText:
        'Sexual reproduction in angiosperms: pollination, pollen tube growth, syngamy, and triple fusion.',
      items: [
        {
          id: 'sci_item_7_3',
          type: 'theorem',
          number: '7.3',
          title: 'Double Fertilization & Triple Fusion',
          statementLatex: '\\begin{aligned} \\text{Syngamy (True Fertilization): } & \\text{Male Gamete } (n) + \\text{Egg Cell } (n) \\longrightarrow \\text{Zygote } (2n) \\\\[4pt] \\text{Triple Fusion: } & \\text{Male Gamete } (n) + \\text{Secondary Nucleus } (2n) \\longrightarrow \\text{Endosperm } (3n) \\end{aligned}',
          statementText:
            'Characteristic of angiosperms. Because two fertilizations occur simultaneously within the embryo sac, it is designated Double Fertilization. The triploid ($3n$) endosperm nourishes the developing embryo.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_7_2',
          number: 'Unit 7 - 4 Marks Biology Question',
          title: 'Explain Double Fertilization in Angiosperms',
          difficulty: 'Advanced',
          statementLatex: '\\text{Describe the events of Double Fertilization and Triple Fusion in flowering plants. [4 Marks]}',
          description: 'Complete embryological sequence.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'How many sperm nuclei enter the embryo sac from the pollen tube?',
              hint: 'Two non-motile male gametes.',
              expectedInsight: 'Two male gametes are discharged into the embryo sac.',
              latexIntermediate: '\\text{Pollen tube} \\implies 2 \\text{ male gametes } (n)',
              options: [
                'Two male gametes discharged into the embryo sac',
                'One single sperm cell'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'What does the first male gamete fuse with? What does the second fuse with?',
              hint: 'First fuses with egg cell ($n+n=2n$); second fuses with diploid secondary nucleus ($n+2n=3n$).',
              expectedInsight: 'Syngamy forms $2n$ zygote; Triple fusion forms $3n$ primary endosperm nucleus (PEN).',
              latexIntermediate: 'n + n = 2n \\; (\\text{Zygote}), \\quad n + 2n = 3n \\; (\\text{Endosperm})',
              options: [
                'First fuses with egg (2n zygote); second with polar nuclei (3n endosperm)',
                'Both fuse with the egg cell'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Double Fertilization} = \\text{Syngamy } (n + n \\rightarrow 2n) + \\text{Triple Fusion } (n + 2n \\rightarrow 3n)}',
          fullSolutionWalkthrough:
            '1. Pollen Tube Entry: The pollen tube discharges two haploid ($n$) male gametes into the embryo sac.\n\n2. Syngamy: One male gamete ($n$) fuses with the female egg cell ($n$) to form a diploid ($2n$) zygote, which subsequently develops into the plant embryo.\n\n3. Triple Fusion: The second male gamete ($n$) fuses with the diploid secondary nucleus ($2n$, formed by fusion of two polar nuclei) to form the triploid ($3n$) Primary Endosperm Nucleus (PEN).\n\n4. Significance: The triploid endosperm provides essential nutrition to the growing embryo during seed development.'
        },
        {
          id: 'sci_prob_7_4',
          number: 'Unit 7 - 7 Marks Comprehensive Question',
          title: 'Structure of Chloroplast and Mechanism of Photosynthesis',
          difficulty: 'Advanced',
          statementLatex: '\\text{Explain the ultrastructure of Chloroplast and the two phases of Photosynthesis with a flowchart. [7 Marks]}',
          description: 'Complete 7-mark question from Samacheer Kalvi Sura Guide.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Describe the membranes, stroma, and grana of chloroplast.',
              hint: 'Double membrane, fluid stroma, stacked thylakoids called grana.',
              expectedInsight: 'Outer/inner membrane, stroma contains enzymes, grana contains chlorophyll.',
              latexIntermediate: '\\text{Chloroplast} = \\text{Double Envelope} + \\text{Stroma (Dark Reaction)} + \\text{Grana Thylakoids (Light Reaction)}',
              options: ['Detailed ultrastructure and biochemical phases', 'Simple one-paragraph description'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Score: 7/7 Marks (Diagram/Structure 3 Marks + Light Reaction 2 Marks + Dark Reaction 2 Marks)}}',
          fullSolutionWalkthrough:
            '1. Ultrastructure of Chloroplast:\n• Envelope: Chloroplasts are bounded by two phospholipid membranes (outer and inner membranes) separated by an intermembrane space.\n• Stroma: The semi-fluid proteinaceous matrix inside the inner membrane. It contains 70S ribosomes, circular chloroplast DNA (cpDNA), and photosynthetic enzymes including RuBisCO.\n• Grana and Thylakoids: Suspended in the stroma are disc-shaped membranous sacs called Thylakoids. Stacks of thylakoids (like piles of coins) are called Grana. Adjacent grana are connected by stroma lamellae (fret membranes). Thylakoid membranes contain chlorophyll pigments, carotenoids, and Photosystems I & II.\n\n2. Light-Dependent Reaction (Hill Reaction):\n• Site: Takes place in the thylakoid membrane (Grana).\n• Process: Chlorophyll pigments absorb photons of light energy, exciting electrons. Water molecules are split into hydrogen ions, electrons, and oxygen gas (Photolysis of water):\n$$2\\text{H}_2\\text{O} \\longrightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2 \\uparrow$$\n• Output: High-energy assimilatory powers are synthesized: $\\text{ATP}$ (photophosphorylation) and $\\text{NADPH}_2$.\n\n3. Dark Reaction (Calvin-Benson Cycle / Light-Independent Reaction):\n• Site: Takes place in the Stroma.\n• Process: Carbon dioxide is fixed and reduced into carbohydrate using the $\\text{ATP}$ and $\\text{NADPH}_2$ produced during the light reaction. The key carbon-fixing enzyme is RuBisCO (Ribulose-1,5-bisphosphate carboxylase/oxygenase).\n• Output: Glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) is produced and converted into starch for storage.'
        }
      ]
    }
  ]
};
