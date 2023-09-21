import './App.css';
import Table from './components/Table';
import data from './data.json';
import { calculateGammaMean, calculateGammaMedian, calculateGammaMode, calculateMean, calculateMedian, calculateMode } from './utils';

/**
 * Main component of the application.
 *
 * @returns {JSX.Element} - JSX element representing the application.
 */
function App(): JSX.Element {
  return (
    <div className="App">
      {/* Render a Table component with statistical data for Flavanoids */}
      <Table 
        data={data} 
        product="Flavanoids"
        //by passing the name of product, able to get mean, median , mode of any product
        meanData={calculateMean(data, 'Flavanoids')}
        medianData={calculateMedian(data, 'Flavanoids')}
        modeData={calculateMode(data, 'Flavanoids')}
      />

      {/* Render a Table component with statistical data for Gamma */}
      <Table 
        data={data} 
        product="Gamma"
        meanData={calculateGammaMean(data)}
        medianData={calculateGammaMedian(data)}
        modeData={calculateGammaMode(data)}
      />
    </div>
  );
}


export default App;
