import React, { useContext } from "react";
import scoreContext from "../context/scoreContext";

import "./StartModal.css";

const StartModal = (props) => {
  const { setPlayed } = useContext(scoreContext);
  return (
    <div className="start-overlay">
      <div className="start-modal">
        <div className="close-button-container">
          <button
            className="close-button"
            onClick={() => {
              localStorage.setItem("played", true);
              setPlayed(true);
            }}
          >
            X
          </button>
        </div>
        <div className="game-rules">
          <h1 className="start-title">نحوه بازی</h1>
          <div className="start-text">
            <p>۶ فرصت برای حدس کلمه دارید.</p>
            <p>هر حدس باید حتما یک کلمه معنی دار و شامل ۵ حرف باشد.</p>
            <p>
              بعد از وارد کردن حروف برای ثبت حدس، دکمه آبی رنگ Enter را بزنید
            </p>
            <p>
              بعد از هر حدس، رنگ هر خانه نشان‌دهنده‌ی میزان نزدیکی حدس شما به
              پاسخ مورد نظر می‌باشد:
            </p>
            <p>
              🟩 رنگ سبز: این حرف در کلمه وجود دارد و در جای درست قرار گرفته است
            </p>
            <p>🟨 رنگ زرد: این حرف در کلمه وجود دارد اما جای آن درست نیست</p>
            <p>⬛️ رنگ طوسی: این حرف در کلمه وجود ندارد</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartModal;
