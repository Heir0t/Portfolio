import { useState, useEffect } from "react";
import { profileInfo } from "@/data/portfolioData";

const Hero = () => {
  const profileImage = "https://github.com/Heir0t.png"
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = `Olá, eu sou ${profileInfo.name}`;

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, fullText]);

  const renderTextWithHighlight = () => {
    const nameIndex = displayedText.indexOf(profileInfo.name);

    if (nameIndex === -1 || displayedText.length < fullText.indexOf(profileInfo.name)) {
      return <>{displayedText}</>;
    }

    const beforeName = displayedText.slice(0, nameIndex);
    const name = displayedText.slice(nameIndex, nameIndex + profileInfo.name.length);

    return (
      <>
        {beforeName}
        <span className="text-primary">{name}</span>
      </>
    );
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-full flex justify-center md:block md:w-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-75 blur-md animate-spin"></div>
              </div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-background shadow-glow"
              />
            </div>
          </div>

          {/* Introduction Text */}
          <div className="flex-1 text-center md:text-left w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              {renderTextWithHighlight()}
              <span className={`inline-block w-[0.1em] h-[0.7em] bg-primary ml-1 align-middle ${isTyping ? 'animate-pulse' : 'animate-blink'}`}></span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6">
              {profileInfo.title}
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto md:mx-0 text-justify px-2 sm:px-0">
              {profileInfo.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;