const SYMPTOM_DATASET = [
  {
    keywords: ["fever", "temperature", "high temp", "chills", "body heat"],
    response:
      "Fever is often caused by a viral or bacterial infection, and the severity depends on how high the temperature is and how long it lasts. Rest, drink plenty of fluids, wear light clothing, and consider acetaminophen or ibuprofen if you normally tolerate them. A mild fever can often be monitored at home, but a temperature above 103 F, fever lasting more than 3 days, confusion, dehydration, or trouble breathing should be assessed by a doctor promptly.",
  },
  {
    keywords: ["headache", "migraine", "head pain", "pressure in head", "temple pain"],
    response:
      "Headaches are commonly related to tension, dehydration, poor sleep, migraine, or illness, and the severity ranges from mild discomfort to disabling pain. Try resting in a dark quiet room, drinking water, limiting screen time, and using your usual over the counter pain relief if safe for you. Seek medical care urgently if the headache is sudden and severe, follows a head injury, comes with weakness or vision changes, or keeps worsening despite treatment.",
  },
  {
    keywords: ["cold", "runny nose", "stuffy nose", "congestion", "sneezing"],
    response:
      "A common cold is usually a mild upper respiratory viral infection, though congestion and fatigue can still be uncomfortable for several days. Rest, stay hydrated, use saline nasal spray, and consider warm fluids or steam to ease congestion. See a doctor if symptoms last more than 10 days, you develop a high fever, facial swelling, severe sinus pain, or your breathing becomes difficult.",
  },
  {
    keywords: ["cough", "dry cough", "wet cough", "phlegm", "persistent cough"],
    response:
      "Cough can happen with viral infections, allergies, asthma, reflux, or irritation, and severity depends on whether it is mild, persistent, or affecting breathing. Warm fluids, honey for adults, humidified air, and rest may help while you monitor whether it is dry or productive. You should see a doctor if the cough lasts over 3 weeks, causes chest pain, brings up blood, or is paired with shortness of breath or high fever.",
  },
  {
    keywords: ["chest pain", "tight chest", "pressure chest", "heart pain", "angina"],
    response:
      "Chest pain can range from muscle strain or reflux to a heart or lung emergency, so the severity should be taken seriously from the start. Stop exertion, sit upright, and avoid trying to push through the pain while you assess whether it spreads to the arm, jaw, or back. Get urgent medical help right away if the pain is heavy, crushing, associated with sweating, nausea, shortness of breath, or a history of heart disease.",
  },
  {
    keywords: ["stomach ache", "abdominal pain", "belly pain", "cramps", "stomach pain"],
    response:
      "Stomach pain may come from indigestion, infection, constipation, food intolerance, or something more serious depending on location and intensity. Start with hydration, bland foods, and rest while avoiding heavy, spicy, or greasy meals until symptoms settle. A doctor should evaluate severe pain, pain on the lower right side, vomiting that will not stop, black stools, or abdominal swelling.",
  },
  {
    keywords: ["fatigue", "tired", "weak", "low energy", "exhausted"],
    response:
      "Fatigue can be related to poor sleep, infection, stress, anemia, thyroid issues, or many other medical conditions, so severity depends on duration and how much it affects daily life. Try regular hydration, consistent sleep, balanced meals, and reducing overexertion for a few days while you track other symptoms. See a doctor if fatigue is severe, lasts more than 2 weeks, comes with weight loss, shortness of breath, chest pain, or fainting.",
  },
  {
    keywords: ["sore throat", "throat pain", "pain swallowing", "scratchy throat", "tonsils"],
    response:
      "A sore throat is often due to a viral infection, irritation, or sometimes strep throat, with severity ranging from mild irritation to painful swallowing. Warm fluids, salt water gargles, rest, and throat lozenges can help while symptoms are monitored. Medical review is important if swallowing becomes hard, fever is high, symptoms last more than a week, or you notice pus on the tonsils or swelling in the neck.",
  },
  {
    keywords: ["nausea", "queasy", "feel like vomiting", "sick to stomach", "vomiting feeling"],
    response:
      "Nausea may be triggered by infection, food issues, medication effects, reflux, migraine, or pregnancy, and severity depends on whether you can still keep fluids down. Sip water or oral rehydration fluids slowly, avoid greasy foods, and stick to bland meals until your stomach settles. See a doctor if vomiting starts, dehydration develops, severe abdominal pain occurs, or nausea lasts more than a couple of days without improvement.",
  },
  {
    keywords: ["back pain", "lower back pain", "upper back pain", "spine pain", "backache"],
    response:
      "Back pain is commonly due to muscle strain, posture, or lifting, though nerve irritation or kidney problems can sometimes be involved. Gentle movement, heat or ice, posture support, and short term pain relief may help if the pain is mild to moderate. Seek medical care if the pain follows trauma, causes leg weakness or numbness, affects bladder control, or is severe and unrelenting.",
  },
  {
    keywords: ["dizziness", "lightheaded", "vertigo", "spinning", "faint"],
    response:
      "Dizziness can result from dehydration, low blood pressure, inner ear problems, low blood sugar, or other conditions, so severity depends on whether it passes quickly or causes imbalance. Sit or lie down right away, hydrate, and avoid driving or standing up suddenly until you feel steady. A doctor should assess dizziness urgently if it comes with chest pain, fainting, severe headache, weakness, or trouble speaking.",
  },
  {
    keywords: ["shortness of breath", "breathless", "can not breathe", "wheezing", "breathing trouble"],
    response:
      "Shortness of breath can be mild from anxiety or infection, but it can also signal asthma, pneumonia, heart strain, or another serious condition. Stop activity, sit upright, and use any prescribed inhaler if you have one while you monitor whether symptoms are improving. Seek urgent care immediately if breathing is labored, lips look blue, chest pain is present, or you cannot speak in full sentences.",
  },
  {
    keywords: ["diarrhea", "loose stool", "watery stool", "stomach bug", "frequent stool"],
    response:
      "Diarrhea is often caused by infection, food intolerance, medication, or stress, and severity mostly depends on hydration and how long it continues. Focus on fluids, oral rehydration, and bland foods while avoiding dairy, alcohol, and very fatty meals for a short time. See a doctor if there is blood in the stool, signs of dehydration, severe abdominal pain, or diarrhea lasts more than 2 to 3 days.",
  },
  {
    keywords: ["constipation", "hard stool", "not pooping", "can not pass stool", "infrequent bowel movement"],
    response:
      "Constipation is often linked to low fiber intake, dehydration, inactivity, medication, or routine changes, and it is usually mild unless pain or bloating becomes significant. Increase water, fiber, and walking if you are able, and consider a gentle over the counter option if it is usually safe for you. Medical advice is needed if constipation is persistent, associated with vomiting, severe pain, blood in the stool, or unexplained weight loss.",
  },
  {
    keywords: ["rash", "itchy skin", "hives", "skin bumps", "red spots"],
    response:
      "A rash may come from allergy, irritation, infection, eczema, or medication reaction, and severity depends on spread, swelling, and other symptoms. Avoid new skin products, keep the area cool, and consider an antihistamine or soothing moisturizer if appropriate for you. See a doctor urgently if the rash comes with facial swelling, trouble breathing, fever, blistering, or rapidly spreading redness.",
  },
  {
    keywords: ["high blood pressure", "bp high", "hypertension", "blood pressure high", "elevated bp"],
    response:
      "High blood pressure may not cause obvious symptoms, but very high readings can become serious if they are associated with headache, chest pain, or vision changes. Recheck your blood pressure after resting quietly, reduce salt intake, and continue any prescribed medications exactly as directed. Seek medical care promptly if readings are repeatedly very high, especially above 180 over 120, or if symptoms like chest pain or neurological changes appear.",
  },
  {
    keywords: ["low blood sugar", "hypoglycemia", "shaky", "sweaty", "sugar dropped"],
    response:
      "Low blood sugar can cause shakiness, sweating, confusion, and weakness, and it can become dangerous if not corrected quickly. Take a fast source of sugar such as juice or glucose tablets if the person is awake, then recheck symptoms after about 15 minutes. Immediate medical help is needed if the person becomes confused, unconscious, has a seizure, or does not improve after quick treatment.",
  },
];

