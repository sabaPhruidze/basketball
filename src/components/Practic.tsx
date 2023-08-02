import React, { useState } from 'react';
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

const iframeData: IframeData[] = [
  {
    name: "Beginning",
    src: "https://www.youtube.com/embed/GYGzu9afduQ?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
  },
  {
    name: "first move for begginers",
    src: "https://www.youtube.com/embed/XbtmGKif7Ck?list=PLWgKm7kgxzCuaTMjQ0mYmOgsh62LPcq5O",
  },
];

export default function Practic() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const nameOptions = iframeData.map((data) => ({
    value: data.name,
    label: data.name,
  }));

  const filteredIframeData = selectedOption
    ? iframeData.filter((data) =>
        data.name.toLowerCase().includes(selectedOption.value.toLowerCase())
      )
    : iframeData;

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
        {filteredIframeData.map((data) => (
          <div className={style.dFlexColumn}>
            <iframe
              width="250"
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