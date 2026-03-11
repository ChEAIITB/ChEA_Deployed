import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════
   DESIGN DIRECTION: Deep Bioluminescent Green
   - Midnight black base (#050d07)
   - Neon jade / emerald accents (#00ff87, #00d96e)
   - Liquid blob morphing borders via SVG filter
   - Glass-liquid cards with shimmer sweep
   - Organic border-radius keyframe animation
   - Glowing particle dust in background
══════════════════════════════════════════════ */

const YEARS = ["2025", "2023", "2022", "2021", "2020", "Pre-2020"];

const BLOG_CARDS = [
  { id:"internship-blogs", title:"Internship\nBlogs",  subtitle:"Your guide for a perfect start on the journey of internships",                      icon:"◈", tag:"INTERNSHIP"    },
  { id:"placement-blogs",  title:"Placement\nBlogs",   subtitle:"Your guide for a perfect start on the journey of placements",                        icon:"⬡", tag:"PLACEMENT"     },
  { id:"internera",        title:"InternEra",          subtitle:"Special blog series for CHE'25 by the CHE'24 batch covering all major profiles",      icon:"◉", tag:"2ND YEARS"     },
  { id:"apping-guide",     title:"Apping\nGuide",      subtitle:"The one-stop solution to all your apping doubts",                                    icon:"⬢", tag:"APP-IN"        },
  { id:"icy-didnt-know",   title:"ICY Didn't\nKnow",  subtitle:"In Case You Didn't Know – bite-sized facts & insights",                              icon:"◆", tag:"DID YOU KNOW"  },
  { id:"then-vs-now",      title:"Then Vs\nNow",       subtitle:"Let's hear what respected alumni of the institute have to say",                      icon:"◎", tag:"ALUMNI"        },
  { id:"semex",            title:"SemEx",              subtitle:"Semester exchange experiences from students across the globe",                       icon:"⬟", tag:"SEM EXCHANGE"  },
  { id:"coming-soon",      title:"Stay\nTuned !!",     subtitle:"Something exciting is on the way. Watch this space!",                                icon:"✦", tag:"SOON", comingSoon:true },
];

const DATA = {
  "internship-blogs": {
    "2025": [
      { id:"anushka-25", name:"Anushka Khowala",    company:"Hindustan Unilever",   image:"assets/blogs/internship-blogs/2025/anushka.jpg",    domain:"R&D / FMCG",
        qna:[
          {q:"What motivated you to apply to HUL?",          a:"I was curious about how research works in the FMCG space and wanted to explore that side of things beyond textbooks."},
          {q:"What was the recruitment process like?",        a:"We applied via the IAF with resumes and a form. Almost everyone got selected for an aptitude + logical-reasoning test plus a HireVue interview, then ~10 were shortlisted for interviews."},
          {q:"How was your interview?",                       a:"Mostly HR-based with some technical questions on one of my core projects. Many were waitlisted but the list never opened."},
          {q:"How was the work culture at HUL?",             a:"Very collaborative and open. My mentor guided me closely throughout and the team was genuinely welcoming."},
          {q:"What did you actually work on?",               a:"Product formulation in the R&D domain — incredibly hands-on with exposure to the full research workflow."},
          {q:"Tips for juniors applying to FMCG?",           a:"Know your core projects inside-out, and show genuine curiosity about consumer products and market trends."},
        ]},
      { id:"prashabdhi-25", name:"Prashabdhi Athawale", company:"Hindustan Unilever", image:"assets/blogs/internship-blogs/2025/prashabdhi.jpg", domain:"R&D / FMCG",
        qna:[
          {q:"How did you prepare for HUL?",                 a:"I brushed up core ChE concepts and practised case studies to prepare for both business and technical questions."},
          {q:"What was the hardest part?",                   a:"Translating lab-scale findings to scalable solutions — it demanded a lot of creative problem-solving."},
          {q:"What did you gain?",                           a:"Practical research skills and a clear sense of how corporate R&D differs from academic research."},
          {q:"Would you recommend this internship?",         a:"Absolutely — if you're interested in FMCG and R&D, this is one of the best platforms to grow professionally."},
        ]},
      { id:"mohit-25", name:"Mohit", company:"Deutsche Bank", image:"assets/blogs/internship-blogs/2025/mohit.jpg", domain:"Finance / Global Markets",
        qna:[
          {q:"Why Deutsche Bank?",                           a:"Finance always intrigued me and DB offered a structured programme with great mentorship and global markets exposure."},
          {q:"How was the selection process?",               a:"Aptitude test, a technical interview on finance fundamentals, and a final HR round."},
          {q:"What was your role?",                          a:"Global markets division — data analysis and preparing reports for senior analysts."},
          {q:"Advice for finance internship seekers?",       a:"Build a strong base in financial modelling and stay current with market trends. Genuine interest is noticed immediately."},
          {q:"How did it shape your career plans?",          a:"It confirmed my interest in finance and pushed me to explore investment banking and quantitative finance."},
        ]},
      { id:"radhika-25", name:"Radhika Goyal", company:"Procter & Gamble", image:"assets/blogs/internship-blogs/2025/radhika.jpg", domain:"Supply Chain",
        qna:[
          {q:"What attracted you to P&G?",                  a:"P&G's reputation for developing leaders and their iconic brand portfolio made it an obvious choice."},
          {q:"Describe the recruitment process.",            a:"Online test, group exercise, and two interview rounds focused heavily on leadership potential."},
          {q:"What was your project?",                       a:"Supply-chain process optimisation — data analysis and cross-functional collaboration across multiple teams."},
          {q:"Key skills developed?",                        a:"Analytical thinking, stakeholder communication, and project management."},
          {q:"Best part of interning at P&G?",              a:"The people and the structured mentorship programme — outstanding on both counts."},
        ]},
    ],
    "2023": [
      { id:"kartik-23", name:"Kartik Srivastava", company:"Bain & Company", image:"assets/blogs/internship-blogs/2023/kartik.jpg", domain:"Consulting",
        qna:[
          {q:"How did you get into consulting from ChE?",    a:"I leveraged my analytical problem-solving background and spent 4 months on intensive case prep."},
          {q:"How many rounds did Bain have?",               a:"Two written case rounds, then three personal interview rounds — two fit rounds and one final case."},
          {q:"What did you work on at Bain?",                a:"A market-entry strategy for a consumer goods client — incredibly fast-paced and stimulating."},
          {q:"Tips for consulting aspirants?",               a:"Start case prep early, find a practice partner, and never underestimate the behavioural rounds."},
          {q:"Was the internship what you expected?",        a:"It exceeded expectations. The quality of teammates and pace of learning was unlike anything in academics."},
        ]},
      { id:"neha-23", name:"Neha Jain", company:"Shell India", image:"assets/blogs/internship-blogs/2023/neha.jpg", domain:"Process Engineering",
        qna:[
          {q:"Why a core internship?",                       a:"I wanted to validate whether I genuinely enjoyed ChE before pivoting — Shell gave me that clarity."},
          {q:"What was the selection process?",              a:"Resume shortlist → technical online test → two technical interview rounds."},
          {q:"What was your project?",                       a:"Process optimisation for a distillation unit with recommendations that were actually implemented."},
          {q:"Most memorable moment?",                       a:"Presenting to senior engineers and having them take my recommendations seriously — incredibly validating."},
        ]},
    ],
    "2022": [
      { id:"aditya-22", name:"Aditya Verma", company:"Goldman Sachs", image:"assets/blogs/internship-blogs/2022/aditya.jpg", domain:"Finance / Tech",
        qna:[
          {q:"How did you land Goldman Sachs?",              a:"Strong competitive-programming background, solid DS&A prep, and clear interest in fintech."},
          {q:"How intense was the prep?",                    a:"Very — 300+ LeetCode problems and a month of mock interviews. The bar is extremely high."},
          {q:"What did you work on?",                        a:"An internal tool for the risk analytics team that automated a previously manual reporting process."},
          {q:"Work culture at GS?",                         a:"Fast-paced and high-performance. Mentors were genuinely invested in intern growth."},
        ]},
    ],
    "2021": [
      { id:"simran-21", name:"Simran Kaur", company:"Asian Paints", image:"assets/blogs/internship-blogs/2021/simran.jpg", domain:"R&D / Coatings",
        qna:[
          {q:"How was interning during COVID?",              a:"Hybrid mode — some WFH, some lab. The company adapted well and mentorship remained strong."},
          {q:"What was the project?",                        a:"Developing eco-friendly coating formulations with reduced VOC content — highly impactful research."},
          {q:"Any challenges?",                              a:"Remote lab access was limiting, but it taught me to be resourceful with limited data."},
        ]},
    ],
    "2020": [
      { id:"rohan-20", name:"Rohan Desai", company:"Reliance Industries", image:"assets/blogs/internship-blogs/2020/rohan.jpg", domain:"Petrochemicals",
        qna:[
          {q:"What was it like interning at RIL?",           a:"Incredible exposure to large-scale industrial operations. The sheer scale of Jamnagar is awe-inspiring."},
          {q:"What project did you work on?",                a:"Process safety analysis for one of the crackers — reviewing SIL ratings and proposing instrument upgrades."},
          {q:"Would you recommend it?",                      a:"Absolutely, especially for core exposure. The learning curve is steep but very rewarding."},
        ]},
    ],
    "Pre-2020": [
      { id:"meera-pre", name:"Meera Nambiar", company:"ITC Limited", image:"assets/blogs/internship-blogs/pre2020/meera.jpg", domain:"FMCG / R&D",
        qna:[
          {q:"How different was the landscape?",             a:"Fewer companies came for internships — most were self-arranged or through contacts."},
          {q:"Experience at ITC?",                           a:"Fascinating — agri-processing and packaging innovation. Very different from today's data-heavy roles."},
          {q:"Advice for current students?",                 a:"Take every internship seriously. Even a non-dream role teaches you something crucial about yourself."},
        ]},
    ],
  },
  "placement-blogs": {
    "2025": [
      { id:"aryan-p-25", name:"Aryan Sharma", company:"McKinsey & Company", image:"assets/blogs/placement-blogs/2025/aryan.jpg", domain:"Consulting",
        qna:[
          {q:"How long did placement prep take?",            a:"About 6 months of serious preparation. Case prep started in 5th semester — I treated it like a second course."},
          {q:"How many rounds did McKinsey have?",           a:"Problem Solving Test → two first-round cases → two final-round interviews with senior partners."},
          {q:"What helped you the most?",                    a:"Peer mock interviews and McKinsey's published case library. Diverse feedback from different interviewers was crucial."},
          {q:"How was the on-campus experience?",            a:"Very structured — McKinsey's team was helpful and the timeline was clearly communicated."},
          {q:"What excites you about the role?",             a:"The breadth of industries and the pace of learning in the first two years."},
        ]},
    ],
    "2023": [
      { id:"divya-p-23", name:"Divya Patel", company:"Boston Consulting Group", image:"assets/blogs/placement-blogs/2023/divya.jpg", domain:"Consulting",
        qna:[
          {q:"What distinguished BCG's process?",            a:"BCG had a written case round in addition to standard interview cases — testing structured thinking under time pressure."},
          {q:"How did you prep for written cases?",          a:"I practised BCG Platinion-style problems and got feedback from alumni who'd been through the same process."},
          {q:"Biggest learning from the placement season?",  a:"Don't over-optimise for a single company. Breadth of preparation gives resilience when things don't go as planned."},
        ]},
    ],
    "2022": [
      { id:"vikram-p-22", name:"Vikram Nair", company:"Amazon", image:"assets/blogs/placement-blogs/2022/vikram.jpg", domain:"Product / Tech",
        qna:[
          {q:"Why Amazon from a ChE background?",            a:"I had built strong programming skills and was genuinely excited about large-scale logistics and supply-chain tech."},
          {q:"What was Amazon's process like?",              a:"Online assessment → two technical rounds → system design → bar raiser focused on leadership principles."},
          {q:"How important are leadership principles?",     a:"Extremely. Prepare STAR-format stories for every principle — they can make or break your interview."},
        ]},
    ],
    "2021": [
      { id:"pooja-p-21", name:"Pooja Singh", company:"TCS Research", image:"assets/blogs/placement-blogs/2021/pooja.jpg", domain:"Research / Analytics",
        qna:[
          {q:"What drew you to TCS Research?",               a:"One of the few roles that explicitly valued a science background. Industrial AI applications aligned perfectly with my interests."},
          {q:"How was the placement process?",               a:"Resume shortlist → written analytics assessment → two interview rounds."},
        ]},
    ],
    "2020": [
      { id:"nikhil-p-20", name:"Nikhil Rao", company:"ExxonMobil", image:"assets/blogs/placement-blogs/2020/nikhil.jpg", domain:"Core Oil & Gas",
        qna:[
          {q:"What was ExxonMobil's process like?",          a:"Very thorough — multiple technical rounds covering all core ChE, plus behavioural rounds assessing cultural fit."},
          {q:"Any prep advice?",                             a:"Revise core subjects thoroughly. Don't neglect process safety and environmental regulations."},
        ]},
    ],
    "Pre-2020": [
      { id:"sonal-p-pre", name:"Sonal Mehta", company:"Hindustan Petroleum", image:"assets/blogs/placement-blogs/pre2020/sonal.jpg", domain:"Core / Refinery",
        qna:[
          {q:"How was the placement scene different?",       a:"Fewer non-core companies visited campus. Finance and consulting were just beginning to recruit from ChE."},
          {q:"Experience at HPCL?",                          a:"Rich operational exposure — I rotated across multiple units in my first year which gave me tremendous breadth."},
        ]},
    ],
  },
  "internera": {
    "2025": [
      { id:"priya-ie-25", name:"Priya Sharma", company:"McKinsey & Company", image:"assets/blogs/internera/2025/priya.jpg", domain:"Consulting",
        qna:[
          {q:"How did you land consulting from ChE?",        a:"Consulting welcomes diverse backgrounds. I focused on case prep and highlighted problem-solving from my research projects."},
          {q:"How intensive is case prep?",                  a:"2–3 cases daily for 3 months. Victor Cheng's resources and campus mock partners were invaluable."},
          {q:"What was the internship like?",                a:"Fast-paced, intellectually stimulating, and collaborative. The learning curve is steep but extremely rewarding."},
          {q:"One thing you wish you knew earlier?",         a:"That networking matters. Connecting with alumni at your target firm before the season gives meaningful insight."},
        ]},
      { id:"rahul-ie-25", name:"Rahul Gupta", company:"SLB (Schlumberger)", image:"assets/blogs/internera/2025/rahul.jpg", domain:"Core / Oilfield",
        qna:[
          {q:"Why SLB?",                                     a:"SLB is the gold standard for oilfield services and I wanted real engineering experience at a global scale."},
          {q:"What was the selection process?",              a:"Resume shortlist → group discussion → technical interview on thermodynamics and fluids."},
          {q:"What did you work on?",                        a:"Drilling-fluid optimisation — analysing rheological properties and recommending formulation changes."},
        ]},
    ],
    "2023": [
      { id:"tanvi-ie-23", name:"Tanvi Agarwal", company:"Deloitte USI", image:"assets/blogs/internera/2023/tanvi.jpg", domain:"Consulting / Analytics",
        qna:[
          {q:"What profile did you intern for at Deloitte?", a:"Business Technology Analyst — bridging client requirements and tech implementation, perfect for my ChE analytical background."},
          {q:"How was the intern experience?",               a:"Very collaborative with real project ownership. I was surprised by how much responsibility interns receive."},
        ]},
    ],
  },
  "apping-guide": {
    "2025": [
      { id:"ishaan-ag-25", name:"Ishaan Chopra", company:"ETH Zürich (Masters)", image:"assets/blogs/apping-guide/2025/ishaan.jpg", domain:"Higher Studies / Europe",
        qna:[
          {q:"Why ETH Zürich?",                              a:"Top-ranked globally for engineering, strong research output, and fully funded options for exceptional applicants."},
          {q:"What is the application process like?",        a:"Competitive — strong GPA, excellent SOP, and strong LoRs from research supervisors are essential."},
          {q:"How should you choose programmes?",            a:"Research the faculty. If no professor's work excites you, reconsider the programme — research fit is critical in Europe."},
          {q:"Tips for the SOP?",                            a:"Be specific and honest. Tell a story with clear motivations, not a re-listing of your CV."},
          {q:"Advice on GRE?",                               a:"Many top European schools no longer require it. Focus energy on research output and strong recommendations instead."},
        ]},
    ],
    "2023": [
      { id:"ananya-ag-23", name:"Ananya Bose", company:"MIT (PhD)", image:"assets/blogs/apping-guide/2023/ananya.jpg", domain:"Higher Studies / USA",
        qna:[
          {q:"How did you approach the US PhD application?", a:"I emailed 30+ professors before applications opened, identified genuine research overlaps, and tailored every SOP to the specific lab."},
          {q:"How important is research experience?",        a:"Extremely — publications or conference presentations are a significant differentiator for top PhD programmes."},
          {q:"How do you handle rejections?",                a:"Expect them. Even the strongest applicants get rejected from top schools. Apply broadly and don't put all eggs in one basket."},
        ]},
    ],
  },
  "icy-didnt-know": {
    "2025": [
      { id:"icy-25", name:"CHEA Editorial Team", company:"IIT Bombay ChE", image:null, domain:"Trivia & Insights",
        qna:[
          {q:"Are ChE graduates among the highest paid at IIT?",      a:"Consistently yes — the median CTC for ChE graduates at IIT Bombay has ranked in the top 3 departments, driven by strong placements in consulting, finance, and FMCG."},
          {q:"What is a SIL rating and why does it matter?",          a:"Safety Integrity Level (SIL) measures the risk-reduction capability of safety instrumented systems. Engineers at refineries must ensure equipment meets prescribed SIL requirements."},
          {q:"What percentage of ChE grads go into core roles?",      a:"Roughly 30–35% opt for core chemical engineering roles. The rest diversify into consulting, finance, data science, and higher studies."},
        ]},
    ],
    "2023": [
      { id:"icy-23", name:"CHEA Editorial Team", company:"IIT Bombay ChE", image:null, domain:"Trivia & Insights",
        qna:[
          {q:"What was the average CTC for CHE'23 batch?",            a:"The average CTC for the 2023 batch was highly competitive, with several students receiving packages north of ₹30 LPA from consulting and finance firms."},
          {q:"Which sectors recruited the most from CHE in 2023?",    a:"Consulting led the pack, followed by finance, core process engineering, and data science."},
        ]},
    ],
  },
  "then-vs-now": {
    "2025": [
      { id:"arjun-tnv-25", name:"Dr. Arjun Nair", company:"Class of 2010 | BASF", image:"assets/blogs/then-vs-now/2025/arjun.jpg", domain:"Alumni",
        qna:[
          {q:"How has the placement scenario changed?",               a:"The breadth of opportunities has expanded dramatically. In our time core and finance were the main avenues. Now students explore consulting, data science, startups and much more."},
          {q:"What skills are timeless for ChE graduates?",           a:"Problem-solving, quantitative thinking, and the ability to work across disciplines."},
          {q:"What would you tell your college self?",                a:"Be curious beyond your coursework. The best opportunities often come from unexpected directions."},
          {q:"How do you view IIT's role in career development?",     a:"The brand opens doors but what keeps them open is the work ethic and intellectual rigour instilled during those four years."},
          {q:"What excites you about the current generation?",        a:"The willingness to explore non-traditional paths. My batch was more risk-averse — today's students back themselves much more boldly."},
        ]},
    ],
    "2020": [
      { id:"sneha-tnv-20", name:"Sneha Kulkarni", company:"Class of 2018 | PM, Google", image:"assets/blogs/then-vs-now/2020/sneha.jpg", domain:"Alumni",
        qna:[
          {q:"How did you transition from ChE to product management?", a:"I did an MBA after 2 years in consulting. The analytical and systems-thinking skills from ChE were a huge asset in PM interviews."},
          {q:"Any regrets about not pursuing a core role?",            a:"None. The diversity of experiences made me a better thinker and more empathetic leader."},
        ]},
    ],
    "Pre-2020": [
      { id:"ravi-tnv-pre", name:"Ravi Krishnamurthy", company:"Class of 2005 | Reliance", image:"assets/blogs/then-vs-now/pre2020/ravi.jpg", domain:"Alumni",
        qna:[
          {q:"What was campus life like in the early 2000s?",         a:"Far fewer distractions but also fewer resources. We had to be creative with what we had — excellent training in hindsight."},
          {q:"How has the curriculum changed?",                       a:"The fundamentals remain the same but the emphasis on data skills and interdisciplinary thinking is much stronger now."},
        ]},
    ],
  },
  "semex": {
    "2025": [
      { id:"dhruv-sx-25", name:"Dhruv Menon", company:"TU Delft, Netherlands", image:"assets/blogs/semex/2025/dhruv.jpg", domain:"Semester Exchange",
        qna:[
          {q:"Why TU Delft?",                                         a:"TU Delft has one of the best ChE programmes globally, especially in sustainable processes and water technology."},
          {q:"How difficult was the application process?",            a:"Relatively straightforward through IITB's exchange office — CGPA cutoff, SOP, and a language certificate."},
          {q:"How different was the academic culture?",               a:"Very project-based and collaborative. The emphasis was on applying concepts rather than theory-heavy exams — a refreshing change."},
          {q:"How was life in the Netherlands?",                      a:"Wonderful — the cycling culture, multicultural student community, and proximity to other European cities made it unforgettable."},
          {q:"Would you recommend a semester exchange?",              a:"100%. The global perspective, network, and personal growth you gain cannot be replicated in any classroom at home."},
        ]},
    ],
    "2023": [
      { id:"ria-sx-23", name:"Ria Joshi", company:"NUS Singapore", image:"assets/blogs/semex/2023/ria.jpg", domain:"Semester Exchange",
        qna:[
          {q:"How was the exchange at NUS?",                          a:"Singapore is incredibly convenient — English-speaking, close to home, and NUS has excellent facilities and faculty."},
          {q:"Did the exchange help your career prospects?",          a:"Definitely. I built connections with students from across Asia and the NUS alumni network has been helpful in my career."},
        ]},
    ],
    "2022": [
      { id:"sai-sx-22", name:"Sai Vardhan", company:"EPFL, Switzerland", image:"assets/blogs/semex/2022/sai.jpg", domain:"Semester Exchange",
        qna:[
          {q:"What attracted you to EPFL?",                          a:"EPFL's cutting-edge research environment and beautiful campus in Lausanne made it a dream destination."},
          {q:"How was the coursework compared to IITB?",             a:"Rigorous but in a different way — more emphasis on collaboration and open-book problem-solving rather than memorisation."},
          {q:"Tips for students planning to apply?",                 a:"Maintain a strong CGPA and reach out to professors whose work interests you — a research internship alongside classes is very feasible."},
        ]},
    ],
  },
};

function getAvailableYears(blogId) {
  const d = DATA[blogId] || {};
  return YEARS.filter(y => d[y] && d[y].length > 0);
}

// ══════════════════════════════════════════════
// LIQUID BLOB SVG filter (feTurbulence distortion)
// ══════════════════════════════════════════════
function LiquidFilter() {
  return (
    <svg style={{ position:"absolute", width:0, height:0 }}>
      <defs>
        <filter id="liquid">
          <feTurbulence type="turbulence" baseFrequency="0.012 0.008" numOctaves="3" seed="5" result="noise">
            <animate attributeName="baseFrequency" values="0.012 0.008;0.016 0.012;0.012 0.008" dur="8s" repeatCount="indefinite"/>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <filter id="liquid-strong">
          <feTurbulence type="turbulence" baseFrequency="0.018 0.012" numOctaves="4" seed="9" result="noise">
            <animate attributeName="baseFrequency" values="0.018 0.012;0.024 0.016;0.018 0.012" dur="6s" repeatCount="indefinite"/>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <filter id="glow-green">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
    </svg>
  );
}

// ══════════════════════════════════════════════
// FLOATING PARTICLE BACKGROUND
// ══════════════════════════════════════════════
function Particles() {
  const particles = Array.from({length: 18}, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    dur: Math.random() * 8 + 6,
    delay: Math.random() * -10,
    opacity: Math.random() * 0.35 + 0.08,
  }));
  return (
    <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position:"absolute",
          left:`${p.x}%`, top:`${p.y}%`,
          width: p.size, height: p.size,
          borderRadius:"50%",
          background:"#00ff87",
          opacity: p.opacity,
          animation:`particleDrift ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
          boxShadow:`0 0 ${p.size*3}px rgba(0,255,135,0.6)`,
        }}/>
      ))}
    </div>
  );
}

// ══════════════════════════════════════════════
// FALLBACK AVATAR
// ══════════════════════════════════════════════
function FallbackAvatar({ name="?", size=80 }) {
  const initials = name.split(" ").filter(Boolean).map(w=>w[0]).join("").slice(0,2).toUpperCase();
  return (
    <div style={{
      width:size, height:size, borderRadius:"50%",
      background:"linear-gradient(135deg,#003d1a,#00a84f)",
      display:"flex", alignItems:"center", justifyContent:"center",
      fontSize:size*0.34, fontWeight:800, color:"#00ff87",
      fontFamily:"'Orbitron',sans-serif", letterSpacing:1, flexShrink:0,
      border:"2px solid rgba(0,255,135,0.4)",
      boxShadow:"0 0 20px rgba(0,255,135,0.25)",
    }}>{initials}</div>
  );
}

function SmartImage({ src, alt, style, fallbackSize }) {
  const [err, setErr] = useState(false);
  if (err || !src) return <FallbackAvatar name={alt} size={fallbackSize||80}/>;
  return <img src={src} alt={alt} style={style} onError={()=>setErr(true)}/>;
}

// ══════════════════════════════════════════════
// LIQUID ICON — morphing blob with symbol
// ══════════════════════════════════════════════
function LiquidIcon({ symbol, size=56, index=0 }) {
  return (
    <div style={{
      width:size, height:size, flexShrink:0,
      display:"flex", alignItems:"center", justifyContent:"center",
      position:"relative",
    }}>
      {/* Morphing blob background */}
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(135deg,#00ff87,#00d96e,#007a3d)",
        borderRadius:"60% 40% 55% 45% / 45% 55% 40% 60%",
        animation:`blobMorph ${4 + index*0.7}s ease-in-out infinite`,
        animationDelay:`${index*0.4}s`,
        boxShadow:"0 0 22px rgba(0,255,135,0.55), inset 0 1px 0 rgba(255,255,255,0.2)",
        filter:"url(#liquid)",
      }}/>
      {/* Shimmer inside blob */}
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(135deg,rgba(255,255,255,0.25) 0%,transparent 50%,rgba(0,255,135,0.1) 100%)",
        borderRadius:"inherit",
        animation:`shimmerSpin ${6+index}s linear infinite`,
      }}/>
      <span style={{
        position:"relative", zIndex:1,
        fontSize:size*0.38, color:"#001a0a",
        filter:"drop-shadow(0 1px 2px rgba(0,255,135,0.5))",
        fontWeight:900, lineHeight:1,
      }}>{symbol}</span>
    </div>
  );
}

// ══════════════════════════════════════════════
// PERSON DETAIL MODAL
// ══════════════════════════════════════════════
function PersonDetail({ person, onBack }) {
  const [activeQ, setActiveQ] = useState(null);
  const [vis, setVis] = useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setVis(true),40); return ()=>clearTimeout(t); },[]);

  return (
    <div onClick={e=>e.target===e.currentTarget&&onBack()} style={{
      position:"fixed", inset:0, zIndex:1000,
      background:"rgba(0,5,2,0.92)",
      display:"flex", alignItems:"center", justifyContent:"center",
      backdropFilter:"blur(18px)", padding:20,
      opacity:vis?1:0, transition:"opacity 0.3s ease",
    }}>
      <div style={{
        background:"linear-gradient(160deg,#050e07 0%,#021005 100%)",
        borderRadius:24, maxWidth:760, width:"100%", maxHeight:"90vh", overflowY:"auto",
        border:"1px solid rgba(0,255,135,0.2)",
        boxShadow:"0 0 60px rgba(0,255,135,0.08), 0 0 120px rgba(0,255,135,0.04)",
        transform:vis?"translateY(0) scale(1)":"translateY(40px) scale(0.94)",
        transition:"transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
        position:"relative", overflow:"hidden",
      }}>
        {/* Top glow strip */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,#00ff87,#00d96e,transparent)", opacity:0.8 }}/>

        {/* Header */}
        <div style={{
          padding:"28px 28px 22px",
          display:"flex", gap:22, alignItems:"center", flexWrap:"wrap",
          borderBottom:"1px solid rgba(0,255,135,0.1)",
          background:"linear-gradient(135deg,rgba(0,255,135,0.04) 0%,transparent 60%)",
        }}>
          <div style={{ position:"relative" }}>
            <div style={{
              width:96, height:96, borderRadius:"50%", overflow:"hidden", flexShrink:0,
              border:"2px solid rgba(0,255,135,0.5)",
              boxShadow:"0 0 24px rgba(0,255,135,0.3)",
              filter:"url(#liquid)",
            }}>
              <SmartImage src={person.image} alt={person.name} fallbackSize={96} style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
            </div>
            <div style={{ position:"absolute", bottom:-3, right:-3, width:24, height:24, borderRadius:"50%", background:"linear-gradient(135deg,#00ff87,#00a84f)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, boxShadow:"0 0 10px rgba(0,255,135,0.6)" }}>✦</div>
          </div>
          <div>
            <div style={{ fontSize:26, fontWeight:800, color:"#e0ffe8", fontFamily:"'Orbitron',sans-serif", letterSpacing:1, textShadow:"0 0 20px rgba(0,255,135,0.3)" }}>{person.name||"Anonymous"}</div>
            <div style={{ color:"#00ff87", fontWeight:600, marginTop:5, fontSize:13 }}>{person.company||"Company not available"}</div>
            <div style={{ display:"flex", gap:7, marginTop:9, flexWrap:"wrap" }}>
              {person.domain&&<span style={{ background:"rgba(0,255,135,0.1)", border:"1px solid rgba(0,255,135,0.3)", borderRadius:20, padding:"2px 11px", fontSize:11, color:"#00d96e" }}>{person.domain}</span>}
              {person.year&&<span style={{ background:"rgba(0,255,135,0.06)", border:"1px solid rgba(0,255,135,0.15)", borderRadius:20, padding:"2px 11px", fontSize:11, color:"rgba(0,255,135,0.6)" }}>Batch {person.year}</span>}
            </div>
          </div>
        </div>

        {/* Q&A Accordion */}
        <div style={{ padding:"20px 26px 26px" }}>
          {(person.qna||[]).length===0 ? (
            <div style={{ textAlign:"center", color:"rgba(0,255,135,0.3)", padding:"40px 0", fontSize:14 }}>No Q&A available yet — check back soon!</div>
          ) : (person.qna||[]).map((item,i)=>(
            <div key={i} style={{
              marginBottom:10, borderRadius:12, overflow:"hidden",
              border:"1px solid rgba(0,255,135,0.12)",
              animation:`fadeSlide 0.4s ease ${i*0.07}s both`,
              transition:"border-color 0.2s",
              ...(activeQ===i ? { borderColor:"rgba(0,255,135,0.3)" } : {}),
            }}>
              <button onClick={()=>setActiveQ(activeQ===i?null:i)} style={{
                width:"100%", background:activeQ===i?"rgba(0,255,135,0.07)":"rgba(0,255,135,0.02)",
                border:"none", padding:"13px 18px", textAlign:"left", cursor:"pointer",
                display:"flex", justifyContent:"space-between", alignItems:"center", gap:10,
                transition:"background 0.25s",
              }}>
                <span style={{ color:activeQ===i?"#00ff87":"#b8d4bc", fontWeight:600, fontSize:13.5, transition:"color 0.2s", fontFamily:"'DM Sans',sans-serif" }}>
                  <span style={{ color:"#00ff87", marginRight:8, fontSize:11, fontFamily:"'Orbitron',sans-serif" }}>Q{i+1}.</span>{item.q}
                </span>
                <span style={{ color:"#00ff87", fontSize:16, transform:activeQ===i?"rotate(180deg)":"rotate(0)", transition:"transform 0.35s cubic-bezier(0.34,1.56,0.64,1)", flexShrink:0 }}>▾</span>
              </button>
              <div style={{ maxHeight:activeQ===i?300:0, overflow:"hidden", transition:"max-height 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
                <div style={{ padding:"12px 18px 16px", color:"rgba(180,220,190,0.75)", fontSize:13.5, lineHeight:1.78, borderTop:"1px solid rgba(0,255,135,0.08)", background:"rgba(0,20,8,0.4)", fontFamily:"'DM Sans',sans-serif" }}>{item.a}</div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={onBack} style={{
          position:"sticky", bottom:0, width:"100%",
          background:"linear-gradient(90deg,#003d1a,#00a84f,#003d1a)",
          border:"none", color:"#e0ffe8", padding:14, fontSize:15,
          fontWeight:700, cursor:"pointer", letterSpacing:2,
          fontFamily:"'Orbitron',sans-serif", fontSize:13,
          borderTop:"1px solid rgba(0,255,135,0.2)",
          transition:"filter 0.2s",
          backgroundSize:"200%",
          animation:"liquidShift 4s linear infinite",
        }} onMouseEnter={e=>e.currentTarget.style.filter="brightness(1.2)"} onMouseLeave={e=>e.currentTarget.style.filter="brightness(1)"}>
          ← BACK TO LIST
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════
// PERSON CARD
// ══════════════════════════════════════════════
function PersonCard({ person, index, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{
      borderRadius:18, overflow:"hidden", cursor:"pointer",
      background:"linear-gradient(160deg,#040e06 0%,#021005 100%)",
      border:`1px solid rgba(0,255,135,${hov?0.5:0.12})`,
      transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      transform:hov?"translateY(-8px) scale(1.03)":"translateY(0) scale(1)",
      boxShadow:hov?"0 0 40px rgba(0,255,135,0.2), 0 16px 40px rgba(0,0,0,0.5)":"0 4px 16px rgba(0,0,0,0.5)",
      animation:`cardIn 0.5s ease ${index*0.09}s both`,
      position:"relative",
    }}>
      {/* Liquid border glow on hover */}
      {hov && <div style={{ position:"absolute", inset:-1, borderRadius:18, background:"linear-gradient(135deg,rgba(0,255,135,0.3),rgba(0,217,110,0.1),rgba(0,255,135,0.3))", backgroundSize:"300%", animation:"liquidShift 3s linear infinite", zIndex:0, filter:"blur(2px)" }}/>}

      <div style={{ position:"relative", zIndex:1, height:148, overflow:"hidden", background:"linear-gradient(135deg,#010d04,#022810)", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <SmartImage src={person.image} alt={person.name} fallbackSize={80} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.45s ease, filter 0.45s ease", transform:hov?"scale(1.1)":"scale(1)", filter:hov?"saturate(1.2) brightness(1.1)":"saturate(0.8) brightness(0.85)" }}/>
        <div style={{ position:"absolute", inset:0, background:hov?"linear-gradient(to top,rgba(0,8,2,0.75) 0%,rgba(0,8,2,0.1) 55%,transparent)":"linear-gradient(to top,rgba(0,8,2,0.9) 0%,transparent 55%)", transition:"all 0.35s" }}/>
        {/* Shimmer sweep on hover */}
        {hov && <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg,transparent 40%,rgba(0,255,135,0.12) 50%,transparent 60%)", animation:"shimmerSweep 1.2s ease forwards" }}/>}
        {person.domain && <div style={{ position:"absolute", top:10, left:10, background:"rgba(0,10,4,0.82)", backdropFilter:"blur(6px)", borderRadius:5, padding:"3px 9px", fontSize:10, color:"#00ff87", fontWeight:700, border:"1px solid rgba(0,255,135,0.2)", fontFamily:"'Orbitron',sans-serif", letterSpacing:0.5 }}>{person.domain}</div>}
        {/* Liquid corner accent */}
        <div style={{ position:"absolute", bottom:0, right:0, width:40, height:40, background:"radial-gradient(circle at 100% 100%,rgba(0,255,135,0.2),transparent 70%)" }}/>
      </div>

      <div style={{ position:"relative", zIndex:1, padding:"12px 14px 14px" }}>
        <div style={{ fontSize:14, fontWeight:700, color:"#d4f5da", marginBottom:3, fontFamily:"'DM Sans',sans-serif" }}>{person.name||"Name N/A"}</div>
        <div style={{ fontSize:11.5, color:"#00d96e", marginBottom:9, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>{person.company||"Company N/A"}</div>
        <div style={{ display:"flex", alignItems:"center", color:"rgba(0,255,135,0.4)", fontSize:11, fontFamily:"'DM Sans',sans-serif" }}>
          <span>{(person.qna||[]).length} Q&As</span>
          <span style={{ color:"#00ff87", marginLeft:"auto", fontSize:16, transform:hov?"translateX(4px)":"translateX(0)", transition:"transform 0.25s", filter:hov?"drop-shadow(0 0 4px rgba(0,255,135,0.8))":"none" }}>{hov?"→":"›"}</span>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════
// PEOPLE GRID VIEW (with Year Tabs)
// ══════════════════════════════════════════════
function PeopleGrid({ blog, onBack, onSelectPerson }) {
  const avail = getAvailableYears(blog.id);
  const [activeYear, setActiveYear] = useState(avail[0]||"2025");
  const [gridKey, setGridKey] = useState(0);
  const [vis, setVis] = useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setVis(true),50); return ()=>clearTimeout(t); },[]);

  const handleYear = y => { setActiveYear(y); setGridKey(k=>k+1); };
  const people = (DATA[blog.id]||{})[activeYear]||[];

  return (
    <div style={{ opacity:vis?1:0, transform:vis?"translateY(0)":"translateY(28px)", transition:"all 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
      {/* Back + title */}
      <div style={{ marginBottom:26, display:"flex", alignItems:"flex-start", gap:16, flexWrap:"wrap" }}>
        <button onClick={onBack} style={{
          background:"rgba(0,255,135,0.07)", border:"1px solid rgba(0,255,135,0.3)", color:"#00ff87",
          padding:"8px 18px", borderRadius:10, cursor:"pointer", fontWeight:700, fontSize:12,
          transition:"all 0.2s", marginTop:6, fontFamily:"'Orbitron',sans-serif", letterSpacing:1,
        }} onMouseEnter={e=>{e.currentTarget.style.background="rgba(0,255,135,0.15)";e.currentTarget.style.boxShadow="0 0 16px rgba(0,255,135,0.2)"}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(0,255,135,0.07)";e.currentTarget.style.boxShadow="none"}}>
          ← BACK
        </button>
        <div>
          <div style={{ fontSize:30, fontWeight:800, color:"#e0ffe8", fontFamily:"'Orbitron',sans-serif", letterSpacing:1, textShadow:"0 0 20px rgba(0,255,135,0.3)" }}>{blog.title.replace("\n"," ")}</div>
          <div style={{ color:"rgba(0,255,135,0.45)", fontSize:13, marginTop:3, fontFamily:"'DM Sans',sans-serif" }}>{blog.subtitle}</div>
        </div>
      </div>

      {/* Year tabs */}
      <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:24 }}>
        {YEARS.map(y=>{
          const has=avail.includes(y), active=activeYear===y;
          return (
            <button key={y} onClick={()=>has&&handleYear(y)} style={{
              padding:"7px 20px", borderRadius:40, cursor:has?"pointer":"not-allowed",
              fontSize:12, fontWeight:700, fontFamily:"'Orbitron',sans-serif", letterSpacing:1.5,
              transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              background:active?"linear-gradient(135deg,#00ff87,#00d96e)":has?"rgba(0,255,135,0.1)":"rgba(0,255,135,0.03)",
              color:active?"#001a0a":has?"#00ff87":"rgba(0,255,135,0.2)",
              border:active?"2px solid #00ff87":has?"2px solid rgba(0,255,135,0.35)":"2px solid rgba(0,255,135,0.08)",
              transform:active?"scale(1.08)":"scale(1)",
              boxShadow:active?"0 0 20px rgba(0,255,135,0.4), 0 0 40px rgba(0,255,135,0.15)":"none",
              opacity:has?1:0.35,
              filter:active?"url(#liquid)":"none",
            }}>{y}</button>
          );
        })}
      </div>

      {/* Count */}
      {people.length>0 && <div style={{ marginBottom:16, color:"rgba(0,255,135,0.35)", fontSize:12, fontFamily:"'Orbitron',sans-serif", letterSpacing:1 }}>{people.length} {people.length===1?"ENTRY":"ENTRIES"} · {activeYear}</div>}

      {/* Grid */}
      {people.length===0 ? (
        <div style={{ textAlign:"center", padding:"65px 36px", background:"rgba(0,255,135,0.02)", borderRadius:20, border:"1px dashed rgba(0,255,135,0.15)" }}>
          <div style={{ fontSize:46, marginBottom:14, filter:"drop-shadow(0 0 12px rgba(0,255,135,0.4))" }}>◈</div>
          <div style={{ color:"#00ff87", fontSize:18, fontWeight:800, fontFamily:"'Orbitron',sans-serif", letterSpacing:2 }}>NO ENTRIES FOR {activeYear}</div>
          <div style={{ color:"rgba(0,255,135,0.35)", marginTop:8, fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>Content for this year isn't available yet. Try another year!</div>
        </div>
      ) : (
        <div key={gridKey} style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))", gap:16 }}>
          {people.map((p,i)=>(
            <PersonCard key={p.id} person={{...p,year:activeYear}} index={i} onClick={()=>onSelectPerson({...p,year:activeYear})}/>
          ))}
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════
// BLOG CARD
// ══════════════════════════════════════════════
function BlogCard({ card, index, onClick }) {
  const [hov, setHov] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(()=>{
    const id = setInterval(()=>setTick(t=>t+1), 50);
    return ()=>clearInterval(id);
  },[]);

  return (
    <div
      onClick={card.comingSoon?undefined:onClick}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        position:"relative", minHeight:200,
        borderRadius:20, overflow:"hidden",
        cursor:card.comingSoon?"default":"pointer",
        animation:`cardIn 0.55s ease ${index*0.07}s both`,
        transition:"transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
        transform:hov&&!card.comingSoon?"translateY(-9px) scale(1.03)":"scale(1)",
        boxShadow:hov&&!card.comingSoon
          ?"0 0 50px rgba(0,255,135,0.25), 0 20px 50px rgba(0,0,0,0.6)"
          :"0 4px 20px rgba(0,0,0,0.5)",
      }}
    >
      {/* Base gradient */}
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(145deg,#030f05 0%,#010d04 50%,#021408 100%)" }}/>

      {/* Liquid border — animated gradient outline */}
      <div style={{
        position:"absolute", inset:0, borderRadius:20,
        background:`conic-gradient(from ${tick*2}deg at 50% 50%, rgba(0,255,135,0.6), rgba(0,100,50,0.1), rgba(0,217,110,0.6), rgba(0,50,25,0.05), rgba(0,255,135,0.6))`,
        padding:1.5,
        WebkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite:"xor",
        maskComposite:"exclude",
        opacity:hov?1:0.4,
        transition:"opacity 0.4s",
        filter:"url(#liquid)",
      }}/>

      {/* Corner liquid blobs */}
      <div style={{ position:"absolute", top:-20, right:-20, width:80, height:80, background:"radial-gradient(circle,rgba(0,255,135,0.18) 0%,transparent 70%)", borderRadius:"50%", animation:"blobPulse 4s ease-in-out infinite", animationDelay:`${index*0.5}s` }}/>
      <div style={{ position:"absolute", bottom:-15, left:-15, width:60, height:60, background:"radial-gradient(circle,rgba(0,217,110,0.12) 0%,transparent 70%)", borderRadius:"50%", animation:"blobPulse 5s ease-in-out infinite", animationDelay:`${index*0.3}s` }}/>

      {/* Inner shimmer on hover */}
      {hov && <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg,transparent 30%,rgba(0,255,135,0.07) 50%,transparent 70%)", animation:"shimmerSweep 0.9s ease forwards" }}/>}

      {/* Content */}
      <div style={{ position:"relative", zIndex:1, padding:20, height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between", minHeight:200 }}>
        {/* Tag */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
          <span style={{
            background:"rgba(0,255,135,0.1)", border:"1px solid rgba(0,255,135,0.3)",
            color:"#00ff87", padding:"3px 10px", borderRadius:5,
            fontSize:9.5, fontWeight:800, letterSpacing:1.5, fontFamily:"'Orbitron',sans-serif",
            boxShadow:hov?"0 0 10px rgba(0,255,135,0.3)":"none", transition:"box-shadow 0.3s",
          }}>{card.tag}</span>
          <LiquidIcon symbol={card.icon} size={48} index={index}/>
        </div>

        {/* Title */}
        <div>
          <div style={{
            fontSize:22, fontWeight:800, color:"#e0ffe8",
            fontFamily:"'Orbitron',sans-serif", letterSpacing:0.5, lineHeight:1.15, marginBottom:7,
            textShadow:hov?"0 0 15px rgba(0,255,135,0.4)":"none", transition:"text-shadow 0.3s",
            whiteSpace:"pre-line",
          }}>{card.title}</div>
          <div style={{ fontSize:11.5, color:"rgba(0,255,135,0.45)", lineHeight:1.55, fontFamily:"'DM Sans',sans-serif" }}>{card.subtitle}</div>
        </div>

        {/* CTA or Coming Soon */}
        {!card.comingSoon ? (
          <div style={{
            marginTop:14, display:"flex", alignItems:"center", gap:6,
            color:"#00ff87", fontSize:12, fontWeight:700,
            fontFamily:"'Orbitron',sans-serif", letterSpacing:1,
            opacity:hov?1:0.5, transform:hov?"translateX(5px)":"translateX(0)", transition:"all 0.25s",
            textShadow:hov?"0 0 10px rgba(0,255,135,0.7)":"none",
          }}>EXPLORE →</div>
        ) : (
          <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,5,2,0.7)", borderRadius:19 }}>
            <span style={{ color:"#00ff87", fontFamily:"'Orbitron',sans-serif", fontSize:15, letterSpacing:4, textShadow:"0 0 20px rgba(0,255,135,0.8)", animation:"liquidGlow 2s ease-in-out infinite" }}>COMING SOON</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════
// ROOT
// ══════════════════════════════════════════════
export default function CheaBlogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div style={{ minHeight:"100vh", background:"#020a04", fontFamily:"'DM Sans',sans-serif", padding:"38px 22px", position:"relative", overflow:"hidden" }}>
      <LiquidFilter/>
      <Particles/>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes blobMorph {
          0%   { border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%; }
          25%  { border-radius: 40% 60% 45% 55% / 55% 45% 60% 40%; }
          50%  { border-radius: 50% 50% 60% 40% / 40% 60% 45% 55%; }
          75%  { border-radius: 45% 55% 40% 60% / 60% 40% 55% 45%; }
          100% { border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%; }
        }
        @keyframes blobPulse {
          0%,100% { transform: scale(1) translateY(0); opacity:0.8; }
          50%      { transform: scale(1.3) translateY(-4px); opacity:1; }
        }
        @keyframes cardIn {
          from { opacity:0; transform:translateY(20px) scale(0.96); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes fadeSlide {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes particleDrift {
          from { transform: translateY(0) translateX(0); }
          to   { transform: translateY(-30px) translateX(15px); }
        }
        @keyframes liquidShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes liquidGlow {
          0%,100% { text-shadow: 0 0 20px rgba(0,255,135,0.8); opacity:0.9; }
          50%      { text-shadow: 0 0 40px rgba(0,255,135,1), 0 0 60px rgba(0,217,110,0.6); opacity:1; }
        }
        @keyframes shimmerSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmerSweep {
          from { transform: translateX(-100%); opacity:0; }
          to   { transform: translateX(100%); opacity:1; }
        }
        @keyframes headerGlow {
          0%,100% { text-shadow: 0 0 30px rgba(0,255,135,0.4); }
          50%      { text-shadow: 0 0 60px rgba(0,255,135,0.7), 0 0 90px rgba(0,217,110,0.3); }
        }
        @keyframes scanLine {
          from { transform: translateY(-100%); }
          to   { transform: translateY(100vh); }
        }
        * { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#010a03; }
        ::-webkit-scrollbar-thumb { background:linear-gradient(#00ff87,#00d96e); border-radius:3px; }
      `}</style>

      {/* Scan line effect */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:"2px", background:"linear-gradient(90deg,transparent,rgba(0,255,135,0.4),transparent)", animation:"scanLine 8s linear infinite", zIndex:0, pointerEvents:"none" }}/>

      {/* Background mesh */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", background:"radial-gradient(ellipse at 20% 50%,rgba(0,60,25,0.15) 0%,transparent 60%), radial-gradient(ellipse at 80% 20%,rgba(0,100,40,0.1) 0%,transparent 50%)" }}/>

      <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>
        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:50 }}>
          <div style={{ fontSize:10, letterSpacing:5, color:"rgba(0,255,135,0.6)", fontWeight:700, marginBottom:10, fontFamily:"'Orbitron',sans-serif", textTransform:"uppercase" }}>
            Chemical Engineering Association · IIT Bombay
          </div>
          <h1 style={{ fontSize:"clamp(36px,7vw,68px)", fontFamily:"'Orbitron',sans-serif", color:"#e0ffe8", letterSpacing:3, lineHeight:1, marginBottom:12, animation:"headerGlow 3s ease-in-out infinite" }}>
            CHEA{" "}
            <span style={{ color:"#00ff87", position:"relative" }}>
              BLOGS
              <span style={{ position:"absolute", bottom:-4, left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,#00ff87,transparent)", borderRadius:1 }}/>
            </span>
          </h1>
          <div style={{ color:"rgba(0,255,135,0.38)", fontSize:14, maxWidth:460, margin:"0 auto", fontFamily:"'DM Sans',sans-serif" }}>
            Stories, insights, and guidance from students who've been there
          </div>
          {/* Liquid divider */}
          <div style={{ width:80, height:3, background:"linear-gradient(90deg,transparent,#00ff87,#00d96e,transparent)", margin:"18px auto 0", borderRadius:2, filter:"url(#glow-green)" }}/>
        </div>

        {/* Content */}
        {!selectedBlog ? (
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(235px,1fr))", gap:18 }}>
            {BLOG_CARDS.map((card,i)=>(
              <BlogCard key={card.id} card={card} index={i} onClick={()=>setSelectedBlog(card)}/>
            ))}
          </div>
        ) : (
          <PeopleGrid blog={selectedBlog} onBack={()=>setSelectedBlog(null)} onSelectPerson={setSelectedPerson}/>
        )}
      </div>

      {selectedPerson && <PersonDetail person={selectedPerson} onBack={()=>setSelectedPerson(null)}/>}
    </div>
  );
}