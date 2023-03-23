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
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

axios
  .get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
  .then((reponse) => {
    console.log(response); //success
  })
  .catch((error) => {
    console.log(error); //error
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

function ipGetir(obj) {
  let cardbox = document.createElement("div");
  cardbox.classList.add("card");

  let imgbox = document.createElement("img");
  imgbox.setAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/330px-Flag_of_Turkey.svg.png"
  );
  let cardInfoSelect = document.createElement("div");
  cardInfoSelect.setAttribute("class", "card-info");

  let ipSelect = document.createElement("h3");
  ipSelect.setAttribute("class", "ip");
  ipSelect.textContent = obj.sorgu;

  let ulkeSelect = document.createElement("p");
  ulkeSelect.setAttribute("class", "ulke");
  ulkeSelect.textContent = obj.ülke + " " + obj.ülkeKodu;

  let p1 = document.createElement("p");
  p1.textContent = `Enlem: ${obj.enlem}` + `Boylam: ${obj.boylam}`;

  let p2 = document.createElement("p");
  p2.textContent = `Şehir: ${obj.şehir}`;

  let p3 = document.createElement("p");
  p3.textContent = `Saat Dilimi: ${obj.saatdilimi}`;

  let p4 = document.createElement("p");
  p4.textContent = `Para Birimi: ${obj.parabirimi}`;

  let p5 = document.createElement("p");
  p5.textContent = `ISP: ${obj.isp}`;

  document.querySelector("body").appendChild(cardbox);
  cardbox.appendChild(imgbox);
  document.querySelector(".card").appendChild(cardInfoSelect);
  cardInfoSelect.appendChild(ipSelect);
  cardInfoSelect.appendChild(ulkeSelect);
  cardInfoSelect.appendChild(p1);
  cardInfoSelect.appendChild(p2);
  cardInfoSelect.appendChild(p3);
  cardInfoSelect.appendChild(p4);
  cardInfoSelect.appendChild(p5);
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

async function setCardData() {
  await ipAdresimiAl(); //IP gelir
  axios
    .get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
    .then(function (response) {
      console.log(response);
      ipGetir(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
setCardData();
