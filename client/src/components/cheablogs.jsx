import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskRoundIcon as Flask,
  TestTube,
  Beaker,
  Atom,
  BookOpen,
  Users,
  Briefcase,
  GraduationCap,
  Globe,
  Star,
  ChevronDown,
  ArrowLeft,
  X,
} from "lucide-react";
import Anushka from "../assets/blogs/internship/anushka0_25.jpg"
/* ══════════════════════════════════════════════
   COLOR THEME: Matches site — slate-900/emerald-950
   Accents: emerald-400, cyan-400, violet-400, teal-400
══════════════════════════════════════════════ */

const YEARS = ["2025", "2023", "2022", "2021", "2020", "Pre-2020"];

const BLOG_CARDS = [
  { id: "internship-blogs", title: "Internship\nBlogs",   subtitle: "Your guide for a perfect start on the journey of internships",                 icon: Briefcase,     tag: "INTERNSHIP",   color: "from-emerald-500 to-teal-600"   },
  { id: "placement-blogs",  title: "Placement\nBlogs",    subtitle: "Your guide for a perfect start on the journey of placements",                   icon: GraduationCap, tag: "PLACEMENT",    color: "from-cyan-500 to-blue-600"      },
  { id: "internera",        title: "InternEra",           subtitle: "Special blog series for CHE'25 by the CHE'24 batch covering all major profiles", icon: Star,          tag: "2ND YEARS",    color: "from-violet-500 to-purple-600"  },
  { id: "apping-guide",     title: "Apping\nGuide",       subtitle: "The one-stop solution to all your apping doubts",                               icon: Globe,         tag: "APP-IN",       color: "from-teal-500 to-cyan-600"      },
  { id: "icy-didnt-know",   title: "ICY Didn't\nKnow",   subtitle: "In Case You Didn't Know – bite-sized facts & insights",                         icon: Atom,          tag: "DID YOU KNOW", color: "from-emerald-600 to-cyan-700"   },
  { id: "then-vs-now",      title: "Then Vs\nNow",        subtitle: "Let's hear what respected alumni of the institute have to say",                  icon: Users,         tag: "ALUMNI",       color: "from-purple-600 to-pink-700"    },
  { id: "semex",            title: "SemEx",               subtitle: "Semester exchange experiences from students across the globe",                   icon: BookOpen,      tag: "SEM EXCHANGE", color: "from-teal-600 to-emerald-700"   },
  { id: "coming-soon",      title: "Stay\nTuned !!",      subtitle: "Something exciting is on the way. Watch this space!",                           icon: Flask,         tag: "SOON",         color: "from-slate-600 to-slate-700",   comingSoon: true },
];

