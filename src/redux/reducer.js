const initialState = {
  input: '',
  output: '',
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case('WRITE_TEXT'):
      return{
        output: `${state.output} ${state.input}`,
        input: '',
      }
    case('CLEAR_OUTPUT'):
      return{
        output: '',
        input: state.input,
      }
    case('CLEAR_INPUT'):
      return{
        input: '',
        output: state.output,
      }
    case('INPUT_TEXT'):
      return{
        input: action.value,
        output: state.output,
      }
    default: 
      return state
  }
}