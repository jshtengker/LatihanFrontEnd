// class in JS

// object literal
// const mobil1 = {
//     transmisi: "Manual",
//     bahanBakar: "Bensin",
//     mesin: 1500,
//     nyalakanMesin: function(){
//         console.log(`Mobil ${this.transmisi} dinyalakan`);
//     },
// };


// const mobil2 = {
//     transmisi: "Automatic",
//     bahanBakar: "Solar",
//     mesin: 2000,
//     nyalakanMesin: function(){
//         console.log(`Mobil ${this.transmisi} dinyalakan`);
//     },
// };


class Mobil {
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
    nyalakanMesin (){
        console.log(`Mobil ${this.transmisi} dinyalakan`);
    }
}

const mobil1 = new Mobil("Manual", "Bensin", 1500);
const mobil2 = new Mobil("Automatic", "Solar", 2000);
console.log(mobil1);

class Toyota extends Mobil{
constructor(transmisi, bahanBakar, mesin, merk, warna){
        super(transmisi, bahanBakar, mesin)
        this.merk = merk;
        this.warna = warna;
    }
    // override
    nyalakanMesin(){
        console.log(`Mobil merk ${this.merk} dinyalakan`);
    }
}

const agya = new Toyota("Automatic", "Bensin", 1000, "Agya", "Putih");
console.log(agya);
console.log(agya.transmisi);
agya.nyalakanMesin();
