import { useState, useRef } from "react";

const T = {
  navy:"#1A2744", dk:"#111B33", lt:"#243260",
  teal:"#4ECDC4", gold:"#F7C948", white:"#F8F9FA",
  stone:"#8899AA", ember:"#E8734A",
};

const SESSIONS = {
  sleep: [
    {
      id:"sleep1", cat:"sleep", title:"Melatonin — The Darkness Hormone",
      science:"Melatonin is released from the pineal gland when light disappears. Sleep is not a matter of willpower — it's molecular. The deeper the darkness, the more melatonin flows. Trust the night.",
      formula:"Serotonin → Melatonin (C₁₃H₁₆N₂O₂) · Pineal gland · Light-sensitive",
      visual:"🌑",
      yoga:{name:"Legs Up the Wall + Shavasana", breath:"Inhale 4 counts / Exhale 8 counts", duration:90, cue:"Close your eyes. In the darkness, melatonin begins to flow."},
      craft:"Draw a crescent moon. The waxing and waning form — the rhythm of melatonin.",
    },
    {
      id:"sleep2", cat:"sleep", title:"The Glymphatic System — Brain Cleanse",
      science:"While you sleep, cerebrospinal fluid flows through the brain clearing amyloid plaques. Sleep deprivation raises Alzheimer's risk — sleep washes the brain.",
      formula:"NREM Stage 3 · Glymphatic flow · Amyloid-β clearance · 7-9 hours",
      visual:"💤",
      yoga:{name:"Yoga Nidra — Sleep Preparation", breath:"Completely natural breathing", duration:120, cue:"Release each body part one by one. The brain begins its nightly cleaning."},
      craft:"Draw rivers flowing through the brain. Glymphatic — the night's cleaning crew.",
    },
  ],
  breath: [
    {
      id:"breath1", cat:"breath", title:"Diaphragm — The Engine of Breath",
      science:"Breathing is muscular work. When the diaphragm descends, air enters; when it rises, air leaves — the most tireless muscle, the most faithful flame.",
      formula:"Dome-shaped muscle · Contract→flat→thorax↑ · Relax→dome→thorax↓",
      visual:"⌒",
      yoga:{name:"Diaphragmatic Breathing", breath:"Inhale — belly pushes out / Exhale — belly draws in", duration:90, cue:"Place hands on your belly. When the diaphragm drops, the belly expands."},
      craft:"Draw a dome rising and falling. The dance of the diaphragm.",
    },
    {
      id:"breath2", cat:"breath", title:"Slow Breathing — Healing at 0.1Hz",
      science:"Five breaths per minute. Inhale 5 seconds, exhale 5 seconds. At this rhythm, heart, breath, and blood pressure resonate — the whole body becomes one wave.",
      formula:"5-6 breaths/min (0.1Hz) · HRV maximized · Vagus nerve activated",
      visual:"≋",
      yoga:{name:"Sama Vritti (Equal Breathing)", breath:"Inhale 5s / Exhale 5s · 6 per minute", duration:120, cue:"The heart slows to follow the breath. The whole body becomes one wave."},
      craft:"Draw one slow, large wave. The rhythm of resonance breathing.",
    },
  ],
  brain: [
    {
      id:"brain1", cat:"brain", title:"Synapse — Neurons in Dialogue",
      science:"Neurons don't connect directly. They release neurotransmitters into the synaptic cleft — this chemical conversation creates thoughts, emotions, and memories.",
      formula:"Action potential → Ca²⁺ influx → Vesicle release → Neurotransmitters → EPSP/IPSP",
      visual:"—·—",
      yoga:{name:"Brahmari (Humming Bee Breath)", breath:"Inhale / Exhale with 'mmm' hum", duration:60, cue:"Vibration resonates inside the skull. Neurons are in conversation."},
      craft:"Draw pre- and post-synaptic neurons with the gap between. The language of connection.",
    },
    {
      id:"brain2", cat:"brain", title:"Neuroplasticity — The Brain Changes",
      science:"Learning means synapses getting stronger. The more you repeat, the thicker the connections — right now, this practice is physically changing your brain.",
      formula:"LTP (Long-Term Potentiation) · Hebb's Law · Hippocampus → Cortex consolidation",
      visual:"∞",
      yoga:{name:"Try One New Pose", breath:"Inhale — 'neuro' / Exhale — 'plasticity'", duration:60, cue:"This awkward, unfamiliar feeling — new synapses are forming right now."},
      craft:"Draw ∞ in one stroke. The infinite capacity of the brain to change.",
    },
  ],
  gut: [
    {
      id:"gut1", cat:"gut", title:"Gut Microbiome — The Second Immune System",
      science:"100 trillion microorganisms live in the gut. Diversity equals health. Fermented foods and fiber feed them — a healthy gut means a healthy brain.",
      formula:"100 trillion microbes · Short-chain fatty acids (SCFA) · Gut-brain axis",
      visual:"🦠",
      yoga:{name:"Apanasana (Knee-to-Chest)", breath:"Inhale / Exhale — draw knees to chest", duration:60, cue:"The abdomen is compressed, stimulating the gut. Peristalsis activates."},
      craft:"Draw diverse microorganisms filling the intestine. Diversity is health.",
    },
    {
      id:"gut2", cat:"gut", title:"Serotonin — Born in the Gut",
      science:"90% of serotonin is produced in the gut, not the brain. Calm rises from the body's center — gut health is mental health.",
      formula:"Tryptophan → 5-HTP → Serotonin (C₁₀H₁₂N₂O) · Enterochromaffin cells",
      visual:"≈",
      yoga:{name:"Sukhasana + Belly Breathing", breath:"Inhale — belly expands / Exhale — belly contracts", duration:90, cue:"Feel deep in your abdomen. The gut is making serotonin right now."},
      craft:"Draw a wave-like curve. The rhythm of peristalsis — serotonin's dance.",
    },
  ],
  movement: [
    {
      id:"move1", cat:"movement", title:"Muscle Hypertrophy — How Muscles Grow",
      science:"Exercise damages muscle fibers. As those wounds heal, the muscle grows thicker. Destruction is the condition for growth — the body's paradox.",
      formula:"Resistance exercise → Micro-tears → Satellite cell activation → Protein synthesis↑",
      visual:"↑M",
      yoga:{name:"Warrior II — Hold 2 Minutes", breath:"Inhale — 'damage' / Exhale — 'rebuild'", duration:90, cue:"The thighs are burning. This is micro-tearing. Tomorrow this place will be stronger."},
      craft:"Draw a cracked line and a thicker line filling it. Damage and rebuilding.",
    },
    {
      id:"move2", cat:"movement", title:"Zone 2 — Training the Mitochondria",
      science:"At a conversational intensity, mitochondria train most efficiently. 150 minutes per week adds 5-7 years to healthspan.",
      formula:"60-70% max HR · Lactate <2mmol/L · Mitochondrial density↑ · Fat oxidation↑",
      visual:"Z2",
      yoga:{name:"Sun Salutation — Zone 2 Pace", breath:"Nasal breathing maintained · Conversational pace", duration:90, cue:"Sweating but can still talk. Fat is burning. Mitochondria are growing."},
      craft:"Draw a heart rate zone chart. Zone 2 — the optimal zone for fat burning.",
    },
  ],
  pain: [
    {
      id:"pain1", cat:"pain", title:"Fascia — The Body's Web",
      science:"Fascia is the web connecting the entire body. When shoulders tighten, the back aches; when soles harden, the neck pulls — everything is connected.",
      formula:"Collagen · Elastin · Matrix · Continuous full-body structure · Tension transfer",
      visual:"~",
      yoga:{name:"Body Scan Meditation", breath:"Inhale — 'connected' / Exhale — 'release'", duration:60, cue:"From feet to crown, one continuous web. Where does it pull? Where is it tight?"},
      craft:"Draw a body silhouette with connecting lines inside — the fascial map.",
    },
    {
      id:"pain2", cat:"pain", title:"Chronic Inflammation — The Root of Pain",
      science:"Chronic inflammation burns quietly. It damages blood vessels and creates pain — the common root of modern chronic disease. Exercise, sleep, and diet form the triangle of defense.",
      formula:"IL-6·TNF-α·CRP chronically elevated · Visceral fat · Sleep deprivation",
      visual:"🔥",
      yoga:{name:"Child's Pose + Long Exhale", breath:"Inhale 4 counts / Exhale 8 counts", duration:90, cue:"The long exhale activates the vagus nerve and reduces inflammation."},
      craft:"Draw a small flame burning low. Chronic inflammation — invisible, persistent.",
    },
  ],
  nutrition: [
    {
      id:"food1", cat:"nutrition", title:"Protein — Protecting Muscle",
      science:"Without enough protein, muscle is lost. The older you get, the more you need — 30-40g per meal crosses the threshold for muscle synthesis.",
      formula:"1.6-2.2g per kg bodyweight · Leucine 3g threshold · 30 min post-exercise",
      visual:"🥩",
      yoga:{name:"Sun Salutation + Post-Workout Protein", breath:"Protein within 30 minutes of exercise", duration:60, cue:"Exercise opens the door to muscle protein synthesis. Protein must enter within 30 minutes."},
      craft:"Draw the muscle synthesis window. Golden time — 30 minutes post-workout.",
    },
    {
      id:"food2", cat:"nutrition", title:"Blood Sugar — The Glucose Wave",
      science:"When blood sugar spikes, insulin spikes too. This rollercoaster exhausts the pancreas — fiber and post-meal movement reduce glucose spikes.",
      formula:"Fasting glucose <100 · 2hr postprandial <140 · HbA1c <5.7%",
      visual:"📈",
      yoga:{name:"10-Minute Walk After Meals", breath:"Light and easy · Muscles absorb glucose", duration:60, cue:"10 minutes of movement after eating reduces glucose spikes by 30%."},
      craft:"Draw a blood glucose graph. Spike vs. gentle curve — the difference fiber makes.",
    },
  ],
  cardiovascular: [
    {
      id:"heart1", cat:"cardiovascular", title:"The Heart — An Engine That Never Stops",
      science:"The sinoatrial node generates electrical signals. The atria contract, then moments later the ventricles follow — this precise timing pumps blood efficiently.",
      formula:"SA Node (60-100/min) → AV Node → Bundle of His → Purkinje fibers",
      visual:"♡",
      yoga:{name:"Hands on Heart — Feel the Beat", breath:"Inhale 4 / Exhale 4 · Sync with heartbeat", duration:60, cue:"Feel the heartbeat with your palm. The rhythm the SA node creates — never stopping since birth."},
      craft:"Draw an ECG waveform. P wave · QRS complex · T wave — the electrical language of the heart.",
    },
    {
      id:"heart2", cat:"cardiovascular", title:"Atherosclerosis — The Silent Narrowing",
      science:"LDL accumulates in artery walls. When oxidized, macrophages engulf it. Foam cells pile up into plaque — decades of silent progression.",
      formula:"LDL oxidation → Foam cells → Plaque → Stenosis · ApoB · Exercise raises HDL",
      visual:"⬡",
      yoga:{name:"Sun Salutation — Zone 2 Cardio", breath:"Conversational pace · 20-30 minutes", duration:90, cue:"Heart rate 130-150. Zone 2 protects the vascular endothelium."},
      craft:"Draw a normal vessel and a plaque-filled vessel cross-section. Silent narrowing.",
    },
  ],
  lifestyle: [
    {
      id:"life1", cat:"lifestyle", title:"Vagus Nerve — The Wandering Nerve",
      science:"Starting from the brainstem, it wanders to the heart, lungs, stomach, and intestines — the backbone of the parasympathetic system. A longer exhale activates it and reduces stress.",
      formula:"Brainstem → Heart·Lungs·Stomach·Gut · 80% afferent · Parasympathetic axis",
      visual:"〜",
      yoga:{name:"4-7-8 Breathing", breath:"Inhale 4 / Hold 7 / Exhale 8", duration:90, cue:"The 8-count exhale activates the vagus nerve. Feel the heart slowing down."},
      craft:"Draw a winding line from brain to intestines. The path of the wandering nerve.",
    },
    {
      id:"life2", cat:"lifestyle", title:"Stress and Resilience",
      science:"Stress isn't bad. Acute stress improves performance — chronic stress is the problem. Resilience processes the same stress differently. It can be trained.",
      formula:"HPA axis: CRH→ACTH→Cortisol · Chronic → hippocampal atrophy · Immune↓",
      visual:"⇄",
      yoga:{name:"4-7-8 Breathing — Lower Cortisol", breath:"Inhale 4 / Hold 7 / Exhale 8", duration:90, cue:"The long exhale lowers cortisol. The switch that turns off the stress response."},
      craft:"Draw a stress curve. Acute stress raises performance; chronic stress destroys — an inverted U.",
    },
  ],
  goals: [
    {
      id:"goal1", cat:"goals", title:"Healthspan — The Real Goal",
      science:"Lifespan has increased. But the years lived in health haven't kept pace — too many years spent ill. Extending healthspan is the real goal.",
      formula:"Lifespan - years with disease/disability = Healthspan",
      visual:"◯",
      yoga:{name:"Mountain Pose — Standing in Health", breath:"Inhale — 'healthspan' / Exhale — 'starting now'", duration:60, cue:"This posture is an investment in healthspan. The gap closes starting from this moment."},
      craft:"Draw two bar charts. Lifespan vs. Healthspan — the gap between them.",
    },
    {
      id:"goal2", cat:"goals", title:"The Power of Lifestyle",
      science:"Genetics loads the gun, but lifestyle pulls the trigger — 80% of diabetes, cardiovascular disease, and cancer can be prevented through lifestyle.",
      formula:"Genetics 20% + Environment & Lifestyle 80% · Epigenetics",
      visual:"80%",
      yoga:{name:"Sun Salutation — Daily Axis", breath:"Same time, same breath, every day", duration:90, cue:"Daily repetition changes gene expression. Yoga switches on anti-inflammatory genes."},
      craft:"Draw genetics (20%) and lifestyle (80%). I hold the trigger.",
    },
  ],
};

