export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  color: string;
  expertise: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  desc: string;
}
export interface TechItem {
  label: string;
  color: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Anish Yadav",
    role: "Founder & CEO",
    initials: "A.Y.",
    color: "from-[#F05A28] to-[#FF8C5A]",
    expertise: ["AI"],
    social: {
      linkedin: "https://linkedin.com/in/anish-yadav",
      twitter: "https://twitter.com/anishyadav",
      github: "https://github.com/anishyadav"
    }
  },
  {
    name: "Avinash Panday",
    role: "Head of Training",
    initials: "A.V.",
    color: "from-purple-500 to-pink-500",
    expertise: ["Leadership", "AI/ML", "Team Lead"],
    social: {
      linkedin: "https://linkedin.com/in/avinash-panday",
      twitter: "https://twitter.com/avinashpanday",
      github: "https://github.com/avinashpanday"
    }
  },
  {
    name: "Anika Yadav",
    role: "HR & Placement",
    initials: "A. K.",
    color: "from-green-500 to-teal-500",
    expertise: ["Recruitment", "Placement", "PD"],
    social: {
      linkedin: "https://linkedin.com/in/anika-yadav",
      twitter: "https://twitter.com/anikayadav",
      github: "https://github.com/anikayadav"
    }
  },
  {
    name: "Gaurav Kumar",
    role: "Tech Lead",
    initials: "G. K.",
    color: "from-blue-500 to-cyan-500",
    expertise: ["Full Stack", "MERN", "Blockchain"],
    social: {
      linkedin: "https://linkedin.com/in/gaurav-kumar",
      twitter: "https://twitter.com/gauravkumar",
      github: "https://github.com/gauravkumar"
    }
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  highlight: boolean;
}

export const TIMELINE: TimelineItem[] = [
  { year: "2025", title: "The Beginning",          desc: "zerotwocode started in a small room in Lucknow with 12 students and a dream to make quality IT education accessible.",      highlight: false },
  { year: "2025", title: "First 1,000 Students",   desc: "Crossed the 1,000 students milestone. Expanded to a full campus with dedicated labs and mentorship rooms.",               highlight: false },
  { year: "2025", title: "Online Programs Launch",  desc: "Pivoted to hybrid learning during the pandemic — pioneered live online training that now serves students across India.",   highlight: true  },
  { year: "2025", title: "Apprenticeship Program",  desc: "Launched India's most comprehensive 6-month CS/IT apprenticeship — students got real salaries during training.",          highlight: false },
  { year: "2025", title: "AI & ML Courses Added",   desc: "Integrated Artificial Intelligence and Machine Learning into the curriculum — staying 2 years ahead of the market.",     highlight: false },
  { year: "2025", title: "50,000+ Alumni Strong",   desc: "Today zerotwocode alumni work at companies across India and the world. The mission continues — one student at a time.",   highlight: true  },
];


export const STATS: StatItem[] = [
  { value: 6,     suffix: "+", label: "Technologies",     icon: "💻" },
  { value: 95,    suffix: "%", label: "Placement Rate",   icon: "🚀" },
  { value: 4,     suffix: ".9★", label: "Google Rating",  icon: "⭐" },
  { value: 3,     suffix: "+", label: "Years Experience", icon: "📅" },
  { value: 200,   suffix: "+", label: "Live Projects",    icon: "🏗️" },
];

export const VALUES: ValueItem[] = [
  { icon: "🎯", title: "Outcome-First",   desc: "Every program is designed around one goal — your career. Theory follows practice, not the other way around." },
  { icon: "🤝", title: "Real Mentorship",  desc: "Our mentors are active industry professionals, not just lecturers. You get battle-tested guidance." },
  { icon: "🔥", title: "Live Projects",    desc: "You build real applications for real clients. Your portfolio proves your skill from day one." },
  { icon: "🌱", title: "Always Evolving",  desc: "Our syllabus is updated every quarter to match what top companies actually hire for." },
  { icon: "💡", title: "Zero-to-Hero",     desc: "We welcome complete beginners. Our structured path takes you from zero code to job-ready." },
  { icon: "🏆", title: "Proven Results",   desc: "4.9 stars from 2,900+ genuine Google reviews. Our reputation is built on student success stories." },
];



export const TECHS: TechItem[] = [
  { label: "HTML5",    color: "bg-orange-100 text-orange-600 border-orange-200" },
  { label: "CSS3",     color: "bg-blue-100   text-blue-600   border-blue-200"   },
  { label: "JavaScript", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  { label: "React.js", color: "bg-cyan-100   text-cyan-700   border-cyan-200"   },
  { label: "Node.js",  color: "bg-green-100  text-green-700  border-green-200"  },
  { label: "Python",   color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { label: "Django",   color: "bg-green-100  text-green-800  border-green-200"  },
  { label: "Java",     color: "bg-red-100    text-red-700    border-red-200"    },
  { label: "Spring",   color: "bg-green-100  text-green-600  border-green-200"  },
  { label: ".NET",     color: "bg-purple-100 text-purple-700 border-purple-200" },
  { label: "Flutter",  color: "bg-cyan-100   text-cyan-600   border-cyan-200"   },
  { label: "MongoDB",  color: "bg-green-100  text-green-700  border-green-200"  },
  { label: "MySQL",    color: "bg-blue-100   text-blue-700   border-blue-200"   },
  { label: "AI & ML",  color: "bg-[#FFF5F1]  text-[#F05A28]  border-[#F0C4B0]" },
];