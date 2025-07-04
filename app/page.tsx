import {
  Hero,
  ExperienceSkills,
  Projects,
  Testimonials,
  Contact,
  Loader,
  ScrollToTop,
} from "@/components/index";
import { ModalProvider } from "@/context";

export default async function page() {
  const data = {
    personalInfo: {
      siteName: "SiteName",
      name: "Thomas Pappas",
      email: "thomas.marklin.pappas@gmail.com",
      address: "Brighton, MI, USA",
      position: "Senior Software Engineer",
      resume: "/Thomas-Pappas-Resume.pdf",
      profileImage: "/profile.png",
      setupImage: "/setup.jpg",
      moreInfo: "My first encounter with computers sparked a lifelong passion for software engineering 20 years ago. The screens and programs felt almost magical, inspiring me to delve into this fascinating field. Over the years, I’ve witnessed the remarkable evolution of IT and am proud to have played a part in its progress. Throughout my career, I’ve helped businesses in the IT industry succeed by leveraging innovative strategies and cutting-edge technologies. My true passion lies in building software solutions that are both user-friendly and impactful, enhancing everyday experiences. I strive to create practical, reliable applications that people can depend on in their daily lives.",
      workingHours: "9:00 AM - 5:00 PM"
    },
    workExperience: [{
      position: "Senior Software Engineer",
      jobDescription: "At Airbnb, I focus on scaling our platform by implementing cutting-edge technologies to ensure smooth user experiences. I also play a key role in mentoring junior engineers and collaborating across teams to drive innovation and efficiency.",
      companyName: "Airbnb",
      companyUrl: "https://www.airbnb.com/",
      companyLogo: "/airbnb.png",
      startDate: "Jul 2021",
      endDate: "",
    }, {
      position: "Senior Software Engineer",
      jobDescription: "I joined this fintech startup in its early stages, when ideas were still taking shape, as one of the first-generation engineers. My role involved translating complex financial business logic into code and developing Brex along with user dashboards.",
      companyName: "Brex",
      companyUrl: "https://www.brex.com/",
      companyLogo: "/brex.jpg",
      startDate: "Jun 2017",
      endDate: "May 2021",
    }, {
      position: "Senior Software Engineer",
      jobDescription: "During my time at SHEIN, the company was focused on driving innovation through new technologies. To meet growing user demand for better services and a more seamless experience, we redesigned the customer-facing website and upgraded the backend infrastructure with a microservices architecture.",
      companyName: "SHEIN",
      companyUrl: "https://us.shein.com/",
      companyLogo: "/shein.jpg",
      startDate: "Mar 2015",
      endDate: "May 2017",
    }, {
      position: "Senior Software Engineer",
      jobDescription: "I began my professional journey at Intel where I had the privilege of working with industry leaders who prioritized product excellence and spearheaded advancements in cloud technology.",
      companyName: "Intel",
      companyUrl: "https://www.intel.com/",
      companyLogo: "/intel.jpg",
      startDate: "Jun 2014",
      endDate: "Feb 2015",
    }],
    education: [{
      position: "Bachelor of Science in Computer Science",
      jobDescription: "",
      companyName: "University of Florida",
      companyUrl: "https://www.ufl.edu/",
      companyLogo: "/universityofflorida.png",
      startDate: "Sep 2010",
      endDate: "May 2014",
    }],
    skills: [{
      name: "C#",
      image: "/CSharp.svg"
    }, {
      name: "Angular",
      image: "/Angular.svg"
    }, {
      name: "C",
      image: "/C.svg"
    }, {
      name: ".NET",
      image: "/NET.svg"
    }, {
      name: "Java",
      image: "/Java.svg"
    }, {
      name: "JavaScript",
      image: "/JavaScript.svg"
    }, {
      name: "Node.js",
      image: "/Node.js.svg"
    }, {
      name: "Next.js",
      image: "/Next.js.svg"
    }, {
      name: "TypeScript",
      image: "/TypeScript.svg"
    }, {
      name: "React",
      image: "/React.svg"
    }, {
      name: "Svelte",
      image: "/Svelte.svg"
    }, {
      name: "React",
      image: "/React.svg"
    }, {
      name: "Vue.js",
      image: "/Vue.js.svg"
    }, {
      name: "Python",
      image: "/Python.svg"
    }, {
      name: "AWS",
      image: "/AWS.svg"
    }, {
      name: "Azure",
      image: "/Azure.svg"
    }, {
      name: "Sass",
      image: "/Sass.svg"
    }, {
      name: "GraphQL",
      image: "/GraphQL.svg"
    }, {
      name: "Hadoop",
      image: "/Hadoop.svg"
    }, {
      name: "Spark",
      image: "/Spark.svg"
    }, {
      name: "Git",
      image: "/Git.svg"
    }, {
      name: "GitHub",
      image: "/GitHub.svg"
    }, {
      name: "GitLab",
      image: "/GitLab.svg"
    }, {
      name: "BitBucket",
      image: "/BitBucket.svg"
    }, {
      name: "MongoDB",
      image: "/MongoDB.svg"
    }, {
      name: "MySQL",
      image: "/MySQL.svg"
    }, {
      name: "PostgresSQL",
      image: "/PostgresSQL.svg"
    }, {
      name: "Elastic Search",
      image: "/Elastic-Search.svg"
    }, {
      name: "Cassandra",
      image: "/Cassandra.svg"
    }, {
      name: "Redis",
      image: "/Redis.svg"
    }, {
      name: "Docker",
      image: "/Docker.svg"
    }, {
      name: "Kubernetes",
      image: "/Kubernetes.svg"
    }, {
      name: "Ansible",
      image: "/Ansible.svg"
    }, {
      name: "Terraform",
      image: "/Terraform.svg"
    }, {
      name: "Kafka",
      image: "/Kafka.svg"
    }, {
      name: "Jenkins",
      image: "/Jenkins.svg"
    }],
    certificates: [{
      title: "Software Engineer Certificate",
      image: "/Software-Engineer-Certificate.png",
      url: "https://www.hackerrank.com/certificates/72c134256af0"
    }, {
      title: "C# Certificate",
      image: "/CSharp-Certificate.png",
      url: "https://www.hackerrank.com/certificates/cb26199befc5"
    }, {
      title: "Angular Certificate",
      image: "/Angular-Certificate.png",
      url: "https://www.hackerrank.com/certificates/c7419b31920e"
    }],
    projects: [{
      title: "SnapLoom",
      description: "SnapLoom is a free AI-powered image editor with tools for background removal, recoloring, aspect ratio resizing, and image generation. Transform your images effortlessly with SnapLoom, at no cost.",
      images: ["/SnapLoom-1.webp", "/SnapLoom-2.webp", "/SnapLoom-3.webp"],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Supabase", "Vercel"],
      liveUrl: "https://www.snaploom.space/",
    }, {
      title: "Free Games Hub",
      description: "Unleash your inner gamer at FreeGamesHub! Dive into a treasure trove of free PC games and browser-based delights. Discover a world of thrilling titles ready for download and instant play – all without breaking the bank. FreeGamesHub is your ultimate destination for nonstop gaming excitement. Whether you're a seasoned veteran or a curious newcomer, find endless fun, challenges, and adventures waiting to be explored. So grab your controller, settle in, and get ready to experience the joy of gaming at FreeGamesHub! It's a personal project.",
      images: ["/FreeGamesHub-1.webp", "/FreeGamesHub-2.webp"],
      techStack: ["Next.js", "TypeScript", "NextUI", "TailwindCSS"],
      liveUrl: "https://www.freegameshub.xyz/",
    }, {
      title: "CoinEcho",
      description: "Stay informed with real-time cryptocurrency updates, expert opinions, and in-depth analysis. CoinEcho brings the world of crypto to your fingertips.",
      images: ["/CoinEcho-1.webp", "/CoinEcho-2.webp"],
      techStack: ["React", "Supabase", "Mantine UI"],
      liveUrl: "https://coinecho.pages.dev/",
    }, {
      title: "FreeAIHub",
      description: "Discover a diverse range of AI tools for Text-to-Image, Automatic Speech Recognition, and more, all available at no cost.",
      images: ["/FreeAIHub-1.webp", "/FreeAIHub-2.webp", "/FreeAIHub-3.webp"],
      techStack: ["Next.js", "TypeScript"],
      liveUrl: "https://www.freeaihub.cloud/",
    }, {
      title: "DOGE INU",
      description: "Calling all Dogecoin enthusiasts! DINU, a playful token built on the Dogechain platform, empowers you to unleash the full potential of the DOGE community. Dive into a world of creativity and possibility, fueled by the spirit of Dogecoin. DINU fosters a fun and engaging experience, making it the perfect way to celebrate your love for all things Doge. Whether you're a seasoned meme master or a curious newcomer, DINU welcomes you to join the pack and explore the exciting possibilities of Dogechain. So, unleash your inner Doge and discover the dynamic world of DINU! It was a freelance project from DOGE INU (A memecoin Cryptocurrency).",
      images: ["/DOGEINU-1.webp", "/DOGEINU-2.webp"],
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://dogeinu.dog/",
    }, {
      title: "EdOutdoors",
      description: "Travel-based web app designed for organizing inspiring school trips and educational tours led by vetted service providers across India. This platform empowers students with hands-on learning and discovery experiences. It features a system where admins can create and list tours, which customers can then purchase. Developed from scratch using React and its ecosystem, the app includes two main panels: one for customers and one for admins. Associated with Edvolve.",
      images: ["/EdOutdoors-1.webp", "/EdOutdoors-2.webp", "/EdOutdoors-3.webp", "/EdOutdoors-4.webp"],
      techStack: ["React", "JavaScript", "Redux", "Redux-Saga", "Material UI"],
      liveUrl: "https://www.edoutdoors.in/",
    }],
    testimonials: [{
      "authorName": "Brian Chesky",
      "authorImage": "/BrianChesky.webp",
      "companyName": "Airbnb",
      "companyUrl": "https://www.airbnb.com/",
      "position": "CEO",
      "content": "Thomas has been instrumental in scaling our platform to serve millions of users worldwide. His technical expertise and strategic thinking have consistently delivered exceptional results. What sets him apart is his ability to mentor junior engineers while driving complex technical initiatives forward. He's not just a brilliant engineer—he's a true leader who elevates everyone around him.",
      "priority": 1
    }, {
      "authorName": "Cosmin Nicolaescu",
      "authorImage": "/CosminNicolaescu.jpg",
      "companyName": "Brex",
      "companyUrl": "https://www.brex.com/",
      "position": "CTO",
      "content": "Working with Thomas during Brex's early days was a game-changer for our engineering team. His deep understanding of financial systems and ability to translate complex business requirements into elegant code solutions was invaluable. He played a crucial role in building our core infrastructure and his contributions continue to impact our platform's reliability.",
      "priority": 2
    }, {
      "authorName": "Tomasz Kantecki",
      "authorImage": "/Tomasz-Kantecki.jpg",
      "companyName": "Intel",
      "companyUrl": "https://www.intel.com/",
      "position": "Team Lead",
      "content": "Thomas demonstrated exceptional technical leadership during his time at Intel. His contributions to our cloud infrastructure projects were outstanding, particularly in optimizing system performance and implementing scalable solutions. His ability to mentor junior engineers while delivering complex technical initiatives made him an invaluable asset to our team and organization.",
      "priority": 3
    }],
    socialLinks: [{
      title: "GitHub",
      url: "https://github.com/thomasmarklinpappas",
      priority: 1
    }, {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/thomas-marklin-pappas",
      priority: 2
    }],
  };

  if (!data) return <Loader />;

  return (
    <ModalProvider>
      <Hero data={data.personalInfo} />
      <ExperienceSkills
        experiences={data.workExperience}
        education={data.education}
        skills={data.skills}
        certificates={data.certificates}
      />
      <Projects projects={data.projects} />
      <Testimonials testimonials={data.testimonials} />
      <Contact
        personalInfo={data.personalInfo}
        socialLinks={data.socialLinks}
      />
      <ScrollToTop />
    </ModalProvider>
  );
}
