import React from 'react';
import {
  OverallContainer,
  TextDiv,
  TableDiv,
  PageTitleContainer
} from "../components/pageComponents/pageComponents";

const listOfSupportedInstructions = ["add", "addi", "addiu", "addu", "and",
  "andi", "beq", "bne", "j", "jal", "jr", "lbu", "lhu", "li", "lui", "lw",
  "nor", "or" , "ori", "slt", "slti", "sltiu", "sltu", "sll", "srl", "sb",
  "sc", "sh", "sw", "sub", "subu", "sra"];

const listOfSupportedRegisters = ["$zero", "$at", "$v0", "$v1", "$a0", "$a1",
  "$a2", "$a3", "$t0", "$t1", "$t2", "$t3", "$t4", "$t5", "$t6", "$t7", "$s0",
  "$s1", "$s2", "$s3" , "$s4" ,"$s5" ,"$s6" ,"$s7" ,"$t8" ,"$t9" , "$k0",
  "$k1", "$gp" , "$sp" , "$fp" , "$ra"];


const PrintList = (props) => {
  const list = props.list;
  const listTitle = props.listTitle;
  const listItems = list.map((item) =>
    <tr key={item.toString()}>
      <td>{item}</td>
    </tr>
  );

  return (
    <>
      <table>
        <thead>
        <tr>
          <th>{listTitle}</th>
        </tr>
        </thead>
        <tbody>
        {listItems}
        </tbody>
      </table>
    </>
  )
};

const HelpPage = () => {

  return (
    <>
      <OverallContainer>
        <PageTitleContainer>
          <h1>Help Page</h1>
        </PageTitleContainer>
        <br/>
        <TextDiv>
          <p>
            Below are some details that may help resolve some
            issues with the use of the website.
          </p>
          <br/>
          <p>
            Because we are using MIPS Assembly, each instruction
            must be 32 bits long. The disassembler doesn't support
            pseudoinstructions. Below is a list of supported
            instructions and registers:
          </p>
          <br/>
          <TableDiv>
            <PrintList listTitle={"Supported Instructions"}
                       list={listOfSupportedInstructions}/>
            <PrintList listTitle={"Supported Registers"}
                       list={listOfSupportedRegisters}/>
          </TableDiv>
          <br/>
          <p>
            The input file must be a text file for the translation
            to work correctly. Click the link at the bottom of the
            page to visit the git repository to download the
            program that will convert an C++ object file to a text
            file.
          </p>
          <br/>
          <p>
            If there are still concerns that are not addressed in
            this help section, click the link at the bottom for
            more info or click the Report Errors button on the top
            right of the site to report any errors or send any
            questions.
          </p>
          <a href="https://git.txstate.edu/sts100/proj3339">
            Super Cool MIPS Disassembler Git Repo
          </a>
        </TextDiv>
      </OverallContainer>
    </>
  )
}

export default HelpPage;