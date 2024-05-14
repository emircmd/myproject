// Yazılacak metin
var text = "Adam kadının gözlerinin donuklaşmaya başladığını görünce aklına gelen çılgın fikirden bahsedip onu yeniden canlandırmak istedi: “Bu şimdi yaptığım resmi özellikle senin tablon boyutunda çalışmıştım. Bunu eve götürüp senin resmini çıkartıp çerçeveye bunu yerleştirebiliriz. Senin resmin kadar iyi değil ama anlamaz, anlasa da iş işten geçmiş olur.” Kadının gözlerinin içi yeniden parladı: “Kesinlikle anlamaz, zaten benim gördüğümü görmediği için ondan ayrılmıştım…” Adam ve kadın planlarını devreye soktular ve ertesi gün tablonun orijinaliyle profesyonel sanat kaçakçılarına yakışan bir edayla, ormanda, devasa bir ağacın altında yeniden buluştular. Kadın adama: “Eğer alınmazsan sana bunun için teşekkür etmeyeceğim.” dedi. “Çünkü bu resmimi o kadar çok istemiştim ki, hayat bana bunu geri getirmenin bir yolunu buldu.” Adam gülerek: “E doğru, günün sonunda ben sadece bir figüranım.” dedi. Kadın bu figürana sarılıp hayat ağacının altında bir öpücük verdi ve adamın başına, adamı beklerken ağaç dalları, yaprakları ve tohumlarıyla yaptığı tacı taktı. Tam o esnada sabah güneşinin uyuşuk ama göz alıcı ışıkları dalların arasından sızıp adamın başına düştü. Adam ve kadın cennetten kovulan havva ile adem gibi hayat ağacının altından ayrılıp dünyaya geri döndüler. Birlikte kendi evlerini kurdular ama başkalarının evlerine girip çıkmaya, başkalarının suretlerini resmetmeye ve hayatı bizzat tüm farkındalığıyla, aradaki bağları ve bağlantıları görerek yaşamaya devam ettiler. Ve artık hayattan, evrenden bir şey istemeyi bırakıp bizzat istedikleri şeyi yapmaya karar verdiler. Çünkü ışığın, yaratımın tacını giymişlerdi. Hayalin, hayatın ve hakikatin kendisi olmuşlardı…";
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
        continueButton.textContent = "Son";
        continueButton.addEventListener("click", function() {
            window.location.href = "../son"; // Yönlendirilecek adresi buraya yazın
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
