import { useState, useRef } from "react";
import { user } from "../data/user";

import { inputIcons } from "../assets/Icons";
import CloseIcon from "@mui/icons-material/Close";

import Image from "next/image";

import ProfilePicture from "../assets/profile_picture.svg";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Input = () => {
  const [text, setText] = useState("");
  const [contentFile, setContentFile] = useState();
  const [audioFile, setAudioFile] = useState();
  const imageIconRef = useRef(null);
  const audioFileRef = useRef(null);
  return (
    <div className="border-b-2 lg:rounded-xl lg:border-2 xl:mt-6 w-full w-full flex space-x-2 px-2 justify-between shadow-2xl pb-6 border-border-gray scrollbar-hide">
      <Image
        height={20}
        width={20}
        src={ProfilePicture}
        className="h-14 w-16 rounded-full mr-2 hover:opacity-60 transition-opacity"
        alt="User's Profile Picture"
      />
      <div className="w-full flex flex-col mt-4">
        <textarea
          className="w-full h-12 xl:h-28 bg-transparent outline-none mb-2 px-2 text-lg "
          placeholder="what's on your mind?"
          onChange={(evt) => {
            setText(evt.target.value);
          }}
        />
        {contentFile ? <div>Photo:</div> : null}
        {contentFile ? (
          <div className=" relative">
            <div
              onClick={() => {
                setContentFile(null);
              }}
              className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
            >
              <CloseIcon sx={{ fontSize: "28px" }} />
            </div>
            <Image
              height={20}
              width={20}
              src={contentFile}
              className="rounded-2xl max-h-80 w-full object-contain"
              alt="Image not found"
            />
          </div>
        ) : null}
        {audioFile ? <div>Audio File:</div> : null}
        {audioFile ? (
          <div className="relative">
            <div
              onClick={() => {
                setAudioFile(null);
              }}
              className="absolute left-1 top-1 w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center cursor-pointer"
            >
              <CloseIcon sx={{ fontSize: "28px" }} />
            </div>
            <div className="py-10 mr-4 border-2 border-border-gray rounded">
              <AudioPlayer
                src={audioFile}
                style={{ backgroundColor: "black" }}
                onPlay={(e) => console.log("onPlay")}
                showJumpControls={false}
                onPlayError={(err) => {
                  alert(err + "behen ke lun audio file upload kar");
                }}
              />
            </div>
          </div>
        ) : null}
        <div className="pl-1 flex w-full items-center justify-between">
          <div className="space-x-2 xl:space-x-4 flex">
            <div
              className="ml-2"
              onClick={() => {
                imageIconRef.current?.click();
              }}
            >
              <inputIcons.photo className="input-icons" />
              <input
                type="file"
                ref={imageIconRef}
                onChange={(evt) => {
                  const fileReader = new FileReader();
                  if (evt.target.files) {
                    fileReader.readAsDataURL(evt.target.files[0]);
                  }
                  fileReader.onload = (readerEvt) => {
                    console.log(readerEvt.target?.result);
                    setContentFile(readerEvt.target?.result);
                  };
                }}
                hidden
              />
            </div>
            <div
              className="ml-2"
              onClick={() => {
                audioFileRef.current?.click();
              }}
            >
              <inputIcons.audio className="input-icons" />
              <input
                type="file"
                name="audio-upload"
                onChange={(evt) => {
                  const fileReader = new FileReader();
                  if (evt.target.files) {
                    fileReader.readAsDataURL(evt.target.files[0]);
                  }
                  fileReader.onload = (readerEvt) => {
                    setAudioFile(readerEvt.target?.result);
                    console.log(readerEvt.target?.result);
                  };
                }}
                ref={audioFileRef}
                hidden
              />
            </div>
            <div>
              <inputIcons.emoji className="input-icons" />
            </div>
            <div>
              <inputIcons.poll className="input-icons" />
            </div>
          </div>
          <button className="button py-1 rounded-full w-1/4 max-w-[100px] border-2 border-black hover:border-dazzled-blue transition-all duration-300 mr-3  disabled:opacity-40">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
