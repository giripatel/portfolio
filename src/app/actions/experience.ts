export const getExperience = () => {
  const experience = [
    {
      country: "India",
      duration: {
        from: "January 2023",
        to: "Present",
      },
      company: "ENH I Secure",
      role: "Full Stack Developer",
      summary: [
        "Contributed to the end-to-end development of scalable web applications, resulting in a 30 % increase in user engagement and a 20 % reduction in server response time.",
        "Optimized backend processes, reducing database query times by 40 %, contributing to a more seamless user experience.",
        "Developed and integrated secure authentication protocols, improving data security and reducing unauthorized access incidents by 50 %.",
        "Utilized monorepo architecture to streamline codebase management, reducing deployment times by 25 % and enhancing team collaboration efficiency.",
      ],
      tech: [
        "React",
        "JavaScript",
        "TypeScript",
        "NextJs",
        "NodeJs",
        "Tailwind CSS",
        "Redis",
        "Docker",
        "WebSocket",
      ],
    },
    {
      country: "India",
      duration: {
        from: "November 2023",
        to: "Present",
      },
      company: "Open Source",
      role: "Full Stack Developer",
      summary: [
        "Added real-time features to an open-source application using WebSocket and React, improving user interaction by enabling live data updates.",
        "nhanced the UI of an open-source server status application, leading to better user experience and increased community adoption.",
        "Participated in multiple community talks, sharing insights and contributing to discussions on open-source development, fostering collaboration and knowledge exchange.",
      ],
      tech: [
        "React",
        "JavaScript",
        "TypeScript",
        "NextJs",
        "NodeJs",
        "Tailwind CSS",
        "Docker",
        "WebSocket",
      ],
    },
    ,
  ];

  return experience;
};