const QA_DATASET = [
  {
    phrases: ["blood pressure", "bp", "hypertension"],
    keywords: ["blood pressure", "normal bp", "hypertension question", "what is normal pressure"],
    response:
      "Normal blood pressure for many adults is generally around 120 over 80, though one reading alone does not always define your overall risk. It is best to measure at rest, track several readings, and review trends rather than reacting to a single number. See a doctor if your readings stay high over time, you are getting numbers above 140 over 90, or you have symptoms like headache, chest pain, or blurred vision.",
  },
  {
    phrases: ["fasting sugar", "fasting glucose", "blood sugar level", "sugar level", "normal sugar"],
    keywords: ["fasting", "sugar", "glucose", "hba1c", "random sugar", "diabetic"],
    response:
      "**Key fact:** Normal fasting blood sugar is 70-99 mg/dL. Pre-diabetes is 100-125 mg/dL. Diabetes is 126 mg/dL or above on two tests.\n\n**Explanation:** After 8 hours of fasting, your blood sugar reflects how well your body manages glucose overnight. Post-meal sugar (2 hours after eating) should be below 140 mg/dL.\n\n**Tip:** Test fasting sugar first thing in the morning before eating or drinking anything except water.\n\n⚠️ Consult a doctor for personal medical advice.",
  },
  {
    phrases: ["diabetes", "diabetic", "high blood sugar"],
    keywords: ["diabetes", "blood sugar", "glucose", "a1c", "sugar question"],
    response:
      "Diabetes questions usually center on blood sugar control, diet, medication timing, and complication prevention, and the seriousness depends on how high or low the glucose levels are. Keeping a record of fasting sugar, post meal sugar, medications, and symptoms can make management much clearer. You should speak with a doctor if sugars are repeatedly very high, low episodes are happening, or you notice thirst, weight loss, blurry vision, or slow healing wounds.",
  },
  {
    phrases: ["what causes fever", "why fever", "cause of fever"],
    keywords: ["what causes fever", "why fever", "cause of fever", "temperature cause"],
    response:
      "Fever is usually the body responding to infection, inflammation, or sometimes medication effects, and the overall severity depends on the underlying cause. Mild fever often improves with hydration, rest, and monitoring, but persistent or very high fever needs more attention. A doctor should evaluate fever if it lasts more than 3 days, rises above 103 F, or appears with confusion, stiff neck, or breathing trouble.",
  },
  {
    phrases: ["antibiotics", "do i need antibiotics", "bacterial infection"],
    keywords: ["antibiotics", "do i need antibiotics", "infection medicine", "bacterial infection"],
    response:
      "Antibiotics only help bacterial infections and do not treat most viral illnesses like common colds or many sore throats, so taking them unnecessarily can cause side effects and resistance. The right treatment depends on symptoms, exam findings, and sometimes testing rather than guessing from one symptom alone. See a doctor if symptoms are severe, prolonged, or clearly worsening so they can decide whether antibiotics or another treatment is appropriate.",
  },
  {
    phrases: ["when to see doctor", "should i see doctor", "urgent care"],
    keywords: ["when to see doctor", "should i see doctor", "doctor visit", "urgent care"],
    response:
      "A good rule is to seek medical care sooner when symptoms are severe, rapidly worsening, unusually persistent, or interfering with eating, breathing, or staying hydrated. Many mild issues can be watched at home for a short time with rest, fluids, and symptom tracking. You should get urgent help for chest pain, trouble breathing, confusion, fainting, stroke symptoms, or any situation that feels unsafe.",
  },
  {
    phrases: ["dehydration", "am i dehydrated", "signs of dehydration"],
    keywords: ["dehydration", "am i dehydrated", "signs of dehydration", "not enough water"],
    response:
      "Dehydration can cause dry mouth, dizziness, dark urine, fatigue, and headache, and it becomes more serious when vomiting, diarrhea, or fever are also present. Small frequent sips of water or oral rehydration solution are usually a good first step if you can keep fluids down. See a doctor if urination becomes very infrequent, dizziness is severe, confusion appears, or fluids cannot be kept down.",
  },
  {
    phrases: ["can't sleep", "sleep better", "insomnia", "sleep quality"],
    keywords: ["sleep", "how much sleep", "sleep hours", "healthy sleep"],
    response:
      "Most adults do best with around 7 to 9 hours of sleep, though quality matters as much as duration when you are assessing how rested you feel. A steady sleep schedule, limiting late caffeine, and reducing screens before bed are practical first steps when sleep is off. Medical advice is helpful if insomnia is persistent, daytime sleepiness is significant, or loud snoring and breathing pauses are present.",
  },
  {
    phrases: ["stress", "stress symptoms", "effects of stress"],
    keywords: ["stress question", "what does stress do", "effects of stress", "stress symptoms"],
    response:
      "Stress can affect sleep, digestion, focus, mood, muscle tension, and even blood pressure, and its severity depends on how long it has been building and how much it is affecting daily life. Exercise, structured breaks, journaling, and calming breathing exercises can lower the physical load stress puts on the body. A doctor or therapist should be involved if stress is leading to panic, burnout, substance use, or inability to function normally.",
  },
  {
    phrases: ["what is anxiety", "anxiety question", "panic question"],
    keywords: ["anxiety question", "what is anxiety", "panic question", "anxious all the time"],
    response:
      "Anxiety is a state of heightened worry or physical alarm that can cause racing thoughts, chest tightness, trembling, stomach upset, or poor sleep, and it can range from manageable to overwhelming. Grounding techniques, slower breathing, and reducing caffeine may help in the short term while you notice patterns and triggers. Professional help is important if anxiety is frequent, leads to panic attacks, or is disrupting work, school, sleep, or relationships.",
  },
  {
    phrases: ["what is depression", "depression question", "low mood"],
    keywords: ["depression question", "what is depression", "low mood", "sad all the time"],
    response:
      "Depression is more than a bad day and can involve low mood, loss of interest, fatigue, guilt, poor sleep, and appetite changes over a sustained period. Support from routine, movement, sunlight, and trusted people can help, but ongoing symptoms often need structured care. Please see a doctor or therapist if symptoms last more than 2 weeks, functioning is dropping, or thoughts of self harm appear.",
  },
  {
    phrases: ["cholesterol", "ldl", "hdl", "lipid"],
    keywords: ["cholesterol", "ldl", "hdl", "triglycerides", "lipid"],
    response:
      "**Key fact:** Total cholesterol should be below 200 mg/dL. LDL (bad) should be below 100 mg/dL, HDL (good) above 60 mg/dL.\n\n**Explanation:** High LDL builds up in arteries and raises heart attack risk. HDL removes cholesterol from blood vessels.\n\n**Tip:** Eat more fibre, reduce saturated fats, and exercise regularly to improve your lipid profile.\n\n⚠️ Consult a doctor for personal medical advice.",
  },
  {
    phrases: ["vitamin d", "vitamin b12", "vitamin deficiency", "low vitamin"],
    keywords: ["vitamin", "deficiency", "b12", "iron deficiency", "anemia"],
    response:
      "**Key fact:** Vitamin D normal range is 30-100 ng/mL. Vitamin B12 normal is 200-900 pg/mL.\n\n**Explanation:** Deficiencies cause fatigue, bone pain (D), nerve issues and anaemia (B12), and poor immunity. Very common in India due to diet and limited sun exposure.\n\n**Tip:** Get tested before supplementing - excess vitamin D can be toxic.\n\n⚠️ Consult a doctor for personal medical advice.",
  },
  {
    phrases: ["diet", "healthy eating", "nutrition"],
    keywords: ["diet", "healthy eating", "what should i eat", "nutrition question"],
    response:
      "A healthy diet usually means balanced meals with vegetables, fruit, protein, fiber, and enough water, while limiting excessive sugar, salt, and ultra processed foods. The severity of dietary issues depends on whether they are contributing to weight change, blood sugar problems, fatigue, or digestive symptoms. A doctor or dietitian is worth seeing if you have major weight changes, chronic digestive issues, diabetes, kidney disease, or trouble meeting your nutritional needs.",
  },
  {
    phrases: ["exercise", "how much exercise", "fitness"],
    keywords: ["exercise", "how much exercise", "workout health", "fitness question"],
    response:
      "Many adults benefit from around 150 minutes of moderate exercise each week plus strength work, but the safest plan depends on age, fitness level, and medical conditions. Starting gradually and choosing something sustainable is usually better than pushing too hard and stopping. Medical clearance is smart if you have heart symptoms, severe shortness of breath, uncontrolled blood pressure, or other chronic disease concerns.",
  },
  {
    phrases: ["cold or flu", "difference cold flu", "flu symptoms"],
    keywords: ["cold or flu", "difference cold flu", "is it flu", "flu symptoms"],
    response:
      "A cold often develops more gradually with congestion and sneezing, while flu can hit harder with fever, body aches, and marked fatigue, though symptoms can overlap. Rest, fluids, temperature control, and monitoring breathing are useful either way in the early phase. See a doctor if fever is high, breathing becomes difficult, dehydration develops, or you are in a high risk group such as older age or chronic illness.",
  },
  {
    phrases: ["heart attack signs", "signs of heart attack", "heart symptoms"],
    keywords: ["heart attack signs", "signs of heart attack", "cardiac emergency", "heart symptoms"],
    response:
      "Heart attack warning signs can include pressure or pain in the chest, pain spreading to the arm or jaw, shortness of breath, sweating, nausea, or sudden weakness. This is always a potentially high severity situation and should not be managed casually at home. Call emergency services right away if these symptoms are present, especially if they are new, intense, or persistent.",
  },
  {
    phrases: ["stroke signs", "signs of stroke", "face drooping", "speech trouble"],
    keywords: ["stroke signs", "signs of stroke", "face drooping", "speech trouble"],
    response:
      "Stroke symptoms often include face drooping, arm weakness, speech difficulty, sudden confusion, vision change, or loss of balance, and the severity is an emergency from the first minute. Immediate treatment can protect brain function, so waiting to see if it passes is risky. Call emergency services immediately if any of these symptoms appear suddenly, even if they improve.",
  },
  {
    phrases: ["pregnancy nausea", "morning sickness", "pregnant and nauseous"],
    keywords: ["pregnancy nausea", "morning sickness", "pregnant and nauseous", "pregnancy question"],
    response:
      "Nausea in pregnancy is often common early on, but the severity matters if vomiting is frequent or fluids are hard to keep down. Small bland meals, ginger, hydration, and avoiding strong triggers may reduce symptoms for some people. Please see a doctor if weight loss, dehydration, severe vomiting, abdominal pain, or bleeding occurs.",
  },
];

