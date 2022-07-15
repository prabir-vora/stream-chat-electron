import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";

const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2l0aGVyZWQtZnJvc3QtOCIsImV4cCI6MTY1NzkxOTY2MX0.H2jLLA4eBNgVRC4h9pY0OYFDScEXf8I6ecui0DqyfnA";

export default function App() {
  const [initChatClient, setInitChatClient] = useState(false);
  const [chatClient, setChatClient] = useState(undefined);

  useEffect(() => {
    const chatClient = StreamChat.getInstance("dz5f4d5kzrue");

    chatClient.connectUser(
      {
        id: "withered-frost-8",
        name: "withered",
        image:
          "https://getstream.io/random_png/?id=withered-frost-8&name=withered",
      },
      userToken
    );

    setInitChatClient(true);
    setChatClient(chatClient);
  }, []);

  if (!initChatClient || !chatClient) return null;

  const channel = chatClient.channel("messaging", "custom_channel_id", {
    // add as many custom fields as you'd like
    image: "https://www.drupal.org/files/project-images/react.png",
    name: "Talk about React",
    members: ["withered-frost-8"],
  });

  return (
    <View style={styles.container}>
      <Chat client={chatClient} theme="messaging light">
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
