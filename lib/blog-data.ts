export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage?: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  tag?: string;
  image?: string;
  imageAlt?: string;
}

export interface BlogDetail extends BlogPost {
  emoji: string;
  content: string;
  sections: Array<{
    title: string;
    content: string;
    highlight?: string;
    tip?: string;
  }>;
  relatedPostIds?: number[];
}

// SINGLE SOURCE OF TRUTH - All blog data in one place
export const allBlogPosts: BlogDetail[] = [
{
  id: 1,
  slug: 'html-css-course-lucknow',
  title: 'Top HTML & CSS Course in Lucknow (2026) – Complete Guide for Students',
  excerpt: 'Looking for the best HTML & CSS course in Lucknow? Check course details, fees, syllabus, job opportunities, and career scope for beginners in 2026.',
  author: '0xKid_root',
  date: 'Mar 20, 2025',
  category: 'Web Development',
  readTime: '9 min',
  emoji: '🌐',
  image: '/images/blog-html-css-course.png',
  imageAlt: 'Best HTML CSS course in Lucknow for beginners web development training',
  featured: false,
  tag: 'Course Guide',
  content: 'If you are searching for the best HTML & CSS course in Lucknow, this guide will help you understand everything from syllabus to career opportunities. HTML and CSS are the foundation of web development. HTML is used to structure websites, while CSS is used to design and style them. With the growing demand for websites in Lucknow and across India, learning these skills can help you start your career in tech quickly.',
  sections: [
    {
      title: 'Why Learn HTML & CSS in Lucknow?',
      content: 'Lucknow is becoming a fast-growing tech city with increasing demand for web developers and designers. HTML and CSS are beginner-friendly and allow you to build real websites from scratch. Local businesses, startups, and agencies in Lucknow are actively hiring frontend developers.',
      highlight: 'HTML and CSS are the easiest and fastest way to start a career in web development, even if you have zero coding experience.'
    },
    {
      title: 'What You Can Build After Learning',
      content: 'After completing an HTML & CSS course, you can create business websites for local shops, personal portfolio websites, responsive landing pages, blog websites, and even basic eCommerce pages. These skills also help you start freelancing in Lucknow.',
      tip: 'Build at least 3–5 real projects like a portfolio and landing page to showcase your skills.'
    },
    {
      title: 'Career Scope & Salary in Lucknow and India',
      content: 'After learning HTML & CSS, you can apply for roles like Frontend Developer (₹3–5 LPA), UI Developer (₹4–7 LPA), Web Designer (₹2.5–4 LPA), or Full Stack Developer (₹6–12 LPA). In Lucknow, beginners can earn around ₹10,000–₹25,000 per month and grow quickly with experience.',
      highlight: 'With experience and strong projects, developers can earn ₹10–25 LPA in top companies.'
    },
    {
      title: 'Course Curriculum Overview',
      content: 'A complete HTML & CSS course includes HTML basics (structure, forms, semantic tags), CSS concepts (box model, flexbox, grid, responsive design), and real-world projects like portfolio websites and landing pages. Most courses can be completed in 30–60 days.',
      tip: 'Focus on responsive design and mobile-first approach as most companies prefer these skills.'
    },
    {
      title: 'Who Should Join This Course?',
      content: 'This course is ideal for B.Tech, BCA, MCA students, beginners with no coding background, diploma students, working professionals, and freelancers. Anyone interested in web development can start without any prior experience.',
      highlight: 'There are no prerequisites — you can start learning HTML & CSS from zero.'
    },
    {
      title: 'Next Steps After HTML & CSS',
      content: 'After mastering HTML and CSS, you should learn JavaScript for interactivity, then move to frontend frameworks like React, and finally explore backend technologies like Node.js to become a full-stack developer.',
      tip: 'Do not rush into advanced topics. Build a strong foundation in HTML and CSS first.'
    }
  ],
  relatedPostIds: [2, 3, 4]
},
  {
    id: 2,
    slug: 'zero-to-6lpa-8-months',
    title: 'From Zero Coding Knowledge to a ₹6 LPA Job in 8 Months',
    excerpt: 'A mechanical engineering graduate shares his journey through vocational training and how he pivoted into a full-stack developer role.',
    author: '0xKid_root',
    date: 'Jan 15, 2025',
    category: 'Student Stories',
    readTime: '4 min',
    emoji: '🚀',
    image: '/images/blog-success-story.jpg',
    imageAlt: 'Career transformation and success story from zero to developer',
    content: 'The MERN stack has become the gold standard for full-stack JavaScript development. With over 70% of job postings requiring React knowledge and MongoDB gaining enterprise adoption, learning MERN is one of the smartest career moves you can make in 2025.',
    sections: [
      {
        title: 'Why MERN in 2025?',
        content: 'The MERN stack represents the perfect balance of performance, scalability, and developer experience. Companies from startups to enterprises rely on this stack for mission-critical applications.',
        highlight: 'JavaScript everywhere means faster development and easier knowledge transfer across the stack.'
      },
      {
        title: 'MongoDB: The Database Choice',
        content: 'MongoDB\'s flexibility and JSON-like document structure make it perfect for rapid prototyping and iterative development. Its horizontal scalability ensures your app grows with your user base.',
        tip: 'Use MongoDB Atlas for managed hosting and built-in backups without the operational overhead.'
      },
      {
        title: 'Express & Node.js Backend',
        content: 'Express provides a lightweight, unopinionated framework for building APIs. Node.js\'s event-driven architecture handles concurrent connections efficiently, perfect for real-time applications.',
        highlight: 'Middleware-based architecture allows for clean, modular code organization.'
      },
      {
        title: 'React: The UI Revolution',
        content: 'React\'s component-based architecture and virtual DOM make building interactive UIs intuitive and performant. With hooks and functional components, modern React development is more elegant than ever.',
        tip: 'Master state management with useState and useContext before jumping into Redux or Zustand.'
      },
      {
        title: 'Career Prospects',
        content: 'MERN developers are highly sought after with salaries ranging from ₹4-12 LPA for freshers to ₹15-30 LPA for experienced developers. The demand continues to grow exponentially.',
        highlight: '78% of tech startups use at least one MERN technology in their stack.'
      }
    ],
    relatedPostIds: [2, 3, 4]
  },
  {
    id: 3,
    slug: 'crack-first-it-interview',
    title: 'How to Crack Your First IT Interview: A Step-by-Step Guide',
    excerpt: 'Resume tips, mock interview strategies, and the exact DSA topics that matter most — from students who landed top jobs.',
    author: 'Priya Singh',
    date: 'Feb 28, 2025',
    category: 'Career Tips',
    readTime: '8 min',
    emoji: '🎯',
    image: '/images/blog-interview.jpg',
    imageAlt: 'IT job interview preparation and career tips',
    content: 'Your first IT interview is crucial. With the right preparation strategy, you can significantly increase your chances of landing that dream job.',
    sections: [
      {
        title: 'Craft the Perfect Resume',
        content: 'Your resume is your first impression. Focus on impact, not length. Include projects with real-world applications and quantifiable results.',
        highlight: 'One page is ideal for freshers. Use action verbs and focus on achievements, not just responsibilities.'
      },
      {
        title: 'DSA Topics That Matter',
        content: 'Master arrays, strings, linked lists, trees, and graphs. These topics appear in 80% of interviews. Practice 100+ questions minimum.',
        tip: 'Use LeetCode or HackerRank. Start with easy problems and gradually increase difficulty.'
      },
      {
        title: 'System Design Basics',
        content: 'Understand databases, caching, APIs, and scalability. Even for junior roles, basic system design knowledge is expected.',
        highlight: 'Focus on real-world examples like Instagram, Twitter, or YouTube at scale.'
      },
      {
        title: 'Behavioral Interview Mastery',
        content: 'Use the STAR method: Situation, Task, Action, Result. Prepare 5-7 stories showcasing teamwork, problem-solving, and growth.',
        tip: 'Practice out loud. Talking through your approach is as important as the technical solution.'
      }
    ],
    relatedPostIds: [1, 3, 5]
  },
  {
    id: 4,
    slug: 'ai-not-replacing-developers',
    title: 'AI is Not Replacing Developers — Here\'s What to Learn Instead',
    excerpt: 'We break down exactly which skills make developers AI-proof in 2025 and why learning full-stack + AI fundamentals is crucial.',
    author: 'Ankit Sharma',
    date: 'Feb 14, 2025',
    category: 'AI & ML',
    readTime: '5 min',
    emoji: '🤖',
    image: '/images/blog-ai-developers.jpg',
    imageAlt: 'AI and developers collaboration in modern tech',
    content: 'AI is transforming development, not replacing developers. The developers who thrive are those who embrace AI as a tool and combine it with irreplaceable human skills.',
    sections: [
      {
        title: 'The AI Myth',
        content: 'ChatGPT and Copilot are powerful tools, but they can\'t replace human judgment, architecture decisions, or system thinking. They\'re best used as productivity multipliers.',
        highlight: 'AI handles boilerplate; humans handle complexity and creativity.'
      },
      {
        title: 'Skills That Matter More Than Ever',
        content: 'System design, architecture, and problem-solving skills become more valuable as routine coding gets automated. Focus on the "why" not just the "how".',
        tip: 'Learn to prompt engineer effectively. The ability to communicate with AI tools is the new skill.'
      },
      {
        title: 'AI Fundamentals for Developers',
        content: 'You don\'t need to be an ML engineer, but understanding LLMs, embeddings, and prompt design opens new opportunities.',
        highlight: 'Building AI-powered features is becoming as common as building APIs.'
      },
      {
        title: 'The Winning Combination',
        content: 'Full-stack development + AI fundamentals + soft skills = unstoppable developer. This combination commands premium salaries and endless opportunities.',
        tip: 'Start with Vercel AI SDK or LangChain to build practical AI features in your projects.'
      }
    ],
    relatedPostIds: [1, 2, 4]
  },
  {
    id: 5,
    slug: 'django-vs-nodejs-2025',
    title: 'Django vs Node.js: Which Backend Should You Learn First in 2025?',
    excerpt: 'A comprehensive comparison of Python Django and Node.js — performance, learning curve, job demand, and recommendations.',
    author: 'Neha Gupta',
    date: 'Jan 30, 2025',
    category: 'Python',
    readTime: '7 min',
    emoji: '🐍',
    image: '/images/blog-django-nodejs.jpg',
    imageAlt: 'Comparison of Django Python and Node.js frameworks',
    content: 'Choosing between Django and Node.js is one of the first decisions for aspiring backend developers. Both are powerful, but they suit different learning paths and career goals.',
    sections: [
      {
        title: 'Learning Curve',
        content: 'Django\'s batteries-included approach means less boilerplate. Node.js offers more flexibility but requires more setup. Beginners often find Django more intuitive.',
        highlight: 'Django: Faster to productivity. Node.js: Steeper initial curve, faster growth later.'
      },
      {
        title: 'Job Market in 2025',
        content: 'Node.js dominates in startups and fast-growing companies (85% of startups). Django is stronger in enterprises and fintech. Both have excellent job prospects.',
        tip: 'Check job boards in your target location. Global demand heavily favors Node.js.'
      },
      {
        title: 'Performance & Scalability',
        content: 'Node.js excels with real-time applications and I/O-heavy tasks. Django handles CPU-intensive operations better with its synchronous model.',
        highlight: 'For most web applications, both perform excellently. Choose based on ecosystem, not raw performance.'
      },
      {
        title: 'Ecosystem & Libraries',
        content: 'Node.js has npm with 2M+ packages (and lots of abandoned ones). Django has fewer packages but higher quality and maturity.',
        tip: 'Node.js: Flexibility but dependency management headaches. Django: Stability and best practices baked in.'
      },
      {
        title: 'Our Recommendation',
        content: 'Start with Node.js if you already know JavaScript. Start with Django if you want to learn Python first. Both will make you a great backend developer.',
        highlight: 'The best backend is the one you master. Master one, learn the other later.'
      }
    ],
    relatedPostIds: [1, 2, 3]
  },

];

// Helper function to get single blog post by slug
export function getBlogBySlug(slug: string): BlogDetail | undefined {
  return allBlogPosts.find(post => post.slug === slug);
}

// Helper function to get blog posts for listing (without full content)
export function getBlogPostsForListing(): BlogPost[] {
  return allBlogPosts.map(({ emoji, content, sections, relatedPostIds, ...post }) => post);
}

// Helper function to get related posts
export function getRelatedPosts(postId: number, limit = 3): BlogPost[] {
  const post = allBlogPosts.find(p => p.id === postId);
  if (!post?.relatedPostIds) return [];
  
  return post.relatedPostIds
    .map(id => allBlogPosts.find(p => p.id === id))
    .filter(Boolean)
    .slice(0, limit)
    .map(({ emoji, content, sections, relatedPostIds, ...post }) => post);
}

export const categories = ['All', 'Web Development', 'Career Tips', 'AI & ML', 'Python', 'Student Stories'];
