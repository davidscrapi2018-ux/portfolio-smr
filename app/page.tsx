import { Background } from "@/components/Background";
import { SideNav, SocialNav } from "@/components/Nav";
import { Typewriter } from "@/components/Typewriter";
import { about } from "@/data/about";

export default function Home() {
  return (
    <div className="shell home">
      <Background />
      <SideNav />
      <main className="hero">
        <h1 className="hero-name">David Lozada</h1>
        <p className="hero-role">
          <Typewriter text={about.role} />
        </p>
      </main>
      <SocialNav />
    </div>
  );
}
