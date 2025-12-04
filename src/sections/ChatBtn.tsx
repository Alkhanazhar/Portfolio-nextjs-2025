"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdCancel, MdMessage, MdSend } from "react-icons/md";

const ChatBtn = () => {
  const [chatbox, setBox] = useState(false);
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setMessage("");
    setBox(false);

    // Open the WhatsApp link in a new tab
  };
  return (
    <div className="fixed bottom-12 right-12 ">
      <AnimatePresence>
        <motion.div layout>
          {chatbox && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 10, skew: 0.4 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="min-h-52 flex flex-col justify-end p-4 origin-bottom-right gap-4 border  z-50 bg-blue-600/30 backdrop-blur-2xl rounded-2xl"
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
                  className="text-black p-2 rounded-md shadow-lg"
                  placeholder="CONNECT WITH US"
                />
                <a
                  href={`https://wa.me/+9109093125?=${encodeURIComponent(
                    message
                  )}!`}
                  target="_blank"
                  className="px-4 bg-blue-500 text-white inline-block py-3 rounded-md shadow-md"
                  onClick={handleClick}
                >
                  <MdSend />
                </a>
              </div>
            </motion.div>
          )}
          <motion.div
            layout
            whileHover={{ scale: 1.2 }}
            className=" rounded-full p-4 bg-gradient-to-r cursor-pointer"
            onClick={() => setBox((prev) => !prev)}
          >
            {!chatbox ? (
              <motion.div
                className="bg-blue-400/20 backdrop-blur-lg rounded-full p-4 animate-bounce"
                initial={{ scale: 0, opacity: 0, y: 10, skew: 0.4 }}
                animate={{ opacity: 1, y: 0, scale: 1.5 }}
                exit={{ opacity: 0, y: 10, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span layout className="flex justify-center">
                  <MdMessage />{" "}
                </motion.span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.5, opacity: 0, y: 10, skew: 0.4 }}
                animate={{ opacity: 1, y: 0, scale: 1.5 }}
                exit={{ opacity: 0, y: 10, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="blur-3xl bg-red-200/20"
              >
                <MdCancel />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ChatBtn;
