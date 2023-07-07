import { ActivityIndicator, Button, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { View } from "react-native";
import React, { useState } from "react";
import { login, register } from "../../firebase/authMethods";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

interface AuthScreenProps {
  navigation: any;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const text = isLogin ? "Don't you have an account yet? " : "Already have an account? ";

  const handleSubmit = async () => {
    setLoading(true);
    if(isLogin) {
      await login(email, password).then((user) => {
        const userObj: UserState["user"] = {
          uid: user?.uid,
          displayName: user?.displayName,
          email: user?.email,
        };
        dispatch(setUser(userObj));
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      });
    } else {
      await register(name, email, password).then((user) => {
        const userObj: UserState["user"] = {
          uid: user?.uid,
          displayName: user?.displayName,
          email: user?.email,
        };
        dispatch(setUser(userObj));
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      });
    }
    setLoading(false);
  };

  const loginContainer = () => {
    return(
      <View style={styles.subContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>
    )
  };
  
  const registerContainer = () => {
    return(
      <View style={styles.subContainer}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          value={name}
          keyboardType="default"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
          secureTextEntry={false}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>
    )
  };

  return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <SafeAreaView style={styles.container}>
        {isLogin ? loginContainer() : registerContainer()}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {
            loading ? <ActivityIndicator size={"small"} color={"green"} /> : <Text style={styles.buttonText}>{isLogin ? 'Register' : 'Login'}</Text>
          }
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{ textAlign: 'center' }}>{text}</Text>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={{ textAlign: 'center', color: 'blue' }}>{isLogin ? 'Create Account' : 'Login'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
};

export default AuthScreen;