import profileImage from "@/assets/profile.jpg";
import { profileInfo } from "@/data/portfolioData";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-glow"
              />
            </div>
          </div>

          {/* Introduction Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Olá, eu sou <span className="text-primary">{profileInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              {profileInfo.title}
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
              {profileInfo.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
