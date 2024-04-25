import os
# import sqlite3


conn = sqlite3.connect('../biblioteca.db')
cursor = conn.cursor()


# authors = os.listdir(".")

# for author in authors:
#     if os.path.isdir(author):
#         books = os.listdir("./" + author)
#         for book in books:
#             if os.path.isdir("./" + author + "/" + book):
#                 title = book
#                 print("author: " + author)
#                 print("title: " + book)


author = "Philip Jose Farmer"
authorId = 26

books = os.listdir("./" + author + "/")


for book in books:
            if os.path.isdir("./" + author + "/" + book):
                title = book
                try:
                    cursor.execute("INSERT INTO books (author, title, authorId) VALUES (?,?,?)", (author, title, authorId))
                    conn.commit()
                    print("new book added successfully.")
                except sqlite3.Error as e:
                    print("An error occurred:", e)
                    conn.rollback()  # Rollback on error


conn.close()
