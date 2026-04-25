'use client';

import { icons } from '@/icons/icon';

export default function Icon({ name, className = '', ...props }) {
    const IconComponent = icons[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return <IconComponent className={className} {...props} />;
}
