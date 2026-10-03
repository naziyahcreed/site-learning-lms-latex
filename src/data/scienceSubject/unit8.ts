import { BookChapter } from '../../types/math';

export const unit8ScienceSubject: BookChapter = {
  id: 'sci_unit_8',
  chapterNumber: 8,
  romanNumeral: 'VIII',
  title: 'Unit 8: Animal Systems, Circulation & Nervous Coordination (விலங்கின அமைப்பு, சுற்றோட்டம் & நரம்பு மண்டலம்)',
  subtitle: 'Human Circulatory System, Double Circulation, Structure of Neuron, Reflex Arc & Brain',
  synopsis:
    'Tamil Nadu Class 10 Science (Biology) Units 13, 14 & 15. Morphology of leech and rabbit, Human Circulatory System, internal anatomy of human heart (4 chambers, valves, pacemaker SA node), Double Circulation, Blood components (RBC, WBC, Platelets, Plasma), ABO blood grouping and Rh factor, Structure of a multipolar neuron (cyton, axon, dendrites, myelin sheath), Synaptic transmission, Reflex arc, Central Nervous System (Cerebrum, Cerebellum, Medulla oblongata) and Endocrine master gland (Pituitary).',
  prerequisites: ['Cellular Tissues', 'Mammalian Organ Systems'],
  sections: [
    {
      id: 'sci_sec_8_1',
      sectionNumber: '8.1',
      title: 'Human Circulatory System & Double Circulation',
      introText:
        'The myogenic pumping mechanism of the four-chambered heart and pulmonary vs systemic circuits.',
      items: [
        {
          id: 'sci_item_8_1',
          type: 'theorem',
          number: '8.1',
          title: 'Human Double Circulation',
          statementLatex: '\\begin{aligned} \\text{Pulmonary Circuit: } & \\text{Right Ventricle} \\xrightarrow{\\text{Pulmonary Artery}} \\text{Lungs} \\xrightarrow{\\text{Pulmonary Veins}} \\text{Left Atrium} \\\\[3pt] \\text{Systemic Circuit: } & \\text{Left Ventricle} \\xrightarrow{\\text{Aorta}} \\text{Body Organs} \\xrightarrow{\\text{Vena Cava}} \\text{Right Atrium} \\end{aligned}',
          statementText:
            'Blood passes through the heart twice during one complete cardiac cycle. Deoxygenated blood is pumped to the lungs for oxygenation (pulmonary loop), while oxygenated blood is distributed to all body tissues (systemic loop).'
        }
      ],
      problems: [
        {
          id: 'sci_prob_8_1',
          number: 'Unit 8 - 4 Marks Board Question',
          title: 'Explain Human Double Circulation',
          difficulty: 'Advanced',
          statementLatex: '\\text{Why is blood circulation in human heart described as Double Circulation? [4 Marks]}',
          description: 'Flow pathway through both circulatory loops.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Trace the path of blood in the Pulmonary Circulation.',
              hint: 'Right ventricle pumps deoxygenated blood to lungs via pulmonary artery; oxygenated blood returns to left atrium via pulmonary veins.',
              expectedInsight: 'Right ventricle $\\rightarrow$ Lungs $\\rightarrow$ Left atrium.',
              latexIntermediate: '\\text{Pulmonary: } \\text{RV} \\rightarrow \\text{Lungs} \\rightarrow \\text{LA}',
              options: [
                'Right Ventricle -> Lungs -> Left Atrium',
                'Left Ventricle -> Body -> Right Atrium'
              ],
              correctOptionIndex: 0
            },
            {
              stepIndex: 2,
              prompt: 'Trace the path of blood in the Systemic Circulation.',
              hint: 'Left ventricle pumps oxygenated blood via aorta to tissues; deoxygenated blood returns to right atrium via vena cava.',
              expectedInsight: 'Left ventricle $\\rightarrow$ Body tissues $\\rightarrow$ Right atrium.',
              latexIntermediate: '\\text{Systemic: } \\text{LV} \\rightarrow \\text{Body Tissues} \\rightarrow \\text{RA}',
              options: [
                'Left Ventricle -> Aorta -> Body Tissues -> Vena Cava -> Right Atrium',
                'Lungs -> Heart -> Brain'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Double Circulation} = \\text{Pulmonary Loop (Heart-Lungs-Heart)} + \\text{Systemic Loop (Heart-Body-Heart)}}',
          fullSolutionWalkthrough:
            'In human beings, blood completes one full cycle through the body by circulating through the heart twice:\n\n1. Pulmonary Circulation:\n• The right ventricle pumps deoxygenated blood through the pulmonary artery to both lungs for gaseous exchange.\n• Freshly oxygenated blood returns via four pulmonary veins into the left atrium.\n\n2. Systemic Circulation:\n• The thick-walled left ventricle pumps oxygenated blood with high pressure into the aorta to supply all organ systems.\n• Deoxygenated blood laden with carbon dioxide is collected by superior and inferior vena cavae and emptied into the right atrium.\n\n3. Significance:\nDouble circulation completely prevents the mixing of oxygenated and deoxygenated blood, ensuring highly efficient oxygen delivery to maintain warm-blooded homeothermic metabolism.'
        },
        {
          id: 'sci_prob_8_3',
          number: 'Unit 8 - 4 Marks Difference Question',
          title: 'Differentiate Artery and Vein',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Tabulate the key anatomical and physiological differences between Arteries and Veins. [4 Marks]}',
          description: 'Blood vessel comparison.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Compare blood flow direction, wall thickness, lumen size, and valves.',
              hint: 'Arteries carry blood away under high pressure, thick walls, no valves; Veins carry blood to heart, thin walls, internal valves.',
              expectedInsight: 'Direction, wall thickness, valves, blood pressure, and type of blood carried.',
              latexIntermediate: '\\text{Artery: Away from heart, Thick, No valves} \\quad \\text{vs} \\quad \\text{Vein: Towards heart, Thin, Valves present}',
              options: ['Structured 5-point comparison table', 'Both have identical function'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\begin{array}{|l|l|l|} \\hline \\textbf{Characteristic} & \\textbf{Arteries} & \\textbf{Veins} \\\\ \\hline \\text{Direction of Flow} & \\text{Carries blood } \\mathbf{\\text{away from heart}} & \\text{Carries blood } \\mathbf{\\text{towards heart}} \\\\ \\text{Nature of Blood} & \\text{Oxygenated (except pulmonary artery)} & \\text{Deoxygenated (except pulmonary veins)} \\\\ \\text{Wall Structure} & \\text{Thick, highly elastic, and muscular} & \\text{Thin, less elastic, and non-muscular} \\\\ \\text{Internal Valves} & \\mathbf{\\text{Absent}} \\text{ (high pressure prevents backflow)} & \\mathbf{\\text{Present}} \\text{ (semilunar valves prevent backflow)} \\\\ \\text{Lumen & Pressure} & \\text{Narrow lumen; Blood flows with high pressure} & \\text{Wide lumen; Blood flows with low pressure} \\\\ \\hline \\end{array}',
          fullSolutionWalkthrough:
            '1. Direction of Blood Flow: Arteries carry blood away from the pumping chambers of the heart to various body organs. Veins collect blood from body tissues and return it to the heart.\n2. Oxygenation: Arteries transport bright red oxygenated blood (exception: Pulmonary Artery carrying deoxygenated blood to lungs). Veins carry dark red deoxygenated blood (exception: Pulmonary Veins carrying oxygenated blood from lungs to left atrium).\n3. Pressure and Walls: Arterial walls are thick and elastic to withstand high systolic pumping pressure. Venous walls are thin and pliable as blood flows under low hydrostatic pressure.\n4. Valves: Arteries lack valves (except at the base of aorta and pulmonary trunk). Veins have crescentic semilunar pocket valves to prevent the backflow of blood against gravity.'
        },
        {
          id: 'sci_prob_8_4',
          number: 'Unit 8 - 7 Marks Comprehensive Question',
          title: 'Structure and Functioning of the Human Heart',
          difficulty: 'Advanced',
          statementLatex: '\\text{Describe the internal structure of the human heart and the origin/conduction of heartbeat. [7 Marks]}',
          description: 'Class 10 State Board standard 7-mark question.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Detail the 4 chambers, the septa, the 3 valves (tricuspid, bicuspid/mitral, semilunar), and the pacemaker (SA node).',
              hint: 'Right/left atria, right/left ventricles, tricuspid valve on right, bicuspid/mitral on left, SA node initiates electrical impulses.',
              expectedInsight: 'Four chambers, valves prevent backflow, SA node is pacemaker generating 72 beats/min.',
              latexIntermediate: '\\text{Heart} = 4 \\text{ Chambers} + 3 \\text{ Valves} + \\text{SA Node (Pacemaker)}',
              options: ['Complete anatomical description and cardiac conduction pathway', 'Brief one-line summary'],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Score: 7/7 Marks (Chambers 2 Marks + Valves 2 Marks + Blood Flow & SA Node 3 Marks)}}',
          fullSolutionWalkthrough:
            '1. Location and Pericardium:\nThe human heart is a hollow, muscular, cone-shaped organ situated in the thoracic cavity between the two lungs in the mediastinum. It is enclosed in a double-layered membrane called Pericardium filled with lubricating pericardial fluid that protects against mechanical shocks and friction.\n\n2. Four Chambers:\n• Right Atrium (Auricle): Thin-walled upper chamber receiving deoxygenated blood from the upper body (Superior Vena Cava), lower body (Inferior Vena Cava), and heart muscles (Coronary Sinus).\n• Left Atrium: Thin-walled chamber receiving oxygenated blood from lungs via four pulmonary veins.\n• Right Ventricle: Moderately thick-walled chamber that pumps deoxygenated blood through the pulmonary trunk to the lungs.\n• Left Ventricle: The thickest, most muscular chamber (3 times thicker than right ventricle) that forcefully ejects oxygenated blood into the systemic aorta to supply the entire body.\n\n3. Heart Valves:\n• Tricuspid Valve: Three cusps located between the right atrium and right ventricle.\n• Bicuspid (Mitral) Valve: Two cusps located between the left atrium and left ventricle.\n• Chordae Tendineae: Fibrous cords attaching cusps to papillary muscles, preventing valves from inverting during ventricular contraction.\n• Semilunar Valves: Pocket valves located at the bases of the pulmonary artery and systemic aorta, preventing backflow into the ventricles during diastole.\n\n4. Pacemaker and Cardiac Conduction:\n• Sinoatrial (SA) Node: Located in the upper wall of the right atrium. Known as the natural Pacemaker of the heart, it spontaneously generates rhythmic electrical impulses (action potentials) at 70–72 beats per minute.\n• Conduction Pathway: Impulses spread across atria to the Atrioventricular (AV) Node $\\rightarrow$ Bundle of His $\\rightarrow$ Purkinje fibers, causing coordinated ventricular systole.'
        }
      ]
    },
    {
      id: 'sci_sec_8_2',
      sectionNumber: '8.2',
      title: 'Nervous System - Neuron & Reflex Arc',
      introText:
        'Structural and functional unit of nervous tissue and the rapid involuntary neural circuit.',
      items: [
        {
          id: 'sci_item_8_2',
          type: 'definition',
          number: '8.2',
          title: 'Neuron Anatomy & Nerve Impulse Conduction',
          statementLatex: '\\text{Stimulus} \\longrightarrow \\text{Dendrite} \\longrightarrow \\text{Cyton (Cell Body)} \\longrightarrow \\text{Axon} \\xrightarrow{\\text{Neurotransmitter (ACh)}} \\text{Synapse}',
          statementText:
            'A neuron consists of three main parts: 1) Cyton (Soma), 2) Dendrites (receive signals), and 3) Axon (conducts electrical impulses away from cyton). The gap between axon terminals of one neuron and dendrites of the next is called a Synapse.'
        },
        {
          id: 'sci_item_8_3',
          type: 'definition',
          number: '8.3',
          title: 'Reflex Arc Pathway',
          statementLatex: '\\text{Receptor (Sense Organ)} \\xrightarrow{\\text{Sensory Neuron}} \\text{Spinal Cord (Interneuron)} \\xrightarrow{\\text{Motor Neuron}} \\text{Effector (Muscle / Gland)}',
          statementText:
            'An automatic, involuntary, and rapid response to an external stimulus without prior conscious thought from the cerebral cortex.'
        }
      ],
      problems: [
        {
          id: 'sci_prob_8_2',
          number: 'Unit 8 - 2 Marks Question',
          title: 'Reflex Arc Sequence',
          difficulty: 'Intermediate',
          statementLatex: '\\text{Arrange the components of a Reflex Arc in correct sequential order. [2 Marks]}',
          description: 'Flow of nerve impulses during sudden withdrawal from heat.',
          guidedSteps: [
            {
              stepIndex: 1,
              prompt: 'Which neuron brings the signal to the spinal cord? Which sends the motor signal to the muscle?',
              hint: 'Sensory neuron brings signal; Motor neuron sends output to muscle effector.',
              expectedInsight: 'Receptor $\\rightarrow$ Sensory neuron $\\rightarrow$ Spinal cord $\\rightarrow$ Motor neuron $\\rightarrow$ Effector.',
              latexIntermediate: '\\text{Receptor} \\rightarrow \\text{Sensory} \\rightarrow \\text{CNS} \\rightarrow \\text{Motor} \\rightarrow \\text{Effector}',
              options: [
                'Receptor -> Sensory Neuron -> Spinal Cord -> Motor Neuron -> Effector',
                'Effector -> Motor -> Spinal Cord -> Sensory -> Receptor'
              ],
              correctOptionIndex: 0
            }
          ],
          finalSolutionLatex: '\\mathbf{\\text{Receptor} \\longrightarrow \\text{Sensory Neuron} \\longrightarrow \\text{Spinal Cord (Relay)} \\longrightarrow \\text{Motor Neuron} \\longrightarrow \\text{Effector Muscle}}',
          fullSolutionWalkthrough:
            'When you accidentally touch a hot object:\n1. Receptors in the skin detect heat and generate an electrical impulse.\n2. Sensory (afferent) neurons carry the impulse into the spinal cord.\n3. Relay neurons in the grey matter process the impulse and instantly connect to motor neurons.\n4. Motor (efferent) neurons conduct the motor command to the effector bicep muscle.\n5. The effector muscle contracts, instantly jerking your hand away from danger.'
        }
      ]
    }
  ]
};
