"use client";

import { Container } from "../container";
import { MotionUp } from "../animations";
import { SmallGridBackground } from "../bg-patterns";
import { Heading } from "../";
import { Testimonial } from "@/lib/types";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Props {
    testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: Props) {
    return (
        <SmallGridBackground className="py-10" id="testimonials">
            <Container>
                <MotionUp delay={0.1}>
                    <Heading text="What People Say About Me" />

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
                        {testimonials.map((testimonial, index) => (
                            <MotionUp key={index} delay={0.1 + index * 0.1}>
                                <div
                                    className="text-foreground border border-border h-full flex flex-col"
                                >
                                    <div className="p-6 flex-1 flex flex-col">
                                        <FaQuoteLeft
                                            className="block w-5 h-5 text-muted-foreground mb-4 rotate-180"
                                        />
                                        <p className="leading-relaxed mb-4 flex-1">
                                            {testimonial.content}
                                        </p>
                                        <FaQuoteRight
                                            className="block w-5 h-5 text-muted-foreground mb-4 relative left-[95%]"
                                        />
                                        <div className="flex items-center gap-4 mt-auto">
                                            <img
                                                src={testimonial.authorImage}
                                                alt={testimonial.authorName}
                                                className="w-20 h-20 rounded-full object-cover"
                                            />
                                            <div>
                                                <h6 className="font-semibold text-foreground text-base">
                                                    {testimonial.authorName}
                                                </h6>
                                                <p className="text-base text-foreground">
                                                    {testimonial.position}
                                                </p>
                                                <p className="text-base text-foreground">
                                                    {testimonial.companyName}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MotionUp>
                        ))}
                    </div>
                </MotionUp>
            </Container>
        </SmallGridBackground>
    );
}
