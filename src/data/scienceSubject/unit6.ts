import { BookChapter } from '../../types/math';

export const unit6ScienceSubject: BookChapter = {
  id: 'sci_unit_6',
  chapterNumber: 6,
  romanNumeral: 'VI',
  title: 'Unit 6: Solutions, Reactions & Carbon Compounds (கரைசல்கள், வேதிவினைகள் & கரிமச் சேர்மங்கள்)',
  subtitle: 'Concentration of Solutions, Types of Chemical Reactions, pH Scale & Organic Functional Groups',
  synopsis:
    'Tamil Nadu Class 10 Science (Chemistry) Units 9, 10 & 11. Solute, solvent, mass percentage formula, types of chemical reactions (Combination, Decomposition, Displacement, Double Displacement), pH calculation ($\text{pH} = -\\log_{10}[\\text{H}^+]$), self-ionization of water ($K_w = 10^{-14}$), versatile nature of carbon (catenation, tetravalency), IUPAC naming of hydrocarbons, Ethanol and Ethanoic acid reactions.',
  prerequisites: ['Balancing Chemical Equations', 'Acids and Bases', 'Covalent Bonding'],
  sections: [
    {
      id: 'sci_sec_6_1',
      sectionNumber: '6.1',
      title: 'Solutions, Chemical Reactions & pH Scale',
      introText:
        'Solution concentrations, reaction thermodynamics, equilibrium, and hydrogen ion concentration.',
      items: [
        {
          id: 'sci_item_6_1',
          type: 'theorem',
          number: '6.1',
          title: 'Mass Percentage of a Solution',
          statementLatex: '\\text{Mass \\% of solute} = \\frac{\\text{Mass of solute}}{\\text{Mass of solute} + \\text{Mass of solvent}} \\times 100\\%',
          statementText:
            'Expresses concentration as the number of grams of solute dissolved in $100\\text{ g}$ of total solution.'
        },
        {
          id: 'sci_item_6_2',
          type: 'theorem',
          number: '6.2',
          title: 'pH Scale & Ionic Product of Water',
          statementLatex: '\\text{pH} = -\\log_{10}[\\text{H}^+], \\quad \\text{pOH} = -\\log_{10}[\\text{OH}^-], \\quad \\text{pH} + \\text{pOH} = 14 \\; (\\text{at } 25^\\circ\\text{C})',
          statementText:
            'Devised by S.P.L. Sorenson. $\\text{pH} < 7$ is acidic, $\\text{pH} = 7$ is neutral, $\\text{pH} > 7$ is alkaline.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_6_1',
          number: 'Unit 6 - pH Numerical',
          title: 'Calculate pH of HCl Solution',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Calculate the pH of } 0.001\\text{ M } \\text{HCl} \\text{ solution.}',
          description: 'Logarithmic acid calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Express $[\text{H}^+] = 0.001\\text{ M}$ in scientific notation.',
              hint: '$0.001 = 10^{-3}$.',
              expectedInsight: '$[\\text{H}^+] = 10^{-3}\\text{ mol/L}$.',
              latexIntermediate: '[\\text{H}^+] = 10^{-3}\\text{ M}',
              options: ['10^-3 M', '10^-2 M'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Apply the formula $\\text{pH} = -\\log_{10}[\\text{H}^+]$.',
              hint: '$\\text{pH} = -\\log_{10}(10^{-3}) = -(-3) = 3$.',
              expectedInsight: '$\\text{pH} = 3$.',
              latexIntermediate: '\\text{pH} = -(-3) = 3',
              options: ['pH = 3', 'pH = 11'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{pH} = 3 \\quad (\\text{Strongly Acidic})}',
          fullSolutionWalkthrough:
            'Given:\nConcentration of $\\text{HCl} = 0.001\\text{ M} = 10^{-3}\\text{ mol/L}$.\nSince $\\text{HCl}$ is a strong monoprotic acid:\n$$[\\text{H}^+] = 10^{-3}\\text{ M}$$\n$$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = -(-3) = 3$$\nThe solution has a $\\text{pH}$ of $3$, indicating an acidic solution.'
        }
      ]
    },
    {
      id: 'sci_sec_6_2',
      sectionNumber: '6.2',
      title: 'Carbon & its Compounds (Organic Chemistry)',
      introText:
        'Catenation, homologous series, functional groups, ethanol, and ethanoic acid.',
      items: [
        {
          id: 'sci_item_6_3',
          type: 'definition',
          number: '6.3',
          title: 'Catenation & Tetravalency',
          statementLatex: '\\text{Carbon } ({}_6\\text{C}) \\implies 1s^2 \\; 2s^2 \\; 2p^2 \\implies \\text{Valency} = 4 \\; (\\text{Tetravalent})',
          statementText:
            'Catenation is the unique ability of carbon atoms to form strong covalent bonds with other carbon atoms, creating extensive chains, branched skeletons, and rings.'
        },
        {
          id: 'sci_item_6_4',
          type: 'theorem',
          number: '6.4',
          title: 'Esterification Reaction',
          statementLatex: '\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O} \\; (\\text{Ethyl Ethanoate - Sweet smelling ester})',
          statementText:
            'Reaction of ethanoic acid with ethanol in the presence of concentrated sulfuric acid catalyst produces a fruity sweet-smelling ester.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_6_2',
          number: 'Unit 6 - 2 Marks Reaction Question',
          title: 'Esterification Equation',
          difficulty: 'Intermediate',
          statementLatex: '\\text{What is Esterification? Write the balanced chemical equation. [2 Marks]}',
          description: 'Organic synthesis of esters.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Which acid and alcohol react in esterification?',
              hint: 'Ethanoic acid and ethanol in presence of concentrated sulfuric acid.',
              expectedInsight: 'Acetic acid + Ethanol $\\rightarrow$ Ethyl ethanoate + Water.',
              latexIntermediate: '\\text{Acid} + \\text{Alcohol} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4} \\text{Ester} + \\text{Water}',
              options: [
                'Carboxylic acid reacts with alcohol to form sweet-smelling ester',
                'Alkane reacts with halogen'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}}',
          fullSolutionWalkthrough:
            'Esterification is the reaction between an organic carboxylic acid and an alcohol in the presence of an acid catalyst (conc. $\\text{H}_2\\text{SO}_4$) to produce a sweet, fruity-smelling compound called an ester:\n$$\\text{CH}_3\\text{COOH} \\text{ (Ethanoic acid)} + \\text{C}_2\\text{H}_5\\text{OH} \\text{ (Ethanol)} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4} \\text{CH}_3\\text{COOC}_2\\text{H}_5 \\text{ (Ethyl ethanoate)} + \\text{H}_2\\text{O}$$'
        }
      ]
    }
  ]
};
