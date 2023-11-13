import React, { useState } from "react";
import {
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  addUserToFirestore,
  login,
  register,
} from "../../firebase/authMethods";
import { getSavedNewsData } from "../../firebase/newsMethods";

import { setUser } from "../../redux/slices/userSlice";

import { styles } from "./styles";

type FilterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Auth"
>;

type AuthScreenProps = {
  navigation: FilterScreenNavigationProp;
};

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const text = isLogin
    ? "Don't you have an account yet? "
    : "Already have an account? ";

  const handleSubmit = async () => {
    setLoading(true);
    if (isLogin) {
      if (email && password) {
        await login(email, password).then(async (user) => {
          let savedNews: Article[] | undefined = [];
          await getSavedNewsData(user?.uid).then(
            (_news: Article[] | undefined) => {
              if (_news) savedNews = _news;
            }
          );
          if (user) {
            const userObj: UserState["user"] = {
              uid: user?.uid,
              displayName: user?.displayName,
              email: user?.email,
              savedArticles: savedNews,
            };
            dispatch(setUser(userObj));
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            });
          }
        });
      } else alert("Email or password is missing!");
    } else {
      if (name && email && password) {
        await register(name, email, password).then(async (user) => {
          if (user) {
            const userObj: UserState["user"] = {
              uid: user?.uid,
              displayName: user?.displayName,
              email: user?.email,
              savedArticles: [],
            };
            dispatch(setUser(userObj));
            await addUserToFirestore(userObj);
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            });
          }
        });
      } else alert("Name, email or password is missing!");
    }
    setLoading(false);
  };

  const loginContainer = () => {
    return (
      <View style={styles.subContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>
    );
  };

  const registerContainer = () => {
    return (
      <View style={styles.subContainer}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
          keyboardType="default"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          secureTextEntry={false}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.icon}
          />
          <Text style={styles.iconText}>DailyBrief</Text>
        </View>
        {isLogin ? loginContainer() : registerContainer()}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size={"small"} color={"green"} />
          ) : (
            <Text style={styles.buttonText}>
              {isLogin ? "Login" : "Register"}
            </Text>
          )}
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ textAlign: "center" }}>{text}</Text>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={{ textAlign: "center", color: "blue" }}>
              {isLogin ? "Create Account" : "Login"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ marginTop: 10, alignItems: "center" }}
        >
          <Text>Continue without login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
