####### pip install requirements and then run  python gui.py ##### r
# Rename the txt files gerenerated to 'text.txt/text2/text3.txt #


from tkinter import *
from aitextgen import aitextgen

gui = Tk(className='Text GANS')
e = Entry(gui, width=50)
e.pack()

gui.geometry("1680x940")

def callBack():
 
    ai = aitextgen()
    hello = ai.generate(n=3, prompt=e.get(), max_length=50, temperature=0.9, return_as_list=True)
    myLabel = Label(gui, text=hello)
    titleLabel = Label(gui, text=e.get())
    titleLabel.pack()
    myButton1 = Button(text='Quit', command=gui.destroy)
    myButton2 = Button(gui, text="Save as a file", command=saveFile)
    myButton2.pack()
    myLabel.pack()
    myButton1.pack()

def saveFile():
    ai = aitextgen()
    ai.generate_to_file(n=3, prompt=e.get(), max_length=100, temperature=0.9)
    myLabel = Label(gui, text="Check your folder")
    myLabel.pack()


myButton = Button(gui, text="Enter your phrase, then press here", command=callBack)
mylabel4 = Label(gui, text="It may take a few seconds... after you click")

myButton.pack()
mylabel4.pack()

gui.mainloop()