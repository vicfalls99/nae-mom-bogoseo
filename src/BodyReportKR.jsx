import { useState, useRef } from "react";

const T = {
  navy:"#1A2744", dk:"#111B33", lt:"#243260",
  teal:"#4ECDC4", gold:"#F7C948", white:"#F8F9FA",
  stone:"#8899AA", ember:"#E8734A",
};

const SESSIONS = {
  sleep: [
    {
      id:"sleep1", cat:"수면", title:"Melatonin — The Darkness Hormone",
      science:"Melatonin is released from the pineal gland when light disappears. Sleep is not a matter of willpower — it's molecular. The deeper the darkness, the more melatonin flows. Trust the night.",
      formula:"Serotonin → Melatonin (C₁₃H₁₆N₂O₂) · Pineal gland · Light-sensitive",
      visual:"🌑",
      yoga:{name:"Legs Up the Wall + Shavasana", breath:"Inhale 4 counts / Exhale 8 counts", duration:90, cue:"Close your eyes. In the darkness, melatonin begins to flow."},
      craft:"Draw a crescent moon. The waxing and waning form — the rhythm of melatonin.",
    },
    {
      id:"sleep2", cat:"수면", title:"The Glymphatic System — Brain Cleanse",
      science:"While you sleep, cerebrospinal fluid flows through the brain clearing amyloid plaques. Sleep deprivation raises Alzheimer's risk — sleep washes the brain.",
      formula:"NREM Stage 3 · Glymphatic flow · Amyloid-β clearance · 7-9 hours",
      visual:"💤",
      yoga:{name:"Yoga Nidra — Sleep Preparation", breath:"Completely natural breathing", duration:120, cue:"Release each body part one by one. The brain begins its nightly cleaning."},
      craft:"Draw rivers flowing through the brain. Glymphatic — the night's cleaning crew.",
    },
  ],
  breath: [
    {
      id:"breath1", cat:"호흡", title:"Diaphragm — The Engine of Breath",
      science:"Breathing is muscular work. When the diaphragm descends, air enters; when it rises, air leaves — the most tireless muscle, the most faithful flame.",
      formula:"Dome-shaped muscle · Contract→flat→thorax↑ · Relax→dome→thorax↓",
      visual:"⌒",
      yoga:{name:"Diaphragmatic Breathing", breath:"Inhale — belly pushes out / Exhale — belly draws in", duration:90, cue:"Place hands on your belly. When the diaphragm drops, the belly expands."},
      craft:"Draw a dome rising and falling. The dance of the diaphragm.",
    },
    {
      id:"breath2", cat:"호흡", title:"Slow Breathing — Healing at 0.1Hz",
      science:"Five breaths per minute. Inhale 5 seconds, exhale 5 seconds. At this rhythm, heart, breath, and blood pressure resonate — the whole body becomes one wave.",
      formula:"5-6 breaths/min (0.1Hz) · HRV maximized · Vagus nerve activated",
      visual:"≋",
      yoga:{name:"Sama Vritti (Equal Breathing)", breath:"Inhale 5s / Exhale 5s · 6 per minute", duration:120, cue:"The heart slows to follow the breath. The whole body becomes one wave."},
      craft:"Draw one slow, large wave. The rhythm of resonance breathing.",
    },
  ],
  brain: [
    {
      id:"brain1", cat:"브레인", title:"Synapse — Neurons in Dialogue",
      science:"Neurons don't connect directly. They release neurotransmitters into the synaptic cleft — this chemical conversation creates thoughts, emotions, and memories.",
      formula:"Action potential → Ca²⁺ influx → Vesicle release → Neurotransmitters → EPSP/IPSP",
      visual:"—·—",
      yoga:{name:"Brahmari (Humming Bee Breath)", breath:"Inhale / Exhale with 'mmm' hum", duration:60, cue:"Vibration resonates inside the skull. Neurons are in conversation."},
      craft:"Draw pre- and post-synaptic neurons with the gap between. The language of connection.",
    },
    {
      id:"brain2", cat:"브레인", title:"Neuroplasticity — The Brain Changes",
      science:"Learning means synapses getting stronger. The more you repeat, the thicker the connections — right now, this practice is physically changing your brain.",
      formula:"LTP (Long-Term Potentiation) · Hebb's Law · Hippocampus → Cortex consolidation",
      visual:"∞",
      yoga:{name:"Try One New Pose", breath:"Inhale — 'neuro' / Exhale — 'plasticity'", duration:60, cue:"This awkward, unfamiliar feeling — new synapses are forming right now."},
      craft:"Draw ∞ in one stroke. The infinite capacity of the brain to change.",
    },
  ],
  gut: [
    {
      id:"gut1", cat:"장건강", title:"Gut Microbiome — The Second Immune System",
      science:"100 trillion microorganisms live in the gut. Diversity equals health. Fermented foods and fiber feed them — a healthy gut means a healthy brain.",
      formula:"100 trillion microbes · Short-chain fatty acids (SCFA) · Gut-brain axis",
      visual:"🦠",
      yoga:{name:"Apanasana (Knee-to-Chest)", breath:"Inhale / Exhale — draw knees to chest", duration:60, cue:"The abdomen is compressed, stimulating the gut. Peristalsis activates."},
      craft:"Draw diverse microorganisms filling the intestine. Diversity is health.",
    },
    {
      id:"gut2", cat:"장건강", title:"Serotonin — Born in the Gut",
      science:"90% of serotonin is produced in the gut, not the brain. Calm rises from the body's center — gut health is mental health.",
      formula:"Tryptophan → 5-HTP → Serotonin (C₁₀H₁₂N₂O) · Enterochromaffin cells",
      visual:"≈",
      yoga:{name:"Sukhasana + Belly Breathing", breath:"Inhale — belly expands / Exhale — belly contracts", duration:90, cue:"Feel deep in your abdomen. The gut is making serotonin right now."},
      craft:"Draw a wave-like curve. The rhythm of peristalsis — serotonin's dance.",
    },
  ],
  movement: [
    {
      id:"move1", cat:"운동", title:"Muscle Hypertrophy — How Muscles Grow",
      science:"Exercise damages muscle fibers. As those wounds heal, the muscle grows thicker. Destruction is the condition for growth — the body's paradox.",
      formula:"Resistance exercise → Micro-tears → Satellite cell activation → Protein synthesis↑",
      visual:"↑M",
      yoga:{name:"Warrior II — Hold 2 Minutes", breath:"Inhale — 'damage' / Exhale — 'rebuild'", duration:90, cue:"The thighs are burning. This is micro-tearing. Tomorrow this place will be stronger."},
      craft:"Draw a cracked line and a thicker line filling it. Damage and rebuilding.",
    },
    {
      id:"move2", cat:"운동", title:"Zone 2 — Training the Mitochondria",
      science:"At a conversational intensity, mitochondria train most efficiently. 150 minutes per week adds 5-7 years to healthspan.",
      formula:"60-70% max HR · Lactate <2mmol/L · Mitochondrial density↑ · Fat oxidation↑",
      visual:"Z2",
      yoga:{name:"Sun Salutation — Zone 2 Pace", breath:"Nasal breathing maintained · Conversational pace", duration:90, cue:"Sweating but can still talk. Fat is burning. Mitochondria are growing."},
      craft:"Draw a heart rate zone chart. Zone 2 — the optimal zone for fat burning.",
    },
  ],
  pain: [
    {
      id:"pain1", cat:"통증", title:"Fascia — The Body's Web",
      science:"Fascia is the web connecting the entire body. When shoulders tighten, the back aches; when soles harden, the neck pulls — everything is connected.",
      formula:"Collagen · Elastin · Matrix · Continuous full-body structure · Tension transfer",
      visual:"~",
      yoga:{name:"Body Scan Meditation", breath:"Inhale — 'connected' / Exhale — 'release'", duration:60, cue:"From feet to crown, one continuous web. Where does it pull? Where is it tight?"},
      craft:"Draw a body silhouette with connecting lines inside — the fascial map.",
    },
    {
      id:"pain2", cat:"통증", title:"Chronic Inflammation — The Root of Pain",
      science:"Chronic inflammation burns quietly. It damages blood vessels and creates pain — the common root of modern chronic disease. Exercise, sleep, and diet form the triangle of defense.",
      formula:"IL-6·TNF-α·CRP chronically elevated · Visceral fat · Sleep deprivation",
      visual:"🔥",
      yoga:{name:"Child's Pose + Long Exhale", breath:"Inhale 4 counts / Exhale 8 counts", duration:90, cue:"The long exhale activates the vagus nerve and reduces inflammation."},
      craft:"Draw a small flame burning low. Chronic inflammation — invisible, persistent.",
    },
  ],
  nutrition: [
    {
      id:"food1", cat:"영양", title:"Protein — Protecting Muscle",
      science:"Without enough protein, muscle is lost. The older you get, the more you need — 30-40g per meal crosses the threshold for muscle synthesis.",
      formula:"1.6-2.2g per kg bodyweight · Leucine 3g threshold · 30 min post-exercise",
      visual:"🥩",
      yoga:{name:"Sun Salutation + Post-Workout Protein", breath:"Protein within 30 minutes of exercise", duration:60, cue:"Exercise opens the door to muscle protein synthesis. Protein must enter within 30 minutes."},
      craft:"Draw the muscle synthesis window. Golden time — 30 minutes post-workout.",
    },
    {
      id:"food2", cat:"영양", title:"Blood Sugar — The Glucose Wave",
      science:"When blood sugar spikes, insulin spikes too. This rollercoaster exhausts the pancreas — fiber and post-meal movement reduce glucose spikes.",
      formula:"Fasting glucose <100 · 2hr postprandial <140 · HbA1c <5.7%",
      visual:"📈",
      yoga:{name:"10-Minute Walk After Meals", breath:"Light and easy · Muscles absorb glucose", duration:60, cue:"10 minutes of movement after eating reduces glucose spikes by 30%."},
      craft:"Draw a blood glucose graph. Spike vs. gentle curve — the difference fiber makes.",
    },
  ],
  cardiovascular: [
    {
      id:"heart1", cat:"심혈관", title:"The Heart — An Engine That Never Stops",
      science:"The sinoatrial node generates electrical signals. The atria contract, then moments later the ventricles follow — this precise timing pumps blood efficiently.",
      formula:"SA Node (60-100/min) → AV Node → Bundle of His → Purkinje fibers",
      visual:"♡",
      yoga:{name:"Hands on Heart — Feel the Beat", breath:"Inhale 4 / Exhale 4 · Sync with heartbeat", duration:60, cue:"Feel the heartbeat with your palm. The rhythm the SA node creates — never stopping since birth."},
      craft:"Draw an ECG waveform. P wave · QRS complex · T wave — the electrical language of the heart.",
    },
    {
      id:"heart2", cat:"심혈관", title:"Atherosclerosis — The Silent Narrowing",
      science:"LDL accumulates in artery walls. When oxidized, macrophages engulf it. Foam cells pile up into plaque — decades of silent progression.",
      formula:"LDL oxidation → Foam cells → Plaque → Stenosis · ApoB · Exercise raises HDL",
      visual:"⬡",
      yoga:{name:"Sun Salutation — Zone 2 Cardio", breath:"Conversational pace · 20-30 minutes", duration:90, cue:"Heart rate 130-150. Zone 2 protects the vascular endothelium."},
      craft:"Draw a normal vessel and a plaque-filled vessel cross-section. Silent narrowing.",
    },
  ],
  lifestyle: [
    {
      id:"life1", cat:"생활습관", title:"Vagus Nerve — The Wandering Nerve",
      science:"Starting from the brainstem, it wanders to the heart, lungs, stomach, and intestines — the backbone of the parasympathetic system. A longer exhale activates it and reduces stress.",
      formula:"Brainstem → Heart·Lungs·Stomach·Gut · 80% afferent · Parasympathetic axis",
      visual:"〜",
      yoga:{name:"4-7-8 Breathing", breath:"Inhale 4 / Hold 7 / Exhale 8", duration:90, cue:"The 8-count exhale activates the vagus nerve. Feel the heart slowing down."},
      craft:"Draw a winding line from brain to intestines. The path of the wandering nerve.",
    },
    {
      id:"life2", cat:"생활습관", title:"Stress and Resilience",
      science:"Stress isn't bad. Acute stress improves performance — chronic stress is the problem. Resilience processes the same stress differently. It can be trained.",
      formula:"HPA axis: CRH→ACTH→Cortisol · Chronic → hippocampal atrophy · Immune↓",
      visual:"⇄",
      yoga:{name:"4-7-8 Breathing — Lower Cortisol", breath:"Inhale 4 / Hold 7 / Exhale 8", duration:90, cue:"The long exhale lowers cortisol. The switch that turns off the stress response."},
      craft:"Draw a stress curve. Acute stress raises performance; chronic stress destroys — an inverted U.",
    },
  ],
  goals: [
    {
      id:"goal1", cat:"목표", title:"Healthspan — The Real Goal",
      science:"Lifespan has increased. But the years lived in health haven't kept pace — too many years spent ill. Extending healthspan is the real goal.",
      formula:"Lifespan - years with disease/disability = Healthspan",
      visual:"◯",
      yoga:{name:"Mountain Pose — Standing in Health", breath:"Inhale — 'healthspan' / Exhale — 'starting now'", duration:60, cue:"This posture is an investment in healthspan. The gap closes starting from this moment."},
      craft:"Draw two bar charts. Lifespan vs. Healthspan — the gap between them.",
    },
    {
      id:"goal2", cat:"목표", title:"The Power of Lifestyle",
      science:"Genetics loads the gun, but lifestyle pulls the trigger — 80% of diabetes, cardiovascular disease, and cancer can be prevented through lifestyle.",
      formula:"Genetics 20% + Environment & Lifestyle 80% · Epigenetics",
      visual:"80%",
      yoga:{name:"Sun Salutation — Daily Axis", breath:"Same time, same breath, every day", duration:90, cue:"Daily repetition changes gene expression. Yoga switches on anti-inflammatory genes."},
      craft:"Draw genetics (20%) and lifestyle (80%). I hold the trigger.",
    },
  ],
};

