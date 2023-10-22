FROM node:latest

RUN apt install -y bash git

WORKDIR /app

RUN npm install -g @angular/cli

EXPOSE 4200

RUN echo "alias l='ls -lhtr --color=tty'" >> /home/node/.bashrc
RUN echo "alias la='ls -alh --color=tty'" >> /home/node/.bashrc
RUN echo "alias ll='ls -lh --color=tty'" >> /home/node/.bashrc
RUN echo "alias t='tail -n 200 -f'" >> /home/node/.bashrc

RUN chown -R 1000:1000 /app

CMD ["ng", "serve", "--host", "0.0.0.0", "--configuration", "local"]