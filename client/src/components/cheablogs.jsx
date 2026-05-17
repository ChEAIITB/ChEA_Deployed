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
import Prash from "../assets/blogs/internship/prash0_25.jpg"
import Mohit from "../assets/blogs/internship/mohit0_25.jpg"
import Radhika from "../assets/blogs/internship/radhika0_25.jpg"
import Utsav from "../assets/blogs/internship/Utsav_jha1_25.jpg"
import Anupam from "../assets/blogs/internship/anupam0_25.jpg"
import Gayatri from "../assets/blogs/internship/gaiyatri0_25.jpg"
import Prashast from "../assets/blogs/internship/prashast0_25.jpg"
import Suranjan from "../assets/blogs/placement/suranjan_lahane.png"
import Agrim from "../assets/blogs/internera/intern_agrim.jpeg"
import Anvita from "../assets/blogs/internera/anvita.png"
import Advait from "../assets/blogs/internera/advait_internera.png"
import Harsh from "../assets/blogs/internera/harsh_jadav.jpeg"
import Gaurav from "../assets/blogs/icydk/gaurav.jpg"
import Alok from "../assets/blogs/icydk/alok.jpg"
import Malavika from "../assets/blogs/icydk/malavika.jpg"
import Anish from "../assets/blogs/icydk/anish.png"

/* ══════════════════════════════════════════════
   COLOR THEME: Matches site — slate-900/emerald-950
   Accents: emerald-400, cyan-400, violet-400, teal-400
══════════════════════════════════════════════ */

const YEARS = ["2025"];