const CATS = [
  {id:"수면",       color:"#7B9EA8", emoji:"🌙", label:"수면"},
  {id:"호흡",      color:"#8BAF8B", emoji:"🌿", label:"호흡"},
  {id:"브레인",       color:"#9B8DB4", emoji:"🧠", label:"브레인"},
  {id:"장건강",         color:"#C4956A", emoji:"🌱", label:"장건강"},
  {id:"운동",    color:"#7BA89B", emoji:"🔥", label:"운동"},
  {id:"통증",        color:"#B47B7B", emoji:"🦴", label:"통증"},
  {id:"영양",   color:"#A8A87B", emoji:"🌾", label:"영양"},
  {id:"심혈관",color:"#B47B8B",emoji:"❤️",label:"심혈관"},
  {id:"생활습관",   color:"#7B8BA8", emoji:"🌊", label:"생활습관"},
  {id:"목표",       color:"#A89B7B", emoji:"✨", label:"목표"},
];
const CAT_KEYS = CATS.map(c=>c.id);

const QS = {
  수면:[
    {q:"잠드는 데 얼마나 걸리나요?",type:"choice",options:["5분 이내","10~20분","30분 이상","1시간 이상"],scores:[4,3,2,1]},
    {q:"밤중에 깨나요?",type:"choice",options:["거의 안 깸","1~2회","3회 이상"],scores:[4,2,1]},
    {q:"아침에 일어날 때 느낌은?",type:"choice",options:["개운함","그럭저럭","무거움","일어나기 싫음"],scores:[4,3,2,1]},
    {q:"하루 평균 수면 시간은?",type:"choice",options:["5시간 미만","5~6시간","7~8시간","9시간 이상"],scores:[1,2,4,3]},
    {q:"자고 나서도 피곤한 날이 얼마나 되나요?",type:"choice",options:["거의 없음","가끔","자주","거의 매일"],scores:[4,3,2,1]},
    {q:"코골이나 수면 중 숨막힘을 경험하나요?",type:"choice",options:["아니오","모름","예"],scores:[4,2,1]},
    {q:"낮에 졸음이 쏟아져 일상이 방해받나요?",type:"choice",options:["아니오","가끔","예"],scores:[4,2,1]},
    {q:"잠들기 전 스마트폰 사용 시간은?",type:"choice",options:["안 봄","30분 미만","1시간 이상"],scores:[4,2,1]},
    {q:"취침·기상 시간이 일정한가요?",type:"choice",options:["매우 규칙적","대체로","불규칙"],scores:[4,2,1]},
    {q:"지금 내 수면에서 가장 불편한 점은?",type:"text"},
  ],
  호흡:[
    {q:"평소 호흡이 어떤가요?",type:"choice",options:["깊고 편안","얕은 편","자주 답답함","모름"],scores:[4,2,1,2]},
    {q:"계단 오르거나 빠르게 걸을 때 숨이 차나요?",type:"choice",options:["전혀 안 참","조금 참","많이 참","못 올라감"],scores:[4,3,2,1]},
    {q:"가슴이 답답하거나 조이는 느낌이 드나요?",type:"choice",options:["거의 없음","가끔","자주","거의 매일"],scores:[4,3,2,1]},
    {q:"코로 숨 쉬나요, 입으로 쉬나요?",type:"choice",options:["주로 코","섞임","주로 입"],scores:[4,2,1]},
    {q:"긴장하거나 스트레스받을 때 호흡이 어떻게 변하나요?",type:"choice",options:["변화 없음","빨라짐","멈추는 느낌","잘 모름"],scores:[4,2,1,2]},
    {q:"하루에 깊은 숨을 의도적으로 쉬나요?",type:"choice",options:["자주","가끔","거의 안 함"],scores:[4,2,1]},
    {q:"코막힘이나 비염이 있나요?",type:"choice",options:["아니오","계절성","예"],scores:[4,2,1]},
    {q:"숨을 참을 수 있는 시간은?",type:"choice",options:["1분 이상","30초~1분","30초 미만"],scores:[4,3,1]},
    {q:"명상·호흡 수련을 하나요?",type:"choice",options:["규칙적으로","가끔","안 함"],scores:[4,2,1]},
    {q:"호흡과 관련해 지금 가장 신경 쓰이는 것은?",type:"text"},
  ],
  브레인:[
    {q:"하루 중 집중이 잘 되는 시간대가 있나요?",type:"choice",options:["오전","오후","저녁","들쭉날쭉"],scores:[4,3,3,1]},
    {q:"무언가에 몰입하면 얼마나 지속되나요?",type:"choice",options:["1시간 이상","30분","10분 미만","시작이 안 됨"],scores:[4,3,2,1]},
    {q:"깜빡하거나 잊어버리는 일이 얼마나 잦나요?",type:"choice",options:["거의 없음","가끔","자주","매일"],scores:[4,3,2,1]},
    {q:"새로운 것을 배울 때 어떤가요?",type:"choice",options:["빠르게 흡수","보통","시간이 걸림","부담스러움"],scores:[4,3,2,1]},
    {q:"브레인 포그가 드나요?",type:"choice",options:["거의 없음","가끔","자주","거의 매일"],scores:[4,3,2,1]},
    {q:"감정 기복이 뇌에 영향을 준다고 느끼나요?",type:"choice",options:["없음","조금","많이"],scores:[4,2,1]},
    {q:"읽기·쓰기·말하기 중 어느 게 편한가요?",type:"choice",options:["읽기","쓰기","말하기","다 비슷"],scores:[3,3,3,4]},
    {q:"자기 전 생각이 너무 많아 잠을 방해하나요?",type:"choice",options:["거의 없음","가끔","자주"],scores:[4,2,1]},
    {q:"창의적 아이디어가 언제 가장 잘 떠오르나요?",type:"choice",options:["아침","걷거나 움직일 때","샤워 중","밤","불규칙"],scores:[3,4,3,3,2]},
    {q:"지금 내 뇌에서 가장 피곤한 것은?",type:"text"},
  ],
  장건강:[
    {q:"하루 배변 횟수는?",type:"choice",options:["1~2회","3회 이상","격일","3일 이상 없음"],scores:[4,3,2,1]},
    {q:"변의 상태는 어떤가요?",type:"choice",options:["부드럽고 정상","딱딱함","묽음","들쭉날쭉"],scores:[4,2,2,1]},
    {q:"식후 배가 더부룩하거나 가스가 차나요?",type:"choice",options:["거의 없음","가끔","자주","거의 매일"],scores:[4,3,2,1]},
    {q:"복통이나 경련이 있나요?",type:"choice",options:["없음","가끔","스트레스받을 때","자주"],scores:[4,3,2,1]},
    {q:"음식 먹고 바로 화장실에 가고 싶어지나요?",type:"choice",options:["없음","가끔","자주"],scores:[4,2,1]},
    {q:"특정 음식을 먹으면 장이 불편한가요?",type:"choice",options:["없음","유제품","밀가루","기름진 음식","여러 가지"],scores:[4,2,2,2,1]},
    {q:"장이 스트레스와 연결되어 예민하다고 느끼나요?",type:"choice",options:["아님","조금","많이"],scores:[4,2,1]},
    {q:"발효식품을 규칙적으로 먹나요?",type:"choice",options:["매일","자주","가끔","거의 안 먹음"],scores:[4,3,2,1]},
    {q:"장 상태가 기분이나 에너지에 영향을 준다고 느끼나요?",type:"choice",options:["없음","조금","많이"],scores:[4,2,1]},
    {q:"지금 장에서 가장 불편한 점은?",type:"text"},
  ],
  운동:[
    {q:"일주일에 몇 번 운동하나요?",type:"choice",options:["매일","3~4회","1~2회","거의 안 함"],scores:[4,3,2,1]},
    {q:"주로 어떤 운동을 하나요?",type:"choice",options:["근력","유산소","걷기","요가·스트레칭","안 함"],scores:[4,4,3,3,1]},
    {q:"한 번 운동할 때 얼마나 하나요?",type:"choice",options:["1시간 이상","20~30분","10분 미만","운동 안 함"],scores:[4,3,2,1]},
    {q:"운동 후 몸 상태는?",type:"choice",options:["개운하고 활기","그럭저럭","너무 피곤","운동을 안 해서 모름"],scores:[4,3,2,1]},
    {q:"근력이 예전보다 어떤가요?",type:"choice",options:["좋아짐","비슷","약해진 느낌","확실히 떨어짐"],scores:[4,3,2,1]},
    {q:"앉아 있는 시간이 하루 얼마나 되나요?",type:"choice",options:["4시간 미만","4~6시간","8시간 이상"],scores:[4,2,1]},
    {q:"스트레칭이나 유연성 관리를 하나요?",type:"choice",options:["규칙적으로","가끔","거의 안 함"],scores:[4,2,1]},
    {q:"운동하고 싶은 의욕이 있나요?",type:"choice",options:["충분히","조금","별로","전혀"],scores:[4,3,2,1]},
    {q:"운동을 방해하는 가장 큰 이유는?",type:"choice",options:["없음","시간 없음","몸이 아픔","의욕 없음","뭘 해야 할지 모름"],scores:[4,2,2,1,1]},
    {q:"지금 몸이 원하는 움직임은?",type:"text"},
  ],
  통증:[
    {q:"현재 만성적으로 아픈 부위가 있나요?",type:"choice",options:["없음","목·어깨","허리","무릎·관절","여러 곳"],scores:[4,2,2,2,1]},
    {q:"통증 강도는 어느 정도인가요?",type:"choice",options:["없음","약함","중간","강함"],scores:[4,3,2,1]},
    {q:"통증이 언제 심해지나요?",type:"choice",options:["없음","아침","오래 앉아 있을 때","움직일 때","저녁·밤"],scores:[4,2,2,2,2]},
    {q:"자고 나면 몸이 뻣뻣한가요?",type:"choice",options:["거의 없음","조금","많이","매일 심하게"],scores:[4,3,2,1]},
    {q:"특정 자세가 오래 유지되지 않나요?",type:"choice",options:["괜찮음","앉기 힘듦","서기 힘듦","걷기 힘듦"],scores:[4,2,2,1]},
    {q:"근육 경련이나 쥐가 자주 나나요?",type:"choice",options:["거의 없음","가끔","자주"],scores:[4,2,1]},
    {q:"관절에서 소리가 나거나 붓는 느낌이 있나요?",type:"choice",options:["없음","소리만","붓기도 함","자주"],scores:[4,3,2,1]},
    {q:"통증 때문에 수면이나 일상이 방해받나요?",type:"choice",options:["없음","가끔","자주","매일"],scores:[4,3,2,1]},
    {q:"통증 관리를 위해 뭔가 하고 있나요?",type:"choice",options:["스트레칭","마사지","약 복용","아무것도 안 함"],scores:[4,3,2,1]},
    {q:"지금 몸에서 가장 신경 쓰이는 통증이나 불편함은?",type:"text"},
  ],
  영양:[
    {q:"하루 식사 횟수는?",type:"choice",options:["3끼","2끼","1끼","불규칙"],scores:[4,3,2,1]},
    {q:"채소와 과일을 매일 먹나요?",type:"choice",options:["충분히","조금","가끔","거의 안 먹음"],scores:[4,3,2,1]},
    {q:"단백질을 매 끼니 챙기나요?",type:"choice",options:["매끼","하루 한 번","가끔","거의 안 먹음"],scores:[4,3,2,1]},
    {q:"가공식품·인스턴트를 얼마나 먹나요?",type:"choice",options:["거의 안 먹음","주 1~2회","자주","거의 매일"],scores:[4,3,2,1]},
    {q:"물을 하루 얼마나 마시나요?",type:"choice",options:["2리터 이상","1~1.5리터","1리터 미만"],scores:[4,3,1]},
    {q:"식사 속도는?",type:"choice",options:["천천히 꼭꼭","보통","빠른 편","매우 빠름"],scores:[4,3,2,1]},
    {q:"식후 혈당 급등 느낌이 있나요?",type:"choice",options:["거의 없음","가끔","자주","거의 매일"],scores:[4,3,2,1]},
    {q:"영양제를 복용하나요?",type:"choice",options:["규칙적으로","가끔","안 함"],scores:[4,2,1]},
    {q:"먹고 싶은 것과 먹어야 하는 것 사이 갈등이 있나요?",type:"choice",options:["거의 없음","가끔","많이"],scores:[4,2,1]},
    {q:"지금 내 식습관에서 가장 바꾸고 싶은 것은?",type:"text"},
  ],
  심혈관:[
    {q:"평소 심장이 두근거리거나 빠르게 뛰는 느낌이 있나요?",type:"choice",options:["거의 없음","가끔","자주","거의 매일"],scores:[4,3,2,1]},
    {q:"갑자기 어지럽거나 눈앞이 캄캄해진 적 있나요?",type:"choice",options:["없음","가끔","자주"],scores:[4,2,1]},
    {q:"계단 오를 때나 빠르게 걸을 때 가슴이 답답한가요?",type:"choice",options:["없음","가끔","자주"],scores:[4,2,1]},
    {q:"손발이 자주 차거나 저리나요?",type:"choice",options:["거의 없음","손발 참","저림","둘 다"],scores:[4,2,2,1]},
    {q:"혈압을 알고 있나요?",type:"choice",options:["정상","낮은 편","높은 편","모름"],scores:[4,3,2,1]},
    {q:"콜레스테롤이나 혈당 수치를 체크한 적 있나요?",type:"choice",options:["최근 1년 내","몇 년 전","한 번도 없음"],scores:[4,2,1]},
    {q:"술을 얼마나 마시나요?",type:"choice",options:["안 마심","주 1~2회","주 3회 이상","거의 매일"],scores:[4,3,2,1]},
    {q:"흡연을 하나요?",type:"choice",options:["안 함","과거 흡연","현재 흡연"],scores:[4,2,1]},
    {q:"가족 중 심혈관 질환 병력이 있나요?",type:"choice",options:["없음","모름","있음"],scores:[4,2,1]},
    {q:"심장이나 혈관 건강에 대해 지금 가장 걱정되는 것은?",type:"text"},
  ],
  생활습관:[
    {q:"하루 중 햇빛을 얼마나 받나요?",type:"choice",options:["30분 이상","10~30분","거의 못 받음"],scores:[4,2,1]},
    {q:"스트레스 수준은 평균적으로 어느 정도인가요?",type:"choice",options:["낮음","보통","높음","매우 높음"],scores:[4,3,2,1]},
    {q:"스트레스를 해소하는 방법이 있나요?",type:"choice",options:["운동","자연·산책","대화","혼자 있기","없음"],scores:[4,4,3,3,1]},
    {q:"하루 중 혼자만의 시간이 있나요?",type:"choice",options:["충분히","조금","거의 없음"],scores:[4,2,1]},
    {q:"디지털 기기 사용 시간은 하루 얼마나 되나요?",type:"choice",options:["2시간 미만","2~4시간","6시간 이상"],scores:[4,2,1]},
    {q:"자연과 접촉하는 시간이 있나요?",type:"choice",options:["매일","자주","가끔","거의 없음"],scores:[4,3,2,1]},
    {q:"사람들과의 관계가 에너지를 주나요, 빼앗나요?",type:"choice",options:["주로 줌","반반","주로 빼앗음"],scores:[4,2,1]},
    {q:"지금 삶의 리듬이 몸과 맞는다고 느끼나요?",type:"choice",options:["잘 맞음","대체로","맞지 않음","많이 어긋남"],scores:[4,3,2,1]},
    {q:"계절 변화에 몸이 민감하게 반응하나요?",type:"choice",options:["거의 없음","조금","많이"],scores:[4,2,1]},
    {q:"지금 생활에서 몸을 위해 가장 바꾸고 싶은 것은?",type:"text"},
  ],
  목표:[
    {q:"지금 내 몸 상태를 점수로 매긴다면?",type:"slider",min:1,max:10},
    {q:"6개월 후 어떤 몸 상태이고 싶나요?",type:"text"},
    {q:"건강에서 가장 우선순위는?",type:"choice",options:["에너지·활력","통증 해결","정신 건강","체중·체형","질병 예방"],scores:[4,3,3,3,3]},
    {q:"건강을 위해 지금 당장 할 수 있는 것은?",type:"text"},
    {q:"건강 관리에서 가장 어려운 점은?",type:"choice",options:["의지 부족","시간 없음","정보 부족","혼자라서","돈"],scores:[2,2,3,2,2]},
    {q:"누군가의 도움이 있다면 뭘 부탁하고 싶나요?",type:"text"},
    {q:"몸보다 마음이 더 힘든가요?",type:"choice",options:["둘 다 괜찮음","몸이 더 힘듦","마음이 더 힘듦","둘 다 힘듦"],scores:[4,2,2,1]},
    {q:"건강해지면 가장 먼저 하고 싶은 것은?",type:"text"},
    {q:"지금 내 몸에게 하고 싶은 말은?",type:"text"},
    {q:"이 여정을 시작하는 오늘, 나에게 한마디?",type:"text"},
  ],
};

