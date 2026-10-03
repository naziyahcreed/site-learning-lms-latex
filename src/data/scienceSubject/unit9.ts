import { BookChapter } from '../../types/math';

export const unit9ScienceSubject: BookChapter = {
  id: 'sci_unit_9',
  chapterNumber: 9,
  romanNumeral: 'IX',
  title: 'Unit 9: Genetics, Biotechnology & Ecology (மரபியல், உயிரித்தொழில்நுட்பம் & சூழலியல்)',
  subtitle: 'Mendel’s Laws of Inheritance, DNA Double Helix, Genetic Engineering, 3Rs & Environmental Conservation',
  synopsis:
    'Tamil Nadu Class 10 Science (Biology) Units 18, 19, 20, 21 & 22. Gregor Mendel’s monohybrid ($3:1$) and dihybrid ($9:3:3:1$) crosses, Watson and Crick DNA double helix structure, Chargaff’s rules, Recombinant DNA technology (Restriction endonuclease molecular scissors, DNA ligase glue), Stem cells, Communicable diseases, and Environmental Management (3Rs: Reduce, Reuse, Recycle, Non-conventional energy sources).',
  prerequisites: ['Chromosomes & Genes', 'Cell Division (Mitosis, Meiosis)'],
  sections: [
    {
      id: 'sci_sec_9_1',
      sectionNumber: '9.1',
      title: 'Mendelian Genetics & DNA Structure',
      introText:
        'Inheritance principles formulated by Gregor Mendel and molecular architecture of the genetic code.',
      items: [
        {
          id: 'sci_item_9_1',
          type: 'theorem',
          number: '9.1',
          title: 'Mendel’s Monohybrid & Dihybrid Cross Ratios',
          statementLatex: '\\begin{aligned} \\text{Monohybrid Cross (Tall } \\times \\text{ Dwarf): } & \\begin{cases} \\text{Phenotypic Ratio:} & 3:1 \\; (3\\text{ Tall} : 1\\text{ Dwarf}) \\\\[2pt] \\text{Genotypic Ratio:} & 1:2:1 \\; (1\\text{ TT} : 2\\text{ Tt} : 1\\text{ tt}) \\end{cases} \\\\[4pt] \\text{Dihybrid Cross (Round Yellow } \\times \\text{ Wrinkled Green): } & \\text{Phenotypic Ratio: } 9 : 3 : 3 : 1 \\end{aligned}',
          statementText:
            'Demonstrates the Law of Segregation (Purity of Gametes) and Law of Independent Assortment.'
        },
        {
          id: 'sci_item_9_2',
          type: 'definition',
          number: '9.2',
          title: 'Watson and Crick DNA Double Helix & Chargaff’s Rule',
          statementLatex: 'A = T \\quad (2 \\text{ Hydrogen Bonds: } A = T), \\qquad G \\equiv C \\quad (3 \\text{ Hydrogen Bonds: } G \\equiv C)',
          statementText:
            'DNA consists of two antiparallel polynucleotide chains coiled around a central axis. Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds. Purines always equal pyrimidines ($A + G = T + C$).'
        }
      ],
      problems: [
        {
          id: 'sci_prob_9_1',
          number: 'Unit 9 - Genetics Ratio MCQ',
          title: 'Monohybrid Cross Genotypic Ratio',
          difficulty: 'Foundational',
          statementLatex: '\\text{The genotypic ratio of a Mendelian monohybrid cross in } F_2 \\text{ generation is...}',
          description: 'Class 10 State Board standard question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What are the genetic combinations of crossing $Tt \\times Tt$?',
              hint: '$1\\,TT, 2\\,Tt, 1\\,tt$.',
              expectedInsight: 'Genotypic ratio is $1:2:1$.',
              latexIntermediate: 'Tt \\times Tt \\implies 1\\,TT : 2\\,Tt : 1\\,tt = 1:2:1',
              options: ['1:2:1', '3:1', '9:3:3:1'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: } 1:2:1 \\quad (1\\,TT : 2\\,Tt : 1\\,tt)}',
          fullSolutionWalkthrough:
            'In a monohybrid cross of heterozygous tall plants ($Tt \\times Tt$):\n• Phenotypic ratio (visible appearance): $3\\text{ Tall} : 1\\text{ Dwarf} = 3:1$\n• Genotypic ratio (genetic makeup): $1\\text{ Homozygous Tall (TT)} : 2\\text{ Heterozygous Tall (Tt)} : 1\\text{ Homozygous Dwarf (tt)} = 1:2:1$.'
        },
        {
          id: 'sci_prob_9_2',
          number: 'Unit 9 - 4 Marks Biology Question',
          title: 'Salient Features of DNA Double Helix Model',
          difficulty: 'Advanced',
          statementLatex: '\\text{Describe the salient features of Watson and Crick’s DNA double helix model. [4 Marks]}',
          description: 'Key anatomical dimensions and base pairing rules.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'How are the two polynucleotide chains oriented? What forms the backbone?',
              hint: 'Antiparallel orientation ($5\' \\rightarrow 3\'$ and $3\' \\rightarrow 5\'$); sugar-phosphate backbone with bases projecting inward.',
              expectedInsight: 'Two antiparallel helices with complementary base pairs A=T and G≡C.',
              latexIntermediate: '\\text{Strands: } 5\' \\rightarrow 3\' \\text{ and } 3\' \\rightarrow 5\' \\quad [\\text{Antiparallel}]',
              options: [
                'Two antiparallel helices with complementary base pairs A=T and G≡C',
                'Single strand coiled with identical bases'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Watson-Crick DNA Features: Antiparallel strands, Complementary Base Pairing (A=T, G}\\equiv\\text{C), 3.4 nm pitch with 10 bp per turn}}',
          fullSolutionWalkthrough:
            'Watson and Crick (1953) proposed the double-helical structure of DNA based on X-ray diffraction data by Rosalind Franklin and Maurice Wilkins:\n\n1. Antiparallel Strands: DNA is composed of two polynucleotide chains running in opposite directions (one in $5\' \\rightarrow 3\'$ direction and the other in $3\' \\rightarrow 5\'$ direction).\n\n2. Sugar-Phosphate Backbone: The outer framework consists of alternating deoxyribose sugar and phosphate molecules. The nitrogenous bases project perpendicularly inward into the center.\n\n3. Complementary Base Pairing: A purine always pairs with a pyrimidine:\n• Adenine pairs with Thymine via two hydrogen bonds ($A = T$).\n• Guanine pairs with Cytosine via three hydrogen bonds ($G \\equiv C$).\n\n4. Dimensions:\n• Diameter of the double helix is uniform: $2.0\\text{ nm}$ ($20\\text{ \\AA}$).\n• The pitch of each complete helical turn is $3.4\\text{ nm}$ ($34\\text{ \\AA}$), containing approximately 10 base pairs per turn ($0.34\\text{ nm}$ between adjacent pairs).'
        },
        {
          id: 'sci_prob_9_4',
          number: 'Unit 9 - 7 Marks Comprehensive Genetics',
          title: 'Mendel’s Dihybrid Cross & Law of Independent Assortment',
          difficulty: 'Advanced',
          statementLatex: '\\text{Explain Mendel’s Dihybrid Cross with a Punnett Square and state the Law of Independent Assortment. [7 Marks]}',
          description: 'Class 10 State Board standard 7-mark genetics question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What parents are crossed in a dihybrid cross? What are the $F_1$ gametes?',
              hint: 'Round Yellow ($RRYY$) $\\times$ Wrinkled Green ($rryy$). $F_1$ hybrid is $RrYy$ producing 4 types of gametes: $RY, Ry, rY, ry$.',
              expectedInsight: 'Four types of gametes produce 16 combinations with phenotypic ratio $9:3:3:1$.',
              latexIntermediate: '\\text{Phenotypic Ratio: } 9\\text{ Round Yellow} : 3\\text{ Round Green} : 3\\text{ Wrinkled Yellow} : 1\\text{ Wrinkled Green}',
              options: ['Complete Punnett square and law formulation', 'Monohybrid cross ratios'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Dihybrid Phenotypic Ratio} = 9 : 3 : 3 : 1 \\quad (16 \\text{ Genotypic Combinations})}',
          fullSolutionWalkthrough:
            '1. Definition:\nA cross involving the simultaneous inheritance of two pairs of contrasting alleles is called a Dihybrid Cross.\n\n2. Parental Cross (P Generation):\n• Homozygous Round Yellow seeds ($\\text{RRYY}$) $\\times$ Homozygous Wrinkled Green seeds ($\\text{rryy}$).\n• Gametes: $\\text{RY}$ and $\\text{ry}$.\n• $F_1$ Generation: All plants have Round Yellow seeds with heterozygous genotype $\\text{RrYy}$.\n\n3. Self-Pollination of $F_1$ ($RrYy \\times RrYy$):\nEach $F_1$ parent produces four types of gametes with equal probability: $\\text{RY}, \\text{Ry}, \\text{rY}, \\text{ry}$.\n\n4. Punnett Square ($4 \\times 4 = 16$ Offspring combinations):\n$$\\begin{array}{|c|c|c|c|c|} \\hline \\mathbf{\\times} & \\mathbf{RY} & \\mathbf{Ry} & \\mathbf{rY} & \\mathbf{ry} \\\\ \\hline \\mathbf{RY} & \\text{RRYY (RY)} & \\text{RRYy (RY)} & \\text{RrYY (RY)} & \\text{RrYy (RY)} \\\\ \\hline \\mathbf{Ry} & \\text{RRYy (RY)} & \\text{RRyy (RG)} & \\text{RrYy (RY)} & \\text{Rryy (RG)} \\\\ \\hline \\mathbf{rY} & \\text{RrYY (RY)} & \\text{RrYy (RY)} & \\text{rrYY (WY)} & \\text{rrYy (WY)} \\\\ \\hline \\mathbf{ry} & \\text{RrYy (RY)} & \\text{Rryy (RG)} & \\text{rrYy (WY)} & \\text{rryy (WG)} \\\\ \\hline \\end{array}$$\n\n5. $F_2$ Phenotypic Ratio:\n• Round Yellow (RY): $9$\n• Round Green (RG): $3$\n• Wrinkled Yellow (WY): $3$\n• Wrinkled Green (WG): $1$\n$$\\mathbf{\\text{Phenotypic Ratio } = 9 : 3 : 3 : 1}$$\n\n6. Law of Independent Assortment:\n"When two pairs of traits are combined in a hybrid, segregation of one pair of characters is completely independent of the other pair of characters during gamete formation."'
        }
      ]
    },
    {
      id: 'sci_sec_9_2',
      sectionNumber: '9.2',
      title: 'Biotechnology & Environmental Management',
      introText:
        'Recombinant DNA technology tools and environmental conservation through the 3Rs.',
      items: [
        {
          id: 'sci_item_9_3',
          type: 'definition',
          number: '9.3',
          title: 'Molecular Tools in Genetic Engineering',
          statementLatex: '\\begin{array}{|l|l|} \\hline \\textbf{Enzyme / Tool} & \\textbf{Biotechnological Function} \\\\ \\hline \\text{Restriction Endonucleases} & \\text{"Molecular Scissors" - cuts DNA at specific palindromic sequences} \\\\ \\text{DNA Ligase} & \\text{"Molecular Glue" - seals cut DNA fragments into recombinant vector} \\\\ \\text{Plasmids} & \\text{Cloning vectors carrying target genes into host bacteria} \\\\ \\hline \\end{array}',
          statementText:
            'Used in producing recombinant human insulin (Humulin), vaccines, and genetically modified crops.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_9_3',
          number: 'Unit 9 - 2 Marks Environmental Question',
          title: 'The 3Rs of Waste Management',
          difficulty: 'Foundational',
          statementLatex: '\\text{Expand and explain the 3R principle of environmental conservation. [2 Marks]}',
          description: 'Sustainable resource management.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What do the 3 Rs stand for?',
              hint: 'Reduce, Reuse, Recycle.',
              expectedInsight: 'Reduce consumption, Reuse materials, Recycle waste into new products.',
              latexIntermediate: '\\text{3Rs} = \\text{Reduce} + \\text{Reuse} + \\text{Recycle}',
              options: [
                'Reduce, Reuse, Recycle',
                'Refill, Restore, Replant'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{The 3Rs stand for: 1) Reduce (minimizing waste), 2) Reuse (using items repeatedly), 3) Recycle (reprocessing waste).}}',
          fullSolutionWalkthrough:
            '1. Reduce: Minimize the consumption of disposable items and natural resources (e.g., turning off unneeded lights, avoiding single-use plastics).\n2. Reuse: Use items repeatedly instead of discarding them after a single use (e.g., refilling glass bottles, using cloth carry bags).\n3. Recycle: Collect discarded materials like paper, metal, and plastic to reprocess them into fresh usable products, reducing raw material extraction and landfill load.'
        },
        {
          id: 'sci_prob_9_5',
          number: 'Unit 9 - 4 Marks Biotechnology Question',
          title: 'Stem Cells and their Medical Applications',
          difficulty: 'Intermediate',
          statementLatex: '\\text{What are Stem Cells? Name their two types and list two therapeutic applications. [4 Marks]}',
          description: 'Cell potency and regenerative medicine.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What is unique about stem cells?',
              hint: 'Undifferentiated biological cells that can differentiate into specialized cells and divide through mitosis.',
              expectedInsight: 'Pluripotent undifferentiated cells capable of continuous self-renewal.',
              latexIntermediate: '\\text{Stem Cell} \\longrightarrow \\text{Specialized Tissue (Neuron, Muscle, Blood cell)}',
              options: ['Undifferentiated cells capable of self-renewal and tissue specialization', 'Dead cells excreted by bone marrow'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Stem Cells: Undifferentiated cells with potency to regenerate and specialize into damaged body organs.}}',
          fullSolutionWalkthrough:
            '1. Definition:\nStem cells are undifferentiated, unspecialized biological cells that have the extraordinary potential to self-renew indefinitely through cell division and differentiate into specialized cell types (such as nerve cells, muscle cells, or blood cells).\n\n2. Two Major Types:\n• Embryonic Stem Cells (ESCs): Derived from the inner cell mass of the early blastocyst embryo. They are pluripotent, capable of differentiating into any cell type of the human body.\n• Adult (Somatic) Stem Cells: Found in specific mature tissues like red bone marrow, umbilical cord blood, and adipose tissue. They are multipotent and replenish dying cells and repair damaged tissues.\n\n3. Therapeutic Applications:\n• Stem Cell Therapy (Bone Marrow Transplantation): Used to treat blood cancers like leukemia and lymphoma by transplanting healthy hematopoietic stem cells.\n• Regenerative Medicine: Used to repair damaged cardiac muscle after myocardial infarction (heart attack) and to regenerate neurons in Parkinson’s disease and Alzheimer’s disease.'
        }
      ]
    }
  ]
};
