import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {

  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores and other commercial projects'
    },
    {
      name: 'portraits',
      description: 'Portraits of people in my life'
    },
    {
      name: 'food',
      description: 'Delicious delicacies'
    },
    {
      name: 'landscape',
      description: 'fields, farmhouses, waterfalls, and the beauty of nature'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <div className="App">
      <Nav
       categories={categories}
       setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
       />
      <main>
        <Gallery currentCategory={currentCategory}/>
        <About />
      </main>
    </div>
  );
}

export default App;
