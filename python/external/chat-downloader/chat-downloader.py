from chat_downloader import ChatDownloader
from constant import CHAT_DOWNLOADER

chat = ChatDownloader().get_chat(CHAT_DOWNLOADER['URL'])       # create a generator

for message in chat:                        # iterate over messages
    chat.print_formatted(message)           # print the formatted message