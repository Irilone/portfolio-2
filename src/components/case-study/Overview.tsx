
interface OverviewProps {
  overview: string;
  onFocus: () => void;
}

const Overview = ({ overview, onFocus }: OverviewProps) => {
  return (
    <section 
      id="overview" 
      className="scroll-mt-24 animate-fade-up"
      onFocus={onFocus}
      aria-labelledby="overview-heading"
    >
      <h2 id="overview-heading" className="text-3xl font-semibold mb-8">Overview</h2>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed">
          {overview}
        </p>
      </div>
    </section>
  );
};

export default Overview;
