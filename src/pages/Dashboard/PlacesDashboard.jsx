import { styled } from "@mui/material/styles";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";

const Skeleton = styled("div")(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

export const PlacesDashboard = () => {
    return (
        <PageContainer>
            <h1>oi</h1>
            <Grid container spacing={1}>
                <Grid size={5} />
                <Grid size={12}>
                    <Skeleton height={14} />
                </Grid>
                <Grid size={12}>
                    <Skeleton height={14} />
                </Grid>
                <Grid size={4}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={8}>
                    <Skeleton height={100} />
                </Grid>

                <Grid size={12}>
                    <Skeleton height={150} />
                </Grid>
                <Grid size={12}>
                    <Skeleton height={14} />
                </Grid>

                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
            </Grid>
        </PageContainer>
    );
};
