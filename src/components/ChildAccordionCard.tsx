// I decided to use both useContext and props it's kinda new experience for me . of course I know that both do the 
//same job and useContext is much more convenient but even through it would be better to try it
import {useContext} from "react"
import { questionsContext } from "./Questions";
import styles from "./accordion.module.css";
export default function ChildAccordionCard() {
  const context = useContext(questionsContext);
  const { item,arrowClicK,showHideNumberChange,arrow} =
    context;
    const {number,title,content} = item

  return (
    <>
      <div className={styles.card}>
        <div className={styles.dFlexRow}>
          <p className={arrowClicK === number ? `${styles.pActive}` : ""}>
            {title}
          </p>
          <img
            className={
              arrowClicK === number
                ? `${styles.arrow} ${styles.active}`
                : `${styles.arrow}`
            }
            alt="arrow"
            src={arrow}
            onClick={() => {
              showHideNumberChange(number);
            }}
          />
        </div>
        {arrowClicK === number ? (
          <span className={styles.content}>{content}</span>
        ) : null}
        
      </div>
    </>
  );
}
