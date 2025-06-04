import { Box, CircularProgress, SxProps } from '@mui/material';

interface LoaderProps {
  size?: number;
  sx?: SxProps;
  color?:
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
}

function Loader({ size, sx, color }: LoaderProps) {
  return (
    <Box
      sx={{
        border: '0px solid red',
        display: 'flex',
        justifyContent: 'center',
        my: 2,
        ...sx,
      }}
    >
      <CircularProgress size={size} color={color || 'primary'} />
    </Box>
  );
}

export default Loader;
