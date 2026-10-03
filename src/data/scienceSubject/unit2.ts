import { BookChapter } from '../../types/math';

export const unit2ScienceSubject: BookChapter = {
  id: 'sci_unit_2',
  chapterNumber: 2,
  romanNumeral: 'II',
  title: 'Unit 2: Optics (ஒளியியல்)',
  subtitle: 'Refraction of Light, Snell’s Law, Lenses, Eye Defects & Optical Instruments',
  synopsis:
    'Tamil Nadu Class 10 Science (Physics) Unit 2. In-depth mathematical and conceptual study of Laws of Refraction (Snell’s Law), Refractive Index $\\mu = c/v$, Lens Formula $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$, Magnification $m = v/u$, Lens Maker’s Formula, Power of a Lens ($P = 1/f$), Human Eye defects (Myopia, Hypermetropia, Presbyopia, Astigmatism) and their corrective lenses.',
  prerequisites: ['Reflection of Light', 'Geometric Rays', 'Cartesian Sign Convention'],
  sections: [
    {
      id: 'sci_sec_2_1',
      sectionNumber: '2.1',
      title: 'Refraction, Snell’s Law & Lens Formula',
      introText:
        'Principles governing the bending of light across optical interfaces and image formation by convex and concave lenses.',
      items: [
        {
          id: 'sci_item_2_1',
          type: 'theorem',
          number: '2.1',
          title: 'Snell’s Law of Refraction (Second Law of Light)',
          statementLatex: '\\frac{\\sin i}{\\sin r} = \\frac{\\mu_2}{\\mu_1} = \\mu_{12} = \\frac{v_1}{v_2}',
          statementText:
            'The ratio of the sine of the angle of incidence ($i$) to the sine of the angle of refraction ($r$) is equal to the ratio of the refractive indices of the two media.'
        },
        {
          id: 'sci_item_2_2',
          type: 'theorem',
          number: '2.2',
          title: 'Lens Formula & Magnification',
          statementLatex: '\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}, \\quad m = \\frac{h\'}{h} = \\frac{v}{u}, \\quad P = \\frac{1}{f \\text{ (in meters)}} \\text{ Dioptre (D)}',
          statementText:
            'Where $f$ is focal length, $v$ is image distance, $u$ is object distance, and $P$ is optical power in Dioptres.'
        },
        {
          id: 'sci_item_2_3',
          type: 'theorem',
          number: '2.3',
          title: 'Lens Maker’s Formula',
          statementLatex: '\\frac{1}{f} = (\\mu - 1) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)',
          statementText:
            'Relates focal length of a lens to its refractive index $\\mu$ and radii of curvature $R_1, R_2$ of its two spherical surfaces.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_2_1',
          number: 'Unit 2 - Objective MCQ',
          title: 'Refractive Index of Diamond',
          difficulty: 'Foundational',
          statementLatex: '\\text{The refractive index of diamond is approximately...}',
          description: 'Maximum optical density among common transparent materials.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What is the absolute refractive index of diamond?',
              hint: 'Light travels slowest in diamond ($\approx 1.24 \\times 10^8$ m/s).',
              expectedInsight: '$\\mu = 2.42$.',
              latexIntermediate: '\\mu_{\\text{diamond}} = 2.42',
              options: ['2.42', '1.33', '1.50'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: 2.42}}',
          fullSolutionWalkthrough:
            'Diamond has a refractive index of approximately 2.42. Because of this high refractive index and low critical angle ($24.4^\\circ$), light undergoes multiple total internal reflections, giving diamonds their brilliant sparkle.'
        },
        {
          id: 'sci_prob_2_2',
          number: 'Unit 2 - 4 Marks Comprehensive Question',
          title: 'Myopia vs Hypermetropia (Defects of Vision)',
          difficulty: 'Advanced',
          statementLatex: '\\text{Differentiate between Myopia and Hypermetropia with causes and remedies. [4 Marks]}',
          description: 'Comparison of near-sightedness and far-sightedness.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'What can a person with Myopia see clearly? Which lens remedies it?',
              hint: 'Near objects clear; distant objects blurred. Corrected with concave lens.',
              expectedInsight: 'Myopia = near-sightedness; image falls in front of retina; concave lens corrects it.',
              latexIntermediate: '\\text{Myopia} \\implies \\text{Concave lens of focal length } f = -d',
              options: [
                'Nearby objects clear; distant blurred; corrected by concave lens',
                'Distant objects clear; corrected by convex lens'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'What can a person with Hypermetropia see clearly? Which lens remedies it?',
              hint: 'Distant objects clear; nearby blurred. Corrected with convex lens.',
              expectedInsight: 'Hypermetropia = far-sightedness; image falls behind retina; convex lens corrects it.',
              latexIntermediate: '\\text{Hypermetropia} \\implies \\text{Convex lens of focal length } f = \\frac{d \\cdot D}{d - D}',
              options: [
                'Distant objects clear; nearby blurred; corrected by convex lens',
                'Only cylindrical lens can correct it'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\begin{array}{|l|l|l|} \\hline \\textbf{Feature} & \\textbf{Myopia (Short-sightedness)} & \\textbf{Hypermetropia (Long-sightedness)} \\\\ \\hline \\text{Vision} & \\text{Near objects clear; distant blurred} & \\text{Distant objects clear; near blurred} \\\\ \\text{Eyeball shape} & \\text{Eyeball lengthens} & \\text{Eyeball shortens} \\\\ \\text{Focal length} & \\text{Focal length of eye lens decreases} & \\text{Focal length of eye lens increases} \\\\ \\text{Image focus} & \\text{Forms in front of the retina} & \\text{Forms behind the retina} \\\\ \\text{Corrective Lens} & \\mathbf{\\text{Concave lens (diverging)}} & \\mathbf{\\text{Convex lens (converging)}} \\\\ \\hline \\end{array}',
          fullSolutionWalkthrough:
            '1. Myopia (Short-sightedness):\n• The affected person can see nearby objects clearly, but cannot see distant objects distinctly.\n• Causes: Elongation of the eyeball or excessive curvature of the eye cornea, causing rays from infinity to focus in front of the retina.\n• Remedy: Corrected using a suitable concave lens (diverging lens) which diverges the incoming parallel rays before entering the eye.\n\n2. Hypermetropia (Long-sightedness):\n• The affected person can see distant objects clearly, but cannot see nearby objects distinctly.\n• Causes: Shortening of the eyeball or increase in focal length of the eye lens, causing rays from the near point to focus behind the retina.\n• Remedy: Corrected using a suitable convex lens (converging lens) which converges the incoming rays onto the retina.'
        },
        {
          id: 'sci_prob_2_3',
          number: 'Unit 2 - Numerical Problem',
          title: 'Power of a Corrective Lens',
          difficulty: 'Intermediate',
          statementLatex: '\\text{A person requires a lens of focal length } -50\\text{ cm. What is the power of the lens and the nature of the lens?}',
          description: 'Calculate lens power using $P = 1/f$.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Convert focal length $-50\\text{ cm}$ into meters.',
              hint: '$f = -50/100\\text{ m} = -0.5\\text{ m}$.',
              expectedInsight: '$f = -0.5\\text{ m}$.',
              latexIntermediate: 'f = -0.5\\text{ m}',
              options: ['-0.5 m', '-5.0 m'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate power $P = 1/f$.',
              hint: '$P = 1/(-0.5) = -2\\text{ D}$.',
              expectedInsight: '$P = -2\\text{ D}$; negative sign means concave lens.',
              latexIntermediate: 'P = \\frac{1}{-0.5\\text{ m}} = -2\\text{ D}',
              options: ['-2 D (Concave lens)', '+2 D (Convex lens)'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{P = -2\\text{ D} \\quad (\\text{Concave / Diverging Lens})}',
          fullSolutionWalkthrough:
            'Given:\nFocal length $f = -50\\text{ cm} = -0.5\\text{ m}$\nFormula:\n$$P = \\frac{1}{f \\text{ (in m)}} = \\frac{1}{-0.5\\text{ m}} = -2\\text{ Dioptres (D)}$$\nSince the focal length and power are negative, the lens is a Concave lens (used for correcting Myopia).'
        }
      ]
    }
  ]
};
