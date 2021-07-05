mylib.so: mylib.o
	gcc -shared -o mylib.so mylib.o
mylib.o: mylib.c
	gcc -c -Wall -Werror -fpic mylib.c

.PHONY: clean
clean:
	rm -f mylib.o mylib.so
