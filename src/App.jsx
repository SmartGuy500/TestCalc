import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('')

  const handleNum = (e)=> {
    const selectedNum = e.target.innerText
    console.log(selectedNum)
    if (num===0){
      setNum(selectedNum)
    }else{
      setNum(num+selectedNum)
    }
  }

  const clear = ()=>{
    setNum(0)
  }

  const percent = ()=>{
    setNum(num/100)
  }  

  const handleOperator = (e)=>{
    setOperator(e.target.innerText)
    setNum2(num)
    setNum(0)
  }

  const calculate = ()=>{
    switch(operator){
      case '+':
        setNum(parseFloat(num2) + parseFloat(num))
        break
      case '-':
        setNum(parseFloat(num2) - parseFloat(num))
         break
      case '*':
        setNum(parseFloat(num2) * parseFloat(num))
        break
      case '/':
        setNum(parseFloat(num2) / parseFloat(num))
        break
      default:
        break  
    }
  }



  return(
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-1/4 h-5/6 bg-gray-800">
        <div className='flex w-full text-white justify-end pr-10 text-3xl mt-4'>
          { num }
        </div>
        <div className='w-full flex flex-wrap mt-5 items-center justify-center'>
          <div onClick={clear} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-orange-500 rounded-full'>AC</div>
          <div className='m-2 w-14 h-14 flex text-white items-center justify-center bg-orange-500 rounded-full'>+/-</div>
          <div onClick={percent} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-orange-500 rounded-full'>%</div>
          <div onClick={handleOperator} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-orange-500 rounded-full'>/</div>
          <div onClick={handleNum} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'>7</div>
          <div onClick={handleNum} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'>8</div>
          <div onClick={handleNum} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'>9</div>
          <div onClick={handleOperator} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-orange-500 rounded-full'>*</div>
          <div onClick={handleNum} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'>4</div>
          <div onClick={handleNum} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'>5</div>
          <div onClick={handleNum} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'>6</div>
          <div onClick={handleOperator} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-orange-500 rounded-full'>-</div>
          <div onClick={handleNum} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'>1</div>
          <div onClick={handleNum} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'>2</div>
          <div onClick={handleNum} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'>3</div>
          <div onClick={handleOperator} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-orange-500 rounded-full'>+</div>
          <div onClick={handleNum} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'>0</div>
          <div className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'></div>
          <div className='m-2 w-14 h-14 flex text-white items-center justify-center bg-gray-500 rounded-full'>.</div>
          <div onClick={calculate} className='m-2 w-14 h-14 flex text-white items-center justify-center bg-orange-500 rounded-full'>=</div>
          <div className='m-2 w-14 h-14 flex text-white items-center justify-center bg-red-500 rounded-full'>(</div>
          <div className='m-2 w-14 h-14 flex text-white items-center justify-center bg-red-500 rounded-full'></div>
          <div className='m-2 w-14 h-14 flex text-white items-center justify-center bg-red-500 rounded-full'>)</div>
          <div className='m-2 w-14 h-14 flex text-white items-center justify-center bg-orange-500 rounded-full'>Back</div>
        </div>
      </div>
    </div>

  )

}

export default App
