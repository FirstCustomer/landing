import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Users",
    title: "Talk to Your First 100 Users",
    description:
      "Simulate conversations with AI personas to uncover real user needs, objections, and excitement before writing a line of code.",
  },
  {
    icon: "BarChart3",
    title: "Validate Before You Build",
    description:
      "Test your product-market fit in minutes — not months — through realistic feedback loops and structured insights.",
  },
  {
    icon: "Wallet",
    title: "Save Time & Money",
    description:
      "Avoid the cost of building something no one wants. Get clarity on what to launch, pivot, or kill early.",
  },
  {
    icon: "Sparkles",
    title: "Test Marketing & Messaging",
    description:
      "Simulate landing pages and ad creatives to see what resonates — before spending a dime on real campaigns.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simulate Success Before You Build
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            FirstCustomer.ai helps you talk to AI-simulated users, test investor questions,
  and experiment with messaging — so you can move fast, learn early, and launch smarter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
