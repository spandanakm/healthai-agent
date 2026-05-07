const SYMPTOM_DATASET = [
  {
    name: "fever",
    keywords: ["fever", "temperature", "high temp", "chills", "body heat"],
    symptoms:
      "Raised body temperature, chills, sweating, body aches, headache, weakness, loss of appetite, and sometimes cough, sore throat, or stomach upset depending on the cause.",
    duration:
      "Many viral fevers improve in 2 to 4 days and are gone within about a week, but duration depends on the underlying cause.",
    medicine:
      "Paracetamol/acetaminophen is commonly used for fever if safe for you. Ibuprofen may help some adults if tolerated and not contraindicated. Drink water, ORS, soups, coconut water, and rest. A lukewarm sponge wipe may help comfort. Avoid giving aspirin to children or teenagers.",
    causes:
      "Most often viral infections, but also bacterial infections, malaria, dengue, typhoid, urinary infection, inflammatory illness, heat exhaustion, or medication reactions.",
    prevention:
      "Wash hands regularly, drink safe water, eat hygienic food, stay updated on vaccines, avoid close contact with sick people, and protect against mosquito bites where relevant.",
    diet:
      "Eat light foods such as khichdi, dal rice, curd rice if tolerated, soups, fruits, and plenty of fluids. Avoid alcohol, very oily meals, and dehydration.",
    contagious:
      "Fever itself is not contagious, but many causes are. Viral infections often spread by droplets, close contact, or contaminated hands and surfaces.",
    doctor:
      "See a doctor urgently for fever above 103 F, fever lasting more than 3 days, trouble breathing, confusion, stiff neck, dehydration, seizure, severe weakness, or if the person is very young, elderly, pregnant, or immunocompromised.",
    test:
      "Temperature measurement is the first check. Depending on symptoms, doctors may use CBC, malaria test, dengue test, typhoid testing, COVID or flu testing, urine test, chest X-ray, or blood cultures.",
    response:
      "Fever is often caused by a viral or bacterial infection, and the severity depends on how high the temperature is and how long it lasts. Rest, drink plenty of fluids, wear light clothing, and consider acetaminophen or ibuprofen if you normally tolerate them. A mild fever can often be monitored at home, but a temperature above 103 F, fever lasting more than 3 days, confusion, dehydration, or trouble breathing should be assessed by a doctor promptly.",
  },
  {
    name: "headache",
    keywords: ["headache", "migraine", "head pain", "pressure in head", "temple pain"],
    symptoms:
      "Pain or pressure in the head, forehead, temples, or behind the eyes; may come with sensitivity to light or sound, nausea, neck tightness, or throbbing pain.",
    duration:
      "A tension headache may last 30 minutes to several hours. Migraine often lasts 4 to 72 hours. Duration depends on the trigger and type.",
    medicine:
      "Paracetamol/acetaminophen or ibuprofen may help if safe for you. Rest in a dark quiet room, hydrate, limit screens, and try a cold compress. For migraine, regular sleep and early treatment often help.",
    causes:
      "Common causes include tension, poor sleep, dehydration, skipped meals, eye strain, migraine, sinus issues, fever, high blood pressure, and sometimes medication overuse.",
    prevention:
      "Sleep regularly, drink enough water, avoid skipping meals, manage stress, reduce prolonged screen strain, and identify personal migraine triggers if relevant.",
    diet:
      "Drink water and eat regular balanced meals. Some people should avoid alcohol and trigger foods such as excess caffeine, processed meats, very aged cheese, or MSG if these clearly trigger attacks.",
    contagious:
      "No. Headache itself does not spread, though an infection causing headache, such as a cold or flu, may be contagious.",
    doctor:
      "Seek urgent care for a sudden severe 'worst headache,' headache after head injury, weakness, confusion, fainting, fever with stiff neck, vision loss, or persistent worsening pain.",
    test:
      "Most headaches are diagnosed from history and examination. Doctors may check blood pressure, vision, sinus or neurological signs, and may order blood tests, CT scan, or MRI if red flags are present.",
    response:
      "Headaches are commonly related to tension, dehydration, poor sleep, migraine, or illness, and the severity ranges from mild discomfort to disabling pain. Try resting in a dark quiet room, drinking water, limiting screen time, and using your usual over the counter pain relief if safe for you. Seek medical care urgently if the headache is sudden and severe, follows a head injury, comes with weakness or vision changes, or keeps worsening despite treatment.",
  },
  {
    name: "cold",
    keywords: ["cold", "runny nose", "stuffy nose", "congestion", "sneezing"],
    symptoms:
      "Runny or blocked nose, sneezing, sore throat, mild cough, watery eyes, mild body aches, low-grade fever, and tiredness.",
    duration:
      "A common cold usually improves in 5 to 10 days, though cough or congestion can linger for up to 2 weeks.",
    medicine:
      "Paracetamol for fever or body aches, saline nasal drops or spray, steam inhalation carefully, warm fluids, honey for adults and children over 1 year, and rest. A simple antihistamine may help some people. Avoid unnecessary antibiotics.",
    causes:
      "Usually caused by viruses such as rhinovirus, coronavirus strains that cause colds, and other upper respiratory viruses.",
    prevention:
      "Wash hands often, avoid touching the face, cover coughs and sneezes, clean shared surfaces, and avoid close contact with sick people.",
    diet:
      "Warm water, soups, dal, khichdi, fruits, and soft foods can help. Avoid smoking, excess alcohol, and very cold or heavily fried foods if they worsen symptoms.",
    contagious:
      "Yes. It spreads mainly by droplets, contaminated hands, and shared surfaces, especially in the first few days.",
    doctor:
      "See a doctor if symptoms last more than 10 days, fever becomes high, breathing is difficult, ear pain is severe, sinus pain is intense, or symptoms are worsening instead of improving.",
    test:
      "Usually diagnosed clinically. Testing is uncommon unless doctors suspect flu, COVID, sinusitis, pneumonia, or another condition.",
    response:
      "A common cold is usually a mild upper respiratory viral infection, though congestion and fatigue can still be uncomfortable for several days. Rest, stay hydrated, use saline nasal spray, and consider warm fluids or steam to ease congestion. See a doctor if symptoms last more than 10 days, you develop a high fever, facial swelling, severe sinus pain, or your breathing becomes difficult.",
  },
  {
    name: "cough",
    keywords: ["cough", "dry cough", "wet cough", "phlegm", "persistent cough"],
    symptoms:
      "Dry or wet cough, throat irritation, phlegm, chest discomfort, hoarse voice, worse symptoms at night, or cough triggered by cold air, dust, or lying down.",
    duration:
      "A viral cough often improves in 1 to 3 weeks. Post-viral cough can last 3 to 8 weeks. Chronic cough needs medical evaluation.",
    medicine:
      "Warm water, honey for adults and children over 1 year, steam or humidified air, saline gargles, and rest may help. Paracetamol can help if fever is present. If a doctor has prescribed an inhaler for asthma, use it as directed. Avoid routine antibiotics unless prescribed.",
    causes:
      "Viral infection, common cold, allergies, asthma, acid reflux, smoking, pollution, post-nasal drip, bronchitis, or sometimes pneumonia or tuberculosis.",
    prevention:
      "Avoid smoke and dust, wash hands, cover coughs, stay vaccinated where appropriate, manage allergies and reflux, and wear a mask in polluted or infectious settings if needed.",
    diet:
      "Warm fluids, soups, ginger tea, and simple meals may help comfort. Avoid smoking, vaping, excess alcohol, and foods that worsen reflux if that is a trigger.",
    contagious:
      "Sometimes. A cough from viral or bacterial infection can spread by droplets, but allergy, reflux, or asthma-related cough is not contagious.",
    doctor:
      "See a doctor if cough lasts over 3 weeks, causes chest pain, coughing blood, wheezing, weight loss, high fever, breathlessness, or night sweats.",
    test:
      "Doctors may use examination, pulse oximetry, chest X-ray, CBC, sputum tests, COVID or flu tests, TB testing, or lung function tests depending on the pattern.",
    response:
      "Cough can happen with viral infections, allergies, asthma, reflux, or irritation, and severity depends on whether it is mild, persistent, or affecting breathing. Warm fluids, honey for adults, humidified air, and rest may help while you monitor whether it is dry or productive. You should see a doctor if the cough lasts over 3 weeks, causes chest pain, brings up blood, or is paired with shortness of breath or high fever.",
  },
  {
    name: "chest pain",
    keywords: ["chest pain", "tight chest", "pressure chest", "heart pain", "angina"],
    symptoms:
      "Tightness, pressure, burning, stabbing, or squeezing pain in the chest, sometimes spreading to the arm, jaw, shoulder, or back; may come with sweating, nausea, breathlessness, or palpitations.",
    duration:
      "Duration varies widely. Mild muscle strain or acidity may last minutes to hours, but any new or severe chest pain should be treated as urgent until a serious cause is ruled out.",
    medicine:
      "Do not rely on self-treatment for unexplained chest pain. Stop activity and rest. If a doctor has already told you similar pain is due to acidity, an antacid may help. If you have prescribed heart medicine such as nitroglycerin, use it exactly as directed.",
    causes:
      "Possible causes include muscle strain, acid reflux, anxiety, costochondritis, lung infection, asthma, pulmonary embolism, angina, or heart attack.",
    prevention:
      "Do not smoke, control blood pressure, diabetes, and cholesterol, exercise regularly as advised, eat a heart-healthy diet, manage stress, and treat reflux or asthma if present.",
    diet:
      "If reflux triggers pain, eat lighter meals and avoid overeating, excess oil, alcohol, and late-night meals. For suspected cardiac pain, do not delay care to try food remedies.",
    contagious:
      "No. Chest pain itself is not contagious, though an infection such as pneumonia causing chest discomfort may spread.",
    doctor:
      "Seek emergency care right away for crushing pain, pressure lasting more than a few minutes, pain spreading to the arm or jaw, sweating, fainting, severe breathlessness, or known heart disease.",
    test:
      "Doctors may use ECG, troponin blood tests, blood pressure and oxygen checks, chest X-ray, echocardiogram, CT scan, stress testing, or tests for reflux or lung causes depending on the situation.",
    response:
      "Chest pain can range from muscle strain or reflux to a heart or lung emergency, so the severity should be taken seriously from the start. Stop exertion, sit upright, and avoid trying to push through the pain while you assess whether it spreads to the arm, jaw, or back. Get urgent medical help right away if the pain is heavy, crushing, associated with sweating, nausea, shortness of breath, or a history of heart disease.",
  },
  {
    name: "stomach ache",
    keywords: ["stomach ache", "abdominal pain", "belly pain", "cramps", "stomach pain"],
    symptoms:
      "Pain, cramps, bloating, gas, nausea, indigestion, burning, or discomfort anywhere in the abdomen; may be linked with diarrhea, constipation, or vomiting.",
    duration:
      "Simple indigestion may settle within hours, while viral stomach upset may last 1 to 3 days. Persistent, localized, or worsening pain needs assessment.",
    medicine:
      "ORS or fluids, rest, and bland foods are first steps. Some adults may get relief from antacids for acidity or simethicone for gas if appropriate. Avoid painkillers like ibuprofen if they worsen the stomach.",
    causes:
      "Indigestion, gas, acidity, viral stomach infection, food poisoning, constipation, food intolerance, menstrual cramps, gastritis, ulcers, appendicitis, gallbladder disease, or kidney stones.",
    prevention:
      "Eat hygienic food, drink safe water, avoid overeating, limit trigger foods, wash hands, and manage constipation with water, fiber, and activity.",
    diet:
      "Choose bland foods such as banana, rice, toast, curd rice, khichdi, dal water, or soups. Avoid very spicy, oily, greasy, or heavy meals and alcohol until better.",
    contagious:
      "Sometimes. If caused by viral gastroenteritis or foodborne infection it may spread through contaminated food, water, hands, or surfaces. Acidity or gas is not contagious.",
    doctor:
      "See a doctor urgently for severe pain, pain on the lower right side, black stools, vomiting that will not stop, swelling, fever, dehydration, or pain with fainting.",
    test:
      "Doctors may use abdominal examination, stool or urine tests, CBC, liver or pancreatic tests, ultrasound, CT scan, endoscopy, or pregnancy test depending on symptoms.",
    response:
      "Stomach pain may come from indigestion, infection, constipation, food intolerance, or something more serious depending on location and intensity. Start with hydration, bland foods, and rest while avoiding heavy, spicy, or greasy meals until symptoms settle. A doctor should evaluate severe pain, pain on the lower right side, vomiting that will not stop, black stools, or abdominal swelling.",
  },
  {
    name: "fatigue",
    keywords: ["fatigue", "tired", "weak", "low energy", "exhausted"],
    symptoms:
      "Feeling unusually tired, drained, weak, sleepy, low in stamina, or mentally slowed, sometimes with poor concentration, body heaviness, or lack of motivation.",
    duration:
      "Short-term fatigue from stress or viral illness may improve in a few days to 2 weeks. Ongoing fatigue for more than 2 weeks should be reviewed.",
    medicine:
      "There is no single OTC medicine for fatigue. Prioritize sleep, hydration, regular meals, and rest. Treat the cause where possible. Do not start supplements like iron, B12, or thyroid medicine without medical advice.",
    causes:
      "Poor sleep, stress, infection, anemia, thyroid disorders, depression, overwork, dehydration, diabetes, nutrient deficiency, heart or lung disease, and many other conditions.",
    prevention:
      "Get regular sleep, balanced meals, exercise moderately, hydrate, manage stress, and treat chronic medical conditions properly.",
    diet:
      "Eat regular balanced meals with protein, iron-rich foods, fruits, vegetables, and enough water. Avoid excess alcohol, crash diets, and long gaps between meals.",
    contagious:
      "No. Fatigue itself is not contagious, though infections causing fatigue can spread.",
    doctor:
      "See a doctor if fatigue is severe, lasts more than 2 weeks, or comes with chest pain, shortness of breath, weight loss, black stools, fever, swelling, or fainting.",
    test:
      "Doctors may consider CBC, thyroid tests, blood sugar, iron studies, vitamin B12, kidney and liver tests, sleep evaluation, or heart and lung checks depending on associated symptoms.",
    response:
      "Fatigue can be related to poor sleep, infection, stress, anemia, thyroid issues, or many other medical conditions, so severity depends on duration and how much it affects daily life. Try regular hydration, consistent sleep, balanced meals, and reducing overexertion for a few days while you track other symptoms. See a doctor if fatigue is severe, lasts more than 2 weeks, comes with weight loss, shortness of breath, chest pain, or fainting.",
  },
  {
    name: "sore throat",
    keywords: ["sore throat", "throat pain", "pain swallowing", "scratchy throat", "tonsils"],
    symptoms:
      "Throat pain, scratchiness, pain while swallowing, redness, swollen tonsils, hoarse voice, and sometimes fever, cough, or swollen neck glands.",
    duration:
      "Viral sore throat often improves within 3 to 7 days. Bacterial throat infection may last longer without treatment.",
    medicine:
      "Warm salt-water gargles, warm fluids, honey for adults and children over 1 year, throat lozenges, and paracetamol or ibuprofen if safe for you may help. Avoid unnecessary antibiotics unless prescribed.",
    causes:
      "Usually viral infection, but also strep throat, allergy, dry air, smoke exposure, mouth breathing, acid reflux, or voice strain.",
    prevention:
      "Wash hands, avoid sharing utensils, cover coughs, avoid smoking, stay hydrated, and manage allergies or reflux if these trigger symptoms.",
    diet:
      "Soft foods, soups, dal, warm water, tea, or khichdi may be easier to take. Avoid very spicy, very hot, or rough foods if they worsen pain.",
    contagious:
      "Often yes when caused by viral or bacterial infection. It spreads by droplets, saliva, shared utensils, and close contact. Noninfectious causes are not contagious.",
    doctor:
      "See a doctor if swallowing is difficult, breathing is affected, fever is high, symptoms last more than a week, pus is visible on the tonsils, or neck swelling is significant.",
    test:
      "Doctors may diagnose by examination and may use a throat swab, rapid strep test, CBC, or other tests if symptoms are severe or persistent.",
    response:
      "A sore throat is often due to a viral infection, irritation, or sometimes strep throat, with severity ranging from mild irritation to painful swallowing. Warm fluids, salt water gargles, rest, and throat lozenges can help while symptoms are monitored. Medical review is important if swallowing becomes hard, fever is high, symptoms last more than a week, or you notice pus on the tonsils or swelling in the neck.",
  },
  {
    name: "nausea",
    keywords: ["nausea", "queasy", "feel like vomiting", "sick to stomach", "vomiting feeling"],
    symptoms:
      "Queasy feeling, urge to vomit, stomach discomfort, excess saliva, reduced appetite, and sometimes dizziness, bloating, or actual vomiting.",
    duration:
      "Mild nausea from a simple trigger may pass in hours, while infection-related nausea may last 1 to 3 days. Persistent nausea needs review.",
    medicine:
      "Sip water or ORS slowly, rest, and take small bland meals. Ginger tea or plain biscuits may help some people. Avoid self-starting anti-vomiting medicines regularly unless advised by a doctor.",
    causes:
      "Stomach infection, food poisoning, acidity, gastritis, medication side effects, motion sickness, migraine, pregnancy, anxiety, or low blood sugar.",
    prevention:
      "Eat fresh hygienic food, avoid overeating, limit alcohol, take medicines with food if instructed, avoid known triggers, and stay hydrated.",
    diet:
      "Try bland foods such as toast, rice, banana, curd rice, khichdi, or crackers. Avoid oily, greasy, spicy, or very heavy foods until better.",
    contagious:
      "Sometimes. Nausea from viral stomach infection or foodborne illness can be contagious through contaminated hands, food, water, or surfaces. Pregnancy or migraine-related nausea is not contagious.",
    doctor:
      "See a doctor if vomiting starts repeatedly, fluids cannot be kept down, dehydration develops, severe stomach pain occurs, there is blood in vomit, or symptoms last more than a couple of days.",
    test:
      "Doctors may use history and examination, pregnancy test, blood sugar, CBC, liver tests, urine tests, stool tests, ultrasound, or other tests based on the cause suspected.",
    response:
      "Nausea may be triggered by infection, food issues, medication effects, reflux, migraine, or pregnancy, and severity depends on whether you can still keep fluids down. Sip water or oral rehydration fluids slowly, avoid greasy foods, and stick to bland meals until your stomach settles. See a doctor if vomiting starts, dehydration develops, severe abdominal pain occurs, or nausea lasts more than a couple of days without improvement.",
  },
  {
    name: "back pain",
    keywords: ["back pain", "lower back pain", "upper back pain", "spine pain", "backache"],
    symptoms:
      "Pain, stiffness, muscle spasm, aching, or sharp pain in the upper, middle, or lower back, sometimes with pain radiating to the buttock or leg.",
    duration:
      "Simple muscle strain often improves within a few days to 6 weeks. Nerve-related or chronic back pain can last longer and may recur.",
    medicine:
      "Heat or ice, gentle movement, posture support, and paracetamol or ibuprofen may help if safe for you. Avoid prolonged bed rest. A topical pain gel may help some adults.",
    causes:
      "Muscle strain, poor posture, lifting injury, disc problems, sciatica, arthritis, osteoporosis, kidney issues, or less commonly infection or fracture.",
    prevention:
      "Use proper lifting technique, maintain a healthy weight, strengthen core muscles, avoid prolonged sitting, and keep an ergonomic posture.",
    diet:
      "Eat a balanced diet with enough protein, calcium, vitamin D, fruits, and vegetables. Avoid weight gain-promoting habits that put extra strain on the back.",
    contagious:
      "No. Back pain does not spread from person to person.",
    doctor:
      "Seek care if pain follows trauma, causes leg weakness or numbness, affects bladder or bowel control, comes with fever, or is severe and not improving.",
    test:
      "Doctors may diagnose by exam and history. If red flags exist, tests may include X-ray, MRI, CT scan, urine test, or blood tests.",
    response:
      "Back pain is commonly due to muscle strain, posture, or lifting, though nerve irritation or kidney problems can sometimes be involved. Gentle movement, heat or ice, posture support, and short term pain relief may help if the pain is mild to moderate. Seek medical care if the pain follows trauma, causes leg weakness or numbness, affects bladder control, or is severe and unrelenting.",
  },
  {
    name: "dizziness",
    keywords: ["dizziness", "lightheaded", "vertigo", "spinning", "faint"],
    symptoms:
      "Lightheadedness, spinning sensation, imbalance, feeling faint, nausea, unsteadiness, blurred vision, or weakness.",
    duration:
      "It may last seconds in positional dizziness, minutes to hours with dehydration or low sugar, or longer depending on the cause.",
    medicine:
      "Sit or lie down, sip water or ORS, and check blood sugar if relevant. Eat a quick sugar source if low blood sugar is suspected and the person is awake. Do not drive until symptoms settle.",
    causes:
      "Dehydration, low blood pressure, low blood sugar, inner ear problems, anemia, anxiety, medication side effects, heart rhythm issues, or neurological problems.",
    prevention:
      "Stay hydrated, rise slowly from sitting or lying, avoid skipping meals, manage blood sugar, and review medicines if dizziness recurs.",
    diet:
      "Drink water, ORS, or clear fluids and eat regular meals. If low sugar is likely, take a fast sugar source first, then a snack with carbohydrate and protein.",
    contagious:
      "No. Dizziness itself is not contagious, though infections that cause it may be.",
    doctor:
      "Seek urgent care if dizziness comes with chest pain, fainting, severe headache, weakness, facial droop, trouble speaking, or persistent vomiting.",
    test:
      "Doctors may check blood pressure, blood sugar, oxygen level, ear and neurological exam, CBC, ECG, or brain imaging depending on red flags.",
    response:
      "Dizziness can result from dehydration, low blood pressure, inner ear problems, low blood sugar, or other conditions, so severity depends on whether it passes quickly or causes imbalance. Sit or lie down right away, hydrate, and avoid driving or standing up suddenly until you feel steady. A doctor should assess dizziness urgently if it comes with chest pain, fainting, severe headache, weakness, or trouble speaking.",
  },
  {
    name: "shortness of breath",
    keywords: ["shortness of breath", "breathless", "can not breathe", "wheezing", "breathing trouble"],
    symptoms:
      "Breathlessness, fast breathing, chest tightness, wheezing, trouble speaking in full sentences, feeling air hungry, or needing to sit upright to breathe comfortably.",
    duration:
      "It may last minutes in anxiety or asthma flare, days with infection, or persist longer in heart or lung disease. Sudden onset can be an emergency.",
    medicine:
      "Stop activity, sit upright, loosen tight clothing, and use a prescribed inhaler if you have one. Do not delay urgent care trying home remedies if breathing is difficult.",
    causes:
      "Asthma, allergy, pneumonia, anxiety, COPD, heart failure, pulmonary embolism, anemia, or severe infection including COVID or flu.",
    prevention:
      "Avoid smoking, manage asthma or lung disease, stay vaccinated, use masks in dusty or high-risk settings, and treat heart or lung conditions regularly.",
    diet:
      "No special food fixes sudden breathlessness. Stay hydrated and avoid smoking. Small lighter meals may help people whose breathlessness worsens after heavy eating.",
    contagious:
      "The symptom itself is not contagious, but infections causing it, such as flu, COVID, or pneumonia, can spread.",
    doctor:
      "Seek emergency help immediately if breathing is labored, lips look blue, chest pain is present, you cannot speak full sentences, or symptoms came on suddenly.",
    test:
      "Doctors may use oxygen saturation, chest exam, chest X-ray, ECG, blood tests, nebulization response, arterial blood gas, CT scan, or lung function tests.",
    response:
      "Shortness of breath can be mild from anxiety or infection, but it can also signal asthma, pneumonia, heart strain, or another serious condition. Stop activity, sit upright, and use any prescribed inhaler if you have one while you monitor whether symptoms are improving. Seek urgent care immediately if breathing is labored, lips look blue, chest pain is present, or you cannot speak in full sentences.",
  },
  {
    name: "diarrhea",
    keywords: ["diarrhea", "loose stool", "watery stool", "stomach bug", "frequent stool"],
    symptoms:
      "Frequent loose or watery stools, urgency, stomach cramps, bloating, nausea, and sometimes fever or vomiting.",
    duration:
      "Many mild cases improve within 1 to 3 days. Some infections or medication-related diarrhea may last longer and need review.",
    medicine:
      "ORS is the most important support. Drink water, coconut water, soups, and rest. Zinc may be advised for children by a doctor. Avoid antibiotics unless prescribed. Adults sometimes use anti-diarrheal medicines only if a doctor says they are appropriate.",
    causes:
      "Viral infection, food poisoning, contaminated food or water, antibiotics, lactose intolerance, IBS, or other gut infections.",
    prevention:
      "Wash hands, drink safe water, eat freshly cooked food, avoid stale street food when hygiene is doubtful, and use clean toilets and utensils.",
    diet:
      "Take ORS, rice, banana, toast, curd rice if tolerated, khichdi, applesauce, and soups. Avoid oily foods, alcohol, and very spicy foods until recovery.",
    contagious:
      "Often yes when due to infection. It spreads through contaminated food, water, hands, surfaces, and poor sanitation.",
    doctor:
      "See a doctor if there is blood in stool, severe dehydration, high fever, severe abdominal pain, black stool, or diarrhea lasts more than 2 to 3 days.",
    test:
      "Doctors may use stool tests, CBC, electrolytes, dehydration assessment, and sometimes culture or parasite testing if symptoms are severe or prolonged.",
    response:
      "Diarrhea is often caused by infection, food intolerance, medication, or stress, and severity mostly depends on hydration and how long it continues. Focus on fluids, oral rehydration, and bland foods while avoiding dairy, alcohol, and very fatty meals for a short time. See a doctor if there is blood in the stool, signs of dehydration, severe abdominal pain, or diarrhea lasts more than 2 to 3 days.",
  },
  {
    name: "constipation",
    keywords: ["constipation", "hard stool", "not pooping", "can not pass stool", "infrequent bowel movement"],
    symptoms:
      "Hard stools, straining, fewer bowel movements than usual, abdominal bloating, discomfort, and feeling that stool is not fully passed.",
    duration:
      "Short-term constipation may settle in a few days with fluids, fiber, and movement. Persistent constipation over 2 to 3 weeks needs review.",
    medicine:
      "Drink more water, walk, and increase fiber gradually. Some adults may use gentle OTC options like ispaghula/psyllium husk or lactulose if appropriate. Avoid overusing stimulant laxatives without advice.",
    causes:
      "Low fiber diet, dehydration, inactivity, travel, pregnancy, some medicines, hypothyroidism, IBS, piles pain, or bowel blockage in serious cases.",
    prevention:
      "Eat enough fiber, drink water, stay active, respond to the urge to pass stool, and review constipating medicines if symptoms recur.",
    diet:
      "Eat fruits, vegetables, whole grains, oats, soaked raisins, prunes, and plenty of water. Limit ultra-processed foods and very low-fiber diets.",
    contagious:
      "No. Constipation does not spread from person to person.",
    doctor:
      "See a doctor if constipation is persistent, painful, associated with vomiting, severe bloating, blood in the stool, weight loss, or inability to pass gas.",
    test:
      "Doctors may use history, abdominal and rectal exam, thyroid tests, blood tests, stool testing, colon evaluation, or imaging if alarm symptoms are present.",
    response:
      "Constipation is often linked to low fiber intake, dehydration, inactivity, medication, or routine changes, and it is usually mild unless pain or bloating becomes significant. Increase water, fiber, and walking if you are able, and consider a gentle over the counter option if it is usually safe for you. Medical advice is needed if constipation is persistent, associated with vomiting, severe pain, blood in the stool, or unexplained weight loss.",
  },
  {
    name: "rash/hives",
    keywords: ["rash", "itchy skin", "hives", "skin bumps", "red spots"],
    symptoms:
      "Red spots, itchy patches, raised bumps, wheals, burning, dryness, swelling, or rash that may stay localized or spread.",
    duration:
      "Hives can come and go within hours to days. Irritant or allergic rashes may last days to weeks depending on exposure and treatment.",
    medicine:
      "Cool compresses, calamine lotion, fragrance-free moisturizer, and an oral antihistamine may help some people. Avoid scratching and avoid new skin products until the rash settles.",
    causes:
      "Allergy, viral infection, heat, sweat, insect bites, new medicines, food reaction, eczema, fungal infection, or contact with irritants.",
    prevention:
      "Avoid known triggers, use gentle soaps and moisturizers, wear loose breathable clothes, and patch-test or introduce new products carefully.",
    diet:
      "There is no single rash diet, but avoid foods that clearly trigger hives for you. Stay hydrated. If a food allergy is suspected, avoid that food and get medical advice.",
    contagious:
      "Usually no for hives or allergy rash. Some infectious or fungal rashes can spread by contact, shared clothing, or surfaces.",
    doctor:
      "See a doctor urgently if rash comes with facial swelling, trouble breathing, fever, blistering, skin pain, pus, or rapidly spreading redness.",
    test:
      "Doctors usually diagnose from appearance and history. They may use allergy review, skin examination, fungal scraping, blood tests, or skin biopsy in selected cases.",
    response:
      "A rash may come from allergy, irritation, infection, eczema, or medication reaction, and severity depends on spread, swelling, and other symptoms. Avoid new skin products, keep the area cool, and consider an antihistamine or soothing moisturizer if appropriate for you. See a doctor urgently if the rash comes with facial swelling, trouble breathing, fever, blistering, or rapidly spreading redness.",
  },
  {
    name: "high blood pressure",
    keywords: ["high blood pressure", "bp high", "hypertension", "blood pressure high", "elevated bp"],
    symptoms:
      "Often there are no symptoms. Some people may report headache, dizziness, blurred vision, chest discomfort, or nosebleed when readings are very high.",
    duration:
      "High blood pressure is usually a long-term condition and often requires ongoing monitoring rather than a short recovery period.",
    medicine:
      "Continue prescribed blood pressure medicines exactly as directed. There is no safe OTC quick fix. Rest quietly for 5 to 10 minutes before repeating a high reading.",
    causes:
      "Family history, high salt intake, obesity, stress, kidney disease, diabetes, sleep apnea, alcohol, smoking, and inactivity are common causes or contributors.",
    prevention:
      "Reduce salt, maintain healthy weight, exercise regularly, avoid smoking, limit alcohol, manage stress, and check blood pressure periodically.",
    diet:
      "Eat fruits, vegetables, dal, whole grains, nuts, and lower-salt meals. Limit packaged salty snacks, pickles, processed foods, excess alcohol, and trans fats.",
    contagious:
      "No. High blood pressure does not spread from person to person.",
    doctor:
      "See a doctor if readings stay above 140/90 repeatedly. Seek urgent care for readings around or above 180/120, especially with chest pain, severe headache, weakness, or vision change.",
    test:
      "Diagnosis uses repeated blood pressure readings. Doctors may also order kidney tests, urine test, ECG, blood sugar, cholesterol, and eye or heart evaluation.",
    response:
      "High blood pressure may not cause obvious symptoms, but very high readings can become serious if they are associated with headache, chest pain, or vision changes. Recheck your blood pressure after resting quietly, reduce salt intake, and continue any prescribed medications exactly as directed. Seek medical care promptly if readings are repeatedly very high, especially above 180 over 120, or if symptoms like chest pain or neurological changes appear.",
  },
  {
    name: "low blood sugar",
    keywords: ["low blood sugar", "hypoglycemia", "shaky", "sweaty", "sugar dropped"],
    symptoms:
      "Shaking, sweating, hunger, dizziness, fast heartbeat, weakness, confusion, blurred vision, irritability, or in severe cases seizure or unconsciousness.",
    duration:
      "Symptoms often improve within 10 to 15 minutes after taking fast sugar, but the episode can recur if the underlying cause is not corrected.",
    medicine:
      "If awake, take 15 to 20 grams of fast sugar such as glucose tablets, fruit juice, regular soft drink, sugar water, or glucose powder. Recheck after 15 minutes, then eat a snack or meal. If unconscious, emergency care is needed immediately.",
    causes:
      "Diabetes medicines, too much insulin, missed meals, heavy exercise, alcohol, severe infection, liver disease, or rarely hormone problems.",
    prevention:
      "Do not skip meals, take diabetes medicines correctly, monitor sugar when at risk, carry glucose, and plan snacks around exercise if advised.",
    diet:
      "For an episode, use fast sugar first, then take a longer-acting snack like biscuits with milk, fruit with nuts, or roti with dal. Avoid long gaps between meals if you are prone to lows.",
    contagious:
      "No. Low blood sugar is not contagious.",
    doctor:
      "Get urgent help if the person is confused, has a seizure, faints, is unconscious, or does not improve after quick sugar treatment.",
    test:
      "Doctors use blood glucose testing first. They may review HbA1c, medicine timing, meal pattern, kidney and liver function, and sometimes continuous glucose monitoring.",
    response:
      "Low blood sugar can cause shakiness, sweating, confusion, and weakness, and it can become dangerous if not corrected quickly. Take a fast source of sugar such as juice or glucose tablets if the person is awake, then recheck symptoms after about 15 minutes. Immediate medical help is needed if the person becomes confused, unconscious, has a seizure, or does not improve after quick treatment.",
  },
  {
    name: "dengue",
    keywords: ["dengue", "dengue fever", "platelet count low", "dengue rash", "bone pain fever", "breakbone fever", "aedes mosquito"],
    symptoms:
      "High fever, severe body ache, joint and muscle pain, headache, pain behind the eyes, rash, nausea, vomiting, weakness, and sometimes low platelet count or mild bleeding such as gum bleed or nosebleed.",
    duration:
      "Fever usually lasts 2 to 7 days, but weakness can continue for 1 to 2 weeks. The critical phase often happens around days 3 to 7 when fever starts settling.",
    medicine:
      "Use paracetamol for fever if safe for you, drink plenty of water, ORS, coconut water, soups, and rest well. Avoid ibuprofen, diclofenac, naproxen, and aspirin because they can increase bleeding risk. Papaya leaf juice is sometimes used in India and may help some people, but evidence is limited and it should not replace medical care.",
    causes:
      "Dengue is caused by the dengue virus and spreads through the bite of an infected Aedes mosquito, especially Aedes aegypti.",
    prevention:
      "Prevent mosquito bites with full sleeves, nets, repellents, window screens, and by removing standing water from coolers, pots, tyres, and containers around the home.",
    diet:
      "Take plenty of fluids, ORS, coconut water, lemon water, dal water, khichdi, fruits like pomegranate and papaya, and soft home foods. Avoid alcohol, dehydration, and very oily heavy meals.",
    contagious:
      "No, dengue does not usually spread directly from person to person. It spreads through infected mosquitoes.",
    doctor:
      "See a doctor urgently for severe stomach pain, repeated vomiting, bleeding, black stools, extreme weakness, reduced urine, drowsiness, breathlessness, or if fever with suspected dengue is present in a child, elderly person, pregnant woman, or someone with other illnesses.",
    test:
      "Doctors often use CBC to monitor platelets and hematocrit. NS1 antigen test is most useful in the first 5 days of illness, while IgM antibody testing is more useful later.",
    response:
      "Dengue is a mosquito-borne viral fever that can become serious if dehydration, bleeding, or the critical phase develops after the fever starts dropping. Rest, drink ORS and other fluids, and use paracetamol if safe, but avoid ibuprofen and aspirin because they can worsen bleeding risk. Medical review is important if there is persistent vomiting, bleeding, severe abdominal pain, reduced urine, or unusual drowsiness.",
  },
  {
    name: "typhoid",
    keywords: ["typhoid", "enteric fever", "salmonella", "continuous fever", "rose spots", "stomach fever"],
    symptoms:
      "Sustained fever, weakness, headache, stomach pain, poor appetite, constipation or diarrhea, nausea, coated tongue, and sometimes faint rose-colored spots on the chest or abdomen.",
    duration:
      "Without proper treatment typhoid can last weeks. With correct antibiotics and hydration, fever often begins improving within 3 to 5 days, though full recovery may take 1 to 2 weeks or longer.",
    medicine:
      "Typhoid needs medical evaluation and antibiotics should be taken only on prescription because resistance is common. Paracetamol may help fever if safe for you, along with ORS, fluids, and rest. Do not stop prescribed antibiotics early even if you start feeling better.",
    causes:
      "Typhoid is caused by Salmonella Typhi infection, usually from contaminated water, unsafe food, poor hand hygiene, or food handled by an infected person.",
    prevention:
      "Drink safe water, eat freshly cooked hygienic food, wash hands well, avoid raw street food in unsafe settings, and consider typhoid vaccination if advised.",
    diet:
      "Take a soft, easy-to-digest diet such as khichdi, curd rice if tolerated, dal, boiled vegetables, banana, toast, soups, and plenty of fluids. Avoid spicy, oily, fried, and very fibrous heavy foods during recovery.",
    contagious:
      "Yes. Typhoid can spread through contaminated food, water, and poor hand hygiene, especially when infected stool contaminates the environment.",
    doctor:
      "See a doctor promptly for prolonged fever, severe weakness, confusion, dehydration, tummy swelling, repeated vomiting, blood in stool, or if a child or elderly person is affected.",
    test:
      "Doctors may use blood culture, stool or urine culture, CBC, and sometimes Widal test. Widal is used in many places in India, but it is less specific than culture and must be interpreted carefully.",
    response:
      "Typhoid is a bacterial infection that usually causes prolonged fever and stomach symptoms, and it should not be treated casually because complications and antibiotic resistance are possible. Hydration, rest, and a soft diet help, but antibiotics should be taken only after medical evaluation and prescription. See a doctor if the fever is continuous, weakness is marked, or there is vomiting, dehydration, or abdominal swelling.",
  },
  {
    name: "malaria",
    keywords: ["malaria", "chills and fever", "plasmodium", "mosquito fever", "intermittent fever", "shivering fever"],
    symptoms:
      "Fever with chills, shivering, sweating, headache, body ache, weakness, nausea, vomiting, and sometimes a cyclical pattern where fever comes in waves.",
    duration:
      "Symptoms can start 1 to 4 weeks after a mosquito bite and may continue or recur until proper treatment is given. Recovery time depends on the malaria type and severity.",
    medicine:
      "Paracetamol and fluids may help symptoms while you seek testing, but do not self-medicate with antimalarial tablets because the correct drug depends on the species and severity. Severe malaria needs urgent hospital care.",
    causes:
      "Malaria is caused by Plasmodium parasites transmitted through the bite of an infected Anopheles mosquito.",
    prevention:
      "Use mosquito nets, repellents, full sleeves, screened rooms, and remove mosquito breeding areas. Prompt testing and treatment also reduce spread in endemic areas.",
    diet:
      "Take plenty of fluids, ORS, coconut water, soups, fruits, and light meals such as khichdi, dal rice, toast, and curd rice if tolerated. Avoid dehydration and excess alcohol.",
    contagious:
      "Malaria does not usually spread directly from person to person. It spreads mainly through infected mosquitoes, and rarely through blood transfusion or from mother to baby.",
    doctor:
      "See a doctor urgently for high fever with chills in a malaria-prone area, confusion, jaundice, repeated vomiting, breathing trouble, seizures, low urine output, or extreme weakness.",
    test:
      "Doctors usually confirm malaria with a blood smear or rapid malaria antigen test. CBC may also show low platelets or anemia.",
    response:
      "Malaria often causes fever with chills, shivering, and sweating, and the fever may come in cycles depending on the parasite. Get tested quickly because treatment depends on the exact species, and self-starting antimalarial medicines can be unsafe or ineffective. Urgent medical care is needed if there is confusion, jaundice, repeated vomiting, breathing trouble, or severe weakness.",
  },
  {
    name: "tuberculosis",
    keywords: ["tb", "tuberculosis", "persistent cough", "coughing blood", "night sweats cough", "weight loss cough", "Koch's disease"],
    symptoms:
      "Cough lasting more than 2 to 3 weeks, sputum production, fever, night sweats, weight loss, loss of appetite, chest pain, tiredness, and sometimes coughing blood.",
    duration:
      "Tuberculosis develops gradually over weeks to months. Standard treatment usually lasts 6 to 9 months depending on the type of TB and drug resistance pattern.",
    medicine:
      "TB requires a full prescribed combination treatment and should not be self-treated. In India, diagnosis and treatment are available free at many government centers under the national TB program, often using DOTS support to improve adherence.",
    causes:
      "TB is caused by Mycobacterium tuberculosis and spreads mainly through the air when a person with active lung TB coughs, speaks, or sneezes.",
    prevention:
      "Early diagnosis and treatment, good ventilation, cough etiquette, masks in high-risk settings, nutrition support, and screening of close contacts help prevent spread.",
    diet:
      "Take a nutritious high-protein diet with dal, eggs if you eat them, milk, curd, paneer, soy, nuts, fruits, vegetables, and adequate calories. Avoid smoking, tobacco, and excess alcohol.",
    contagious:
      "Yes, active pulmonary TB can spread through airborne droplets, especially in enclosed spaces. TB affecting other body parts may be less likely to spread.",
    doctor:
      "See a doctor promptly for a cough lasting more than 2 weeks, coughing blood, night sweats, weight loss, chest pain, or fever that keeps returning.",
    test:
      "Doctors may use sputum testing, chest X-ray, and GeneXpert/CBNAAT to detect TB and rifampicin resistance. Additional culture tests may be needed in some cases.",
    response:
      "Tuberculosis is a serious but treatable infection that commonly causes prolonged cough, weight loss, and night sweats rather than a short-lived cold. It needs proper testing and a full treatment course, usually for 6 to 9 months, and free care is available at many government TB centers in India. Medical evaluation should not be delayed if the cough has lasted more than 2 weeks, especially with blood in sputum or weight loss.",
  },
  {
    name: "diabetes type 2",
    keywords: ["diabetes", "sugar", "blood sugar high", "type 2 diabetes", "diabetic", "sugar level", "glucose", "insulin", "madhumeh"],
    symptoms:
      "Increased thirst, frequent urination, increased hunger, tiredness, blurred vision, slow wound healing, recurrent infections, tingling in feet, or sometimes no obvious symptoms early on.",
    duration:
      "Type 2 diabetes is usually a long-term condition that needs lifelong monitoring, though sugar control can improve significantly with treatment and lifestyle changes.",
    medicine:
      "Treatment may include lifestyle changes and medicines such as metformin, which is commonly a first-line medicine, but the exact plan should be decided by a doctor. Do not start or stop diabetes medicine on your own. Monitor sugars regularly if advised.",
    causes:
      "Insulin resistance, family history, excess body weight, abdominal obesity, low physical activity, unhealthy diet, age, and conditions such as PCOS can all contribute.",
    prevention:
      "Maintain a healthy weight, walk or exercise regularly, reduce sugary drinks and refined carbs, sleep well, and check sugars early if there is family history or obesity.",
    diet:
      "Choose a low glycemic index pattern with roti made from whole grains, dal, vegetables, salad, sprouts, paneer, curd, nuts, and controlled fruit portions. Reduce sweets, sugary tea, juice, sweet drinks, bakery items, and oversized rice portions.",
    contagious:
      "No. Type 2 diabetes is not contagious.",
    doctor:
      "See a doctor if fasting sugar is repeatedly high, there is unexplained weight loss, frequent urination, blurred vision, foot problems, vomiting, severe weakness, or symptoms of very high or very low sugar.",
    test:
      "Doctors commonly use fasting blood sugar, post-meal blood sugar, HbA1c, and sometimes oral glucose tolerance testing. A fasting sugar above 126 mg/dL on repeat testing supports diabetes diagnosis.",
    response:
      "Type 2 diabetes means blood sugar stays high because the body is not using insulin well enough, and it can quietly damage the eyes, kidneys, nerves, and heart over time. The condition is manageable with regular monitoring, diet changes, exercise, and medicines such as metformin when prescribed. A doctor should review persistently high sugars, frequent urination, unusual thirst, foot problems, or any symptoms of sugar emergencies.",
  },
  {
    name: "thyroid",
    keywords: ["thyroid", "hypothyroid", "hyperthyroid", "tsh", "thyroid problem", "weight gain thyroid", "thyroxine"],
    symptoms:
      "Hypothyroidism often causes tiredness, weight gain, constipation, dry skin, feeling cold, hair fall, and slow thinking, while hyperthyroidism can cause weight loss, palpitations, anxiety, tremor, sweating, and heat intolerance.",
    duration:
      "Thyroid disorders are usually long-term conditions that need follow-up over months to years. Symptoms may improve over weeks after correct treatment starts.",
    medicine:
      "Treatment depends on whether the problem is hypothyroid or hyperthyroid. Levothyroxine is commonly used for hypothyroidism and is usually taken on an empty stomach in the morning, while hyperthyroidism may need other prescription medicines and specialist review.",
    causes:
      "Autoimmune disease, iodine imbalance, thyroiditis, thyroid nodules, certain medicines, pregnancy-related changes, or prior thyroid surgery can cause thyroid disorders.",
    prevention:
      "There is no guaranteed prevention for many thyroid disorders, but regular follow-up, using iodized salt in normal amounts, and taking medicines correctly help control the condition.",
    diet:
      "Eat a balanced diet with normal iodized salt use, protein, fruits, vegetables, and whole grains. Avoid unnecessary thyroid supplements. If taking levothyroxine, avoid taking it together with iron, calcium, or large amounts of soy because absorption may reduce.",
    contagious:
      "No. Thyroid disease is not contagious.",
    doctor:
      "See a doctor if there is unexplained weight change, persistent fatigue, palpitations, neck swelling, menstrual changes, severe anxiety, or if thyroid medicine doses seem to stop working.",
    test:
      "TSH is the primary screening test, often along with free T4 and sometimes free T3, anti-TPO antibodies, or thyroid ultrasound depending on the situation.",
    response:
      "Thyroid problems can either slow the body down, as in hypothyroidism, or speed it up, as in hyperthyroidism, so the symptom pattern matters a lot. The main test is TSH, and treatment differs completely depending on the result, so self-treatment is not a good idea. Medical review is important if there is weight change, tiredness, palpitations, tremor, or swelling in the neck.",
  },
  {
    name: "anemia",
    keywords: ["anemia", "anaemia", "low hemoglobin", "haemoglobin low", "iron deficiency", "pale skin tired", "hb low"],
    symptoms:
      "Tiredness, weakness, pale skin, dizziness, shortness of breath on exertion, headache, palpitations, poor concentration, hair fall, and sometimes brittle nails or cravings for non-food items in iron deficiency.",
    duration:
      "Recovery depends on the cause. Mild anemia may improve over weeks with treatment, while iron stores often take 2 to 3 months or longer to rebuild fully.",
    medicine:
      "Treatment depends on the cause, but iron deficiency anemia is often treated with iron tablets or syrup prescribed by a doctor. Iron is usually better absorbed with vitamin C such as lemon water or orange, and tea or coffee should be avoided close to meals or iron doses because they reduce absorption.",
    causes:
      "Iron deficiency, low vitamin B12 or folate, blood loss from heavy periods or piles, worm infestation, chronic kidney disease, infection, inflammation, or inherited blood disorders can all cause anemia.",
    prevention:
      "Eat iron-rich foods, treat worm infestation where relevant, manage heavy menstrual bleeding, take pregnancy supplements as advised, and check persistent fatigue rather than ignoring it.",
    diet:
      "Include spinach, methi, dates, jaggery in moderation, black chana, rajma, masoor dal, garden cress seeds, lean meats if you eat them, and combine iron foods with vitamin C sources like amla, guava, lemon, or orange.",
    contagious:
      "No. Anemia itself is not contagious.",
    doctor:
      "See a doctor if there is marked weakness, breathlessness, very low hemoglobin, black stools, heavy bleeding, chest pain, pregnancy, or if symptoms keep returning.",
    test:
      "Doctors usually use CBC with hemoglobin, red cell indices, peripheral smear, iron studies including ferritin, vitamin B12, folate, and tests to look for blood loss or other causes.",
    response:
      "Anemia means the blood has too little hemoglobin or too few healthy red cells, so the body carries less oxygen and you may feel weak or breathless. Iron deficiency is a common cause, but the reason should be confirmed before treatment because bleeding, vitamin deficiency, and chronic illness can also be responsible. Medical review is important if tiredness is significant, hemoglobin is low, or there is heavy bleeding, black stools, or shortness of breath.",
  },
  {
    name: "covid/viral fever",
    keywords: ["covid", "covid-19", "coronavirus", "viral fever", "flu", "influenza", "body ache fever", "corona symptoms"],
    symptoms:
      "Fever, body ache, sore throat, cough, runny nose, weakness, headache, chills, and sometimes loss of taste or smell, breathing difficulty, or loose motions depending on the virus.",
    duration:
      "Many viral fevers improve in 3 to 7 days, though cough and weakness can last longer. COVID and influenza may cause complications earlier in high-risk people.",
    medicine:
      "Paracetamol, fluids, ORS, rest, saline gargles, and steam inhalation may help comfort. Antibiotics do not treat viral infections and should not be used unless a doctor suspects a bacterial infection too. Continue prescribed inhalers or other chronic medicines unless told otherwise.",
    causes:
      "These illnesses are caused by viruses such as influenza viruses, SARS-CoV-2, and many other respiratory viruses spread by droplets, close contact, and contaminated hands or surfaces.",
    prevention:
      "Wash hands, cover coughs, avoid close contact when sick, wear a mask in crowded or high-risk settings, keep rooms ventilated, and stay updated on recommended vaccines.",
    diet:
      "Take warm water, soups, dal, khichdi, fruits, coconut water, ORS, and soft foods. Avoid dehydration, excess alcohol, and very oily heavy foods when fever is active.",
    contagious:
      "Yes. COVID, flu, and many viral fevers spread to others, especially during the first few days of symptoms.",
    doctor:
      "Get urgent medical help for breathing difficulty, chest pain, confusion, bluish lips, dehydration, or oxygen saturation below 94 percent on pulse oximeter. High-risk people such as elderly adults, pregnant women, and those with lung or heart disease should seek early review.",
    test:
      "Depending on symptoms and availability, doctors may use COVID rapid antigen or RT-PCR, influenza testing, CBC, chest X-ray, or oxygen saturation monitoring.",
    response:
      "COVID, flu, and other viral fevers commonly cause body ache, sore throat, cough, and fever, and most mild cases improve with rest, fluids, and symptom control. Antibiotics do not help viral infections, so home care usually focuses on hydration, paracetamol, and monitoring breathing and oxygen levels. Urgent care is needed if breathlessness develops, SpO2 falls below 94 percent, or the person is high risk and worsening.",
  },
  {
    name: "uti",
    keywords: ["uti", "urinary infection", "burning urination", "burning while peeing", "frequent urination", "urine infection", "bladder infection"],
    symptoms:
      "Burning while passing urine, frequent urge to urinate, lower abdominal discomfort, passing small amounts often, foul-smelling urine, cloudy urine, and sometimes fever or back pain.",
    duration:
      "Mild lower urinary infection may improve in a few days with proper treatment, but untreated infection can worsen or spread to the kidneys quickly.",
    medicine:
      "Drink more water and seek medical advice because many UTIs need prescription antibiotics. Do not self-use leftover antibiotics. Paracetamol may help fever or pain if safe for you. Some doctors may prescribe urinary alkalinizers for symptom relief.",
    causes:
      "UTIs are usually caused by bacteria entering the urinary tract, and E. coli is the most common cause. Poor hydration, holding urine, kidney stones, pregnancy, diabetes, and sexual activity can increase risk.",
    prevention:
      "Drink 8 to 10 glasses of water daily unless a doctor restricts fluids, do not hold urine for long, maintain genital hygiene, urinate after sex, and control diabetes well.",
    diet:
      "Drink plenty of water, coconut water, lemon water, and simple home meals. Avoid dehydration and reduce excessive caffeine, cola, and alcohol if they worsen irritation.",
    contagious:
      "No, a typical UTI is not contagious in the usual day-to-day sense, though some sexual activity can contribute to bacterial transfer.",
    doctor:
      "See a doctor promptly for fever, back pain, vomiting, pregnancy, diabetes, recurrent UTIs, blood in urine, or if symptoms do not improve within a day or two.",
    test:
      "Doctors commonly use urine routine and microscopy, urine culture, and sometimes ultrasound if infections recur or stones are suspected.",
    response:
      "A urinary tract infection often causes burning urination and repeated urge to pass urine, and it can become more serious if the kidneys get involved. Drink more water, avoid holding urine, and get checked because treatment usually needs the right prescription antibiotic rather than guesswork. Medical review is urgent if there is fever, back pain, vomiting, pregnancy, or blood in the urine.",
  },
  {
    name: "acidity/gerd",
    keywords: ["acidity", "acid reflux", "heartburn", "gerd", "gastritis", "sour belch", "stomach burning", "ulcer"],
    symptoms:
      "Burning in the chest or upper stomach, sour belching, acidic taste in the mouth, bloating, nausea, throat irritation, cough after meals, and symptoms that worsen on lying down.",
    duration:
      "Simple acidity may improve within hours, but GERD can recur for weeks or months if triggers are not controlled.",
    medicine:
      "Antacids may give quick relief, and omeprazole or similar acid-reducing medicines are usually taken about 30 minutes before meals if prescribed or commonly used safely for you. Do not keep self-treating for long periods without review. Cold milk may soothe some people briefly, but it is not a full treatment.",
    causes:
      "Common causes include overeating, spicy or oily meals, lying down after eating, obesity, pregnancy, smoking, alcohol, hiatal hernia, certain painkillers, gastritis, or peptic ulcer disease.",
    prevention:
      "Eat smaller meals, do not lie down for at least 2 to 3 hours after food, reduce trigger foods, maintain healthy weight, avoid smoking, and limit alcohol.",
    diet:
      "Prefer smaller home meals such as dal, roti, rice, banana, oats, curd if tolerated, and non-spicy vegetables. Avoid very spicy, fried, oily foods, excessive tea or coffee, cola, chocolate, mint, and late-night heavy meals.",
    contagious:
      "No. Acidity and GERD are not contagious, though some ulcers are related to Helicobacter pylori infection which can spread in families.",
    doctor:
      "See a doctor if there is weight loss, vomiting, black stools, difficulty swallowing, chest pain, repeated vomiting, anemia, or symptoms that keep returning despite treatment.",
    test:
      "Doctors may diagnose from symptoms and response to treatment, but may also use upper GI endoscopy, H. pylori testing, or other tests if alarm symptoms are present.",
    response:
      "Acidity and GERD commonly cause burning, sour belching, and discomfort after meals or on lying down, and they are usually manageable with food timing and acid control. Try smaller meals, avoid lying down after eating, and use antacids or medicines like omeprazole only in a sensible way if they are safe for you. Medical review is needed if symptoms are frequent, there is vomiting or black stools, or the pain could be confused with heart-related chest pain.",
  },
  {
    name: "skin allergy",
    keywords: ["allergy", "allergic reaction", "skin allergy", "hives", "urticaria", "itching rash", "eczema", "food allergy", "dust allergy"],
    symptoms:
      "Itching, red rash, hives, swelling, dry or inflamed skin, sneezing, watery eyes, or worsening after exposure to certain foods, dust, medicines, cosmetics, or fabrics.",
    duration:
      "Acute allergic hives may settle within hours to a few days, while eczema or repeated allergy flare-ups can last weeks and recur.",
    medicine:
      "Cetirizine is commonly used for itching if safe for you. Calamine lotion, cool compresses, and fragrance-free moisturizer may help. Severe allergy reactions may need urgent prescription treatment. Do not ignore swelling of lips or breathing trouble.",
    causes:
      "Food allergy, dust, pollen, insect bites, new soaps or cosmetics, medicines, pet dander, sweat, and eczema-related skin sensitivity are common triggers.",
    prevention:
      "Avoid known triggers, use mild soaps and moisturizers, keep nails short, wash dust-prone bedding regularly, and test new skin products cautiously.",
    diet:
      "There is no single allergy diet, but avoid foods that clearly trigger symptoms for you. Stay hydrated and use a simple diet during acute hives if multiple food triggers are suspected.",
    contagious:
      "No. Skin allergy and hives are not contagious.",
    doctor:
      "Seek emergency care if there is facial swelling, throat tightness, wheezing, fainting, or breathing difficulty because anaphylaxis can be life-threatening. See a doctor for repeated or severe itching, eczema, or unexplained triggers.",
    test:
      "Doctors mainly diagnose from history and examination, and may use skin prick testing, blood allergy tests, or patch testing in selected cases.",
    response:
      "Skin allergy can cause itching, hives, or red inflamed patches after contact with triggers such as food, dust, or skincare products, and most mild reactions are manageable with trigger avoidance and antihistamines. Cetirizine often helps itch, but recurring or severe reactions need proper evaluation to identify the cause. Emergency help is needed right away if swelling affects the lips, tongue, throat, or breathing.",
  },
  {
    name: "joint pain/arthritis",
    keywords: ["joint pain", "arthritis", "knee pain", "swollen joints", "rheumatoid", "gout", "uric acid", "joint stiffness"],
    symptoms:
      "Pain, stiffness, swelling, warmth, reduced movement, morning stiffness, knee pain, finger joint pain, or sudden red tender joints in gout.",
    duration:
      "Minor strain may improve in days, but arthritis often lasts for months or years and can flare from time to time. Gout attacks may peak within a day and settle over several days with treatment.",
    medicine:
      "Paracetamol may help some people, while stronger pain relief, anti-inflammatory medicines, gout treatment, or disease-modifying medicines for rheumatoid arthritis should be used only under medical advice. Physiotherapy and regular guided exercise are important parts of treatment.",
    causes:
      "Osteoarthritis from wear and tear, rheumatoid arthritis from autoimmune inflammation, gout from uric acid crystal deposition, injury, infection, obesity, or overuse can all cause joint pain.",
    prevention:
      "Maintain healthy weight, stay active, strengthen muscles, avoid repeated joint strain, control uric acid if advised, and get early treatment for inflammatory arthritis.",
    diet:
      "Choose a balanced diet with vegetables, fruits, dal, nuts, and adequate protein. If gout is suspected, avoid or limit red meat, organ meat, beer, and alcohol, and reduce sugary drinks.",
    contagious:
      "No. Common arthritis and gout are not contagious, though a joint infection is a different urgent condition.",
    doctor:
      "See a doctor for swollen hot joints, severe pain, fever, morning stiffness lasting long, deformity, repeated attacks, or difficulty walking or using the joint.",
    test:
      "Doctors may use X-ray, ESR, CRP, uric acid, RA factor, anti-CCP antibody, joint fluid analysis, or other tests depending on the pattern.",
    response:
      "Joint pain can come from wear-and-tear arthritis, autoimmune inflammation, gout, or injury, so the pattern of swelling and stiffness matters as much as the pain itself. Resting an acutely painful joint may help briefly, but long-term care often includes exercise, physiotherapy, weight management, and cause-specific treatment. Prompt evaluation is needed if the joint is hot and swollen, movement is limited, or gout or rheumatoid arthritis is suspected.",
  },
  {
    name: "conjunctivitis",
    keywords: ["eye infection", "conjunctivitis", "red eye", "pink eye", "eye flu", "eye discharge", "itchy eyes"],
    symptoms:
      "Redness of the eye, watering, irritation, itching, sticky discharge, crusting of eyelids, gritty feeling, and sometimes mild swelling or light sensitivity.",
    duration:
      "Viral conjunctivitis often improves within 1 to 2 weeks, bacterial infection may improve sooner with treatment, and allergic conjunctivitis may recur with exposure.",
    medicine:
      "Keep the eye clean with clean cotton and cooled boiled water or sterile saline. Lubricating drops may soothe irritation. Antibiotic eye drops help only bacterial conjunctivitis and should be used if prescribed. Do not self-use steroid eye drops.",
    causes:
      "Conjunctivitis may be caused by viruses, bacteria, allergies, irritants, dust, or contaminated contact lenses.",
    prevention:
      "Wash hands often, avoid touching or rubbing the eyes, do not share towels or pillows, clean spectacles, and avoid sharing eye cosmetics.",
    diet:
      "No special diet is required, but good hydration and a balanced diet support recovery. Avoid rubbing the eyes after handling irritants or allergens.",
    contagious:
      "Yes, viral and bacterial conjunctivitis are highly contagious and can spread through hands, towels, pillow covers, and close contact.",
    doctor:
      "See a doctor if there is severe pain, reduced vision, major swelling, injury, light sensitivity, pus discharge, contact lens use, or symptoms in a newborn.",
    test:
      "Diagnosis is usually clinical. Eye examination is the main test, and discharge testing is used only in selected or severe cases.",
    response:
      "Conjunctivitis, also called pink eye, usually causes red irritated eyes with watering or discharge, and viral forms spread easily in homes and schools. Keep the eye clean, avoid rubbing it, and do not share towels or pillow covers. A doctor should review the eye if vision drops, pain is significant, discharge is heavy, or the person wears contact lenses.",
  },
  {
    name: "migraine",
    keywords: ["migraine", "one sided headache", "throbbing headache", "migraine attack", "light sensitivity headache", "aura headache"],
    symptoms:
      "Throbbing headache often on one side, nausea, vomiting, sensitivity to light or sound, and sometimes aura such as flashing lights, zigzag lines, or tingling before the attack.",
    duration:
      "A migraine attack often lasts 4 to 72 hours if untreated, though some people have shorter or longer episodes and a recovery phase afterward.",
    medicine:
      "Rest in a dark quiet room, hydrate, and take treatment early in the attack. Paracetamol, NSAIDs if appropriate, or prescription triptans can help many people, and triptans are often most effective when taken near the start of the attack. Frequent headaches may need preventive medicines from a doctor.",
    causes:
      "Common triggers include poor sleep, stress, dehydration, skipped meals, menstruation, strong smells, screen glare, alcohol, and certain foods in some people.",
    prevention:
      "Keep regular sleep and meal timing, hydrate well, reduce trigger exposure, manage stress, and keep a migraine diary to identify patterns.",
    diet:
      "Eat regular meals and avoid personal triggers such as excess caffeine, alcohol, aged cheese, chocolate, processed meats, or MSG if these reliably trigger attacks for you.",
    contagious:
      "No. Migraine is not contagious.",
    doctor:
      "See a doctor for a new severe headache, weakness, confusion, fever, repeated vomiting, change in headache pattern, or headaches that become frequent enough to affect work or study.",
    test:
      "Migraine is mainly diagnosed from history and neurological examination. Doctors may order MRI, CT scan, eye exam, or blood tests if red flags are present.",
    response:
      "Migraine is more than a regular headache because it often comes with throbbing pain, nausea, and sensitivity to light or sound, and the attack can become harder to stop if treatment is delayed. Taking medicine early and tracking triggers in a migraine diary usually helps more than waiting for the pain to peak. Medical review is important if the pattern is new, severe, or associated with weakness, fever, or other warning signs.",
  },
  {
    name: "asthma",
    keywords: ["asthma", "wheezing", "breathing difficulty", "asthma attack", "inhaler", "chest tightness breathe", "bronchitis"],
    symptoms:
      "Wheezing, chest tightness, cough, shortness of breath, noisy breathing, symptoms worse at night or early morning, and attacks triggered by dust, smoke, cold air, exercise, or infection.",
    duration:
      "Asthma is a long-term condition, but flare-ups can come on over minutes to hours and improve with correct treatment. Control varies depending on triggers and daily management.",
    medicine:
      "A reliever inhaler such as salbutamol is commonly used during attacks, while controller inhalers such as inhaled steroids are taken daily if prescribed to prevent symptoms. Use spacer technique if advised, and do not stop controller medicine just because you feel better.",
    causes:
      "Asthma is related to airway inflammation and sensitivity. Triggers include dust, pollen, smoke, pollution, viral infections, exercise, weather change, pets, and family history.",
    prevention:
      "Avoid smoke and dust exposure, use inhalers with correct technique, take controller treatment regularly, keep vaccinations updated, and identify personal triggers.",
    diet:
      "There is no specific asthma diet, but a balanced diet, healthy weight, and good hydration help overall control. Avoid foods that clearly trigger allergy-related symptoms for you.",
    contagious:
      "No. Asthma itself is not contagious, though viral infections that trigger asthma attacks can spread.",
    doctor:
      "Seek urgent medical care for severe breathlessness, inability to speak full sentences, chest pulling in, worsening wheeze despite reliever inhaler, or blue lips, which is an emergency. Regular review is needed if inhaler use is increasing.",
    test:
      "Doctors often use spirometry or peak flow testing, oxygen saturation, chest examination, and sometimes allergy testing or chest X-ray depending on the situation.",
    response:
      "Asthma causes the airways to tighten and become inflamed, leading to wheezing, cough, and breathing difficulty that may come in attacks. Reliever inhalers help during sudden symptoms, but good long-term control usually depends on taking a controller inhaler regularly if prescribed. Emergency care is needed immediately if breathing is getting harder, speech is difficult, or the lips look blue.",
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
  {
    phrases: ["normal heart rate", "pulse rate", "bpm"],
    keywords: ["normal heart rate", "pulse rate", "bpm", "resting pulse", "normal pulse"],
    response:
      "A normal resting heart rate for most adults is about 60 to 100 beats per minute, though athletes and very fit people may naturally be lower. It is best to check after sitting quietly for 5 minutes, because walking, fever, stress, tea, coffee, or anxiety can temporarily raise the number. If your pulse is repeatedly above 100 at rest, very irregular, or below 50 with dizziness or weakness, it should be checked by a doctor. Seek urgent care if fast heartbeat comes with chest pain, fainting, severe breathlessness, or sweating.",
  },
  {
    phrases: ["normal oxygen level", "spo2", "pulse oximeter"],
    keywords: ["normal oxygen level", "spo2", "pulse oximeter", "oxygen saturation", "normal spo2"],
    response:
      "A normal oxygen saturation on a pulse oximeter is usually 95 to 100 percent in a healthy adult. Readings of 94 percent or lower can be a concern, especially if there is cough, fever, chest infection, asthma, or COVID-like symptoms. Warm your hands, sit still, and take 2 or 3 readings because cold fingers, nail polish, and device error can give a false low value. Get urgent medical help if oxygen is falling, stays low, or breathing is difficult even if the number looks only mildly reduced.",
  },
  {
    phrases: ["paracetamol dosage", "paracetamol for adults", "crocin dose"],
    keywords: ["paracetamol dosage", "adult paracetamol", "crocin", "calpol", "fever tablet dose"],
    response:
      "For most adults, paracetamol is taken as 500 mg to 1 gram every 4 to 6 hours when needed for fever or pain. Do not exceed 4 grams total in 24 hours, and many doctors prefer staying lower if you are small-built, elderly, or already taking other medicines that may contain paracetamol. Always check cold and flu combination tablets, because double-dosing is common. People with liver disease, heavy alcohol use, or very poor nutrition should speak to a doctor before taking repeated doses.",
  },
  {
    phrases: ["ibuprofen vs paracetamol", "which is better ibuprofen or paracetamol", "difference between ibuprofen and paracetamol"],
    keywords: ["ibuprofen vs paracetamol", "paracetamol or ibuprofen", "painkiller difference", "who should avoid ibuprofen"],
    response:
      "Paracetamol is usually preferred for fever and mild pain when you want something gentler on the stomach. Ibuprofen can work better for pain linked to inflammation, such as body pain, dental pain, muscle strain, or period cramps, but it can irritate the stomach and affect the kidneys. Ibuprofen should be avoided or used only with medical advice in people with ulcers, kidney disease, uncontrolled BP, dehydration, some asthma patients, or during certain stages of pregnancy. If you are unsure, paracetamol is often the safer first choice for many adults in India, but severe pain or repeated fever still deserves medical review.",
  },
  {
    phrases: ["reduce fever fast", "fever home remedy", "how to bring down fever"],
    keywords: ["reduce fever fast", "fever home remedy", "fever remedy", "bring down fever", "high temperature"],
    response:
      "To reduce fever at home, rest well, drink enough water or ORS, and wear light clothing instead of wrapping up in heavy blankets. Paracetamol can help if the fever is making you uncomfortable, and a lukewarm bath or cool compress on the forehead may make you feel better. Avoid ice-cold baths because they can cause shivering and make you feel worse. See a doctor if fever goes above 103 F, lasts more than 3 days, or comes with breathing trouble, confusion, rash, or severe weakness.",
  },
  {
    phrases: ["normal body temperature", "what is 37 degrees", "normal temperature"],
    keywords: ["normal body temperature", "37 degrees", "normal temperature", "fever temperature", "body temp"],
    response:
      "Normal body temperature is usually around 36.1 to 37.2 degrees Celsius, so 37 degrees Celsius is generally considered normal. Temperature can vary slightly by time of day, recent exercise, weather, and the way it is measured, such as oral, forehead, or underarm. A reading of 38 degrees Celsius or more is usually considered a fever. If fever is persistent or accompanied by severe symptoms, the cause matters more than the number alone and it is wise to get checked.",
  },
  {
    phrases: ["dengue platelet count", "normal platelet range", "low platelet"],
    keywords: ["dengue platelet count", "platelet count", "low platelet", "normal platelet range", "platelets dengue"],
    response:
      "A normal platelet count is roughly 1.5 to 4.5 lakh per microlitre, though lab ranges may vary slightly. In dengue, platelet counts can fall, but the trend, bleeding signs, hydration, and haematocrit are often more important than one number alone. A count below 1 lakh needs careful monitoring, and urgent assessment is important if there is bleeding, black stools, vomiting, severe abdominal pain, or drowsiness. Do not start random medicines like ibuprofen or aspirin during suspected dengue unless a doctor advises it.",
  },
  {
    phrases: ["cbc blood test", "complete blood count", "haemoglobin normal"],
    keywords: ["cbc blood test", "complete blood count", "haemoglobin normal", "wbc", "rbc"],
    response:
      "A CBC or complete blood count checks haemoglobin, red blood cells, white blood cells, and platelets to give a basic picture of anaemia, infection, inflammation, and bleeding risk. Low haemoglobin can suggest anaemia, which is common in India from iron deficiency, B12 deficiency, chronic disease, or blood loss. High or low white blood cells may point toward infection or other medical issues, while platelets help with clotting and are watched closely in illnesses like dengue. The exact meaning depends on age, sex, symptoms, and the rest of the report, so the numbers should be interpreted together rather than in isolation.",
  },
  {
    phrases: ["uti home remedy", "urine infection home treatment", "burning urine treatment"],
    keywords: ["uti home remedy", "urine infection", "burning urine", "home treatment uti", "urinary infection"],
    response:
      "For mild urinary discomfort, drinking more water can help flush the bladder, and some people feel better avoiding caffeine, cola, and very spicy foods for a day or two. Cranberry products may help some patients, but they do not replace proper treatment if a true infection is present. Most UTIs need a doctor to confirm the diagnosis and prescribe the right antibiotic, especially if there is fever, back pain, or repeated infections. Seek care quickly in pregnancy, in men, or if symptoms are severe because delayed treatment can allow the infection to spread to the kidneys.",
  },
  {
    phrases: ["boost immunity", "weak immune system", "how to increase immunity"],
    keywords: ["boost immunity", "weak immune system", "increase immunity", "vitamin c", "zinc"],
    response:
      "The best way to support immunity is with enough sleep, regular exercise, a balanced diet, stress control, and staying up to date with routine vaccines. Vitamin C, zinc, turmeric, fruits, dal, eggs, curd, nuts, and green vegetables can support general health, but no single food or supplement magically prevents all illness. Frequent infections can also happen because of poor sleep, diabetes, anaemia, or chronic stress rather than a weak immune system alone. If you are falling sick very often, losing weight, or not recovering normally, a medical check-up is a better step than taking many supplements blindly.",
  },
  {
    phrases: ["daily protein intake", "protein diet", "how much protein per day"],
    keywords: ["daily protein intake", "protein diet", "protein per day", "protein requirement", "high protein"],
    response:
      "A simple daily target for many adults is around 0.8 to 1 gram of protein per kilogram of body weight, though athletes, older adults, and some medical conditions may need more. Good Indian protein sources include dal, chana, rajma, paneer, curd, milk, soy, eggs, chicken, fish, and peanuts. Spreading protein across meals often works better than trying to eat it all at once. People with kidney disease should not start a high-protein diet without medical advice.",
  },
  {
    phrases: ["weight loss tips", "obesity health", "how to lose weight"],
    keywords: ["weight loss tips", "obesity health", "lose weight", "belly fat", "calorie deficit"],
    response:
      "Healthy weight loss usually comes from a steady calorie deficit rather than crash diets or detox plans. Walking daily, eating more protein and fibre, cutting sugary drinks, reducing maida-heavy snacks, and improving sleep are practical steps that work for many people in India. Quick fixes often lead to rebound weight gain, so consistency matters more than perfection. If weight is rising despite effort, or periods are irregular, snoring is severe, or thyroid symptoms are present, it is worth getting checked for medical causes.",
  },
  {
    phrases: ["kidney stone symptoms", "kidney pain", "stone pain"],
    keywords: ["kidney stone symptoms", "kidney pain", "stone pain", "blood in urine", "flank pain"],
    response:
      "Kidney stones often cause severe pain in the side or back, called flank pain, and the pain may move toward the lower abdomen or groin. Blood in urine, burning while passing urine, nausea, and passing small stones or gravel can also happen. Drinking water helps, but intense pain, vomiting, fever, or inability to pass urine needs urgent medical care because blockage or infection can become serious. Stones are common in hot weather and dehydration, so regular fluid intake is especially important.",
  },
  {
    phrases: ["fatty liver", "liver disease symptoms", "liver problem signs"],
    keywords: ["fatty liver", "liver disease symptoms", "fatigue", "jaundice", "right upper pain"],
    response:
      "Fatty liver often causes no symptoms at first, but some people report fatigue, heaviness, or discomfort on the right upper side of the abdomen. More serious liver disease may cause jaundice, swelling, itching, vomiting, or easy bleeding, which needs proper evaluation. Weight control, avoiding alcohol, limiting sugary foods, and managing diabetes or cholesterol are key first steps for fatty liver. Because many people discover it only on ultrasound or blood tests, follow-up with a doctor is important rather than ignoring it.",
  },
  {
    phrases: ["appendicitis", "right side stomach pain", "appendix pain"],
    keywords: ["appendicitis", "right side stomach pain", "appendix pain", "right lower abdomen", "emergency surgery"],
    response:
      "Appendicitis often starts as pain near the belly button and then shifts to the right lower side of the abdomen. Nausea, vomiting, fever, loss of appetite, and pain that worsens on walking or coughing make it more suspicious. This is not something to treat with home remedies because a burst appendix can become dangerous very quickly. Urgent medical evaluation is needed, and surgery is commonly required if appendicitis is confirmed.",
  },
  {
    phrases: ["food poisoning", "ate bad food", "stomach bug"],
    keywords: ["food poisoning", "ate bad food", "stomach bug", "vomiting after eating", "diarrhea after eating"],
    response:
      "Food poisoning commonly causes vomiting, loose motions, stomach cramps, and weakness within hours after eating contaminated food, though some infections take longer to show up. The main treatment is ORS, clean water, rest, and light foods like khichdi, toast, curd rice, or banana once vomiting settles. Many mild cases improve in 24 to 48 hours, but dehydration can happen fast in children, older adults, and weak patients. See a doctor if there is blood in stool, high fever, severe abdominal pain, or if fluids are not staying down.",
  },
  {
    phrases: ["migraine vs headache", "difference between migraine and headache", "migraine symptoms"],
    keywords: ["migraine vs headache", "migraine symptoms", "aura", "one sided headache", "headache difference"],
    response:
      "A regular headache is often dull, pressure-like, and felt on both sides, while migraine is commonly throbbing, moderate to severe, and may be one-sided. Migraine may come with nausea, vomiting, sensitivity to light or sound, and sometimes an aura such as flashing lights or tingling before the pain starts. Common triggers include missed meals, poor sleep, dehydration, stress, strong smells, and hormonal changes. Sudden severe headache, weakness, confusion, or the worst headache of life needs urgent medical attention because that is not a typical migraine pattern.",
  },
  {
    phrases: ["panic attack", "sudden heart racing", "anxiety attack"],
    keywords: ["panic attack", "sudden heart racing", "anxiety attack", "palpitations fear", "breathing technique"],
    response:
      "A panic attack can cause sudden heart racing, chest tightness, shaking, sweating, dizziness, and a strong feeling that something terrible is happening. It is frightening, but panic itself is usually not dangerous and often peaks within minutes before settling. Slow breathing, such as inhaling for 4 seconds and exhaling for 6 seconds, plus grounding by naming things you can see and feel, can help the body calm down. If episodes are recurrent, new, or hard to distinguish from a heart problem, medical evaluation is important.",
  },
  {
    phrases: ["period pain", "menstrual cramps", "pain during periods"],
    keywords: ["period pain", "menstrual cramps", "ibuprofen for cramps", "painful periods", "endometriosis"],
    response:
      "Period cramps are common and usually feel like lower abdominal pain, backache, or heaviness during the first day or two of periods. A hot water bag, rest, light movement, and medicines like ibuprofen can help if you are normally safe to take it and have no ulcer, kidney, or allergy issues. Severe pain that starts disrupting work, school, sleep, or causes vomiting, fainting, or very heavy bleeding is not normal and should be checked. Conditions like endometriosis, fibroids, or infection may be behind unusually painful periods.",
  },
  {
    phrases: ["early pregnancy symptoms", "am i pregnant", "pregnancy signs"],
    keywords: ["early pregnancy symptoms", "am i pregnant", "pregnancy signs", "missed period", "home pregnancy test"],
    response:
      "Early pregnancy symptoms can include a missed period, nausea, breast tenderness, tiredness, bloating, and needing to urinate more often. These signs are not fully reliable on their own because stress, hormonal changes, and illness can mimic them. A home pregnancy test is usually most useful after the missed period, preferably using the first urine of the morning. If there is severe pain, dizziness, or bleeding with a positive test, urgent medical evaluation is needed.",
  },
  {
    phrases: ["hiccups won't stop", "persistent hiccups", "continuous hiccups"],
    keywords: ["hiccups won't stop", "persistent hiccups", "continuous hiccups", "hiccup remedy", "serious hiccups"],
    response:
      "Short episodes of hiccups are usually harmless and can happen after spicy food, fizzy drinks, fast eating, alcohol, or stomach irritation. Simple remedies include sipping cold water slowly, holding the breath briefly, breathing into a paper bag for a short time, or swallowing a teaspoon of sugar if safe for you. Hiccups that last more than 48 hours can sometimes point to reflux, infection, medication effects, or nerve irritation and need evaluation. Seek care sooner if persistent hiccups are affecting sleep, eating, or breathing.",
  },
  {
    phrases: ["stop vomiting", "vomiting remedy", "how to stop vomiting"],
    keywords: ["stop vomiting", "vomiting remedy", "nausea and vomiting", "ginger", "ors after vomiting"],
    response:
      "If vomiting is mild, start with tiny frequent sips of water or ORS and avoid forcing large amounts at once because that can trigger more vomiting. Ginger tea, plain biscuits, toast, rice, or banana may help once the stomach starts settling, and lying still with the head raised can reduce nausea. Avoid oily food, alcohol, and heavy meals for a while. See a doctor if vomiting is repeated, there is blood, severe stomach pain, signs of dehydration, or the person is a child, elderly, or pregnant.",
  },
  {
    phrases: ["nosebleed", "epistaxis", "bleeding from nose"],
    keywords: ["nosebleed", "epistaxis", "bleeding from nose", "pinch nose", "lean forward"],
    response:
      "For a nosebleed, sit upright, lean slightly forward, and pinch the soft part of the nose continuously for 10 minutes without checking too early. Do not lean the head back because blood can run into the throat and cause coughing or vomiting. Nosebleeds are often triggered by dry weather, nose picking, allergies, injury, or uncontrolled blood pressure. Get medical help if bleeding is heavy, keeps returning, happens after major injury, or does not stop after proper pressure.",
  },
  {
    phrases: ["mouth ulcers", "canker sores", "ulcers in mouth"],
    keywords: ["mouth ulcers", "canker sores", "bonjela", "vitamin b12 deficiency", "mouth sore"],
    response:
      "Mouth ulcers are common and may happen from stress, sharp teeth, spicy food, braces, minor injury, or vitamin deficiencies such as B12, folate, or iron deficiency. They usually heal within 1 to 2 weeks, and soothing gels like Bonjela or a doctor-recommended mouth ulcer gel may reduce pain. Avoid very spicy, sour, or rough foods while it heals, and keep the mouth clean. Recurrent, very large, or non-healing ulcers should be checked because they may need tests or specific treatment.",
  },
  {
    phrases: ["hair fall reasons", "hair loss causes", "why is my hair falling"],
    keywords: ["hair fall reasons", "hair loss causes", "thyroid hair fall", "iron deficiency hair loss", "pcos hair fall"],
    response:
      "Hair fall can happen from stress, illness, thyroid problems, low iron, low vitamin D, crash dieting, dandruff, postpartum changes, or genetic DHT-related thinning. In women, PCOS can also contribute, especially when hair fall is paired with acne, irregular periods, or unwanted facial hair. Mild seasonal shedding is common, but visible thinning, patchy loss, or hair coming out in large amounts needs a closer look. If hair fall is persistent, it is reasonable to get checked for thyroid, iron, and hormonal causes rather than only trying oils and shampoos.",
  },
  {
    phrases: ["skin darkening", "hyperpigmentation", "dark patches"],
    keywords: ["skin darkening", "hyperpigmentation", "dark patches", "sun damage", "vitamin c serum"],
    response:
      "Skin darkening or hyperpigmentation can happen from sun exposure, acne marks, friction, hormones, insulin resistance, or certain skin conditions. Daily sunscreen is one of the most important steps, because without sun protection even good creams often fail to show much benefit. Vitamin C serum, gentle exfoliation, and doctor-guided creams may help, but harsh home remedies can worsen the pigmentation. If dark patches appear on the neck, underarms, or suddenly spread, it is worth checking for hormonal or metabolic causes.",
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
    phrases: ["burnout", "feeling overwhelmed", "overstressed", "too overwhelmed", "emotionally exhausted"],
    keywords: ["burnout", "overwhelmed", "overstressed", "exhausted", "drained", "too much"],
    response:
      "Feeling burned out or overwhelmed can be a sign that your mind and body have been carrying too much for too long, and that strain is real. Small resets like a short walk, a few minutes away from screens, water, food, and one task at a time can help lower the pressure in the moment. It can also help to set clearer limits around work, study, or caregiving so there is some space for recovery. If this keeps building or starts affecting sleep, mood, or daily functioning, therapy or counseling can offer practical support. Please consider reaching out to a mental health professional if you need more support.",
  },
  {
    phrases: ["feel lonely", "feel isolated", "no friends", "no one to talk to", "all alone"],
    keywords: ["loneliness", "lonely", "isolated", "no friends", "alone", "disconnected"],
    response:
      "Feeling lonely can hurt deeply, and many people go through periods where connection feels harder than it looks from the outside. It may help to start with one small step such as messaging one trusted person, joining a class or community group, or spending time in a familiar shared space. These steps do not fix everything at once, but they can make isolation feel a little less heavy. If loneliness is becoming persistent or is tied to depression, anxiety, or thoughts of hopelessness, professional support can make a real difference. Please consider reaching out to a mental health professional if you need more support.",
  },
  {
    phrases: ["lost someone", "someone passed away", "bereavement", "dealing with grief", "grieving a loss"],
    keywords: ["grief", "lost someone", "bereavement", "mourning", "someone died", "loss"],
    response:
      "Grief can bring sadness, numbness, anger, guilt, and moments that feel confusing or unpredictable, and all of that can be part of mourning. People often move through different grief reactions in no clear order, and there is no fixed timeline for when you should feel better. Gentle routines, rest, and being with people who can listen without rushing you can help create some stability. Support groups can also be comforting because they remind you that you do not have to carry loss alone. Please consider reaching out to a mental health professional if you need more support.",
  },
  {
    phrases: ["anger issues", "anger management", "i get angry easily", "can not control my anger", "uncontrollable anger"],
    keywords: ["anger issues", "anger management", "angry", "rage", "temper", "snapping"],
    response:
      "Struggling with anger does not make you a bad person, and it often points to stress, hurt, fear, or frustration building underneath the surface. It can help to notice what tends to trigger the anger, such as specific people, situations, lack of sleep, or feeling cornered. A pause technique like stepping away, breathing slowly, and waiting before replying can reduce the chance of saying or doing something you regret. If anger feels frequent, intense, or hard to control, therapy can help you work on patterns and safer coping tools. Please consider reaching out to a mental health professional if you need more support.",
  },
  {
    phrases: ["intrusive thoughts", "repetitive behavior", "ocd symptoms", "obsessive thoughts", "compulsive behavior"],
    keywords: ["ocd", "intrusive thoughts", "repetitive behavior", "obsessions", "compulsions", "checking"],
    response:
      "OCD involves unwanted intrusive thoughts and repetitive behaviors or mental rituals that people feel driven to do to reduce anxiety. These experiences can be exhausting and upsetting, and having them does not mean you want the thoughts to be true. One of the most effective treatments is ERP therapy, which stands for exposure and response prevention, often with support from a trained therapist. OCD is treatable, and many people improve with the right help and consistent care. Please consider reaching out to a mental health professional if you need more support.",
  },
  {
    phrases: ["cannot focus", "attention problem", "adhd symptoms", "adult adhd", "i can not concentrate"],
    keywords: ["adhd", "cannot focus", "attention problem", "distracted", "poor concentration", "restless"],
    response:
      "Difficulty focusing can show up in adult ADHD as distractibility, restlessness, forgetfulness, unfinished tasks, or trouble organizing time. It can help to use behavioral strategies like short work blocks, written task lists, fewer distractions, and breaking work into smaller steps. These tools can ease daily stress, even before you have a clear diagnosis. If these symptoms have been ongoing and are affecting work, study, or relationships, a proper evaluation can help you understand what is going on. Please consider reaching out to a mental health professional if you need more support.",
  },
  {
    phrases: ["eating disorder", "not eating", "overeating", "binge eating", "food feels out of control"],
    keywords: ["eating disorder", "not eating", "overeating", "binge", "purging", "food issues"],
    response:
      "What you are describing deserves care, because eating struggles are often about much more than food, weight, or willpower. They can be tied to stress, control, shame, trauma, body image, or feeling overwhelmed, and they can affect both mental and physical health. Trying to manage it alone can become exhausting, especially if meals, guilt, or compensating behaviors are taking over your day. Professional help is especially important here, because eating disorders can become medically serious even when they are hidden. Please consider reaching out to a mental health professional if you need more support.",
  },
  {
    phrases: ["substance abuse", "alcohol problem", "drug problem", "addiction help", "can not stop drinking"],
    keywords: ["addiction", "substance abuse", "alcohol problem", "drinking too much", "drug use", "dependency"],
    response:
      "Addiction is a health issue, not a moral failure, and many people need support to change patterns with alcohol or substances. If your body has become dependent, stopping suddenly can sometimes cause dangerous withdrawal symptoms, so medical supervision may be important. Reaching out early to a doctor, de-addiction service, or trusted support person can make the next step safer and more manageable. If you need immediate emotional support in India, iCall is available at 9152987821. Please consider reaching out to a mental health professional if you need more support.",
  },
  {
    phrases: ["body image issues", "feel ugly", "not confident in my looks", "hate my body", "i look bad"],
    keywords: ["body image", "feel ugly", "not confident", "appearance", "hate my body", "looks"],
    response:
      "Feeling unhappy with your appearance can affect confidence, mood, and how safe you feel in your own body, and those feelings can become very painful. Thoughts about appearance are not always accurate, especially when self criticism is strong or constant. Social media can make this worse by feeding comparison and unrealistic standards that are hard to escape. Therapy can help you challenge distorted thinking and build a kinder, steadier relationship with yourself. Please consider reaching out to a mental health professional if you need more support.",
  },
  {
    phrases: ["relationship stress", "marriage problems", "problems with my partner", "constant fights", "relationship issues"],
    keywords: ["relationship stress", "marriage problems", "partner issues", "conflict", "arguments", "couples therapy"],
    response:
      "Relationship stress can leave you feeling tense, unheard, and emotionally worn down, especially when the same arguments keep repeating. Calm communication, listening without interrupting, and naming one issue at a time can sometimes make difficult conversations feel more manageable. It also helps to notice patterns such as criticism, defensiveness, or avoiding important topics. If the stress is ongoing or communication keeps breaking down, couples therapy can offer structured support. Please consider reaching out to a mental health professional if you need more support.",
  },
  {
    phrases: ["work stress", "job anxiety", "office pressure", "pressure at work", "work burnout"],
    keywords: ["work stress", "job anxiety", "office pressure", "deadlines", "boss pressure", "burnout signs"],
    response:
      "Work stress can build slowly until it starts affecting sleep, concentration, patience, and your ability to recover after the day ends. Setting clearer boundaries, prioritizing the most important tasks, and giving yourself realistic breaks can reduce some of the strain. It is also worth paying attention to burnout signs like emotional exhaustion, cynicism, frequent headaches, or feeling numb about work you used to manage. You do not have to wait until things fully collapse before asking for support. Please consider reaching out to a mental health professional if you need more support.",
  },
  {
    phrases: ["phone addiction", "social media addiction", "too much screen time", "can not stop scrolling", "always on my phone"],
    keywords: ["phone addiction", "social media addiction", "screen time", "scrolling", "fomo", "digital detox"],
    response:
      "If your phone or social media use feels hard to control, that can affect sleep, focus, mood, and how present you feel in daily life. Small digital detox steps like app timers, keeping the phone away during meals or bedtime, and setting screen free blocks can help you regain some balance. FOMO can make it harder to step back, so it may help to remind yourself that constant connection is not the same as real rest or closeness. If this pattern is affecting your mental health or daily functioning, professional support can help you understand what is driving it. Please consider reaching out to a mental health professional if you need more support.",
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
