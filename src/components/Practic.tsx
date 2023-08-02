import Select from 'react-select';
import style from "./practic.module.css";
export default function Practic() {
  const name = ["Apple", "sour", "factual"]
let searchName = name?.map((item) => ({value:item, label:item}));
  return (
    <div>
      <div className={style.backgroundP}></div>
      <Select
        options={searchName} 
        closeMenuOnSelect={false}         
        className={style.selectP}
 />
    <div className={style.videoContainerP}>
      <iframe width="250px" height="180px" src="https://www.youtube.com/embed/VIDEO_ID" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
    </div>
  );
}
