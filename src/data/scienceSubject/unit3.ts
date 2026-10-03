import { BookChapter } from '../../types/math';

export const unit3ScienceSubject: BookChapter = {
  id: 'sci_unit_3',
  chapterNumber: 3,
  romanNumeral: 'III',
  title: 'Unit 3: Thermal Physics & Acoustics (வெப்ப இயற்பியல் & ஒலியியல்)',
  subtitle: 'Gas Laws, Ideal Gas Equation $PV = nRT$, Speed of Sound, Echo & Doppler Effect',
  synopsis:
    'Tamil Nadu Class 10 Science (Physics) Units 3 & 5. Fundamental gas laws (Boyle’s, Charles’s, Avogadro’s Laws), Ideal Gas equation $PV = nRT$, real and apparent expansion of liquids, propagation and velocity of sound waves, conditions for echo ($d \\ge 17.2\\text{ m}$), and the Doppler effect formulas.',
  prerequisites: ['Temperature Scales (Kelvin, Celsius)', 'Wave Properties ($v = f\\lambda$)'],
  sections: [
    {
      id: 'sci_sec_3_1',
      sectionNumber: '3.1',
      title: 'Gas Laws & Ideal Gas Equation',
      introText:
        'Thermodynamic relations connecting pressure, volume, temperature, and quantity of matter.',
      items: [
        {
          id: 'sci_item_3_1',
          type: 'theorem',
          number: '3.1',
          title: 'The Fundamental Gas Laws',
          statementLatex: '\\begin{array}{|l|l|l|} \\hline \\textbf{Law} & \\textbf{Constant Parameter} & \\textbf{Mathematical Relation} \\\\ \\hline \\text{Boyle’s Law} & \\text{Temperature } (T) & P \\propto \\frac{1}{V} \\implies PV = \\text{constant} \\\\ \\text{Charles’s Law} & \\text{Pressure } (P) & V \\propto T \\implies \\frac{V}{T} = \\text{constant} \\\\ \\text{Avogadro’s Law} & \\text{Pressure \\& Temperature} & V \\propto n \\implies \\frac{V}{n} = \\text{constant} \\\\ \\hline \\end{array}',
          statementText:
            'Combining these three laws yields the Universal Ideal Gas Equation.'
        },
        {
          id: 'sci_item_3_2',
          type: 'theorem',
          number: '3.2',
          title: 'Ideal Gas Equation',
          statementLatex: 'PV = nRT = N k_B T \\quad \\left(R = 8.314 \\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}, \\; k_B = \\frac{R}{N_A} = 1.38 \\times 10^{-23} \\text{ J/K}\\right)',
          statementText:
            'Where $P$ is pressure, $V$ is volume, $n$ is number of moles, $R$ is universal gas constant, $T$ is absolute temperature in Kelvin.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_3_1',
          number: 'Unit 3 - 2 Marks Short Answer',
          title: 'State Boyle’s Law',
          difficulty: 'Foundational',
          statementLatex: '\\text{State Boyle’s law with its mathematical formula. [2 Marks]}',
          description: 'Constant temperature gas behavior.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'At constant temperature, how is pressure related to volume?',
              hint: 'Inversely proportional.',
              expectedInsight: 'Pressure is inversely proportional to volume at constant temperature.',
              latexIntermediate: 'P \\propto \\frac{1}{V} \\implies PV = \\text{constant}',
              options: [
                'Pressure is inversely proportional to volume at constant temperature',
                'Pressure is directly proportional to volume'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{P \\propto \\frac{1}{V} \\implies P_1 V_1 = P_2 V_2 \\quad (T = \\text{constant})}',
          fullSolutionWalkthrough:
            'Boyle’s Law states that at constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure. If pressure increases, volume decreases proportionately such that $P \\times V = \\text{constant}$.'
        }
      ]
    },
    {
      id: 'sci_sec_3_2',
      sectionNumber: '3.2',
      title: 'Acoustics, Echo & Doppler Effect',
      introText:
        'Reflection of sound waves, persistence of hearing, echo distance calculation, and frequency shift due to relative motion.',
      items: [
        {
          id: 'sci_item_3_3',
          type: 'theorem',
          number: '3.3',
          title: 'Minimum Distance for an Echo',
          statementLatex: '2d = v \\times t \\implies d = \\frac{v \\times t}{2} = \\frac{344 \\times 0.1}{2} = 17.2\\text{ m}',
          statementText:
            'The sensation of sound persists in the human brain for about $0.1\\text{ s}$ (persistence of hearing). Therefore, to hear a distinct echo at $20^\\circ\\text{C}$ ($v = 344\\text{ m/s}$), the minimum distance from the reflecting surface must be $17.2\\text{ m}$.'
        },
        {
          id: 'sci_item_3_4',
          type: 'theorem',
          number: '3.4',
          title: 'Doppler Effect Equation',
          statementLatex: 'f\' = \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right) f',
          statementText:
            'Where $f$ is actual source frequency, $f\'$ is apparent observed frequency, $v$ is velocity of sound, $v_o$ is velocity of observer, $v_s$ is velocity of source.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_3_2',
          number: 'Unit 3 - Echo Numerical Problem',
          title: 'Echo Distance Calculation',
          difficulty: 'Intermediate',
          statementLatex: '\\text{A man fires a gun and hears its echo after } 2\\text{ s}. \\text{ The speed of sound is } 340\\text{ m/s}. \\text{ Calculate the distance of the reflecting cliff.}',
          description: 'Application of two-way travel formula $2d = vt$.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Sound travels to the cliff and back. What is the total path distance?',
              hint: 'Total distance = $2d$.',
              expectedInsight: '$2d = v \\times t = 340 \\times 2 = 680\\text{ m}$.',
              latexIntermediate: '2d = v \\times t = 340 \\times 2 = 680\\text{ m}',
              options: ['2d = 680 m', 'd = 680 m'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find the one-way distance to the cliff $d$.',
              hint: '$d = 680 / 2 = 340\\text{ m}$.',
              expectedInsight: '$d = 340\\text{ m}$.',
              latexIntermediate: 'd = \\frac{680}{2} = 340\\text{ m}',
              options: ['340 m', '170 m'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{d = 340\\text{ m}}',
          fullSolutionWalkthrough:
            'Given:\nTime elapsed $t = 2\\text{ s}$\nSpeed of sound in air $v = 340\\text{ m/s}$\nFormula:\n$$2d = v \\times t \\implies d = \\frac{v \\times t}{2} = \\frac{340 \\times 2}{2} = 340\\text{ meters}$$\nThe distance to the reflecting cliff is $340\\text{ m}$.'
        }
      ]
    }
  ]
};
