import React from 'react';
import DashBoard from './pages/DashBoard';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles/>
            <DashBoard/>
        </>
    );
}

export default App;