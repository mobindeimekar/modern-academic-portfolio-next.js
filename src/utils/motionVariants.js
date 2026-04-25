import { animate, color, delay, easeInOut } from "framer-motion";

export const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
}

export const fadeInContainer = ({
    stagger = 0.1,
    delay = 0,
} = {}) => ({
    hidden: {},
    visible: {
        transition: {
            delayChildren: delay,
            staggerChildren: stagger,
        },
    },
});

export const fadeInItem = (
    direction = "up",
    distance = 20,
    duration = 0.4,
    delay = 0
) => {

    let x = 0;
    let y = 0;

    if (direction === "up") y = distance;
    if (direction === "down") y = -distance;
    if (direction === "left") x = distance;
    if (direction === "right") x = -distance;

    return {
        hidden: { opacity: 0, x, y },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                ease: "easeOut",
                duration,
                delay,   
            },
        },
    };
};


export const defaultViewport = { once: true, margin: "-200px" };

export const hoverScale = {
    init: { scale: 1, transition: { type: 'tween', duration: 0.3, ease: "easeInOut" } },
    anim: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } }

}

export const textHover = {
    init: { scale: 1, color: '#4a5565', transition: { type: 'spring', duration: 0.3, ease: "easeInOut" } },
    anim: { scale: 1.1, color: '#E63946' }
}

export const sidebarFlyIn = {
    hidden: {
        transform: "translateX(-100%)",
    },
    visible: {
        transform: "translateX(0%)",
        transition: {
            duration: 0.35,
            ease: [0.25, 0.8, 0.25, 1],
        },
    },
    exit: {
        transform: "translateX(-100%)",
        transition: {
            duration: 0.25,
            ease: "easeIn",
        },
    },
}

export const expandAccordion = {
    init: { maxHeight: 0, opacity: 0, transition: { duration: 0.6, ease: "easeInOut" }, },
    anim: { maxHeight: 500, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } }
}

export const categoryDropdownAnimation = {
    init: { maxHeight: 0, y: -20, transition: { duration: 0.6, ease: "easeInOut" }, },
    anim: { maxHeight: 700, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }

}
