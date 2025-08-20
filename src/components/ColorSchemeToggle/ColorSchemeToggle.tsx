import { FiMonitor, FiMoon, FiSun } from 'react-icons/fi';
import { ActionIcon, MantineColorScheme, Tooltip, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const nextScheme = {
    light: 'dark',
    dark: 'auto',
    auto: 'light',
  }[colorScheme] as MantineColorScheme;

  const icon = {
    light: <FiSun />,
    dark: <FiMoon />,
    auto: <FiMonitor />,
  }[colorScheme];

  return (
    <Tooltip label={`Switch to ${nextScheme} mode`} withArrow>
      <ActionIcon
        variant="default"
        size="lg"
        onClick={() => setColorScheme(nextScheme)}
        aria-label="Toggle color scheme"
      >
        {icon}
      </ActionIcon>
    </Tooltip>
  );
}
