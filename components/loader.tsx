"use client";
import { motion } from "framer-motion";

export function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="mx-auto w-[500px] bg-card rounded-xl overflow-hidden drop-shadow-xl">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-8">
                    <div className="flex items-center space-x-4">
                        <motion.div
                            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <div>
                            <motion.div
                                className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded w-32 mb-2"
                                animate={{
                                    width: ["8rem", "12rem", "8rem"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded w-24"
                                animate={{
                                    width: ["6rem", "8rem", "6rem"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
