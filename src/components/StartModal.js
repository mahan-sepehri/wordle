import React from "react";

import "./StartModal.css";

const StartModal = (props) => {
  return (
    <div className="overlay">
      <div className="start-modal">
        <div className="close-button-container">
          <button
            className="close-button"
            onClick={() => {
              localStorage.setItem("played", true);
              props.setPlayed(true);
            }}
          >
            X
          </button>
        </div>
        <div className="game-rules">
          <h1>نحوه بازی</h1>
          <div>
            <p>۶ فرصت برای حدس کلمه دارید.</p>
            <p>
              هر حدس باید حتما شامل ۵ حرف باشد. بعد از وارد کردن حروف دکمه enter
              را بزنید
            </p>
            <p>
              بعد از هر حدس، رنگ هر خانه نشان‌دهنده‌ی میزان نزدیکی حدس شما به
              پاسخ مورد نظر می‌باشد
            </p>
            <p>رنگ سبز: این حرف در کلمه وجود دارد و در جای درست قرار گرفته</p>
            <p>رنگ زرد: این حرف در کلمه وجود دارد اما جای آن درست نیست</p>
            <p>رنگ طوسی: این حرف در کلمه وجود ندارد</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartModal;
