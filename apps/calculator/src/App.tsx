import './App.css'

function App() {

  return (
      <div className="flex items-center justify-center min-h-screen bg-[#dce4f1]">
          <div className="bg-white h-[600px] w-[300px] rounded-2xl shadow-2xl ">
              <h1 className="text-lg font-bold text-center text-[#bfcfb4] mt-2">
                  Calculator
              </h1>
              <div className="flex justify-center mt-10">
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
          </div>
      </div>
  )
}

export default App
