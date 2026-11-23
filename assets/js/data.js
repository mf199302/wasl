/* All records are fictional, for a static product demonstration only. */
window.WASL_DATA = {
  demoPeriod: 'Illustrative dataset · November 2026',
  brand: { name: 'Wasl', arabic: 'وصل', tagline: 'Feel connected. Find your circle.' },
  roles: [
    { id: 'common', name: 'Common space', short: 'Common', icon: 'layers', description: 'Shared workspace' },
    { id: 'patient', name: 'Patient', short: 'Patient', icon: 'heart', description: 'My support space' },
    { id: 'professional', name: 'Professional', short: 'Professional', icon: 'stethoscope', description: 'Group facilitation' },
    { id: 'marco', name: 'Marco', short: 'Marco', icon: 'trending-up', description: 'Strategy & commercial' },
    { id: 'ruby', name: 'Ruby', short: 'Ruby', icon: 'shield-heart', description: 'Clinical governance' },
    { id: 'honda', name: 'Honda', short: 'Honda', icon: 'code', description: 'Technology & engineering' },
    { id: 'admin', name: 'Operations admin', short: 'Admin', icon: 'settings', description: 'Day-to-day operations' }
  ],
  groups: [
    { id: 'anxiety', name: 'Anxiety & Overthinking', category: 'Anxiety', subtitle: 'A gentle space to discuss anxious thoughts and build coping skills.', image: 'group-anxiety.svg', facilitator: 'Dr. Lina Mansour', credential: 'Clinical psychologist · fictional', day: 'Tuesday', time: '7:00 PM', duration: '75 min', language: 'English', format: 'Online', type: 'Professionally facilitated', price: 280, seats: 3, capacity: 9, status: 'Open for requests', level: 'Guided support', featured: true },
    { id: 'burnout', name: 'Stress & Burnout Circle', category: 'Stress', subtitle: 'Explore boundaries, rest, and the everyday pressures of work and life.', image: 'group-burnout.svg', facilitator: 'Mariam Nabil', credential: 'Psychologist · fictional', day: 'Thursday', time: '6:30 PM', duration: '60 min', language: 'Arabic', format: 'Online', type: 'Psychoeducation', price: 220, seats: 5, capacity: 10, status: 'Open for requests', level: 'Learning circle', featured: true },
    { id: 'mood', name: 'Mood & Resilience', category: 'Mood', subtitle: 'Learn everyday strategies for navigating mood changes with community support.', image: 'group-mood.svg', facilitator: 'Dr. Salma Youssef', credential: 'Psychiatrist · fictional', day: 'Sunday', time: '8:00 PM', duration: '75 min', language: 'Arabic', format: 'Online', type: 'Professionally facilitated', price: 320, seats: 2, capacity: 8, status: 'Limited places', level: 'Guided support', featured: true },
    { id: 'neuro', name: 'Neurodivergent Adults', category: 'Neurodiversity', subtitle: 'Connect around shared experiences, routines, and practical strategies.', image: 'group-neuro.svg', facilitator: 'Omar Farouk', credential: 'Psychologist · fictional', day: 'Monday', time: '7:30 PM', duration: '60 min', language: 'English', format: 'Online', type: 'Psychoeducation', price: 250, seats: 4, capacity: 8, status: 'Open for requests', level: 'Learning circle', featured: false },
    { id: 'young', name: 'Young Adults Circle', category: 'Life stages', subtitle: 'A welcoming place to discuss change, identity, and everyday challenges.', image: 'group-young.svg', facilitator: 'Nour Hafez', credential: 'Group facilitator · fictional', day: 'Wednesday', time: '7:00 PM', duration: '60 min', language: 'Arabic', format: 'Online', type: 'Moderated peer support', price: 100, seats: 6, capacity: 12, status: 'Open for requests', level: 'Peer support', featured: false },
    { id: 'emotion', name: 'Emotional Regulation Lab', category: 'Skills', subtitle: 'Practice accessible skills for responding to difficult feelings.', image: 'group-emotion.svg', facilitator: 'Dr. Hana Adel', credential: 'Clinical psychologist · fictional', day: 'Saturday', time: '5:00 PM', duration: '75 min', language: 'English', format: 'Online', type: 'Psychoeducation', price: 270, seats: 1, capacity: 8, status: 'Waitlist', level: 'Learning circle', featured: false },
    { id: 'family', name: 'Understanding Mental Health', category: 'Families', subtitle: 'A psychoeducational space for families and close supporters.', image: 'group-family.svg', facilitator: 'Dr. Rania Samir', credential: 'Psychiatrist · fictional', day: 'Friday', time: '5:30 PM', duration: '60 min', language: 'Arabic', format: 'Online', type: 'Psychoeducation', price: 240, seats: 3, capacity: 10, status: 'Open for requests', level: 'Learning circle', featured: false },
    { id: 'work', name: 'Workplace Wellbeing', category: 'Stress', subtitle: 'Reflect on sustainable routines and emotional wellbeing at work.', image: 'group-work.svg', facilitator: 'Karim El Sayed', credential: 'Psychologist · fictional', day: 'Monday', time: '6:00 PM', duration: '60 min', language: 'English', format: 'Online', type: 'Professionally facilitated', price: 250, seats: 4, capacity: 10, status: 'Open for requests', level: 'Guided support', featured: false }
  ],
  resources: [
    { id:'r1', category:'Guide', time:'6 min read', title:'Finding the right kind of support', summary:'Peer communities, psychoeducation, and therapy serve different purposes.', tone:'mint', icon:'compass' },
    { id:'r2', category:'Wellbeing', time:'4 min read', title:'A softer approach to stressful days', summary:'Simple ways to create breathing room when your schedule feels crowded.', tone:'peach', icon:'sun' },
    { id:'r3', category:'Community', time:'5 min read', title:'What to expect in your first group', summary:'From introductions to shared guidelines, here is how a group session works.', tone:'lavender', icon:'users' },
    { id:'r4', category:'Practical tools', time:'7 min read', title:'Setting boundaries with care', summary:'An introductory guide to communicating needs without blame.', tone:'blue', icon:'message-circle' },
    { id:'r5', category:'Safety', time:'3 min read', title:'Privacy in online support groups', summary:'Understand confidentiality commitments and the limits of group privacy.', tone:'mint', icon:'shield' },
    { id:'r6', category:'Learning', time:'5 min read', title:'The difference between support and treatment', summary:'A clear overview of when a group is supportive and when clinical care may be needed.', tone:'peach', icon:'book-open' }
  ],
  faqs: [
    ['Is Wasl the same as therapy?', 'No. Wasl proposes different service categories: facilitated support, psychoeducational groups and, only where appropriately licensed and governed, clinical group psychotherapy. The static demo does not provide healthcare.'],
    ['Will the people in my group know my details?', 'In a future service, group members would see only the details needed for participation. Confidentiality rules, informed consent and clearly explained privacy limitations would apply. Group confidentiality cannot be absolutely guaranteed.'],
    ['Who facilitates the groups?', 'Groups are designed to be moderated by appropriately trained professionals or supervised peer facilitators, depending on the service category. All names and credentials shown here are fictional demo records.'],
    ['How would group matching work?', 'A participant would share preferences and complete a suitability process. Some groups would require a qualified professional to assess whether participation is appropriate. This prototype never assesses or diagnoses anyone.'],
    ['Can I join from anywhere?', 'The concept is online-first, but actual participation may depend on professional licensing, local rules, service availability and emergency support arrangements.'],
    ['What if I need urgent help?', 'Wasl is not an emergency or crisis service. If there is immediate danger, contact local emergency services or a trusted local healthcare provider.'],
    ['Can I use the demo without an account?', 'Yes. Select “Explore demo” or use the role switcher. All example records, dates, and numbers are fictional. No account or payment is created.'],
    ['Are payments real?', 'No. All prices are hypothetical examples in Egyptian pounds and all checkout or booking interactions are simulated.']
  ],
  notifications: [
    { id:1, title:'A group session is on your calendar', description:'Anxiety & Overthinking · Tue, 7:00 PM', time:'Today', icon:'calendar' },
    { id:2, title:'New resource available', description:'Finding the right kind of support', time:'Yesterday', icon:'book-open' },
    { id:3, title:'Group information updated', description:'Stress & Burnout Circle', time:'2 days ago', icon:'users' }
  ],
  sessions: [
    { id:'S-201', group:'Anxiety & Overthinking', facilitator:'Dr. Lina Mansour', day:'Tuesday', date:'24 Nov 2026', time:'7:00 PM', people:'6 / 9', status:'Scheduled' },
    { id:'S-202', group:'Stress & Burnout Circle', facilitator:'Mariam Nabil', day:'Thursday', date:'26 Nov 2026', time:'6:30 PM', people:'5 / 10', status:'Scheduled' },
    { id:'S-203', group:'Mood & Resilience', facilitator:'Dr. Salma Youssef', day:'Sunday', date:'29 Nov 2026', time:'8:00 PM', people:'6 / 8', status:'Scheduled' },
    { id:'S-204', group:'Young Adults Circle', facilitator:'Nour Hafez', day:'Wednesday', date:'25 Nov 2026', time:'7:00 PM', people:'6 / 12', status:'Scheduled' }
  ],
  professionals: [
    { name:'Dr. Lina Mansour', initials:'LM', area:'Clinical psychology', groups:3, status:'Verified (demo)', color:'mint' },
    { name:'Dr. Salma Youssef', initials:'SY', area:'Psychiatry', groups:2, status:'Verified (demo)', color:'lavender' },
    { name:'Mariam Nabil', initials:'MN', area:'Psychology', groups:2, status:'Review due', color:'peach' },
    { name:'Omar Farouk', initials:'OF', area:'Psychology', groups:1, status:'Verified (demo)', color:'blue' }
  ],
  users: [
    { name:'Sam A.', initials:'SA', joined:'12 Nov 2026', plan:'Circle', status:'Active', color:'mint' },
    { name:'Nadia K.', initials:'NK', joined:'08 Nov 2026', plan:'Free', status:'Active', color:'peach' },
    { name:'Youssef M.', initials:'YM', joined:'04 Nov 2026', plan:'Session', status:'Pending review', color:'blue' },
    { name:'Layla S.', initials:'LS', joined:'30 Oct 2026', plan:'Circle', status:'Active', color:'lavender' }
  ],
  tickets: [
    { id:'SUP-104', issue:'Changing a group time', priority:'Medium', owner:'Operations', status:'In progress' },
    { id:'SUP-103', issue:'Payment demo question', priority:'Low', owner:'Support', status:'Resolved' },
    { id:'SUP-102', issue:'Accessibility feedback', priority:'Medium', owner:'Product', status:'Open' },
    { id:'SUP-101', issue:'Session reminder question', priority:'Low', owner:'Support', status:'Resolved' }
  ],
  safety: [
    { id:'CL-021', type:'Moderation review', severity:'Low', status:'Under review', owner:'Ruby', updated:'Today' },
    { id:'CL-019', type:'Suitability follow-up', severity:'Medium', status:'Clinician assigned', owner:'Clinical team', updated:'Yesterday' },
    { id:'CL-016', type:'Protocol clarification', severity:'Low', status:'Closed', owner:'Quality', updated:'19 Nov' }
  ],
  screening: [
    { id:'SCR-208', kind:'Group suitability review', submitted:'Today', assigned:'Dr. Lina Mansour', status:'Pending' },
    { id:'SCR-207', kind:'Programme appropriateness', submitted:'Yesterday', assigned:'Dr. Salma Youssef', status:'In review' },
    { id:'SCR-206', kind:'Follow-up needed', submitted:'20 Nov', assigned:'Mariam Nabil', status:'Reviewed' }
  ],
  finances: [
    { month:'Jun', revenue:150000, expense:175000 }, {month:'Jul', revenue:185000, expense:188000},
    {month:'Aug', revenue:221000, expense:201000}, {month:'Sep', revenue:269000, expense:219000},
    {month:'Oct', revenue:318000, expense:246000}, {month:'Nov', revenue:374000, expense:269000}
  ],
  acquisition: [
    { name:'Organic & content', value:39 }, { name:'Referrals', value:28 }, { name:'Partnerships', value:19 }, { name:'Paid campaigns', value:14 }
  ],
  roadmap: [
    { id:'ENG-18', title:'Group booking experience', status:'In progress', owner:'Frontend', progress:78 },
    { id:'ENG-22', title:'Role permissions design', status:'In review', owner:'Platform', progress:88 },
    { id:'ENG-31', title:'Video provider evaluation', status:'Planned', owner:'Integrations', progress:32 },
    { id:'ENG-35', title:'Bilingual RTL experience', status:'Planned', owner:'Product', progress:20 },
    { id:'ENG-40', title:'Threat modelling workshop', status:'In progress', owner:'Security', progress:60 }
  ],
  integrations: [
    { name:'Email notifications', environment:'Sandbox only', status:'Not connected' },
    { name:'Video sessions', environment:'Evaluation', status:'Not connected' },
    { name:'Payment gateway', environment:'Simulation', status:'Not connected' },
    { name:'Identity / SSO', environment:'Planned', status:'Not connected' }
  ],
  partnerships: [
    { name:'University wellbeing pilot', type:'Education', stage:'Discovery', owner:'Marco' },
    { name:'Private clinic referral network', type:'Healthcare', stage:'Concept proposal', owner:'Marco & Ruby' },
    { name:'Employer wellbeing offering', type:'Corporate', stage:'Research', owner:'Commercial' }
  ],
  training: [
    { title:'Digital group facilitation', audience:'Professionals', duration:'6 hours', state:'Curriculum draft' },
    { title:'Safety escalation tabletop', audience:'Clinical & support', duration:'4 hours', state:'Pending review' },
    { title:'Data handling and access', audience:'All staff', duration:'3 hours', state:'Planned' },
    { title:'Accessible and inclusive support', audience:'All staff', duration:'2 hours', state:'Curriculum draft' }
  ]
};
