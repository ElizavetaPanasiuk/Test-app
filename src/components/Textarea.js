import React, {useState, useEffect, useRef, useCallback, useMemo} from 'react';
import Button from './Button';

function Textarea(){
  const [outputText, setOutputText] = useState('');
  const [inputText, setInputText] = useState('');
  const updateMessage = 'ouput has changed';
  const clearMessage = 'output has cleared';
  const ref = useRef('');

  const showOutputChanged = useCallback(
    () => {
      printMessage(updateMessage);
    },
    [outputText]
  );
/* 
  const showOutputClear = useMemo(
    () => {
      printMessage(clearMessage);
    },
    [outputText]
  ); */

  useEffect(() => showOutputChanged(), [showOutputChanged]);
  useEffect(() => {
    console.log('componentDidMount');
    return () => {
      console.log('componentWillUnmount')
    }
  }, [])
  useEffect(() => {
    console.log('componentWillUpdate');

    if(outputText.length > 3){
      console.log('componentShouldUpdate = true')
      test1();
      test2();
      test3();
    } else{
      console.log('componentShouldUpdate = false')
    }
  }, [outputText])


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

  const test1 = () => {
    console.log('test1: ',  outputText) // пересоздается всегда, при каждом render
  }
  const test2 = useCallback(() => {
    console.log('test2: ', outputText)
  }, []); // 1 раз, зависимостей нет
  const test3 = useCallback(() =>{
    console.log('test3: ',  outputText)
  }, [outputText]); // при изменении зависимостей (outputText)

  function clearInput(){
    setInputText('');
    ref.current.focus(); 
  }

  function printMessage(text){
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