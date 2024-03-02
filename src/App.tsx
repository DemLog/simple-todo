import React, {FC} from 'react';
import {MainPage} from "@pages/MainPage";
import GlobalStyles from "styles/global";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

const App: FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <MainPage/>
            <GlobalStyles />
        </QueryClientProvider>

    );
}

export default App;