const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "Xin chào! Tôi là BOT, bạn cần gì?",
  "Hiện tại chúng tôi đang vắng mặt. Vui lòng để lại tin nhắn!",
  "Chào!",
  "Tôi đang buồn ngủ!",
  "Tôi là BOT, bạn cần tôi hỗ trợ gì?",
  "Tôi là BOT, bạn cần tôi hỗ trợ gì? Để gặp trực tiếp nhân viên CSKH vui lòng liên hệ 0888082324",
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://media.istockphoto.com/vectors/blue-cute-robot-vector-id1191411980?k=20&m=1191411980&s=612x612&w=0&h=RwynZNA7Gf-VO3W8cuhI1s9bsKbZ1QZ89rKNrfSJCMA=";
const PERSON_IMG = "https://1millionbot.com/wp-content/uploads/2018/09/bill-chatbot.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "Sajad";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
