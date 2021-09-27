import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {ErrorBoundary} from 'react-error-boundary';

const Counter = React.lazy(() => import('app2/Counter'));

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {/* <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button> */}
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello from React component</h1>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <React.Suspense fallback='Loading Counter...'>
          <Counter
            count={count}
            onIncrement={() => setCount(count + 1)}
            onDecrement={() => setCount(count - 1)}
            />
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
