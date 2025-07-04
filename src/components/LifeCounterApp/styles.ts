import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: center;
`;
export const PlayersContainer = styled.View`
 flex-direction: row;
  flex-wrap: wrap; 
align-items: center;
justify-content: center;

  flex: 1;
  background: pink;
`;


export const PlayerBlock = styled.View<{
    columns: number;
    rows: number;
    rotate: string;
}>`
  width: ${({ columns }) => `${100 / columns}%`};
  height: ${({ rows }) => `${100 / rows}%`};
  justify-content: center;
  align-items: center;
  transform: ${({ rotate }) => `rotate(${rotate})`};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};

  background-color: pink
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
`