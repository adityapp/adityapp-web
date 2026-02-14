import Link from "next/link";

export default function AboutPage(){
  const experiences = [
    {
      company: "Superbank",
      role: "Software Engineer (Backend)",
      startDate: "July 2025",
      endDate: "Present",
      location: "Jakarta, Indonesia",
      description: [
        "TBD",
      ],
      techStack: ["Golang", "MySQL", "Redis"]
    },
    {
      company: "Everywhere.id",
      role: "Software Engineer (Backend)",
      startDate: "September 2023",
      endDate: "March 2025",
      location: "Jakarta, Indonesia",
      description: [
        "Build monitoring and alerting to check the issues from Performer or Play Everywhere Box to notify the Operational Team about the issues.",
        "Involved in the migration of microservices from Google Cloud Platform (GCP) to Tencent Cloud, optimizing infrastructure reliability.",
        "Optimized logging system, reducing log storage from ~60GB to 20GB/day, improving error tracking and operational efficiency.",
        "Contributed to the development of Everywhere for Business platform.",
        "Built a People Detection using Python to count viewers in Play Everywhere venues."
      ],
      techStack: ["Golang", "Ruby", "PostgreSQL", "Redis", "Elasticsearch", "MongoDB"]
    },
    {
      company: "Gojek",
      role: "Software Engineer (Backend)",
      startDate: "February 2020",
      endDate: "September 2023",
      location: "Jakarta, Indonesia",
      description: [
        "Developed backend services for GoPlay, Gojek's Video-On-Demand (VOD) platform.",
        "Integrated GoPlay with GoFood, GoMart, Promo Bundle, and other internal services.",
        "Designed and implemented GoPlay Token, a virtual currency system integrated with Midtrans, App Store, and Play Store, leading to a 70% increase in virtual gift transactions and a 30% rise in revenue per transaction. Implemented double-entry bookkeeping for financial accuracy.",
        "Contributed to the migration from VOD to a Live Streaming platform using Agora and RTMP protocols.",
        "Developed multi-streaming capabilities and integrated real-time chat with platforms like YouTube and Facebook.",
        "Created the Play Everywhere Box, an interactive live-streaming device enabling two-way communication between performers and audiences."
      ],
      techStack: ["Go", "Ruby", "PostgreSQL", "Redis", "Elasticsearch", "MongoDB"]
    },
    {
      company: "Blibli.com",
      role: "Software Engineer Intern (Android)",
      startDate: "June 2019",
      endDate: "September 2019",
      location: "Jakarta, Indonesia",
      description: [
        "Developed new features and resolved production issues for the Merchant Team.",
        "Refactored legacy Java code to Kotlin for improved maintainability.",
        "Increased unit test coverage from 32% to 90%+ using JUnit & Mockito."
      ],
      techStack: ["Java", "Kotlin", "JUnit", "Mockito", "MVP"]
    }
  ];

  return(
    <div className="min-h-screen p-4 md:p-10 font-mono text-terminal-fg max-w-4xl mx-auto">
      <div className="mb-8 border-b border-terminal-gray/20 pb-4">
        <span className="text-terminal-green">➜</span> <span className="text-terminal-cyan">~</span> <span className="text-terminal-yellow">man</span> experience
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="space-y-4">
            {/* Header / Synopsis equivalent */}
            <div>
              <h2 className="text-xl font-bold text-terminal-purple uppercase tracking-wider mb-1">
                {exp.company}
              </h2>
              <div className="text-terminal-comment text-sm flex flex-col sm:flex-row sm:justify-between">
                <span className="font-bold text-terminal-orange">{exp.role}</span>
                <span>{exp.startDate} - {exp.endDate} | {exp.location}</span>
              </div>
            </div>

            {/* Description Section */}
            <div className="pl-4 md:pl-8 border-l-2 border-terminal-gray/20">
              <h3 className="text-terminal-cyan text-sm font-bold mb-2">DESCRIPTION</h3>
              <ul className="list-disc list-inside space-y-2 text-terminal-fg/90 leading-relaxed">
                {exp.description.map((desc, i) => (
                  <li key={i} className="pl-2 -indent-2">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Section */}
            <div className="pl-4 md:pl-8">
              <h3 className="text-terminal-cyan text-sm font-bold mb-2">TECH STACK</h3>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-terminal-current text-terminal-green text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Footer for man page look */}
        <div className="pt-12 text-center text-terminal-comment text-xs">
          Manual page experience(1) line {experiences.length * 20}/... (END)
        </div>
      </div>
    </div>
  )
}