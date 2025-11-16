import { Text, View } from "react-native";
import Header from "../../components/Header";
import Welcomsection from "../../components/Welcomesection";
export default function Dashboard(){
    return (
      <View>
        <Header/>
        <Welcomsection/>
        <Text>this is Dashboard screen</Text>
      </View>
    );
}