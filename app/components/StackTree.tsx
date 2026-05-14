"use client";

import { motion } from "motion/react";
import type { ComponentType, SVGProps } from "react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiTailwindcss,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMongodb,
  SiGooglecloud,
  SiSelenium,
  SiKotlin,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaRProject } from "react-icons/fa6";

type IconCmp = ComponentType<SVGProps<SVGSVGElement>>;

// --- custom icons -------------------------------------------------------

// C — hex badge with stylised C glyph
const CLang: IconCmp = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      d="M12 2.2L3.6 7v10L12 21.8 20.4 17V7L12 2.2zm0 2.3l6.4 3.7v8L12 19.5 5.6 16V8.2L12 4.5z"
      fillRule="evenodd"
    />
    <path d="M14.6 14.6c-.7.7-1.7 1.1-2.7 1.1-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8c1 0 2 .4 2.7 1.1l-1.1 1.1c-.4-.4-1-.6-1.6-.6-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2c.6 0 1.2-.2 1.6-.6l1.1 1.1z" />
  </svg>
);

// Playwright — official multi-color SVG from playwright.dev
const Playwright: IconCmp = (props) => (
  <svg viewBox="0 0 400 400" fill="none" {...props}>
    <path
      d="M136.444 221.556C123.558 225.213 115.104 231.625 109.535 238.032C114.869 233.364 122.014 229.08 131.652 226.348C141.51 223.554 149.92 223.574 156.869 224.915V219.481C150.941 218.939 144.145 219.371 136.444 221.556ZM108.946 175.876L61.0895 188.484C61.0895 188.484 61.9617 189.716 63.5767 191.36L104.153 180.668C104.153 180.668 103.578 188.077 98.5847 194.705C108.03 187.559 108.946 175.876 108.946 175.876ZM149.005 288.347C81.6582 306.486 46.0272 228.438 35.2396 187.928C30.2556 169.229 28.0799 155.067 27.5 145.928C27.4377 144.979 27.4665 144.179 27.5336 143.446C24.04 143.657 22.3674 145.473 22.7077 150.721C23.2876 159.855 25.4633 174.016 30.4473 192.721C41.2301 233.225 76.8659 311.273 144.213 293.134C158.872 289.185 169.885 281.992 178.152 272.81C170.532 279.692 160.995 285.112 149.005 288.347ZM161.661 128.11V132.903H188.077C187.535 131.206 186.989 129.677 186.447 128.11H161.661Z"
      fill="#2D4552"
    />
    <path
      d="M193.981 167.584C205.861 170.958 212.144 179.287 215.465 186.658L228.711 190.42C228.711 190.42 226.904 164.623 203.57 157.995C181.741 151.793 168.308 170.124 166.674 172.496C173.024 167.972 182.297 164.268 193.981 167.584ZM299.422 186.777C277.573 180.547 264.145 198.916 262.535 201.255C268.89 196.736 278.158 193.031 289.837 196.362C301.698 199.741 307.976 208.06 311.307 215.436L324.572 219.212C324.572 219.212 322.736 193.41 299.422 186.777ZM286.262 254.795L176.072 223.99C176.072 223.99 177.265 230.038 181.842 237.869L274.617 263.805C282.255 259.386 286.262 254.795 286.262 254.795ZM209.867 321.102C122.618 297.71 133.166 186.543 147.284 133.865C153.097 112.156 159.073 96.0203 164.029 85.204C161.072 84.5953 158.623 86.1529 156.203 91.0746C150.941 101.747 144.212 119.124 137.7 143.45C123.586 196.127 113.038 307.29 200.283 330.682C241.406 341.699 273.442 324.955 297.323 298.659C274.655 319.19 245.714 330.701 209.867 321.102Z"
      fill="#2D4552"
    />
    <path
      d="M161.661 262.296V239.863L99.3324 257.537C99.3324 257.537 103.938 230.777 136.444 221.556C146.302 218.762 154.713 218.781 161.661 220.123V128.11H192.869C189.471 117.61 186.184 109.526 183.423 103.909C178.856 94.612 174.174 100.775 163.545 109.665C156.059 115.919 137.139 129.261 108.668 136.933C80.1966 144.61 57.179 142.574 47.5752 140.911C33.9601 138.562 26.8387 135.572 27.5049 145.928C28.0847 155.062 30.2605 169.224 35.2445 187.928C46.0272 228.433 81.663 306.481 149.01 288.342C166.602 283.602 179.019 274.233 187.626 262.291H161.661V262.296ZM61.0848 188.484L108.946 175.876C108.946 175.876 107.551 194.288 89.6087 199.018C71.6614 203.743 61.0848 188.484 61.0848 188.484Z"
      fill="#E2574C"
    />
    <path
      d="M341.786 129.174C329.345 131.355 299.498 134.072 262.612 124.185C225.716 114.304 201.236 97.0224 191.537 88.8994C177.788 77.3834 171.74 69.3802 165.788 81.4857C160.526 92.163 153.797 109.54 147.284 133.866C133.171 186.543 122.623 297.706 209.867 321.098C297.093 344.47 343.53 242.92 357.644 190.238C364.157 165.917 367.013 147.5 367.799 135.625C368.695 122.173 359.455 126.078 341.786 129.174ZM166.497 172.756C166.497 172.756 180.246 151.372 203.565 158C226.899 164.628 228.706 190.425 228.706 190.425L166.497 172.756ZM223.42 268.713C182.403 256.698 176.077 223.99 176.077 223.99L286.262 254.796C286.262 254.791 264.021 280.578 223.42 268.713ZM262.377 201.495C262.377 201.495 276.107 180.126 299.422 186.773C322.736 193.411 324.572 219.208 324.572 219.208L262.377 201.495Z"
      fill="#2EAD33"
    />
    <path
      d="M139.88 246.04L99.3324 257.532C99.3324 257.532 103.737 232.44 133.607 222.496L110.647 136.33L108.663 136.933C80.1918 144.611 57.1742 142.574 47.5704 140.911C33.9554 138.563 26.834 135.572 27.5001 145.929C28.08 155.063 30.2557 169.224 35.2397 187.929C46.0225 228.433 81.6583 306.481 149.005 288.342L150.989 287.719L139.88 246.04ZM61.0848 188.485L108.946 175.876C108.946 175.876 107.551 194.288 89.6087 199.018C71.6615 203.743 61.0848 188.485 61.0848 188.485Z"
      fill="#D65348"
    />
    <path
      d="M225.27 269.163L223.415 268.712C182.398 256.698 176.072 223.99 176.072 223.99L232.89 239.872L262.971 124.281L262.607 124.185C225.711 114.304 201.232 97.0224 191.532 88.8994C177.783 77.3834 171.735 69.3802 165.783 81.4857C160.526 92.163 153.797 109.54 147.284 133.866C133.171 186.543 122.623 297.706 209.867 321.097L211.655 321.5L225.27 269.163ZM166.497 172.756C166.497 172.756 180.246 151.372 203.565 158C226.899 164.628 228.706 190.425 228.706 190.425L166.497 172.756Z"
      fill="#1D8D22"
    />
    <path
      d="M141.946 245.451L131.072 248.537C133.641 263.019 138.169 276.917 145.276 289.195C146.513 288.922 147.74 288.687 149 288.342C152.302 287.451 155.364 286.348 158.312 285.145C150.371 273.361 145.118 259.789 141.946 245.451ZM137.7 143.451C132.112 164.307 127.113 194.326 128.489 224.436C130.952 223.367 133.554 222.371 136.444 221.551L138.457 221.101C136.003 188.939 141.308 156.165 147.284 133.866C148.799 128.225 150.318 122.978 151.832 118.085C149.393 119.637 146.767 121.228 143.776 122.867C141.759 129.093 139.722 135.898 137.7 143.451Z"
      fill="#C04B41"
    />
  </svg>
);

