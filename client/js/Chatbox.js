class Chatbox{
  static writeEvent(key, args){
    Chatbox.addText(i18next.t(key, args));
  }

  static writeMessage(message){
    Chatbox.addText(`<b>${message.author}</b> ${message.content}`);
  }

  static addText(text){
    $chatHistory.append(`<li>${text}</li>`)
    $chatBox.scrollTop($chatHistory.height())
  }
}
