// Yazılacak metin
var text = "Adam ara vermeksizin bir yıldır çalışıyordu. İşvereni bu çabasını ve satış rakamlarındaki yükselişi gördükçe adamın ondan bir şeyler istemesini bekliyor, fakat adam sadece çalışmaya devam ediyor, aksine işini daha da mükemmelleştiriyordu. Patron nihayet dayanamayıp adamın çalışmasını taçlandırmak için o istemeden ona prim vermişti. Adamın “hayatı yaşama taktiği”; direkt istemek yerine çabasının görülmesini sağlamak ve istemeden bir şeylerin ona verilmesiydi. Bunun her ne kadar her zaman işe yaramayacağını bilse de hayattan / insanlardan bir şeyler isteme konusundaki acziyetini bu şekilde tolere etmeye çalışıyordu. Keza bu avans uzun süredir istediği tatilin kapısını ona açmış, parayı patrondan değil, evrenden ona bir avans olarak görmüş ve hemen mini bir tatil planı yapmıştı… Tatil anlayışı deniz ya da geziden ziyade, farklı bir hayatı keşfetmek, kısa süreli de olsa başka bir insanın hayatını yaşamaktı. Bunun için de otel değil, özellikle Airbnb evleri tutardı. Airbnb sisteminde insanlar kendi yaşadıkları evleri kısa süreli konaklama için başkalarına kiralıyorlardı. Adam da bir başkasının mahallesinde, sokağında, evinde yaşamak nasıl bir duygu; insanlar evlerini nasıl dekore ediyorlar, duvarların ya da kapıların nereleri daha çok aşınmış gibi detayları keşfetmekten büyük haz duyuyordu. Tatil için sadece hafta sonu olduğundan, şehir merkezinde, daha önce hiç yaşamadığı bir muhitte, içerisi çok iyi dekore edilmiş bir ev buldu. Ev sahibiyle uygulama üzerinden yazışıp hemen evi tuttu…";
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
            window.location.href = "../2"; // Yönlendirilecek adresi buraya yazın
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
