import { BookChapter } from '../../types/math';

export const unit1ScienceSubject: BookChapter = {
  id: 'sci_unit_1',
  chapterNumber: 1,
  romanNumeral: 'I',
  title: 'Unit 1: Laws of Motion (இயக்க விதிகள்)',
  subtitle: 'Newton’s Laws of Motion, Linear Momentum, Impulse, Law of Conservation of Momentum & Gravitation',
  synopsis:
    'Tamil Nadu Class 10 Science (Physics) Unit 1. Comprehensive study of Inertia, Newton’s Three Laws of Motion, Linear Momentum $p=mv$, Force $F=ma$, Impulse $J=F\\Delta t$, mathematical proof of the Law of Conservation of Linear Momentum, and Newton’s Universal Law of Gravitation.',
  prerequisites: ['Basic Kinematics ($v = u + at$)', 'Vectors & Scalars', 'SI Units (kg, m/s, Newton)'],
  sections: [
    {
      id: 'sci_sec_1_1',
      sectionNumber: '1.1',
      title: 'Newton’s Laws & Linear Momentum',
      introText:
        'Fundamental concepts of inertia, momentum, and Newton’s First and Second Laws governing terrestrial and celestial motion.',
      items: [
        {
          id: 'sci_item_1_1',
          type: 'definition',
          number: '1.1',
          title: 'Inertia and its Types',
          statementLatex: '\\text{Inertia} \\propto \\text{Mass } (m)',
          statementText:
            'The inherent property of a body to resist any change in its state of rest or the state of uniform motion unless acted upon by an external unbalanced force. Types: 1) Inertia of rest, 2) Inertia of motion, 3) Inertia of direction.'
        },
        {
          id: 'sci_item_1_2',
          type: 'theorem',
          number: '1.2',
          title: 'Newton’s Second Law of Motion ($F = ma$)',
          statementLatex: 'F \\propto \\frac{dp}{dt} = \\frac{d(mv)}{dt} = m \\frac{dv}{dt} = ma \\implies F = k ma \\quad (k = 1 \\implies F = ma)',
          statementText:
            'The force acting on a body is directly proportional to the rate of change of linear momentum of the body and the change in momentum takes place in the direction of the force.'
        },
        {
          id: 'sci_item_1_3',
          type: 'definition',
          number: '1.3',
          title: 'Impulse of Force ($J$)',
          statementLatex: 'J = F \\times \\Delta t = \\Delta p = m(v - u)',
          statementText:
            'A large force acting for a very short interval of time is called an Impulsive Force. Its unit is $\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^{-1}$ or $\\text{N}\\cdot\\text{s}$.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_1_1',
          number: 'Unit 1 - Objective MCQ',
          title: 'Inertia Dependence',
          difficulty: 'Foundational',
          statementLatex: '\\text{The inertia of a body depends on...}',
          description: 'Class 10 Board textbook objective question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Which physical quantity is a direct measure of inertia?',
              hint: 'Heavier objects require greater force to change their state.',
              expectedInsight: 'Mass is the measure of inertia.',
              latexIntermediate: '\\text{Inertia} \\propto m \\implies \\text{Depends directly on mass}',
              options: [
                'Mass of the object',
                'Weight of the object',
                'Shape of the object'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Answer: Mass of the object (Option A)}}',
          fullSolutionWalkthrough:
            'Inertia is an intrinsic property of matter that resists acceleration. The greater the mass of a body, the greater is its inertia.'
        },
        {
          id: 'sci_prob_1_2',
          number: 'Unit 1 - 2 Marks Short Answer',
          title: 'Differentiate Mass and Weight',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Tabulate the differences between Mass and Weight. [2 Marks]}',
          description: 'Fundamental vs derived gravitational physical quantities.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Is mass a scalar or vector? How does weight vary?',
              hint: 'Mass is scalar and constant; weight is vector and depends on $g$.',
              expectedInsight: 'Mass $m$ is constant everywhere; Weight $W = mg$ varies with gravitational acceleration.',
              latexIntermediate: 'W = mg \\quad [\\text{Unit: Newton } (\\text{N})]',
              options: [
                'Mass is scalar/constant; Weight is vector/varies with gravity',
                'Both are scalar quantities measured in kg'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\begin{array}{|l|l|} \\hline \\textbf{Mass } (m) & \\textbf{Weight } (W) \\\\ \\hline \\text{Quantity of matter in body} & \\text{Gravitational force: } W = mg \\\\ \\text{Scalar quantity} & \\text{Vector quantity} \\\\ \\text{SI Unit: kilogram (kg)} & \\text{SI Unit: Newton (N)} \\\\ \\text{Constant everywhere} & \\text{Varies from place to place with } g \\\\ \\hline \\end{array}',
          fullSolutionWalkthrough:
            '1. Mass is the measure of the quantity of matter contained in a body. It remains constant throughout the universe and is measured using a physical balance.\n2. Weight is the magnitude of gravitational force pulling the body toward the center of the planet ($W = mg$). It is a vector pointing downwards and is measured using a spring balance.'
        },
        {
          id: 'sci_prob_1_3',
          number: 'Unit 1 - 7 Marks Comprehensive Board Question',
          title: 'Law of Conservation of Linear Momentum',
          difficulty: 'Advanced',
          statementLatex: '\\text{State and prove the Law of Conservation of Linear Momentum. [7 Marks]}',
          description: 'Newton’s third law collision derivation with complete algebraic steps.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'State the Law of Conservation of Linear Momentum.',
              hint: 'Total momentum remains constant in the absence of an external force.',
              expectedInsight: 'When no external force acts on a system of colliding bodies, total momentum before collision equals total momentum after collision.',
              latexIntermediate: '\\sum p_{\\text{initial}} = \\sum p_{\\text{final}} \\iff F_{\\text{ext}} = 0',
              options: [
                'Total linear momentum remains constant if no external force acts',
                'Energy transforms into heat and momentum diminishes'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Write the forces during collision by Newton’s Second Law.',
              hint: 'Force on B by A: $F_B = m_2(v_2 - u_2)/t$; Force on A by B: $F_A = m_1(v_1 - u_1)/t$.',
              expectedInsight: 'Action and reaction forces expressed as rate of change of momentum.',
              latexIntermediate: 'F_B = \\frac{m_2(v_2 - u_2)}{t}, \\quad F_A = \\frac{m_1(v_1 - u_1)}{t}',
              options: [
                'F_B = m2(v2 - u2)/t and F_A = m1(v1 - u1)/t',
                'F_B = m1 u1 and F_A = m2 u2'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 3,
              prompt: 'Apply Newton’s Third Law ($F_B = -F_A$) and simplify.',
              hint: 'Multiply by $t$ and rearrange terms.',
              expectedInsight: '$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$.',
              latexIntermediate: 'm_2(v_2 - u_2) = -m_1(v_1 - u_1) \\implies m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2',
              options: [
                'm1 u1 + m2 u2 = m1 v1 + m2 v2',
                'm1 v1 - m2 v2 = 0'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2 \\quad [\\text{Hence Proved}]}',
          fullSolutionWalkthrough:
            'Statement (1 Mark):\nIn the absence of an external unbalanced force, the algebraic sum of the linear momentum of a system of bodies remains constant.\n\nDerivation (6 Marks):\n1. Setup: Consider two bodies A and B of masses $m_1$ and $m_2$ moving in a straight line with initial velocities $u_1$ and $u_2$ such that $u_1 > u_2$.\n\n2. Collision: During collision of time duration $t$, body A exerts an action force $F_B$ on body B. In turn, body B exerts an equal and opposite reaction force $F_A$ on body A.\n\n3. Applying Newton’s Second Law:\nForce exerted on B by A:\n$$F_B = m_2 a_2 = m_2 \\left(\\frac{v_2 - u_2}{t}\\right)$$\nForce exerted on A by B:\n$$F_A = m_1 a_1 = m_1 \\left(\\frac{v_1 - u_1}{t}\\right)$$\n\n4. Applying Newton’s Third Law (Action = -Reaction):\n$$F_B = -F_A$$\n$$\\frac{m_2(v_2 - u_2)}{t} = -\\frac{m_1(v_1 - u_1)}{t}$$\nCanceling $t$ on both sides:\n$$m_2 v_2 - m_2 u_2 = -m_1 v_1 + m_1 u_1$$\nRearranging the initial and final momentum terms:\n$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$\n\nTotal momentum before collision = Total momentum after collision.\nHence the law of conservation of linear momentum is proved.'
        }
      ]
    },
    {
      id: 'sci_sec_1_2',
      sectionNumber: '1.2',
      title: 'Gravitation & Numerical Problems',
      introText:
        'Newton’s Universal Law of Gravitation, acceleration due to gravity $g = \\frac{GM}{R^2}$, and elevator apparent weight.',
      items: [
        {
          id: 'sci_item_1_4',
          type: 'theorem',
          number: '1.4',
          title: 'Newton’s Law of Universal Gravitation',
          statementLatex: 'F = G \\frac{m_1 m_2}{r^2} \\quad \\left(G = 6.674 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2\\right)',
          statementText:
            'Every particle of matter in the universe attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_1_4',
          number: 'Unit 1 - Numerical Problem',
          title: 'Force Calculation ($F = ma$)',
          difficulty: 'Intermediate',
          statementLatex: '\\text{A constant force acts on a body of mass } 5\\text{ kg for } 2\\text{ s. It increases its velocity from } 3\\text{ m/s to } 7\\text{ m/s. Find the force.}',
          description: 'Standard textbook numerical calculation.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Calculate the acceleration $a = (v - u)/t$.',
              hint: '$u = 3$, $v = 7$, $t = 2$.',
              expectedInsight: '$a = (7 - 3)/2 = 4/2 = 2\\text{ m/s}^2$.',
              latexIntermediate: 'a = \\frac{7 - 3}{2} = 2\\text{ m/s}^2',
              options: ['2 m/s^2', '4 m/s^2'],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Calculate force $F = ma$.',
              hint: '$m = 5\\text{ kg}$, $a = 2\\text{ m/s}^2$.',
              expectedInsight: '$F = 5 \\times 2 = 10\\text{ N}$.',
              latexIntermediate: 'F = 5 \\times 2 = 10\\text{ N}',
              options: ['10 N', '15 N'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{F = 10\\text{ N}}',
          fullSolutionWalkthrough:
            'Given:\nMass $m = 5\\text{ kg}$\nInitial velocity $u = 3\\text{ m/s}$\nFinal velocity $v = 7\\text{ m/s}$\nTime $t = 2\\text{ s}$\n\nStep 1: Acceleration $a = \\frac{v - u}{t} = \\frac{7 - 3}{2} = \\frac{4}{2} = 2\\text{ m/s}^2$.\nStep 2: Force $F = ma = 5\\text{ kg} \\times 2\\text{ m/s}^2 = 10\\text{ N}$.'
        }
      ]
    }
  ]
};
