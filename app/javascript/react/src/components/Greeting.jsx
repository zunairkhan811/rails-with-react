import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import fetchData from "../redux/welcome/fetchAPi";

const MessageList = () => {
    const [randomMessage, setRandomMessage] = useState('')
    const state = useSelector((state) => state.Lists);
    console.log(state)
    const dispatch = useDispatch();

    useEffect(() => {
        if (state.data.length === 0) {
            dispatch(fetchData());
          } else {
            const messages = state.data.map((item) => item.message);
            const randomIndex = Math.floor(Math.random() * messages.length);
            setRandomMessage(messages[randomIndex]);
          }
        }, [dispatch, state.data]);

        useEffect(() => {
            console.log("Random Message: ", randomMessage);
        }, [randomMessage]);


  return (
    <>
      <div className="row">
        <h1>{randomMessage}</h1>
      </div>
    </>
  );
};

export default MessageList;
