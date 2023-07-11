import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";

import { HeaderBar } from "../../components/HeaderBar";

import { setOptions } from "../../redux/slices/filterSlice";
import { RootState } from "../../types/RootState";

import { styles } from "./styles";

type FilterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Filter"
>;

type FilterScreenProps = {
  navigation: FilterScreenNavigationProp;
};
// order by popularity, publishedAt, relevancy
// query by keyword

const FilterScreen: React.FC<FilterScreenProps> = ({ navigation }) => {
  const options = useSelector((state: RootState) => state.filter.options);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>(options.keyword);
  const [orderBy, setOrderBy] = useState<string>(options.orderBy);
  const headerLeftButtonOnPress = () => {
    navigation.goBack();
  };

  const headerLeftButton = {
    onPress: headerLeftButtonOnPress,
    icon: "left_arrow",
  };

  const saveOptions = () => {
    // TODO: save options to redux
    const options: FilterState = {
      options: {
        keyword,
        orderBy,
      },
    };
    dispatch(setOptions(options));
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  const radioButton = (
    option: { text: string; value: string },
    index: number
  ) => {
    return (
      <TouchableOpacity
        style={[
          styles.radio,
          { borderColor: orderBy === option.value ? "green" : "black" },
        ]}
        onPress={() => radioButtonOnPress(option.value)}
        key={index}
      >
        <Text
          style={[
            styles.radioText,
            { color: orderBy === option.value ? "green" : "black" },
          ]}
        >
          {option.text}
        </Text>
      </TouchableOpacity>
    );
  };

  const radioButtonOnPress = (text: string) => {
    setOrderBy(text);
  };

  const resetOptions = () => {
    setKeyword("");
    setOrderBy("");
  };

  const radioOptions = [
    {
      text: "Popularity",
      value: "popularity",
    },
    {
      text: "Published At",
      value: "publishedAt",
    },
    {
      text: "Relevancy",
      value: "relevancy",
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderBar title="Filter" leftButton={headerLeftButton} />
      <TouchableOpacity style={styles.resetButton} onPress={resetOptions}>
        <Text style={styles.resetButtonText}>Reset options</Text>
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <Text style={styles.label}>Order by</Text>
        <View style={styles.radioButtonContainer}>
          {radioOptions.map((option, index) => {
            return radioButton(option, index);
          })}
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.label}>Query by</Text>
        <TextInput
          placeholder="Keyword"
          style={styles.input}
          value={keyword}
          onChangeText={setKeyword}
          maxLength={20}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={saveOptions}>
        <Text style={styles.buttonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterScreen;
