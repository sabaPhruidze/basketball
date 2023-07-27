import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { myContext } from "./Root";
import style from "./history.module.css";
import Pag from "./support/Pag";
export default function HistoryInfo() {
  const context = useContext(myContext);
  const { screenWidth, state, languageChanger } = context;
  const { whichLanguage } = state;
  const pagenumber = [1, 2, 3, 4, 5, 6, 7, 8];
  const navigate = useNavigate();
  const location = useLocation();
 
  useEffect(() => {
    if (
      !pagenumber.some((page) => location.pathname.endsWith(`/history/${page}`))
    ) {
      navigate("/");
    }
  }, []);
  const HISTORY_TEXT_ENG =
  location.pathname === "/history/1" ? (
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
  ) : location.pathname === "/history/2" ? (
      "In December 1891, James Naismith, a Canadian-American professor of physical education and instructor at the International Young Men's Christian Association Training School (now Springfield College) in Springfield, Massachusetts,[5] was trying to keep his gym class active on a rainy day.[6]  He sought a vigorous indoor game to keep his students occupied and at proper levels of fitness during the long New England winters. After rejecting other ideas as either too rough or poorly suited to walled-in gymnasiums, he invented a new game in which players would pass a ball to teammates and try to score points by tossing the ball into a basket mounted on a wall. Naismith wrote the basic rules and nailed a peach basket onto an elevated track. Naismith initially set up the peach basket with its bottom intact, which meant that the ball had to be retrieved manually after each 'basket' or point scored. This quickly proved tedious, so Naismith removed the bottom of the basket to allow the balls to be poked out with a long dowel after each scored basket.Basketball was originally played with a soccer ball. These round balls from 'association football' were made, at the time, with a set of laces to close off the hole needed for inserting the inflatable bladder after the other sewn-together segments of the ball's cover had been flipped outside-in.[7][8] These laces could cause bounce passes and dribbling to be unpredictable.[9] Eventually a lace-free ball construction method was invented, and this change to the game was endorsed by Naismith (whereas in American football, the lace construction proved to be advantageous for gripping and remains to this day). The first balls made specifically for basketball were brown, and it was only in the late 1950s that Tony Hinkle, searching for a ball that would be more visible to players and spectators alike, introduced the orange ball that is now in common use. Dribbling was not part of the original game except for the 'bounce pass' to teammates. Passing the ball was the primary means of ball movement. Dribbling was eventually introduced but limited by the asymmetric shape of early balls.[dubious – discuss] Dribbling was common by 1896, with a rule against the double dribble by 1898.[10] "
    ) : location.pathname === "/history/3" ? (
      "The peach baskets were used until 1906 when they were finally replaced by metal hoops with backboards. A further change was soon made, so the ball merely passed through. Whenever a person got the ball in the basket, his team would gain a point. Whichever team got the most points won the game.[11] The baskets were originally nailed to the mezzanine balcony of the playing court, but this proved impractical when spectators in the balcony began to interfere with shots. The backboard was introduced to prevent this interference; it had the additional effect of allowing rebound shots.[12] Naismith's handwritten diaries, discovered by his granddaughter in early 2006, indicate that he was nervous about the new game he had invented, which incorporated rules from a children's game called duck on a rock, as many had failed before it.[13] Frank Mahan, one of the players from the original first game, approached Naismith after the Christmas break, in early 1892, asking him what he intended to call his new game. Naismith replied that he hadn't thought of it because he had been focused on just getting the game started. Mahan suggested that it be called 'Naismith ball', at which he laughed, saying that a name like that would kill any game. Mahan then said, 'Why not call it basketball?' Naismith replied, 'We have a basket and a ball, and it seems to me that would be a good name for it.'[14][15] The first official game was played in the YMCA gymnasium in Albany, New York, on January 20, 1892, with nine players. The game ended at 1–0; the shot was made from 25 feet (7.6 m), on a court just half the size of a present-day Streetball or National Basketball Association (NBA) court. At the time, soccer was being played with 10 to a team (which was increased to 11). When winter weather got too icy to play soccer, teams were taken indoors, and it was convenient to have them split in half and play basketball with five on each side. By 1897–98, teams of five became standard. "
    ) : location.pathname === "/history/4" ? (
      "The 1972 Olympic men's basketball final was the last game of that year’s Olympic basketball tournament, and became one of the most controversial events in Olympic history. With the ending mired in controversy, the Soviet Union defeated Team USA by one point, marking the latter's first ever loss in the event. Both the U.S. and the Soviet Union won their first eight games of the tournament, with the US team having its overall Olympic record at 63–0 when they advanced to the final against the USSR. The final three seconds of the game were replayed three times until the Soviet team came out on top because of possible political corruption as the Cold War was ongoing at the time. The result of the game is disputed to this day. The majority of judges were also Russian. The United States team had won the previous seven gold medals at the Olympics, and was among the contenders to win another in Munich at the 1972 Summer Olympics.[1][2] . It must be mentioned that the soviet union's 2 main team member were 'zurab sakandelidze' and 'mikheil korkia' from georgia The United States and Soviet Union sporting rivalry reached its peak during the Cold War. The U.S. men's team was considered a favorite in the run-up to the 1972 Games. Since the first Olympic basketball tournament at the 1936 Olympics in Berlin, the Americans had not lost a single game, winning seven consecutive gold medals in dominating fashion. Their record reached an unprecedented 63–0 before the final game. Since the 1952 tournament the Soviet team challenged the Americans, winning silver in 1952, 1956, 1960, 1964 and bronze in 1968. Outside of the Olympics, the Soviets had already defeated the U.S. team in FIBA World Championship play (at the 1959 world tournament and the 1963 world tournament). However, the Americans never sent their best collegiate players to that tournament. The Olympics strictly prohibited any involvement of professional athletes at the time. The Soviet Union and other Eastern Bloc countries used that rule to their advantage, listing all their top players as soldiers or workers, which allowed them to breach the amateur rules. "
    ) : location.pathname === "/history/5" ? (
      "Western experts classified these athletes as professionals.[3][4] On the other hand, leading American players were unable to play in the Olympics as they were officially professional and played in the NBA. That disadvantage had not prevented the Americans from winning the first seven Olympic basketball tournaments without a single defeat.[5][6][7] The confrontation of the Soviet Union and United States on the basketball court was deeply connected to the confrontation on the political front. Many American viewers assumed the 1972 Games were openly anti-American.[8] There were rumors that the Communist party had bribed the officials because they wanted the USSR to win 50 gold medals at these Olympics in commemoration of the 50th anniversary of the Soviet Union.[9] The United States team was the youngest in history. American players usually participated in the Olympics once before turning pro, and the U.S. team always had new players every four years. The 1972 team did not have a clear leader. UCLA's Bill Walton, then a rising star, declined an invitation to participate. Some saw it as a political statement given Walton’s opposition to the Vietnam War, but the most likely reason for his decision was his bad experience at the 1970 FIBA world championship. In a 2004 interview with ESPN, Walton stated that for the first time in my life, I was exposed to negative coaching and the berating of players and the foul language and the threatening of people who didn't perform.[10] According to Russian sports historian Robert Edelman, when (the Soviets) saw who was and wasn't on the U.S. team, that's when they started feeling like they'd actually have a chance. They followed American basketball closely and they knew that no Walton was going to be a big deal. Nevertheless, the team was heavily favored, featuring such players as Doug Collins and Tommy Burleson (the tallest player among all teams).[11][12] The young American team was confronted by a veteran Soviet team, featuring stars Sergei Belov, Modestas Paulauskas, and Alexander Belov. The players had played together for more than seven years. For Gennadi Volnov it was the fourth Olympic appearance.[13] "
    ) : location.pathname === "/history/6" ? (
      "The National Basketball Association (NBA) is a professional basketball league in North America composed of 30 teams (29 in the United States and 1 in Canada). It is one of the major professional sports leagues in the United States and Canada and is considered the premier professional basketball league in the world.[3] The league was founded in New York City on June 6, 1946, as the Basketball Association of America (BAA).[1] It changed its name to the National Basketball Association on August 3, 1949, after merging with the competing National Basketball League (NBL).[4] In 1976, the NBA and the American Basketball Association (ABA) merged, adding four franchises to the NBA. The NBA's regular season runs from October to April, with each team playing 82 games. The league's playoff tournament extends into June. As of 2020, NBA players are the world's best paid athletes by average annual salary per player.[5][6][7] The NBA is an active member of USA Basketball (USAB),[8] which is recognized by the FIBA (International Basketball Federation) as the national governing body for basketball in the United States. The league's several international as well as individual team offices are directed out of its head offices in Midtown Manhattan, while its NBA Entertainment and NBA TV studios are directed out of offices located in Secaucus, New Jersey. In North America, the NBA is the third wealthiest professional sport league after the National Football League (NFL) and Major League Baseball (MLB) by revenue, and among the top four in the world.[9] The Boston Celtics and the Los Angeles Lakers are tied for the most NBA championships with 17 each. The reigning league champions are the Denver Nuggets, who defeated the Miami Heat in the 2023 NBA Finals. "
    ) : location.pathname === "/history/7" ? (
      "FIBA Europe is the administrative body for basketball in Europe, within the International Basketball Federation (FIBA), which includes all 50 national European basketball federations. In reaction to the 2022 Russian invasion of Ukraine, FIBA Europe mandated that no official basketball competitions are to be held in either Russia or Belarus, while the teams of the Russian Basketball Federation and of the Belarusian Basketball Federation are being withdrawn from national team competitions and from the club competition season 2022–23 .  FIBA Europe is one of five Regions of FIBA and is responsible for controlling and developing the sport of basketball in Europe. Among many tasks, this includes promoting, supervising and directing international competition at the club and national team levels, as well as governing and appointing European international referees. FIBA Europe is an international federation whose membership consists of the national basketball federations of Europe, of which there are currently 50 members.[2] The highest decision-making body is the Board of FIBA Europe which consists of 25 persons elected by the National Federations. The Board of FIBA Europe meets twice a year and is the executive body which represents all 50 Federations that make up the membership of FIBA Europe. All 50 federations meet once a year at the General Assembly of FIBA Europe. FIBA has organized a World Championship, now known as World Cup, for men since 1950 and a Women's World Championship, now known as the Women's World Cup, since 1953. From 1986 through 2014, both events were held every four years, alternating with the Olympics. As noted above, the men's World Cup was moved to a new four-year cycle, with tournaments in the year before the Summer Olympics, after 2014. The Federation headquarters moved to Munich in 1956, then returned to Geneva in 2002. In 1991, it founded the FIBA Hall of Fame; the first induction ceremony was held on 12 September 2007, during EuroBasket 2007. During its 81st anniversary in 2013, FIBA moved into its new headquarters, 'The House of Basketball', at Mies. Andreas Zagklis became the Secretary-General of FIBA on 7 December 2018. "
    ) : location.pathname === "/history/8" ? (
      <p>
        "The Georgia men's national basketball team (GEO: საქართველოს
        ეროვნული საკალათბურთო ნაკრები) represents the country of Georgia in
        international basketball matches, and is controlled by the GEO
        Basketball Federation. Georgia became a member of FIBA in 1992, after
        they gained independence from the Soviet Union. The national team played
        their first official match against Poland in 1995. Georgia's
        accomplishments on the international stage have been clinching
        qualification to the European Basketball Championship five times. Their
        best result came at their debut trip to the tournament in 2011. In 2023,
        Georgia achieved their first qualification to the top global competition
        at the FIBA World Cup. Soviet era Until 1991, Georgia was a part of the
        Soviet Union, with players born in Georgia playing for the Soviet Union
        national team. Notable players born in Georgia who played for the Soviet
        Union and won medals at the Olympic Games, FIBA World Cup and EuroBasket
        include: Nodar Dzhordzhikiya, Otar Korkia, Guram Minashvili, Vladimer
        Ugrekhelidze, Levan Moseshvili, Zurab Sakandelidze, Mikheil Korkia and
        Nikolay Deryugin. Independent Georgia After gaining independence from
        the Soviet Union, on several occasions the GEO national team
        unsuccessfully tried to qualify for the EuroBasket, Europe's biggest
        basketball competition and major tournament. Although the national team
        did play on the EuroBasket Division B level three times and gained
        promotion in 2009 after defeating Belarus in play-offs.[2] However,
        after the expansion of the EuroBasket in 2011 from 16 to 24 teams,
        Georgia qualified to the competition for the first time. EuroBasket 2011
        Main article: EuroBasket 2011 The national team played five matches in
        Group D. They finished their preliminary group with an 2-3 record, with
        wins against Belgium and Ukraine, to advance. In their second round
        group phase, Georgia lost all five of their matches to finish their
        maiden voyage to the EuroBasket in 11th place.[3] EuroBasket 2013 Main
        article: EuroBasket 2013 After finishing second in qualifying group,
        Georgia qualified for its second EuroBasket tournament. After a
        comfortable 84–67 victory in the opening match over Poland, Georgia lost
        their four remaining matches and finished the tournament with an 1-4
        record.[4] To that point, the Eurobasket 2013 was the only tournament in
        which Georgia could not win more than one match. EuroBasket 2015 Main
        article: EuroBasket 2015 Georgia qualified to the EuroBasket for the
        third successive time in 2015. After three consecutive losses to start
        the tournament, the national team finally earned their first win in
        group play against Macedonia 90–75. They followed it up with another
        victory to end the opening phase of the event against Croatia, 71–58[5]
        to move on to the knockout stages for the first time. There they
        suffered a narrow hard fought defeat to the tournament favourites, and
        eventual silver medalist Lithuania 81–85.[6] EuroBasket 2017 Main
        article: EuroBasket 2017 During the EuroBasket 2017 qualification
        Georgia topped its group after an 90–84 victory over Montenegro, and
        qualified to EuroBasket for the fourth successive time.[7] Once the
        competition began, the national team got off to a quick start, avenging
        their EuroBasket 2015 knockout stage defeat to Lithuania 79-77.[8] The
        rest of the group stage didn't go as well for the GEO side though.
        As the team could only manage to pullout one more victory against
        Israel, before falling to Italy to finish the tournament with an 2-3
        record and being eliminated.[9] EuroBasket 2022 Main article: EuroBasket
        2022 Georgia was the co-host the EuroBasket 2022, and they automatically
        qualified for the 2022 finals tournament. This was the fifth successive
        time that Georgia qualified for the event overall. Tbilisi was one of
        the host cities, and was used for Group A matches at the brand new
        Tbilisi Basketball Arena.[10][11] The Foundation The core of the
        national team that has consistently qualified to Europe's biggest
        basketball competition consisted of captain Zaza Pachulia, Viktor
        Sanikidze, Manuchar Markoishvili, Tornike Shengelia, Giorgi Tsintsadze
        and Giorgi Shermadini. These pioneers in the GEO basketball
        community have set the standard for future generations of the national
        team to build upon, and maintain. "
      </p>
    ) : (
      ""
    );
  const HISTORY_TEXT_GEO =
  location.pathname === "/history/1" ? (
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
  ) :location.pathname === "/history/2" ? (
      "1891 წლის დეკემბერში ჯეიმს ნეისმიტი, კანადელ-ამერიკელი ფიზკულტურის პროფესორი და ინსტრუქტორი ახალგაზრდა მამაკაცთა საერთაშორისო ქრისტიანული ასოციაციის სასწავლო სკოლაში (ამჟამად სპრინგფილდის კოლეჯი) სპრინგფილდში, მასაჩუსეტსი, [5] ცდილობდა, სპორტული დარბაზი აქტიური ყოფილიყო. წვიმიანი დღე [6] ის ცდილობდა ენერგიულ შიდა თამაშს, რათა თავისი სტუდენტები დაკავებულები და ფიტნესის სათანადო დონეზე ყოფილიყო გრძელი ახალი ინგლისის ზამთარში. მას შემდეგ რაც უარყო სხვა იდეები, როგორც ძალიან უხეში ან ცუდად მორგებული კედლით შემოსილი გიმნაზიებისთვის, მან გამოიგონა ახალი თამაში, რომელშიც მოთამაშეები გადასცემდნენ ბურთს თანაგუნდელებს და ცდილობდნენ ქულების მოპოვებას ბურთის კედელზე დამაგრებულ კალათში ჩაგდებით. ნეისმიტმა დაწერა ძირითადი წესები და ატმის კალათა შემაღლებულ ტრასაზე დაამაგრა. თავდაპირველად ნეისმიტმა შექმნა ატმის კალათა. მისი ქვედა ნაწილი ხელუხლებელი იყო, რაც იმას ნიშნავდა, რომ ბურთი ხელით უნდა ამოეღო ყოველი 'კალათის' ან ქულის გატანის შემდეგ. ეს სწრაფად დამღლელი აღმოჩნდა, ამიტომ ნეისმიტმა კალათის ქვედა ნაწილი ამოიღო, რათა ბურთები გრძელი დუბლით ამოეტანა. თითოეულმა გაიტანა კალათა.კალათბურთს თავდაპირველად ფეხბურთის ბურთით თამაშობდნენ. ეს მრგვალი ბურთები 'ასოციაციური ფეხბურთიდან' იმ დროს გაკეთდა თასმების ნაკრებით გასაბერი ბუშტის ჩასართავად საჭირო ხვრელის დასახურავად მას შემდეგ, რაც ბურთის საფარის სხვა შეკერილი სეგმენტები გარედან შემობრუნებული იყო.[ 7][8] ამ თასმებმა შეიძლება გამოიწვიოს პასების და დრიბლინგის არაპროგნოზირებადი ქცევა.[9] საბოლოოდ გამოიგონეს მაქმანის გარეშე ბურთის აგების მეთოდი და თამაშის ეს ცვლილება მოიწონა ნეისმიტმა (მაშინ, როცა ამერიკულ ფეხბურთში მაქმანებიანი კონსტრუქცია მომგებიანი აღმოჩნდა დაჭერისთვის და დღემდე რჩება). სპეციალურად კალათბურთისთვის დამზადებული პირველი ბურთები ყავისფერი იყო და მხოლოდ 1950-იანი წლების ბოლოს ტონი ჰინკლმა, ეძებს ბურთის, რომელიც უფრო თვალსაჩინო იქნებოდა როგორც მოთამაშეებისთვის, ასევე მაყურებლისთვის, შემოიტანა ნარინჯისფერი ბურთი, რომელიც ახლა გამოიყენება. დრიბლინგი არ იყო თავდაპირველი თამაშის ნაწილი, გარდა თანაგუნდელებისთვის „გადაშვების“. ბურთის გადაცემა ბურთის გადაადგილების მთავარი საშუალება იყო. დრიბლინგი საბოლოოდ დაინერგა, მაგრამ შემოიფარგლება ადრეული ბურთების ასიმეტრიული ფორმით. დრიბლინგი გავრცელებული იყო 1896 წლისთვის, ორმაგი დრიბლინგის წინააღმდეგ 1898 წლისთვის.[10] "
    ) : location.pathname === "/history/3" ? (
      "ატმის კალათები გამოიყენებოდა 1906 წლამდე, როდესაც ისინი საბოლოოდ შეცვალეს ლითონის რგოლებით დაფებით. მალე განხორციელდა შემდგომი ცვლილება, ასე რომ, ბურთი უბრალოდ გადიოდა. როდესაც ადამიანი კალათში მოხვდებოდა, მისი გუნდი აგროვებდა ქულას. რომელმა გუნდმა მიიღო ყველაზე მეტი ქულა, მოიგო თამაში.[11] კალათები თავდაპირველად იყო მიმაგრებული სათამაშო მოედანის ანტრესოლით აივანზე, მაგრამ ეს არაპრაქტიკული აღმოჩნდა, როდესაც აივანზე მყოფმა მაყურებლებმა დაიწყეს ჩარევა დარტყმებში. დაფა შემოიღეს ამ ჩარევის თავიდან ასაცილებლად. ნაისმიტის ხელნაწერი დღიურები, რომლებიც აღმოაჩინა მისმა შვილიშვილმა 2006 წლის დასაწყისში, მიუთითებს იმაზე, რომ ის ნერვიულობდა მის მიერ გამოგონილ ახალ თამაშზე, რომელიც აერთიანებდა წესებს საბავშვო თამაშიდან, სახელად იხვი. როკი, როგორც ბევრი წარუმატებელი იყო მანამდე.[13] ფრენკ მაჰანი, ერთ-ერთი მოთამაშე თავდაპირველი პირველი თამაშიდან, მიუახლოვდა ნეისმიტს საშობაო შესვენების შემდეგ, 1892 წლის დასაწყისში და ჰკითხა, რა ერქვა ახალ თამაშს. ნეისმიტმა უპასუხა, რომ მას არ უფიქრია, რადგან ის მხოლოდ თამაშის დაწყებაზე იყო ორიენტირებული. მაჰანმა შესთავაზა მას 'ნაისმიტის ბურთი' დაერქვა, რაზეც მან გაიცინა და თქვა, რომ ასეთი სახელი ნებისმიერ თამაშს მოკლავს. შემდეგ მაჰანმა თქვა: 'რატომ არ ეძახით ამას კალათბურთი?'' ნეისმიტმა უპასუხა: „ჩვენ გვაქვს კალათა და ბურთი და მეჩვენება, რომ ეს კარგი სახელი იქნება ამისთვის“. 1892 წლის 20 იანვარი, ცხრა მოთამაშით. თამაში დასრულდა 1-0; დარტყმა შესრულდა 25 ფუტიდან (7,6 მ), დღევანდელი სტრიტბოლის ან ნაციონალური საკალათბურთო ასოციაციის (NBA) მოედნის ზომის ნახევარზე. იმ დროს ფეხბურთს გუნდში 10-ით თამაშობდნენ (რომელიც 11-მდე გაიზარდა). როდესაც ზამთრის ამინდი ფეხბურთის სათამაშოდ ძალიან ყინვაგამძლე იყო, გუნდები გადაიყვანეს შენობაში და მოსახერხებელი იყო მათი გაყოფა და კალათბურთის თამაში თითო მხარეს ხუთით. 1897–98 წლებში ხუთკაციანი გუნდი გახდა სტანდარტული. "
    ) : location.pathname === "/history/4" ? (
      "1972 წლის ოლიმპიური კალათბურთის მამაკაცთა ფინალი იყო იმ წლის ოლიმპიური საკალათბურთო ტურნირის ბოლო თამაში და გახდა ერთ-ერთი ყველაზე საკამათო მოვლენა ოლიმპიურ ისტორიაში. პოლემიკაში ჩაფლული დასასრულით საბჭოთა კავშირმა დაამარცხა აშშ-ს ნაკრები ერთი ქულით, რაც ამ უკანასკნელის ნიშანდობლივია. პირველი მარცხი შეჯიბრში. შეერთებულმა შტატებმაც და საბჭოთა კავშირმაც მოიგეს ტურნირის პირველი რვა თამაში, აშშ-ს გუნდს ჰქონდა საერთო ოლიმპიური რეკორდი 63-0, როდესაც ისინი ფინალში გავიდა სსრკ-სთან. ბოლო სამი წამი. თამაში სამჯერ განმეორდა მანამ, სანამ საბჭოთა გუნდი არ გამოვიდა შესაძლო პოლიტიკური კორუფციის გამო, რადგან იმ დროს ცივი ომი მიმდინარეობდა. თამაშის შედეგი დღემდე სადავოა. მოსამართლეთა უმრავლესობაც რუსი იყო. შეერთებული შტატების გუნდმა მოიგო წინა შვიდი ოქროს მედალი ოლიმპიურ თამაშებზე და იყო პრეტენდენტთა შორის, რომ მოიგო კიდევ ერთი მიუნხენში 1972 წლის ზაფხულის ოლიმპიურ თამაშებზე.[1][2] უნდა აღინიშნოს, რომ საბჭოთა კავშირის 2 ძირითადი გუნდის წევრი იყო. „ზურაბ საკანდელიძე“ და „მიხეილ ქორქია“ საქართველოდან აშშ-სა და საბჭოთა კავშირის სპორტულმა დაპირისპირებამ პიკს ცივი ომის დროს მიაღწია. 1972 წლის თამაშების წინ აშშ-ის ვაჟთა ნაკრები ფავორიტად ითვლებოდა. 1936 წლის ბერლინის ოლიმპიურ თამაშებზე პირველი ოლიმპიური კალათბურთის ტურნირის შემდეგ, ამერიკელებს არც ერთი თამაში არ წაუგიათ და ზედიზედ შვიდი ოქროს მედალი მოიპოვეს დომინირებულ მოდაში. მათმა რეკორდმა მიაღწია უპრეცედენტო 63-0 ფინალურ მატჩამდე. 1952 წლის ტურნირის შემდეგ საბჭოთა გუნდმა დაუპირისპირდა ამერიკელებს, მოიგო ვერცხლი 1952, 1956, 1960, 1964 წლებში და ბრინჯაო 1968 წელს. ოლიმპიადის მიღმა საბჭოთა გუნდმა უკვე დაამარცხა აშშ-ის ნაკრები FIBA-ს მსოფლიო ჩემპიონატზე (1959 წლის მსოფლიო ტურნირზე). და 1963 წლის მსოფლიო ტურნირი). თუმცა, ამერიკელებმა არასოდეს გაგზავნეს თავიანთი საუკეთესო კოლეგიის მოთამაშეები იმ ტურნირზე. ოლიმპიადა კატეგორიულად კრძალავდა პროფესიონალი სპორტსმენების ჩართვას იმ დროს. საბჭოთა კავშირმა და აღმოსავლეთის ბლოკის სხვა ქვეყნებმა გამოიყენეს ეს წესი თავის სასარგებლოდ და ჩამოთვალეს თავიანთი საუკეთესო მოთამაშე ჯარისკაცებად ან მუშებად, რამაც მათ საშუალება მისცა დაარღვიონ სამოყვარულო წესები. "
    ) : location.pathname === "/history/5" ? (
      "დასავლელმა ექსპერტებმა ეს სპორტსმენები პროფესიონალებად შეაფასეს. [3][4] მეორე მხრივ, წამყვანმა ამერიკელმა მოთამაშეებმა ვერ შეძლეს ოლიმპიადაზე თამაში, რადგან ისინი ოფიციალურად პროფესიონალები იყვნენ და თამაშობდნენ NBA-ში. ამ მინუსმა ამერიკელებს ხელი არ შეუშალა გამარჯვებაში. პირველი შვიდი ოლიმპიური საკალათბურთო ტურნირი ერთი მარცხის გარეშე.[5][6][7] საბჭოთა კავშირისა და შეერთებული შტატების დაპირისპირება კალათბურთის მოედანზე ღრმად იყო დაკავშირებული პოლიტიკურ ფრონტზე დაპირისპირებასთან. ბევრი ამერიკელი მაყურებელი თვლიდა 1972 წ. თამაშები ღიად ანტიამერიკული იყო.[8] იყო ჭორები, რომ კომუნისტურმა პარტიამ მოისყიდა ოფიციალური პირები, რადგან მათ სურდათ სსრკ-ს მოეპოვებინა 50 ოქროს მედალი ამ ოლიმპიადაზე საბჭოთა კავშირის 50 წლისთავის აღსანიშნავად. შტატების გუნდი ისტორიაში ყველაზე ახალგაზრდა იყო. ამერიკელი მოთამაშეები ჩვეულებრივ ოლიმპიურ თამაშებში ერთხელ მონაწილეობდნენ, სანამ პროფესიონალი გახდებოდნენ, ხოლო აშშ-ს გუნდს ყოველთვის ჰყავდა ახალი მოთამაშეები ყოველ ოთხ წელიწადში ერთხელ. 1972 წლის გუნდს არ ჰყავდა აშკარა ლიდერი. UCLA-ს ბილ უოლტონმა, მაშინდელი ამომავალი ვარსკვლავი, უარი თქვა მონაწილეობის მოწვევაზე. ზოგიერთმა ეს პოლიტიკურ განცხადებად მიიჩნია უოლტონის წინააღმდეგი ვიეტნამის ომისადმი, მაგრამ მისი გადაწყვეტილების სავარაუდო მიზეზი იყო მისი ცუდი გამოცდილება 1970 წლის FIBA-ს მსოფლიო ჩემპიონატზე. 2004 წელს ESPN-თან მიცემულ ინტერვიუში უოლტონმა განაცხადა, რომ პირველად ჩემს ცხოვრებაში, მე აღმოვჩნდი ნეგატიური მწვრთნელებისა და მოთამაშეების გაკიცხვის, უხამსი ენისა და იმ ადამიანების მუქარას, რომლებიც არ თამაშობდნენ.[10] რუსი სპორტის ისტორიკოსის რობერტ ედელმანის თქმით, როდესაც (საბჭოთა ქვეყნებმა) დაინახეს, ვინ იყო და ვინ არ იყო აშშ-ს ნაკრებში, სწორედ მაშინ დაიწყეს იმის განცდა, რომ რეალურად ექნებოდათ შანსი. ისინი ყურადღებით ადევნებდნენ თვალყურს ამერიკულ კალათბურთს და იცოდნენ, რომ არც ერთი უოლტონი არ იქნებოდა დიდი საქმე. მიუხედავად ამისა, გუნდს დიდი მოწონება დაიმსახურა, რომელშიც მონაწილეობდნენ ისეთი მოთამაშეები, როგორებიც იყვნენ დუგ კოლინზი და ტომი ბურლესონი (ყველა გუნდს შორის ყველაზე მაღალი მოთამაშე).[11][12] ახალგაზრდა ამერიკულ გუნდს დაუპირისპირდა ვეტერანი საბჭოთა გუნდი, რომელშიც მონაწილეობდნენ ვარსკვლავები სერგეი ბელოვი, მოდესტას პაულაუსკასი და ალექსანდრე ბელოვი. ფეხბურთელები ერთად თამაშობდნენ შვიდ წელზე მეტი ხნის განმავლობაში. გენადი ვოლნოვისთვის ეს იყო მეოთხე ოლიმპიური გამოსვლა.[13] "
    ) : location.pathname === "/history/6" ? (
      "ნაციონალური საკალათბურთო ასოციაცია (NBA) არის პროფესიონალური კალათბურთის ლიგა ჩრდილოეთ ამერიკაში, რომელიც შედგება 30 გუნდისგან (29 შეერთებულ შტატებში და 1 კანადაში). ეს არის ერთ-ერთი მთავარი პროფესიული სპორტული ლიგა შეერთებულ შტატებსა და კანადაში და ითვლება. უმაღლესი პროფესიული კალათბურთის ლიგა მსოფლიოში.[3] ლიგა დაარსდა ნიუ-იორკში, 1946 წლის 6 ივნისს, როგორც ამერიკის საკალათბურთო ასოციაცია (BAA). 1949 წლის 3, კონკურენტ ეროვნულ საკალათბურთო ლიგასთან (NBL) შერწყმის შემდეგ.[4] 1976 წელს NBA და ამერიკის საკალათბურთო ასოციაცია (ABA) გაერთიანდნენ და დაამატეს NBA-ს ოთხი ფრენჩაიზია. NBA-ის რეგულარული სეზონი გრძელდება ოქტომბრიდან აპრილამდე. , თითოეული გუნდი თამაშობს 82 თამაშს. ლიგის პლეი-ოფის ტურნირი ივნისამდე გრძელდება. 2020 წლის მდგომარეობით, NBA-ს მოთამაშეები არიან მსოფლიოში ყველაზე მაღალანაზღაურებადი სპორტსმენები საშუალო წლიური ხელფასის მიხედვით.[5][6][7] NBA აქტიური წევრია. USA Basketball (USAB),[8] რომელიც აღიარებულია FIBA-ს (კალათბურთის საერთაშორისო ფედერაციის) მიერ, როგორც კალათბურთის ეროვნული მმართველი ორგანო აშშ-ში. ლიგის რამდენიმე საერთაშორისო, ასევე ინდივიდუალური გუნდის ოფისი არის მიმართული მისი სათავო ოფისებიდან Midtown Manhattan-ში, ხოლო მისი NBA Entertainment და NBA TV სტუდიები მიმართულია ოფისებიდან, რომლებიც მდებარეობს სეკაუკუსში, ნიუ ჯერსიში. ჩრდილოეთ ამერიკაში, NBA არის მესამე უმდიდრესი პროფესიული სპორტული ლიგა ნაციონალური საფეხბურთო ლიგის (NFL) და ბეისბოლის მთავარი ლიგის (MLB) შემდეგ შემოსავლების მიხედვით და მსოფლიოს საუკეთესო ოთხეულს შორის.[9] ბოსტონ სელტიკსი და ლოს-ანჯელეს ლეიკერსი NBA-ს ყველაზე მეტი ჩემპიონობით 17-ით ერთობიან. ლიგის მოქმედი ჩემპიონები არიან დენვერ ნაგეტსი, რომელმაც დაამარცხა მაიამი ჰიტი 2023 წლის NBA ფინალში. "
    ) : location.pathname === "/history/7" ? (
      "FIBA Europe არის კალათბურთის ადმინისტრაციული ორგანო ევროპაში, კალათბურთის საერთაშორისო ფედერაციის (FIBA) ფარგლებში, რომელიც მოიცავს ევროპის 50-ვე ეროვნულ კალათბურთის ფედერაციას. 2022 წელს უკრაინაში რუსეთის შეჭრის საპასუხოდ, FIBA Europe-მა დაავალა, რომ არ იყოს ოფიციალური კალათბურთის შეჯიბრებები. ჩატარდება რუსეთში ან ბელორუსში, ხოლო რუსეთის კალათბურთის ფედერაციის და ბელორუსის კალათბურთის ფედერაციის გუნდები ამოღებულნი არიან ეროვნული ნაკრების შეჯიბრებიდან და საკლუბო შეჯიბრების სეზონიდან 2022–23. FIBA Europe არის FIBA-ს ხუთი რეგიონიდან ერთ-ერთი და არის პასუხისმგებელია ევროპაში კალათბურთის სპორტის კონტროლსა და განვითარებაზე. მრავალ ამოცანას შორის, ეს მოიცავს საერთაშორისო შეჯიბრების ხელშეწყობას, ზედამხედველობასა და ხელმძღვანელობას საკლუბო და სანაკრებო დონეზე, ასევე ევროპული საერთაშორისო მსაჯების მართვასა და დანიშვნაზე. FIBA Europe არის საერთაშორისო ფედერაცია, რომლის წევრობა შედგება ევროპის ნაციონალური კალათბურთის ფედერაციებისაგან, რომელთაგან ამჟამად 50 წევრია. FIBA Europe-ის საბჭო იკრიბება წელიწადში ორჯერ და არის აღმასრულებელი ორგანო, რომელიც წარმოადგენს FIBA Europe-ის წევრ 50-ვე ფედერაციას. 50-ვე ფედერაცია იკრიბება წელიწადში ერთხელ ფიბა ევროპის გენერალურ ასამბლეაზე. FIBA-მ მოაწყო მსოფლიო ჩემპიონატი, რომელიც ახლა ცნობილია როგორც მსოფლიო ჩემპიონატი, მამაკაცებისთვის 1950 წლიდან და ქალთა მსოფლიო ჩემპიონატი, რომელიც ახლა ცნობილია როგორც ქალთა მსოფლიო თასი, 1953 წლიდან. 1986 წლიდან 2014 წლამდე, ორივე ღონისძიება ტარდებოდა ყოველ ოთხ წელიწადში ერთხელ, მონაცვლეობით. ოლიმპიადა. როგორც ზემოთ აღინიშნა, მამაკაცთა მსოფლიო ჩემპიონატი გადავიდა ახალ ოთხწლიან ციკლში, ტურნირებით ზაფხულის ოლიმპიადის წინა წელს, 2014 წლის შემდეგ. ფედერაციის შტაბ-ბინა გადავიდა მიუნხენში 1956 წელს, შემდეგ დაბრუნდა ჟენევაში 2002 წელს. 1991 წელს, დააარსა ფიბას დიდების დარბაზი; პირველი შესვლის ცერემონია გაიმართა 2007 წლის 12 სექტემბერს, 2007 წლის ევრობასკეტის დროს. 2013 წელს, 81 წლის იუბილეზე, FIBA გადავიდა თავის ახალ შტაბ-ბინაში, კალათბურთის სახლში, მიესში. ანდრეას ზაგკლისი FIBA-ს გენერალური მდივანი გახდა 2018 წლის 7 დეკემბერს."
    ) : location.pathname === "/history/8" ? (
      <p>
        „საქართველოს კალათბურთის ვაჟთა ეროვნული ნაკრები (ქართული: საქართველოს
        ეროვნული საკალათბურთო ნაკრები) წარმოადგენს საქართველოს ქვეყანას ქ
        საერთაშორისო კალათბურთის მატჩებს და აკონტროლებს ქართველი კალათბურთის
        ფედერაცია. საქართველო FIBA-ს წევრი 1992 წელს, მას შემდეგ გახდა მათ
        საბჭოთა კავშირისგან დამოუკიდებლობა მოიპოვეს. ნაკრებმა ითამაშა მათი
        პირველი ოფიციალური მატჩი პოლონეთთან 1995 წელს. საქართველოს საერთაშორისო
        ასპარეზზე მიღწევები მკვეთრი იყო ევროპის საკალათბურთო ჩემპიონატის
        კვალიფიკაცია ხუთჯერ. მათი საუკეთესო შედეგი 2011 წელს ტურნირზე მათ
        სადებიუტო მოგზაურობაში მიიღეს. 2023 წელს, საქართველომ პირველი
        კვალიფიკაცია მიაღწია მსოფლიოს უმაღლეს კონკურსში ფიბას მსოფლიო
        ჩემპიონატზე. საბჭოთა ეპოქა 1991 წლამდე საქართველო იყო მისი ნაწილი
        საბჭოთა კავშირი, საქართველოში დაბადებული ფეხბურთელებით, რომლებიც
        თამაშობენ საბჭოთა კავშირის შემადგენლობაში ეროვნული გუნდი. საქართველოში
        დაბადებული გამორჩეული ფეხბურთელები, რომლებიც საბჭოთა კავშირის
        შემადგენლობაში თამაშობდნენ კავშირი და მოიპოვა მედლები ოლიმპიურ
        თამაშებზე, FIBA მსოფლიო თასზე და ევრობასკეტზე მათ შორის: ნოდარ ჯორჯიკია,
        ოთარ ქორქია, გურამ მინაშვილი, ვლადიმერი უგრეხელიძე, ლევან მოსეშვილი,
        ზურაბ საკანდელიძე, მიხეილ ქორქია და ნიკოლაი დერიუგინი. დამოუკიდებელი
        საქართველო დამოუკიდებლობის მოპოვების შემდეგ საბჭოთა კავშირში,
        რამდენჯერმე საქართველოს ნაკრებში წარუმატებლად ცდილობდა ევროპის უდიდეს
        ევრობასკეტზე კვალიფიკაციას კალათბურთის შეჯიბრი და დიდი ტურნირი.
        მიუხედავად იმისა, რომ ეროვნული ნაკრები სამჯერ ითამაშა ევრობასკეტის B
        დივიზიონის დონეზე და მოიგო დაწინაურება 2009 წელს პლეი-ოფში ბელორუსიის
        დამარცხების შემდეგ.[2] თუმცა, 2011 წელს ევრობასკეტის გაფართოების შემდეგ
        16-დან 24 გუნდამდე, საქართველომ შეჯიბრში პირველად მიიღო მონაწილეობა.
        ევრობასკეტი 2011 მთავარი სტატია: ევრობასკეტი 2011 ნაკრებმა ჩაატარა ხუთი
        მატჩი D ჯგუფი. მათ წინასწარი ჯგუფი 2-3 ანგარიშით დაასრულეს იგებს
        ბელგიასა და უკრაინას, რათა დაწინაურდეს. მათ მეორე ტურში ჯგუფური ეტაპის
        დასასრულებლად საქართველომ ხუთივე მატჩი წააგო პირველი ვოიაჟი ევრობასკეტზე
        მე-11 ადგილზე.[3] ევრობასკეტი 2013 მთავარი სტატია: ევრობასკეტი 2013
        შესარჩევ ჯგუფში მეორე ადგილის დაკავების შემდეგ, საქართველომ ევრობასკეტის
        მეორე ტურნირზე გაიმარჯვა. Შემდეგ კომფორტული გამარჯვება 84–67 პოლონეთთან
        გახსნის მატჩში, საქართველომ დამარცხდა მათ დარჩენილი ოთხი მატჩი და
        ტურნირი 1-4 დაასრულეს ჩანაწერი.[4] იმ მომენტისთვის, 2013 წლის
        ევრობასკეტი ერთადერთი ტურნირი იყო რომელიც საქართველომ ერთ მატჩზე მეტი
        ვერ მოიგო. ევრობასკეტი 2015 მთავარი სტატია: ევრობასკეტი 2015 საქართველო
        ევრობასკეტზე გავიდა ზედიზედ მესამედ 2015 წელს. სამი ზედიზედ წაგების
        შემდეგ დაიწყება ტურნირზე ეროვნულმა ნაკრებმა საბოლოოდ პირველი გამარჯვება
        მოიპოვა ჯგუფური თამაში მაკედონიასთან 90-75. მათ მოჰყვა სხვა გამარჯვება
        ხორვატიასთან შეხვედრის გახსნის ფაზის დასასრულებლად, 71–58[5] რომ
        პირველად გადავიდეს ნოკაუტ ეტაპებზე. იქ ისინი ვიწრო მძიმე ბრძოლაში მარცხი
        განიცადა ტურნირის ფავორიტებთან და საბოლოო ვერცხლის მედალოსანი ლიტვა
        81–85.[6] ევრობასკეტი 2017 მთავარი სტატია: ევრობასკეტი 2017 ევრობასკეტი
        2017 კვალიფიკაციის დროს საქართველო თავის ჯგუფში ლიდერობდა მონტენეგროსთან
        90-84 გამარჯვების შემდეგ და ზედიზედ მეოთხედ კვალიფიცირდება
        ევრობასკეტზე.[7] Ერთხელ დაიწყო შეჯიბრი, ეროვნული ნაკრები სწრაფად დაიწყო,
        შურისძიება მათ ევრობასკეტი 2015 ნოკაუტ ეტაპზე დამარცხდნენ ლიტვასთან
        79-77.[8] The თუმცა, ჯგუფური ეტაპის დანარჩენმა ნაწილმა ქართული მხარე
        კარგად ვერ ჩაიარა. რადგან გუნდს მხოლოდ ერთი გამარჯვების მოპოვება შეეძლო
        ისრაელი, სანამ იტალიაში ჩავარდებოდა, რათა ტურნირი ანგარიშით 2-3 დაასრულა
        ჩანაწერი და აღმოფხვრილი.[9] ევრობასკეტი 2022 მთავარი სტატია: ევრობასკეტი
        2022 წელს საქართველო იყო 2022 წლის ევრობასკეტის თანამასპინძელი და ისინი
        ავტომატურად კვალიფიცირებულია 2022 წლის ფინალურ ტურნირზე. ეს ზედიზედ
        მეხუთე იყო დრო, როდესაც საქართველომ საერთო ჯამში მიიღო მონაწილეობა.
        თბილისი იყო ერთ-ერთი მასპინძელი ქალაქები და გამოიყენებოდა A ჯგუფის
        მატჩებისთვის სრულიად ახალი თბილისის საკალათბურთო არენა.[10][11] ფონდი
        ბირთვი ეროვნული ნაკრები, რომელიც მუდმივად კვალიფიცირდება ევროპის უდიდეს
        გუნდში საკალათბურთო შეჯიბრი კაპიტანი ზაზა ფაჩულია, ვიქტორი მონაწილეობდა
        სანიკიძე, მანუჩარ მარკოიშვილი, თორნიკე შენგელია, გიორგი ცინცაძე და
        გიორგი შერმადინი. ეს პიონერები ქართულ კალათბურთში საზოგადოებამ დაადგინა
        ეროვნული სტანდარტი მომავალი თაობებისთვის გუნდი, რომ დაეყრდნოს და
        შეინარჩუნოს. "
      </p>
    ) : (
      ""
    );
  const HISTORY_TEXT_JPN =
  location.pathname === "/history/1" ? (
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
  ) : location.pathname === "/history/2" ? (
      "1891年12月、カナダ系アメリカ人の体育教授であり、マサチューセッツ州スプリングフィールドにある国際青年キリスト教協会訓練学校（現在のスプリングフィールド大学）の講師でもあるジェームス・ネイスミスは、体育の授業を日中も活発に続けようとしていた。 [6] 彼は、ニューイングランドの長い冬の間、生徒たちを夢中にさせ、適切なレベルの体力を維持させるために、活発な屋内ゲームを模索しました。他のアイデアが荒すぎるか、壁に囲まれた体育館には適さないとして拒否した後、彼は、 プレーヤーがチームメイトにボールをパスし、壁に取り付けられたバスケットにボールを投げ入れて得点を狙う新しいゲームです。ネイスミスは基本的なルールを書き、高架のトラックに桃のバスケットを釘付けしました。ネイスミスは最初に桃のバスケットを設置しました これは、「バスケット」または得点が入るたびにボールを手動で回収する必要があることを意味していましたが、これはすぐに退屈であることが判明したため、ネイスミスはバスケットの底を取り外し、ゴール後に長いダボでボールを突き出せるようにしました。 バスケットボールはもともとサッカー ボールを使ってプレーされました。 「協会フットボール」のこれらの丸いボールは、当時、ボールのカバーの他の縫い合わされた部分が外側から内側にひっくり返された後、膨張可能な袋を挿入するために必要な穴を閉じるために一組のひもで作られていました。 7][8] これらの靴ひもにより、バウンスパスやドリブルが予測不能になる可能性があります。[9] 最終的に、レースのないボールの構造方法が発明され、このゲームへの変更はネイスミスによって支持されました（一方、アメリカンフットボールでは、レース構造がグリップに有利であることが証明され、今日まで残っています）。 バスケットボール専用に作られた最初のボールは茶色で、選手にも観客にもより目立つボールを探していたトニー ヒンクルが、現在一般的に使用されているオレンジ色のボールを導入したのは 1950 年代後半になってからでした。 ドリブルはチームメイトへの「バウンスパス」を除いて、元のゲームの一部ではありませんでした。 ボールをパスすることがボールを動かす主な手段でした。 ドリブルは最終的に導入されましたが、初期のボールの非対称な形状によって制限されました。[疑わしい - 議論] ドリブルは 1896 年までに一般的となり、1898 年までにダブル ドリブルに対する規則が制定されました。[10] "
    ) : location.pathname === "/history/3" ? (
      "桃のバスケットは 1906 年まで使用され、最終的にバックボード付きの金属製フープに置き換えられました。すぐにさらなる変更が加えられ、ボールは単に通過するだけでした。誰かがボールをバスケットに入れるたびに、そのチームはポイントを獲得しました。」 [11] バスケットは当初、競技場の中 2 階のバルコニーに釘付けされていましたが、バルコニーにいる観客がショットの邪魔をし始めたため、これは実用的ではないことがわかり、この干渉を防ぐためにバックボードが導入されました。 [12] 2006 年初頭に孫娘が発見したネイスミスの手書きの日記には、彼が発明した新しいゲームに不安を感じていたことが示されており、それはアヒル・オン・ザ・アヒルという子供の遊びのルールを取り入れたものだった。 [13] オリジナルの最初のゲームのプレイヤーの 1 人であるフランク・マーハンは、クリスマス休暇後の 1892 年の初めにネイスミスに近づき、新しいゲームを何と呼ぶつもりか尋ねました。 ネイスミスは、ゲームを開始することだけに集中していたため、そのことは考えていないと答えた。 マハンはそれを「ネイスミス・ボール」と呼ぶよう提案したが、マハンはそのような名前ではどんなゲームも台無しになると笑って言った。 するとマハンは「それをバスケットボールと呼んではどうだろうか？」と言いました。 ネイスミスは「我々にはバスケットとボールがある。それにはそれが良い名前だと思う」と答えた[14][15]。最初の公式戦は19日にニューヨーク州アルバニーのYMCA体育館で行われた。 1892年1月20日、9人のプレイヤー。 試合は1-0で終了。 ショットは 25 フィート (7.6 m) の距離から行われ、現在のストリートボール コートや全米バスケットボール協会 (NBA) のコートのちょうど半分の大きさのコートで行われました。 当時、サッカーは1チーム10人でプレーされていました（11人に増加）。 冬の天候が寒すぎてサッカーができないときは、チームは屋内に連れて行かれ、チームを半分に分けて各側5人でバスケットボールをするのが便利でした。 1897 年から 1898 年までに、5 人チームが標準になりました。"
    ) : location.pathname === "/history/4" ? (
      "「1972 年オリンピックの男子バスケットボール決勝は、その年のオリンピック バスケットボール競技会の最終試合であり、オリンピック史上最も物議を醸した出来事の 1 つとなりました。結末が物議を醸すなか、ソ連が 1 点差で USA チームを破り、アメリカ代表の勝利をマークしました。 この大会では史上初の黒星となり、米国とソ連の両国がトーナメントの最初の8試合で勝利し、米国チームがソ連との決勝に進んだ時点で63対0というオリンピック通算成績を記録した。 当時冷戦が続いていたため、政治腐敗の可能性があったため、ソ連チームが勝利するまで、試合は３回再試合されたが、試合の結果については今でも議論があり、審判団の大半もロシア人だった。 米国チームはそれまでのオリンピックで7個の金メダルを獲得しており、1972年の夏季オリンピックではミュンヘンでもう一つ金メダルを獲得する候補の1人であった[1][2]。ソ連の主要チームメンバー2人が以下の選手だったことは言及しなければならない。 ジョージア州出身の「ズラブ・サカンデリゼ」と「ミヘイル・コルキア」 アメリカとソ連のスポーツ競争は冷戦時代に頂点に達した。 米国男子チームは、1972 年のオリンピックに向けての優勝候補とみなされていました。 1936 年のベルリンオリンピックでバスケットボール競技が初めて開催されて以来、アメリカ人は一度も負けたことがなく、圧倒的な勢いで 7 回連続金メダルを獲得しました。 最終戦までに彼らの記録は63対0という前例のない記録に達した。 1952年の大会以来、ソビエトチームはアメリカチームに挑戦し、1952年、1956年、1960年、1964年に銀メダル、1968年には銅メダルを獲得した。オリンピック以外では、ソビエトチームはすでにFIBA世界選手権のプレーでアメリカチームを破っていた（1959年の世界トーナメントで） および 1963 年の世界大会）。 しかし、アメリカ人は大学で最高の選手をそのトーナメントに送り込むことはなかった。 当時のオリンピックではプロスポーツ選手の関与は固く禁じられていた。 ソ連やその他の東側諸国はこのルールを有利に利用し、トップ選手をすべて軍人または労働者としてリストアップし、アマチュアルールに違反することを可能にした。 」"
    ) : location.pathname === "/history/5" ? (
      "「西側の専門家は、これらのアスリートをプロとして分類しました。[3][4]一方、アメリカの有力選手は正式にプロとしてNBAでプレーしたため、オリンピックに出場することができませんでした。その不利な点がアメリカ人の勝利を妨げるものではありませんでした。 [5][6][7]バスケットボールコートでのソ連と米国の対立は、政治面での対立と深く結びついており、多くのアメリカ人の視聴者は1972年の試合を想定していた。 オリンピックは公然と反米的であった。 [8] ソ連建国50周年を記念して、このオリンピックでソ連に50個の金メダルを獲得してもらいたかったために、共産党が当局者に賄賂を贈ったという噂があった [9] 。 アメリカのチームは史上最年少でした。アメリカの選手は通常、プロになる前に一度オリンピックに出場し、アメリカのチームは常に 4 年ごとに新しい選手を迎えました。1972 年のチームには明確なリーダーがいませんでした。 当時新星だったUCLAのビル・ウォルトンは参加への誘いを断った。 ウォルトンがベトナム戦争に反対していたことを考えると、これを政治的声明と見る人もいたが、彼の決断の最も可能性の高い理由は、1970年のFIBA世界選手権での悪い経験だった。 2004年のESPNとのインタビューでウォルトンは、人生で初めて否定的なコーチングや選手への叱責、汚い言葉やパフォーマンスを発揮しなかった人々への脅迫にさらされたと述べた[10]。 ロシアのスポーツ史家ロバート・エデルマン氏によると、（ソ連側が）米国チームに誰がいるのか、誰がいないのかを確認したとき、自分たちにも実際にチャンスがあると感じ始めたという。 彼らはアメリカのバスケットボールを注意深く観察しており、ウォルトンが大したことないことを知っていました。 それにもかかわらず、ダグ・コリンズやトミー・バーレソン（全チームの中で最も背の高い選手）などの選手を擁するチームは非常に支持されていた[11][12]。 若いアメリカチームは、セルゲイ・ベロフ、モデスタス・パウラウスカス、アレクサンダー・ベロフというスター選手を擁するベテランのソ連チームと対峙した。 選手たちは7年以上一緒にプレーしていた。 ゲンナディ・ヴォルノフにとっては4度目のオリンピック出場となった[13]。"
    ) : location.pathname === "/history/6" ? (
      "全米バスケットボール協会 (NBA) は、30 チーム (米国に 29 チーム、カナダに 1 チーム) で構成される北米のプロ バスケットボール リーグです。米国とカナダの主要なプロ スポーツ リーグの 1 つであり、 世界最高のプロバスケットボールリーグ。 [3] このリーグは、1946 年 6 月 6 日にニューヨーク市でアメリカバスケットボール協会 (BAA) として設立されました。 [1] 8 月に名称を全米バスケットボール協会に変更しました。 [4] 1976 年、NBA とアメリカバスケットボール協会 (ABA) が合併し、NBA に 4 つのフランチャイズが追加されました。NBA のレギュラー シーズンは 10 月から 4 月まで続きます。 , 各チームは 82 試合を行います。リーグのプレーオフ トーナメントは 6 月まで続きます。2020 年の時点で、NBA プレーヤーは、プレーヤーあたりの平均年俸で世界で最も稼いでいるアスリートです。[5][6][7] NBA はアクティブなメンバーです。 USA Basketball (USAB) [8] は、米国のバスケットボールの全国統括団体として FIBA (国際バスケットボール連盟) によって認められています。 リーグの複数の国際オフィスおよび個々のチームのオフィスはマンハッタンのミッドタウンにある本社にあり、NBA エンターテインメントと NBA TV スタジオはニュージャージー州セコーカスにあるオフィスにあります。 北米では、NBAは収益でナショナル・フットボール・リーグ(NFL)とメジャー・リーグ・ベースボール(MLB)に次いで3番目に裕福なプロスポーツリーグであり、世界でトップ4に入る[9]。 ボストン・セルティックスとロサンゼルス・レイカーズは、それぞれ17回のNBAチャンピオンシップで最多タイとなっている。 現リーグチャンピオンは、2023年のNBAファイナルでマイアミ・ヒートを破ったデンバー・ナゲッツです。 "
    ) : location.pathname === "/history/7" ? (
      "FIBAヨーロッパは、ヨーロッパの全50国内バスケットボール連盟を含む国際バスケットボール連盟（FIBA）内のヨーロッパにおけるバスケットボールの管理団体である。2022年のロシアによるウクライナ侵攻に反応し、FIBAヨーロッパは公式バスケットボール競技会を禁止することを義務付けた。 FIBAヨーロッパはFIBAの5つの地域のうちの1つであり、ロシアバスケットボール連盟とベラルーシバスケットボール連盟のチームは代表チームの大会とクラブ大会の2022-23シーズンから撤退している。 FIBA ヨーロッパはヨーロッパにおけるバスケットボール スポーツの管理と発展に責任を負い、その中にはクラブおよび代表チーム レベルでの国際競技の促進、監督、指導、ヨーロッパの国際審判員の管理と任命などが含まれます。 メンバーはヨーロッパの国内バスケットボール連盟で構成されており、現在その会員数は 50 名です。[2] 最高意思決定機関は、各国連盟によって選出された 25 名で構成される FIBA ヨーロッパ理事会です。 FIBA ヨーロッパ理事会は年に 2 回開催され、FIBA ヨーロッパの会員を構成する 50 の連盟すべてを代表する執行機関です。 50 の連盟すべてが年に 1 回、FIBA ヨーロッパの総会に集まります。 FIBA は 1950 年から男子の世界選手権（現在はワールドカップとして知られています）を、1953 年からは女子の世界選手権（現在は女子ワールドカップとして知られています）を主催してきました。1986 年から 2014 年まで、両方の大会は 4 年ごとに交互に開催されました。 オリンピック。 上で述べたように、男子ワールドカップは 2014 年以降、夏季オリンピックの前年にトーナメントが開催される新しい 4 年サイクルに移行しました。連盟の本部は 1956 年にミュンヘンに移転し、その後 2002 年にジュネーブに戻りました。 FIBA殿堂を設立しました。 最初の入会式は、ユーロバスケット 2007 開催中の 2007 年 9 月 12 日に開催されました。2013 年の創立 81 周年にあたり、FIBA はミースの新本部「バスケットボールの家」に移転しました。 アンドレアス・ザグクリスは2018年12月7日にFIBAの事務総長に就任した。"
    ) : location.pathname === "/history/8" ? (
      <p>
        「ジョージア州男子バスケットボール代表チーム (グルジア語: საქართველოს)
        ეროვნული საკალათბურთო ნაკრები) はジョージアという国を表します。
        バスケットボールの国際試合を主催しており、ジョージアのサッカー協会によって管理されています。
        バスケットボール連盟。 ジョージア州は 1992 年に FIBA
        のメンバーになりました。 彼らはソビエト連邦から独立しました。
        代表チームがプレーした 1995年のポーランドとの最初の公式戦。ジョージアの
        国際舞台での成果は確実なものとなっている
        欧州バスケットボール選手権への出場権を5回獲得。 彼らの
        最高の結果は、2011 年のトーナメントへのデビュー旅行で得られました。2023
        年には、 ジョージア州が世界最高峰の大会への初出場資格を獲得
        FIBAワールドカップで。 ソ連時代 1991
        年まで、ジョージアはソ連の一部でした。
        ソ連、ジョージア生まれの選手がソ連でプレー ナショナルチーム。
        ジョージア生まれでソ連代表として活躍した著名な選手
        ユニオンに加盟し、オリンピック、FIBAワールドカップ、ユーロバスケットでメダルを獲得
        含まれるもの：ノダル・ジョルジキヤ、オタール・コルキア、グラム・ミナシュビリ、ウラジメル
        ウグレケリゼ、レヴァン・モセシビリ、ズラブ・サカンデリゼ、ミハイル・コルキア、
        ニコライ・デリュギン。 独立ジョージア州から独立した後
        ソ連、何度かグルジア代表チーム
        ヨーロッパ最大のユーロバスケットへの出場資格を獲得しようとしたが失敗した
        バスケットボールの大会とメジャートーナメント。 代表チームですが、
        ユーロバスケット ディビジョン B レベルで 3 回プレーし、獲得しました
        2009年にプレーオフでベラルーシを破り昇格した[2]。 しかし、
        2011年にユーロバスケットが16チームから24チームに拡大された後、
        ジョージア州が初めて本大会への出場権を獲得した。 ユーロバスケット 2011
        詳細は「ユーロバスケット2011」で代表チームは5試合を行った。 グループ
        D。彼らは 2 勝 3 敗で予選グループを終了しました。
        ベルギー、ウクライナに勝利し、勝ち上がり。 2回戦では
        グループフェーズでは、ジョージアは5試合すべてに負けてリーグを終えた。
        11位でユーロバスケットへの処女航海を果たした[3]。 ユーロバスケット 2013
        メイン 記事：ユーロバスケット2013 予選グループ2位通過後、
        ジョージアは2回目のユーロバスケットトーナメント出場権を獲得した。 後
        開幕戦ではポーランドに84対67で快勝、ジョージアは敗退
        残り4試合を戦い、1-4でトーナメントを終えた。 記録[4]。
        その時点では、ユーロバスケット 2013 が唯一のトーナメントでした。
        ジョージアは複数の試合に勝つことができませんでした。 ユーロバスケット
        2015 メイン 記事: ユーロバスケット 2015
        ジョージア、ユーロバスケットへの出場資格を獲得
        2015年は3年連続。開幕から3連敗を喫した後、
        この大会で、代表チームがついに初勝利を収めた。
        グループプレーでマケドニアと90対75で対戦。
        彼らはそれに続いて別のことをした
        クロアチアに対して71対58で勝利し、イベントの序盤を終了した[5]
        初めてノックアウトステージに進出する。 そこで彼らは
        大会優勝候補相手に僅差の激戦で敗れ、
        最終的に銀メダルを獲得したリトアニア 81–85。[6] ユーロバスケット 2017
        メイン 記事: EuroBasket 2017 EuroBasket 2017 予選中
        ジョージアはモンテネグロに90対84で勝利しグループ首位に立った。
        4回連続でユーロバスケット出場権を獲得した[7]。 一度
        競技が始まり、代表チームは雪辱を果たしながら素早いスタートを切った
        ユーロバスケット2015決勝トーナメントではリトアニアに79-77で敗れた[8]。
        の
        しかし、グループステージの残りはグルジア側にとってそれほどうまくいかなかった。
        チームは対してあと1勝しかできなかったので、
        イスラエル、イタリアに敗れて2-3でトーナメントを終える
        記録され、排除される[9]。 EuroBasket 2022 詳細記事: EuroBasket
        2022年ジョージア州はユーロバスケット2022の共同主催者であり、自動的に
        2022年の決勝トーナメントへの出場権を獲得した。 これで5回連続でした
        ジョージア州がイベント全体の出場権を獲得したタイム。
        トビリシもその一つでした
        開催都市、そして真新しい試合でグループAの試合に使用されました。 トビリシ
        バスケットボール アリーナ。[10][11] 財団の中核
        ヨーロッパ最大の大会への出場権を常に獲得してきた代表チーム
        バスケットボール競技はキャプテンのザザ・パチュリア、ヴィクトルで構成された
        サニキゼ、マヌチャル・マルコイシビリ、トルニケ・シェンゲリア、ジョルジ・ツィンツァゼ
        そしてジョルジ・シェルマディーニ。
        ジョージアのバスケットボール界の先駆者たち
        コミュニティは国家の将来の世代のための標準を設定しました
        構築し、維持するためのチーム。 」
      </p>
    ) : (
      ""
    );

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
          <div
            className={
              whichLanguage === 1
                ? `${style.context} ${style.JPNICONText}`
                : style.context
            }
            style={{
              fontSize:
                whichLanguage === 0 ? 21 : whichLanguage === 1 ? 22 : 26,
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
