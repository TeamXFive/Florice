import { extendTheme, styled } from "@mui/material/styles";
import { Room, People, ShoppingCart } from "@mui/icons-material";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import { PlacesDashboard } from "./PlacesDashboard";
import { useState } from "react";
import { useMemo } from "react";

const NAVIGATION = [
    {
        kind: "header",
        title: "Items",
    },
    {
        segment: "dashboard/catalogo",
        title: "Catalogo",
        icon: <ShoppingCart />,
    },
    {
        kind: "divider",
    },
    {
        segment: "dashboard/places",
        title: "Lugares",
        icon: <Room />,
    },
    {
        kind: "divider",
    },
    {
        segment: "dashboard/users",
        title: "Usuários",
        icon: <People />,
    },
    {
        kind: "divider",
    },
];

const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: true },
    colorSchemeSelector: "class",
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function useDashboardRouter(initialPath) {
    const [pathname, setPathname] = useState(initialPath);

    const router = useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}

const Skeleton = styled("div")(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

export const Dashboard = () => {
    const router = useDashboardRouter("/lugares");
    return (
        <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
            <DashboardLayout>
                {router.pathname && "/places" ? (
                    <PlacesDashboard />
                ) : (
                    <>
                        <PageContainer>
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
                    </>
                )}
            </DashboardLayout>
        </AppProvider>
    );
};