const MENTAL_DATASET = [
  {
    keywords: ["anxiety", "panic", "panic attack", "racing thoughts", "overthinking"],
    response:
      "Anxiety can feel physically intense with fast heartbeat, chest tightness, restlessness, and constant worry, and the severity ranges from mild stress to disabling panic. Try grounding with slow breaths, loosening muscle tension, and reducing caffeine or overstimulation while the feeling settles. Please see a doctor or therapist if panic attacks recur, sleep is being affected, or anxiety is making daily activities hard to manage.",
  },
  {
    keywords: ["depression", "hopeless", "empty", "sad all day", "no interest"],
    response:
      "Depression often causes persistent low mood, low energy, loss of interest, and self critical thoughts, and it becomes more serious when it disrupts eating, sleep, work, or relationships. Small structure like getting out of bed, regular meals, daylight, and reaching out to one safe person can be helpful first steps. Please seek professional care if this has lasted more than 2 weeks, functioning is dropping, or you have any thoughts of self harm.",
  },
  {
    keywords: ["stress", "burnout", "overwhelmed", "too much work", "pressure"],
    response:
      "Stress can build into physical tension, irritability, headaches, stomach upset, and trouble focusing, and the severity depends on how long it has been going on and whether recovery time exists. Short breaks, boundaries, hydration, and one-task-at-a-time pacing can reduce the overload in the moment. A doctor or therapist should be involved if burnout is leading to panic, frequent illness, insomnia, or inability to cope day to day.",
  },
  {
    keywords: ["sleep issues", "insomnia", "can not sleep", "waking up", "poor sleep"],
    response:
      "Sleep problems can quickly affect mood, concentration, immunity, and stress tolerance, and the severity rises when they continue for days or weeks. Keep lights low at night, avoid late caffeine, use a consistent bedtime, and get morning daylight if possible. Please see a doctor if insomnia is persistent, daytime functioning is poor, or you may be having sleep apnea, nightmares, or medication related sleep disruption.",
  },
  {
    keywords: ["lonely", "alone", "isolated", "no one to talk to", "disconnected"],
    response:
      "Loneliness can weigh heavily on mood and motivation, and even when the severity seems quiet it can still affect mental and physical health over time. A small step like messaging one trusted person, joining a routine activity, or spending time in a shared space can make isolation feel less absolute. Professional support is worth seeking if isolation is deepening depression, anxiety, or thoughts that life is not worth living.",
  },
  {
    keywords: ["grief", "loss", "someone died", "mourning", "bereavement"],
    response:
      "Grief can bring waves of sadness, numbness, anger, guilt, poor concentration, and disrupted sleep, and the severity can fluctuate from day to day. Gentle routines, rest, talking with supportive people, and allowing emotion without forcing quick recovery can help. Please reach out to a doctor or therapist if grief is becoming unbearable, feels stuck for a long time, or includes thoughts of self harm.",
  },
  {
    keywords: ["angry", "irritable", "rage", "snapping at people", "frustrated"],
    response:
      "Irritability and anger can be signs of stress, burnout, depression, poor sleep, or feeling overwhelmed, and the severity matters when it is affecting safety or relationships. Taking physical space, slowing breathing, and postponing conflict until your body is calmer can reduce the chance of escalation. Professional help is important if anger feels uncontrollable, leads to aggression, or is masking deeper anxiety or depression.",
  },
  {
    keywords: ["can not focus", "brain fog", "poor concentration", "distracted", "mental fog"],
    response:
      "Trouble focusing can happen with stress, anxiety, depression, sleep loss, or physical illness, and the severity depends on whether it is occasional or interfering with school, work, or safety. Simplifying tasks, taking short breaks, hydrating, and improving sleep may help when the issue is mild. A doctor should evaluate persistent brain fog, especially if it is new, severe, or paired with memory changes, headache, or neurological symptoms.",
  },
  {
    keywords: ["self harm", "hurt myself", "cutting", "suicidal", "want to die"],
    response:
      "This sounds high severity because thoughts of self harm or suicide need immediate support and should not be handled alone. Please contact emergency services or a suicide crisis line right now, and move toward a trusted person, family member, or neighbor who can stay with you. If you are in the United States or Canada, call or text 988 now, and if you are elsewhere, contact local emergency services immediately.",
  },
  {
    keywords: ["social anxiety", "fear of people", "fear of talking", "public anxiety", "crowds"],
    response:
      "Social anxiety can cause intense fear of embarrassment, avoidance, shaking, sweating, and overthinking before or after interactions, and the severity increases when it limits normal life. Small gradual exposure, calming breathing, and planning one simple social step at a time may help build confidence. A therapist can be especially helpful if avoidance is growing, panic is happening, or work or school participation is suffering.",
  },
  {
    keywords: ["relationship stress", "fight with partner", "family stress", "argument", "toxic relationship"],
    response:
      "Relationship stress can affect sleep, appetite, concentration, and self esteem, and it becomes more serious when conflict feels constant or unsafe. It may help to pause heated conversations, write down what you need clearly, and talk when both people are calmer. Seek professional support if the stress is ongoing, emotionally overwhelming, or involves controlling behavior, threats, or any form of abuse.",
  },
  {
    keywords: ["work stress", "job anxiety", "office pressure", "exam stress", "performance stress"],
    response:
      "Work or exam stress often shows up as tension, racing thoughts, poor sleep, procrastination, or stomach discomfort, and the severity rises when recovery time disappears. Breaking tasks into smaller steps, setting realistic time blocks, and making room for food, water, and rest can lower the pressure. A doctor or therapist should be involved if stress is causing panic, depression, or an inability to keep functioning.",
  },
  {
    keywords: ["trauma", "flashbacks", "nightmares", "triggered", "ptsd"],
    response:
      "Trauma related symptoms can include flashbacks, nightmares, hypervigilance, emotional numbness, and sudden fear, and they can be very severe even when others cannot see them. Try to ground yourself in the present with touch, breath, and safe surroundings rather than forcing yourself through overwhelming memories. Trauma informed therapy is strongly recommended, and urgent help is needed if you feel unsafe or at risk of harming yourself.",
  },
  {
    keywords: ["health anxiety", "worried about illness", "medical anxiety", "afraid of disease", "symptom worry"],
    response:
      "Health anxiety can make normal body sensations feel alarming and can lead to repeated checking, reassurance seeking, and rising panic, with severity increasing when daily life revolves around fear. Limiting symptom searching, using scheduled check ins, and practicing grounding can reduce the spiral in the short term. Professional help is useful if worry is constant, sleep is affected, or you are unable to function without repeated reassurance.",
  },
  {
    keywords: ["low motivation", "do not want to do anything", "no motivation", "procrastination", "stuck"],
    response:
      "Low motivation can happen with stress, burnout, depression, or lack of recovery, and the severity depends on whether it is temporary or blocking basic tasks. Start with one very small action such as showering, eating, or a 5 minute task rather than waiting to feel fully ready. See a doctor or therapist if motivation stays low for weeks, self care is slipping, or it is tied to hopelessness or depression.",
  },
  {
    keywords: ["guilt", "shame", "feeling worthless", "self blame", "not good enough"],
    response:
      "Strong guilt or shame can distort how you see yourself and may be linked to anxiety, depression, trauma, or perfectionism, with severity increasing when the thoughts feel constant or punishing. Writing down the thought, questioning whether it is fully true, and speaking to yourself in a kinder more factual way can help create distance from it. Professional care is important if these feelings are persistent, deeply painful, or connected to self harm thoughts.",
  },
];

