"use client";

import { useState, useRef, useEffect } from "react";
import { personalInfo, productionProjects, workExperience, skillCategories } from "../data/project";
import { Terminal, CornerDownLeft, RotateCcw } from "lucide-react";

interface TerminalLog {
  id: string;
  command: string;
  output: string | JSX.Element;
}

const defaultInitialHistory: TerminalLog[] = [
  {
    id: "init-1",
    command: "neofetch --engineer",
    output: (
      <div className="space-y-1.5 text-xs font-mono">
        <div className="text-[#c8a44e] font-bold">
          LE THANH PHAT — Full-Stack & DevOps Engineer
        </div>
        <div className="text-[#444440]">
          ————————————————————————————————————————————
        </div>
        <div><span className="text-[#7a7a75]">Role:</span> Full-Stack & DevOps Engineer</div>
        <div><span className="text-[#7a7a75]">Core Stack:</span> React, Next.js, NestJS, FastAPI, PostgreSQL, Redis, Qdrant, Docker</div>
        <div><span className="text-[#7a7a75]">AI Tooling:</span> LangGraph, Kiro, Claude, Antigravity, Windsurf</div>
        <div><span className="text-[#7a7a75]">Location:</span> Ho Chi Minh City, Vietnam</div>
        <div><span className="text-[#7a7a75]">Status:</span> <span className="text-emerald-400 font-medium">Available for High-Impact Roles</span></div>
        <div className="text-[#7a7a75] pt-1">
          Type <span className="text-[#c8a44e] font-semibold">help</span> or click command shortcuts below.
        </div>
      </div>
    ),
  },
];

