const sql = require('mssql');

var webconfig = {
  user: 'batuhan  ',
  password: 'batuhan28',
  server: '10.201.129.49',
  database: 'Proje'
};

module.exports.userGuncelle = function (req, res) {
  sql.connect(webconfig, function (err) {
    if (err) console.log(err);
    var request1 = new sql.Request();
    request1.query('', function (err, verisonucu) {
      if (err) {
        console.log(err);
      }
      console.log(verisonucu.recordsets);
      sql.close();
      res.render('home', { veri: verisonucu.recordsets });
    });
  });
};


module.exports.Guncelle = function (req, res) {
  sql.connect(webconfig, function (err) {
    if (err) console.log(err);
    var request1 = new sql.Request();
    // req bodyleri düzenle !
    request1.query( // ETKİNLİK GÜNCELLE
      `
        UPDATE EtkinlikOlustur set 
        EtkinlikAdi = '${req.body.yeni_etkinlikAdi}',
        Lokasyon = '${req.body.yeni_Lokasyon}',
        BaslangıcTarihi = '${req.body.yeni_baslangicTarihi}',
        BitisTarihi = '${req.body.yeni_bitisTarihi}'
        BaslangicSaati = '${req.body.yeni_baslangicSaati}'
        BitisSaati = '${req.body.yeni_bitisSaati}'
        WebSiteUrl = '${req.body.yeni_webSiteUrl}'
        AciklamaBir = '${req.body.yeni_aciklama}'
        ResimYukle = '${req.body.yeni_resimYukle}'
        OrganizatörAdi = '${req.body.yeni_organizatorAdi}'
        FacebookLink = '${req.body.yeni_facebookLink}'
        TwitterLink = '${req.body.yeni_twitterLink}'
        İnstagramLink = '${req.body.yeni_instagramLink}'
        BiletUcret = '${req.body.yeni_biletUcreti}'
        BiletAdet = '${req.body.yeni_biletAdeti}'
        EkBilgi = '${req.body.yeni_biletAdeti}'
        EtkinlikTipi = '${req.body.yeni_etkinlikTipi}'
        EtkinlikKonusu = '${req.body.yeni_etkinlikKonusu}'
        PublicOrRepublic = '${req.body.yeni_Public}'
      
        `,
      function (err, dataresult) {
        if (err) {
          console.log(err);
        }
        sql.close();
        res.send('Sanatçı güncellendi');
      }
    );
  });
};

module.exports.userGozAt = function (req, res) {
  sql.connect(webconfig, function (err) {
    if (err) console.log(err);
    var request1 = new sql.Request();
    request1.query("select * from tbl_EtkinlikOlustur", function (err, verisonucu) {
      if (err) {
        console.log(err);
      }
      console.log(verisonucu.recordset);
      sql.close();
      res.render('etkinlikleregozat', { veri: verisonucu.recordset });
    });
  });
};

// ETKİNLİK OLUŞTUR
module.exports.userLogin = function (req, res) {
  sql.connect(webconfig, function (err) {
    if (err) console.log(err);
    var request1 = new sql.Request();
    request1.query("INSERT INTO tbl_EtkinlikOlustur(EtkinlikAdi,Lokasyon,BaslangıcTarih,BitisTarihi,BaslangicSaati,BitisSaati,WebSiteUrl,AciklamaBir,ResimYukle,OrganizatörAdi,Aciklamaİki,FacebookLink,TwitterLink,İnstagramLink,BiletAdi,BiletUcret,BiletAdet,EkBilgi,EtkinlikTipi,EtkinlikKonusu,EtkinlikAltKonusu) VALUES('" + req.body.EtkinlikAdi + "','" + req.body.location + "','" + req.body.start_date + "','" + req.body.end_date + "','" + req.body.start_time + "','" + req.body.end_time + "','" + req.body.eventurl + "','" + req.body.AciklamaBir + "','" + req.body.İmageUpload + "','" + req.body.OrganizatorName + "','" + req.body.Aciklamaİki + "','" + req.body.Facebook + "','" + req.body.twitter + "','" + req.body.İnstagram + "','" + req.body.biletadi + "','" + req.body.ucret + "','" + req.body.adetsayisi + "','" + req.body.gender + "','" + req.body.Tip + "','" + req.body.Konu + "','" + req.body.AltKonu + "')", function (err, data) {
      if (err) {
        console.log(err);
      }
      sql.close();
      res.render('etkinlikolustur');
    });
  });
};


// OTURUM AÇ
module.exports.userOturumAc = function (req, res) {
  sql.connect(webconfig, function (err) {
    if (err) console.log(err);
    var request1 = new sql.Request();
    request1.query("INSERT INTO tbl_Uye(KullanıcıAdi,Adi,Soyadi,Email,Konum,Sifre,SifreTekrar,Konum,Meslek,Telefon,WebSite)  VALUES('" + req.body.kullanici_Adi + "','" + req.body.uye_Adi + "','" + req.body.uye_Konum + "','" + req.body.uye_Soyadi + "','" + req.body.uye_EMail + "','" + req.body.uye_WebPage + "','" + req.body.uye_Konum + "','" + req.body.uye_Sifre + "','" + req.body.uye_Phone + "','" + req.body.uye_SifreTekrar + "')", function (err, data) {
      if (err) {
        console.log(err);
      }
      sql.close();
      res.render('oturumac');
    });
  });
};

