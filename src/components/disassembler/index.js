import React, {useState} from 'react';
import {
  OverallContainer,
  LeftSideContainer,
  RightSideContainer,
  UploadBtn,
  UploadSection,
  UploadHidden,
  ResultArea,
  ResultTextArea,
  DownloadBtn,
  DownloadDiv,
  StartBtn
} from "./disassemblerComponents";

function convertToOneString(arrayOutput) {
  let result = '';
  arrayOutput.forEach(function(item) {
    result += item + "\n";
  });
  return result;
}

const Disassembler = () => {
  const [fileContent, setFileContent] = useState(null);
  const [textValue, setValue] = useState('');
  const [reference, setRef] = useState(null);
  const [isValidFile, setValidFile] = useState(false);

  const hiddenFileInput = React.useRef(null); //aids in clicking hidden upload button

  const verifyFileExtension = (file) => {
    const extension = file.name.split('.').pop();
    return (extension === 'txt');
  }

  const onChange = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    if (verifyFileExtension(file)) {
      reader.onload = function (event) {
        setFileContent(event.target.result);
      };
      reader.readAsText(file); //needed for reader contents to appear
      setValidFile(true);
    }
    else {
      alert("Please Upload A .txt File");
      setValidFile(false);
    }
  }

  //triggers the click on the hidden file input
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const onStartClick = () => {
    if (isValidFile) {
      const resultOutput = start(fileContent);
      const realOutput = convertToOneString(resultOutput);
      setValue(realOutput); //set value so result area can display output
      handleChange(realOutput);
    }
    else {
      alert('Please Upload A File Before Clicking Start Button!');
    }
  }

  const handleChange = (resultOutput) => {
    const textFileBlob = new Blob([resultOutput], {type:'text/plain'});
    setRef(window.webkitURL.createObjectURL(textFileBlob));
  }

  return (
    <>
      <OverallContainer>
        <LeftSideContainer>
          <UploadSection>
            <UploadHidden type ="file" accept=".txt" ref={hiddenFileInput} onChange={onChange}/>
            <UploadBtn onClick={handleClick}>BROWSE FILES</UploadBtn>
            <UploadSection>
              <br/>
              <StartBtn onClick={onStartClick}>CLICK HERE TO START!</StartBtn>
            </UploadSection>
          </UploadSection>
        </LeftSideContainer>
        <RightSideContainer>
          <ResultArea>
            <ResultTextArea id='result-area' value={textValue}
                            disabled onchange={handleChange} placeholder="Output Will Go Here"/>
          </ResultArea>
          <br/>
          <DownloadDiv>
            <DownloadBtn href={reference}  download="output.txt" id='link'>DOWNLOAD</DownloadBtn>
          </DownloadDiv>
        </RightSideContainer>
      </OverallContainer>
    </>
  )
}
export default Disassembler;