const CATS = [
  {id:"sleep",       color:"#7B9EA8", emoji:"🌙", label:"Sleep"},
  {id:"breath",      color:"#8BAF8B", emoji:"🌿", label:"Breath"},
  {id:"brain",       color:"#9B8DB4", emoji:"🧠", label:"Brain"},
  {id:"gut",         color:"#C4956A", emoji:"🌱", label:"Gut Health"},
  {id:"movement",    color:"#7BA89B", emoji:"🔥", label:"Movement"},
  {id:"pain",        color:"#B47B7B", emoji:"🦴", label:"Pain"},
  {id:"nutrition",   color:"#A8A87B", emoji:"🌾", label:"Nutrition"},
  {id:"cardiovascular",color:"#B47B8B",emoji:"❤️",label:"Heart"},
  {id:"lifestyle",   color:"#7B8BA8", emoji:"🌊", label:"Lifestyle"},
  {id:"goals",       color:"#A89B7B", emoji:"✨", label:"Goals"},
];
const CAT_KEYS = CATS.map(c=>c.id);

const QS = {
  sleep:[
    {q:"How long does it take you to fall asleep?",type:"choice",options:["Under 5 min","10-20 min","30+ min","Over an hour"],scores:[4,3,2,1]},
    {q:"Do you wake up during the night?",type:"choice",options:["Rarely","1-2 times","3+ times"],scores:[4,2,1]},
    {q:"How do you feel when you wake up?",type:"choice",options:["Refreshed","Okay","Heavy","Hate getting up"],scores:[4,3,2,1]},
    {q:"How many hours do you sleep per night on average?",type:"choice",options:["Under 5hrs","5-6hrs","7-8hrs","9+ hrs"],scores:[1,2,4,3]},
    {q:"How often do you feel tired even after sleeping?",type:"choice",options:["Rarely","Sometimes","Often","Almost always"],scores:[4,3,2,1]},
    {q:"Do you snore or experience breathing pauses during sleep?",type:"choice",options:["No","Not sure","Yes"],scores:[4,2,1]},
    {q:"Does daytime sleepiness interfere with your daily life?",type:"choice",options:["No","Sometimes","Yes"],scores:[4,2,1]},
    {q:"How much time do you spend on your phone before bed?",type:"choice",options:["None","Under 30min","Over an hour"],scores:[4,2,1]},
    {q:"Are your sleep and wake times consistent?",type:"choice",options:["Very regular","Mostly","Irregular"],scores:[4,2,1]},
    {q:"What bothers you most about your sleep right now?",type:"text"},
  ],
  breath:[
    {q:"How would you describe your typical breathing?",type:"choice",options:["Deep & comfortable","Shallow","Often tight","Not sure"],scores:[4,2,1,2]},
    {q:"Do you get breathless climbing stairs or walking fast?",type:"choice",options:["Not at all","A little","Quite breathless","Can't do it"],scores:[4,3,2,1]},
    {q:"Do you feel chest tightness or pressure?",type:"choice",options:["Rarely","Sometimes","Often","Almost daily"],scores:[4,3,2,1]},
    {q:"Do you breathe through your nose or mouth?",type:"choice",options:["Mainly nose","Mixed","Mainly mouth"],scores:[4,2,1]},
    {q:"How does your breathing change under stress?",type:"choice",options:["No change","Gets faster","Feels like it stops","Not sure"],scores:[4,2,1,2]},
    {q:"Do you intentionally take deep breaths during the day?",type:"choice",options:["Often","Sometimes","Rarely"],scores:[4,2,1]},
    {q:"Do you have nasal congestion or allergic rhinitis?",type:"choice",options:["No","Seasonal","Yes"],scores:[4,2,1]},
    {q:"How long can you comfortably hold your breath?",type:"choice",options:["Over 1 min","30s-1min","Under 30s"],scores:[4,3,1]},
    {q:"Do you practice meditation or breathwork?",type:"choice",options:["Regularly","Sometimes","No"],scores:[4,2,1]},
    {q:"What concerns you most about your breathing right now?",type:"text"},
  ],
  brain:[
    {q:"When do you concentrate best during the day?",type:"choice",options:["Morning","Afternoon","Evening","Varies a lot"],scores:[4,3,3,1]},
    {q:"How long can you stay in a state of deep focus?",type:"choice",options:["Over 1 hour","About 30 min","Under 10 min","Can't start"],scores:[4,3,2,1]},
    {q:"How often do you forget things or feel forgetful?",type:"choice",options:["Rarely","Sometimes","Often","Daily"],scores:[4,3,2,1]},
    {q:"How do you feel when learning something new?",type:"choice",options:["Absorb quickly","Average","Takes time","Feels overwhelming"],scores:[4,3,2,1]},
    {q:"Do you experience brain fog?",type:"choice",options:["Rarely","Sometimes","Often","Almost daily"],scores:[4,3,2,1]},
    {q:"Do emotional swings affect your mental clarity?",type:"choice",options:["Not at all","A little","Significantly"],scores:[4,2,1]},
    {q:"Which feels most natural to you?",type:"choice",options:["Reading","Writing","Speaking","All similar"],scores:[3,3,3,4]},
    {q:"Do racing thoughts at night interfere with sleep?",type:"choice",options:["Rarely","Sometimes","Often"],scores:[4,2,1]},
    {q:"When do creative ideas come to you most?",type:"choice",options:["Morning","While moving","In the shower","At night","Unpredictably"],scores:[3,4,3,3,2]},
    {q:"What is your brain most tired of right now?",type:"text"},
  ],
  gut:[
    {q:"How many bowel movements do you have per day?",type:"choice",options:["1-2 times","3+ times","Every other day","Less than every 3 days"],scores:[4,3,2,1]},
    {q:"How would you describe your stool consistency?",type:"choice",options:["Soft & normal","Hard","Loose","Varies a lot"],scores:[4,2,2,1]},
    {q:"Do you feel bloated or gassy after meals?",type:"choice",options:["Rarely","Sometimes","Often","Almost always"],scores:[4,3,2,1]},
    {q:"Do you experience abdominal pain or cramping?",type:"choice",options:["No","Sometimes","When stressed","Often"],scores:[4,3,2,1]},
    {q:"Do you feel an urgent need to use the bathroom after eating?",type:"choice",options:["No","Sometimes","Often"],scores:[4,2,1]},
    {q:"Does any specific food cause gut discomfort?",type:"choice",options:["No","Dairy","Wheat/Gluten","Fatty foods","Several things"],scores:[4,2,2,2,1]},
    {q:"Do you feel your gut is sensitive to stress?",type:"choice",options:["No","A little","Very much so"],scores:[4,2,1]},
    {q:"Do you eat fermented foods regularly?",type:"choice",options:["Daily","Often","Sometimes","Rarely"],scores:[4,3,2,1]},
    {q:"Does your gut health affect your mood or energy?",type:"choice",options:["No","A little","Significantly"],scores:[4,2,1]},
    {q:"What is most uncomfortable about your gut health right now?",type:"text"},
  ],
  movement:[
    {q:"How many times per week do you exercise?",type:"choice",options:["Daily","3-4 times","1-2 times","Rarely"],scores:[4,3,2,1]},
    {q:"What type of exercise do you mainly do?",type:"choice",options:["Strength","Cardio","Walking","Yoga/Stretching","None"],scores:[4,4,3,3,1]},
    {q:"How long is a typical workout session?",type:"choice",options:["Over 1 hour","20-30 min","Under 10 min","Don't exercise"],scores:[4,3,2,1]},
    {q:"How do you feel after exercising?",type:"choice",options:["Energized","Okay","Very tired","Don't know"],scores:[4,3,2,1]},
    {q:"How does your strength compare to before?",type:"choice",options:["Improved","About the same","Feels weaker","Clearly weaker"],scores:[4,3,2,1]},
    {q:"How many hours per day do you spend sitting?",type:"choice",options:["Under 4 hrs","4-6 hrs","8+ hrs"],scores:[4,2,1]},
    {q:"Do you stretch or work on flexibility?",type:"choice",options:["Regularly","Sometimes","Rarely"],scores:[4,2,1]},
    {q:"Do you feel motivated to exercise?",type:"choice",options:["Very much","Somewhat","Not really","Not at all"],scores:[4,3,2,1]},
    {q:"What is the biggest barrier to your exercise?",type:"choice",options:["None (I exercise)","No time","Physical pain","No motivation","Don't know what to do"],scores:[4,2,2,1,1]},
    {q:"What kind of movement does your body crave right now?",type:"text"},
  ],
  pain:[
    {q:"Do you have any chronic pain areas?",type:"choice",options:["No","Neck/Shoulders","Lower back","Knees/Joints","Multiple areas"],scores:[4,2,2,2,1]},
    {q:"How would you rate your pain intensity?",type:"choice",options:["No pain","Mild (manageable)","Moderate (noticeable)","Severe (disruptive)"],scores:[4,3,2,1]},
    {q:"When does the pain worsen?",type:"choice",options:["No pain","Morning","After long sitting","With movement","Evening/Night"],scores:[4,2,2,2,2]},
    {q:"Do you feel stiff when you wake up?",type:"choice",options:["Rarely","A little","Quite stiff","Very stiff daily"],scores:[4,3,2,1]},
    {q:"Is it difficult to maintain certain postures for long?",type:"choice",options:["No problem","Sitting is hard","Standing is hard","Walking is hard"],scores:[4,2,2,1]},
    {q:"Do you get muscle cramps or spasms often?",type:"choice",options:["Rarely","Sometimes","Often"],scores:[4,2,1]},
    {q:"Do your joints click, pop, or feel swollen?",type:"choice",options:["No","Just clicking","Sometimes swollen","Often"],scores:[4,3,2,1]},
    {q:"Does pain disrupt your sleep or daily activities?",type:"choice",options:["No","Sometimes","Often","Daily"],scores:[4,3,2,1]},
    {q:"What are you doing to manage your pain?",type:"choice",options:["Stretching","Massage","Medication","Nothing"],scores:[4,3,2,1]},
    {q:"What pain or discomfort concerns you most right now?",type:"text"},
  ],
  nutrition:[
    {q:"How many meals do you eat per day?",type:"choice",options:["3 meals","2 meals","1 meal","Irregular"],scores:[4,3,2,1]},
    {q:"Do you eat vegetables and fruit daily?",type:"choice",options:["Plenty","Some","Occasionally","Rarely"],scores:[4,3,2,1]},
    {q:"Do you include protein in each meal?",type:"choice",options:["Every meal","Once a day","Sometimes","Rarely"],scores:[4,3,2,1]},
    {q:"How often do you eat processed or fast food?",type:"choice",options:["Rarely","1-2x per week","Often","Almost daily"],scores:[4,3,2,1]},
    {q:"How much water do you drink per day?",type:"choice",options:["2+ liters","1-1.5 liters","Under 1 liter"],scores:[4,3,1]},
    {q:"How fast do you eat?",type:"choice",options:["Slow & mindful","Average","Fairly fast","Very fast"],scores:[4,3,2,1]},
    {q:"Do you feel sluggish or foggy after meals?",type:"choice",options:["Rarely","Sometimes","Often","Almost always"],scores:[4,3,2,1]},
    {q:"Do you take supplements regularly?",type:"choice",options:["Yes, regularly","Sometimes","No"],scores:[4,2,1]},
    {q:"Is there tension between what you want to eat and what you should?",type:"choice",options:["Rarely","Sometimes","Often"],scores:[4,2,1]},
    {q:"What would you most like to change about your eating habits?",type:"text"},
  ],
  cardiovascular:[
    {q:"Do you feel your heart racing or pounding unexpectedly?",type:"choice",options:["Rarely","Sometimes","Often","Almost daily"],scores:[4,3,2,1]},
    {q:"Have you experienced sudden dizziness or blacking out?",type:"choice",options:["Never","Sometimes","Often"],scores:[4,2,1]},
    {q:"Do you feel chest tightness when climbing stairs or walking fast?",type:"choice",options:["No","Sometimes","Often"],scores:[4,2,1]},
    {q:"Do your hands or feet often feel cold or numb?",type:"choice",options:["Rarely","Cold hands/feet","Numbness","Both"],scores:[4,2,2,1]},
    {q:"Do you know your blood pressure?",type:"choice",options:["Normal","Low","High","Don't know"],scores:[4,3,2,1]},
    {q:"Have you had your cholesterol or blood glucose checked?",type:"choice",options:["Within past year","A few years ago","Never"],scores:[4,2,1]},
    {q:"How much alcohol do you drink?",type:"choice",options:["None","1-2x/week","3x/week","Almost daily"],scores:[4,3,2,1]},
    {q:"Do you smoke?",type:"choice",options:["No","Former smoker","Current smoker"],scores:[4,2,1]},
    {q:"Is there cardiovascular disease in your family history?",type:"choice",options:["No","Not sure","Yes"],scores:[4,2,1]},
    {q:"What concerns you most about your heart or vascular health?",type:"text"},
  ],
  lifestyle:[
    {q:"How much sunlight do you get daily?",type:"choice",options:["30+ min","10-30 min","Barely any"],scores:[4,2,1]},
    {q:"How would you rate your average stress level?",type:"choice",options:["Low","Moderate","High","Very high"],scores:[4,3,2,1]},
    {q:"Do you have effective ways to relieve stress?",type:"choice",options:["Exercise","Nature/Walking","Talking","Being alone","None"],scores:[4,4,3,3,1]},
    {q:"Do you have time alone for yourself each day?",type:"choice",options:["Enough","A little","Almost none"],scores:[4,2,1]},
    {q:"How many hours per day do you spend on digital devices?",type:"choice",options:["Under 2 hrs","2-4 hrs","6+ hrs"],scores:[4,2,1]},
    {q:"Do you spend time in nature? (ocean, forest, earth)",type:"choice",options:["Daily","Often","Sometimes","Rarely"],scores:[4,3,2,1]},
    {q:"Do relationships give you energy or drain you?",type:"choice",options:["Mostly give energy","Mixed","Mostly drain me"],scores:[4,2,1]},
    {q:"Does your life's rhythm feel aligned with your body?",type:"choice",options:["Very aligned","Mostly","Not really","Very out of sync"],scores:[4,3,2,1]},
    {q:"Is your body sensitive to seasonal changes?",type:"choice",options:["Rarely","A little","Very much"],scores:[4,2,1]},
    {q:"What would you most like to change in your lifestyle for your body?",type:"text"},
  ],
  goals:[
    {q:"If you had to rate your current body condition out of 10?",type:"slider",min:1,max:10},
    {q:"What physical state do you want to be in 6 months from now?",type:"text"},
    {q:"What is your top health priority?",type:"choice",options:["Energy & vitality","Resolving pain","Mental health","Weight & body composition","Disease prevention"],scores:[4,3,3,3,3]},
    {q:"What is one thing you can do for your health starting today?",type:"text"},
    {q:"What is the biggest challenge in managing your health?",type:"choice",options:["Lack of willpower","No time","Lack of information","Doing it alone","Cost"],scores:[2,2,3,2,2]},
    {q:"If you had support, what would you ask for?",type:"text"},
    {q:"Which is harder right now — body or mind?",type:"choice",options:["Both okay","Body is harder","Mind is harder","Both are hard"],scores:[4,2,2,1]},
    {q:"What's the first thing you want to do when you're healthy?",type:"text"},
    {q:"What do you want to say to your body right now?",type:"text"},
    {q:"Starting this journey today — what's one word for yourself?",type:"text"},
  ],
};

