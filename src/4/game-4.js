// Yazılacak metin
var text = "12 kişiden oluşan atölyede tüm kontenjan dolmuş, kursiyerler İsa’nın son akşam yemeği tablosu gibi masaya dizilmiş hem birbirlerini hem de boyaları, renkleri tanımaya çalışıyorlardı. Adam masaya oturup eğitmenine çizmek istediği resmi gösterdi. Eğitmen kabaca çizimin ana hatlarını kâğıda karalayıp altın rengini oluşturabilmesini sağlayacak renkleri önüne koydu. Eğitmen, masada adamın karşısında kadına “siz de bunları kullanabilirsiniz, aynı renk paletine sahipsiniz sanırım” dedi. Adam boyaları kadına yaklaştırıp başıyla selam verdi ve çizimini renklendirmeye başladı… Bir süre sonra karşısındaki kadının arada bir kendisine baktığını fark etti. Emin olmak için birkaç kez bakışlarını yakaladıktan sonra kadın adamın tedirginliğini fark edip “Kusura bakmayın, baştan söylemem gerekirdi ama o zaman da doğallığı kaçıyor… Sizi çiziyorum da o nedenle size bakıyorum. Umarım sizi çizmem sorun olmaz, zaten soyut bir çalışma…” dedi. Adam duruma hayli şaşırdı ama bir o kadar da hoşuna gitti: “Yo hiç sorun değil, aksine merak ettim…” Kadın çizimini adama döndürdü ve kendisinin altın renginde bir silüetini gördü. Tıpkı evde gördüğü o taç resmi gibi, buğulu bir camın ardından, akışkan bir silüetti. “Çok etkileyici” diyebildi adam. Kadın sözü devraldı: “Buraya arada bir kafa dağıtmak için gelip, o gün karşıma kim denk gelirse onu çizerim. Hatta böyle bir koleksiyonum var. Modelimi önceden bilememek, o an kim denk gelirse onun olması beni asıl etkileyen şey. Çünkü hayatın bizatihi kendisi de resme dahil oluyor. Ana ve kişiye o karar veriyor, ben değil.”<br><br>“Çok etkileyici” diye sadece kendisini tekrarlayabildi adam. Düşün dünyasından sıyrılıp tekrar ana dönebildiğinde ise çizimde adamın başının üzerindeki beyaz ışık hüzmesi dikkatini çekti. “Bu başımın üzerindeki beyazlık nedir?” diye sordu adam. Kadın, bunun kendi yorumu olduğunu anlattı. Her portreye kendi yorumunu katıyordu ve adamı çizerken içine doğan şey de başından içeriye giren beyaz bir ışık hüzmesi imgesiydi. “Aslında okuduğum, araştırdığım ve ilgilendiğim şeylerden etkilenerek çizdiğim bir şey daha çok. Yahudi mistisizmi ilgimi çekiyor ve bir araştırmacı boyutunda bunun literatürünü inceliyorum. İslam’daki Tasavvuf gibi onlarda da Kabala diye bir sistem var ve bunun üzerinden hayatı anlamaya çalışmışlar. Çeşitli semboller ve diyagramlar oluşturarak evrenin yaratılış sistemini formülize etmeye çalışmışlar. O külliyatın içinde de başımızın üzerinden bize sirayet eden bir ışıktan bahsedilir. Bu, sanırım bizde yaratanın nuruna karşılık geliyor. Beyaz ışık başımızdan bize iner ve yaratanla bağlantımızı sağlar.”<br><br>Adamın ağzından bir mırıltı çıktı: “Taç…”<br><br>Kadın duraksadı. “Evet, taç da denir başımızdan bu ışığın girdiği yere ya da girme anına… Sanırım biliyorsunuz siz de.”<br><br>Adam bilmediğini fakat demek istediği şeyi anladığını söyledi. Kendi çizimini kadına doğrulttu ve çizmeye çalıştığı taç resmini gösterdi. Kadının şaşkınlıktan gözleri büyürken adam devam etti: “Sizin Jefferson Airplane dinlemeyi sevdiğinizi, fitre kahveyi aromalı sevdiğinizi, üç ayaklı aydınlatmalardan hoşlandığınızı ve odanın ışığını yönetme konusunda obsesif olduğunuzu da biliyorum. Ki hatta şimdi anlıyorum ki sadece odanın değil, genel olarak ışığı yönetme konusuna meraklısınız.”<br><br>Kadın daha önceden tanışıp tanışmadıklarını sordu. Adam da kadının evinde kaldığını, Airbnb’den yazıştığı kişinin kendisi olduğunu açıkladı. Kadın durumun farkına vararak gözlerini devirdi ve arkasına yaslanıp olan biteni açıkladı:<br><br>“Evet o evin her yanını ben dekore ettim ve her noktasında benim izlerim var fakat ev benim değil. Kiralayan da ben değilim. Eski erkek arkadaşımın. O evde bana ait olan tek şey bu gördüğün taç tablom. Bunun manevi değeri bende çok büyük çünkü gerçekten kendimi dünyaya ve hayata ait hissettiğim ender bir anda karşıma çıkan bir sembol. Ne zaman hayattan soyutlansam bu taç çizimime bakıp ait olduğum yeri ve kendimi bulurdum. Bir nevi yaratanın beni bu hayata çapalamak için bana verdiği özel bir hediye… Eski erkek arkadaşım ondan ayrılmak istememi kabullenemedi ve ne kadar ısrar edersem edeyim o tabloyu bana vermedi. Oysa onun için hiçbir şey ifade etmiyor. Onun için ifade ettiği tek şey beni esir etmek istemesi. Taç ile yönetmek istemesi. Doğru, taç bir erk simgesidir, gücün simgesidir ama aynı zamanda acının ve zorluğun simgesidir. İkisinin dengesidir…”";
// Yazı animasyonu için kullanılacak değişkenler
var index = 0;
var speed = 30; // Yazı hızı (ms cinsinden)

// Geçmiş olayları izlemek için sayaçlar
var spacePressed = false;
var clickCount = 0;

// Yazıyı yazacak fonksiyon
function typeWriter() {
    if (index < text.length && !spacePressed && clickCount < 2) {
        document.getElementById("text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        // Yazı tamamlandığında sesi durdur
        document.getElementById("sound").pause();
        // Container'ı seç ve tanımla
        var container = document.getElementById("text"); // "container" yerine gerçek ID'yi kullanın

        // Line break oluştur
        var lineBreak = document.createElement("br");
        var lineBreak2 = document.createElement("br");

        // Butonu oluştur
        var continueButton = document.createElement("button");
        continueButton.innerHTML = "Devam Et";
        continueButton.addEventListener("click", function() {
            window.location.href = "../5"; // Yönlendirilecek adresi buraya yazın
        });

        // Line break'i ve butonu container'ın içine ekle (sıralamaya dikkat edin)
        container.appendChild(lineBreak);
        container.appendChild(lineBreak2);
        container.appendChild(continueButton);
    }
}

// Yazıyı başlat
typeWriter();

// Boşluk tuşuna basıldığında animasyonu atla
document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && !spacePressed) {
        spacePressed = true;
        skipAnimation();
    }
});

// Ekrana tıklandığında animasyonu atla
document.addEventListener("click", function(event) {
    clickCount++;
    if (!spacePressed && clickCount < 2) {
        spacePressed = true;
        skipAnimation();
    }
});

// Animasyonu atlayacak fonksiyon
function skipAnimation() {
    // Animasyonu atla
    index = text.length;
    document.getElementById("text").innerHTML = text;
    // Yazı tamamlandığında sesi durdur
    document.getElementById("sound").pause();
}
