// Yazılacak metin
var text = "“TACIM BASIMDA DEGIL KALBIMDEDIR.”<br>-WILLIAM SHAKESPEARE<br><br>“GÜLLERDEN TAÇ AYNI ZAMANDA DIKENLERDEN BIR TAÇTIR.”<br>-GILBERT K.CHESTERTON<br><br>“HAYATIN TACI NE MUTLULUKTUR NE DE YOK OLUS; ANLAYISTIR.”<br>-WINIFRED HOLTBY<br><br>“TANRI’NIN SURETINDE YARATILAN INSAN, YARADILISIN TACIYDI.”<br>-WALTER LANG";

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
        continueButton.innerHTML = "DON BASA";
        continueButton.addEventListener("click", function() {
            window.location.href = "../"; // Yönlendirilecek adresi buraya yazın
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