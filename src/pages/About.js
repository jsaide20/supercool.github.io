import React from 'react';
import {
  OverallContainer,
  PageTitleContainer,
  TextDiv,
} from "../components/pageComponents/pageComponents";

const AboutPage = () => {
  return (
    <>
      <OverallContainer>
        <PageTitleContainer>
          <h1>About Super Cool MIPS Disassembler </h1>
        </PageTitleContainer>
        <br/>
        <TextDiv>
          <p>
            Malware, or harmful and malicious of software has
            been major problem in the modern era. To learn more
            about malware and how it infiltrates and attacks a device,
            it is reversed engineered from binary into a programming
            language that can be understood. To successfully combat malware
            attacks, many reverse engineers will use a disassembler.
          </p>
          <br/>
          <p>
            Our disassembler website takes in a text file that contains binary,
            translates it into MIPS assembly language, and then displays the output.
            The output can be downloaded as a text file.
          </p>
        </TextDiv>
      </OverallContainer>
    </>
  )
}

export default AboutPage;