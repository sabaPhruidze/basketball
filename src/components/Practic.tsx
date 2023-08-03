import { useState } from 'react';
import Select from 'react-select';
import style from "./practic.module.css";

interface Option {
  value: string;
  label: string;
}

interface IframeData {
  name: string;
  src: string;
}

const iframeData1: IframeData[] = [
  {
    name: "Beginning",
    src: "https://www.youtube.com/embed/GYGzu9afduQ?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
  },
  {
    name: "first move for begginers",
    src: "https://www.youtube.com/embed/XbtmGKif7Ck?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
  },
];
const iframeData2: IframeData[] = [
  {
    name: "intermediate Beginning",
    src: "https://www.youtube.com/embed/oADaM2L1YLc",
  },
  {
    name: "first move for Intermediate",
    src: "https://www.youtube.com/embed/HAD-dv4-r1U",
  },
];

export default function Practic() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const forNameOptions = [...iframeData1,...iframeData2]
  const nameOptions = forNameOptions.map((data) => ({
    value: data.name,
    label: data.name,
  }));

  const filteredIframeData1 = selectedOption
    ? iframeData1.filter((data) =>
        data.name.toLowerCase().includes(selectedOption.value.toLowerCase())
      )
    : iframeData1;
    const filteredIframeData2 = selectedOption
    ? iframeData2.filter((data) =>
        data.name.toLowerCase().includes(selectedOption.value.toLowerCase())
      )
    : iframeData2;
  return (
    <div>
      <div className={style.backgroundP}></div>
      <Select
        options={nameOptions}
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
        closeMenuOnSelect={false}
        className={style.selectP}
      />
      <div className={style.videoContainerP}>
        {filteredIframeData1.map((data) => (
          <div className={style.dFlexColumn}>
            <iframe
              width="200"
              height="180"
              src={data.src}
              title={data.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className={style.videoName}>{data.name}</p>
          </div>
        ))}
      </div>
      <div className={style.videoContainerP}>
        {filteredIframeData2.map((data) => (
          <div className={style.dFlexColumn}>
            <iframe
              width="200"
              height="180"
              src={data.src}
              title={data.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className={style.videoName}>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}