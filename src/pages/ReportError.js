import React from 'react';
import {
    OverallContainer,
    TextDiv,
    PageTitleContainer
} from "../components/pageComponents/pageComponents";

const ReportError = () => {
  return (
    <>
      <OverallContainer>
        <PageTitleContainer>
          <h1>Report Errors</h1>
        </PageTitleContainer>
        <br/>
        <TextDiv>
          <p>
            If there are any issues with the website,
          </p>
          <a href="mailto:supercooldisassember@gmail.com">Contact Us Through Email</a>
          <br/>
          <p>
            Or, visit the Super Cool MIPS Disassembler Git and Create A New Issue:
          </p>
          <a href="https://git.txstate.edu/sts100/proj3339">Super Cool MIPS Disassembler Git Repo</a>
        </TextDiv>
      </OverallContainer>
    </>
  )
}

export default ReportError;