import './App.css'
import { Button } from './components/ui/button'

function App() {

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
                                250
                          </div>
                      </div>
                  </div>
              </div>
              <div className="flex justify-center mt-2">
                  <div className="bg-gray-200 w-[260px] h-full items-center rounded-3xl shadow-inner">
                      <div className="p-5 space-y-2">
                          <div className="flex justify-between">
                              <span className="text-black">First Number</span>
                              <span className="font-semibold text-black">200</span>
                          </div>
                          <div className="flex justify-between">
                              <span className="text-black">Operation</span>
                              <span className="font-semibold text-black">..</span>
                          </div>
                          <div className="flex justify-between">
                              <span className="text-black">Second Number</span>
                              <span className="font-semibold text-black">50</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mt-5 px-4">
                  <Button variant="default">7</Button>
                  <Button variant="default">8</Button>
                  <Button variant="default">9</Button>
                  <Button variant="operator">÷</Button>

                  <Button variant="default">4</Button>
                  <Button variant="default">5</Button>
                  <Button variant="default">6</Button>
                  <Button variant="operator">×</Button>

                  <Button variant="default">1</Button>
                  <Button variant="default">2</Button>
                  <Button variant="default">3</Button>
                  <Button variant="operator">−</Button>

                  <Button variant="default" className="col-span-2 w-full">0</Button>
                  <Button variant="operator">=</Button>
                  <Button variant="operator">+</Button>
              </div>
          </div>
      </div>
  )
}

export default App
