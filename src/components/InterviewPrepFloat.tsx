import { IconFlare, IconRobot } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floaiing-dock";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Prep AI",
      icon: (
        <IconRobot className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://interview-prep-ashen.vercel.app/",
    },
    {
      title: "AI Roadmap",
      icon: (
        <IconFlare className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/roadmap",
    },
  ];
  return (
    <div className="fixed right-3 bottom-10 z-10">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
