// Yazılacak metin
var text = "Yalnız bu evde hiç fotoğraf yoktu. En son kaldığı evin duvarlarında ve her köşe başında ev sahiplerinin fotoğrafları vardı. Bu sayede, ev sahibinin balıkçılıkla ilgilenen bir öğretmen olduğunu, öğrencilerinin ona verdiği hediyeleri ve hatta ilgilendiği sporları dahi görebilmiş, ilgi alanlarının evinin dekorasyonunda nasıl rol aldığını çıkarabilmişti. Ev sahibi ve evi arasındaki o bağlantıyı görebilmişti. Fakat bu ev; özenle yerleştirilmiş dekoratif şık objeler, hiçbiri fuzuli olmayan fonksiyonel mobilyalar ve komidinin üzerinde duran “Jefferson Airplane” müzik grubunun “White Rabbit” albümü plağı sayesinde hem ev sahibi hakkında çok şey anlatıyor hem de ne ismi ne mesleği ne de görüntüsü hakkında hiçbir ipucu vermiyordu. Airbnb uygulamasında yazışırken de ev sahibinin kendi ismi değil, rumuzu vardı. Fakat adamın dikkatini en çok çeken şey duvarda asılı duran devasa bir tablo oldu. Bu, bir kral tacının suluboya çizimiydi. Altın renklerine boyanmış bu taç resminden neden bu kadar çok etkilendiğini anlamadı ve evi araştırmaya devam etti. Kahve makinasını çalıştırıp mutfak dolaplarını karıştırmaya başladı. Belli ki çok zevkli olan ev sahibinin kesin çok şık kupaları vardır diye düşündü fakat sadece bir adet kupa buldu. Üzerinde duvarda asılı duran taç resmine benzeyen bir tacın bulunduğu bir kupa… Bu çizim daha da hoşuna gitmişti ve aklına bir gün önce akşama hangi etkinliğe gitsem diye internette gezinirken rast geldiği suluboya atölyesi etkinliği geldi. Bu akşam için yapacak bir şey bulamamıştı ve evde takılacaktı fakat şimdi yapacak bir şeyi vardı: Suluboya resim atölyesine gidip bu taç resmini yapmak… Bu tür atölyelerde, hiçbir resim bilgin olmasa da bir-iki saat içerisinde temel bilgileri alıp atölyeden çıkarken yanında kendi yaptığın bir resimle çıkabiliyordun. Biletini alıp hemen etkinlik mekanına gitti…";
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
            window.location.href = "../4"; // Yönlendirilecek adresi buraya yazın
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
