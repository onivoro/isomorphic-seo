export const toEmailHref = (email: string, subject: string, prefix= '') => email && `mailto:${email}?subject=${encodeURIComponent(prefix + subject)}`;
