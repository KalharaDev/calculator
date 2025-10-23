import './App.css'
import { Button } from './components/ui/button'
import {useState} from "react";

function App() {
    const [display, setDisplay] = useState('0');
    const [firstNumber, setFirstNumber] = useState(" ");
    const [operation, setOperation] = useState('');
    const [isNewNumber, setIsNewNumber] = useState(true);

    const handleNumber = (num: string) => {
        if (isNewNumber){
            setDisplay(num);
            setIsNewNumber(false);
        }
        else{
            setDisplay(display === '0' ? num : display + num)
        }
    };

    const handleOperation = (op: string) =>{
        setFirstNumber(display);
        setOperation(op);
        setIsNewNumber(true);
    }

    const calculate = () => {
        if (firstNumber && operation){
            const num1 = parseInt(firstNumber)
            const num2 = parseInt(display)
            let result: number | string;

            switch (operation){
                case '+':
                    result = num1 + num2;
                    break;
                case '−':
                    result = num1 - num2;
                    break;
                case '×':
                    result = num1 * num2;
                    break;
                case '÷':
                    result = num2 !== 0 ? num1 / num2 : 'Error';
                    break;
                default:
                    return;
            }

            setDisplay(result.toString());
            setFirstNumber('');
            setOperation('');
            setIsNewNumber (true);
        }
    }


  return (
      <div className="flex items-center justify-center min-h-screen bg-[#dce4f1]">
          <div className="bg-white h-[600px] w-[300px] rounded-2xl shadow-2xl ">
              <h1 className="text-lg font-bold text-center text-[#bfcfb4] mt-2">
                  Calculator
              </h1>
              <div className="flex justify-center mt-5">
                  <div className="bg-[#bfcfb4] w-[260px] h-[100px] items-center rounded-3xl shadow-inner">
                      <div className="text-right">
                          <div className="text-xs font-semibold text-gray-600 mt-2 mr-6">
                              Result
                          </div>
                          <div className="text-6xl font-bold mt-1 mr-4 ">
                              {display}
                          </div>
                      </div>
                  </div>
              </div>
              <div className="flex justify-center mt-2">
                  <div className="bg-gray-200 w-[260px] h-full items-center rounded-3xl shadow-inner">
                      <div className="p-5 space-y-2">
                          <div className="flex justify-between">
                              <span className="text-black">First Number</span>
                              <span className="font-semibold text-black">{firstNumber || ' 0 ' }</span>
                          </div>
                          <div className="flex justify-between">
                              <span className="text-black">Operation</span>
                              <span className="font-semibold text-black">{operation || '..'}</span>
                          </div>
                          <div className="flex justify-between">
                              <span className="text-black">Second Number</span>
                              <span className="font-semibold text-black">{!isNewNumber && !operation ? display : '0'}</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mt-5 px-4">
                  <Button onClick={() => handleNumber('7')} variant="default">7</Button>
                  <Button onClick={() => handleNumber('8')} variant="default">8</Button>
                  <Button onClick={() => handleNumber('9')} variant="default">9</Button>
                  <Button onClick={() => handleOperation('/')} variant="operator">÷</Button>

                  <Button onClick={() => handleNumber('4')} variant="default">4</Button>
                  <Button onClick={() => handleNumber('5')} variant="default">5</Button>
                  <Button onClick={() => handleNumber('6')} variant="default">6</Button>
                  <Button onClick={() => handleOperation('*')} variant="operator">×</Button>

                  <Button onClick={() => handleNumber('1')} variant="default">1</Button>
                  <Button onClick={() => handleNumber('2')} variant="default">2</Button>
                  <Button onClick={() => handleNumber('3')} variant="default">3</Button>
                  <Button onClick={() => handleOperation('-')} variant="operator">−</Button>

                  <Button onClick={() => handleNumber('0')} variant="default" className="col-span-2 w-full">0</Button>
                  <Button onClick={calculate} variant="operator">=</Button>
                  <Button onClick={() => handleOperation('+')}variant="operator">+</Button>
              </div>
          </div>
      </div>
  )
}

export default App
