import { Suspense } from 'react';

const Module = React.lazy(() => import('module/App'));

export default function App({ store }) {
    return (

        <div>
            <Suspense fallback="Loading...">
                <Module store={store} />
            </Suspense>
        </div>

    );
};

