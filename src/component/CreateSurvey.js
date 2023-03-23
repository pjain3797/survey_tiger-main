import TypeSelector from "./TypeSelector";
import Question from "./Question";
import Options from "./Options";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateSurvey = ({ squestions, setSquestions }) => {
  const history = useHistory();
  const getRandom = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };
  const defaultOptionsState = [
    { uid: getRandom(), value: "" },
    { uid: getRandom(), value: "" },
  ];
  const [qText, setQtext] = useState("");
  const [qType, setQtype] = useState(0);
  const [options, setOptions] = useState(defaultOptionsState);

  const addOptions = () => {
    let newOption = {
      uid: getRandom(),
      value: "",
    };
    let updatedOptions = [...options];
    updatedOptions.push(newOption);
    setOptions(updatedOptions);
  };

  const deleteOptions = () => {
    if (options.length === 2) {
      alert("can't be less than 2");
    } else {
      let updatedOptions = [...options];
      updatedOptions.pop();
      setOptions(updatedOptions);
    }
  };

  const updateOptionText = (id, text) => {
    let updatedOptions = [...options];
    let changeIndex = updatedOptions.findIndex((x) => x.uid === id);
    updatedOptions[changeIndex].value = text;
    setOptions(updatedOptions);
  };

  const updateSurveyQuestions = () => {
    let newSurveyQuestion = [...squestions];
    let newQ = {
      qtext: qText,
      qtype: qType,
      options: options,
    };
    newSurveyQuestion.push(newQ);
    setSquestions(newSurveyQuestion);
    setQtype(0);
    setQtext("");
    setOptions(defaultOptionsState);
  };

  const publish = () => {
    updateSurveyQuestions();
    history.push("./published");
  };

  return (
    <>
      <TypeSelector qtype={qType} setQtype={setQtype} />
      {qType !== 0 ? (
        <>
          <Question onTextUpdate={setQtext} />
          {options.map((opt, key) => (
            <Options
              key={key}
              uid={opt.uid}
              addOptions={addOptions}
              deleteOptions={deleteOptions}
              updateText={updateOptionText}
            />
          ))}
          <button
            className="btn btn-primary m-1"
            onClick={() => updateSurveyQuestions()}
          >
            Add Question
          </button>
          <button className="btn btn-primary m-1" onClick={() => publish()}>
            Publish
          </button>
        </>
      ) : null}
    </>
  );
};

export default CreateSurvey;
