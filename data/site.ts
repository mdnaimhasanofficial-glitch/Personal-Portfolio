// Ekhane apnar info edit korun. Khali ("") rakhle oi link dekhabe na.
export type Entry = { title: string; place: string; period?: string; points?: string[] }

export const site = {
  name: "Md Naim Hasan",
  title: "Full Stack Web Developer",
  tagline: "Building modern web experiences through code, creativity and innovation.",
  location: "Nilphamari, Bangladesh",
  email: "mdnaimhasan.official@gmail.com",
  whatsapp: "8801616711677", // country code shoho, + chhara
  phoneLabel: "+880 1616 711677",
  github: "https://github.com/mdnaimhasanofficial-glitch",
  linkedin: "https://www.linkedin.com/in/mdnaimhasanofficial-glitch/",
  facebook: "", // Facebook link verify kore ekhane boshan
  cv: "/cv/cv.pdf", // public/cv/cv.pdf
  photo: "/profile.jpg", // public/profile.jpg
  about: [
    "I'm Md Naim Hasan, a passionate Full Stack Developer from Bangladesh with a background in Computer Science and Technology.",
    "I build modern, responsive and user-friendly web applications using React, Next.js, TypeScript, Node.js, Express.js and MongoDB.",
    "I enjoy turning ideas into practical digital solutions, solving real-world problems and continuously improving my development skills.",
    "I'm particularly interested in full-stack engineering, backend development, database management, authentication systems and scalable web applications.",
  ],
  learning: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Backend & REST APIs", "Authentication"],
}

export const skills = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] },
  { group: "Backend & Database", items: ["Node.js", "Express.js", "MongoDB", "REST API", "Better Auth", "JWT"] },
  { group: "Tools & Deployment", items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"] },
]

export const experience: Entry[] = [
  {
    title: "Industrial Attachment",
    place: "Daffodil International Professional Training Institute (DIPTI)",
    period: "Present",
    points: ["Student query management", "Student communication and academic/administrative coordination"],
  },
]

export const education: Entry[] = [
  { title: "Diploma in Engineering — Computer Science and Technology", place: "UST Private Polytechnic Institute, Nilphamari", period: "2026" },
  { title: "Web Development Level 1", place: "Programming Hero", points: ["Assignment 04: 60/60"] },
  { title: "Dakhil (Secondary equivalent)", place: "GPA 3.94", period: "2022" },
]

export const nav = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Showcase", id: "showcase" },
  { label: "Contact", id: "contact" },
]

export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hello, I visited your portfolio and would like to talk."
)}`
