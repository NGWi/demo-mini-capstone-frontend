export function Test({text, onTestButton }) {
  console.log(text)
  return(
    <div className="text-9xl font-bold text-white"><h1 >Test</h1><p>{text}</p><button onClick={onTestButton}>Click Here</button></div>
  )
}
