'use client';

import { motion } from "framer-motion";
import { fadeInContainer, fadeInItem } from "@/utils/motionVariants";

export default function FadeInStagger({
    children,
    className='',

    // animation
    direction = "up",
    distance = 20,
    duration = 0.4,
    delay = 0,

    // stagger
    staggerDelay = 0.1,

    // viewport
    useViewport = true,
    once = true,
    margin = "-100px",
}) {
    const itemVariant = fadeInItem({
        direction,
        distance,
        duration,
    });

    return (
        <motion.div
            className={className}
            variants={fadeInContainer({
                stagger: staggerDelay,
                delay,
            })}
            initial="hidden"
            animate={!useViewport ? "visible" : undefined}
            whileInView={useViewport ? "visible" : undefined}
            viewport={useViewport ? { once, margin } : undefined}
        >
            {Array.isArray(children)
                ? children.map((child, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariant}
                    >
                        {child}
                    </motion.div>
                ))
                : (
                    <motion.div
                        variants={itemVariant}
                    >
                        {children}
                    </motion.div>
                )}
        </motion.div>
    );
}
