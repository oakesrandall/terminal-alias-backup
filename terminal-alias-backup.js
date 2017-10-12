//use the following terminal command to edit your bash profile:
//control o saves the file and control x exits the program

sudo nano ~/.bash_profile

export PATH="/usr/local/sbin:$PATH"

alias showFiles='defaults write com.apple.finder AppleShowAllFiles YES; killall Finder /System/Libr$

alias hideFiles='defaults write com.apple.finder AppleShowAllFiles NO; killall Finder /System/Libra$

alias killMongo='kill -2 `pgrep mongo`'




test -e "${HOME}/.iterm2_shell_integration.bash" && source "${HOME}/.iterm2_shell_integration.bash"
