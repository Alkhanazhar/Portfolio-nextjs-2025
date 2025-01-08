"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdCancel, MdMessage, MdSend } from "react-icons/md";

const ChatBtn = () => {
  const [chatbox, setBox] = useState(false);
  const [message, setMessage] = useState("");
  const handleClick = () => {
    // Open WhatsApp with a pre-filled message
    // const phoneNumber = "+91-9109093125"; // Replace with the phone number you want to send to
    // const message = "Hello, I would like to chat!"; // Replace with your desired message
    // const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    //   message
    // )}`;
    setMessage("");
    setBox(false);

    // Open the WhatsApp link in a new tab
  };
  return (
    <>
      <AnimatePresence>
        {chatbox && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 10, skew: 0.4 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-end p-4 origin-bottom-right gap-4 border h-52 fixed bottom-12 right-12  z-50 bg-blue-600/30 backdrop-blur-2xl rounded-2xl"
          >
            <MdCancel
              onClick={() => setBox((prev) => !prev)}
              className="absolute top-3 right-3 cursor-pointer"
            />
            <h3>
              Send message to us <br /> We will connect soon
            </h3>
            <div className="flex mt-auto gap-4">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-black p-2"
                placeholder="CONNECT WITH US"
              />
              <a
                href={`https://wa.me/+9109093125?=${encodeURIComponent(
                  message
                )}!`}
                target="_blank"
                className="px-4 bg-blue-500 text-white inline-block py-3"
                onClick={handleClick}
              >
                <MdSend />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="fixed bottom-6 right-6 rounded-full p-4 bg-gradient-to-r from-blue-700 to-blue-800 cursor-pointer"
        onClick={() => setBox((prev) => !prev)}
      >
        <AnimatePresence>
          {!chatbox ? (
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 10, skew: 0.4 }}
              animate={{ opacity: 1, y: 0, scale: 1.5 }}
              exit={{ opacity: 0, y: 10, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MdMessage />{" "}
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 10, skew: 0.4 }}
              animate={{ opacity: 1, y: 0, scale: 1.5 }}
              exit={{ opacity: 0, y: 10, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <MdCancel />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ChatBtn;
