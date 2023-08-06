import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { myContext } from './Root';
import Select from 'react-select';
import style from "./practic.module.css";




interface Option {
  value: string;
  label: string;
}

interface IframeData {
  number:number;
  names: string[];
  src: string;
}



export default function Practic() {
  const context = useContext(myContext);
  const {languageChanger,screenWidth} = context;

  const navigate = useNavigate();
  const iframeData1: IframeData[] = [
    {
      number:1,
      names: [languageChanger("დასაწყისი","始まり","Beginning") ,languageChanger("დაწყება","始める","Start"),languageChanger("დამწყებთათვის","初心者向け","For beginners"),],
      src: "https://www.youtube.com/embed/GYGzu9afduQ?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:2,
      names: [languageChanger("პირველი მოძრაობა","第一楽章","Fisrt move"),languageChanger("პირველი მოძრაობა დამწყებთათვის","初心者向けの第一楽章","First movement for beginners"),],
      src: "https://www.youtube.com/embed/XbtmGKif7Ck?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:3,
      names: [languageChanger("მეორე მოძრაობა","第二楽章","Second move"),languageChanger("მეორე მოძრაობა დამწყებთათვის","初心者向けの第二楽章","Second movement for beginners"),],
      src: "https://www.youtube.com/embed/dV-jZKwQHjA?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:4,
      names: [languageChanger("მესამე მოძრაობა","第三楽章","Third move"),languageChanger("მესამე მოძრაობა დამწყებთათვის","初心者向けの第三楽章","Third movement for beginners"),],
      src: "https://www.youtube.com/embed/-I7hpepS5e4?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:5,
      names: [languageChanger("მეოთხე მოძრაობა","第四楽章","fourth move"),languageChanger("მეოთხე მოძრაობა დამწყებთათვის","初心者向けの第四楽章","Fourth movement for beginners"),],
      src: "https://www.youtube.com/embed/cGXFXEJUEpI?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:6,
      names: [languageChanger("მეხუთე მოძრაობა","第五楽章","Fifth move"),languageChanger("მეხუთე მოძრაობა დამწყებთათვის","初心者向けの第五楽章","Fifth movement for beginners"),],
      src: "https://www.youtube.com/embed/4GKsOX-UmA0?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    
  ];
  
  const iframeData2: IframeData[] = [
    {
      number:1,
      names: [languageChanger("პირველი მოძრაობა","第一楽章","Fisrt move"),languageChanger("პირველი მოძრაობა გამოცდილისთვის","経験者向けの第一楽章","First movement for experienced"),],
      src: "https://www.youtube.com/embed/iW2VFzBiaQo?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:2,
      names: [languageChanger("მეორე მოძრაობა","第二楽章","Second move"),languageChanger("მეორე მოძრაობა გამოცდილისთვის","経験者向けの第二楽章","Second movement for experienced"),],
      src: "https://www.youtube.com/embed/q4IqeXob_qg?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:3,
      names: [languageChanger("მესამე მოძრაობა","第三楽章","Third move"),languageChanger("მესამე მოძრაობა გამოცდილისთვის","経験者向けの第三楽章","Third movement for experienced"),],
      src: "https://www.youtube.com/embed/ukCrnEtQxio?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:4,
      names: [languageChanger("მეოთხე მოძრაობა","第四楽章","Fourth move"),languageChanger("მეოთხე მოძრაობა გამოცდილისთვის","経験者向けの第四楽章","Fourth movement for experienced"),],
      src: "https://www.youtube.com/embed/Wp3nQOG4D4o?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:5,
      names: [languageChanger("მეხუთე მოძრაობა","第五楽章","Fifth move"),languageChanger("მეხუთე მოძრაობა გამოცდილისთვის","経験者向けの第五楽章","Fifth movement for experienced"),],
      src: "https://www.youtube.com/embed/uh_Qd2awC9Y?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:6,
      names: [languageChanger("მეექვსე მოძრაობა","第六楽章","Sixth move"),languageChanger("მეექვსე მოძრაობა გამოცდილისთვის","経験者向けの第六楽章","Sixth movement for experienced"),],
      src: "https://www.youtube.com/embed/QpSXkMuMf7Q?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
  ];

  console.log(screenWidth);


  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const forNameOptions = [...iframeData1, ...iframeData2];
  const nameOptions = forNameOptions.reduce<Option[]>(
    (options, data) => [
      ...options,
      ...data.names.map((name) => ({ value: name, label: name })),
    ],
    []
  );

  const filteredIframeData1 = selectedOption
    ? iframeData1.filter((data) =>
        data.names.some((name) =>
          name.toLowerCase().includes(selectedOption.value.toLowerCase())
        )
      )
    : iframeData1;
  
    const filteredIframeData2 = selectedOption
    ? iframeData2.filter((data) =>
        data.names.some((name) =>
          name.toLowerCase().includes(selectedOption.value.toLowerCase())
        )
      )
    : iframeData2;

  return (
    <div className={style.containerP}>
      <div className={style.background}></div>
        <Select
          options={nameOptions}
          value={selectedOption}
          onChange={(option) => setSelectedOption(option)}
          closeMenuOnSelect={false}
          className={style.selectP}
        />
        <div className={style.videoContainerP}>
          {filteredIframeData1.map((data) => (
            <div className={style.dFlexColumn} key={data.number}>
              <iframe
                width="200"
                height="180"
                src={data.src}
                title={data.names[0]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <p className={style.videoName}>{data.names[0]}</p>
            </div>
          ))}
        </div>
        <div className={style.videoContainerP}>
          {filteredIframeData2.map((data) => (
            <div className={style.dFlexColumn} key={data.number}>
              <iframe
                width="200"
                height="180"
                src={data.src}
                title={data.names[0]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <p className={style.videoName}>{data.names[0]}</p>
          </div>
          ))}
      </div>
      <div className={style.dFlexRowForButtonsP} >
        <button className={style.btnP} onClick={() => {navigate('/practic/basic')}}>{languageChanger('დამწყებისთვის','初心者向け',"For beginners")}</button>
        <button className={style.btnP} onClick={() => {navigate('/practic/intermedate')}}>{languageChanger('გამოცდილისთვის','経験者向け','For the experienced')}</button>
      </div>
    </div>
  );
}