import { useContext } from "react";
import { myContext } from "../Root";
import { useNavigate } from "react-router-dom";
import style from "./support.module.css";
function AdvancedExample() {
  const context = useContext(myContext);
  const { screenWidth } = context;
  const pagination = [1, 2, 3, 4, 5, 6, 7, 8];
  const navigation = useNavigate();

  return (
    <div>
      <div
        className={style.pagination}
        style={{ bottom: screenWidth <= 860 ? 70 : 30 }}
      >
        {pagination.map((product, index) => {
          return (
            <div
              key={index}
              onClick={() => navigation(`/history/${product}`)}
              className={style.eachPag}
            >
              {product}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdvancedExample;
