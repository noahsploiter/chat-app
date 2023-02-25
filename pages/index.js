import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";

import axios from "axios";

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length == 0 || secret.length == 0) return;

    axios.put(
      "https://api.chatengine.io/users/",
      { username, secret },
      { headers: { "Private-key": "f2c13ae6-3926-4b3a-a329-edeb64a8d92c" } }
    )

      .then((r) => router.push("/chats"));
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Chat App</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button className="submit-button" type="submit">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
