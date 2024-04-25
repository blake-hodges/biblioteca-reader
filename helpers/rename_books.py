import os
import re

author_directory = "./John Le Carre/"
books = os.listdir(author_directory)

def remove_parentheses(file_name):
    pattern = "\s\(\d+\)"
    new_name = re.sub(pattern, "", file_name)
    return new_name



for book in books:
    if book != '.DS_Store':
        full_path = author_directory + book
        renamed_file = remove_parentheses(book)
        new_full_path = author_directory + renamed_file
        print(full_path)
        print(new_full_path)
        os.rename(full_path, new_full_path)
