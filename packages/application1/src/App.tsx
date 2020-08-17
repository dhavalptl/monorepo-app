import React from 'react';
import { Button } from '@dhavalptl/uicomponents';
const App: React.FC = () => {
    return (
        <div>
            <header>
                <h2>React Application</h2>
                <Button title="Test Application" onClick={() => {
                    console.log("Button Clicked");
                }}/>
            </header>
        </div>
    );
}

export default App;