// @/components/shared/ThemeToggle/ThemeModeToggle.tsx

'use client';

import { JSX } from 'react';
import { Theme } from '@/hooks/useThemeToggle';

import { ComputerIcon, SunnyIcon } from '@/components/ui/dataDisplay/icons';
import NightsStayOutlined from '@mui/icons-material/NightsStayOutlined';

type Props = {
  theme: Theme;
  label?: string;
  className?: string;
};

export function getThemeIcon(theme: Theme, className?: string): JSX.Element {
  switch (theme) {
    case 'light':
      return <SunnyIcon className={className} />;
    case 'dark':
      return <NightsStayOutlined className={className} />;
    default:
      return <ComputerIcon className={className} />;
  }
}

export function getThemeLabel(theme: Theme): string {
  return theme.charAt(0).toUpperCase() + theme.slice(1);
}

const ThemeModeToggle = ({ theme, label, className }: Props) => {
  return (
    <div
      className={`flex items-center gap-2 text-neutral-700 capitalize dark:text-neutral-300 ${className || ''}`}
    >
      {getThemeIcon(theme, 'h-5 w-5')}
      {label && (
        <span className='text-sm'>
          {label} {getThemeLabel(theme)}
        </span>
      )}
    </div>
  );
};

export default ThemeModeToggle;

// // @/components/shared/ThemeToggle/ThemeModeToggle.tsx
// 'use client';
//
// import { useTheme } from '@/context/ThemeContext';
// import { ComputerIcon, SunnyIcon } from '@/components/ui/dataDisplay/icons';
// import NightsStayOutlined from '@mui/icons-material/NightsStayOutlined';
//
// export function getThemeIcon(
//   theme: string,
//   label?: String,
//   className?: string
// ) {
//   switch (theme) {
//     case 'light':
//       return <SunnyIcon className={className} />;
//     case 'dark':
//       return <NightsStayOutlined className={className} />;
//     default:
//       return <ComputerIcon className={className} />;
//   }
// }
//
// export function getThemeLabel(theme: string): string {
//   return theme.charAt(0).toUpperCase() + theme.slice(1);
// }
//
// const ThemeModeToggle = ({ className }: { className?: string }) => {
//   const { theme, toggleTheme, isDark } = useTheme();
//
//   return (
//     <button
//       onClick={toggleTheme}
//       className={`flex items-center gap-2 text-neutral-700 capitalize dark:text-neutral-300 ${className || ''}`}
//       aria-label='Toggle theme'
//     >
//       {getThemeIcon(theme, 'h-5 w-5')}
//       <span className='text-sm'>{getThemeLabel(theme)}</span>
//     </button>
//   );
// };
//
// export default ThemeModeToggle;
