const companies = ["Smile", "Urban", "natural", "WAVE", "IIVY", "Alka"]

export function CompaniesSection() {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-12">
          Companies we Worked
          <br />
          With in Since 2015
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer font-mono text-lg font-medium"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
