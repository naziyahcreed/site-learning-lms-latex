import { BookChapter } from '../../types/math';

export const unit4ScienceSubject: BookChapter = {
  id: 'sci_unit_4',
  chapterNumber: 4,
  romanNumeral: 'IV',
  title: 'Unit 4: Electricity & Nuclear Physics (மின்னோட்டவியல் & அணுக்கரு இயற்பியல்)',
  subtitle: 'Ohm’s Law, Resistors in Series & Parallel, Joule’s Heating, Nuclear Fission & Fusion',
  synopsis:
    'Tamil Nadu Class 10 Science (Physics) Units 4 & 6. Electric current $I = Q/t$, Ohm’s Law $V = IR$, equivalent resistance formulas for series and parallel networks, Joule’s Law of Heating $H = I^2Rt$, Electrical Power $P = VI$, Radioactivity ($\\alpha, \\beta, \\gamma$ decay), Mass defect, Einstein’s mass-energy equation $E = mc^2$, Nuclear Fission and Fusion reactions.',
  prerequisites: ['Electric Charge (Coulombs)', 'Basic Atomic Structure (Protons, Neutrons, Electrons)'],
  sections: [
    {
      id: 'sci_sec_4_1',
      sectionNumber: '4.1',
      title: 'Current Electricity & Circuit Laws',
      introText:
        'Flow of electric charges through conductors, resistance, and combinations of resistors.',
      items: [
        {
          id: 'sci_item_4_1',
          type: 'theorem',
          number: '4.1',
          title: 'Ohm’s Law & Joule’s Law of Heating',
          statementLatex: 'V = I R, \\quad H = I^2 R t = V I t = \\frac{V^2}{R} t \\quad [\\text{Joules}]',
          statementText:
            'At constant temperature, the electric current flowing through a conductor is directly proportional to the potential difference across its ends ($V \\propto I$). Joule’s Law states that heat produced in a resistor is proportional to the square of current, resistance, and time.'
        },
        {
          id: 'sci_item_4_2',
          type: 'theorem',
          number: '4.2',
          title: 'Resistors in Series and Parallel Networks',
          statementLatex: '\\begin{aligned} \\text{Series: } & R_s = R_1 + R_2 + R_3 + \\dots + R_n \\\\[3pt] \\text{Parallel: } & \\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\dots + \\frac{1}{R_n} \\end{aligned}',
          statementText:
            'In series, current is constant and equivalent resistance increases. In parallel, voltage is constant and equivalent resistance decreases.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_4_1',
          number: 'Unit 4 - Circuit Calculation',
          title: 'Equivalent Resistance in Parallel',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Two resistors of } 6\\,\\Omega \\text{ and } 3\\,\\Omega \\text{ are connected in parallel across a } 12\\text{ V battery. Calculate: (i) Equivalent resistance, (ii) Total current.}',
          description: 'Parallel resistor network calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Find equivalent resistance $R_p$ using $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2}$.',
              hint: '$1/R_p = 1/6 + 1/3 = (1 + 2)/6 = 3/6 = 1/2$.',
              expectedInsight: '$R_p = 2\\,\\Omega$.',
              latexIntermediate: '\\frac{1}{R_p} = \\frac{1}{6} + \\frac{1}{3} = \\frac{3}{6} \\implies R_p = 2\\,\\Omega',
              options: ['2 Ω', '9 Ω', '18 Ω'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Find total current $I = V / R_p$.',
              hint: '$V = 12\\text{ V}$, $R_p = 2\\,\\Omega$.',
              expectedInsight: '$I = 12 / 2 = 6\\text{ A}$.',
              latexIntermediate: 'I = \\frac{12\\text{ V}}{2\\,\\Omega} = 6\\text{ A}',
              options: ['6 A', '4 A'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{R_p = 2\\,\\Omega, \\quad I = 6\\text{ A}}',
          fullSolutionWalkthrough:
            '1. Equivalent resistance in parallel:\n$$\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2} \\implies R_p = 2\\,\\Omega$$\n\n2. Total current drawn from battery:\n$$I = \\frac{V}{R_p} = \\frac{12\\text{ V}}{2\\,\\Omega} = 6\\text{ Amperes (A)}$$'
        }
      ]
    },
    {
      id: 'sci_sec_4_2',
      sectionNumber: '4.2',
      title: 'Nuclear Physics - Fission & Fusion',
      introText:
        'Nuclear reactions, mass defect $\\Delta m$, binding energy $E = \\Delta m c^2$, and comparison of fission vs fusion.',
      items: [
        {
          id: 'sci_item_4_3',
          type: 'theorem',
          number: '4.3',
          title: 'Nuclear Fission & Fusion Reactions',
          statementLatex: '\\begin{aligned} \\text{Fission: } & {}^{235}_{92}\\text{U} + {}^1_0\\text{n} \\longrightarrow {}^{141}_{56}\\text{Ba} + {}^{92}_{36}\\text{Kr} + 3\\,{}^1_0\\text{n} + Q \\; (\\approx 200\\text{ MeV}) \\\\[4pt] \\text{Fusion: } & 4\\,{}^1_1\\text{H} \\longrightarrow {}^4_2\\text{He} + 2\\,{}^0_{+1}\\text{e} + 2\\,\\nu + Q \\; (\\approx 26.7\\text{ MeV}) \\end{aligned}',
          statementText:
            'Nuclear Fission splits a heavy nucleus into lighter fragments. Nuclear Fusion fuses two lighter nuclei at extremely high temperatures ($10^7 - 10^8\\text{ K}$) into a heavier nucleus.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_4_2',
          number: 'Unit 4 - 4 Marks Comparison',
          title: 'Differentiate Nuclear Fission and Fusion',
          difficulty: 'Advanced',
          statementLatex: '\\text{Tabulate the key differences between Nuclear Fission and Nuclear Fusion. [4 Marks]}',
          description: 'Essential Board Examination question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What happens to the nuclei in fission vs fusion? What temperature is needed?',
              hint: 'Fission splits heavy nuclei at room temp; fusion combines light nuclei at extreme $10^7\\text{ K}$.',
              expectedInsight: 'Fission = splitting at normal temp; Fusion = combining at stellar temperatures ($10^7\\text{ K}$).',
              latexIntermediate: '\\text{Fission (Splitting)} \\neq \\text{Fusion (Combining at } 10^7\\text{ K)}',
              options: [
                'Fission splits heavy nuclei; Fusion combines light nuclei at high temp',
                'Both happen at room temperature'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\begin{array}{|l|l|l|} \\hline \\textbf{Feature} & \\textbf{Nuclear Fission} & \\textbf{Nuclear Fusion} \\\\ \\hline \\text{Process} & \\text{Splitting of heavy nucleus} & \\text{Combination of light nuclei} \\\\ \\text{Temperature} & \\text{Can occur at room temperature} & \\text{Requires } 10^7 - 10^8\\text{ K} \\\\ \\text{Fuel} & \\text{Uranium } ({}^{235}\\text{U})\\text{, Plutonium} & \\text{Hydrogen isotopes (Deuterium, Tritium)} \\\\ \\text{Harmful Radiation} & \\text{Emits dangerous } \\alpha, \\beta, \\gamma \\text{ rays} & \\text{Produces very little radioactive waste} \\\\ \\text{Example} & \\text{Atom bomb, Nuclear reactor} & \\text{Hydrogen bomb, Solar/Stellar energy} \\\\ \\hline \\end{array}',
          fullSolutionWalkthrough:
            '1. Definition: Nuclear fission is the process of splitting a heavy nucleus into two smaller nuclei with the release of enormous energy. Nuclear fusion is the combining of two lighter nuclei to form a heavier nucleus.\n2. Conditions: Fission can occur at room temperature and is triggered by slow neutrons. Fusion requires thermonuclear conditions ($10^7$ to $10^8$ Kelvin) to overcome the electrostatic Coulomb repulsion between positively charged protons.\n3. Occurrence: Fission is utilized in commercial nuclear power plants. Fusion powers the sun and stars.'
        }
      ]
    }
  ]
};
