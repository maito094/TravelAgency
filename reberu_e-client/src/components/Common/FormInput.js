import { useInput } from '../../hooks/useInput';

export const FormInput = ({id,
   label,
   labelValue,
   type,
   name,
   onChangeHandler,
    initValue
 }) => {


  const { values, changeHandler, onAckInput } = useInput({
    [name]: initValue,
  },onChangeHandler);

  return (
    <div className="form-group">
      <label htmlFor={label}>{labelValue}:</label>
      <input type={type} id={name+id} name={name} className="form-control" placeholder="" required value={values[name]} onChange={changeHandler} onBlurCapture={onAckInput} />
    </div>
  );
};
