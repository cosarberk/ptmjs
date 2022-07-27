



/*!
 * ptmjs
 * Copyright(c) 2022 BerkCOŞAR@relteco.com
 * https://github.com/cosarberk
 * MIT Licensed
 * Fonksiyon ayrıntıları için projenin ana dizinindeki FUNCINFOS.rel dosyasına bakınız.
 * For function details , see the 'FUNCINFOS.rel' file in the project's home directory. 

 */

'use strict';

const fs = require("fs")
const { exec } = require("child_process");
const {PDMK,PtmParser,komutVerileri } = require("./ptmparser/ptmparser")


// uyarı listesi
var PTMALERT = {
    hatalar : {
        dosya:"Dosya Açılamadı.",
        meta:"PTM dosyası doğrulanamadı.",
        komut:"Komut bulunamadı."
    } 
}




//PTM ANA FONKSİYON
function PTM(dosya){
    PtmParser(PDO(dosya));
}

// PTM DOSYA OKU
function PDO(dosya){

    try {
        const veri = fs.readFileSync(dosya+'.ptm', 'utf8');
        //console.log(veri);
       if(PDMK(veri) == 0) {

        //      console.log(veri)
           return veri;
           
       }else{
           console.log(PTMALERT.hatalar.meta)
       }

        
    } catch (err) {
        console.log(err)
        console.log(PTMALERT.hatalar.dosya);
    }

    
}

// Komut ara
function KA(komut){
    let kid =   KL().indexOf(komut)
    // console.log(kid)
    return kid
}


// komutları listele
function KL(){
    let komutlar = []
    for (let i = 0; i < komutVerileri.length; i++) {
        for (let y = 1; y < komutVerileri[i].length; y++) {
            // console.log(komutVerileri[i][y-1])
            komutlar.push(komutVerileri[i][y-1])
        }
    }
    return komutlar
}

// komut çalıştırıcı
function R(argv,komut){
    let kid =  KA(komut)
    if (kid > -1) {
        let f = new Function('argv',komutVerileri[kid][komutVerileri[kid].length-1])
        f(argv)
    }else{
        console.log(PTMALERT.hatalar.komut)
    }
}



// geliştirime fikri
// işletim sistemi üzerinde kernel komutları çalıştırır.
function REXEC(komut){
    // komut doyadan okuncaksa
    // komut = komutverileri[kid][0]
    exec(komut, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
}



module.exports={PTM,R,REXEC}