function getStatus(p) {
  if(p>=75) return {label:"좋음",color:"#4ECDC4",dot:"🟢"};
  if(p>=50) return {label:"보통",color:"#F7C948",dot:"🟡"};
  return {label:"주의",color:"#E8734A",dot:"🔴"};
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

export default function BodyReportKR({onBack=()=>{}}) {
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
    const prompt = `You are a natural science storyteller and poet. View the body as "a flame born from glucose molecules burning in oxygen — a sacred temple of combustion." Write a 내 몸 보고서 with scientific depth and poetic sensibility.\n\nScores (out of 100): ${scoreText}\nOpen-ended answers: ${texts||"none"}\n\nWrite the report in this structure:\n1. Overall Body Landscape (2-3 sentences, poetic)\n2. Where You Shine (highest scoring areas, with scientific basis)\n3. Where Care is Needed (lowest scoring areas, warm and non-judgmental)\n4. Signals Your Body is Sending (based on open-ended answers)\n5. One Step Starting Today (3 specific practices with scientific backing)\n6. A Final Poetic Word (one sentence to your body)\n\nWrite in a warm, scientific, self-discovery tone — not prescriptive.`;
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
      setAiReport(d.content?.map(b=>b.text||"").join("")||"보고서를 생성하지 못했어요.");
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
          내 몸 보고서
        </div>
        <div style={{fontSize:17,color:T.teal,fontWeight:700,marginBottom:4}}>나를 읽는 100개의 질문</div>
        <div style={{fontSize:12,color:T.stone,marginBottom:20}}>숨은책방 breathe&books · 고성</div>
        <Wave/>
      </div>
      <div style={{padding:"0 20px 60px"}}>
        <button style={{...bigBtn(true),fontSize:18,padding:"18px",display:"flex",
          alignItems:"center",justifyContent:"center",gap:10}}
          onClick={()=>setScreen("survey")}>
          ▶ 시작하기
        </button>
        <Wave/>
        <div style={{fontSize:12,color:T.stone,textAlign:"center",margin:"12px 0"}}>이 앱이 하는 일</div>
        {[
          {emoji:"📋",title:"100문항 자가 진단",sub:"수면·호흡·브레인·장건강·운동·통증·영양·심혈관·생활습관·목표",color:T.teal},
          {emoji:"📊",title:"레이더 차트 결과",sub:"10개 영역 점수 · 빛나는 곳 · 돌봄이 필요한 곳",color:T.gold},
          {emoji:"✨",title:"AI 내 몸 보고서",sub:"과학적 언어와 시적 감수성으로 나의 몸 이야기",color:"#C4956A"},
          {emoji:"🔥",title:"맞춤 수련 세션",sub:"知·體·技·記 — 점수 기반 직접 실행",color:"#9B8DB4"},
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
          사주가 태어난 시간을 읽듯,<br/>
          이 질문들은 지금 이 순간의 몸을 읽습니다.<br/>
          <span style={{color:T.teal,fontSize:11}}>솔직하게 답할수록 보고서가 깊어집니다.</span>
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
                placeholder="자유롭게 적어주세요..."
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
                  <span>1 (매우 나쁨)</span><span>10 (매우 좋음)</span>
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
          <div style={{fontSize:11,color:T.stone,marginBottom:6}}>내 몸 지형도</div>
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
            <div style={{fontSize:13,fontWeight:700,color:T.teal,marginBottom:14}}>카테고리별 상태</div>
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
                <div style={{fontSize:14,color:T.teal}}>몸의 언어를 읽는 중...</div>
              </div>
            ):aiReport?(
              <div style={{fontSize:14,lineHeight:2,color:T.white,whiteSpace:"pre-wrap"}}>{aiReport}</div>
            ):(
              <button style={bigBtn(true)} onClick={getAI}>✨ Get My AI 내 몸 보고서</button>
            )}
          </div>
          <Wave/>
          <div style={{fontSize:13,fontWeight:700,color:T.teal,margin:"16px 0 8px"}}>
            🔥 오늘의 추천 수련 세션
          </div>
          <div style={{fontSize:12,color:T.stone,marginBottom:12}}>
            점수가 낮은 영역 순서로 추천됩니다
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
          <button style={bigBtn(false)} onClick={()=>setScreen("home")}>← 홈으로</button>
          <button style={bigBtn(false)} onClick={()=>{setScreen("survey");setCatIdx(0);setQIdx(0);setAnswers({});}}>
            처음부터 다시
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
    const pLabel = {sci:"知",yoga:"體",craft:"技",done:"記"};
    return (
      <div style={base}>
        <div style={{background:T.dk,padding:"16px 20px 0"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <div style={{fontSize:11,color:T.stone,cursor:"pointer"}}
              onClick={()=>setScreen("result")}>← 보고서로</div>
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
                소리 내어 세 번 읽어라. 입술이 먼저 기억한다.
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
                종이와 붓(또는 펜)을 든다.<br/>생각하지 마라.<br/>몸이 이미 알고 있다.
              </p>
              <button style={{...outBtn,background:bc,color:T.navy,borderColor:bc}}
                onClick={finishSess}>One stroke made — Complete</button>
            </div>
          )}

          {learnStep==="done"&&(
            <div style={{textAlign:"center",paddingTop:28}}>
              <div style={{fontSize:"2.5rem",color:bc,marginBottom:10}}>◯</div>
              <div style={{fontSize:"1rem",fontWeight:600,marginBottom:4}}>{s.title}</div>
              <div style={{fontSize:"0.72rem",color:T.stone,lineHeight:2,marginBottom:6}}>知 → 體 → 技</div>
              <div style={{fontSize:"0.68rem",color:T.stone,marginBottom:24}}>
                몸이 기억한다. 내일도 타오른다.
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
