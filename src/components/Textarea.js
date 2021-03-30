import React, { useEffect, useRef } from 'react';
import Button from './Button';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from './../redux/action';


function Textarea(){
  const dispatch = useDispatch();

  const input = useSelector(state => state.input);
  const output = useSelector(state => state.output);

  const handleInputChange = ({target}) => {
    dispatch(Actions.inputText(target.value));
  }

  const handleWriteText = () => {
    dispatch(Actions.writeText());
  }

  const handleClearOutput = () => {
    dispatch(Actions.clearOutput());
  }

  const handleClearInput = () => {
    dispatch(Actions.clearInput());
  }
  const ref = useRef();
  useEffect(() => ref.current.focus(), [output]);

  return(
    <div>
      <input type="text" value={input} onChange={handleInputChange}  ref={ref} className="input-field"/>
      <div className="buttons">
        <Button clickHandler={handleWriteText} name="Write text"/>
        <Button clickHandler={handleClearOutput} name="Clear ouput" />
        <Button clickHandler={handleClearInput} name="Clear input" />
      </div>
      <div className="text-field">{output}</div>
    </div>
  )
}

export default Textarea;