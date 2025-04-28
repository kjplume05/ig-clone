import React from 'react';

function App() {

    fetch('https://lareact.ddev.site/api/hello')
        .then(res => res.json())
        .then(data => console.log(data));

  return (
    <>

    </>
  )
}

export default App