export function TerminalInteractive() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLog[]>(defaultInitialHistory);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let output: string | JSX.Element = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1.5 text-xs font-mono">
            <div className="text-[#c8a44e] font-semibold">Available Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[#a0a09b] pt-1">
              <div><span className="text-[#eeeeec] font-bold">summary</span> - Background & biography</div>
              <div><span className="text-[#eeeeec] font-bold">projects</span> - Production platforms list</div>
              <div><span className="text-[#eeeeec] font-bold">experience</span> - Professional career timeline</div>
              <div><span className="text-[#eeeeec] font-bold">skills</span> - Full technical radar</div>
              <div><span className="text-[#eeeeec] font-bold">contact</span> - Phone, Email & GitHub</div>
              <div><span className="text-[#eeeeec] font-bold">hire</span> - Why collaborate with Phat</div>
              <div><span className="text-[#eeeeec] font-bold">clear</span> - Clear terminal output</div>
            </div>
          </div>
        );
        break;

      case "cat summary":
      case "summary":
      case "bio":
        output = (
          <div className="text-xs font-mono space-y-1.5 text-[#a0a09b]">
            <div className="text-[#c8a44e] font-bold">[ENGINEER SUMMARY]</div>
            <p className="leading-relaxed">{personalInfo.summary}</p>
          </div>
        );
        break;

      case "projects":
      case "ls projects":
        output = (
          <div className="text-xs font-mono space-y-2">
            <div className="text-[#c8a44e] font-bold">[PRODUCTION PLATFORMS]</div>
            {productionProjects.map((p, idx) => (
              <div key={idx} className="p-2.5 rounded bg-[#121211] border border-[#20201d]">
                <div className="text-[#eeeeec] font-bold">
                  {idx + 1}. {p.name} ({p.period})
                </div>
                <div className="text-[#7a7a75] text-[11px] mt-0.5">{p.summary}</div>
                <div className="text-[#c8a44e] text-[11px] mt-1">
                  Stack: {p.technologies.all.join(", ")}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="text-xs font-mono space-y-2">
            <div className="text-[#c8a44e] font-bold">[PROFESSIONAL EXPERIENCE]</div>
            <div className="text-[#eeeeec] font-bold">
              Software Engineer @ Innotech Vietnam (2024 - 2026)
            </div>
            <div className="text-[#7a7a75] text-[11px]">Ho Chi Minh City, Vietnam</div>
            <ul className="space-y-1 text-[#a0a09b] pt-1">
              {workExperience[0].bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#5c5c58] shrink-0">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="text-xs font-mono space-y-2">
            <div className="text-[#c8a44e] font-bold">[CORE TECHNICAL STACK]</div>
            {skillCategories.map((c, idx) => (
              <div key={idx} className="text-[#a0a09b]">
                <span className="text-[#eeeeec] font-semibold">{c.title}:</span>{" "}
                {c.skills.map((s) => s.name).join(", ")}
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-xs font-mono space-y-1.5 text-[#a0a09b]">
            <div className="text-[#c8a44e] font-bold">[DIRECT CONTACT CHANNELS]</div>
            <div><span className="text-[#7a7a75]">Email:</span> <a href={`mailto:${personalInfo.email}`} className="text-[#c8a44e] underline">{personalInfo.email}</a></div>
            <div><span className="text-[#7a7a75]">Phone:</span> {personalInfo.phone}</div>
            <div><span className="text-[#7a7a75]">GitHub:</span> <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-[#c8a44e] underline">{personalInfo.github}</a></div>
            <div><span className="text-[#7a7a75]">Location:</span> {personalInfo.location}</div>
          </div>
        );
        break;

      case "hire":
        output = (
          <div className="text-xs font-mono space-y-1.5 p-3 rounded-lg bg-[#141413] border border-[#c8a44e]/30 text-[#eeeeec]">
            <div className="text-[#c8a44e] font-bold">[WHY COLLABORATE WITH LE THANH PHAT]</div>
            <div>✓ End-to-end full-stack & DevOps proficiency (React/Next.js to NestJS/FastAPI to Docker).</div>
            <div>✓ Battle-tested on enterprise HRM, CRM, AI Logistics, and Multi-Agent microservices.</div>
            <div>✓ AI-augmented engineering velocity: rapid feature turnaround with rigorous test coverage.</div>
            <div>✓ Ready for immediate interview and high-impact contribution.</div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <div className="text-xs font-mono text-rose-400">
            Command not recognized: <span className="font-bold">{trimmed}</span>. Type <span className="text-[#c8a44e] font-bold">help</span> to view available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${prev.length}-${Date.now()}`,
        command: cmd,
        output,
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    }
  };

  return (
    <section id="terminal" className="py-24 relative bg-[#111110] border-t border-[#1f1f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1a] border border-[#2e2e2a] text-xs font-mono text-[#c8a44e]">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE CLI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#eeeeec]">
            Engineering Shell & Diagnostic Console
          </h2>
          <p className="text-[#8a8a85] text-sm sm:text-base max-w-2xl leading-relaxed">
            Run diagnostic commands directly or click the shortcuts below to explore technical depth, system metrics, and background details.
          </p>
        </div>

        {/* Preset Command Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "summary",
            "projects",
            "experience",
            "skills",
            "contact",
            "hire",
            "clear",
          ].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-3 py-1 rounded-md bg-[#171715] hover:bg-[#1f1f1c] text-[#a0a09b] hover:text-[#eeeeec] border border-[#272724] text-xs font-mono transition-all flex items-center gap-1.5"
            >
              <span className="text-[#c8a44e]">$</span>
              <span>{cmd}</span>
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="rounded-xl bg-[#0e0e0d] border border-[#272724] shadow-2xl overflow-hidden text-left" suppressHydrationWarning>
          {/* Top Bar */}
          <div className="px-4 py-3 bg-[#171715] border-b border-[#232320] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#7a7a75]">
                phat@engineer: ~/portfolio-terminal
              </span>
            </div>
            <button
              onClick={() => setHistory([])}
              className="text-xs font-mono text-[#7a7a75] hover:text-[#c8a44e] flex items-center gap-1 transition-colors"
              title="Reset Console"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Console Body */}
          <div className="p-4 sm:p-6 space-y-4 max-h-[420px] overflow-y-auto font-mono text-xs" suppressHydrationWarning>
            {history.map((log) => (
              <div key={log.id} className="space-y-2">
                <div className="flex items-center gap-2 text-[#7a7a75]">
                  <span className="text-[#c8a44e] font-bold">phat@engineer:~$</span>
                  <span className="text-[#eeeeec] font-semibold">{log.command}</span>
                </div>
                <div className="pl-4 border-l-2 border-[#20201d] text-[#a0a09b]">
                  {log.output}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Prompt Input Bar */}
          <div className="p-3 bg-[#171715] border-t border-[#232320] flex items-center gap-2">
            <span className="text-[#c8a44e] font-mono text-xs font-bold pl-2">
              phat@engineer:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type 'help', 'projects', 'contact', 'hire'..."
              className="flex-1 bg-transparent text-[#eeeeec] font-mono text-xs focus:outline-none placeholder:text-[#444440]"
            />
            <button
              onClick={() => executeCommand(input)}
              className="px-3.5 py-1.5 rounded-lg bg-[#c8a44e] hover:bg-[#d4b35c] text-[#111110] font-bold font-mono text-xs flex items-center gap-1 transition-all"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
