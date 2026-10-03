import { BookChapter } from '../../types/math';

export const unit5ScienceSubject: BookChapter = {
  id: 'sci_unit_5',
  chapterNumber: 5,
  romanNumeral: 'V',
  title: 'Unit 5: Atoms, Molecules & Periodic Table (அணுக்களும் தனிமங்களின் வகைப்பாடும்)',
  subtitle: 'Mole Concept, Avogadro’s Number, Modern Periodic Law & Metallurgy',
  synopsis:
    'Tamil Nadu Class 10 Science (Chemistry) Units 7 & 8. Relative Atomic Mass (RAM), Relative Molecular Mass (RMM), Mole Concept ($n = \\text{Mass}/\\text{Molar Mass}$), Avogadro’s Hypothesis ($N_A = 6.023 \\times 10^{23}$), Vapour Density relation ($\text{RMM} = 2 \\times \\text{VD}$), Modern Periodic Table groups, periods, periodic properties trends, and metallurgy of Aluminium.',
  prerequisites: ['Atomic Number & Mass Number', 'Electronic Configuration', 'Chemical Formulas'],
  sections: [
    {
      id: 'sci_sec_5_1',
      sectionNumber: '5.1',
      title: 'Mole Concept & Avogadro’s Hypothesis',
      introText:
        'Quantitative chemistry relating mass, moles, number of atoms, and volume of gases at STP.',
      items: [
        {
          id: 'sci_item_5_1',
          type: 'theorem',
          number: '5.1',
          title: 'The Master Mole Formula',
          statementLatex: 'n = \\frac{\\text{Mass in grams } (m)}{\\text{Molar Mass } (M)} = \\frac{\\text{Number of Particles } (N)}{N_A} = \\frac{\\text{Volume at STP (L)}}{22.4\\text{ L}}',
          statementText:
            'Where $N_A = 6.023 \\times 10^{23} \\text{ particles/mol}$ (Avogadro’s Number). One mole of any gas at STP occupies $22.4\\text{ Litres}$ (Molar Volume).'
        },
        {
          id: 'sci_item_5_2',
          type: 'theorem',
          number: '5.2',
          title: 'Relation between Relative Molecular Mass and Vapour Density',
          statementLatex: '\\text{Relative Molecular Mass (RMM)} = 2 \\times \\text{Vapour Density (VD)}',
          statementText:
            'Vapour density is the ratio of the mass of a certain volume of a gas to the mass of the same volume of hydrogen gas under identical conditions of temperature and pressure.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_5_1',
          number: 'Unit 5 - Mole Numerical',
          title: 'Moles in Aluminium Sample',
          difficulty: 'Foundational',
          statementLatex: '\\text{Calculate the number of moles in } 54\\text{ g of Aluminium (Atomic mass of Al } = 27\\text{ g/mol}).',
          description: 'Standard formula substitution.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Substitute mass and molar mass into $n = m / M$.',
              hint: '$m = 54\\text{ g}$, $M = 27\\text{ g/mol}$.',
              expectedInsight: '$n = 54 / 27 = 2\\text{ moles}$.',
              latexIntermediate: 'n = \\frac{54\\text{ g}}{27\\text{ g/mol}} = 2\\text{ moles}',
              options: ['2 moles', '1 mole', '3 moles'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{n = 2\\text{ moles}}',
          fullSolutionWalkthrough:
            'Given:\nMass of Aluminium $m = 54\\text{ g}$\nAtomic mass of Aluminium $M = 27\\text{ g/mol}$\nFormula:\n$$n = \\frac{\\text{Mass}}{\\text{Atomic Mass}} = \\frac{54}{27} = 2\\text{ moles}$$\nThere are $2\\text{ moles}$ of Aluminium (containing $2 \\times 6.023 \\times 10^{23} = 1.2046 \\times 10^{24}$ atoms).'
        },
        {
          id: 'sci_prob_5_2',
          number: 'Unit 5 - 4 Marks Derivation',
          title: 'Deduce Relation: RMM = 2 × VD',
          difficulty: 'Advanced',
          statementLatex: '\\text{Derive the mathematical relationship between Relative Molecular Mass and Vapour Density. [4 Marks]}',
          description: 'Avogadro’s law application.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State the definition of Vapour Density (VD).',
              hint: 'Mass of volume $V$ of gas divided by mass of same volume $V$ of hydrogen at same $T$ and $P$.',
              expectedInsight: '$\\text{VD} = \\frac{\\text{Mass of } V \\text{ volume of gas}}{\\text{Mass of } V \\text{ volume of } \\text{H}_2}$.',
              latexIntermediate: '\\text{VD} = \\frac{\\text{Mass of } V \\text{ volume of gas at STP}}{\\text{Mass of } V \\text{ volume of } \\text{H}_2 \\text{ at STP}}',
              options: [
                'Ratio of mass of gas to mass of equal volume of H2 at same T and P',
                'Ratio of density of gas to density of water'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Apply Avogadro’s hypothesis ($V$ contains $n$ molecules).',
              hint: 'Replace volume with $1$ molecule of gas and $1$ molecule of $\\text{H}_2$ ($2$ atoms of H).',
              expectedInsight: '$\\text{VD} = \\frac{\\text{Mass of 1 molecule of gas}}{2 \\times \\text{Mass of 1 atom of H}}$.',
              latexIntermediate: '\\text{VD} = \\frac{\\text{Mass of 1 molecule of gas}}{2 \\times \\text{Mass of 1 atom of H}} = \\frac{\\text{RMM}}{2}',
              options: [
                'VD = RMM / 2 => RMM = 2 * VD',
                'VD = 2 * RMM'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{RMM} = 2 \\times \\text{VD} \\quad [\\text{Hence Derived}]}',
          fullSolutionWalkthrough:
            '1. Definition of Vapour Density (VD):\n$$\\text{VD} = \\frac{\\text{Mass of a given volume of gas/vapour at STP}}{\\text{Mass of the same volume of hydrogen at STP}}$$\n\n2. Applying Avogadro’s Law (equal volumes of gases contain equal number of molecules $n$):\n$$\\text{VD} = \\frac{\\text{Mass of } n \\text{ molecules of gas at STP}}{\\text{Mass of } n \\text{ molecules of hydrogen at STP}}$$\n\n3. Setting $n = 1$ molecule:\n$$\\text{VD} = \\frac{\\text{Mass of 1 molecule of gas}}{\\text{Mass of 1 molecule of } \\text{H}_2}$$\n\n4. Since hydrogen is diatomic, 1 molecule of $\\text{H}_2$ contains 2 atoms of hydrogen:\n$$\\text{VD} = \\frac{\\text{Mass of 1 molecule of gas}}{2 \\times \\text{Mass of 1 atom of hydrogen}}$$\n$$\\text{VD} = \\frac{1}{2} \\times \\left[ \\frac{\\text{Mass of 1 molecule of gas}}{\\text{Mass of 1 atom of hydrogen}} \\right]$$\n\n5. By definition, the bracketed term is the Relative Molecular Mass (RMM):\n$$\\text{VD} = \\frac{\\text{RMM}}{2} \\implies \\mathbf{\\text{Relative Molecular Mass (RMM)} = 2 \\times \\text{Vapour Density (VD)}}.$$'
        }
      ]
    },
    {
      id: 'sci_sec_5_2',
      sectionNumber: '5.2',
      title: 'Modern Periodic Trends & Metallurgy',
      introText:
        'Periodic variations across periods and down groups (atomic radius, ionization energy, electronegativity).',
      items: [
        {
          id: 'sci_item_5_3',
          type: 'theorem',
          number: '5.3',
          title: 'Periodic Trends Summary',
          statementLatex: '\\begin{array}{|l|l|l|} \\hline \\textbf{Periodic Property} & \\textbf{Across a Period (Left to Right)} & \\textbf{Down a Group (Top to Bottom)} \\\\ \\hline \\text{Atomic Radius} & \\text{Decreases (Effective nuclear charge increases)} & \\text{Increases (New shells added)} \\\\ \\text{Ionization Energy} & \\text{Increases} & \\text{Decreases} \\\\ \\text{Electron Affinity} & \\text{Increases} & \\text{Decreases} \\\\ \\text{Electronegativity} & \\text{Increases} & \\text{Decreases} \\\\ \\text{Metallic Character} & \\text{Decreases (Non-metallic increases)} & \\text{Increases (Metallic increases)} \\\\ \\hline \\end{array}',
          statementText:
            'These periodic trends govern the chemical reactivity and bonding behavior of elements across the periodic table.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_5_3',
          number: 'Unit 5 - 2 Marks Reasoning',
          title: 'Atomic Radius Trend across Period',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Why does atomic radius decrease across a period from left to right? [2 Marks]}',
          description: 'Effective nuclear charge and orbital pull.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Does the number of shells change across a period? What happens to nuclear charge?',
              hint: 'Shell number remains constant while nuclear protons increase, pulling electrons closer.',
              expectedInsight: 'Nuclear charge increases with the same number of shells, pulling the electron cloud inward.',
              latexIntermediate: 'Z_{\\text{eff}} \\uparrow \\; (n = \\text{constant}) \\implies \\text{Atomic radius } r \\downarrow',
              options: [
                'Effective nuclear charge increases pulling electrons inward',
                'Electrons repel each other pushing shells outward'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: As nuclear charge } (Z) \\text{ increases without adding new shells, electrostatic attraction pulls electrons inward.}}',
          fullSolutionWalkthrough:
            'Across a period from left to right:\n1. Electrons are sequentially added into the same valence shell (principal quantum number $n$ remains constant).\n2. Concurrently, the number of protons in the nucleus increases by one per element, increasing the effective nuclear charge ($Z_{\\text{eff}}$).\n3. This stronger positive electrostatic pull draws the valence electron cloud closer to the nucleus, causing atomic radius to decrease.'
        }
      ]
    }
  ]
};
