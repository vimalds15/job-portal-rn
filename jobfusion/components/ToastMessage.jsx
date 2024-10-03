import { ToastAndroid } from "react-native";
import React, { useEffect } from "react";

const ToastMessage = (message) => {
  useEffect(() => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      100
    );
  }, []);

  return <></>;
};

export default ToastMessage;
