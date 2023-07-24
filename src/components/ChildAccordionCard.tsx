import styles from "./accordion.module.css";

export default function ChildAccordionCard(props: {
  arrowClick: number | null;
  showHideNumberChange: any;
  arrow: any;
  number: number;
  title: string;
  content: string;
}) {
  const { arrowClick, showHideNumberChange, arrow, number, title, content } =
    props;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.dFlexRow}>
          <p className={arrowClick === number ? `${styles.pActive}` : ""}>
            {title}
          </p>
          <img
            className={
              arrowClick === number
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
        {arrowClick === number ? (
          <span className={styles.content}>{content}</span>
        ) : null}
        <hr></hr>
      </div>
    </>
  );
}
