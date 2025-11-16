import experiences from "../data/experience";

function ExperienceSection() {
    return (
        <section id="experience" className="w-full py-16 scroll-mt-32">
            <h3 className="text-3xl font-bold mb-6">Work / Internship Experiences</h3>

            <div className="space-y-10">
                {experiences.map((exp) => (
                    <div key={exp.company} className="border-l-4 border-gray-600 pl-4">
                        <h4 className="text-xl font-semibold">
                            {exp.company} — {exp.location}
                        </h4>

                        <p className="text-gray-400 text-sm mb-2">{exp.year}</p>

                        <p className="text-gray-300 font-medium mb-2">
                            {exp.role} ({exp.type})
                        </p>

                        <ul className="list-disc ml-6 text-gray-400 space-y-1">
                            {exp.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ExperienceSection;
