import { useState, useEffect,useContext } from "react";
import { myContext } from "./Root";
import style from './practic.module.css'
interface IframeData {
  number: number;
  names: string[];  
  src: string;
}


const Basic = () => {
  const context = useContext(myContext);
  const {languageChanger,screenWidth} = context
  const iframeData: IframeData[] = [
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
    {
      number:7,
      names: [languageChanger("მეექვსე მოძრაობა","第六楽章","Sixth move")],
      src: "https://www.youtube.com/embed/GYGzu9afduQ?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:8,
      names: [languageChanger("მეშვიდე მოძრაობა","第七楽章","Seventh move")],
      src: "https://www.youtube.com/embed/XbtmGKif7Ck?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:9,
      names: [languageChanger("მერვე მოძრაობა","第八楽章","Eight move")],
      src: "https://www.youtube.com/embed/dV-jZKwQHjA?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:10,
      names: [languageChanger("მეცხრე მოძრაობა","第九楽章","Ninth move")],
      src: "https://www.youtube.com/embed/-I7hpepS5e4?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:11,
      names: [languageChanger("მეათე მოძრაობა","第十楽章","Tenth move")],
      src: "https://www.youtube.com/embed/cGXFXEJUEpI?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
    {
      number:12,
      names: [languageChanger("მეთერთმეტე მოძრაობა","第十一楽章","Eleventh move")],
      src: "https://www.youtube.com/embed/4GKsOX-UmA0?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(iframeData);
  useEffect(() => {
    filterVideos();  
  }, [searchTerm]);

  const filterVideos = () => {
    const filtered = iframeData.filter((video) => {
      return video.names.some((name) => {
        return name.toLowerCase().includes(searchTerm.toLowerCase());  
      });
    });
    setFilteredVideos(filtered);    
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);  
  };

  return (
    <div className={style.containerB}>
      <div className={style.background}></div>
      <input 
        type="text"
        onChange={handleChange} 
        value={searchTerm}  
        className={style.search}
        style={{width: screenWidth < 550 ? 350 : 500}}
      />    
    <div className={style.videoOutside}>
      {filteredVideos.map((video) => {
          return ( 
            <div key={video.number} className={style.videoinside}>
              <iframe
                  width="300"
                  height="220"
                  src={video.src}
                  title={video.names[0]}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className={style.video}
                  
                ></iframe>
                <p>{video.names[0]}</p>
            </div>
          );    
        })}         
    </div>
    </div>
  );
};

export default Basic;