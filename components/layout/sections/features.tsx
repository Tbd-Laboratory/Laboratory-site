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
    icon: "TabletSmartphone",
    title: "Strong Ethical Foundation",
    description:
      "Maintain high ethical standards, respecting privacy, security, and user rights, influencing global internet policies.",
  },
  {
    icon: "BadgeCheck",
    title: "Open-Source Commitment",
    description:
      "Transparent, fully open-source projects, prioritizing community-driven development and decision-making for maximum innovation.",
  },
  {
    icon: "Goal",
    title: "Global Impact",
    description:
      "Create projects that address and improve global internet infrastructure challenges and connectivity.",
  },
  {
    icon: "PictureInPicture",
    title: "Collaborative Ecosystem",
    description:
      "Form strategic industry partnerships, fostering ecosystem growth through collaboration and resource sharing.",
  },
  {
    icon: "MousePointerClick",
    title: "Contributor development.",
    description:
      "Offer training, premium tools, and career advancement opportunities to enhance contributors' growth.",
  },
  {
    icon: "Newspaper",
    title: "Nonprofit Mission",
    description:
      "Dedicated to humanity, pioneering transformative internet solutions and establishing universal standards.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

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