function getStatus(p) {
  if(p>=75) return {label:"Good",color:"#4ECDC4",dot:"🟢"};
  if(p>=50) return {label:"Fair",color:"#F7C948",dot:"🟡"};
  return {label:"Needs Care",color:"#E8734A",dot:"🔴"};
}

function Wave() {
  return (
    <svg viewBox="0 0 400 24" style={{width:"100%",display:"block",margin:"8px 0"}}>
      <path d="M0,12 C50,0 100,24 150,12 C200,0 250,24 300,12 C350,0 400,24 400,12"
        fill="none" stroke="#4ECDC4" strokeWidth="2.5" opacity="0.4"/>
    </svg>
  );
}

function Radar({scores}) {
  const keys = CAT_KEYS.slice(0,9);
  const n=keys.length, cx=140, cy=140, r=100;
  const xy=(i,v)=>{
    const a=(Math.PI*2*i/n)-Math.PI/2, rt=v/100;
    return [cx+r*rt*Math.cos(a), cy+r*rt*Math.sin(a)];
  };
  return (
    <svg viewBox="0 0 280 280" style={{width:"100%",maxWidth:280}}>
      {[25,50,75,100].map(g=>(
        <polygon key={g}
          points={keys.map((_,i)=>xy(i,g).join(",")).join(" ")}
          fill="none" stroke="rgba(78,205,196,0.15)" strokeWidth="1"/>
      ))}
      {keys.map((_,i)=>{
        const [x,y]=xy(i,100);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(78,205,196,0.15)" strokeWidth="1"/>;
      })}
      <polygon
        points={keys.map((k,i)=>xy(i,scores[k]||0).join(",")).join(" ")}
        fill="rgba(78,205,196,0.2)" stroke="#4ECDC4" strokeWidth="2"/>
      {keys.map((k,i)=>{
        const [x,y]=xy(i,scores[k]||0);
        return <circle key={k} cx={x} cy={y} r="4" fill="#4ECDC4"/>;
      })}
      {keys.map((k,i)=>{
        const [x,y]=xy(i,118);
        const cat=CATS.find(c=>c.id===k);
        return (
          <text key={k} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
            fontSize="11" fill="#F8F9FA">{cat.emoji}</text>
        );
      })}
    </svg>
  );
}