const REPORT_TEST_NAMES = [
  "cbc",
  "complete blood count",
  "hemoglobin",
  "wbc",
  "rbc",
  "platelet",
  "esr",
  "crp",
  "blood sugar",
  "glucose",
  "fasting glucose",
  "hba1c",
  "cholesterol",
  "ldl",
  "hdl",
  "triglycerides",
  "creatinine",
  "urea",
  "bun",
  "alt",
  "ast",
  "bilirubin",
  "tsh",
  "t3",
  "t4",
  "vitamin d",
  "vitamin b12",
  "iron",
  "ferritin",
  "ecg",
  "ekg",
  "x-ray",
  "mri",
  "ct",
  "urine",
  "urinalysis",
  "bp",
  "blood pressure",
];

const REPORT_MEDICAL_TERMS = [
  "infection",
  "inflammation",
  "anemia",
  "hypertension",
  "hypotension",
  "diabetes",
  "prediabetes",
  "thyroid",
  "asthma",
  "pneumonia",
  "gastritis",
  "reflux",
  "migraine",
  "anxiety",
  "depression",
  "fever",
  "cough",
  "fatigue",
  "nausea",
  "dizziness",
];

const FALLBACKS = {
  symptom:
    "I could not confidently match that symptom to one of my local entries. Please describe the main symptom, how long it has been happening, and whether there are warning signs like fever, chest pain, shortness of breath, or dehydration. If the situation feels severe or unsafe, please contact a doctor or urgent care right away.",
  qa:
    "I do not have a strong local match for that health question yet. Try asking with simple keywords like blood pressure, diabetes, fever, antibiotics, sleep, stress, or heart symptoms so I can match more accurately. If your question involves urgent symptoms, it is safest to contact a medical professional directly.",
  mental:
    "I could not confidently match that mental health concern to one of my local support entries. If you can, describe the main feeling such as anxiety, depression, stress, insomnia, burnout, panic, or loneliness. If you might hurt yourself or feel unsafe, contact emergency services or a crisis line immediately.",
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getLatestUserMessage(messages) {
  if (!Array.isArray(messages)) {
    return "";
  }

  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (message?.role === "user" && message?.content) {
      return String(message.content);
    }
  }

  return "";
}

