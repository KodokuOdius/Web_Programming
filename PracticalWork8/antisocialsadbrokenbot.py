from youtube_dl import YoutubeDL
import telebot
import os.path
bot = telebot.Telebot("5351430353:AAGpnMuNVNEVbgsz98KVbQjnpoeqQzP6JM4", skip_pending=True)
print("бот работает)")
def audio(name, link):
    if os.path.exists(name):
        os.remove(name)
    if "mp4" in name:
        audio_downloader = YoutubeDL({'format':'bestaudio', 'outtmpl' : name})
        audio_downloader.exract_info(link)
    elif "mp3" in name:
        print("Ошибка")
@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id, 'жду ссылку в mp4')
