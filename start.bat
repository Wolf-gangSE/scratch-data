@echo off
@break off

TITLE "Executando projeto de ML"

cd frontend && npm i --force && npm run build && cd .. && flask run