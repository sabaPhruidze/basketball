import {useContext} from 'react';
import { myContext } from './Root';

export default function Register() {
  const context = useContext(myContext);
  const {languageChanger,state,dispatching} = context;
  const {register} = state;
  console.log(register.name);
  const DATA = [
    {
      key:0,
      id:'name',
      value:register.name,
      onChange:(e:any) => dispatching('registerName',e.target.value),
    },
  ]
  return (
    <div>
     {DATA.map((data) => (
    <div key={data.key}>
      <label htmlFor={data.id}></label>
      <input type="text" name={data.id} id={data.id} value={data.value} onChange={data.onChange}/>
    </div>
     ))}
    </div>
  );
}