import React, { useEffect } from "react";
import { StContainer } from "./styles";
import Header from "../components/Header";
import Body from "../components/Body";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ListaDestaques from "../components/listaDestaques";
import ListaIcones from "../components/listaIcones";

import firebase from "firebase/app";
import "firebase/auth";
import config from "../../config";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";

const Objeto = () => {
  // useEffect(() => {
  //   Firebase.initializeApp(config.firebase);
  //   let ref = Firebase.database().ref("postagem");
  //   // ref.on("value", snapshot => {
  //   //   const state = snapshot.val();
  //   //   console.log(state);
  //   // });
  // }, []);
  return (
    <StContainer>
      <Header
        titulo="GoDev"
        descritivo="Programadores e Desenvolvedores Web, Desktop, Mobile, Games e TI BR"
      />
      <Body banner={Banner} paddingVertical={"0"} paddingHorizontal={"5%"}>
        <FirebaseAuthProvider firebase={firebase} {...config.Firebase}>
          <button
            onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
              console.log(googleAuthProvider);
            }}
          >
            Sign In with Google
          </button>
        </FirebaseAuthProvider>
        <ListaIcones />
        <ListaDestaques colCount={2} />
      </Body>
      <Footer />
    </StContainer>
  );
};

export default Objeto;
