import { Box, useTheme } from '@mui/material';
import Logo from '~screens/shared/logo';

function MainLayout({ children }: any) {
    const {
        palette: { primary },
    } = useTheme();

    return (
        <Box
            sx={{
                border: '0px solid red',
                display: 'flex',
                flex: 1,
                height: '100vh',
                flexDirection: 'column',
                backgroundImage: 'url(/assets/images/background-landscape.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Logo />
            <Box
                sx={{
                    background: `linear-gradient(to right, #28282B, ${primary.main}, #28282B)`,
                    height: '1px',
                    width: '100%',
                }}
            />
            <Box
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '0px solid red',
                    flex: 1,
                    p: 1,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default MainLayout;
