import { useContext } from "react";
import { myContext } from "./Root";
import style from "./history.module.css";
import Pag from "./support/Pag";
import history1Img1 from "../assets/img/history/1.1.jpg";
import history1Img2 from "../assets/img/history/1.2.jpg";

export default function History() {
  const context = useContext(myContext);
  const { screenWidth, languageChanger, state } = context;
  const { languageToggle } = state;
  // variables for text
  const HISTORY_TEXT_ENG = (
    <>
      Basketball is a team sport in which two teams, most commonly of five
      players each, opposing one another on a rectangular court, compete with
      the primary objective of shooting a basketball (approximately 9.4 inches
      (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46
      cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end
      of the court), while preventing the opposing team from shooting through
      their own hoop. A field goal is worth two points, unless made from behind
      the three-point line, when it is worth three. After a foul, timed play
      stops and the player fouled or designated to shoot a technical foul is
      given one, two or three one-point free throws. The team with the most
      points at the end of the game wins, but if regulation play expires with
      the score tied, an additional period of play (overtime) is mandated.
      Players advance the ball by bouncing it while walking or running
      (dribbling) or by passing it to a teammate, both of which require
      considerable skill.
      <img
        src={history1Img2}
        alt="history1Img2"
        className={style.history1Img2}
      />
      On offense, players may use a variety of shots – the layup, the jump shot,
      or a dunk; on defense, they may steal the ball from a dribbler, intercept
      passes, or block shots; either offense or defense may collect a rebound,
      that is, a missed shot that bounces from rim or backboard. It is a
      violation to lift or drag one's pivot foot without dribbling the ball, to
      carry it, or to hold the ball with both hands then resume dribbling. The
      five players on each side fall into five playing positions. The tallest
      player is usually the center, the second-tallest and strongest is the
      power forward, a slightly shorter but more agile player is the small
      forward, and the shortest players or the best ball handlers are the
      shooting guard and the point guard, who implements the coach's game plan
      by managing the execution of offensive and defensive plays (player
      positioning). Informally, players may play three-on-three, two-on-two, and
      one-on-one. Invented in 1891 by Canadian-American gym teacher James
      Naismith in Springfield, Massachusetts, in the United States, basketball
      has evolved to become one of the world's most popular and widely viewed
      sports
    </>
  );
  const HISTORY_TEXT_GEO = (
    <>
      კალათბურთი არის გუნდური სპორტი, რომელშიც ორი გუნდი, უმეტესად ხუთი
      მოთამაშისგან შემდგარი, მართკუთხა მოედანზე ერთმანეთს უპირისპირდება,
      ეჯიბრება კალათბურთის (დაახლოებით 9,4 ინჩი (24 სმ) დიამეტრის) სროლას
      მცველის რგოლში. 18 ინჩის (46 სმ) დიამეტრის კალათა, რომელიც 10 ფუტის (3,048
      მ) სიმაღლეზე იყო დამონტაჟებული კორტის თითოეულ ბოლოში დაფაზე), ხოლო
      მოწინააღმდეგე გუნდს აეკრძალა სროლა საკუთარი რგოლიდან. მინდვრის გოლი ღირს
      ორი ქულა, გარდა იმ შემთხვევისა, როდესაც ის სამქულიანი ხაზის უკნიდან
      გაკეთდება, როდესაც ის სამია. უხეში დარღვევის შემდეგ, დროში გათვლილი თამაში
      ჩერდება და მოთამაშეს, რომელიც დარღვევის ან ტექნიკური ხარვეზის გასაღებად
      არის დანიშნული, ეძლევა ერთი, ორი ან სამი ერთქულიანი საჯარიმო სროლა. გუნდი,
      რომელსაც ყველაზე მეტი ქულა აქვს თამაშის ბოლოს, იმარჯვებს, მაგრამ თუ
      წესების თამაში იწურება თანაბარი ანგარიშით, მასზე დამატებითი სათამაშო
      პერიოდი (ოვერტაიმი) არის მანდატი. მოთამაშეები წინ სწევენ ბურთს სიარულის ან
      სირბილის დროს (დრიბლინგის) გადაცემით ან თანაგუნდელისთვის გადაცემით, რაც
      ორივე დიდ უნარს მოითხოვს. შეტევისას მოთამაშეებს შეუძლიათ გამოიყენონ
      სხვადასხვა დარტყმები - ლეიაპ, ნახტომი ან დუნკი;
      <img
        src={history1Img2}
        alt="history1Img2"
        className={style.history1Img2}
      />
      დაცვაში მათ შეუძლიათ მოპარონ ბურთი დრიბლერს, ჩაჭრათ პასები ან დაბლოკონ
      დარტყმები; შეტევამ ან დაცვამ შეიძლება შეაგროვოს მოხსნა, ანუ გაშვებული
      დარტყმა, რომელიც გადმოხტება რგოლიდან, ან დარღვევაა საყრდენი ფეხის აწევა ან
      გადმოწევა ბურთის დრიბლინგის გარეშე, ტარება ან ბურთის ორივე ხელით დაჭერა და
      შემდეგ განახლება. დრიბლინგი. თითოეულ მხარეს ხუთი მოთამაშე ხვდება ხუთ
      სათამაშო პოზიციაზე. ყველაზე მაღალი მოთამაშე ჩვეულებრივ ცენტრია, მეორე
      ყველაზე მაღალი და ძლიერი არის პაუერფორვარდი, ოდნავ დაბალი, მაგრამ უფრო
      მოქნილი მოთამაშე არის პატარა ფორვარდი, ხოლო ყველაზე დაბალი მოთამაშე ან
      ბურთის საუკეთესო მფლობელები არიან მსროლელი და მცველი. ახორციელებს
      მწვრთნელის თამაშის გეგმას შეტევითი და დაცვითი თამაშების (მოთამაშის
      პოზიციონირება) შესრულების მართვით. არაფორმალურად, მოთამაშეებს შეუძლიათ
      ითამაშონ სამი-სამ, ორი-ორი და ერთი-ერთზე. 1891 წელს კანადელ-ამერიკელმა
      სპორტული დარბაზის მასწავლებელმა ჯეიმს ნეისმიტმა გამოიგონა სპრინგფილდში,
      მასაჩუსეტსი, შეერთებული შტატები, კალათბურთი განვითარდა და გახდა ერთ-ერთი
      ყველაზე პოპულარული და ფართოდ სანახავი სპორტი მსოფლიოში.
    </>
  );
  const HISTORY_TEXT_JPN = (
    <>
      バスケットボールは、長方形のコート上で互いに対峙する 2 つのチーム
      (最も一般的にはそれぞれ 5 人のプレーヤーで構成されます)
      が、ディフェンダーのフープにバスケットボール (直径約 9.4 インチ (24 cm))
      を通すことを主な目的として競い合うチーム スポーツです。 直径 18 インチ (46
      cm) のバスケットがコートの両端のバックボードに高さ 10 フィート (3.048 m)
      取り付けられ、相手チームが自分たちのフープを通ってシュートするのを防ぎました。
      フィールドゴールは、3点の価値がある場合、3ポイントラインの後ろからゴールしない限り、2点の価値があります。
      ファウルの後、時限プレーは停止し、ファウルをされたかテクニカルファウルを撃つように指定されたプレーヤーには、1、2、または3本のワンポイントフリースローが与えられます。
      ゲーム終了時に最も多くのポイントを獲得したチームが勝利しますが、同点で規定のプレーが終了した場合は、追加のプレー時間（延長戦）が義務付けられます。
      プレーヤーは、歩いたり走ったり（ドリブル）しながらボールをバウンドさせたり、味方にパスしたりすることでボールを進めますが、どちらもかなりのスキルが必要です。
      オフェンスでは、プレーヤーはレイアップ、ジャンプショット、ダンクなど、さまざまなショットを使用できます。
      <img
        src={history1Img2}
        alt="history1Img2"
        className={style.history1Img2}
      />
      守備では、ドリブラーからボールを奪ったり、パスをインターセプトしたり、ショットをブロックしたりすることがあります。
      オフェンスまたはディフェンスのいずれかがリバウンド、つまりリムから跳ね返ったミスショットを回収することができます。または、ボールをドリブルせずに軸足を持ち上げたり引きずったり、ボールを運んだり、両手でボールを保持してから再開したりすることは違反です。
      ドリブル。 両サイドの 5 人のプレーヤーは 5 つのポジションに分かれます。
      通常、最も背の高いプレーヤーがセンター、2番目に身長が高く最も強いプレーヤーがパワーフォワード、少し背が低いが機敏なプレーヤーがスモールフォワード、そして最も背の低いプレーヤーまたは最も優れたボールハンドラーがシューティングガードとポイントガードです。
      攻撃と守備のプレー（選手のポジショニング）の実行を管理することで、コーチのゲームプランを実行します。
      非公式には、プレイヤーは 3 対 3、2 対 2、および 1 対 1 でプレイできます。
      1891
      年に米国マサチューセッツ州スプリングフィールドのカナダ系アメリカ人の体育教師ジェームス
      ネイスミスによって発明されたバスケットボールは、世界で最も人気があり、広く視聴されているスポーツの
      1 つへと進化しました。
    </>
  );
  // variables for text
  return (
    <>
      <div className={style.background}></div>
      <div className={style.wrapper}>
        <div
          className={style.container}
          style={{
            margin: screenWidth <= 860 ? "50px auto" : "0px auto",
            width:
              screenWidth <= 690 ? "calc(100% - 30px)" : "calc(100% - 200px)",
          }}
        >
          <img
            src={history1Img1}
            alt="history1Img1"
            className={style.history1Img1}
          />
          <div
            className={style.context}
            style={{
              fontSize:
                languageToggle === 0 ? 21 : languageToggle === 1 ? 22 : 26,
            }}
          >
            {languageChanger(
              HISTORY_TEXT_GEO,
              HISTORY_TEXT_JPN,
              HISTORY_TEXT_ENG
            )}
          </div>
        </div>
        <Pag />
      </div>
    </>
  );
}
