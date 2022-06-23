import React, { useEffect, useLayoutEffect } from "react";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import {
  Container,
  AddButton,
  AddButtonImage,
  NotesList,
  NoNotes,
  NoNotesImage,
  NoNotesText,
} from "./styles";

import NoteItem from "../../components/NoteItem";

export default () => {
  const navigation = useNavigation();
  const list = useSelector((state) => state.notes.list);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  }, []);

  let [fontsLoaded, error] = useFonts({
    "Lato-Bold": require("../../../assets/fonts/Lato/Lato-Bold.ttf"),
    "Lato-Regular": require("../../../assets/fonts/Lato/Lato-Regular.ttf"),
    "Lobster-Regular": require("../../../assets/fonts/Lobster/Lobster-Regular.ttf"),
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Notes",

      headerLeft: false,
      headerRight: () => (
        <AddButton
          underlayColor="transparent"
          onPress={() => navigation.navigate("EditNote")}
        >
          <AddButtonImage source={require("../../assets/more.png")} />
        </AddButton>
      ),
    });
  }, []);

  const handleNotePress = (index) => {
    navigation.navigate("EditNote", {
      key: index,
    });
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Container>
      {list.length > 0 && (
        <NotesList
          data={list}
          renderItem={({ item, index }) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {list.length === 0 && (
        <NoNotes>
          <NoNotesImage source={require("../../assets/nonotes.png")} />
          <NoNotesText style={{ fontFamily: "Lato-Bold" }}>
            Empty notes
          </NoNotesText>
        </NoNotes>
      )}
    </Container>
  );
};
