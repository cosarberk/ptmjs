# ptmjs

![](https://github.com/cosarberk/ptmjs/blob/main/images/ptmjs.png)



fonksiyon açıklamaları için /src/FUNCINFOS.rel dosyasına bakın.

See /src/FUNCINFOS.rel for function descriptions.


##TR


#PTMJS Nedir ? 
ptmjs javascript fonksiyonlarınızı, uçbirim komutları gibi çalıştırmanızı sağlar.
bunun için önceden oluşturmanız gereken komut dosyasına ihtiyaç duyar ve böylece
fonksiyonlarınızı taşınabilir hale getirir.

#Nasıl Kullanılır ? 
- Js projenizde bulunan fonksiyonlarınızı komut adı belirterek .ptm dosyasına kaydedin.
- Diğer js projelerinize ptmjs'i dahil edin ve .ptm dosyanızı derleyin.
- Artık yeni projenizde çalıştırmak istediğiniz fonksiyonları 

```javascript

  R(argv,'commandName');

```
ile çağırmanız yeterli.


## Örnek .ptm Dosyası

ptmjs modülü içindeki src klasöründe bulunan ptmOrnekKomutDosyası.ptm dosyasına bakabilirsiniz.

usage : <ptm> KomutAdı : işlevi  </ptm>

  

# Temel Kullanım

## Adım 1

ptmjs'i projenize dahil edin.

```
$ npm i ptmjs

```
## Adım 2
projenizde .ptm dosyası oluşturun.
```html
   
PTMKOMUTDOSYASI@1.0.0


// command name: function body
// komut adı : fonksiyon

<ptm> hello:console.log('hello'); </ptm>

<ptm>
log:

const res = argv;
console.log(res);

</ptm>


<ptm>
server:
const express = argv;
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


```

## Adım 3 
PTMJS ile .ptm dosyanızı derleyin. Çalıştırmak istediğiniz fonksiyonu
adı ile çağırın.
```javascript

const {PTM,R} = require('../src/ptm.js')
const path = require("path")
const express = require('express');
PTM(path.join(__dirname+'/../src/ptmOrnekKomutDosyası'));

R('Hi, PTM is running...','log')
R(express,'server')

```

#Uyarılar

- .ptm dosyasını dahil ederken dosyanın uzantısını (.ptm) eklemeyin.
- .ptm dosyasının içine sadece fonksiyon işlevlerini yazın.
tekrar 'function foo(){}' yazmayın..
- argümanlı fonksiyonlarınız için .ptm dosyasında argümana ulaşmak için
argv yazın.




##EN

#PTMJS Nedir ?
ptmjs allows you to run your javascript functions like terminal commands.
for this it needs the script you need to create beforehand.
thus making your functions portable.

#How to use ?
- Save your functions in your js project to the .ptm file by specifying the command name.
- Include ptmjs in your other js projects and compile your .ptm file.
- now ,  

```javascript

  R(argv,'commandName');

```
You can run your commands as above.

##.ptm File Example

You can look at the ptmOrnekKomutDosyası.ptm file in the src folder in the ptmjs module.
usage : <ptm> KomutAdı : işlevi  </ptm>



# Basic Usage

## Step 1
install  ptmjs in your project

```
$ npm i ptmjs

```
## Adım 2
create your.ptm file.

```html

PTMKOMUTDOSYASI@1.0.0


// command name: function body
// komut adı : fonksiyon

<ptm> hello:console.log('hello'); </ptm>

<ptm>
log:

const res = argv;
console.log(res);

</ptm>


<ptm>
server:
const express = argv;
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


```

## Step 3
Compile your .ptm file with PTMJS. the function you want to run.
call by name.

```javascript

const {PTM,R} = require('../src/ptm.js')
const path = require("path")
const express = require('express');
PTM(path.join(__dirname+'/../src/ptmOrnekKomutDosyası'));

R('Hi, PTM is running...','log')
R(express,'server')

```

#Warnings

- When including the .ptm file, do not include the file's extension (.ptm).
- Just write the function body inside the .ptm file.
Do not type 'function foo(){}' again..
- to access the argument in the .ptm file for your functions with arguments
Type argv.







# LICENSE
PTMJS is licensed under MIT

