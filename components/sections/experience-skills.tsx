import { Container } from "../container";
import { MagicCard, MotionUp, Timeline } from "../animations";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "../";
import { WorkExperience, Skill, Certificate } from "@/lib/types";

function sortByStartDate(arr: WorkExperience[]): WorkExperience[] {
    return [...arr].sort(
        (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
}

interface Props {
    experiences: WorkExperience[];
    education: WorkExperience[];
    skills: Skill[];
    certificates: Certificate[];
}

export function ExperienceSkills({ experiences, education, skills, certificates }: Props) {
    const sortedExperiences = sortByStartDate(experiences);

    return (
        <section className="w-full py-10 md:py-20" id="about">
            <Container>
                <MotionUp delay={0.1}>
                    <Heading text="Career History" />
                    <Timeline data={sortedExperiences} />
                </MotionUp>
                
                <br /><br/>
                <MotionUp delay={0.1}>
                    <Heading text="Education" />
                    <Timeline data={education} />
                </MotionUp>

                <MotionUp className="mt-10 p-0 py-10 rounded-lg" delay={0.1}>
                    <Heading text="Skills" />
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        {skills.map((skill, index) => (
                            <MagicCard
                                className="hover:scale-105 transition-all duration-500 w-20 h-20 md:w-40 md:h-40 flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl md:text-4xl"
                                gradientColor="#3b82f6"
                                key={index}
                            >
                                <div className="flex flex-col items-center justify-center w-full gap-2 h-full">
                                    <Image
                                        src={skill.image}
                                        alt={skill.name}
                                        width={80}
                                        height={80}
                                        className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover border border-border bg-white"
                                    />
                                    <h6 className="text-center text-sm md:text-lg font-bold text-foreground">
                                        {skill.url ? (
                                            <Link
                                                target="_blank"
                                                href={skill.url}
                                                className="hover:underline"
                                            >
                                                {skill.name}
                                            </Link>
                                        ) : (
                                            skill.name
                                        )}
                                    </h6>
                                </div>
                            </MagicCard>
                        ))}
                    </div>
                </MotionUp>

                <MotionUp className="mt-10 p-0 py-10 rounded-lg" delay={0.1}>
                    {
                        certificates.length > 1 ? (
                            <Heading text="Certifications" />
                        ) : (certificates.length > 0 ? (
                            <Heading text={`${certificates[0].title} Certified`} />
                        ) : (<></>) )
                    }
                    {certificates.length === 1 ? (
                        <div className="max-w-4xl mx-auto mt-10 relative">
                            <a
                                href={certificates[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={certificates[0].title}
                            >
                                <Image
                                    src={certificates[0].image}
                                    alt={certificates[0].title}
                                    width={1280}
                                    height={800}
                                    className="rounded w-full h-full object-cover"
                                />
                            </a>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                            {certificates.map((certificate, index) => (
                                <a
                                    href={certificate?.url || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                    title={certificate.title}
                                    className="block hover:scale-105 transition-transform duration-300"
                                >
                                    <Image
                                        src={certificate.image}
                                        alt={certificate.title}
                                        width={1280}
                                        height={960}
                                        className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    />
                                </a>
                            ))}
                        </div>
                    )}
                </MotionUp>
            </Container>
        </section>
    );
}
