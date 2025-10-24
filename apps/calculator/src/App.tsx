import { Button } from '@/components/ui/button'
import {useState} from "react";
import {useCalculatorStore} from "@/stores/store.ts";

function App() {
    const [display, setDisplay] = useState('0');
    const [firstNumber, setFirstNumber] = useState(" ");
    const [operation, setOperation] = useState('');
    const [isNewNumber, setIsNewNumber] = useState(true);
    const [showHistory, setShowHistory] = useState(false);

    const {history, addToHistory, clearHistory} = useCalculatorStore();

    const handleNumber = (num: string) => {
        if (isNewNumber){
            setDisplay(num);
            setIsNewNumber(false);
        }
        else{
            setDisplay(display === '0' ? num : display + num)
        }
    };

    const handleOperation = (op :any) =>{
        setFirstNumber(display);
        setOperation(op);
        setIsNewNumber(true);
    }

    const calculate = () => {
        if (firstNumber && operation){
            const num1 = parseFloat(firstNumber)
            const num2 = parseFloat(display)
            let result;

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
                case '/':
                    result = num2 !== 0 ? num1 / num2 : 'Error';
                    break;
                default:
                    return;
            }

            const expression = `${num1} ${operation} ${num2}`;
            const resultStr = result.toString();


            addToHistory(expression, resultStr)

            setDisplay(resultStr);
            setFirstNumber('');
            setOperation('');
            setIsNewNumber (true);
        }
    }

    const handleClear = () => {
        setDisplay('0');
        setFirstNumber('');
        setOperation('');
        setIsNewNumber(true);
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-[#dce4f1]">
            <div className="bg-white h-full w-[300px] rounded-2xl shadow-2xl ">
                <h1 className="text-lg font-bold text-center text-black mt-2">
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
                    <Button onClick={() => handleOperation('/')} variant="operator">/</Button>

                    <Button onClick={() => handleNumber('4')} variant="default">4</Button>
                    <Button onClick={() => handleNumber('5')} variant="default">5</Button>
                    <Button onClick={() => handleNumber('6')} variant="default">6</Button>
                    <Button onClick={() => handleOperation('×')} variant="operator">×</Button>

                    <Button onClick={() => handleNumber('1')} variant="default">1</Button>
                    <Button onClick={() => handleNumber('2')} variant="default">2</Button>
                    <Button onClick={() => handleNumber('3')} variant="default">3</Button>
                    <Button onClick={() => handleOperation('−')} variant="operator">−</Button>

                    <Button onClick={() => handleNumber('0')} variant="default">0</Button>
                    <Button onClick={calculate} variant="operator">=</Button>
                    <Button onClick={handleClear} variant="operator">C</Button>
                    <Button onClick={() => handleOperation('+')}variant="operator">+</Button>
                </div>
                <div className="flex px-4 mt-3 mb-4">
                    <Button onClick={() => setShowHistory(!showHistory)} variant="outline" className="flex-1">
                        {showHistory ? 'Hide' : 'Show'} History
                    </Button>
                </div>
                {showHistory && (
                    <div className="mx-4 mt-4 mb-4 bg-gray-200 rounded-3xl max-h-60 p-4 overflow-y-auto ">
                        <div className="flex justify-end items-center mb-3">
                            {history.length > 0 && (
                                <Button onClick={clearHistory} variant ='ghost' className='h-6 text-xs'>
                                    Clear All
                                </Button>
                            )}
                        </div>
                        {history.length === 0 ? (
                            <p className="text-gray-500 text-sm text-center py-4">
                                No history yet.
                            </p>
                        ):(
                            <div className="space-y-2">
                                {history.map((item,) =>(
                                    <div key={item.timestamp} className="bg-gray-200 p-3 rounded-3xl border border-y-gray-900">
                                        <div className="text-lg text-black">{item.expression} = {item.result}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default App