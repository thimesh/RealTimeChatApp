import React from "react";

import ScrollToBottom from "react-scroll-to-bottom"; // used to scroll msgs when height surpases the container.

import Message from "./Message/Message";

import "./Messages.css";

const Messages = (
  { messages, name } // calling message compnent with params
) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
