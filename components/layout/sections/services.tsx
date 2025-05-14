import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Investor Deck Export",
    description:
      "Download AI-generated pitch decks from your investor simulations to use in real fundraising rounds.",
    pro: 1,
  },
  {
    title: "Landing Page Generator",
    description:
      "Instantly create a high-converting landing page from your validated idea and user conversations.",
    pro: 1,
  },
  {
    title: "Custom Domain Integration",
    description:
      "Connect your own domain to showcase landing pages or share your startup profile.",
    pro: 0,
  },
  {
    title: "Feedback Summary Reports",
    description:
      "Get detailed PDF summaries of each simulation session — ideal for sharing with co-founders or mentors.",
    pro: 1,
  },
  {
    title: "Email Marketing Integrations",
    description:
      "Connect tools like Mailchimp or ConvertKit to start nurturing early waitlist signups.",
    pro: 0,
  },
  {
    title: "Public Idea Sharing",
    description:
      "Optionally share your simulation results to a public feed and get community feedback.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Power Features to Boost Your Startup Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Go beyond simulations — generate decks, create landing pages, and connect the tools you already use. These services turn insights into real traction.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
