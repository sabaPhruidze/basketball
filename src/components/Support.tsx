import style from "./support.module.css";
import BGFS from "../assets/img/BGFS.jpg";

export default function Support() {
  const handleSubmit = (event:any) => {
    event.preventDefault(); // prevent form submission
    // You can add any custom logic here that you want to execute when the form is submitted
  };

  return (
    <div>
      <img src={BGFS} alt="BGIMG" className={style.img} />
      <div className={style.BGColor} />
      
    </div>
  );
}