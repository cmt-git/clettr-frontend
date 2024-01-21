export const decimalFormatter = (value: Number) => {
  let parts = value.toString().split(".");

  return (
    parts[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
    (parts[1] ? "." + Number(parts[1]).toString().substring(0, 4) : "")
  );
};

export const getFormattedTime = (time: any) => {
  let date = new Date(time);
  let currentHour = 24 - date.getHours();
  let hours =
    currentHour.toString().length === 1 ? "0" + currentHour : currentHour;
  let minutes = "0" + (60 - date.getMinutes());
  let seconds = "0" + (60 - date.getSeconds());
  let formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
};

export function timeConverter(UNIX_timestamp: number) {
  var a = new Date(UNIX_timestamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = (a.getDate().toString().length == 1 ? "0" : "") + a.getDate();
  var hour =
    (a.getHours().toString().length == 1 ? "0" : "") + (a.getHours() + 1);
  var min = (a.getMinutes().toString().length == 1 ? "0" : "") + a.getMinutes();
  var sec = (a.getSeconds().toString().length == 1 ? "0" : "") + a.getSeconds();
  var time = `${month} ${date}, ${year} - ${hour}:${min}`;
  return time;
}

export const generateLongId = () => {
  let token_id: string = "";
  let characters =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890-=![]:;{}\"'<>,.?/|";

  for (let i = 0; i < characters.length; i++) {
    token_id += characters[Math.floor(Math.random() * characters.length)];
  }
  return token_id;
};
