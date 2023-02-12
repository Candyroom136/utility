from chat_downloader import ChatDownloader

url = 'https://www.youtube.com/watch?v=kZUQNYJNBSo'
chat = ChatDownloader().get_chat(url)       # create a generator
# print(len(list(chat)))
for message in chat:                        # iterate over messages
    # print(message)
    chat.print_formatted(message)           # print the formatted message