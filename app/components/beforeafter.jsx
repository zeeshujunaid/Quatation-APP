import React, { useState } from "react";
import { View, Image, PanResponder, Dimensions, Text } from "react-native";

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  width = Dimensions.get("window").width - 40,
  height = 240,
  sliderColor = "#fff",
}) => {
  const [sliderPosition, setSliderPosition] = useState(width / 2);

  const [containerX, setContainerX] = React.useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const newPosition = gestureState.moveX - containerX;
      if (newPosition >= 0 && newPosition <= width) {
        setSliderPosition(newPosition);
      }
    },
  });

  return (
    <View
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
      }}
    >
      {/* AFTER IMAGE (Background) */}
      <Image
        source={afterImage}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        resizeMode="cover"
      />

      {/* BEFORE IMAGE (Clipped) */}
      <View
        style={{
          width: sliderPosition,
          height: "100%",
          overflow: "hidden",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        <Image
          source={beforeImage}
          style={{
            width: width,
            height: "100%",
          }}
          resizeMode="cover"
        />
      </View>

      {/* SLIDER LINE & HANDLE */}
      <View
        {...panResponder.panHandlers}
        style={{
          position: "absolute",
          left: sliderPosition - 2,
          top: 0,
          width: 4,
          height: "100%",
          backgroundColor: sliderColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* SLIDER HANDLE */}
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: sliderColor,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View style={{ flexDirection: "row", gap: 2 }}>
            <View
              style={{ width: 2, height: 12, backgroundColor: "#008CFF" }}
            />
            <View
              style={{ width: 2, height: 12, backgroundColor: "#008CFF" }}
            />
          </View>
        </View>
      </View>

      {/* LABELS */}
      {/* <View
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          backgroundColor: "rgba(0,0,0,0.6)",
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 6,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 12, fontWeight: "600" }}>
          BEFORE
        </Text>
      </View> */}

      {/* <View
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "rgba(0,0,0,0.6)",
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 6,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 12, fontWeight: "600" }}>
          AFTER
        </Text>
      </View> */}
    </View>
  );
};

export default BeforeAfterSlider;
