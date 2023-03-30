import { useInput } from '../../hooks/useInput';

export const FormInput = ({id, label, labelValue, type, name,  initValue }) => {

  const { values, changeHandler } = useInput({
    [name]: initValue,
  });

  return (
    <div className="form-group">
      <label htmlFor={label}>{labelValue}:</label>
      <input type={type} id={name+id} name={name} className="form-control" placeholder="" required value={values[name]} onChange={changeHandler} />
    </div>
  );
};