const BLOG_CARDS = [
  { id: "internship-blogs", title: "Internship\nBlogs",   subtitle: "Your guide for a perfect start on the journey of internships",                 icon: Briefcase,     tag: "INTERNSHIP",   color: "from-emerald-500 to-teal-600"   },
  { id: "placement-blogs",  title: "Placement\nBlogs",    subtitle: "Your guide for a perfect start on the journey of placements",                   icon: GraduationCap, tag: "PLACEMENT",    color: "from-cyan-500 to-blue-600"      },
  { id: "internera",        title: "InternEra",           subtitle: "Special blog series for CHE'25 by the CHE'24 batch covering all major profiles", icon: Star,          tag: "2ND YEARS",    color: "from-violet-500 to-purple-600"  },
  // { id: "apping-guide",     title: "Apping\nGuide",       subtitle: "The one-stop solution to all your apping doubts",                               icon: Globe,         tag: "APP-IN",       color: "from-teal-500 to-cyan-600"      },
  { id: "icy-didnt-know",   title: "ICY Didn't\nKnow",   subtitle: "In Case You Didn't Know – bite-sized facts & insights",                         icon: Atom,          tag: "DID YOU KNOW", color: "from-emerald-600 to-cyan-700"   },
  { id: "then-vs-now",      title: "Then Vs\nNow",        subtitle: "Let's hear what respected alumni of the institute have to say",                  icon: Users,         tag: "ALUMNI",       color: "from-purple-600 to-pink-700"    },
  { id: "semex",            title: "SemEx",               subtitle: "Semester exchange experiences from students across the globe",                   icon: BookOpen,      tag: "SEM EXCHANGE", color: "from-teal-600 to-emerald-700"   },
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
      { id:"prashabdhi-25", name:"Prashabdhi Athawale", company:"Hindustan Unilever", image:Prash, domain:"R&D / FMCG",
        qna:[
          {q:"Myself",                 a:"Heyy all! I’m Prashabdhi, a fourth-year undergraduate from the Chemical Engineering department at IIT Bombay. I recently completed an 8-week internship at Hindustan Unilever Limited (HUL) as a Supply Chain Intern under the Unilever Leadership Internship Program (ULIP). You’ve probably heard of (and used) brands like Taj Mahal Tea, Bru Coffee, Vaseline . Yes, HUL is the FMCG giant behind these household names. So, why did I choose to intern in the FMCG sector? If you're currently debating which domain to explore or whether FMCG is the right fit for you, you're not alone, I had the same questions. In this blog, I’ll take you through my entire journey: from the application and interview process all the way to what it was actually like working at HUL."},
          {q:"What was your motivation for the internship and what was the recruitment process like?",                   a:"So like any other third-year student, I started off by making 3–4 different versions of my resume, tailored for profiles like Product Management, Supply Chain (FMCG), and a few others. At that point, I wasn’t targeting any specific domain. For preparation, I focused on general HR questions, reviewed my resume thoroughly (multiple times!), and gave mock interviews with friends. After getting shortlisted for HUL, I immediately reached out to seniors to understand the next rounds of the process. There were two rounds: one HireVue video interview, and one final HR interview. In the HireVue round, you’re asked a set of questions which appear on the screen, you get 2–3 minutes to prepare, and then you have to record your answer. The questions can range from personality-based to domain-specific. In my case, I was asked something related to the Supply Chain domain. Once you submit your responses, they’re reviewed by the company, and then a final shortlist is released for the interview round. The final interview, in my experience, was pretty chill. It lasted about 30 minutes and was more of a conversation than a typical grilling session. We spoke about my resume, my interests, and why I was excited to work at HUL. They didn’t ask anything too core-chemical specific, but I’d still suggest being ready with 1–2 topics from your core field just in case. Some interviewers do like to go there. The interview isn’t meant to trap you - it’s more of a discussion to understand if you're a good fit for the role, which demands accountability, ownership, leadership, and a quick grasp of the company and its functioning. For the interview, my prep mainly involved going through my resume in depth - every project, internship, and POR I had listed. I also made sure to check out the company’s website and understand their values, especially things like leadership, sustainability, and purpose-driven growth. If you’ve done all this, you’re good to go."},
          {q:"Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",                           a:"I worked in the Supply Chain domain, and my project revolved around energy reduction, cost optimization, and CO2 emission reduction - essentially contributing to HUL’s broader sustainability goals. Each intern is assigned a tutor, buddy, and coach, with the tutor being your main point of contact throughout the internship. In some cases, you might need to reach out to your tutor before the internship begins to understand your project charter, which is usually shared about a week in advance. The internship kicked off with all of us ULIPs bonding over our shared struggles with Mumbai locals. We stayed at the Courtyard Marriott in Andheri for two days of induction. After that, everyone moved to their respective stint locations. Since my posting was at the Mumbai Head Office, I was allotted a guesthouse in Wadala along with other co-interns. After the first day of induction, you get to meet your tutor if they are based in the same Mumbai Head office. The first two weeks are mostly about understanding your project scope, identifying the key stakeholders, and creating a roadmap for execution. HUL really encourages you to think creatively, challenge existing systems, and come up with innovative solutions. The work culture also promotes open communication, so reaching out to anyone, regardless of hierarchy, is welcomed. Being at the Head Office, I often used Microsoft Teams and Outlook to connect with people at various factories and understand the finer details of my project from them. After four weeks, we had a mid-review with our tutors, coaches, and the tutors’ managers. The aim was to assess how well we understood our project, how deeply we had explored the related concepts, and what our plan was for completing it. I was handling three projects simultaneously, which was, not going to lie, a bit hectic, but also incredibly rewarding. I got to explore a wide range of topics and gained diverse insights. I also had the opportunity to visit two factories in Amli and Dapada, and honestly, I had the best time there! My main stakeholders were factory engineers and utility executives, but for one of my projects, I also worked with external stakeholders like TCS, Thermax, Cotopaxi etc. I even visited Thermax to understand their operations better, which added another dimension to my learning. By the seventh week, you’re expected to wrap up your projects and prepare for your final presentation. This is where you present your work to your tutor and other stakeholders. Based on this presentation and overall performance, they decide whether to offer you a Pre Placement Interview (PPI). After that, if you’re selected, there are two rounds of interviews - the first with General Managers of the Supply Chain team, and the second with the Executive Director of Supply Chain. Based on these rounds, the Pre Placement Offers (PPOs) are rolled out. These final rounds are quite selective and are used to filter out candidates."},
          {q:"What were the most exciting aspects of the internship? What were the most challenging aspects?",         a:"One of the things I was most excited about was diving into the world of corporate jargon and systems - understanding how a large company like HUL operates from the inside. But what truly made the experience memorable were the bonds I built with my co-interns. We shared our roadblocks, gave each other updates, and basically lived together for those 8 weeks. From debating over what to eat in the company cafeteria while sticking to our budgets, to taking cabs in the morning and catching locals in the evening to save money (and escape traffic), these small moments became some of my favorite memories from the internship. When it came to the project itself, the excitement grew as it gradually unfolded. In the first week, things might feel a bit fuzzy since you’re still getting used to the environment, the terminologies, and figuring out the exact scope of your project. But as time passes, everything starts falling into place. You begin to understand what you’re really working on, who your key stakeholders are, where you might need to travel, and how you’ll eventually conclude your project. Your tutor plays a crucial role throughout. They guide you not just on the project direction, but also on how to approach problems, what frameworks to use, and how to structure your solutions better. You’re also assigned a coach, you typically meet them two or three times during the internship. But those conversations can be incredibly eye-opening. For me, every meeting with my coach gave me a completely new perspective and pushed me to refine my thinking. It helped me unlock deeper layers of the problem and explore more innovative directions. One thing you should be prepared for: your project goals or deliverables may change midway through the internship. And that’s okay. By then, you’ll already have built a strong foundation, and adapting becomes part of the learning process. HUL really encourages this kind of flexible and solution-driven thinking. It’s about how you continue to communicate, re-evaluate, and align with your stakeholders. In just eight weeks, you’re expected to understand your project, interact with diverse stakeholders, develop solutions, and deliver outcomes. It’s a lot - but it’s also incredibly rewarding. I personally got to apply some core chemical engineering concepts, while also learning about energy efficiency, sustainability practices, and managerial decision-making. It was a perfect blend of my technical background and managerial exposure, and I could see how much the company values accountability, ownership, and initiative. Of course, no internship is without its challenges. Since I was based in the Mumbai Head Office, but my project was deeply factory-oriented, one major roadblock was coordinating with factory personnel - they’re extremely busy, and it’s tough to get hold of them. But with consistent follow-ups and clear communication, I eventually built strong working relationships. Another challenge some interns might face is that tutors can be very busy too. That’s where your own drive to learn comes in. How consistent you are, how proactive you are in communicating, and how eager you are to grow, all of that plays a huge role in making the most out of this internship. Even though the official timings were from 9 to 5, many of us in the Head Office stayed back until 7 or even 8 in the evening because that’s when stakeholders were finally free. But in the end, all those extra hours, challenges, and roadblocks were absolutely worth it. I walked away with a deeper understanding of the company, its people, and its purpose and a lot of personal growth along the way."},
          {q:"What was the culture like in your office? How did the company treat the interns and what were you provided with?",         a:"Since I was based at the Mumbai Head Office, I spent most of my time on the Supply Chain floor and let me tell you, it’s a seriously high-energy space. The people there are constantly busy, working from around 9 AM to 6 PM, often juggling multiple tasks, coordinating not only within the office but also with 27 different factories across the country. It was in this fast-paced environment that I truly understood how demanding and critical supply chain operations are. Supply chain is the heartbeat of factory operations, and witnessing that first-hand was eye-opening. As an intern though, I never felt like I was out of place. In fact, everyone was incredibly welcoming. The moment you introduce yourself as a ULIP intern, people are very kind to help. They’re genuinely interested in your project, and will guide you on whom to reach out to- whether it’s a senior in a factory, someone from your own college, or another stakeholder in the company. My tutor and other stakeholders were extremely supportive. They shared all the data, materials, and context I needed to make progress. Any time I was stuck, I never hesitated to reach out - and I always got help. One of the most wholesome things about the Mumbai office is this little tradition that everyone follows - post-lunch walks. The head office is designed like a modern open mall, with wide hallways, natural light, and little brand stalls like Bru Coffee and Magnum Ice Creams. After lunch, teams casually go for a walk around the building, usually four to five rounds and then head back to work. These small rituals made us interns feel like we were part of something bigger. We weren’t just visitors for eight weeks, we were immersed in the culture, and that made the experience all the more fulfilling."},
          {q:"What were your key learnings from the internship?",         a:"One of my biggest takeaways from the internship was personal growth and self-development. In college, we’re not really used to having a fixed routine but when you’re working at a company like Hindustan Unilever, that changes. You’re expected to stick to a schedule, be accountable, and report your progress regularly to stakeholders. This shift taught me to take ownership of my work, manage my time better, and deliver on deadlines, all while juggling multiple priorities. Over the course of those eight weeks, I developed a genuine drive to understand my project in depth. I found myself diving into research, applying concepts I had learned in my chemical engineering courses, and developing quick problem-solving skills to keep up with the pace. One of my key learnings was the importance of exploring multiple approaches to a problem- the company actively encourages you to think out of the box and propose innovative, practical solutions. Another major learning was the value of open communication. There were many times I didn’t fully understand something and I realized that simply talking to people around me often led to the fastest and most helpful answers. You’re never expected to know everything. Even asking the most basic questions can lead to meaningful insights. Being transparent and communicative with your tutor, stakeholders, and peers was something I learned to prioritize and value. On the technical front, I went from barely knowing how the supply chain works to gaining a comprehensive understanding of how FMCG factories operate - from procurement and production to delivery. I also learned how a massive organization like HUL functions at the head office level, how decisions are made, how cross-functional teams work together, and how structured the internal processes are."},
        ]},
      { id:"mohit-25", name:"Mohit", company:"Deutsche Bank", image:Mohit, domain:"Finance / Global Markets",
        qna:[
          {q:"Myself",                           a:"Hello all, I am Mohit Yadav, pursuing a B.Tech in Chemical Engineering from IIT Bombay with a Minor in Artificial Intelligence and Machine Learning. I recently completed my summer internship at Deutsche Bank as a Software Developer, and the journey was full of learning, growth, and real-world challenges."},
          {q:"What was your motivation for the internship and what was the recruitment process like?",               a:"I was keen on exploring how software development drives innovation and efficiency in the financial world. Deutsche Bank offered to me the perfect platform to apply my technical skills in a high-impact, real-world environment. The recruitment process began with a coding test that included DSA problems and MCQs based on core computer science subjects. The test was followed by three rounds of interviews: Round 1: Technical interview involving data structures, algorithms, and resume discussion Round 2: Professional fit check round to assess how well I would align with the team and work culture Round 3: HR round focused on behavioral questions and long-term aspirations Each round tested different aspects. My advice to juniors would be to just stay confident and focus on showcasing qualities such as problem-solving, clarity of thought, and the willingness to learn."},
          {q:"Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",                          a:"My role was as a Software Developer in the Corporate Bank division at Deutsche Bank Pune, where I worked on developing an internal enterprise platform called ReleasePilot—an AI-powered, centralized release management solution aimed at automating and transforming the highly manual and fragmented enterprise release process. My Role & Responsibilities: As part of the development team, I contributed across the full stack, combining backend automation with frontend design and ML pipeline integration. My key responsibilities included: -implementation of core backend microservices using Python, designed to fetch real-time updates from systems like Jira and internal change management tools. -Development of REST APIs to serve key functionalities like SDLC document generation, audit trail logging, and automated scheduling. -Integration of AI-powered features, such as smart tagging of documents, predictive risk alerts, and dependency mapping."},
          {q:"What were the most exciting aspects of the internship? What were the most challenging aspects?",       a:"In my opinion, the most exciting aspect was the blend of AI, finance and software. The project I worked on combined AI-powered automation with traditional software engineering in a financial domain. I got to explore natural language extraction from emails and auto-tagging of documents, both of which were fun and intellectually stimulating. Most Challenging Aspects: I don't think anything was that difficult in these 2 months. Having said that, coming from a tech background with no prior experience in finance, understanding the domain-specific requirements—especially around SDLC compliance, audit trails, and release governance—was initially tough, though I did get the hang of it eventually."},
          {q:"What was the culture like in your office? How did the company treat the interns and what were you provided with?",          a:"Deutsche Bank truly went above and beyond to ensure that our 2-month internship experience was as smooth and comfortable as possible. From day one, the focus was not only on allowing us to learn but also on making us feel valued and welcomed. We were provided with a one-week stay at the 5-star Hyatt Regency, which made the onboarding phase extremely smooth and luxurious. For the entire duration of the internship, daily cab facilities were arranged for pick-up and drop-off, ensuring convenience and safety. The office environment was vibrant and supportive, with unlimited tea, coffee, and snacks available throughout the day, keeping our energy up. On top of that, we received some amazing intern goodies including a high-end headset, a Deutsche Bank t-shirt and a Laptop Briefcase. The culture was a perfect blend of professionalism and care. Everyone—from managers to full-time employees—was approachable and genuinely interested in helping us grow. The company made sure that even though it was a short two-month stint, we walked away with a meaningful experience both professionally and personally."},
          {q:" What were your key learnings from the internship?",          a:"I learnt that real-world software isn’t just about writing code—it’s about solving actual problems, collaborating with teams, and building things that people can rely on. I also understood how important communication, ownership, and curiosity are in a corporate setup.Most importantly, I came out more confident, both as a developer and as a team player."},
          
        ]},
      { id:"radhika-25", name:"Radhika Goyal", company:"Procter & Gamble", image:Radhika, domain:"Supply Chain",
        qna:[
          {q:"Myself",                  a:"Hi! I’m Radhika, a fourth-year Chemical Engineering student. I hail from Jaipur. I enjoy playing sports, dancing, and travelling whenever I get the chance 😊. I recently completed an eight-week internship at Procter & Gamble in their Supply Chain division. In this blog, I’ll share my experience at P&G, what it was like working there, and the things I learned along the way. I’ll also talk about my overall experience with the intern season—how the process typically works and what my own journey looked like. Whether you're just starting to prep or somewhere in the middle of the chaos, I hope this helps you get a clearer picture of what to expect!"},
          {q:"What was your motivation for the internship and what was the recruitment process like?",            a:"Up until my second year, I actually liked core chemical engineering. In fact, I ended up taking a research project in my 4th semester under a professor whose course I really enjoyed. Soon after, I did an R&D internship at a plant that was related to that project. So, I had a decent amount of exposure to how research in chemical engineering really works—what it looks like in labs and how it translates in industry. Of course, that wasn’t enough for me to understand everything—but, it was enough for me to realize that research wasn’t something I saw myself doing in the long term. Hence, I was left feeling pretty clueless—I didn’t know what path to go down next. So, I started doing what most of us do when we’re lost—I talked to seniors. A lot of them. I asked them about their intern experiences, how they chose their fields, what they liked or regretted. Through all these conversations, I slowly started ruling things out. Consulting felt too hectic for my liking, I didn’t really have a finance background and core no longer appealed to me. I was left with FMCG, which seemed like something I could maybe try. To be honest, at this point, getting an internship felt more important than getting one in my “ideal” field—because I genuinely didn’t know what I liked yet. So, I applied everywhere. P&G was the first company whose process I got involved in. Their selection process had two tests—the PEAK Performance Assessment, which is a situational judgment test focusing on behavioural and work styles, and another interactive one that tested cognitive skills like logical reasoning, numerical aptitude, and memory. To prepare, I followed Bahroz Abbas’s YouTube channel and took notes on all his tips. I also spoke to a lot of seniors to understand all the little tricks and strategies. This was enough to do well. At the same time, consult shortlists were also being released, and there were tests for some companies. I had a decent number of shortlists across consult, FMCG, and finance. I began prepping seriously for consult cases. Those two weeks after getting shortlisted were really hectic—but I genuinely enjoyed the process. I got to interact with a lot of new people and that was pretty exciting. The buddies assigned are actual consultants, with a pretty hectic schedule packed with work and travel. I remember doing cases with them at 2 a.m., sometimes while they were at airports or between client calls. It felt intense, and while I learned a lot, there was a part of me that felt uneasy. Watching their lives up close made me question whether I’d be okay with that kind of work-life balance. But at that point, I didn’t have the luxury to be picky. I wasn’t sure about what I wanted, so I just kept going with the prep, hoping it would eventually lead somewhere. In between all of this, I got the P&G GD shortlist, with just one day to prepare. I went back to the same youtube channel, watched everything I could, and somehow squeezed it in between all the consult prep. The GD was my first professional interview ever, and I remember being super nervous. But, I managed to give it confidently. I got through to the final round interview, which was scheduled for Day 1. After the GD, I doubled down on consult prep again. But even after practicing so many cases, I still didn’t feel confident. And then came D-Day. I remember just running around the LHC the entire time, giving back-to-back interviews. It was honestly really intense and exhausting. But things started going downhill pretty quickly. I got rejected by two MBB firms, and that hit my confidence hard. For the next two interviews, I ended up arriving late, and it felt like the interviewers weren’t even interested—it was more of a formality. By the end of it, I was rejected by all four consult firms I had interviews with that day. I still remember sitting outside LHC, watching everyone go out for lunch, celebrating their offers, and I was just sitting there with this heavy, sinking feeling. It was honestly one of the worst days I’ve ever had. But I didn’t even get the time to process it properly, because I still had P&G left. Coming back from that mess of a day and starting prep for P&G again has to be one of the hardest things I’ve ever done. What really got me through this was the support from my friends and I am really grateful for that. I had one finance interview the next morning, which I wanted to skip in order to focus on P&G but I couldn’t leave it because that would lead to a penalty. So I went, wrapped it up quickly, and came back to prepare for P&G. The final interview at P&G was short—just 15 minutes. They mostly asked me why I wanted to work there. I gave the interview, and from there, all I could do was wait. And thankfully, I got the offer. But with this experience, I’d say, you need a strong support system around you, because when things go wrong—these are the people who’ll pull you out and motivate you to keep going. Because sometimes, you don’t even get the time to process things—you just have to start again, without any guarantee. Looking back, Day 1 felt like everything was falling apart. But now, I genuinely wouldn’t trade that experience for anything. I learned more in those 48 hours than I had in months. I learnt how to stay patient, keep putting in effort, and trust myself. This whole process gave me the confidence that If I could get through something like this once, I could do it again if something went wrong in future."},
          {q:"Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",                       a:"I worked in the operations team of the Baby Care department, which produces Pampers diapers. My project was all about digitising and gamifying the troubleshooting guides used on the production lines. Whenever there’s an unplanned stop, technicians need to follow a set of specific steps, in a particular order, to figure out the root cause and get the line running again. But this process can be pretty tedious and needs a lot of hands-on practice to get right. So, the goal of my project was to make this process smoother—by bridging the capability gap between technicians, helping them become more self-sufficient, and reducing their dependence on technical experts. To do that, I had to make the training process more engaging and interactive. I started by building the entire UI/UX—wireframing the layout, designing the user flow, setting up the scoring logic, and preparing all the backend data. After that, I created a clickable prototype to simulate how the app would actually work. Once everything looked good, I moved on to coding the final application. After building the app, I tested it on the production lines, took feedback from users, made tweaks wherever needed, and scaled it up as much as I could within the time I had. Towards the end, I also worked on a deployment plan and timeline so that P&G could actually roll it out and put it into action."},
          {q:"What were the most exciting aspects of the internship? What were the most challenging aspects?",                        a:"I was in the Babycare department, so I got to see how diapers and pads are actually made firsthand. The process is much more complex than I had imagined, and it made me realize how much detail and precision goes into the everyday products we use at home. One of the most exciting parts of my project was gamifying the training module. To make the experience interactive and engaging, I had to create a dynamic scoring logic for the app, complete with a leaderboard. It was both tricky and fun—especially because I enjoy working with numbers, so figuring out the logic really kept me hooked. The biggest challenge was the technical nature of the project. I’ve never been someone who enjoys coding, and I was expected to build a full training application from scratch, including the backend, UI/UX, and gamification features. I was quite nervous initially and even told my guide and sponsor that I had no prior coding experience. But once I got into the project and started breaking it down, things gradually became manageable. I also reached out to the digital team whenever I got stuck, and surprisingly, I started enjoying the process—it felt rewarding to solve problems in an area I never thought I’d be able to handle. Another challenge was that in the beginning, it was difficult to get people’s time—everyone is quite busy and interns don’t always get immediate attention. But over time, I was able to build a rapport with the technicians and experts. Eventually, I would sit with them while working, and we’d end up chatting, cracking jokes, and discussing random things. That sense of camaraderie made the whole experience much more enjoyable. One of the most difficult parts of the internship for me were the mid-term and final presentations. Both these presentations were in front of 8–10 senior leaders from the company, and there were a lot of questions and discussions during the reviews. I remember during my final review, the plant manager suddenly asked me to start presenting from the end and go in reverse. It completely threw me off because I had prepared the flow in a specific way—and for the first five minutes, I was honestly quite nervous. It’s a little funny now, but in the moment, it was definitely overwhelming to say the least."},
          {q:"What was the culture like in your office? How did the company treat the interns and what were you provided with?",              a:"The office had a flat structure—everyone from Band 1 to Band 4 shared the same space, with no cabin culture. This made it easy to approach anyone, regardless of their role. What stood out to me was how willing people were to help. Many of them took time out of their own busy schedules to guide me, and I’m especially grateful to my buddy and guide, who were always there to support me throughout the internship."},
          {q:"What were your key learnings from the internship?",              a:"The internship was honestly a roller coaster. There were days I came back completely drained, especially when things didn’t go as planned or when I couldn’t figure certain things out despite trying really hard. When things go wrong, I tend to panic and put a lot of pressure on myself, and this experience really it to the surface. But it also helped me realise that I need to pause sometimes—to look back and acknowledge how much I’ve learnt, instead of constantly worrying about what lay ahead. Not every day has to be perfect. Some days are just off, and that’s okay. What matters most is the intent and effort one consistently puts in. It also pushed me to reflect on myself in ways I hadn’t expected. I became aware of habits and patterns I need to work on. Internships have a way of showing you what you’re not good at—and that can be uncomfortable. But it’s also how you grow. What’s important is being honest with yourself, taking responsibility, and actively working on those gaps. No one has it all figured out, and that’s okay!You should give this your 100%, regardless of the outcome. The satisfaction you feel from knowing that you genuinely tried often means more than the final result. This internship was the first time I had complete ownership over something—from start to finish. And that sense of responsibility and leadership gave me a kind of satisfaction I’d never felt before. And one last thing—luck is real. I used to dismiss it, but I’ve seen how sometimes, despite all efforts, things just don’t go your way. It can feel unfair, but I think it evens out in the long run. Everyone has their share of setbacks. So let go of what you can’t control, and try to find contentment in what you do have. That mindset has helped me more than anything else."},
        ]},
        {
  "id": "utsav-25",
  "name": "Utsav Jha",
  "company": "LinkedIn",
  "image": Utsav,
  "domain": "Software Engineering",
  "qna": [
    {
      "q": "What was your motivation for the internship and what was the recruitment process like?",
      "a": "Just as everyone else, I too was very confused between multiple domains. Consulting, Finance, Core, Software, it all felt so overwhelming. Eventually, I started rejecting options, finally ending up with this decision. I had a good CPI, but no PoRs, something that is quite important for consulting. As far as finance was concerned, I didn't find it that interesting. I was only left with core and software. I was shortlisted for companies like BASF and HUL, but was rejected in both. Fortunately, I had devoted a large part of my 2nd year summer break to DSA, which is one of the most important topics for software roles in Big MNCs. I gave OAs for day 1 companies like Uber, Goldman Sachs and Microsoft but did not have any luck due to their preference for CSE students. Linkedin came to campus on week 2 and was open for all branches. Around 550 students gave the OA, which was completely based on DSA (3 questions, 1.5 hours). Only those who solved all 3 were shortlisted. The interview had 2 virtual rounds: 1. Technical round (50 mins) involving an easy Leetcode (move zeros) and a medium-hard one (topological sort). 2. HM (Hiring Manager) round: Taken by a senior manager, focusing on projects and leadership skills. It was very chill and lasted 30 mins. For prep, I focused on the Blind 75 sheet and A-Z Striver sheet (Sliding window, DP, Graphs) on Leetcode; I didn't do CP."
    },
    {
      "q": "Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",
      "a": "My role was as a software engineering intern. All interns were assigned very impactful projects, with many sending code to production in the first few weeks. My project didn't involve standard backend/frontend (CRUD) work; instead, I worked on an internal tool to be used by other developers at LinkedIn. This was challenging and involved a deeper understanding of the codebase. I had to write tests and optimize my code using LinkedIn built tools. It was a great learning experience, very different from traditional software projects."
    },
    {
      "q": "What were the most exciting aspects of the internship? What were the most challenging aspects?",
      "a": "The accommodation was incredible—all interns stayed in a 5-star hotel in Bangalore with food, laundry, and travel covered. There were weekly events like VP talks, perfume making, Lego building, aqua zumba, and trips to Dave & Busters. We had full autonomy over our office hours and leaves as long as we delivered. The challenge was that my project felt complicated and unconventional initially, partly due to my non-CSE background and lack of dev knowledge. However, I learned from my mistakes and successfully delivered the project."
    },
    {
      "q": "What was the culture like in your office? How did the company treat the interns and what were you provided with?",
      "a": "The culture was super cool with free breakfast, lunch, snacks, and unlimited Barista coffee. The company treated us extremely well with the hotel stay and events. There was no ego hierarchy; despite being an intern, I could easily reach out to senior folks who were always happy to help."
    },
    {
      "q": "What were your key learnings from the internship?",
      "a": "1. I gained a new perspective on real software projects, learning LLD design and how to deploy code in a complex ecosystem. 2. I realized that with AI, actual coding is less than 10% of the challenge. A large chunk of time is actually spent collaborating with other engineers (including those in the US) and managing interdependencies to get things done."
    }
  ]
},{
  "id": "anupam-25",
  "name": "Anupam Gaurav",
  "company": "LinkedIn",
  "image": Anupam,
  "domain": "Software Engineering",
  "qna": [
    {
      "q": "What was your motivation for the internship and what was the recruitment process like?",
      "a": "I have been doing Competitive Programming since my first summer break. As a result, picking this internship was a no-brainer for me. Because I have been involved with competitive programming for so long, I felt quite prepared even before the recruitment."
    },
    {
      "q": "Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",
      "a": "I was a SWE (Software Engineering) intern for the company. I worked on generative AI. The focus of the internship was on backend development in general. It also involved a little bit of LangChain."
    },
    {
      "q": "What were the most exciting aspects of the internship? What were the most challenging aspects?",
      "a": "One of the most exciting aspects was being accommodated at DoubleTree Suites by Hilton for the entire duration—a 5-star hotel in Bangalore. Working at the world’s leading professional social media community with such huge scale was exciting in itself. I also won the intern hackathon and received a Meta Quest VR headset! The only challenging aspect was the expectation to learn new technologies and implement them right away."
    },
    {
      "q": "What was the culture like in your office? How did the company treat the interns and what were you provided with?",
      "a": "The office culture was perhaps the best part. People were very friendly and inclusive, and there was hardly any workload. The positivity with which interns were treated was overwhelming; the entire internship truly felt like a vacation."
    },
    {
      "q": "What were your key learnings from the internship?",
      "a": "I recommend devoting a substantial amount of time to DSA; it is incredibly important for good development. I personally got lucky because of my proficiency in CP. While problem-solving is important, writing good quality code is also necessary. One aspect people often neglect is communication—this skill is particularly handy in the tech industry."
    }
  ]
},{
  "id": "gayatri-25",
  "name": "Gayatri Moghe",
  "company": "Piramal Pharma Limited",
  "image": Gayatri,
  "domain": "Chemical Engineering / Operational Excellence",
  "qna": [
    {
      "q": "What was your motivation for the internship and what was the recruitment process like?",
      "a": "My motivation was to get a flavor of both corporate and shop-floor experience in the chemical industry. The recruitment process involved a test, a group discussion (GD), a technical interview, and an HR interview. To prepare, I revised core chemical engineering topics and practiced aptitude. I used YouTube and mock sessions for GD prep, and for interviews, I focused heavily on my resume projects and common HR questions."
    },
    {
      "q": "Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",
      "a": "I was part of the Operational Excellence team at the Digwal site. My project focused on enhancing DMSO (Dimethyl sulfoxide) recovery from mother liquor during the manufacturing of a specific product. This involved conducting lab trials and optimizing the process to balance energy costs with the recovery percentage."
    },
    {
      "q": "What were the most exciting aspects of the internship? What were the most challenging aspects?",
      "a": "The most exciting part was conducting lab trials that applied unit operations like distillation and liquid-liquid extraction on an industrial scale. I also enjoyed collaborating with people across all levels of the hierarchy. The biggest challenge was the daily commute, which lasted five hours total between the guest house and the plant, though I eventually adapted to it."
    },
    {
      "q": "What was the culture like in your office? How did the company treat the interns and what were you provided with?",
      "a": "The culture was very supportive; my manager was deeply interested in the project and provided regular guidance. Everyone at the site was approachable. The company provided two months of guest house accommodation, round-trip flight tickets, and daily travel arrangements to the site."
    },
    {
      "q": "What were your key learnings from the internship?",
      "a": "I learned to apply core chemical concepts to real-world industrial problems, specifically solvent recovery, which is vital for environmental and economic reasons. I also improved my soft skills by communicating with various stakeholders. Most importantly, I learned that achieving something requires stepping out of your comfort zone—like managing a 5-hour daily commute and early schedule."
    }
  ]
},{
  "id": "prashast-25",
  "name": "Prashast Chitravanshi",
  "company": "Piramal Pharma Limited",
  "image": Prashast,
  "domain": "R&D / Process Development",
  "qna": [
    {
      "q": "What was your motivation for the internship and what was the recruitment process like?",
      "a": "My main motivation was to gain experience in a core company and spend my summer usefully. Piramal felt like an amazing opportunity. The recruitment had three rounds: an aptitude test (logical, English, and core chemical questions), a 20-minute group discussion on abstract topics, and a final two-part interview (Technical and HR). The technical interview focused heavily on resume projects and pharmaceutical-related chemical concepts, while the HR round was more personal. Preparing through mock GDs, reviewing resume projects, and talking to seniors was key."
    },
    {
      "q": "Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",
      "a": "I had an R&D-based role at the Ahmedabad PPDS Plant. My project involved Quality by Design (QbD) based optimization for particle size reduction using milling equipment. This required extensive literature review, lab work, and statistical interpretation. I specifically designed experiments to determine optimal factors for reducing the particle size of an API (Active Pharmaceutical Ingredient)."
    },
    {
      "q": "What were the most exciting aspects of the internship? What were the most challenging aspects?",
      "a": "The most exciting part was learning how projects operate in a corporate setting and being introduced to new professional practices. A major challenge was being the only Chemical Engineering student in an office full of Pharmacy graduates, which required me to learn pharmaceutical concepts quickly. Also, adjusting to Gujarati food was a personal challenge!"
    },
    {
      "q": "What was the culture like in your office? How did the company treat the interns and what were you provided with?",
      "a": "The culture was great and relatively chill. Working hours were 8 AM to 5 PM, five days a week, and phones were allowed—which was better than many other plants. The environment was very helpful; I could approach anyone randomly for help, and they were always ready to guide me."
    },
    {
      "q": "What were your key learnings from the internship?",
      "a": "The intern season is unpredictable and can feel impossible, but that's part of the journey. My advice to juniors is to focus on giving your best rather than obsessing over results. Many opportunities will come your way, so don't worry if things take time. Trust the process and stay persistent."
    }
  ]
},
    ],
    // "2023": [
    //   { id:"kartik-23", name:"Kartik Srivastava", company:"Bain & Company", image:"assets/blogs/internship-blogs/2023/kartik.jpg", domain:"Consulting",
    //     qna:[
    //       {q:"How did you get into consulting from ChE?",    a:"I leveraged my analytical problem-solving background and spent 4 months on intensive case prep."},
    //       {q:"How many rounds did Bain have?",               a:"Two written case rounds, then three personal interview rounds — two fit rounds and one final case."},
    //       {q:"What did you work on at Bain?",                a:"A market-entry strategy for a consumer goods client — incredibly fast-paced and stimulating."},
    //       {q:"Tips for consulting aspirants?",               a:"Start case prep early, find a practice partner, and never underestimate the behavioural rounds."},
    //       {q:"Was the internship what you expected?",        a:"It exceeded expectations. The quality of teammates and pace of learning was unlike anything in academics."},
    //     ]},
    //   { id:"neha-23", name:"Neha Jain", company:"Shell India", image:"assets/blogs/internship-blogs/2023/neha.jpg", domain:"Process Engineering",
    //     qna:[
    //       {q:"Why a core internship?",                       a:"I wanted to validate whether I genuinely enjoyed ChE before pivoting — Shell gave me that clarity."},
    //       {q:"What was the selection process?",              a:"Resume shortlist → technical online test → two technical interview rounds."},
    //       {q:"What was your project?",                       a:"Process optimisation for a distillation unit with recommendations that were actually implemented."},
    //       {q:"Most memorable moment?",                       a:"Presenting to senior engineers and having them take my recommendations seriously — incredibly validating."},
    //     ]},
    // ],
    // "2022": [
    //   { id:"aditya-22", name:"Aditya Verma", company:"Goldman Sachs", image:"assets/blogs/internship-blogs/2022/aditya.jpg", domain:"Finance / Tech",
    //     qna:[
    //       {q:"How did you land Goldman Sachs?",              a:"Strong competitive-programming background, solid DS&A prep, and clear interest in fintech."},
    //       {q:"How intense was the prep?",                    a:"Very — 300+ LeetCode problems and a month of mock interviews. The bar is extremely high."},
    //       {q:"What did you work on?",                        a:"An internal tool for the risk analytics team that automated a previously manual reporting process."},
    //       {q:"Work culture at GS?",                         a:"Fast-paced and high-performance. Mentors were genuinely invested in intern growth."},
    //     ]},
    // ],
    // "2021": [
    //   { id:"simran-21", name:"Simran Kaur", company:"Asian Paints", image:"assets/blogs/internship-blogs/2021/simran.jpg", domain:"R&D / Coatings",
    //     qna:[
    //       {q:"How was interning during COVID?",              a:"Hybrid mode — some WFH, some lab. The company adapted well and mentorship remained strong."},
    //       {q:"What was the project?",                        a:"Developing eco-friendly coating formulations with reduced VOC content — highly impactful research."},
    //       {q:"Any challenges?",                              a:"Remote lab access was limiting, but it taught me to be resourceful with limited data."},
    //     ]},
    // ],
    // "2020": [
    //   { id:"rohan-20", name:"Rohan Desai", company:"Reliance Industries", image:"assets/blogs/internship-blogs/2020/rohan.jpg", domain:"Petrochemicals",
    //     qna:[
    //       {q:"What was it like interning at RIL?",           a:"Incredible exposure to large-scale industrial operations. The sheer scale of Jamnagar is awe-inspiring."},
    //       {q:"What project did you work on?",                a:"Process safety analysis for one of the crackers — reviewing SIL ratings and proposing instrument upgrades."},
    //       {q:"Would you recommend it?",                      a:"Absolutely, especially for core exposure. The learning curve is steep but very rewarding."},
    //     ]},
    // ],
    // "Pre-2020": [
    //   { id:"meera-pre", name:"Meera Nambiar", company:"ITC Limited", image:"assets/blogs/internship-blogs/pre2020/meera.jpg", domain:"FMCG / R&D",
    //     qna:[
    //       {q:"How different was the landscape?",             a:"Fewer companies came for internships — most were self-arranged or through contacts."},
    //       {q:"Experience at ITC?",                           a:"Fascinating — agri-processing and packaging innovation. Very different from today's data-heavy roles."},
    //       {q:"Advice for current students?",                 a:"Take every internship seriously. Even a non-dream role teaches you something crucial about yourself."},
    //     ]},
    //],
  },
  "placement-blogs": {
    "2025": [
      {
  "id": "suranjan-25",
  "name": "Suranjan Lahane",
  "company": "Accenture Strategy",
  "image": Suranjan,
  "domain": "Management Consulting",
  "qna": [
    {
      "q": "What was your motivation for getting placed in this company and what was the recruitment process like? How did you prepare for this role?",
      "a": "My motivation was to explore the consulting space and build upon my diverse background in finance, product, and strategy. The recruitment process began with an aptitude test, followed by two interactive interview rounds with a Director and a Consultant. These focused heavily on my resume and AI-related projects. For preparation, I created a custom HR questionnaire and resume explainer, practiced consulting cases using standard books, and spoke with seniors at Accenture to understand recruiter expectations."
    },
    {
      "q": "Can you explain your role in the job? What tasks are you expected to perform and what kinds of projects are you involved with?",
      "a": "I work in the Contact Center Technology domain, focusing on building workflows for customer interactions across voice, chat, and email. My role involves designing and configuring call flows, integrating Agentic AI, and connecting systems to backend databases through data actions. The goal is to create smart routing and personalized customer experiences."
    },
    {
      "q": "How is the culture in your office? How does the company treat newly recruited employees and what are you provided with?",
      "a": "The culture is extremely supportive; new joinees are assigned a buddy and a people lead for mentorship. The work-life balance is excellent due to a hybrid setup where we only go to the office once a week. Accenture emphasizes continuous learning, providing numerous sessions and modules on new technologies right from the start."
    },
    {
      "q": "What are the most exciting and challenging aspects of the job?",
      "a": "The most exciting aspect is the daily learning in the rapidly evolving AI and innovation space. The most challenging part is the pace of change; priorities shift quickly, requiring fast adaptation to new tasks and tools on short notice."
    },
    {
      "q": "What are the future prospects of this job and how do they play along with your long term plans?",
      "a": "The role blends technology and business strategy, providing a strong foundation for a career in tech-driven problem solving. It helps me understand how real businesses implement AI and manage client relationships, which aligns perfectly with my long-term growth goals."
    },
    {
      "q": "In the brief period of time that you have spent in the company, what have you learnt? What advice would you like to give to your juniors?",
      "a": "I've learned that you must constantly adapt and build a unique portfolio to stay relevant. My advice to juniors: explore projects outside your comfort zone to gain perspective, but remember that in the long run, depth matters more than breadth. Don't spread yourself too thin; focus on mastering strong core skills."
    }
  ]
},
    ],
    // "2023": [
    //   { id:"divya-p-23", name:"Divya Patel", company:"Boston Consulting Group", image:"assets/blogs/placement-blogs/2023/divya.jpg", domain:"Consulting",
    //     qna:[
    //       {q:"What distinguished BCG's process?",            a:"BCG had a written case round in addition to standard interview cases — testing structured thinking under time pressure."},
    //       {q:"How did you prep for written cases?",          a:"I practised BCG Platinion-style problems and got feedback from alumni who'd been through the same process."},
    //       {q:"Biggest learning from the placement season?",  a:"Don't over-optimise for a single company. Breadth of preparation gives resilience when things don't go as planned."},
    //     ]},
    // ],
    // "2022": [
    //   { id:"vikram-p-22", name:"Vikram Nair", company:"Amazon", image:"assets/blogs/placement-blogs/2022/vikram.jpg", domain:"Product / Tech",
    //     qna:[
    //       {q:"Why Amazon from a ChE background?",            a:"I had built strong programming skills and was genuinely excited about large-scale logistics and supply-chain tech."},
    //       {q:"What was Amazon's process like?",              a:"Online assessment → two technical rounds → system design → bar raiser focused on leadership principles."},
    //       {q:"How important are leadership principles?",     a:"Extremely. Prepare STAR-format stories for every principle — they can make or break your interview."},
    //     ]},
    // ],
    // "2021": [
    //   { id:"pooja-p-21", name:"Pooja Singh", company:"TCS Research", image:"assets/blogs/placement-blogs/2021/pooja.jpg", domain:"Research / Analytics",
    //     qna:[
    //       {q:"What drew you to TCS Research?",               a:"One of the few roles that explicitly valued a science background. Industrial AI applications aligned perfectly with my interests."},
    //       {q:"How was the placement process?",               a:"Resume shortlist → written analytics assessment → two interview rounds."},
    //     ]},
    // ],
    // "2020": [
    //   { id:"nikhil-p-20", name:"Nikhil Rao", company:"ExxonMobil", image:"assets/blogs/placement-blogs/2020/nikhil.jpg", domain:"Core Oil & Gas",
    //     qna:[
    //       {q:"What was ExxonMobil's process like?",          a:"Very thorough — multiple technical rounds covering all core ChE, plus behavioural rounds assessing cultural fit."},
    //       {q:"Any prep advice?",                             a:"Revise core subjects thoroughly. Don't neglect process safety and environmental regulations."},
    //     ]},
    // ],
    // "Pre-2020": [
    //   { id:"sonal-p-pre", name:"Sonal Mehta", company:"Hindustan Petroleum", image:"assets/blogs/placement-blogs/pre2020/sonal.jpg", domain:"Core / Refinery",
    //     qna:[
    //       {q:"How was the placement scene different?",       a:"Fewer non-core companies visited campus. Finance and consulting were just beginning to recruit from ChE."},
    //       {q:"Experience at HPCL?",                          a:"Rich operational exposure — I rotated across multiple units in my first year which gave me tremendous breadth."},
    //     ]},
    // ],
  },
  "internera": {
    "2025": [
      
  {
    "id": "agrim-25",
    "name": "Agrim Jain",
    "company": "HDFC Bank",
    "image": Agrim,
    "domain": "Finance / Capital Markets",
    "qna": [
      {
        "q": "What was your motivation for the internship and what was the recruitment process like?",
        "a": "My motivation was to explore my interest in the world of finance and get a taste of real-world applications after doing many projects and competitions. The recruitment process was a short offline interview. I didn't prepare explicitly; the knowledge from my college projects and activities, combined with my enthusiasm, was exactly what they were looking for."
      },
      {
        "q": "Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",
        "a": "I worked in the Capital Markets domain, which is great for learning the basics. I was assigned a macroeconomic study project where I tracked how global and national events translated into changes in the bank's liabilities."
      },
      {
        "q": "What were the most exciting aspects of the internship? What were the most challenging aspects?",
        "a": "The most exciting part was learning from colleagues—like a desk-mate who worked on the Vishal Mega Mart IPO and shared stories of the listing at BSE. The most challenging aspect was the commute to Mahalaxmi via local train, especially the intense rush during train changes at Dadar at 6:30 PM."
      },
      {
        "q": "What was the culture like in your office? How did the company treat the interns and what were you provided with?",
        "a": "The office was huge and gave me a real taste of the corporate world. The people were incredibly welcoming and humble, from immediate colleagues to the VP in his own chamber. Everyone was super helpful."
      },
      {
        "q": "What were your key learnings from the internship?",
        "a": "My biggest takeaway was the power of compounding. I learned that looking for short-term results can be harmful. I now strive to be a person who pursues long-term rewards and growth through vision rather than being swayed by temporary fulfillment."
      }
    ]
  },
  {
    "id": "advait-25",
    "name": "Advait Bhedasgaonkar",
    "company": "Ernst & Young (EY)",
    "image": Advait,
    "domain": "Consulting / ESG & Sustainability",
    "qna": [
      {
        "q": "What was your motivation for the internship and what was the recruitment process like?",
        "a": "I realized I wanted to explore non-tech domains over core or tech roles. The recruitment process involved an introductory call followed by an interview consisting mostly of HR-based questions. I chose an internship over a bootcamp or projects to get a flavor of corporate life."
      },
      {
        "q": "Did you get this internship via apping? If yes, highlight the apping process.",
        "a": "Yes, I targeted the 'Big 4' firms. I sent many emails and follow-ups throughout my second year using LinkedIn and Apollo.io to find executive contact details. There is no secret recipe other than persistence."
      },
      {
        "q": "Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",
        "a": "I worked in the ESG (Environmental, Social, and Governance) and sustainability sector. I assisted in research, benchmarking ESG metrics against certified frameworks, and conducted climate risk assessments to see how sustainability is monetized."
      },
      {
        "q": "What were the most exciting aspects of the internship? What were the most challenging aspects?",
        "a": "The excitement came from the people; my team was fabulous and we became quick friends. Interaction and hearing stories from others was the best part. The most frustrating challenge was the commute."
      },
      {
        "q": "What was the culture like in your office? How did the company treat the interns and what were you provided with?",
        "a": "The team was super interactive. While initial work was basic, I wasn't hesitant to ask for more challenging tasks. The company is welcoming but keeps its eyes open for talent, so I constantly strove to prove my worth."
      },
      {
        "q": "What were your key learnings from the internship?",
        "a": "I gained technical knowledge in ESG and an invaluable taste of corporate life. My advice: start 'apping' early (January is perfect) and don't wait for the last moment."
      }
    ]
  },
  {
    "id": "harsh-25",
    "name": "Harsh Jadhav",
    "company": "Piramal Pharma",
    "image": Harsh,
    "domain": "Chemical Engineering / Pharmaceuticals",
    "qna": [
      {
        "q": "What was your motivation for the internship and what was the recruitment process like?",
        "a": "My interest started with a vocational training program in 2024. I wanted to see how classroom concepts translate to large-scale manufacturing in regulated industries like Pharma or Oil & Gas. I chose an internship over a project to get hands-on industrial experience."
      },
      {
        "q": "Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",
        "a": "I worked in a Solid-State Peptide Synthesis (SPPS) lab. My primary task was to evaluate the feasibility of implementing a Process Analytical Technology (PAT) system. I designed experiments to show that real-time monitoring could prevent over-processing and financial losses, providing a techno-economic justification for the system."
      },
      {
        "q": "What were the most exciting aspects of the internship? What were the most challenging aspects?",
        "a": "The most exciting part was seeing how GMP (Good Manufacturing Practice) governs quality and documentation. I realized I prefer continuous processes over batch ones. The most challenging part was the physical endurance required for long hours in the lab wearing full PPE."
      },
      {
        "q": "What was the culture like in your office? How did the company treat the interns and what were you provided with?",
        "a": "The culture was professional and GMP-driven with six-day work weeks and strict discipline. I felt well-supported by my guide, Pradip Mali, and was entrusted with meaningful responsibilities in a structured environment."
      },
      {
        "q": "What were your key learnings from the internship?",
        "a": "I learned the vital importance of interpersonal skills when coordinating with chemists and operators. I strongly recommend industrial internships for juniors to experience real-world work culture firsthand."
      }
    ]
  },
  {
    "id": "anvitaa-25",
    "name": "Anvitaa Goel",
    "company": "JM Financial",
    "image": Anvita,
    "domain": "Finance / Equity Research",
    "qna": [
      {
        "q": "What was your motivation for the internship and what was the recruitment process like?",
        "a": "I wanted to explore the intersection of the chemical core with finance, making equity research in chemicals a perfect fit. The recruitment was an online interview that was resume-based with basic finance questions on ratios and financial statements."
      },
      {
        "q": "Can you explain your role in the internship? What jobs were you expected to perform and what projects were you involved with?",
        "a": "I worked in 'Equity Research in Chemicals.' I used the discounted cash flow (DCF) method to find company values, analyzed annual reports to assess financial performance, and conducted market research on the fluoropolymers segment."
      },
      {
        "q": "What were the most exciting aspects of the internship? What were the most challenging aspects?",
        "a": "The most exciting part was doing concrete work rather than just theory and learning from everyone in the office. The initial challenge was the commute, but the new Metro Aqualine made it much more convenient later on."
      },
      {
        "q": "What was the culture like in your office? How did the company treat the interns and what were you provided with?",
        "a": "I was one of the youngest people there and the office had few B.Tech interns. Despite this, everyone put in effort to educate me on finance, corporate life, and life skills. The culture was incredibly supportive."
      },
      {
        "q": "What were your key learnings from the internship?",
        "a": "The internship confirmed my interest in finance. I believe 2nd-year internships should be used to explore or eliminate sectors. I also learned the value of patience—staying optimistic when things don't work out immediately, as they eventually do."
      }
    ]
  }

    ],
    // "2023": [
    //   { id:"tanvi-ie-23", name:"Tanvi Agarwal", company:"Deloitte USI", image:"assets/blogs/internera/2023/tanvi.jpg", domain:"Consulting / Analytics",
    //     qna:[
    //       {q:"What profile did you intern for at Deloitte?", a:"Business Technology Analyst — bridging client requirements and tech implementation, perfect for my ChE analytical background."},
    //       {q:"How was the intern experience?",               a:"Very collaborative with real project ownership. I was surprised by how much responsibility interns receive."},
    //     ]},
    // ],
  },
  // "apping-guide": {
  //   "2025": [
  //     { id:"ishaan-ag-25", name:"Ishaan Chopra", company:"ETH Zürich (Masters)", image:"assets/blogs/apping-guide/2025/ishaan.jpg", domain:"Higher Studies / Europe",
  //       qna:[
  //         {q:"Why ETH Zürich?",                              a:"Top-ranked globally for engineering, strong research output, and fully funded options for exceptional applicants."},
  //         {q:"What is the application process like?",        a:"Competitive — strong GPA, excellent SOP, and strong LoRs from research supervisors are essential."},
  //         {q:"How should you choose programmes?",            a:"Research the faculty. If no professor's work excites you, reconsider the programme — research fit is critical in Europe."},
  //         {q:"Tips for the SOP?",                            a:"Be specific and honest. Tell a story with clear motivations, not a re-listing of your CV."},
  //         {q:"Advice on GRE?",                               a:"Many top European schools no longer require it. Focus energy on research output and strong recommendations instead."},
  //       ]},
  //   ],
  //   "2023": [
  //     { id:"ananya-ag-23", name:"Ananya Bose", company:"MIT (PhD)", image:"assets/blogs/apping-guide/2023/ananya.jpg", domain:"Higher Studies / USA",
  //       qna:[
  //         {q:"How did you approach the US PhD application?", a:"I emailed 30+ professors before applications opened, identified genuine research overlaps, and tailored every SOP to the specific lab."},
  //         {q:"How important is research experience?",        a:"Extremely — publications or conference presentations are a significant differentiator for top PhD programmes."},
  //         {q:"How do you handle rejections?",                a:"Expect them. Even the strongest applicants get rejected from top schools. Apply broadly and don't put all eggs in one basket."},
  //       ]},
  //   ],
  // },
  "icy-didnt-know": {
    "2025": [
      {
  "id": "gaurav-saini-91",
  "name": "Gaurav Saini",
  "company": "Procter & Gamble",
  "image": Gaurav,
  "domain": "Fragrance Design / Perfumery",
  "qna": [
    {
      "q": "What is your work profile and professional journey like?",
      "a": "I am a Senior Perfumer and Principal Scientist at P&G Singapore. I started as a Technical Brand Manager in Mumbai 27 years ago. My career took a turn when I was offered an in-house perfumery traineeship at the P&G Perfumery College. This journey as a 'global nomad' has taken me to Cincinnati (3 years), Kobe (9 years), Brussels (7 years), and now Singapore (8 years). It is a super-specialization—I am like a master chef creating the 'recipes' (perfumes) for products like laundry, hair care, and air fresheners to delight consumers."
    },
    {
      "q": "What is the nature of your role as a Perfumer?",
      "a": "My job is a centuries-old craft infused with modern science and technology. I design fragrance experiences that build an emotional connection and a love bond between the brand and the consumer. It is the ultimate 'gamification of work' in the corporate world; I get 'in the zone' and lose myself in the creative process, much like a musician or a painter. It’s about creating moments of delight in mundane household chores."
    },
    {
      "q": "What are the requirements and challenges of this profession?",
      "a": "It is a rare vocation—they say there are more astronauts than perfumers in the world. P&G is one of the very few FMCG companies with an in-house perfumery. While a science background helps, the most important traits are curiosity and the courage to learn a skill usually ignored in formal education. However, it is high-pressure: you are only as good as your last perfume. Unlike other corporate roles where success is team-based, in perfumery, a commercial success or failure is attributed solely to the perfumer."
    },
    {
      "q": "How do you view the fragrance industry in India?",
      "a": "India is currently the place to be—the industry is exploding. As a young nation, India's demand for smelling and looking good is at an all-time high. The industry needs smart technologists with a 'hatke' (different) mindset and a spirit of adventure. There is a massive opportunity to make fragrances safer, more sustainable, and smarter, especially by amping up the industry's digital capabilities."
    }
  ]
},{
  "id": "alok-goswami-17",
  "name": "Alok Goswami",
  "company": "HPCL (Hindustan Petroleum Corporation Limited)",
  "image": Alok,
  "domain": "Plant Operations / Oil & Gas",
  "qna": [
    {
      "q": "What was your professional journey from graduation to your current role at HPCL?",
      "a": "After graduating in 2017, I initially worked at Aarti Industries in R&D, focusing on flow chemistry and lab-to-pilot scale-up. In January 2018, I pivoted to the oil and gas sector by joining HPCL. Currently, I am the Assistant Manager of Operations in the Fluidized Catalytic Cracking (FCC) unit at the Mumbai Refinery, where I lead a team of 15 employees."
    },
    {
      "q": "Can you explain your role and daily responsibilities at the refinery?",
      "a": "I serve as a DCS (Distributed Control System) and plant supervisor. My responsibilities include overseeing proactive maintenance of rotary and static equipment, maintaining process parameters within the operating envelope, and troubleshooting malfunctions. Our team handles plant shutdowns and startups, aiming for profit maximization through optimal resource use and tracking product yields based on market demand."
    },
    {
      "q": "Who should aim for a career in refinery operations, and what are the technical highlights?",
      "a": "This domain is ideal for those interested in advanced process control, optimization, unit operations, and heterogeneous catalytic reactions. Refineries offer highly advanced data availability and automation compared to most chemical industries. While the work can be challenging, troubleshooting technical failures is a major motivator and a great way to keep engineering concepts sharp."
    },
    {
      "q": "What are the pros and cons of working in the Oil & Gas industry versus the broader Chemical industry?",
      "a": "Refineries handle massive volumes, making heat integration and recovery highly economical. Automation and APC (Advanced Process Control) systems are much more developed here. However, specialization can lead to 'knowledge stagnation' if one stays in a single plant too long, and switching fields becomes difficult after five years. If you prefer constant technical variety and R&D-heavy learning, Pharma or specialty chemicals might be a better fit."
    },
    {
      "q": "How do you view the future of the Oil & Gas sector?",
      "a": "The industry is shifting; many refineries will likely convert into integrated petrochemical complexes to stay relevant as electric vehicles and green fuel innovations grow. While automation may reduce the total manpower needed per plant, new upcoming facilities will fill the gap. Pursuing roles in the technical or technology departments (like process development) offers more flexibility for global career moves than pure operations."
    }
  ]
},
{
  "id": "malavika-gopinath-17",
  "name": "Malavika Gopinath",
  "company": "ITC Ltd.",
  "image": Malavika,
  "domain": "Corporate Sustainability & EHS",
  "qna": [
    {
      "q": "What was your motivation for transitioning from research to a corporate sustainability role?",
      "a": "After my B.E., I worked on water quality modeling at ATREE, where I realized that technical solutions alone aren't enough without closing policy gaps. This led me to pursue an M.Tech at IITB to bridge the gap between engineering, policy, and governance. Although I initially intended to join an NPO, speaking with the Sustainability Head at ITC convinced me that a large conglomerate has the intent and resources to drive significant, large-scale change."
    },
    {
      "q": "Can you describe your role and the specific areas you manage at ITC?",
      "a": "I work in the Corporate Environment, Health, Safety & Sustainability (EHS) team. My work is twofold: I handle safety aspects, including EHS audits across ITC's diversified businesses (FMCG, Paperboards, Hotels, etc.), and I manage corporate-level sustainability initiatives. This includes water security, packaging and plastic waste management, and climate risk management. I also contribute to setting and monitoring corporate sustainability strategies and goals."
    },
    {
      "q": "What are the most rewarding and challenging aspects of working in sustainability?",
      "a": "The biggest pro is the deep sense of satisfaction from addressing the looming environmental crisis. However, it can be emotionally taxing; you often feel 'gloomy' when the pace of change feels too slow compared to the scale of the problem, or when you encounter a lack of concern from others regarding critical environmental impacts."
    },
    {
      "q": "How do you view the future opportunities in the sustainability sector?",
      "a": "The field is exploding with opportunities as companies face immense pressure on ESG (Environmental, Social, and Governance) issues from investors. Every major firm is currently strategizing for the next decade. There is a massive need for impactful solutions based on scientific temperament and inclusive growth, making this a high-growth sector both in India and globally."
    }
  ]
},
{
  "id": "anish-gupta-13",
  "name": "Anish Gupta",
  "company": "Dr. Reddy’s Laboratories Ltd.",
  "image": Anish,
  "domain": "Product R&D / Pharma Process Engineering",
  "qna": [
    {
      "q": "What has your career trajectory been like at Dr. Reddy's?",
      "a": "I joined DRL in 2013 as a Process Scientist. My journey involved changing roles every two years to gain diverse experience. I started with the Centre of Excellence (CoE) focusing on 'Zero Failure' scale-up strategies. Later, I moved to drug-specific delivery projects, progressing from managing a single stage of a drug to overseeing all stages of development and scale-up. After a brief stint as a Project Manager at Jubilant Life Sciences, I returned to DRL as a Process Engineering Specialist, where I now lead Flow Technology Projects—converting traditional batch manufacturing into continuous streams."
    },
    {
      "q": "What is the core philosophy and daily nature of your work?",
      "a": "My work is 75% experimentation and 25% problem-solving, guided by the 'Quality by Design' (QbD) philosophy. As a Process Engineer in Pharma R&D, I view every project as a problem to be solved through the lens of rates and kinetics rather than just data points. We don't usually design equipment from scratch; instead, we fit processes into existing setups or prepare User Requirement Specifications (URS) for specialized vendors. A major professional highlight for me was having a process patent granted."
    },
    {
      "q": "What are the opportunities for Chemical Engineers in R&D across different sectors?",
      "a": "Beyond generic pharma giants like Cipla and Biocon, there are roles in injectable/topical formulations at Pfizer and Novartis for those with CFD/Modelling skills. In FMCG, firms like HUL, P&G, and ITC offer R&D roles. There is also significant growth in energy technology—battery tech (Panasonic), fuel cells (Log 9 Materials), and solar panels. Many of these firms prefer candidates with 1-2 years of experience or advanced degrees (Masters/PhD)."
    },
    {
      "q": "What are the 'Plan B' options or higher education paths in this field?",
      "a": "There are several paths: 1) Manufacturing to R&D: Spend 2-4 years in operations before bringing that commercial experience to research. 2) Masters: Directly join as a Scientist, fast-tracking your path by 1-2 years. 3) PhD: Join as a Specialist. R&D leadership teams often consist of PhDs who maintain global academic networks, which is invaluable if you decide to pursue further studies later."
    },
    {
      "q": "What are the pros and cons of a career in Industrial R&D?",
      "a": "The pros include immense personal satisfaction (e.g., bringing generic drugs to market at 1/10th the price) and a healthier work-life balance compared to other sectors. The cons include a slower pace of work due to the nature of research and potentially lower starting salaries compared to US-dollar-denominated MNC roles. Additionally, long project cycles mean you might not hit 'milestones' as frequently as peers in IT or business roles."
    },
    {
      "q": "What are the current 'hot topics' in Pharma R&D for the youth?",
      "a": "Currently, the global focus is on: 1) Continuous Manufacturing for both API and Formulations. 2) Manufacturing of complex molecules like peptides and proteins. 3) AI in Drug Discovery. Indian experts in these areas are currently in high demand by EU innovators and Chinese firms."
    }
  ]
},
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
      {
  "id": "kriti-kapoor-09",
  "name": "Kriti Kapoor",
  "company": "Amazon",
  "image": "KritiKapoor",
  "domain": "Software Engineering (Transitioned from Process Control)",
  "qna": [
    {
      "q": "What was your career plan graduating from IITB, and how did external events change it?",
      "a": "Graduating in 2009, I aimed for a PhD and a career in the Oil & Gas (O&G) industry. However, the 2008 financial crisis (Lehman Brothers bankruptcy) and the 26/11 Mumbai attacks severely impacted placements. O&G firms that usually hired dozens gave only token offers. This forced many of us to pursue higher studies as a buffer. I went to UT Austin for a PhD in 'Process Control & Optimization,' focusing on algorithms for semiconductor and O&G industries, which inadvertently gave me my first real exposure to coding and optimization problems."
    },
    {
      "q": "How did your professional journey evolve after your PhD?",
      "a": "In 2013, I joined Freescale Semiconductors as an APC (Advanced Process Control) Engineer. While not my first choice, it allowed me to build process control software for large manufacturing sites. During this time, oil prices crashed, leading to massive layoffs in the O&G sector—the very industry I once coveted. While the semiconductor industry was more stable initially, I eventually faced a layoff due to cost-cutting, which became a 'blessing in disguise' that pushed me toward the booming tech industry."
    },
    {
      "q": "How did you transition from a Chemical Engineering PhD to a Software Engineer at Amazon?",
      "a": "After my layoff, I realized my niche expertise had limited room for innovation. I decided to pivot to software, but I wasn't prepared for the rigorous CS interview process. I had to dive into a self-taught crash course on Data Structures and Algorithms (DSA), essentially relearning everything 14 years after my CS101 course at IITB. Despite the pressure of US immigration timelines, I successfully transitioned and joined Amazon, which has been the most rewarding experience of my career."
    },
    {
      "q": "What were your key takeaways from dealing with career 'derailment' and market volatility?",
      "a": "The main takeaway was learning to deal with ambiguity and gaining a sense of ownership. I learned that you truly cannot predict the future; markets and passions evolve. The 2008 recession and the oil crash taught me that when one industry dips, room is made for others to flourish. My professional path was not a straight line, but a series of adaptations to changing possibilities."
    },
    {
      "q": "What advice do you have for students facing uncertain times like the post-COVID market?",
      "a": "Don't put too much pressure on that first campus placement; a career is a long journey, not a single event. Plan if you must, but stay open to and aware of the changing world. If there is a dip in opportunities, it is temporary. 'Change is the only constant'—embrace it, keep learning, and don't be afraid to grow out of your initial niche if it no longer serves your growth."
    }
  ]
},
{
  "id": "anirudh-ravindar-08",
  "name": "Anirudh Ravindar",
  "company": "Biocon",
  "image": "AnirudhRavindar",
  "domain": "Supply Chain Management / Program Management",
  "qna": [
    {
      "q": "What is your current role and professional background?",
      "a": "I am currently the Senior Manager of Program Management & Analytics in the Supply Chain Management function at Biocon. My career includes previous stints at Natco Pharma, Godrej, Jacobs, and Dr. Reddy’s Laboratories. I also completed my MBA from ISB Hyderabad in 2014, which helped transition my technical background into management and analytics."
    },
    {
      "q": "What is your advice for students graduating during a recession or pandemic?",
      "a": "The first learning is that nothing is guaranteed; notions of entitlement must vanish to remain agile. In a crisis, the focus should be on survival rather than thriving. One cannot afford to be overly choosy regarding salary or brand names initially. However, remain wary of exploiters. The goal is to get a foot in the door, as labor markets eventually improve once the crisis settles."
    },
    {
      "q": "Which sectors currently offer the best opportunities for Chemical Engineers?",
      "a": "Pharmaceuticals, Healthcare, and Allied industries are witnessing growth even during global disruptions. Due to geopolitical shifts and the desire to move manufacturing bases to India (especially in Fine Chemicals), there is significant potential. Look for companies setting up new plants, factories, or lines of business, as these are the biggest hubs for new employment."
    },
    {
      "q": "How should one approach the job hunt in a challenging market?",
      "a": "Identify expanding companies indirectly through market research or directly by talking to investors and company heads. Target functions with high hiring probabilities for Chemical Engineers: Production, Project Management, Engineering, and Maintenance. To increase your chances, be flexible—for example, offer to work on a contract basis. Prepare for a harder cycle of networking, cold calling, and interviewing."
    }
  ]
},
{
  "id": "manas-nigam-09",
  "name": "Manas Nigam",
  "company": "Bytedance Technologies",
  "image": "ManasNigam",
  "domain": "Product Management (Transitioned from Steel/Teaching)",
  "qna": [
    {
      "q": "How did the 2008 recession and the Mumbai attacks affect your initial career path?",
      "a": "Our placement season was hit by both the global recession and the 26/11 attacks, which kept many MNCs away. I had aimed for top American Oil & Gas companies like Schlumberger or Transocean, but they didn't visit or only offered 'token' positions. I remained unplaced until March, eventually joining Ispat Industries (now JSW). I briefly considered being a Research Assistant or going for an MS, but family responsibilities and a personal preference for immediate employment led me to the steel industry."
    },
    {
      "q": "Can you describe your transition from the core sector to other fields like UPSC and teaching?",
      "a": "I worked in a steel plant for two years as a field engineer and R&D analyst, but the work culture and health conditions weren't a fit. In 2011, I quit to prepare for the UPSC/IAS exams in Delhi, supporting myself by teaching math to IIT aspirants. After two unsuccessful attempts and facing financial/mental strain, I decided to return to the corporate world, though I found that the Oil & Gas industry still hadn't evolved to accommodate someone with my specific gap in experience."
    },
    {
      "q": "How did you eventually break into the technology sector and Product Management?",
      "a": "It was a period of 'complete darkness.' I faced rejections and low-salary offers because I lacked an IT background. I briefly joined FIITJEE to secure a job, but kept looking for tech roles. Luckily, Times Internet hired me as an Analyst. I transitioned from Analyst to Technical Product Manager, discovering a passion for solving industry problems through technology. This journey led me to my current role at Bytedance."
    },
    {
      "q": "What kept you motivated through these significant setbacks and career shifts?",
      "a": "My family, a stern belief in a better future, and the support of IIT friends kept me going through multiple bouts of depression and failure. I came from a humble background—a Hindi-medium government school—so I was used to struggling. I believe that if situations go bad, it is to teach you something you were missing. Struggle is part and parcel of life; bad incidents shouldn't define your entire future."
    },
    {
      "q": "What advice do you have for students navigating the current pandemic or economic shifts?",
      "a": "Focus on strengths and stay hopeful. For those graduating now, options include: 1) Higher Studies or specialized online courses with high ROI. 2) Research Assistant roles on campus. 3) Teaching (EdTech platforms like BYJU'S or Vedantu). 4) MBA. Regarding industries, focus on gaming, streaming, e-commerce, healthcare, and fintech/martech. Avoid travel, hospitality, and consulting for the next few years as they recover."
    }
  ]
}
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
      
  {
    "id": "ayush-bhaskar-22",
    "name": "Ayush Bhaskar",
    "company": "Technical University of Denmark (DTU)",
    "image": "AyushBhaskar",
    "domain": "Semester Exchange (SemEx)",
    "qna": [
      {
        "q": "What was your motivation for the semester exchange and how was the application process?",
        "a": "I have been fascinated by the idea of living independently in a different culture since before joining IITB. I applied in my 4th semester after learning that 2nd year students could also go. For Chemical Engineering, the criteria include a CPI > 7 and no active backlogs. The process involves mapping IITB courses to the host university's curriculum and getting approvals from the Faculty Advisor, DUGC, and Dean IR. While DTU has an MoU that waives tuition fees, scholarships often require taking Biotechnology-specific courses."
      },
      {
        "q": "How did the academic environment at DTU differ from IIT Bombay?",
        "a": "The teaching methodology at DTU is quite different; there is a heavy emphasis on group work, projects, and assignments. Unlike the rigorous quiz and mid-semester culture at IIT, evaluation is primarily based on these group projects and a final exam. Coming from the intense academic background of an IIT, I found the academics manageable, which allowed more time for cultural exploration."
      },
      {
        "q": "Can you describe your living arrangements and the social life in Denmark?",
        "a": "I lived in 'Campus Village,' which consists of shipping containers converted into residential blocks. It was ideal for avoiding expensive public transport. DTU organizes an introductory week with parties, a gala dinner, and a trip to Copenhagen. I even participated in a Dragon Boat Festival. Living in close quarters with 'container mates' created a strong bond, especially during the lockdown when we shared meals, played games, and managed cleaning schedules together."
      },
      {
        "q": "How did the COVID-19 pandemic impact your exchange experience and travel plans?",
        "a": "The pandemic turned my travel plans from 'touring Europe' to 'walking to the supermarket.' However, before the lockdown, I managed to visit Sweden, Germany (to watch a Bayern Munich match), Belgium, and the Netherlands. When the lockdown hit, classes moved online and exams were conducted virtually. While the travel was restricted, the experience shifted toward personal growth, learning to cook, and exploring the local Danish summer and cycling culture once things slowly reopened."
      },
      {
        "q": "What were your key takeaways and how did you finally return to India?",
        "a": "The exchange gave me a new perspective on life and essential life skills like cooking and cleaning. Due to suspended flights, I had to return via a Vande Bharat Mission repatriation flight through Helsinki. Despite the pandemic, the experience was not ruined; it was bittersweet to leave the wonderful people I met. My advice to juniors: don't be afraid to pursue an exchange even if it seems like a long shot—it is a transformative personal journey."
      }
    ]
  }

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
    className="relative bg-slate-900/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#315D9C]/20 shadow-2xl shadow-[#315D9C]/10"
    initial={{ scale: 0.9, opacity: 0, y: 30 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    exit={{ scale: 0.9, opacity: 0, y: 30 }}
    transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
  >
    {/* Top glow strip */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A8DFF]/35 to-transparent" />

    {/* Header */}
    <div className="p-6 border-b border-slate-700/50 flex gap-5 items-center flex-wrap bg-gradient-to-r from-[#315D9C]/5 to-transparent">
      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#315D9C]/40 shadow-lg shadow-[#315D9C]/20 flex-shrink-0">
        <SmartImage src={person.image} alt={person.name} className="w-full h-full object-cover" fallbackSize={80} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white">{person.name || "Anonymous"}</h2>

        <p className="text-[#FF7A00] font-semibold mt-1">
          {person.company || "Company N/A"}
        </p>

        <div className="flex gap-2 mt-2 flex-wrap">
          {person.domain && (
<span className="bg-[#FF7A00]/10 border border-[#FF7A00]/30 rounded-full px-3 py-0.5 text-xs text-[#FFB067]">              {person.domain}
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
        <motion.div
          key={i}
          className={`rounded-xl border overflow-hidden transition-all duration-200 ${
            activeQ === i ? "border-[#315D9C]/30" : "border-slate-700/50"
          }`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          >
          <button
            onClick={() => setActiveQ(activeQ === i ? null : i)}
            style={{cursor:'pointer'}}
            className={`w-full px-5 py-3.5 text-left flex justify-between items-center gap-3 transition-colors duration-200 ${
              activeQ === i
                ? "bg-[#315D9C]/8"
                : "bg-slate-800/40 hover:bg-slate-800/70"
            }`}
          >
            <span className="text-sm font-semibold text-gray-200">
              <span className="text-[#adcbff] mr-2 font-mono text-xs">
                Q{i + 1}.
              </span>
              {item.q}
            </span>

            <motion.span
              animate={{ rotate: activeQ === i ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#adcbff] flex-shrink-0"
            >
              <ChevronDown size={16} />
            </motion.span>
          </button>

          <AnimatePresence>
            {activeQ === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
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
  style={{ cursor: "pointer" }}
  onClick={onBack}
  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF7A00]/10 hover:bg-[#FF7A00]/20 text-[#FFB067] border border-[#FF7A00]/20 font-semibold text-sm transition-all duration-200"
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
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-[#315D9C]/30 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      // whileHover={{ scale: 1.01, y: -6 }}
    >
      {/* Chemical reaction bg */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#315D9C]/5 via-transparent to-[#4A8DFF]/5"
        animate={{ opacity: hov ? 1 : 0 }} transition={{ duration: 0.3 }}
      />

      {/* Image */}
      <div className="h-36 overflow-hidden bg-slate-700/30 relative">
        <SmartImage
          src={person.image} alt={person.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110 saturate-[0.8] group-hover:saturate-100"
          fallbackSize={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E38]/80 to-transparent" />
{person.domain && (
  <div className="absolute top-2 left-2 bg-slate-900/70 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs text-[#FF7A00] border border-[#315D9C]/20 font-mono">
    {person.domain}
  </div>
)}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="font-bold text-white text-sm transition-colors duration-200 truncate">{person.name || "Name N/A"}</p>
        <p className="text-[#FF7A00] text-xs mt-0.5 truncate">{person.company || "Company N/A"}</p>
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
          className="flex items-center gap-2 mt-1 px-4 py-2 bg-slate-800/50 hover:bg-[#315D9C]/10 border border-slate-700/50 hover:border-[#315D9C]/30 rounded-xl text-[#adfbff]-400 text-xs font-semibold transition-all duration-200"
        >
          <ArrowLeft size={14} /> Back
        </button>
        <div>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl bg-gradient-to-br from-[#D65F00] to-[#FF7A00] shadow-lg shadow-[#FF7A00]/20`}>
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
                  ? "bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/30"
  : has
    ? "bg-slate-800/60 text-[#FF7A00] border border-[#FF7A00]/30 hover:bg-[#FF7A00]/10"
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
          <p className="text-[#adcbff] font-bold text-lg tracking-wider">No entries for {activeYear}</p>
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
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 min-h-[200px] ${
        card.comingSoon
          ? "border-slate-700/30 cursor-default"
          : "border-[#4A8DFF]/10 hover:border-[#4A8DFF]/30 cursor-pointer"
      } bg-slate-800/50 backdrop-blur-sm`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
    >
      {/* Hover glow bg */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#315D9C]/5 via-transparent to-[#4A8DFF]/5"
        animate={{ opacity: hov && !card.comingSoon ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${card.color} opacity-10 rounded-bl-full`} />

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col h-full min-h-[200px]">
        {/* Tag + icon */}
        <div className="flex items-start justify-between mb-3">
          <span className="bg-[#4A8DFF]/10 border border-[#4A8DFF]/25 text-[#FF7A00] text-[10px] font-bold px-2.5 py-1 rounded-full tracking-widest">
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
        <h3 className={`text-xl font-extrabold leading-tight mb-2 whitespace-pre-line transition-colors duration-200 ${hov && !card.comingSoon ? "text-white" : "text-white"}`}>
          {card.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-gray-400 leading-relaxed flex-1">{card.subtitle}</p>

        {/* CTA */}
        {!card.comingSoon ? (
          <motion.div
            className="mt-4 flex items-center gap-1.5 text-[#FF7A00] text-xs font-bold tracking-wider hover:text-[#FF7A00]"
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
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A8DFF]/50 to-transparent"
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
    <div className="min-h-screen text-white relative overflow-hidden" style={{paddingTop:'50px', background:'#0b1e38'}}>

      {/* Top border — same as rest of site */}
      <div className="absolute top-0 left-0 right-0 h-px" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
              <Atom size={36} className="text-[#FF7A00]" />
            </motion.div>
            <h1 className="text-5xl lg:text-6xl font-black">
              ChEA{" "}
              <span className="text-transparent bg-clip-text" style={{color:"#fff"}}>
                BLOGS
              </span>
            </h1>
            <motion.div transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
              <BookOpen size={36} className="text-[#FF7A00]" />
            </motion.div>
          </div>

          <p className="text-gray-300 max-w-xl mx-auto text-base">
            Stories, insights, and guidance from students who've been there
          </p>

          {/* Divider — matches site style */}
          <motion.div
            className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#315D9C]/100 to-transparent mx-auto mt-6"
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
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" /> */}

      {/* Person detail modal */}
      <AnimatePresence>
        {selectedPerson && (
          <PersonDetail person={selectedPerson} onBack={() => setSelectedPerson(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}