import React, { useContext } from "react";
import scoreContext from "../context/scoreContext";

import "./StartModal.css";

const StartModal = (props) => {
  const { setPlayed } = useContext(scoreContext);
  return (
    <div
      className="start-overlay"
      onClick={(e) => {
        if (e.target.classList.contains("start-overlay")) {
          localStorage.setItem("played", true);
          setPlayed(true);
        }
      }}
    >
      <div className="start-modal">
        <div className="close-button-container">
          <button
            className="close-button"
            onClick={() => {
              localStorage.setItem("played", true);
              setPlayed(true);
            }}
          >
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17.99 18"
            >
              <title>close_1</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M17.79,15.13,11.64,9,17.8,2.87a.66.66,0,0,0,0-.92L16.05.19a.65.65,0,0,0-.92,0L9,6.26,2.86.19A.68.68,0,0,0,2.4,0a.64.64,0,0,0-.46.19L.19,2a.66.66,0,0,0,0,.92L6.35,9,.21,15.13a.64.64,0,0,0-.19.46.63.63,0,0,0,.19.46L2,17.81a.68.68,0,0,0,.46.19.65.65,0,0,0,.46-.19L9,11.66l6.12,6.14a.65.65,0,0,0,.46.2.66.66,0,0,0,.46-.2L17.79,16a.64.64,0,0,0,0-.91Z" />
                </g>
              </g>
            </svg>
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
            <p>⬛️ رنگ مشکی: این حرف در کلمه وجود ندارد</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartModal;
