{\rtf1\ansi\ansicpg1252\cocoartf1187\cocoasubrtf340
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural

\f0\fs24 \cf0 // Bank Teller Project\
function addAccount(name, password, accounts)\{\
   accounts=\{'name':name,'password':password,'balance':0\}\
   return accounts;\
\}\
\
function getBalance(accounts)\{\
    return accounts.balance;  \
\}\
\
function doDeposit(accounts, amount)\{\
    accounts['balance']=accounts['balance']+amount;\
    return accounts;\
\}\
\
function doWithdraw(accounts, amount)\{\
    if(accounts['balance']>=amount)\{\
       accounts['balance']=accounts['balance']-amount;\
    return accounts; \
    \}else\{\
        return false;\
    \}\
   \
\}   \
\
function doTransfer(debtor, creditor, amount)\{\
    accounts = \{\}\
    if(debtor['balance'] >= amount)\{\
        creditor['balance'] = creditor['balance'] + amount\
        debtor['balance'] = debtor['balance'] - amount\
    \}\
    accounts['debtor'] = debtor\
    accounts['creditor'] = creditor\
    return accounts\
\}}