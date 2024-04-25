import os


files = os.listdir(".")

authors = ['Margaret Atwood', 'Paul Theroux', 'Jose Saramago', 'Neal Stephenson', 'Joyce Carol Oates', 'Stephen King', 'Natsuo Kirino', 'Pablo Neruda', 'Lemony Snicket', 'James Clavell', 'Haruki Murakami']

spanish_authors = ['Gabriel Garcia Marquez', 'Maria Jose Rubio', 'Jorge Luis Borges']

middle_name_authors = ['Philip K. Dick', 'Iain M. Banks', 'Philip Jose Farmer']


        
def create_author_data(author_name):
    full_name = author_name
    names = author_name.split(" ")
    first_name = names[0] + " " + names[1]
    last_name = names[2]
    # sql = "INSERT INTO authors ('full name', 'first name', 'last name') VALUES"

    print(f"INSERT INTO authors ('full name', 'first name', 'last name') VALUES ('{full_name}', '{first_name}', '{last_name}' )")



for author in middle_name_authors:
    create_author_data(author)
