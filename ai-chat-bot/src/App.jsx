import React, { useState } from "react";
import ChatBotStart from "./Components/ChatBotStart";
import ChatBotApp from "./Components/ChatBotApp";

const App = () => {
  const [isChatting, setiSChatting] = useState(false);

  const handleStartChat = () => {
    setiSChatting(true);
  };
  const handleGoBack = () => {
    setiSChatting(false);
  };
  return (
    <div className="container">
      {isChatting ? (
        <ChatBotApp onGoBack={handleGoBack} />
      ) : (
        <ChatBotStart onStartChat={handleStartChat} />
      )}
    </div>
  );
};

export default App;
