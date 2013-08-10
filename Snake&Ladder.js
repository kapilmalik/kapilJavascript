{\rtf1\ansi\ansicpg1252\cocoartf1187\cocoasubrtf340
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural

\f0\fs24 \cf0 //Snakes and Ladders Project\
// The game consists of a 10x10 playing board of squares.\
function createBoardCode() \{\
    \
    var board=new Array();\
    for(var i=0;i<100;i++)\{\
   var obj=new Object();\
   obj.end=i;\
   board[i]=obj;\
    \}\
    board[13].end = 47;\
    board[18].end = 59;\
    board[54].end = 75;\
    board[68].end = 89;\
    board[77].end = 96;\
    \
    board[98].end = 28;\
    board[46].end = 17;\
    board[24].end = 6;\
     return board;\
\}\
\
function getSteps() \{\
    // Select a random number from 1-6 and return that number.\
    // This simulates the rolling of a single die.\
	"REPLACE THIS CODE WITH YOUR METHOD"\
    return Math.floor((Math.random()*6)+1);\
\}\
\
function makeMove(playerPos, steps1, steps2) \{\
    \
   playerPos+=steps1+steps2;\
   playerPos=Math.min(99,playerPos);\
   return playerPos;\
    \
\}}