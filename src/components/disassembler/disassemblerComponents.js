import styled from 'styled-components';

export const OverallContainer = styled.div`
  margin: auto;
`;

export const LeftSideContainer = styled.div`
  background-color: #C4C4C4;
  align-item: center;
  border-radius: 8px;
  display: flex;
  position: fixed;
  top: 100px;
  left: 20px;
  bottom: 80px;
  width: 30%;
  margin: auto;
`;

export const RightSideContainer = styled.div`
  align-item: center;
  text-align: center;
  border-radius: 8px;
  border: 2px solid #ccc;
  position: fixed;
  top: 100px;
  right: 20px;
  width: 64%;
  bottom: 80px;
  z-index: 20;
`;

export const ResultArea = styled.div`
  height: 100%;
  display: flex;
  align-item: center;
`;

export const ResultTextArea = styled.textarea`
  background-color: white;
  border: 2px solid #ccc;
  display: flex;
  width: 100%;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 1.0rem;
  resize: none;
  text-align: left;
`;

export const UploadSection = styled.div`
  display: block;
  text-align: center;
  margin: auto;
`;

export const UploadBtn = styled.button`
  border-radius: 35px;
  text-align: center;
  background: #1F435C;
  padding: 30px 20px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
`;

export const DownloadDiv = styled.div`
  display: block;
  float: right;
`;

export const DownloadBtn = styled.a`
  border-radius: 35px;
  text-align: center;
  background: #1F435C;
  padding: 5px 11px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.0rem;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    background: white;
    color: #8CA5AE;
  }
`;

export const UploadHidden = styled.input`
  display: none;
`;

export const StartBtn = styled.button`
  border-radius: 35px;
  text-align: center;
  padding: 10px 10px;
  cursor: pointer;
  border: 2px solid white;
  background: white;
  font-size: 0.8rem;

  &:hover {
    color: #8CA5AE;
  }
`;
