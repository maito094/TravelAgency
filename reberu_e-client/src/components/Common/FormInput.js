export const FormInput = ({ label, labelValue, type, name, onChange, initValue }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{labelValue}:</label>
      <input type={type} id={name} name={name} className="form-control" placeholder="" required value={initValue} onChange={onChange} />
    </div>
  );
};