function findBestMatch(input, dataset) {
  const normalizedInput = normalizeText(input);

  if (!normalizedInput || !Array.isArray(dataset) || dataset.length === 0) {
    return null;
  }

  const hasPhraseMatch = (candidate) => {
    const normalizedCandidate = normalizeText(candidate);
    if (!normalizedCandidate) {
      return false;
    }

    const pattern = new RegExp(`\\b${escapeRegExp(normalizedCandidate).replace(/\s+/g, "\\s+")}\\b`, "i");
    return pattern.test(normalizedInput);
  };

  let bestMatch = null;

  dataset.forEach((entry, index) => {
    const phraseMatched = Array.isArray(entry.phrases) && entry.phrases.some(hasPhraseMatch);
    let score = phraseMatched ? 10 : 0;

    (entry.keywords || []).forEach((keyword) => {
      const normalizedKeyword = normalizeText(keyword);
      if (!normalizedKeyword) {
        return;
      }

      const compactKeywordLength = normalizedKeyword.replace(/\s+/g, "").length;
      const exactWordPattern = new RegExp(
        `\\b${escapeRegExp(normalizedKeyword).replace(/\s+/g, "\\s+")}\\b`,
        "i"
      );

      if (compactKeywordLength >= 5 || exactWordPattern.test(normalizedInput)) {
        if (exactWordPattern.test(normalizedInput)) {
          score += 1;
        }
      }
    });

    if (score < 1) {
      return;
    }

    if (!bestMatch) {
      bestMatch = { entry, score, phraseMatched, index };
      return;
    }

    if (score > bestMatch.score) {
      bestMatch = { entry, score, phraseMatched, index };
      return;
    }

    if (score === bestMatch.score && phraseMatched && !bestMatch.phraseMatched) {
      bestMatch = { entry, score, phraseMatched, index };
    }
  });

  return bestMatch ? bestMatch.entry : null;
}

