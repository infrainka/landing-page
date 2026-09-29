import React from 'react';
import StackIcon from 'tech-stack-icons';

const badgeIconClass = 'w-9 h-9 rounded-lg flex-shrink-0';

export const TypeScriptIcon = () => <StackIcon name="typescript" className={badgeIconClass} />;
export const ReactIcon = () => <StackIcon name="react" className={badgeIconClass} />;
export const NodeIcon = () => <StackIcon name="nodejs" className={badgeIconClass} />;
export const SqlIcon = () => <StackIcon name="mysql" className={badgeIconClass} />;
export const CdnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" className={badgeIconClass}>
    <path fill="#fff" d="M62.854 64.28h-6.856l-.573-.573v-16.05c0-2.856-1.122-5.069-4.566-5.146-1.772-.047-3.8 0-5.967.085l-.325.333v20.77l-.572.573h-6.857l-.572-.573V36.281l.572-.573H52.57c5.998 0 10.858 4.86 10.858 10.858v17.141z" />
    <path fill="#32e6e2" d="M27.024 79.47h-.944l-4.713-4.712v-.944l7.204-7.205h4.992l.665.666v4.991zm-5.657-53.304v-.944l4.713-4.713h.944l7.204 7.205v4.992l-.665.665h-4.992zm6.632 27.837H.573L0 53.43v-6.872l.573-.573h27.426l.572.573v6.872zm71.428 0H72.001l-.573-.573v-6.872l.573-.573h27.426l.573.573v6.872zM46.046 27.142V6.572l.572-.573h6.872l.573.573v20.57l-.573.572h-6.872zm0 66.274v-20.57l.572-.572h6.872l.573.573v20.569l-.573.573h-6.872z" />
  </svg>
);
export const RestApiIcon = () => <StackIcon name="postman" className={badgeIconClass} />;

// Wraps custom stroke-based glyphs (no matching icon in tech-stack-icons).
const OutlineIcon = ({ bg, children }: { bg: string; children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${badgeIconClass} p-1.5`}
    style={{ backgroundColor: bg }}
  >
    {children}
  </svg>
);

export const DnsIcon = () => (
  <OutlineIcon bg="#049fd9">
    <circle cx="12" cy="12" r="8" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <path d="M12 4c2.6 2.4 2.6 13.6 0 16M12 4c-2.6 2.4-2.6 13.6 0 16" />
  </OutlineIcon>
);

export const PerformanceIcon = () => (
  <OutlineIcon bg="#049fd9">
    <path d="M4 16a8 8 0 0116 0" />
    <path d="M12 16L16 10.5" />
    <circle cx="12" cy="16" r="1" fill="#fff" stroke="none" />
  </OutlineIcon>
);
