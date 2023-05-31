import styled from '@emotion/styled';

export const BtnList = styled.ul`
  display: flex;
  gap: 14px;

  margin-bottom: 30px;

  list-style: none;
`;

export const ItemBtn = styled.li``;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2px 10px;

  background: transparent;

  font-size: 16px;
  font-weight: 600;

  border: 1px solid black;
  border-radius: 6px;

  box-shadow: 2px 2px 5px 0px rgba(199, 199, 199, 1);

  transition: background 50ms linear;

  &:active {
    background: #237ccf;
  }
`;
