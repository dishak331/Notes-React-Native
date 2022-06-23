import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const AddButton = styled.TouchableHighlight`
  margin-right: 17px;
  padding: 12px;
`;

export const AddButtonImage = styled.Image`
  width: 23px;
  height: 24px;
`;

export const NotesList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const NoNotes = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NoNotesImage = styled.Image`
  width: 250px;
  height: 240px;
  margin-bottom: 5px;
`;

export const NoNotesText = styled.Text`
  font-size: 18px;
  color: #000;
`;
