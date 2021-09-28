import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./styled";

const Toggle = (props) => {
  const { handleChange } = props;
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" onChange={handleChange} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};

export default Toggle;
