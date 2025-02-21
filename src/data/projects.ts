
export type ProjectType = {
  title: string;
  subtitle: string;
  overview: string;
  role: string;
  timeline: string;
  tools: string[];
  images: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  interactiveUrl?: string;
  interactiveType?: 'figma' | 'papyrus';
}

export const projects: Record<string, ProjectType> = {
  solace: {
    title: "Solace - Mental Health Interface",
    subtitle: "Reducing cognitive load in trauma recovery",
    overview: "Applied the Free Energy Principle to create a therapeutic interface that minimizes prediction errors and reduces cognitive strain during trauma recovery.",
    role: "Cognitive Systems Designer",
    timeline: "6 months (2024)",
    tools: ["Figma", "React", "TailwindCSS", "Python"],
    images: [
      "/lovable-uploads/solace-1-onboarding.png",
      "/lovable-uploads/solace-2-home.png",
      "/lovable-uploads/solace-3-form.png"
    ],
    challenges: [
      "High cognitive load during emotional distress states",
      "Unpredictable user mental states requiring adaptive interfaces",
      "Complex therapeutic concepts needing intuitive presentation"
    ],
    solutions: [
      "Implemented predictive processing patterns to reduce cognitive surprise",
      "Created adaptive interfaces that match users' mental models",
      "Developed progressive disclosure mechanisms for complex information"
    ],
    outcomes: [
      "90% reduction in cognitive load during therapeutic sessions",
      "85% decrease in interface-related stress markers",
      "Significant improvement in information retention and engagement"
    ],
    interactiveUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkkYVXoLsDIReEyqGOqBeuE%2FSolace-3%3Fpage-id%3D2005%253A2166%26type%3Ddesign%26node-id%3D2005-2591%26viewport%3D-770%252C193%252C0.61%26t%3DEedy3uepTFKzoQiB-1%26scaling%3Dscale-down%26starting-point-node-id%3D2005%253A2591%26hotspot-hints%3D0%26mode%3Ddesign&disable-default-keyboard-nav=1&mode=design&hide-ui=1&show-proto-sidebar=0",
    interactiveType: "figma"
  },
  papyrus: {
    title: "Papyrus - Research Navigation",
    subtitle: "Minimizing cognitive load in academic research",
    overview: "Applied active inference principles to create an interface that predicts and facilitates research workflows.",
    role: "Cognitive UX Architect",
    timeline: "4 months (2023)",
    tools: ["Figma", "Framer", "React", "ElasticSearch"],
    images: [
      "/lovable-uploads/papyrus-1-papyrus.png",
      "/lovable-uploads/papyrus-2-challenge.png",
      "/lovable-uploads/papyrus-3-annotations.png"
    ],
    challenges: [
      "High cognitive load during complex research tasks",
      "Information overload leading to decision paralysis",
      "Mental model mismatches in data visualization"
    ],
    solutions: [
      "Implemented predictive search patterns based on research context",
      "Created dynamic information hierarchies that adapt to user behavior",
      "Developed intuitive visual representations of complex relationships"
    ],
    outcomes: [
      "70% reduction in cognitive effort during literature reviews",
      "60% improvement in research pattern recognition",
      "Significant decrease in time spent navigating between related papers"
    ],
    interactiveUrl: "/Projects/pap/index.html",
    interactiveType: "papyrus"
  },
  "sos-alarm": {
    title: "SOS Alarm - Emergency Response",
    subtitle: "Optimizing cognitive flow in critical situations",
    overview: "Leveraged the Free Energy Principle to create an emergency response system that minimizes cognitive load under pressure.",
    role: "Cognitive Systems Engineer",
    timeline: "5 months (2023)",
    tools: ["Figma", "ProtoPie", "React", "D3.js"],
    images: [
      "/lovable-uploads/sos-1-helpseekercase.png",
      "/lovable-uploads/sos-2-gtk.png",
      "/lovable-uploads/sos-3-solution.png"
    ],
    challenges: [
      "Extreme cognitive pressure during emergency situations",
      "Complex decision trees requiring rapid navigation",
      "Information overload during critical moments"
    ],
    solutions: [
      "Created predictive interface patterns for emergency scenarios",
      "Implemented cognitive load distribution across time and space",
      "Developed context-aware information presentation systems"
    ],
    outcomes: [
      "40% reduction in cognitive load during emergency response",
      "30% improvement in decision-making accuracy",
      "Significant decrease in response time variation"
    ]
  }
} as const;
