"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function AnimatedFramerX({
    children,
}: {
    children: React.ReactNode
}) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation runs once when element comes into view
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                x: 0,
                opacity: 1,
                rotate:0,                       
                transition: { duration: 2 },
            });
        }
    }, [inView]);
    return (
        <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0,rotate:-30 }} // Initial position and opacity
            // animate={{ x: 0, opacity: 1 }} // Final position and opacity
            animate={controls}
            transition={{ duration: 2 }} // Animation duration
        >
            {children}
        </motion.div>
    )
}