import Divider from "../aoms/Divider";
import Section from "../molecules/Section";

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <section>
      <Divider thickness="md" mb="lg" mt="lg" />
      <Section title={title}>{children}</Section>
    </section>
  );
}

export default SectionWrapper;
