// Tools
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Import de la bibliothèque d'icons
import { FontAwesome } from "@expo/vector-icons";

// Récupération de la hauteur de la status bar
import Constants from "expo-constants";

const App = () => {
  return (
    <View style={styles.App}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView}>
        {/* ------------------
        ------- TOP BAR --------
        ----------------------*/}

        <View style={styles.topBar}>
          <Image
            source={require("./assets/img/logo-imdb.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* ------------------
        ------- MOVIE --------
        ----------------------*/}

        <View style={[styles.movie, styles.lightDark]}>
          {/*---- TITLE AND INFOS --- */}

          <Text style={styles.titleMovie}>Interstellar</Text>
          <View style={styles.informationMovie}>
            <Text style={styles.textInformationMovie}>2014</Text>
            <Text style={styles.textInformationMovie}>PG-13</Text>
            <Text style={styles.textInformationMovie}>2h49min</Text>
            <Text style={styles.textInformationMovie}>
              Adventure, Drama, Sci-Fi
            </Text>
          </View>

          {/*---- IMAGE AND DESCRIPTION --- */}

          <View style={styles.imgAndInfos}>
            <Image
              source={require("./assets/img/interstellar-img.jpg")}
              style={styles.imgMovie}
              resizeMode="cover"
            />
            <View style={styles.descriptionAndButton}>
              <Text style={styles.descriptionMovie}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableOpacity style={styles.buttonAdd}>
                <Text style={styles.textButtonAdd}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*---- RATINGS --- */}

          <View style={styles.ratings}>
            <View style={styles.blocRatings}>
              <FontAwesome name="star" size={24} color="#E6B91E" />
              <View style={styles.ratingTextLeft}>
                <Text style={styles.ratingTextLeft1}>8.6</Text>
                <Text style={styles.ratingTextLeft2}>/10</Text>
              </View>
              <Text style={styles.ratingsNumberPart}>1.1M</Text>
            </View>
            <View style={styles.blocRatings}>
              <FontAwesome name="star-o" size={24} color="#CACACA" />
              <Text style={styles.ratingTextMiddle}>RATE THIS</Text>
            </View>
            <View style={styles.blocRatings}>
              <Text style={styles.ratingRightScore}>74</Text>
              <Text style={styles.ratingRightText1}>Metascore</Text>
              <Text style={styles.ratingRightText2}>46 critic reviews</Text>
            </View>
          </View>
        </View>

        {/* ------------------
        ------- ACTORS --------
        ----------------------*/}

        <View style={[styles.actors, styles.lightDark]}>
          <View style={styles.actorsTop}>
            <Text style={styles.actorsTopText1}>Top Billed Cast</Text>
            <Text style={styles.actorsTopText2}>SEE ALL</Text>
          </View>

          <ScrollView horizontal={true} style={styles.carousselActors}>
            <View style={styles.blocActor}>
              <Image
                source={require("./assets/img/actors.nosync/matt-mcco.png")}
                style={styles.imgActor}
                resizeMode="cover"
              />
              <View style={styles.blocActorBottom}>
                <Text style={styles.nameActor} numberOfLines={1}>
                  Matthew McConaughey
                </Text>
                <Text style={styles.characterActor}>Cooper</Text>
              </View>
            </View>
            <View style={styles.blocActor}>
              <Image
                source={require("./assets/img/actors.nosync/anne-hath.png")}
                style={styles.imgActor}
                resizeMode="cover"
              />
              <View style={styles.blocActorBottom}>
                <Text style={styles.nameActor} numberOfLines={1}>
                  Anne Hathaway
                </Text>
                <Text style={styles.characterActor}>Brand</Text>
              </View>
            </View>
            <View style={styles.blocActor}>
              <Image
                source={require("./assets/img/actors.nosync/jess-chas.png")}
                style={styles.imgActor}
                resizeMode="cover"
              />
              <View style={styles.blocActorBottom}>
                <Text style={styles.nameActor} numberOfLines={1}>
                  Jessica Chastain
                </Text>
                <Text style={styles.characterActor}>Murphy</Text>
              </View>
            </View>
            <View style={styles.blocActor}>
              <Image
                source={require("./assets/img/actors.nosync/mich-caine.png")}
                style={styles.imgActor}
                resizeMode="cover"
              />
              <View style={styles.blocActorBottom}>
                <Text style={styles.nameActor} numberOfLines={1}>
                  Michael Caine
                </Text>
                <Text style={styles.characterActor}>Pr John Brand</Text>
              </View>
            </View>
            <View style={styles.blocActor}>
              <Image
                source={require("./assets/img/actors.nosync/matt-damon.png")}
                style={styles.imgActor}
                resizeMode="cover"
              />
              <View style={styles.blocActorBottom}>
                <Text style={styles.nameActor} numberOfLines={1}>
                  Matt Damon
                </Text>
                <Text style={styles.characterActor}>Dr Mann</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* ------------------
        ------- STAFF --------
        ----------------------*/}

        <View style={styles.staff}>
          <View>
            <Text style={styles.staffStatus}>Director</Text>
            <Text style={styles.staffName}>Christpher Nolan</Text>
          </View>
          <View>
            <Text style={styles.staffStatus}>Writers</Text>
            <Text style={styles.staffName}>
              Jonathan Nolan (writeen by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  lightDark: { backgroundColor: "#212121" },
  App: { backgroundColor: "#181818", flex: 1 },
  scrollView: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "black",
  },

  // TOP BAR
  topBar: { backgroundColor: "#393939", padding: 10, height: 50 },
  logo: { width: 50, height: "100%" },

  // MOVIE
  movie: { padding: 10, marginBottom: 15 },
  titleMovie: { fontSize: 30, color: "#F3F3F3", marginBottom: 10 },
  informationMovie: { flexDirection: "row" },
  textInformationMovie: { color: "#9E9E9E", marginRight: 10 },
  imgAndInfos: { marginTop: 25, marginBottom: 15, flexDirection: "row" },
  imgMovie: { width: "30%", height: 170, marginRight: 10 },
  descriptionAndButton: { flex: 1 },
  descriptionMovie: { color: "white", textAlign: "justify", marginBottom: 10 },
  buttonAdd: {
    backgroundColor: "#0377BD",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 5,
  },
  textButtonAdd: { color: "white" },

  // RATINGS
  ratings: {
    flexDirection: "row",
  },
  blocRatings: {
    alignItems: "center",
    width: `${100 / 3}%`,
    height: 75,
    paddingTop: 10,
  },
  ratingTextLeft: { flexDirection: "row", marginTop: 5 },
  ratingTextLeft1: { color: "white", fontWeight: "bold" },
  ratingTextLeft2: { color: "#848484", fontSize: 12, alignSelf: "flex-end" },
  ratingsNumberPart: { color: "#707070", fontSize: 12 },
  ratingTextMiddle: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  ratingRightScore: {
    backgroundColor: "#64C750",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingRightText1: { marginTop: 5, marginBottom: 3, color: "white" },
  ratingRightText2: { color: "#707070", fontSize: 12 },

  // ACTORS
  actors: { padding: 10, paddingBottom: 20 },
  actorsTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 35,
    marginBottom: 10,
  },
  actorsTopText1: { color: "white", fontSize: 22 },
  actorsTopText2: { color: "#0377BD", fontSize: 12, fontWeight: "bold" },

  // BLOC ACTOR
  carousselActors: { marginTop: 10 },
  blocActor: {
    width: 150,
    height: 300,
    backgroundColor: "#303030",
    marginRight: 10,
    borderRadius: 5,
  },
  imgActor: {
    width: "100%",
    height: "80%",
    margin: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  blocActorBottom: { padding: 10, flex: 1, justifyContent: "center" },
  nameActor: {
    width: "100%",
    color: "white",
    height: 20,
  },
  characterActor: { color: "#707070" },

  // STAFF
  staff: { padding: 10 },
  staffStatus: {
    color: "white",
    fontSize: 15,
    marginBottom: 4,
    marginTop: 15,
  },
  staffName: { color: "#939393" },
});
