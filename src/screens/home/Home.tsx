import InfoIcon from '@mui/icons-material/Info';
import { Box, Button, Tooltip, useTheme } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { editAccess } from '~config/constants';
import TextInput from "~screens/shared/text-input";
import { useMakeTemplateMutation } from './services/homeApi';
import toast from 'react-hot-toast';

function Home({ }) {
    const defaultValues = {
        sheetId: null,
    };

    const {
        palette: { primary },
    } = useTheme();

    const [makeTemplate, { isLoading }] = useMakeTemplateMutation()

    const methods = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const { handleSubmit } = methods;

    const handleMakeTemplate = handleSubmit(async () => {
        const response = await makeTemplate({});
        const { error, data: respData }: any = response || {};

        if (error) {
            toast.error(error?.data?.message);
        }

        if (respData) {
            toast.success(respData?.message);

        }
    })

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '0px solid red',
                    mb: 2,
                    width: '100%',
                }}
            >
                <FormProvider {...methods}>
                    <TextInput name={'sheetId'} containerSx={{ mb: 0 }} />
                </FormProvider>
                <Tooltip title={editAccess} arrow placement='top-start'>
                    <InfoIcon sx={{ cursor: 'pointer' }} color="primary" />
                </Tooltip>
            </Box>
            <Box>
                <Button
                    disabled={isLoading}
                    onClick={handleMakeTemplate}
                    variant="contained"
                    sx={{
                        background: `linear-gradient(45deg, ${primary.dark}, ${primary.light})`,
                        fontWeight: '900',
                        mr: 1,
                    }}
                >
                    Make Template
                </Button>
                <Button
                    disabled={false}
                    onClick={() => { }}
                    variant="contained"
                    sx={{
                        background: `linear-gradient(45deg, ${primary.dark}, ${primary.light})`,
                        fontWeight: '900',
                        ml: 1,
                    }}
                >
                    UPdate Template
                </Button>
            </Box>
        </>
    );
}

export default Home;