const DATA = {
  "internship-blogs": {
    "2025": [
      { id:"anushka-25", name:"Anushka Khowala",    company:"Hindustan Unilever",   image:Anushka ,    domain:"R&D / FMCG",
        qna:[
          {q:"Myself",          a:"Hi, I am Anushka Khowala, 4th year student from the Chemical department. I interned in Hindustan Unilever over the summer in the R&D domain."},
          {q:"What was your motivation for the internship and what was the recruitment process like?",        a:"I was curious about how research works in the FMCG space and wanted to explore that side of things. The recruitment process was quite straightforward. We applied for the IAF with our resumes and a form. Almost everyone got selected for a basic aptitude and logical reasoning test alongwith a Hirevue interview. After that, around 10 people were shortlisted for interviews. Many people were waitlisted but they never opened up the waitlist. My interview was mostly HR-based along with some technical questions around one of my core projects."},
          {q:"Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",                       a:"I worked on building an AI tool to assist with surfactant formulation. My main job was to create machine learning models that could predict properties like viscosity and mildness, and then build an interactive assistant using agentic AI. I got to work on everything — data, models, backend, frontend — basically the entire pipeline. I was in touch with many different stakeholders, but was also given a lot of freedom to lead the project and figure out how to make it work."},
          {q:"What were the most exciting aspects of the internship? What were the most challenging aspects?",             a:"The most exciting part was seeing the real impact of my work. I got to demo the tool to senior leaders at HUL and their feedback was super encouraging. It was satisfying to know that something built in just a few weeks could actually be useful in the long run. The biggest challenge was learning everything from scratch — I had no prior experience in ML or agentic AI. But what made it easier was getting to learn directly from experienced people at HUL rather than relying on tutorials or books."},
          {q:"What was the culture like in your office? How did the company treat the interns and what were you provided with?",               a:"I was at the Bangalore R&D centre and honestly, the culture surprised me. I expected a more formal, corporate vibe, but it was actually really warm and welcoming. People were approachable and always happy to help, no matter how senior or busy they were."},
          {q:"What were your key learnings from the internship?",           a:"I got to see how R&D directly helps solve real-world problems and how companies are starting to use AI in a smarter, more integrated way. It also made me more curious about research and innovation as a whole."},
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

// Chemical particle background — matches site style
function ChemicalParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
          style={{ left: `${(i * 17 + 5) % 100}%`, top: `${(i * 13 + 8) % 100}%` }}
          animate={{ y: [0, -25, 0], opacity: [0.1, 0.5, 0.1], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// Fallback avatar
function FallbackAvatar({ name = "?", size = 80 }) {
  const initials = name.split(" ").filter(Boolean).map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="rounded-full bg-gradient-to-br from-emerald-900 to-emerald-700 flex items-center justify-center border-2 border-emerald-400/40 flex-shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.34, fontWeight: 800, color: "#34d399" }}>
      {initials}
    </div>
  );
}

function SmartImage({ src, alt, className, fallbackSize }) {
  const [err, setErr] = useState(false);
  if (err || !src) return <FallbackAvatar name={alt} size={fallbackSize || 80} />;
  return <img src={src} alt={alt} className={className} onError={() => setErr(true)} />;
}

// ══════════════════════════════════════════════
// PERSON DETAIL MODAL
// ══════════════════════════════════════════════
function PersonDetail({ person, onBack }) {
  const [activeQ, setActiveQ] = useState(null);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => e.target === e.currentTarget && onBack()}
    >
      <motion.div
        className="relative bg-slate-900/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-emerald-400/20 shadow-2xl shadow-emerald-400/10"
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Top glow strip */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

        {/* Header */}
        <div className="p-6 border-b border-slate-700/50 flex gap-5 items-center flex-wrap bg-gradient-to-r from-emerald-400/5 to-transparent">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-400/40 shadow-lg shadow-emerald-400/20 flex-shrink-0">
            <SmartImage src={person.image} alt={person.name} className="w-full h-full object-cover" fallbackSize={80} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{person.name || "Anonymous"}</h2>
            <p className="text-emerald-400 font-semibold mt-1">{person.company || "Company N/A"}</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {person.domain && (
                <span className="bg-emerald-400/10 border border-emerald-400/30 rounded-full px-3 py-0.5 text-xs text-emerald-400">
                  {person.domain}
                </span>
              )}
              {person.year && (
                <span className="bg-slate-700/60 border border-slate-600/50 rounded-full px-3 py-0.5 text-xs text-gray-400">
                  Batch {person.year}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Q&A */}
        <div className="p-6 space-y-3">
          {(person.qna || []).length === 0 ? (
            <p className="text-center text-gray-500 py-10">No Q&A available yet.</p>
          ) : (person.qna || []).map((item, i) => (
            <motion.div key={i}
              className={`rounded-xl border overflow-hidden transition-all duration-200 ${activeQ === i ? "border-emerald-400/30" : "border-slate-700/50"}`}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            >
              <button
                onClick={() => setActiveQ(activeQ === i ? null : i)}
                className={`w-full px-5 py-3.5 text-left flex justify-between items-center gap-3 transition-colors duration-200 ${activeQ === i ? "bg-emerald-400/8" : "bg-slate-800/40 hover:bg-slate-800/70"}`}
              >
                <span className="text-sm font-semibold text-gray-200">
                  <span className="text-emerald-400 mr-2 font-mono text-xs">Q{i + 1}.</span>{item.q}
                </span>
                <motion.span animate={{ rotate: activeQ === i ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-emerald-400 flex-shrink-0">
                  <ChevronDown size={16} />
                </motion.span>
              </button>
              <AnimatePresence>
                {activeQ === i && (
                  <motion.div
                    initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 py-4 text-sm text-gray-300 leading-relaxed bg-slate-900/50 border-t border-slate-700/30">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="sticky bottom-0 p-4 bg-slate-900/90 backdrop-blur-sm border-t border-slate-700/50">
          <button
            onClick={onBack}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-400 border border-emerald-400/20 font-semibold text-sm transition-all duration-200"
          >
            <ArrowLeft size={16} /> Back to List
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ══════════════════════════════════════════════
// PERSON CARD
// ══════════════════════════════════════════════
function PersonCard({ person, index, onClick }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -6 }}
    >
      {/* Chemical reaction bg */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5"
        animate={{ opacity: hov ? 1 : 0 }} transition={{ duration: 0.3 }}
      />

      {/* Image */}
      <div className="h-36 overflow-hidden bg-slate-700/30 relative">
        <SmartImage
          src={person.image} alt={person.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110 saturate-[0.8] group-hover:saturate-100"
          fallbackSize={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        {person.domain && (
          <div className="absolute top-2 left-2 bg-slate-900/70 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs text-emerald-400 border border-emerald-400/20 font-mono">
            {person.domain}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors duration-200 truncate">{person.name || "Name N/A"}</p>
        <p className="text-emerald-400 text-xs font-semibold mt-0.5 truncate">{person.company || "Company N/A"}</p>
        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
          <span>{(person.qna || []).length} Q&As</span>
          <motion.span
            className="text-emerald-400 text-base"
            animate={{ x: hov ? 3 : 0 }} transition={{ duration: 0.2 }}
          >›</motion.span>
        </div>
      </div>
    </motion.div>
  );
}

// ══════════════════════════════════════════════
// PEOPLE GRID VIEW
// ══════════════════════════════════════════════
function PeopleGrid({ blog, onBack, onSelectPerson }) {
  const avail = getAvailableYears(blog.id);
  const [activeYear, setActiveYear] = useState(avail[0] || "2025");
  const [gridKey, setGridKey] = useState(0);

  const handleYear = y => { setActiveYear(y); setGridKey(k => k + 1); };
  const people = (DATA[blog.id] || {})[activeYear] || [];

  const BlogIcon = blog.icon;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* Back + title */}
      <div className="mb-8 flex items-start gap-4 flex-wrap">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mt-1 px-4 py-2 bg-slate-800/50 hover:bg-emerald-400/10 border border-slate-700/50 hover:border-emerald-400/30 rounded-xl text-emerald-400 text-xs font-semibold transition-all duration-200"
        >
          <ArrowLeft size={14} /> Back
        </button>
        <div>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl bg-gradient-to-br ${blog.color} shadow-lg`}>
              <BlogIcon size={20} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">{blog.title.replace("\n", " ")}</h2>
          </div>
          <p className="text-gray-400 text-sm mt-1 ml-11">{blog.subtitle}</p>
        </div>
      </div>

      {/* Year tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {YEARS.map(y => {
          const has = avail.includes(y), active = activeYear === y;
          return (
            <button key={y} onClick={() => has && handleYear(y)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 ${
                active
                  ? "bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-400/30"
                  : has
                    ? "bg-slate-800/60 text-emerald-400 border border-emerald-400/30 hover:bg-emerald-400/10"
                    : "bg-slate-800/30 text-gray-600 border border-slate-700/30 cursor-not-allowed"
              }`}
            >{y}</button>
          );
        })}
      </div>

      {/* Count */}
      {people.length > 0 && (
        <p className="text-xs text-gray-500 font-mono mb-4 tracking-widest uppercase">
          {people.length} {people.length === 1 ? "Entry" : "Entries"} · {activeYear}
        </p>
      )}

      {/* Grid */}
      {people.length === 0 ? (
        <motion.div
          className="text-center py-16 bg-slate-800/20 rounded-2xl border border-dashed border-slate-700/40"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
          <Beaker size={40} className="text-emerald-400/30 mx-auto mb-4" />
          <p className="text-emerald-400 font-bold text-lg tracking-wider">No entries for {activeYear}</p>
          <p className="text-gray-500 text-sm mt-2">Try selecting another year above.</p>
        </motion.div>
      ) : (
        <div key={gridKey} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {people.map((p, i) => (
            <PersonCard key={p.id} person={{ ...p, year: activeYear }} index={i} onClick={() => onSelectPerson({ ...p, year: activeYear })} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ══════════════════════════════════════════════
// BLOG CARD
// ══════════════════════════════════════════════
function BlogCard({ card, index, onClick }) {
  const [hov, setHov] = useState(false);
  const CardIcon = card.icon;

  return (
    <motion.div
      onClick={card.comingSoon ? undefined : onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`relative rounded-2xl overflow-hidden border transition-all duration-300 min-h-[200px] ${
        card.comingSoon
          ? "border-slate-700/30 cursor-default"
          : "border-slate-700/50 hover:border-emerald-400/30 cursor-pointer"
      } bg-slate-800/50 backdrop-blur-sm`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={!card.comingSoon ? { scale: 1.03, y: -6 } : {}}
    >
      {/* Hover glow bg */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5"
        animate={{ opacity: hov && !card.comingSoon ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${card.color} opacity-10 rounded-bl-full`} />

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col h-full min-h-[200px]">
        {/* Tag + icon */}
        <div className="flex items-start justify-between mb-3">
          <span className="bg-emerald-400/10 border border-emerald-400/25 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-widest">
            {card.tag}
          </span>
          <motion.div
            className={`p-2.5 rounded-xl bg-gradient-to-br ${card.color} shadow-lg`}
            animate={{ rotate: hov && !card.comingSoon ? [0, 8, -8, 0] : 0 }}
            transition={{ duration: 0.6 }}
          >
            <CardIcon size={20} className="text-white" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-extrabold leading-tight mb-2 whitespace-pre-line transition-colors duration-200 ${hov && !card.comingSoon ? "text-emerald-400" : "text-white"}`}>
          {card.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-gray-400 leading-relaxed flex-1">{card.subtitle}</p>

        {/* CTA */}
        {!card.comingSoon ? (
          <motion.div
            className="mt-4 flex items-center gap-1.5 text-emerald-400 text-xs font-bold tracking-wider"
            animate={{ x: hov ? 4 : 0, opacity: hov ? 1 : 0.5 }}
            transition={{ duration: 0.2 }}
          >
            Explore →
          </motion.div>
        ) : (
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px] rounded-2xl flex items-center justify-center">
            <span className="text-emerald-400 font-bold text-sm tracking-[0.25em]">COMING SOON</span>
          </div>
        )}
      </div>

      {/* Bottom glow on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
        animate={{ opacity: hov && !card.comingSoon ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// ══════════════════════════════════════════════
// ROOT
// ══════════════════════════════════════════════
export default function CheaBlogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white relative overflow-hidden">
      {/* Chemical particles — same as rest of site */}
      <ChemicalParticles />

      {/* Chemical formula side decorations — same as rest of site */}
      {["left", "right"].map(side => (
        <div key={side} className={`absolute ${side}-4 top-0 bottom-0 flex flex-col justify-around z-0 pointer-events-none`}>
          {["H₂SO₄", "NaOH", "C₆H₁₂O₆", "NH₃", "CO₂", "H₂O"].map((f, i) => (
            <motion.div key={i} className="text-emerald-300/25 text-sm font-mono font-bold"
              animate={{ opacity: [0.15, 0.45, 0.15], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >{f}</motion.div>
          ))}
        </div>
      ))}

      {/* Top border — same as rest of site */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] text-emerald-400/60 uppercase mb-3">
            Chemical Engineering Association · IIT Bombay
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
              <Atom size={36} className="text-emerald-400" />
            </motion.div>
            <h1 className="text-5xl lg:text-6xl font-black">
              ChEA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                BLOGS
              </span>
            </h1>
            <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
              <BookOpen size={36} className="text-cyan-400" />
            </motion.div>
          </div>

          <p className="text-gray-300 max-w-xl mx-auto text-base">
            Stories, insights, and guidance from students who've been there
          </p>

          {/* Divider — matches site style */}
          <motion.div
            className="w-20 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent mx-auto mt-6"
            initial={{ width: 0 }} animate={{ width: 80 }} transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {!selectedBlog ? (
            <motion.div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              {BLOG_CARDS.map((card, i) => (
                <BlogCard key={card.id} card={card} index={i} onClick={() => setSelectedBlog(card)} />
              ))}
            </motion.div>
          ) : (
            <motion.div key="people" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <PeopleGrid
                blog={selectedBlog}
                onBack={() => setSelectedBlog(null)}
                onSelectPerson={setSelectedPerson}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom border — matches site */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

      {/* Person detail modal */}
      <AnimatePresence>
        {selectedPerson && (
          <PersonDetail person={selectedPerson} onBack={() => setSelectedPerson(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}