// Yazılacak metin
var text = "Eve giriş tamamen şifrelerle yapılıyordu. Ev sahibi apartman ve giriş kapısı şifrelerini verdikten sonra ev kurallarını yazıp keyifli bir konaklama diledi. Adam eve girer girmez çok dingin, çok huzurlu olduğunu hissedebildi. Hissetmeyi sevdiği şeylerden biri de evin enerjisiydi. Çünkü her evin kendisine ait bir titreşimi, bir duygu durumu ve havada asılı duran bir kokusu vardı. Evin duygusu, kokusu ve titreşimi bir bütün oluşturup ev sahibinin varlığını yansıtırdı. Ev ve sahibi birbirilerine uyumlanan iki rezonans teli gibiydi. Adam evin sağını solunu kurcalamaya başladı… Çocukken kurduğu hayallerden biriydi bu. Dünyada tüm insanlar aniden sebepsizce yok olmuş ve sadece kendisi kalmıştı. Adam, bu hayalini her hatırladığında; bu kadar içe dönük bir çocukluk geçirdiği için bir yanı üzülüyor fakat bir yanı da kendi çocukluğunun bu yaratıcılığına hayranlık duyuyordu. Tüm insanların yok olduğu bir dünyada çocuk bedeniyle başkalarının evlerine giriyor, onların eşyalarını karıştırıyor, fotoğraf albümlerine bakıp nasıl bir hayat yaşadıklarını tahmin etmeye çalışıyordu. Şimdi büyümüş ve insanların kendi yaşamakta oldukları evleri kiraya verebilmelerini sağlayan bir sistem sayesinde bu hayalini dünyada hiç kimse yok olmadan yapabiliyor hale gelmişti. Kimseden bir şey istemeden, evrenden isteyerek hayallerinin gerçekleşmesine alışıktı adam fakat bu durum ona bile ironik gelmişti…";
// Yazı animasyonu için kullanılacak değişkenler
var index = 0;
var speed = 30; // Yazı hızı (ms cinsinden)

// Geçmiş olayları izlemek için sayaçlar
var spacePressed = false;
var clickCount = 0;

// Yazıyı yazacak fonksiyon
function typeWriter() {
    if (index < text.length && !spacePressed && clickCount < 2) {
        document.getElementById("text").textContent += text.charAt(index);
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
        continueButton.textContent = "Devam Et";
        continueButton.addEventListener("click", function() {
            window.location.href = "../3"; // Yönlendirilecek adresi buraya yazın
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
    document.getElementById("text").textContent = text;
    // Yazı tamamlandığında sesi durdur
    document.getElementById("sound").pause();
}
