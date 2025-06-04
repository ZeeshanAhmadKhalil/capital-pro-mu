import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Box, IconButton, Typography, useTheme } from '@mui/material';

function Logo() {
  const {
    palette: { primary },
  } = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid red',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#00000077',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img
          style={{ height: 80 }}
          src="/assets/images/left-logo.png"
          alt="logo"
        />
        <Box sx={{ mx: 0.5 }}>
          <Typography
            sx={{
              backgroundImage: `linear-gradient(45deg,${primary.light} , ${primary.dark})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              fontWeight: '900',
              fontSize: 22,
            }}
          >
            CAPITAL PRO
          </Typography>
          <Typography
            sx={{
              backgroundImage: `linear-gradient(45deg,${primary.light} , ${primary.dark})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              fontWeight: '900',
              fontSize: 12,
            }}
          >
            MAKER AND UPDATER
          </Typography>
        </Box>
      </Box>
      <Box sx={{ border: '0px solid red', width: 45 }}>
        <IconButton onClick={() => { }}>
          <SmartToyIcon color="primary" />
        </IconButton>
        <IconButton onClick={() => { }}>
          <PowerSettingsNewIcon color="primary" />
        </IconButton>

      </Box>
    </Box>
  );
}

export default Logo;
