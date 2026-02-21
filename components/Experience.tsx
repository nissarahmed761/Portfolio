'use client'

interface Experience {
  id: number
  title: string
  company: string
  duration: string
  description: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Data Analyst",
    company: "StreetCare",
    duration: "October 2025 - Present",
    description: [
      "Analyzed multi-source program and outreach data using SQL, R, and SAS to deliver actionable insights for operational and strategic decisions",
      "Designed KPI frameworks and performance dashboards to track campaign effectiveness and guide resource allocation",
      "Automated reporting workflows, improving data accessibility and reducing manual analysis time",
      "Delivered data-driven solutions improving program outcomes through stakeholder collaboration"
    ]
  },
  {
    id: 2,
    title: "Analytics Engineer",
    company: "VVN Technologies",
    duration: "April 2021 - May 2023",
    description: [
      "Built a real-time cloud analytics platform for invoicing and financial performance tracking, reducing client inquiries 30% and accelerating payment cycles",
      "Migrated legacy accounting data into Snowflake/Redshift and built automated ETL pipelines using Python and SQL",
      "Standardized data models and warehouse schemas, improving reporting accuracy and governance",
      "Delivered 6+ executive dashboards in Power BI and Looker adopted by 15+ teams for decision-making",
      "Increased data availability 40% and reduced manual reporting effort 60% through automation and self-service analytics"
    ]
  }
]

export default function Experience() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience) => (
          <div 
            key={experience.id}
            className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:bg-gray-300 dark:hover:bg-muted/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                <p className="text-muted-foreground font-medium">{experience.company}</p>
              </div>
              <span className="text-sm text-muted-foreground mt-1 md:mt-0 px-3 py-1 rounded-full">
                {experience.duration}
              </span>
            </div>
            <ul className="space-y-2">
              {experience.description.map((item, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
