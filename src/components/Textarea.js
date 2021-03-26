import React, {useState, useEffect, useRef, useCallback} from 'react';
import Button from './Button';

function Textarea(){
  const [outputText, setOutputText] = useState('');
  const [inputText, setInputText] = useState('');
  const [message] = useState('ouput has changed');
  const ref = useRef('');

  const showIfOutputChanged = useCallback(
    () => {
      greeting(message);
    },
    [outputText]
  );

  useEffect(() => showIfOutputChanged(), [showIfOutputChanged]);


  function handleClick(){
    setOutputText(`${outputText} ${inputText}`);
    setInputText('');
    ref.current.focus(); 
  }

  function handleChange(){
    const currentInput = document.querySelector('input').value; 
    setInputText(currentInput);
  }

  function clearOutput(){
    setOutputText('');
    ref.current.focus(); 
  }

  function clearInput(){
    setInputText('');
    ref.current.focus(); 
  }

  function greeting(text){
    console.log(text);
  }

  return(
    <div>
      <input ref={ref} type="text" value={inputText} onChange={handleChange} className="input-field"/>
      <div className="buttons">
        <Button clickHandler={handleClick} name="Write text"/>
        <Button clickHandler={clearOutput} name="Clear ouput" />
        <Button clickHandler={clearInput} name="Clear input" />
      </div>
      <div className="text-field">{outputText}</div>
    </div>
  );
}

export default Textarea;