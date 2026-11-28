import { useState, useRef } from "react";

const T = {
  navy:"#1A2744", dk:"#111B33", lt:"#243260",
  teal:"#4ECDC4", gold:"#F7C948", white:"#F8F9FA",
  stone:"#8899AA", ember:"#E8734A",
};

const SESSIONS = {
  sleep: [
    {
      id:"sleep1", cat:"수면", title:"멜라토닌 — 어둠의 호르몬",
      science:"빛이 사라지면 송과선에서 멜라토닌이 나와요. 잠은 의지의 문제가 아니라 분자의 문제예요. 어둠이 깊을수록 멜라토닌은 더 많이 흘러요. 밤을 믿어 보세요.",
      formula:"세로토닌 → 멜라토닌(C₁₃H₁₆N₂O₂) · 송과선 · 빛에 민감",
      visual:"🌑",
      yoga:{name:"다리 벽에 올리기 + 송장 자세(사바아사나)", breath:"4박자 들숨 / 8박자 날숨", duration:90, cue:"눈을 감으세요. 어둠 속에서 멜라토닌이 흐르기 시작해요."},
      craft:"초승달을 그려 보세요. 차오르고 기우는 모양 — 멜라토닌의 리듬이에요.",
    },
    {
      id:"sleep2", cat:"수면", title:"글림프 시스템 — 뇌를 씻는 시간",
      science:"잠든 동안 뇌척수액이 뇌 사이사이를 흐르며 아밀로이드 찌꺼기를 씻어 내요. 잠이 부족하면 알츠하이머 위험이 높아져요. 잠은 뇌를 씻는 시간이에요.",
      formula:"비렘수면 3단계 · 글림프 흐름 · 아밀로이드-β 제거 · 7~9시간",
      visual:"💤",
      yoga:{name:"요가 니드라 — 잠 준비", breath:"완전히 자연스러운 호흡", duration:120, cue:"몸의 각 부분을 하나씩 내려놓으세요. 뇌가 밤의 청소를 시작해요."},
      craft:"뇌 사이를 흐르는 강물을 그려 보세요. 글림프 — 밤의 청소부예요.",
    },
  ],
  breath: [
    {
      id:"breath1", cat:"호흡", title:"횡격막 — 숨의 엔진",
      science:"숨쉬기는 근육이 하는 일이에요. 횡격막이 내려가면 공기가 들어오고, 올라가면 공기가 나가요. 가장 지치지 않는 근육, 가장 성실한 불꽃이에요.",
      formula:"돔 모양 근육 · 수축 → 평평해짐 → 흉강↑ · 이완 → 돔 모양 → 흉강↓",
      visual:"⌒",
      yoga:{name:"횡격막 호흡(복식 호흡)", breath:"들숨 — 배가 부풀어요 / 날숨 — 배가 들어가요", duration:90, cue:"두 손을 배 위에 얹으세요. 횡격막이 내려가면 배가 부풀어요."},
      craft:"오르내리는 돔을 그려 보세요. 횡격막의 춤이에요.",
    },
    {
      id:"breath2", cat:"호흡", title:"느린 호흡 — 0.1Hz의 치유",
      science:"1분에 다섯 번 숨쉬기. 5초 들이쉬고 5초 내쉬어요. 이 리듬에서 심장과 호흡과 혈압이 함께 울려, 온몸이 하나의 물결이 돼요.",
      formula:"분당 5~6회 호흡(0.1Hz) · 심박변이도(HRV) 최대 · 미주신경 활성",
      visual:"≋",
      yoga:{name:"사마 브리티(같은 길이 호흡)", breath:"5초 들숨 / 5초 날숨 · 1분에 6번", duration:120, cue:"심장이 숨을 따라 느려져요. 온몸이 하나의 물결이 돼요."},
      craft:"느리고 커다란 물결 하나를 그려 보세요. 공명 호흡의 리듬이에요.",
    },
  ],
  brain: [
    {
      id:"brain1", cat:"브레인", title:"시냅스 — 신경세포의 대화",
      science:"신경세포는 서로 직접 닿지 않아요. 시냅스 틈으로 신경전달물질을 내보내요. 이 화학적 대화가 생각과 감정과 기억을 만들어요.",
      formula:"활동전위 → 칼슘 이온(Ca²⁺) 유입 → 소포 방출 → 신경전달물질 → 흥분성/억제성 신호(EPSP/IPSP)",
      visual:"—·—",
      yoga:{name:"브라마리(벌 소리 호흡)", breath:"들숨 / 날숨에 '음—' 하고 허밍", duration:60, cue:"머리뼈 안에서 떨림이 울려요. 신경세포들이 대화하고 있어요."},
      craft:"시냅스 앞뒤의 두 신경세포와 그 사이 틈을 그려 보세요. 연결의 언어예요.",
    },
    {
      id:"brain2", cat:"브레인", title:"신경가소성 — 뇌는 변해요",
      science:"배운다는 건 시냅스가 튼튼해진다는 뜻이에요. 되풀이할수록 연결은 굵어져요. 바로 지금 이 수련이 뇌를 실제로 바꾸고 있어요.",
      formula:"장기 강화(LTP) · 헵의 법칙 · 해마 → 대뇌피질로 기억 굳히기",
      visual:"∞",
      yoga:{name:"새로운 자세 하나 해 보기", breath:"들숨 — '신경' / 날숨 — '가소성'", duration:60, cue:"어색하고 낯선 이 느낌 — 지금 새 시냅스가 생기고 있어요."},
      craft:"∞를 한 획으로 그려 보세요. 끝없이 변하는 뇌의 힘이에요.",
    },
  ],
  gut: [
    {
      id:"gut1", cat:"장건강", title:"장내 미생물 — 두 번째 면역계",
      science:"장에는 100조 마리의 미생물이 살아요. 다양할수록 건강해요. 발효 음식과 식이섬유가 이들의 먹이예요. 건강한 장이 건강한 뇌를 만들어요.",
      formula:"미생물 100조 · 짧은사슬지방산(SCFA) · 장-뇌 축",
      visual:"🦠",
      yoga:{name:"아파나아사나(무릎 가슴으로 당기기)", breath:"들숨 / 날숨 — 무릎을 가슴으로 당겨요", duration:60, cue:"배가 눌리며 장이 자극돼요. 꿈틀운동(연동운동)이 살아나요."},
      craft:"장 속을 가득 채운 여러 모양의 미생물을 그려 보세요. 다양함이 곧 건강이에요.",
    },
    {
      id:"gut2", cat:"장건강", title:"세로토닌 — 장에서 태어나요",
      science:"세로토닌의 90%는 뇌가 아니라 장에서 만들어져요. 평온은 몸의 한가운데에서 올라와요. 장 건강이 곧 마음 건강이에요.",
      formula:"트립토판 → 5-HTP → 세로토닌(C₁₀H₁₂N₂O) · 장크롬친화세포",
      visual:"≈",
      yoga:{name:"편한 앉은 자세(수카아사나) + 배 호흡", breath:"들숨 — 배가 부풀어요 / 날숨 — 배가 들어가요", duration:90, cue:"배 깊은 곳을 느껴 보세요. 장이 지금 세로토닌을 만들고 있어요."},
      craft:"물결 같은 곡선을 그려 보세요. 꿈틀운동의 리듬 — 세로토닌의 춤이에요.",
    },
  ],
  movement: [
    {
      id:"move1", cat:"운동", title:"근비대 — 근육이 자라는 법",
      science:"운동은 근섬유에 작은 상처를 내요. 그 상처가 아물면서 근육은 더 굵어져요. 부서짐이 자람의 조건이에요. 몸의 역설이에요.",
      formula:"저항 운동 → 미세 손상 → 위성세포 활성 → 단백질 합성↑",
      visual:"↑M",
      yoga:{name:"전사 자세 2 — 2분 버티기", breath:"들숨 — '부서짐' / 날숨 — '다시 짓기'", duration:90, cue:"허벅지가 타오르지요. 미세 손상이 일어나는 중이에요. 내일 이 자리는 더 강해져요."},
      craft:"금 간 선과 그것을 메우는 더 굵은 선을 그려 보세요. 부서짐과 다시 짓기예요.",
    },
    {
      id:"move2", cat:"운동", title:"존 2 — 미토콘드리아 훈련",
      science:"대화할 수 있을 정도의 강도에서 미토콘드리아가 가장 효율적으로 단련돼요. 일주일에 150분이면 건강수명이 5~7년 늘어나요.",
      formula:"최대 심박수의 60~70% · 젖산 2mmol/L 미만 · 미토콘드리아 밀도↑ · 지방 연소↑",
      visual:"Z2",
      yoga:{name:"태양 경배 — 존 2 속도", breath:"코호흡 유지 · 대화할 수 있는 속도", duration:90, cue:"땀은 나지만 말할 수 있어요. 지방이 타고, 미토콘드리아가 자라고 있어요."},
      craft:"심박수 구간 그래프를 그려 보세요. 존 2 — 지방을 태우기 가장 좋은 구간이에요.",
    },
  ],
  pain: [
    {
      id:"pain1", cat:"통증", title:"근막 — 몸의 거미줄",
      science:"근막은 온몸을 잇는 그물이에요. 어깨가 굳으면 허리가 아프고, 발바닥이 굳으면 목이 당겨요. 모든 것이 이어져 있어요.",
      formula:"콜라겐 · 엘라스틴 · 기질 · 온몸으로 이어진 구조 · 긴장의 전달",
      visual:"~",
      yoga:{name:"바디 스캔 명상", breath:"들숨 — '이어짐' / 날숨 — '풀어짐'", duration:60, cue:"발끝에서 정수리까지 하나로 이어진 그물. 어디가 당기나요? 어디가 굳어 있나요?"},
      craft:"몸의 윤곽을 그리고 그 안에 이어지는 선을 그려 보세요. 근막 지도예요.",
    },
    {
      id:"pain2", cat:"통증", title:"만성 염증 — 통증의 뿌리",
      science:"만성 염증은 조용히 타올라요. 혈관을 다치게 하고 통증을 만들어요. 현대 만성 질환의 공통된 뿌리예요. 운동·잠·식사가 방어의 삼각형이에요.",
      formula:"IL-6·TNF-α·CRP가 오래 높음 · 내장지방 · 수면 부족",
      visual:"🔥",
      yoga:{name:"아기 자세 + 긴 날숨", breath:"4박자 들숨 / 8박자 날숨", duration:90, cue:"긴 날숨이 미주신경을 깨우고 염증을 가라앉혀요."},
      craft:"낮게 타는 작은 불꽃을 그려 보세요. 만성 염증 — 보이지 않고, 끈질겨요.",
    },
  ],
  nutrition: [
    {
      id:"food1", cat:"영양", title:"단백질 — 근육 지키기",
      science:"단백질이 부족하면 근육이 빠져요. 나이가 들수록 더 많이 필요해요. 한 끼에 30~40g을 먹어야 근육 합성의 문턱을 넘어요.",
      formula:"체중 1kg당 1.6~2.2g · 류신 3g 문턱 · 운동 후 30분",
      visual:"🥩",
      yoga:{name:"태양 경배 + 운동 뒤 단백질", breath:"운동 뒤 30분 안에 단백질", duration:60, cue:"운동이 근육 단백질 합성의 문을 열어요. 30분 안에 단백질이 들어가야 해요."},
      craft:"근육 합성의 시간 창을 그려 보세요. 황금 시간 — 운동 뒤 30분이에요.",
    },
    {
      id:"food2", cat:"영양", title:"혈당 — 포도당의 물결",
      science:"혈당이 치솟으면 인슐린도 치솟아요. 이 롤러코스터가 췌장을 지치게 해요. 식이섬유와 식후 움직임이 혈당 급상승을 줄여요.",
      formula:"공복 혈당 100 미만 · 식후 2시간 140 미만 · 당화혈색소(HbA1c) 5.7% 미만",
      visual:"📈",
      yoga:{name:"식후 10분 걷기", breath:"가볍고 편하게 · 근육이 포도당을 흡수해요", duration:60, cue:"식사 뒤 10분 움직이면 혈당 급상승이 30% 줄어요."},
      craft:"혈당 그래프를 그려 보세요. 뾰족한 봉우리와 완만한 곡선 — 식이섬유가 만드는 차이예요.",
    },
  ],
  cardiovascular: [
    {
      id:"heart1", cat:"심혈관", title:"심장 — 멈추지 않는 엔진",
      science:"동방결절이 전기 신호를 만들어요. 심방이 먼저 수축하고, 잠시 뒤 심실이 따라와요. 이 정확한 시차가 피를 효율적으로 밀어내요.",
      formula:"동방결절(분당 60~100회) → 방실결절 → 히스 다발 → 푸르키니에 섬유",
      visual:"♡",
      yoga:{name:"가슴에 손 얹기 — 박동 느끼기", breath:"4박자 들숨 / 4박자 날숨 · 심장 박동에 맞추기", duration:60, cue:"손바닥으로 심장 박동을 느껴 보세요. 동방결절이 만드는 리듬 — 태어난 뒤로 한 번도 멈춘 적이 없어요."},
      craft:"심전도 파형을 그려 보세요. P파 · QRS파 · T파 — 심장의 전기 언어예요.",
    },
    {
      id:"heart2", cat:"심혈관", title:"죽상동맥경화 — 소리 없이 좁아지는 길",
      science:"LDL이 동맥 벽에 쌓여요. 산화되면 대식세포가 삼키고, 거품세포가 쌓여 플라크가 돼요. 수십 년 동안 소리 없이 진행돼요.",
      formula:"LDL 산화 → 거품세포 → 플라크 → 협착 · ApoB · 운동은 HDL을 높여요",
      visual:"⬡",
      yoga:{name:"태양 경배 — 존 2 유산소", breath:"대화할 수 있는 속도 · 20~30분", duration:90, cue:"심박수 130~150. 존 2가 혈관 내피를 지켜요."},
      craft:"건강한 혈관과 플라크가 찬 혈관의 단면을 그려 보세요. 소리 없는 좁아짐이에요.",
    },
  ],
  lifestyle: [
    {
      id:"life1", cat:"생활습관", title:"미주신경 — 떠도는 신경",
      science:"뇌줄기에서 출발해 심장·폐·위·장까지 떠돌듯 뻗어 가요. 부교감신경의 중심축이에요. 날숨을 길게 하면 미주신경이 깨어나 스트레스가 줄어요.",
      formula:"뇌줄기 → 심장·폐·위·장 · 80%가 몸에서 뇌로 가는 신호 · 부교감신경 축",
      visual:"〜",
      yoga:{name:"4-7-8 호흡", breath:"4박자 들숨 / 7박자 멈춤 / 8박자 날숨", duration:90, cue:"8박자 날숨이 미주신경을 깨워요. 심장이 느려지는 걸 느껴 보세요."},
      craft:"뇌에서 장까지 굽이치는 선을 그려 보세요. 떠도는 신경의 길이에요.",
    },
    {
      id:"life2", cat:"생활습관", title:"스트레스와 회복탄력성",
      science:"스트레스가 나쁜 것만은 아니에요. 짧은 스트레스는 수행 능력을 높이고, 오래가는 스트레스가 문제예요. 회복탄력성은 같은 스트레스를 다르게 처리하는 힘이고, 훈련할 수 있어요.",
      formula:"HPA 축: CRH → ACTH → 코르티솔 · 만성화 → 해마 위축 · 면역↓",
      visual:"⇄",
      yoga:{name:"4-7-8 호흡 — 코르티솔 낮추기", breath:"4박자 들숨 / 7박자 멈춤 / 8박자 날숨", duration:90, cue:"긴 날숨이 코르티솔을 낮춰요. 스트레스 반응을 끄는 스위치예요."},
      craft:"스트레스 곡선을 그려 보세요. 짧은 스트레스는 능력을 높이고 만성 스트레스는 무너뜨려요 — 뒤집힌 U자예요.",
    },
  ],
  goals: [
    {
      id:"goal1", cat:"목표", title:"건강수명 — 진짜 목표",
      science:"수명은 늘었어요. 하지만 건강하게 사는 해는 따라가지 못해 아픈 채로 보내는 해가 너무 길어요. 건강수명을 늘리는 것이 진짜 목표예요.",
      formula:"수명 - 질병·장애로 보낸 해 = 건강수명",
      visual:"◯",
      yoga:{name:"산 자세 — 건강하게 서 있기", breath:"들숨 — '건강수명' / 날숨 — '지금부터'", duration:60, cue:"이 자세는 건강수명에 대한 투자예요. 그 틈은 바로 이 순간부터 좁혀져요."},
      craft:"막대그래프 두 개를 그려 보세요. 수명과 건강수명 — 그 사이의 틈이에요.",
    },
    {
      id:"goal2", cat:"목표", title:"생활 습관의 힘",
      science:"유전은 총을 장전하지만, 방아쇠를 당기는 건 생활 습관이에요. 당뇨·심혈관 질환·암의 80%는 생활 습관으로 예방할 수 있어요.",
      formula:"유전 20% + 환경과 생활 습관 80% · 후성유전학",
      visual:"80%",
      yoga:{name:"태양 경배 — 하루의 중심축", breath:"매일 같은 시간, 같은 숨", duration:90, cue:"매일의 되풀이가 유전자 발현을 바꿔요. 요가는 염증을 막는 유전자를 켜요."},
      craft:"유전(20%)과 생활 습관(80%)을 그려 보세요. 방아쇠는 내 손에 있어요.",
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

// ── 기본 분석 보고서 (AI 없이 점수로 바로 계산, 항상 표시) ──
function buildBasicReport(sc) {
  const keys = CAT_KEYS.filter(k=>sc[k]!==undefined);
  if(!keys.length) return "";
  const sorted = [...keys].sort((a,b)=>sc[b]-sc[a]);
  const top = sorted.slice(0,2);
  const bottom = sorted.slice(-2).reverse();
  const overall = Math.round(keys.reduce((s,k)=>s+sc[k],0)/keys.length);
  const name = k=>CATS.find(c=>c.id===k)?.label||k;
  const tag = k=>`${CATS.find(c=>c.id===k)?.emoji||""}${name(k)}(${sc[k]}점)`;
  const good = keys.filter(k=>sc[k]>=75).length;
  const mid = keys.filter(k=>sc[k]>=50&&sc[k]<75).length;
  const low = keys.filter(k=>sc[k]<50).length;
  const scene = overall>=75
    ? "불꽃이 고르고 환하게 타오르고 있어요."
    : overall>=50
    ? "곳곳에 환한 불빛이 있고, 아직 불씨를 기다리는 자리도 있어요."
    : "지금은 불꽃이 낮게 깜빡이고 있어요. 꺼진 게 아니라, 다시 살펴 달라는 신호예요.";
  return [
    "[ 내 몸의 풍경 ]",
    `지금 내 몸의 불꽃은 100점 중 ${overall}점으로 타오르고 있어요.`,
    scene,
    `10개 영역 가운데 좋음 ${good}곳, 보통 ${mid}곳, 주의 ${low}곳이에요.`,
    "",
    "[ 빛나는 곳 ]",
    top.map(tag).join(", "),
    "나를 떠받치는 기둥이에요. 이 불꽃을 믿어도 좋아요.",
    "",
    "[ 돌봄이 필요한 곳 ]",
    bottom.map(tag).join(", "),
    "불꽃이 작은 자리예요. 평가가 아니라, 조금 더 들여다봐 달라는 초대예요.",
    "",
    "[ 오늘 시작하는 한 걸음 ]",
    `① ${name(bottom[0])} — 아래 추천 수련 가운데 하나를 오늘 해 보세요.`,
    `② ${name(bottom[1])} — 하루 5분, 이 영역에 마음을 기울여 보세요.`,
    "③ 30일 뒤 다시 100문항에 답해 보세요. 몸은 내가 건넨 것을 기억해요.",
    "",
    "[ 몸에게 건네는 한마디 ]",
    "포도당이 산소를 만나 불꽃이 되듯,\n내 몸은 지금 이 순간에도 타오르고 있어요.\n느리지만, 멈추지 않고.",
    "",
    "※ 설문 점수로 계산한 생활 습관 점검이며, 의학적 진단이 아니에요.",
  ].join("\n");
}

const AI_ERROR_MSG = {
  rate_limited_ip_hour: "이 네트워크(와이파이)에서 한 시간에 만들 수 있는 AI 보고서를 모두 사용했어요. 잠시 뒤 다시 시도해 주세요.\n그동안 위의 기본 분석 보고서를 함께 읽어 보세요.",
  rate_limited_ip_day: "오늘 이 네트워크(와이파이)에서 만들 수 있는 AI 보고서를 모두 사용했어요. 내일 다시 만나요.\n위의 기본 분석 보고서는 언제든 볼 수 있어요.",
  rate_limited_global: "오늘 숨은책방의 AI 보고서가 모두 소진되었어요. 내일 다시 시도해 주세요.\n위의 기본 분석 보고서는 언제든 볼 수 있어요.",
  default: "지금은 AI 보고서를 만들 수 없어요. 잠시 뒤 다시 시도해 주세요.\n위의 기본 분석 보고서는 언제든 볼 수 있어요.",
};

// 서술형 답변 속 연락처·주민번호 같은 식별 정보는 보내기 전에 가린다
function maskPII(t) {
  return String(t||"")
    .replace(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g,"[*]")
    .replace(/\d{6}\s*-\s*\d{7}/g,"[*]")
    .replace(/\+?\d[\d\s-]{7,}\d/g,"[*]");
}

// AI 보고서 전송 동의 안내 (가림 처리가 완벽하지 않다는 점까지 정확히 알린다)
const AI_CONSENT = {
  main: "AI 맞춤 보고서를 만들려면 설문 응답을 Anthropic(미국)의 AI 서버로 보내야 해요.\n\n• 보내는 것: 10개 영역 점수, 응답한 문항의 질문과 고른 답\n• 보내지 않는 것: 응답하지 않은 문항. 이름·나이·연락처는 묻지도 보내지도 않아요.\n\n설문 응답에는 수면·통증·소화 같은 건강 상태가 담겨 있어요. 보낸 내용은 Anthropic의 개인정보 처리방침에 따라 처리되며, 숨은책방은 응답을 저장하지 않아요.\n\n보내지 않아도 위의 기본 분석 보고서는 그대로 볼 수 있어요. 보낼까요?",
  text: "서술형 답변도 함께 보낼까요?\n\n함께 보내면 더 깊이 있는 보고서가 되지만, 직접 쓴 글에는 나를 알아볼 수 있는 내용이 담길 수 있어요. 전화번호·이메일 형태는 자동으로 가리지만 완벽하지 않아요.\n\n이름·주소·직장·병원명처럼 나를 알아볼 수 있는 내용을 적었다면 '취소'를 눌러 주세요. 취소하면 선택형 응답만 보내요.\n(서술형 답변은 문항당 1,000자까지 보내요.)",
};

const AI_INCOMPLETE = {
  top: "⚠️ 미완성 보고서\n길이 제한 때문에 AI 보고서가 끝까지 작성되지 못했어요. 아래는 중간까지의 내용이에요.\n\n",
  bottom: "\n\n— 보고서가 여기서 끊겼어요 —\n※ 미완성 보고서이며 의학적 진단이 아니에요. 위의 기본 분석 보고서와 함께 참고해 주세요.",
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
          호흡 시작
        </button>
      )}
      {fin&&<p style={{color:"#4ECDC4",letterSpacing:"0.1em"}}>몸이 기억했어요 ◯</p>}
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
  const [aiError, setAiError] = useState("");   // 실패 안내는 보고서와 따로 둔다
  const [aiLoading, setAiLoading] = useState(false);
  const aiBusy = useRef(false);
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
      // SESSIONS 키는 영어(sleep 등), 영역 id는 한국어(수면 등)라 세션의 cat으로 찾는다
      Object.values(SESSIONS).flat().filter(s=>s.cat===k).forEach(s=>recs.push(s));
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
      setAiReport("");
      setAiError("");
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
    if(aiBusy.current) return;                 // 연속 탭으로 인한 중복 요청 방지
    if(!window.confirm(AI_CONSENT.main)) return;
    // 서술형 답변은 직접 쓴 글이라 따로 동의를 받는다 (민감정보 최소 전송)
    const hasText = CAT_KEYS.some(k=>(QS[k]||[]).some((q2,i)=>
      q2.type==="text" && String(answers[`${k}_${i}`]||"").trim()));
    const withText = hasText ? window.confirm(AI_CONSENT.text) : false;
    aiBusy.current = true;
    setAiError("");
    setAiReport("");
    setAiLoading(true);
    // 실제로 응답한 문항만 빠짐없이 담는다. 미응답 문항은 채우지 않고 보내지 않는다
    const items = [];
    CAT_KEYS.forEach(k=>(QS[k]||[]).forEach((q2,i)=>{
      const v = answers[`${k}_${i}`];
      if(v===undefined||v===null) return;
      if(q2.type==="choice") {
        const o = q2.options[v];
        if(o!==undefined) items.push({cat:k, t:"c", q:q2.q, a:String(o)});
      } else if(q2.type==="slider") {
        items.push({cat:k, t:"s", q:q2.q, a:`${v}/${q2.max||10}`});
      } else if(q2.type==="text" && withText) {
        const a = maskPII(String(v).trim()).slice(0,1000);
        if(a) items.push({cat:k, t:"t", q:q2.q, a});
      }
    }));
    try {
      const res = await fetch("/api/report",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({lang:"ko", scores, items, count:items.length, textIncluded:withText}),
      });
      const d = await res.json().catch(()=>({}));
      if(!res.ok) {
        const key = d.error==="rate_limited" ? `rate_limited_${d.scope}` : "default";
        setAiError(AI_ERROR_MSG[key]||AI_ERROR_MSG.default);
      } else if(!d.report) {
        setAiError(AI_ERROR_MSG.default);
      } else if(d.complete===false) {
        // 길이 제한으로 끊긴 보고서는 미완성임을 위아래에 분명히 표시한다
        setAiReport(AI_INCOMPLETE.top + d.report + AI_INCOMPLETE.bottom);
      } else {
        setAiReport(d.report);
      }
    } catch(e) {
      setAiError(AI_ERROR_MSG.default);
    }
    aiBusy.current = false;
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
                <button style={{...bigBtn(false),flex:1,marginBottom:0}} onClick={surveyPrev}>← 이전</button>
              )}
              <button style={{...bigBtn(true),flex:2,marginBottom:0}} onClick={surveyNext}
                disabled={q.type==="choice"&&curAns===undefined}>
                {catIdx===CAT_KEYS.length-1&&qIdx===qs.length-1?"완료 ✓":"다음 →"}
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
            <div style={{fontSize:13,fontWeight:700,color:T.teal,marginBottom:14}}>기본 분석 보고서</div>
            <div style={{fontSize:14,lineHeight:2,color:T.white,whiteSpace:"pre-wrap"}}>{buildBasicReport(scores)}</div>
          </div>
          <div style={card()}>
            {aiLoading?(
              <div style={{textAlign:"center",padding:"32px 0"}}>
                <div style={{fontSize:32,marginBottom:10}}>🌿</div>
                <div style={{fontSize:14,color:T.teal}}>몸의 언어를 읽는 중...</div>
              </div>
            ):aiError?(
              <div role="alert" style={{border:`1px solid ${T.ember}`,background:"rgba(232,115,74,0.08)",borderRadius:10,padding:"16px"}}>
                <div style={{fontSize:14,fontWeight:700,color:T.ember,marginBottom:6}}>⚠️ AI 보고서를 만들지 못했어요</div>
                <div style={{fontSize:12,color:T.stone,marginBottom:10}}>아래 내용은 AI 보고서가 아니에요.</div>
                <div style={{fontSize:13,lineHeight:1.9,color:T.white,whiteSpace:"pre-wrap",marginBottom:14}}>{aiError}</div>
                <button style={{...outBtn,borderColor:T.ember,color:T.ember,marginBottom:0}} onClick={getAI}>↻ 다시 시도</button>
              </div>
            ):aiReport?(
              <div>
                <div style={{fontSize:13,fontWeight:700,color:T.teal,marginBottom:14}}>✨ AI 맞춤 보고서</div>
                <div style={{fontSize:14,lineHeight:2,color:T.white,whiteSpace:"pre-wrap"}}>{aiReport}</div>
              </div>
            ):(
              <button style={bigBtn(true)} onClick={getAI}>✨ AI 맞춤 보고서 받기</button>
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
                <span style={lbl}>知 · 과학</span>
                <div style={{fontSize:"0.86rem",lineHeight:1.9,marginBottom:10,color:T.white}}>{s.science}</div>
                <div style={{fontFamily:"monospace",fontSize:"0.75rem",color:T.stone,lineHeight:1.6}}>{s.formula}</div>
              </div>
              <p style={{fontSize:"0.72rem",color:T.stone,fontStyle:"italic",lineHeight:1.8,marginBottom:14}}>
                소리 내어 세 번 읽어라. 입술이 먼저 기억한다.
              </p>
              <button style={{...outBtn,borderColor:bc,color:bc}}
                onClick={()=>setLearnStep("yoga")}>알았어요 → 움직이기</button>
            </div>
          )}

          {learnStep==="yoga"&&(
            <div>
              <span style={lbl}>體 · 오늘의 수련</span>
              <div style={{fontSize:"1.1rem",fontWeight:600,marginBottom:5}}>{s.yoga.name}</div>
              <div style={{fontSize:"0.8rem",color:bc,lineHeight:1.8,marginBottom:18}}>{s.yoga.breath}</div>
              <Timer duration={s.yoga.duration} cue={s.yoga.cue} onDone={()=>setYd(true)}/>
              {yd&&(
                <button style={{...outBtn,borderColor:bc,color:bc,marginTop:14}}
                  onClick={()=>setLearnStep("craft")}>몸이 기억했어요 → 그리기</button>
              )}
            </div>
          )}

          {learnStep==="craft"&&(
            <div>
              <span style={lbl}>技 · 오늘의 그림 / 서예</span>
              <div style={{...card(bc+"22"),padding:"18px",marginBottom:14}}>
                <div style={{fontSize:"0.95rem",lineHeight:1.9}}>{s.craft}</div>
              </div>
              <p style={{fontSize:"0.72rem",color:T.stone,fontStyle:"italic",lineHeight:1.9,marginBottom:18}}>
                종이와 붓(또는 펜)을 든다.<br/>생각하지 마라.<br/>몸이 이미 알고 있다.
              </p>
              <button style={{...outBtn,background:bc,color:T.navy,borderColor:bc}}
                onClick={finishSess}>한 획을 그었어요 — 완료</button>
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
              <button style={bigBtn(true)} onClick={()=>setScreen("result")}>← 보고서로 돌아가기</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <div style={base}/>;
}
