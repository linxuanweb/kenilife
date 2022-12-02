import './App.css';
import "@arco-design/web-react/dist/css/arco.css";

function App() {
    return (
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="App">
            // @ts-expect-error TS(2552): Cannot find name 'header'. Did you mean 'Headers'?
            <header className="App-header">
                // @ts-expect-error TS(2304): Cannot find name 'img'.
                <img src="/imgs/logo.png" className="App-logo" alt="likeni" />

                // @ts-expect-error TS(2304): Cannot find name 'p'.
                <p>
                    // @ts-expect-error TS(2304): Cannot find name '李柯妮的个人网站'.
                    李柯妮的个人网站（coming soon...）
                // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
                </p>

            </header>
        </div>
    );
}

export default App;
