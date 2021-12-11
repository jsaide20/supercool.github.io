import React from 'react';
import {
  OverallContainer,
  TextDiv,
  PageTitleContainer
} from "../components/pageComponents/pageComponents";

const InstructionPage = () => {
  return (
    <>
      <OverallContainer>
        <PageTitleContainer>
          <h1>Instructions</h1>
        </PageTitleContainer>
        <br/>
        <TextDiv>
          <ol>
            <li>
              On the Upload zone, located on the left hand side of
              the screen, you may upload a text file containing
              binary by clicking on the "Browse Files" button.
            </li>
            <li>
              Once the file has been uploaded, click on the
              "Click Here To Start!" button to commence the
              process.
            </li>
            <li>
              When the translation is complete, the result will
              appear on the right hand side of the website.
            </li>
            <li>
              If interested, you can download copy of the results
              by clicking the download button at the bottom of the
              result's section. The copy will be a text file.
            </li>
          </ol>
        </TextDiv>
      </OverallContainer>
    </>
  )
}

export default InstructionPage;