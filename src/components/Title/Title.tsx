import React from "react";
import styled from "styled-components";

type TitleType = {
  title: string;
};

function Title({ title }: TitleType) {
  return (
    <>
      <Text>{title}</Text>
    </>
  );
}

const Text = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #ffffff;
`;

export default Title;
