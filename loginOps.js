const sql = require('mssql');

var webconfig = {
  user: 'batuhan  ',
  password: 'batuhan28',
  server: '192.168.1.115',
  database: 'MEDIPILIMDB'
};

module.exports.userLogin = function (req, res) {
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
    request1.query(
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