"use client"

import About from "@/components/About";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import Preloader from "@/components/PreLoader";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import GitHubContributions from "@/components/GitHubContributions";
import { AnimatedText } from "@/components/Text";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { MailIcon, Github, Linkedin, Twitter, ExternalLink, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import pfpImage from "@/assets/pfp.jpeg";

export default function Home(){
  const [isLoading, setIsLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("about");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const tabs = [
    { id: "about", label: "about" },
    { id: "projects", label: "projects" },
    { id: "work", label: "work" },
  ]

  const renderContent = () => {
    switch(activeTab) {
      case "work": return <Work />
      case "about": return <About />
      default: return null
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
      document.body.style.overflowY = 'auto'
    }, 2000)
  }, [])

  return(
    <div className="min-h-screen bg-black text-neutral-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Profile */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar src={pfpImage.src} alt="Vansh Parate" size="lg" className="avatar-hover" />
              <div>
                <h1 className="text-3xl font-satoshi font-semibold text-transition hover:text-neutral-200">Vansh Parate</h1>
                <a href="https://twitter.com/vanxh10" target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-lg font-satoshi font-light text-transition hover:text-neutral-300 cursor-pointer">
                  @vanxh10
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-satoshi font-normal mb-3 leading-tight tracking-tight">
                I build{" "}
                <AnimatedText
                  words={["websites", "backends", "apps"]}
                  className="text-neutral-100 font-bold"
                />
              </h2>
              <p className="text-neutral-400 text-sm font-satoshi leading-relaxed text-transition hover:text-neutral-300">
                Full-stack developer crafting thoughtful products at the intersection of design and technology.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full pulse-gentle"></div>
              <span className="text-xs font-satoshi text-neutral-400 text-transition hover:text-neutral-300">Available for new opportunities</span>
            </div>

            <div className="pt-4 flex gap-3">
              <a href="https://drive.google.com/file/d/1-HhPNLWHF_TK4fOk9Hrz_4K2Wn6sEeKg/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button className="bg-neutral-100 text-black hover:bg-neutral-200 text-sm cursor-pointer hover-lift font-satoshi">
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </a>
              <a href="mailto:vanshparate@gmail.com">
                <Button className="bg-neutral-100 text-black hover:bg-neutral-200 text-sm cursor-pointer hover-lift font-satoshi">
                  <MailIcon className="w-4 h-4 mr-2" />
                  Get in touch
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="flex gap-6 border-b border-neutral-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={(e) => {
                    e.preventDefault();
                    if (tab.id === 'projects') {
                      const section = document.getElementById('projects-section');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      setActiveTab(tab.id);
                    }
                  }}
                  className={`pb-3 text-sm font-satoshi cursor-pointer font-medium tab-transition border-b-2 text-transition ${
                    activeTab === tab.id
                      ? "text-neutral-100 border-neutral-100"
                      : "text-neutral-500 hover:text-neutral-300 border-transparent hover:border-neutral-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">{renderContent()}</div>
          </div>
        </div>

        {/* GitHub Contributions */}
        <div className="-mt-15">
          <GitHubContributions username="Vansh-Parate" />
        </div>

        {/* Projects Section */}
        <div id="projects-section">
          <Projects />
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-neutral-900">
          <div className="flex items-center justify-between text-xs text-neutral-500 font-satoshi">
            <p className="text-transition hover:text-neutral-400">© 2025 Vansh Parate</p>
            <p className="text-transition hover:text-neutral-400">Built with Next.js</p>
          </div>
        </div>
      </div>
    </div>
  )
}

