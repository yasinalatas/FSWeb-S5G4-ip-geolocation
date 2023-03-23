//axios import buraya gelecek
import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

axios
  .get("https://apis.ergineer.com/ipgeoapi/95.70.234.14")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/

/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

function ipGeoFunc(geoObj) {
  const cardbox = document.createElement("div");
  cardbox.classList.add("card");

  const imgsec = document.createElement("img");
  bayrak.setAttribute("src", geoObj["ülkebayrağı"]);
  imgsec.src = "{ülke bayrağı url}";

  const infobox = document.createElement("div");
  infobox.classList.add("card-info");

  const ipbaslik = document.createElement("h3");
  ipbaslik.classList.add("ip");
  ipbaslik.textContent("{ip adresi}");

  const paragraf1 = document.createElement("p");
  paragraf1.classList.add("ulke");
  paragraf1.textContent("{ülke bilgisi (ülke kodu)}");

  const paragraf2 = document.createElement("p");
  paragraf2.textContent("Enlem: {enlem} Boylam: {boylam}");

  const paragraf3 = document.createElement("p");
  paragraf3.textContent("Şehir: {şehir}");

  const paragraf4 = document.createElement("p");
  paragraf4.textContent("Saat dilimi: {saat dilimi}");

  const paragraf5 = document.createElement("p");
  paragraf5.textContent("Para birimi: {para birimi}");

  const paragraf6 = document.createElement("p");
  paragraf6.textContent("ISP: {isp}");

  infobox.appendChild(ipbaslik);
  infobox.appendChild(paragraf1);
  infobox.appendChild(paragraf2);
  infobox.appendChild(paragraf3);
  infobox.appendChild(paragraf4);
  infobox.appendChild(paragraf5);
  infobox.appendChild(paragraf6);

  body.appendChild(cardbox);
  body.appendChild(imgsec);
  body.appendChild(ingobox);
}

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
