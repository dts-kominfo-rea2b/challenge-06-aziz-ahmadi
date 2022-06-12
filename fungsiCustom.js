// TODO: import module bila dibutuhkan di sini
var fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const getMessage = (data) => {
  const jsonData = JSON.parse(data);
  if (jsonData.message !== undefined) {
    const secondWord = jsonData.message.split(" ");
    return secondWord[1];
  } else if (jsonData[0].message !== undefined) {
    const secondWord = jsonData[0].message.split(" ");
    return secondWord[1];
  } else if (jsonData[0].data.message !== undefined) {
    const secondWord = jsonData[0].data.message.split(" ");
    return secondWord[1];
  } else {
    return null;
  }
};

let resultMessages = [];
const bacaData = (fnCallback) => {
  fs.readFile(file1, (err, data) => {
    if (err) {
      fnCallback(err);
      return;
    }
    const newMessage = getMessage(data);
    resultMessages.push(newMessage);
    fs.readFile(file2, (err, data) => {
      if (err) {
        fnCallback(err);
        return;
      }
      const newMessage = getMessage(data);
      resultMessages.push(newMessage);
      fs.readFile(file3, (err, data) => {
        if (err) {
          fnCallback(err);
          return;
        }
        const newMessage = getMessage(data);
        resultMessages.push(newMessage);
        fnCallback(
          null,
          resultMessages
        );
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
