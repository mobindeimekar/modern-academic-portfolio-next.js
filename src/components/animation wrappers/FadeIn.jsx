'use client';

import { motion } from "framer-motion";
import { fadeInItem } from "@/utils/motionVariants";

export default function FadeIn({
    children,
    className = "",

    // animation
    direction = "up",
    distance = 20,
    duration = 0.6,
    delay = 0,

    // viewport
    useViewport = true,
    once = true,
    margin = "-250px",
}) {
    const itemVariant = fadeInItem(direction, distance, duration, delay);

    return (
        <motion.div
            className={className}
            initial="hidden"
            animate={!useViewport ? "visible" : undefined}
            whileInView={useViewport ? "visible" : undefined}
            viewport={useViewport ? { once, margin } : undefined}
        >
            <motion.div variants={itemVariant}>
                {children}
            </motion.div>
        </motion.div>
    );
}