// Firebase — proper multi-color flame
const FirebaseIcon: IconCmp = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M3.89 15.673 6.255 4.103l2.51 4.77-4.875 6.8z" fill="#F57F17" />
    <path
      d="M3.89 15.673 17.314 14.36 13.21 4.892 3.89 15.673z"
      fill="#FFA000"
    />
    <path
      d="M3.89 15.673 12.18 21.36l8.155-5.687-3.022-1.313-13.423 1.313z"
      fill="#FFCA28"
    />
    <path
      d="M8.765 8.873 11.05 6.5 13.21 4.892 9.317 1.5l-.553 7.373z"
      fill="#F57C00"
    />
  </svg>
);

// --- tree data ----------------------------------------------------------

type Leaf = { name: string; Icon: IconCmp; color: string };
type Branch = { name: string; leaves: Leaf[] };

const tree: Branch[] = [
  {
    name: "languages",
    leaves: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#C9A227" },
      { name: "C", Icon: CLang, color: "#5C6BC0" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Java", Icon: DiJava, color: "#E76F00" },
      { name: "R", Icon: FaRProject, color: "#276DC3" },
    ],
  },
  {
    name: "frontend",
    leaves: [
      { name: "React", Icon: SiReact, color: "#3FA9C9" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#0F0F0F" },
      { name: "Svelte", Icon: SiSvelte, color: "#FF3E00" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    name: "app-dev",
    leaves: [
      { name: "React Native", Icon: SiReact, color: "#3FA9C9" },
      { name: "Kotlin", Icon: SiKotlin, color: "#7F52FF" },
    ],
  },
  {
    name: "backend",
    leaves: [
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "#6d6a62" },
      { name: "Django", Icon: SiDjango, color: "#0C4B33" },
    ],
  },
  {
    name: "ai-ml",
    leaves: [
      { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
      { name: "scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", Icon: SiPandas, color: "#3F2A6B" },
      { name: "NumPy", Icon: SiNumpy, color: "#4DABCF" },
    ],
  },
  {
    name: "data-cloud",
    leaves: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", Icon: FirebaseIcon, color: "#FFCA28" },
      { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
  {
    name: "automation",
    leaves: [
      { name: "Selenium", Icon: SiSelenium, color: "#43B02A" },
      { name: "Playwright", Icon: Playwright, color: "#2EAD33" },
    ],
  },
];

const totalLeaves = tree.reduce((acc, b) => acc + b.leaves.length, 0);

function BranchBlock({
  branch,
  baseDelay,
}: {
  branch: Branch;
  baseDelay: number;
}) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          delay: baseDelay,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex items-center text-foreground"
      >
        <span className="select-none whitespace-pre text-accent">▸ </span>
        <span>{branch.name}/</span>
      </motion.div>

      {branch.leaves.map((leaf, j) => {
        const isLast = j === branch.leaves.length - 1;
        const connector = isLast ? "└── " : "├── ";
        return (
          <motion.div
            key={leaf.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: baseDelay + 0.05 + j * 0.045,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex items-center"
          >
            <span className="select-none whitespace-pre text-subtle">
              {"  "}
              {connector}
            </span>
            <leaf.Icon
              className="mr-3 h-[22px] w-[22px] shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ color: leaf.color }}
              aria-hidden
            />
            <span className="text-foreground/85 transition-colors group-hover:text-foreground">
              {leaf.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function StackTree() {
  return (
    <div className="overflow-hidden rounded-2xl border hairline bg-foreground/[0.02] backdrop-blur-sm">
      {/* terminal-style top bar */}
      <div className="flex items-center gap-2 border-b hairline px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-subtle" />
        <span className="h-2.5 w-2.5 rounded-full bg-subtle/60" />
        <span className="ml-3 font-mono text-xs tracking-wide text-muted">
          ~/aitijya/stack — tree
        </span>
      </div>

      <div className="px-6 py-7 font-mono text-[15px] leading-[2] sm:px-10 sm:py-10 sm:text-base">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-muted">$</span>{" "}
          <span className="text-foreground">tree</span>{" "}
          <span className="text-accent">--icons</span>{" "}
          <span className="text-muted">./stack</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-3 text-lg text-foreground"
        >
          stack/
        </motion.div>

        <div className="mt-5 grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
          {tree.map((branch, i) => (
            <BranchBlock
              key={branch.name}
              branch={branch}
              baseDelay={0.25 + i * 0.06}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 text-subtle"
        >
          {tree.length} branches, {totalLeaves} leaves.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 1, duration: 0.4 }}
          className="mt-1 flex items-center gap-2"
        >
          <span className="text-muted">$</span>
          <span className="inline-block h-5 w-2.5 animate-pulse bg-foreground/70" />
        </motion.div>
      </div>
    </div>
  );
}
