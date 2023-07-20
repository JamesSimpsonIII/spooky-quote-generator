# syntax=docker/dockerfile:1

FROM --platform=linux/amd64 python:3.9.17-slim-bullseye

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

CMD ["python3", "app.py"]