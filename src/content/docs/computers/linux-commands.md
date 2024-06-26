---
name: Essential Linux commands
---

Top (25) Linux commands and terminal tools to learn. You can 'Google' each of these commands or use the built in manual (man) in Linux to learn about them.

Most if not all of these commands also support different functionality when you pass arguments to them (also mentioned in the manual).

0. Read the manual for any tool listed above:
	man    (Example: `man grep` will display the manual for grep command.)

1. File and Directory(Folder) management:
	ls
	pwd
	cd
	find
	cat
	mkdir
	rm
	mv
	cp
	file
	unzip
	
2. Text and Data management:
	echo
	grep
	touch
	nano / vim
	strings
	wc

3. Networking:
	wget
	curl
	ifconfig
	ping
	nc
	
4. Permissions:
	sudo
	chmod

5. Scripting:
	Learn the basics of bash scripting and try automating some tasks.
	You can run your bash scripts in the terminal using `./filename.sh`.
	You can use the Python interpreter with `python3`.

Miscellaneous:
	Pressing `Tab` on your keyboard completes a command or file name or directory path.
	Copy in terminal: Ctrl + Shift + C
	Paste in terminal: Ctrl + Shift + V
	Learn to use the pipe operator '|', I/O redirection operators '>', wildcard operators '*' and subshells '()'. These are useful in conjunction with commands like `strings` and `grep`.
	Learn to use your package manager to install and update your software (`apt` for Ubuntu).
	Install a 'better' shell like zsh or fish. (https://ohmyz.sh/ or https://fishshell.com/)
