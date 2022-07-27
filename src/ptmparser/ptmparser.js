
/*!
 * ptmjs
 * Copyright(c) 2022 BerkCOŞAR@relteco.com
 * <https://github.com/cosarberk>
 * MIT Licensed
 * Fonksiyon ayrıntıları için projenin ana dizinindeki FUNCINFOS.rel dosyasına bakınız.
 * For function details , see the 'FUNCINFOS.rel' file in the project's home directory. 
 *
 */

'use strict';


// ayrıştırılmış komut fonksiyon yapısını tutar
// istenilen komut ve karşılığına buradan erişilir
var komutVerileri = []


// PTM DOSYA META KONTROL
function PDMK(dosya){
    let meta='',res;
    for (let i = 0; i < 21; i++) {
        meta += dosya[i];

    }
    meta == 'PTMKOMUTDOSYASI@1.0.0' ? res=0:res=1
    return res
}

// ilk olarak ptm taglarına göre regexp ile ayır
// ayrılan parçalar tagları temizle ve yeni bir diziye ekle

function PtmParser(veri){
    let tagliKomutlar = [];
    let komutTagi = veri.match(/<ptm>(.*?)<\/ptm>/gms);
    // ptm tag ayırdık
    for (let t = 0; t < komutTagi.length; t++) {
        tagliKomutlar.push(komutTagi[t].replace(/<\/?ptm>/g,''))
        
    }
    // : simgesine göre sağ ve sol ayrımı
    for (let s = 0; s < tagliKomutlar.length; s++) {
        let komut = tagliKomutlar[s].replace(/(\r\n|\n|\r)/gm, "")
        komutVerileri.push(komut.split(':'))
    }



    return komutVerileri // [0][1]
//    console.log(komutVerileri)
}





module.exports = {PDMK,PtmParser,komutVerileri}
