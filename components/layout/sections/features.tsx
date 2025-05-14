import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Bot",
    title: "AI-Powered Simulations",
    description:
      "Engage with dynamic GPT personas representing real users, investors, and critics — no human testing needed.",
  },
  {
    icon: "BrainCircuit",
    title: "Smart Idea Expansion",
    description:
      "Input a single-line idea and watch it transform into detailed personas, use cases, and pain points using AI.",
  },
  {
    icon: "LayoutDashboard",
    title: "Interactive Founder Dashboard",
    description:
      "Track your simulations, feedback loops, pivots, and decision history — all from one clean, visual workspace.",
  },
  {
    icon: "Mic",
    title: "Pitch Practice Engine",
    description:
      "Face off against simulated investors with personality-driven responses and real-time pitch critique.",
  },
  {
    icon: "Megaphone",
    title: "Marketing Test Lab",
    description:
      "Generate ad headlines and CTAs, simulate campaign results, and uncover what messaging actually resonates.",
  },
  {
    icon: "FileBarChart2",
    title: "Actionable Feedback Reports",
    description:
      "Each simulation ends with a summary: objections, interest signals, and suggestions — no fluff, just fuel.",
  },
];


export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Powers <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">FirstCustomer.ai</span>
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        A founder’s simulation lab packed with tools to validate ideas, sharpen pitches, and explore early traction — without building a thing.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
