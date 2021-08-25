"""
One of your friends has an awful writing style: 
he almost never starts a message with a capital letter, 
but adds uppercase letters in random places throughout the message. 
It makes chatting with him very difficult for you, 
so you decided to write a plugin that will change each message received 
from your friend into a more readable form.

Implement a function that will change the very first symbol of the given message to uppercase, 
and make all the other letters lowercase.
"""

def fixMessage(message):
    return message[0].upper()+message[1:].lower()