function Timer({duration, cue, onDone}) {
  const [s, setS] = useState(duration);
  const [going, setGoing] = useState(false);
  const [fin, setFin] = useState(false);
  const iv = useRef(null);
  const start = () => {
    if(going||fin) return;
    setGoing(true);
    iv.current = setInterval(()=>setS(x=>{
      if(x<=1){clearInterval(iv.current);setGoing(false);setFin(true);onDone();return 0;}
      return x-1;
    }),1000);
  };
  const r=48, c=2*Math.PI*r, pct=((duration-s)/duration)*100;
  return (
    <div style={{textAlign:"center"}}>
      <div style={{position:"relative",width:120,height:120,margin:"0 auto 14px"}}>
        <svg width="120" height="120" style={{transform:"rotate(-90deg)"}}>
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(78,205,196,0.15)" strokeWidth="1.5"/>
          <circle cx="60" cy="60" r={r} fill="none" stroke="#4ECDC4" strokeWidth="2"
            strokeDasharray={c} strokeDashoffset={c*(1-pct/100)}
            style={{transition:"stroke-dashoffset 1s linear"}}/>
        </svg>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
          fontFamily:"monospace",fontSize:"1.8rem",color:fin?"#4ECDC4":"#F8F9FA"}}>{s}</div>
      </div>
      <p style={{fontSize:"0.82rem",color:"#8899AA",lineHeight:1.8,fontStyle:"italic",marginBottom:14}}>{cue}</p>
      {!going&&!fin&&(
        <button onClick={start} style={{border:"1px solid #4ECDC4",background:"none",color:"#4ECDC4",
          padding:"10px",cursor:"pointer",width:"100%",fontSize:"0.88rem",borderRadius:10}}>
          Start Breathing
        </button>
      )}
      {fin&&<p style={{color:"#4ECDC4",letterSpacing:"0.1em"}}>Body remembered ◯</p>}
    </div>
  );
}