function extractUniqueMatches(text, candidates) {
  const normalized = normalizeText(text);
  const matches = candidates.filter((candidate) => normalized.includes(normalizeText(candidate)));
  return [...new Set(matches.map((item) => item.toUpperCase() === item ? item : item.replace(/\b\w/g, (char) => char.toUpperCase())))];
}

function extractNumbers(text) {
  const matches = String(text || "").match(/\b\d+(?:\.\d+)?(?:\/\d+)?%?\b/g) || [];
  return [...new Set(matches)].slice(0, 12);
}

function buildReportResponse(fileData) {
  if (!fileData) {
    return "Please attach a report file so I can summarize it locally.";
  }

  if (fileData.type === "image") {
    return "Image analysis requires an AI backend, so I cannot safely interpret this image locally. Please share the image with a doctor or upload the text from the report so I can summarize it in a structured way.";
  }

  if (fileData.type !== "text") {
    return "I can only process text-based report files in local mode. Please upload a text report or paste the report content.";
  }

  const reportText = String(fileData.data || "").trim();
  if (!reportText) {
    return "The text report appears to be empty. Please upload a file that contains readable medical report content.";
  }

  const numbers = extractNumbers(reportText);
  const tests = extractUniqueMatches(reportText, REPORT_TEST_NAMES);
  const terms = extractUniqueMatches(reportText, REPORT_MEDICAL_TERMS);
  const mentionParts = [];

  if (tests.length) {
    mentionParts.push(`test names: ${tests.join(", ")}`);
  }

  if (terms.length) {
    mentionParts.push(`medical terms: ${terms.join(", ")}`);
  }

  if (numbers.length) {
    mentionParts.push(`numbers: ${numbers.join(", ")}`);
  }

  const extractedSummary = mentionParts.length
    ? `I found ${mentionParts.join("; ")} in ${fileData.name || "the report"}.`
    : `I reviewed ${fileData.name || "the report"} and did not find many clearly recognizable medical markers, so this is a general structured summary.`;

  const likelyReason =
    terms.length > 0
      ? `The wording suggests the report may relate to ${terms.slice(0, 3).join(", ").toLowerCase()}, but local parsing cannot confirm a diagnosis.`
      : "The report appears to contain medical data points, but the underlying reason depends on clinical context, symptoms, and official reference ranges.";

  const nextStepFocus = tests.length > 0 || numbers.length > 0
    ? `Bring the listed findings${tests.length ? ` including ${tests.slice(0, 4).join(", ")}` : ""}${numbers.length ? ` and values like ${numbers.slice(0, 4).join(", ")}` : ""} to a clinician so they can compare them with reference ranges and your symptoms.`
    : "Share the full report with a clinician so the findings can be interpreted against normal ranges, symptoms, and medical history.";

  return [
    "📋 REPORT SUMMARY",
    `${extractedSummary} This local summary is informational only and does not replace a formal medical interpretation. If the report was ordered for urgent symptoms, clinical review should come first.`,
    "",
    "🔍 KEY FINDINGS",
    `${tests.length ? `Recognized tests include ${tests.join(", ")}.` : "No clear standard test names stood out strongly in the text."} ${terms.length ? `Recognized medical terms include ${terms.join(", ")}.` : "No major diagnostic terms were clearly identified."} ${numbers.length ? `Reported numbers include ${numbers.join(", ")}.` : "No clear numeric values were extracted."}`,
    "",
    "❓ WHY THIS HAPPENED",
    `${likelyReason} Abnormal results can happen due to infection, inflammation, chronic disease, medication effects, dehydration, or timing of the test, so a doctor needs to review the full picture.`,
    "",
    "💊 TREATMENT OPTIONS",
    "Treatment depends on what the report is measuring and whether the values are mildly abnormal or clinically urgent. Options may range from repeat testing and diet changes to medication or specialist referral, but the correct path should be decided by a licensed clinician after reviewing the actual report.",
    "",
    "✅ NEXT STEPS",
    `${nextStepFocus} Seek urgent medical care sooner if this report is paired with chest pain, breathing trouble, confusion, fainting, severe weakness, or rapidly worsening symptoms.`,
  ].join("\n");
}

function selectDataset(mode) {
  switch (mode) {
    case "symptom":
      return SYMPTOM_DATASET;
    case "qa":
      return QA_DATASET;
    case "mental":
      return MENTAL_DATASET;
    default:
      return null;
  }
}

export default async function sendMessage(messages, systemPrompt, fileData, mode) {
  await delay(700);

  if (mode === "report") {
    return buildReportResponse(fileData);
  }

  const dataset = selectDataset(mode);
  if (!dataset) {
    return "Unsupported mode. Please use symptom, qa, mental, or report.";
  }

  const userInput = getLatestUserMessage(messages) || systemPrompt || "";
  const bestEntry = findBestMatch(userInput, dataset);

  if (!bestEntry) {
    return FALLBACKS[mode] || "I could not find a helpful local match for that message.";
  }

  return bestEntry.response;
}
