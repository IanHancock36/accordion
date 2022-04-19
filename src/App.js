import {accordionData} from './accordion-data'
import './App.css';
import Accordion from './accordion';
function App() {
  return (
    <div>
    <h1>React Accordion Demo</h1>
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  </div>
  );
}

export default App;
