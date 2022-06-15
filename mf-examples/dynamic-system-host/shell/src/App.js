import React from 'react';
import { loadComponent } from './utils/loadComponent';

function System(props) {
  const { system,  system: { remote, url, module }} = props;

  if (!system || !remote || !url || !module) {
    return <h2>No system specified</h2>;
  }

  const Component = React.lazy(loadComponent(remote, 'default', module, url));

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
}

function App() {
  const [system, setSystem] = React.useState({});

  function setModule() {
    setSystem({
      remote: 'module',
      url: 'http://localhost:3002/remoteEntry.js',
      module: './Widget',
    });
  }

  function setPlatform() {
    setSystem({
      remote: 'platform',
      url: 'http://localhost:3003/remoteEntry.js',
      module: './Widget',
    });
  }

  return (
    <div>
      <h1>Dynamic System Host</h1>
      <h2>Shell</h2>
      <p>
        The Dynamic System will take advantage Module Federation <strong>remotes</strong> and{' '}
        <strong>exposes</strong>. It will not load any components or modules that have been loaded
        already.
      </p>
      <button onClick={setApp2}>Load Module Widget</button>
      <button onClick={setApp3}>Load Platform Widget</button>
      <div >
        <System system={system} />
      </div>
    </div>
  );
}

export default App;
