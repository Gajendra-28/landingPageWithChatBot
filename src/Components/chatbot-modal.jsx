import { Popover } from "@radix-ui/themes";
import { BotIcon } from "lucide-react";
import React from "react";
import ChatFrame from "./chat-frame";

const ChatbotModal = () => {
  return (
    <div style={{ position: 'fixed', bottom: 40, right: 40, zIndex: 9999 }}>
      <Popover.Root>
        <Popover.Trigger>
          <div className="border-2 rounded-full p-2 bg-gray-900">
            <BotIcon color="white" />
          </div>
        </Popover.Trigger>
        <Popover.Content
          side="top"
          sideOffset={5}
          align="start"
          alignOffset={10}
          style={{
            width: 'auto', 
            minHeight: '100px',
            marginBottom: '10px',
            backgroundColor: '#111827'
          }}
        >
          <ChatFrame/>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

export default ChatbotModal;