export default function BodyReportEN({onBack=()=>{}}) {
  const [screen, setScreen] = useState("home");
  const [catIdx, setCatIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({});
  const [aiReport, setAiReport] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [sliderVal, setSliderVal] = useState(5);
  const [recSessions, setRecSessions] = useState([]);
  const [activeSess, setActiveSess] = useState(null);
  const [learnStep, setLearnStep] = useState("sci");
  const [yd, setYd] = useState(false);
  const [done, setDone] = useState({});

  const cat = CAT_KEYS[catIdx];
  const qs = QS[cat]||[];
  const q = qs[qIdx];
  const totalQ = CAT_KEYS.reduce((s,k)=>s+(QS[k]?.length||0),0);
  const doneQ = CAT_KEYS.slice(0,catIdx).reduce((s,k)=>s+(QS[k]?.length||0),0)+qIdx;
  const surveyPct = Math.round((doneQ/totalQ)*100);

  const save = (v) => setAnswers(p=>({...p,[`${cat}_${qIdx}`]:v}));

  function calcScores() {
    const r={};
    CAT_KEYS.forEach(k=>{
      const qs2=QS[k]||[]; let tot=0, mx=0;
      qs2.forEach((q2,i)=>{
        if(q2.type==="choice"){const a=answers[`${k}_${i}`];if(a!==undefined){tot+=q2.scores[a];mx+=4;}}
        else if(q2.type==="slider"){tot+=answers[`${k}_${i}`]??5;mx+=10;}
        else{mx+=4;tot+=2;}
      });
      r[k]=mx>0?Math.round((tot/mx)*100):0;
    });
    return r;
  }

  function buildRecs(sc) {
    const sorted = [...CAT_KEYS].sort((a,b)=>(sc[a]||0)-(sc[b]||0));
    const recs = [];
    sorted.forEach(k=>{
      (SESSIONS[k]||[]).forEach(s=>recs.push(s));
    });
    return recs.slice(0,10);
  }

  function surveyNext() {
    const key=`${cat}_${qIdx}`;
    if(q.type==="slider"&&answers[key]===undefined) save(sliderVal);
    if(qIdx<qs.length-1) setQIdx(qIdx+1);
    else if(catIdx<CAT_KEYS.length-1){setCatIdx(catIdx+1);setQIdx(0);}
    else {
      const sc = calcScores();
      setScores(sc);
      setRecSessions(buildRecs(sc));
      setScreen("result");
    }
  }

  function surveyPrev() {
    if(qIdx>0) setQIdx(qIdx-1);
    else if(catIdx>0){
      const p=CAT_KEYS[catIdx-1];
      setCatIdx(catIdx-1);
      setQIdx((QS[p]?.length||1)-1);
    }
  }

  async function getAI() {
    setAiLoading(true);
    const texts = CAT_KEYS.map(k=>{
      const ts=(QS[k]||[]).map((q2,i)=>{
        if(q2.type==="text"){const a=answers[`${k}_${i}`];return a?`${q2.q} → ${a}`:null;}
        return null;
      }).filter(Boolean);
      return ts.length?`[${k}] ${ts.join(" / ")}`:null;
    }).filter(Boolean).join("\n");
    const scoreText = CAT_KEYS.map(k=>`${k}:${scores[k]}`).join(", ");
    const prompt = `You are a natural science storyteller and poet. View the body as "a flame born from glucose molecules burning in oxygen — a sacred temple of combustion." Write a My Body Report with scientific depth and poetic sensibility.\n\nScores (out of 100): ${scoreText}\nOpen-ended answers: ${texts||"none"}\n\nWrite the report in this structure:\n1. Overall Body Landscape (2-3 sentences, poetic)\n2. Where You Shine (highest scoring areas, with scientific basis)\n3. Where Care is Needed (lowest scoring areas, warm and non-judgmental)\n4. Signals Your Body is Sending (based on open-ended answers)\n5. One Step Starting Today (3 specific practices with scientific backing)\n6. A Final Poetic Word (one sentence to your body)\n\nWrite in a warm, scientific, self-discovery tone — not prescriptive.`;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "anthropic-dangerous-direct-browser-access":"true",
        },
        body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1200,messages:[{role:"user",content:prompt}]}),
      });
      if(!res.ok) throw new Error(`HTTP ${res.status}`);
      const d = await res.json();
      setAiReport(d.content?.map(b=>b.text||"").join("")||"Could not generate the report.");
    } catch(e) {
      const sorted = [...CAT_KEYS].sort((a,b)=>(scores[b]||0)-(scores[a]||0));
      const top = sorted.slice(0,2);
      const bottom = sorted.slice(-2);
      const overall = Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/Object.values(scores).length);
      const report = [
        "[ My Body Landscape ]",
        `Your body is burning at ${overall} points right now.`,
        "Some areas glow brightly — others await their spark.",
        "",
        `[ Where You Shine ] ${top.map(k=>`${CATS.find(c=>c.id===k)?.emoji}${CATS.find(c=>c.id===k)?.label}(${scores[k]})`).join(", ")}`,
        "These are the pillars holding you up. Trust this flame.",
        "",
        `[ Where Care is Needed ] ${bottom.map(k=>`${CATS.find(c=>c.id===k)?.emoji}${CATS.find(c=>c.id===k)?.label}(${scores[k]})`).join(", ")}`,
        "The flame is small here — not judgment, just an invitation to tend it.",
        "",
        "[ One Step Starting Today ]",
        `① ${CATS.find(c=>c.id===bottom[0])?.label} — Try one recommended session below today.`,
        `② ${CATS.find(c=>c.id===bottom[1])?.label} — Give this area 5 mindful minutes daily.`,
        "③ Return to these 100 questions in 30 days. The body remembers what you give it.",
        "",
        "[ A Word to Your Body ]",
        "Like glucose meeting oxygen to become flame,\nyour body is burning right now — in this very moment.\nSlow, but unceasing.",
      ].join("\n");
      setAiReport(report);
    }
    setAiLoading(false);
  }

  function openSess(s) {
    setActiveSess(s);
    setLearnStep("sci");
    setYd(false);
    setScreen("session");
  }

  function finishSess() {
    setDone(d=>({...d,[activeSess.id]:true}));
    setLearnStep("done");
  }

  const base = {minHeight:"100vh",background:T.navy,fontFamily:"'Noto Sans KR',sans-serif",color:T.white};
  const card = (bc) => ({background:T.lt,borderRadius:14,padding:"18px",marginBottom:10,
    border:`1px solid ${bc||"rgba(78,205,196,0.1)"}`});
  const bigBtn = (primary) => ({display:"block",width:"100%",padding:"15px",borderRadius:12,
    border:"none",cursor:"pointer",fontSize:15,fontWeight:700,marginBottom:8,
    background:primary?T.teal:T.lt, color:primary?T.navy:T.stone});
  const outBtn = {width:"100%",padding:"12px",background:"none",
    border:`1px solid ${T.teal}`,color:T.teal,cursor:"pointer",
    fontSize:"0.88rem",borderRadius:10,marginBottom:8};
  const lbl = {fontSize:"0.6rem",color:T.stone,letterSpacing:"0.2em",marginBottom:8,display:"block"};

  if(screen==="home") return (
    <div style={base}>
      <div style={{padding:"60px 24px 16px",textAlign:"center"}}>
        <div style={{fontSize:48,marginBottom:12}}>🌊</div>
        <div style={{fontSize:36,fontWeight:900,letterSpacing:"-1px",lineHeight:1.1,marginBottom:8}}>
          My Body Report
        </div>
        <div style={{fontSize:17,color:T.teal,fontWeight:700,marginBottom:4}}>100 Questions to Read Your Body</div>
        <div style={{fontSize:12,color:T.stone,marginBottom:20}}>breathe&books · Goseong, Korea</div>
        <Wave/>
      </div>
      <div style={{padding:"0 20px 60px"}}>
        <button style={{...bigBtn(true),fontSize:18,padding:"18px",display:"flex",
          alignItems:"center",justifyContent:"center",gap:10}}
          onClick={()=>setScreen("survey")}>
          ▶ Start
        </button>
        <Wave/>
        <div style={{fontSize:12,color:T.stone,textAlign:"center",margin:"12px 0"}}>What this app does</div>
        {[
          {emoji:"📋",title:"100-Question Self Assessment",sub:"Sleep · Breath · Brain · Gut · Movement · Pain · Nutrition · Heart · Lifestyle · Goals",color:T.teal},
          {emoji:"📊",title:"Radar Chart Results",sub:"10 area scores · Strengths · Areas needing care",color:T.gold},
          {emoji:"✨",title:"AI Body Report",sub:"Your body story in scientific and poetic language",color:"#C4956A"},
          {emoji:"🔥",title:"Personalized Practice Sessions",sub:"Know · Move · Create · Record — based on your scores",color:"#9B8DB4"},
        ].map((item,i)=>(
          <div key={i} style={{...card(item.color+"33"),display:"flex",gap:12,alignItems:"flex-start",marginBottom:8}}>
            <div style={{fontSize:24,flexShrink:0}}>{item.emoji}</div>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:item.color,marginBottom:2}}>{item.title}</div>
              <div style={{fontSize:12,color:T.stone,lineHeight:1.5}}>{item.sub}</div>
            </div>
          </div>
        ))}
        <div style={{textAlign:"center",marginTop:20,fontSize:12,color:T.stone,lineHeight:2}}>
          Like a horoscope reads the moment of your birth,<br/>
          these questions read the state of your body <em>right now</em>.<br/>
          <span style={{color:T.teal,fontSize:11}}>The more honest your answers, the deeper the report.</span>
        </div>
      </div>
    </div>
  );

  if(screen==="survey") {
    const catObj = CATS.find(c=>c.id===cat);
    const ansKey = `${cat}_${qIdx}`;
    const curAns = answers[ansKey];
    return (
      <div style={base}>
        <div style={{background:T.dk,padding:"16px 20px 0"}}>
          <div style={{height:4,background:"rgba(78,205,196,0.1)",borderRadius:2,overflow:"hidden",marginBottom:6}}>
            <div style={{height:"100%",width:`${surveyPct}%`,background:T.teal,borderRadius:2,transition:"width 0.3s"}}/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",padding:"4px 0 12px",fontSize:12,color:T.stone}}>
            <span style={{color:catObj.color,fontWeight:700}}>{catObj.emoji} {catObj.label}</span>
            <span>{doneQ}/{totalQ}</span>
          </div>
        </div>
        <div style={{padding:"16px 20px 40px"}}>
          <div style={card()}>
            <div style={{display:"inline-flex",alignItems:"center",gap:6,
              background:catObj.color+"22",color:catObj.color,
              borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700,marginBottom:14}}>
              {catObj.emoji} {catObj.label}
            </div>
            <div style={{fontSize:16,fontWeight:600,lineHeight:1.6,marginBottom:18}}>{q.q}</div>
            {q.type==="choice"&&q.options.map((opt,i)=>(
              <button key={i} style={{display:"block",width:"100%",textAlign:"left",
                padding:"12px 14px",borderRadius:10,
                border:`2px solid ${curAns===i?T.teal:"rgba(78,205,196,0.15)"}`,
                background:curAns===i?"rgba(78,205,196,0.1)":T.lt,
                color:curAns===i?T.teal:T.white,
                fontSize:14,cursor:"pointer",marginBottom:7,fontWeight:curAns===i?700:400}}
                onClick={()=>save(i)}>{opt}</button>
            ))}
            {q.type==="text"&&(
              <textarea style={{width:"100%",minHeight:86,background:T.navy,
                border:`2px solid rgba(78,205,196,0.2)`,borderRadius:10,
                padding:"12px",fontSize:14,resize:"vertical",outline:"none",
                fontFamily:"inherit",boxSizing:"border-box",color:T.white}}
                placeholder="Write freely..."
                value={curAns||""} onChange={e=>save(e.target.value)}/>
            )}
            {q.type==="slider"&&(
              <div>
                <div style={{textAlign:"center",fontSize:44,fontWeight:900,color:T.teal,marginBottom:6}}>
                  {answers[ansKey]??sliderVal}
                  <span style={{fontSize:18,color:T.stone}}>/10</span>
                </div>
                <input type="range" min={1} max={10} value={answers[ansKey]??sliderVal}
                  style={{width:"100%",accentColor:T.teal}}
                  onChange={e=>{const v=Number(e.target.value);setSliderVal(v);save(v);}}/>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:T.stone,marginTop:4}}>
                  <span>1 (Very poor)</span><span>10 (Excellent)</span>
                </div>
              </div>
            )}
            <div style={{display:"flex",gap:8,marginTop:18}}>
              {(catIdx>0||qIdx>0)&&(
                <button style={{...bigBtn(false),flex:1,marginBottom:0}} onClick={surveyPrev}>← Back</button>
              )}
              <button style={{...bigBtn(true),flex:2,marginBottom:0}} onClick={surveyNext}
                disabled={q.type==="choice"&&curAns===undefined}>
                {catIdx===CAT_KEYS.length-1&&qIdx===qs.length-1?"Complete ✓":"Next →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if(screen==="result") {
    const overall = Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/Object.values(scores).length);
    const st = getStatus(overall);
    const sorted = [...CAT_KEYS].sort((a,b)=>(scores[b]||0)-(scores[a]||0));
    return (
      <div style={base}>
        <div style={{background:T.dk,padding:"40px 24px 28px",textAlign:"center"}}>
          <div style={{fontSize:11,color:T.stone,marginBottom:6}}>My Body Map</div>
          <div style={{fontSize:70,fontWeight:900,color:st.color,lineHeight:1}}>{overall}</div>
          <div style={{fontSize:12,color:T.stone,marginBottom:10}}>/ 100</div>
          <div style={{display:"inline-block",background:st.color+"22",color:st.color,
            borderRadius:20,padding:"5px 18px",fontSize:13,fontWeight:700}}>
            {st.dot} {st.label}
          </div>
          <Wave/>
        </div>
        <div style={{padding:"0 20px 40px"}}>
          <div style={{...card(),textAlign:"center",paddingTop:20}}>
            <Radar scores={scores}/>
          </div>
          <div style={card()}>
            <div style={{fontSize:13,fontWeight:700,color:T.teal,marginBottom:14}}>Scores by Category</div>
            {sorted.map(k=>{
              const p=scores[k]||0, s=getStatus(p), c=CATS.find(x=>x.id===k);
              return (
                <div key={k} style={{display:"flex",alignItems:"center",marginBottom:10}}>
                  <div style={{fontSize:12,color:T.white,width:90}}>{c.emoji} {c.label}</div>
                  <div style={{flex:1,height:6,background:"rgba(255,255,255,0.06)",
                    borderRadius:3,margin:"0 8px",overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${p}%`,background:c.color,borderRadius:3}}/>
                  </div>
                  <div style={{fontSize:12,fontWeight:700,color:s.color,width:26,textAlign:"right"}}>{p}</div>
                </div>
              );
            })}
          </div>
          <div style={card()}>
            {aiLoading?(
              <div style={{textAlign:"center",padding:"32px 0"}}>
                <div style={{fontSize:32,marginBottom:10}}>🌿</div>
                <div style={{fontSize:14,color:T.teal}}>Reading the language of your body...</div>
              </div>
            ):aiReport?(
              <div style={{fontSize:14,lineHeight:2,color:T.white,whiteSpace:"pre-wrap"}}>{aiReport}</div>
            ):(
              <button style={bigBtn(true)} onClick={getAI}>✨ Get My AI Body Report</button>
            )}
          </div>
          <Wave/>
          <div style={{fontSize:13,fontWeight:700,color:T.teal,margin:"16px 0 8px"}}>
            🔥 Recommended Practice Sessions
          </div>
          <div style={{fontSize:12,color:T.stone,marginBottom:12}}>
            Ordered by areas needing most care
          </div>
          {recSessions.map(s=>{
            const c = CATS.find(x=>x.id===s.cat);
            const isDone = done[s.id];
            return (
              <div key={s.id} onClick={()=>openSess(s)}
                style={{...card(isDone?T.teal+"44":c?.color+"33"),cursor:"pointer",
                  borderLeft:`3px solid ${isDone?T.teal:c?.color||T.teal}`}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                  <div style={{flex:1}}>
                    <div style={{fontSize:11,color:c?.color,marginBottom:4,fontWeight:700}}>
                      {c?.emoji} {c?.label}
                    </div>
                    <div style={{fontSize:14,fontWeight:600,marginBottom:4}}>{s.title}</div>
                    <div style={{fontSize:12,color:T.stone}}>{s.yoga.name}</div>
                  </div>
                  <div style={{fontSize:20,marginLeft:12,flexShrink:0,color:isDone?T.teal:T.stone}}>
                    {isDone?"◯":s.visual}
                  </div>
                </div>
              </div>
            );
          })}
          <Wave/>
          <button style={bigBtn(false)} onClick={()=>setScreen("home")}>← Home</button>
          <button style={bigBtn(false)} onClick={()=>{setScreen("survey");setCatIdx(0);setQIdx(0);setAnswers({});}}>
            Start Over
          </button>
        </div>
      </div>
    );
  }

  if(screen==="session"&&activeSess) {
    const s = activeSess;
    const c = CATS.find(x=>x.id===s.cat);
    const bc = c?.color||T.teal;
    const phases = ["sci","yoga","craft","done"];
    const pLabel = {sci:"Know",yoga:"Move",craft:"Create",done:"Record"};
    return (
      <div style={base}>
        <div style={{background:T.dk,padding:"16px 20px 0"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <div style={{fontSize:11,color:T.stone,cursor:"pointer"}}
              onClick={()=>setScreen("result")}>← Report</div>
            <div style={{display:"flex",gap:10}}>
              {phases.map((p,i)=>(
                <div key={p} style={{textAlign:"center"}}>
                  <div style={{width:5,height:5,borderRadius:"50%",margin:"0 auto 3px",
                    background:learnStep===p?bc:phases.indexOf(learnStep)>i?"#7a6540":"rgba(255,255,255,0.1)"}}/>
                  <div style={{fontSize:"0.5rem",color:learnStep===p?bc:T.stone}}>{pLabel[p]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{padding:"16px 20px 40px"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:6,
            background:bc+"22",color:bc,borderRadius:20,padding:"4px 12px",
            fontSize:12,fontWeight:700,marginBottom:14}}>
            {c?.emoji} {c?.label}
          </div>
          <div style={{fontSize:"1.1rem",fontWeight:700,lineHeight:1.5,marginBottom:14}}>{s.title}</div>

          {learnStep==="sci"&&(
            <div>
              <div style={{textAlign:"center",fontSize:"2.5rem",color:bc,marginBottom:14}}>{s.visual}</div>
              <div style={{...card(bc+"33"),padding:"16px"}}>
                <span style={lbl}>SCIENCE</span>
                <div style={{fontSize:"0.86rem",lineHeight:1.9,marginBottom:10,color:T.white}}>{s.science}</div>
                <div style={{fontFamily:"monospace",fontSize:"0.75rem",color:T.stone,lineHeight:1.6}}>{s.formula}</div>
              </div>
              <p style={{fontSize:"0.72rem",color:T.stone,fontStyle:"italic",lineHeight:1.8,marginBottom:14}}>
                Read this aloud three times. The lips remember first.
              </p>
              <button style={{...outBtn,borderColor:bc,color:bc}}
                onClick={()=>setLearnStep("yoga")}>Got it → Move</button>
            </div>
          )}

          {learnStep==="yoga"&&(
            <div>
              <span style={lbl}>TODAY'S PRACTICE</span>
              <div style={{fontSize:"1.1rem",fontWeight:600,marginBottom:5}}>{s.yoga.name}</div>
              <div style={{fontSize:"0.8rem",color:bc,lineHeight:1.8,marginBottom:18}}>{s.yoga.breath}</div>
              <Timer duration={s.yoga.duration} cue={s.yoga.cue} onDone={()=>setYd(true)}/>
              {yd&&(
                <button style={{...outBtn,borderColor:bc,color:bc,marginTop:14}}
                  onClick={()=>setLearnStep("craft")}>Body remembered → Create</button>
              )}
            </div>
          )}

          {learnStep==="craft"&&(
            <div>
              <span style={lbl}>TODAY'S DRAWING / CALLIGRAPHY</span>
              <div style={{...card(bc+"22"),padding:"18px",marginBottom:14}}>
                <div style={{fontSize:"0.95rem",lineHeight:1.9}}>{s.craft}</div>
              </div>
              <p style={{fontSize:"0.72rem",color:T.stone,fontStyle:"italic",lineHeight:1.9,marginBottom:18}}>
                Pick up a pen or brush.<br/>Don't think.<br/>Your body already knows.
              </p>
              <button style={{...outBtn,background:bc,color:T.navy,borderColor:bc}}
                onClick={finishSess}>One stroke made — Complete</button>
            </div>
          )}

          {learnStep==="done"&&(
            <div style={{textAlign:"center",paddingTop:28}}>
              <div style={{fontSize:"2.5rem",color:bc,marginBottom:10}}>◯</div>
              <div style={{fontSize:"1rem",fontWeight:600,marginBottom:4}}>{s.title}</div>
              <div style={{fontSize:"0.72rem",color:T.stone,lineHeight:2,marginBottom:6}}>Know → Move → Create</div>
              <div style={{fontSize:"0.68rem",color:T.stone,marginBottom:24}}>
                The body remembers. Tomorrow the flame burns on.
              </div>
              <button style={bigBtn(true)} onClick={()=>setScreen("result")}>← Back to Report</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <div style={base}/>;
}
