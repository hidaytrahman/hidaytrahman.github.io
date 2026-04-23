/* eslint-disable react/prop-types */
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { IconButton, Tooltip } from '@mui/material';

const ThemeToggle = ({ mode, onToggle }) => {
  return (
    <Tooltip
      title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <IconButton
        onClick={onToggle}
        color="inherit"
        size="large"
        aria-label="toggle theme"
      >
        {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
