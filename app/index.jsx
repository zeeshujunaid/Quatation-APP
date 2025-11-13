import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index(){
  const router=useRouter();
  return(
    <View><Text>this is main welcome screen</Text>
    <Button title="click me" onPress={()=>{router.push("/user/Homescreen")}}/>
    </View>
  )
}