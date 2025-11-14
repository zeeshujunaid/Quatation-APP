import { Button, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
export default function Loader(){
  const router = useRouter();
    return (
      <View>
        <Text>this screen is toh check is go to user or go to admin</Text>
        <TouchableOpacity onPress={() => router.push("src/user/Homescreen")}>
          <Text>title="click me to go to user page"</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("src/admin/Dashboard")}>
          <Text>click me to go to user page</Text>
        </TouchableOpacity>
      </View>
    );
}