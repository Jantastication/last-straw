
// Function to populate data to database
const seedData = [
  {"Name":"Merida Mexican Restaurant","Address":"2509 Navigation Blvd, Houston, TX 77003","Lat":"29.7582547","Long":"-95.34373","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws"},
  {"Name":"Pappas Bar-B-Q","Address":"8777 Main St, Houston, TX 77025","Lat":"29.6914213","Long":"-95.416682","Styrofoam":"TRUE","Plastic":"FALSE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Plates or serving containers, Utensils, Sides containers, Condiments containers, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"KFC","Address":"1945 El Dorado Blvd, Houston, TX 77062","Lat":"29.5783605","Long":"-95.1219741","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Utensils, Sides containers, Condiments containers, Bags for left overs or take out"},
  {"Name":"JuiceLand","Address":"3206 White Oak Dr, Houston, TX 77007","Lat":"29.7817546","Long":"-95.3922153","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Condiments containers, Containers for left overs or take out"},
  {"Name":"Nam Eatery","Address":"B, 502 E 20th St, Houston, TX 77008","Lat":"29.8038321","Long":"-95.3930349","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Condiments containers, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Brasil","Address":"2604 Dunlavy St, Houston, TX 77005","Lat":"29.74256","Long":"-95.402257","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Empire Café","Address":"1732 Westheimer Rd, Houston, TX 77098","Lat":"29.7428851","Long":"-95.4035421","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Panera Bread","Address":"3151 W Holcombe Blvd, Houston, TX 77025","Lat":"29.7428851","Long":"-95.4035421","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Oui Banh Mi","Address":"1601 Richmond Ave, Houston, TX 77006","Lat":"29.7341564","Long":"-95.399702","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Utensils, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"CoCo Crêpes, Waffles & Coffee","Address":"2339 University Blvd, Houston, TX 77005","Lat":"29.7147249","Long":"-95.4143684","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Baytown Seafood","Address":"925 Main St, Liberty, TX 77575","Lat":"30.0647931","Long":"-94.7964505","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Plates or serving containers, Utensils, Condiments containers, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Doc's Motorworks Bar & Grill","Address":"1303 Westheimer Rd, Houston, TX 77006","Lat":"29.7434544","Long":"-95.3951208","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Containers for left overs or take out"},
  {"Name":"Empire Café","Address":"1732 Westheimer Rd, Houston, TX 77098","Lat":"29.7428851","Long":"-95.4035421","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Containers for left overs or take out"},
  {"Name":"Dimassi's Mediterranean Buffet","Address":"8236 Kirby Dr, Houston, TX 77054","Lat":"29.6888774","Long":"-95.4131409","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Containers for left overs or take out"},
  {"Name":"Sweet Tomatoes","Address":"8775 Katy Fwy, Houston, TX 77024","Lat":"29.7833054","Long":"-95.5056817","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Condiments containers, Containers for left overs or take out"},
  {"Name":"Barnaby's Cafe","Address":"801 Congress Ave, Houston, TX 77002","Lat":"29.7633057","Long":"-95.3620762","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws"},
  {"Name":"Little Pappas Seafood Kitchen","Address":"3001 S Shepherd Dr, Houston, TX 77098","Lat":"29.7390759","Long":"-95.4102888","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Liberty Taco","Address":"a, 4703 Richmond Ave, Houston, TX 77027","Lat":"29.7322076","Long":"-95.4566904","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Utensils, Condiments containers, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"la Madeleine French Bakery & Café Sunset Valley","Address":"5493 Brodie Ln, Sunset Valley, TX 78745","Lat":"30.2296154","Long":"-97.8195869","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws"},
  {"Name":"Cafe Express","Address":"1422 W Gray St, Houston, TX 77019","Lat":"29.7535843","Long":"-95.3994502","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out, They ONLY use plastic disposable beverage containers- for dining in the restaurant and for take out."},
  {"Name":"Platypus Brewing","Address":"1902 Washington Ave suite e, Houston, TX 77007","Lat":"29.768051","Long":"-95.3775152","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Containers for left overs or take out"},
  {"Name":"bellagreen","Address":"2305 West Alabama Street SteR2, Houston, TX 77098","Lat":"29.7382312","Long":"-95.4153755","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Containers for left overs or take out, Utensils for left overs or take out, Some take out is paper"},
  {"Name":"Tiny's No. 5","Address":"3636 Rice Boulevard, West University Place, TX 77005","Lat":"29.7172369","Long":"-95.4334791","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Containers for left overs or take out"},
  {"Name":"Restrospect Coffee Bar","Address":"3709 La Branch St, Houston, TX 77004","Lat":"29.7353569","Long":"-95.3754197","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Utensils, Utensils for left overs or take out"},
  {"Name":"Hunan's Restaurant","Address":"3835 Bellaire Blvd, Houston, TX 77025","Lat":"29.7053693","Long":"-95.4381231","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Chipotle MexicanGrill","Address":"13313 FM 1960, Houston, TX 77065","Lat":"29.9158626","Long":"-95.6165062","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Utensils for left overs or take out"},
  {"Name":"Paulie's","Address":"1834 Westheimer Rd, Houston, TX 77018","Lat":"29.7428911","Long":"-95.4061049","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Utensils, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Cafe Express","Address":"1422 W Gray St, Houston, TX 77019","Lat":"29.7535843","Long":"-95.3994502","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws"},
  {"Name":"La Trattoria Tuscano","Address":"4223 Research Forest Dr # 950, Spring, TX 77381","Lat":"30.1814913","Long":"-95.4859556","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Mellow Mushroom","Address":"16000 Stuebner Airline Rd, Spring, TX 77379","Lat":"30.0120034","Long":"-95.5147389","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws"},
  {"Name":"Common Bond Café & Bakery","Address":"1706 Westheimer Rd, Houston, TX 77006","Lat":"29.7429809","Long":"-95.40232","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws"},
  {"Name":"Balls Out Burger","Address":"3531, 1603 N Durham Dr, Houston, TX 77008","Lat":"29.7998535","Long":"-95.4120976","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Plates or serving containers, Utensils"},
  {"Name":"The Dunlavy & The Kitchen at The Dunlavy","Address":"3422 Allen Pkwy, Houston, TX 77019","Lat":"29.7611493","Long":"-95.401866","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, 1/2 oz containers for marmalaide"},
  {"Name":"P.F. Chang's","Address":"4094 Westheimer Rd, Houston, TX 77027","Lat":"29.7424473","Long":"-95.4478879","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Bags for left overs or take out, fortune cookes in plastic"},
  {"Name":"Buca di Beppo Italian Restaurant","Address":"5192 Buffalo Speedway, Houston, TX 77005","Lat":"29.7269492","Long":"-95.42832","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"rise nº2","Address":"1700 Post Oak Blvd #290, Houston, TX 77056","Lat":"29.7493446","Long":"-95.4622183","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Plates or serving containers"},
  {"Name":"Salata","Address":"3651 Weslayan St #216, Houston, TX 77027","Lat":"29.7338556","Long":"-95.4409856","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Utensils, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Goode Company BBQ","Address":"8865 Six Pines Dr Suite 100, Shenandoah, TX 77380","Lat":"30.1758584","Long":"-95.4608875","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Containers for left overs or take out"},
  {"Name":"Johnny Tamale Cantina","Address":"4647 East Sam Houston Pkwy S, Pasadena, TX 77505","Lat":"29.6396242","Long":"-95.1590507","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Condiments containers, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"The Brisket House","Address":"5775 Woodway Dr, Houston, TX 77057","Lat":"29.7599509","Long":"-95.4823678","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Plates or serving containers, Utensils, Sides containers, Condiments containers, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Fadi's Meyerland Mediterranean Grill","Address":"4738 Beechnut St, Houston, TX 77096","Lat":"29.6896366","Long":"-95.4602653","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Jenni's Noodle House","Address":"3111 S Shepherd Dr, Houston, TX 77098","Lat":"29.7381472","Long":"-95.4103748","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Osaka Izakaya","Address":"2802 S Shepherd Dr, Houston, TX 77098","Lat":"29.7403729","Long":"-95.4110396","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Escalante's Mexican Restaurant","Address":"Two Hughes Landing, 1900 Hughes Landing Blvd #100, The Woodlands, TX 77380","Lat":"30.1709619","Long":"-95.4712845","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Containers for left overs or take out, The bottom part of the take-out container was \"compostable in commercial facilities only.\" The top (lid) was single use plastic."},
  {"Name":"Pei Wei","Address":"14008 Memorial Dr Suite A, Houston, TX 77079","Lat":"29.7714944","Long":"-95.590547","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws"},
  {"Name":"Café Caspian","Address":"12126 Westheimer Rd # 100, Houston, TX 77077","Lat":"29.7371961","Long":"-95.5945934","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Hopdoddy Burger Bar","Address":"5510 Morningside Dr #100, Houston, TX 77005","Lat":"29.7156773","Long":"-95.415351","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws"},
  {"Name":"Goode Company Seafood","Address":"2621 Westpark Dr, Houston, TX 77098","Lat":"29.728285","Long":"-95.4203423","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws"},
  {"Name":"Saltgrass Steak House","Address":"215 Kipp Ave, Kemah, TX 77565","Lat":"29.5472695","Long":"-95.0200347","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Miss Saigon Cafe","Address":"1421 Richmond Ave, Houston, TX 77006","Lat":"29.7340676","Long":"-95.3984287","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Containers for left overs or take out, Bags for left overs or take out, condiment container for take out"},
  {"Name":"Starbucks","Address":"13914 Galveston Rd #100, Webster, TX 77598","Lat":"29.5783152","Long":"-95.1570745","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Stirrers, green cup stirrers and cup lids!!"},
  {"Name":"Tai Li Chinese Restaurant","Address":"7948 FM 1960, Humble, TX 77346","Lat":"30.0022178","Long":"-95.1533663","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Sides containers, Condiments containers, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Fix Coffeebar","Address":"415 Westheimer Rd #101, Houston, TX 77006","Lat":"29.7442412","Long":"-95.3868592","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws"},
  {"Name":"Hyunh Restaurant","Address":"912 St Emanuel St, Houston, TX 77003","Lat":"29.7516754","Long":"-95.3556297","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Presidio","Address":"911 W 11th St, Houston, TX 77008","Lat":"29.7907294","Long":"-95.406688","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws"},
  {"Name":"Tarka Indian Kitchen","Address":"721 W 19th St #7, Houston, TX 77008","Lat":"29.8030045","Long":"-95.4111157","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws"},
  {"Name":"Niko Niko's","Address":"2520 Montrose Blvd, Houston, TX 77006","Lat":"29.7464826","Long":"-95.3921964","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Utensils, Condiments containers"},
  {"Name":"Cavo Coffee","Address":"3773 Richmond Ave #1F, Houston, TX 77046","Lat":"29.7324177","Long":"-95.4372501","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Utensils"},
  {"Name":"Edison & Patton","Address":"4203 Edison St, Houston, TX 77009","Lat":"29.7984211","Long":"-95.3630626","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Containers for left overs or take out"},
  {"Name":"Spanish Flowers Mexican Restaurant","Address":"4410, 4701 N Main St, Houston, TX 77009","Lat":"29.7970923","Long":"-95.3819315","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Containers for left overs or take out"},
  {"Name":"Red Robin","Address":"18800 Gulf Fwy, Friendswood, TX 77546","Lat":"29.5471536","Long":"-95.1495489","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Condiments containers, Containers for left overs or take out"},
  {"Name":"A 2nd Cup","Address":"1111 E 11th St, Houston, TX 77009","Lat":"29.7910813","Long":"-95.3867161","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws"},
  {"Name":"Blue Nile Ethiopian","Address":"3030 Audley St, Houston, TX 77098","Lat":"29.7375934","Long":"-95.4265625","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws"},
  {"Name":"Corner Bakery Cafe","Address":"107 Yale St Ste. 100, Houston, TX 77007","Lat":"29.7726382","Long":"-95.3989044","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Plates or serving containers, Utensils, Sides containers"},
  {"Name":"Beet Box Blend Bar","Address":"1909 W Gray St B, Houston, TX 77019","Lat":"29.752679","Long":"-95.4031279","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Plates or serving containers"},
  {"Name":"Boston Market","Address":"1915 W Gray St, Houston, TX 77019","Lat":"29.7526756","Long":"-95.4032745","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Condiments containers, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Panera Bread","Address":"1705 W Gray St, Houston, TX 77019","Lat":"29.7529705","Long":"-95.4012793","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Containers for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Smashburger","Address":"174 Yale St, Houston, TX 77007","Lat":"29.773657","Long":"-95.3982499","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws"},
  {"Name":"Time for Thai- TMC","Address":"6550 Bertner Ave, Houston, TX 77030","Lat":"29.7095071","Long":"-95.3976386","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Plates or serving containers, Utensils, Sides containers, Condiments containers, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Mint Thai Kitchen","Address":"540 Waugh Dr A, Houston, TX 77019","Lat":"29.7601874","Long":"-95.3986191","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Containers for left overs or take out"},
  {"Name":"Snooze, an A.M. Eatery","Address":"3217 Montrose Blvd #100, Houston, TX 77006","Lat":"29.7440024","Long":"-95.3909796","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws"},
  {"Name":"Fadi´s Mediterranean Grill","Address":"12360 Westheimer Rd suite a, Houston, TX 77077","Lat":"29.736676","Long":"-95.6005037","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Utensils for left overs or take out"},
  {"Name":"Life Café","Address":"815 Town & Country Ln, Houston, TX 77024","Lat":"29.781014","Long":"-95.560046","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Plates or serving containers, Utensils, Sides containers, Condiments containers, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out, Everything! Even the decoration"},
  {"Name":"Seiwa Market","Address":"1801 S Dairy Ashford Rd #116, Houston, TX 77077","Lat":"29.7469039","Long":"-95.6049779","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Plates or serving containers, Sides containers, Containers for left overs or take out, Bags for left overs or take out"},
  {"Name":"Hibachi Grill & Buffet","Address":"12183 Katy Fwy H, Houston, TX 77079","Lat":"29.7831128","Long":"-95.6016941","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, but only when asked for"},
  {"Name":"Burger-chan","Address":"5 Greenway Plaza C-630, Houston, TX 77046","Lat":"29.7306564","Long":"-95.4318419","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Beverage containers, Straws, Plates or serving containers, Utensils, Sides containers, Condiments containers, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Luna Pizzeria","Address":"3435 Kirby Dr, Houston, TX 77098","Lat":"29.7351193","Long":"-95.4177819","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Sides containers, Bags for left overs or take out, Utensils for left overs or take out"},
  {"Name":"Calliope's","Address":"7590 W Bellfort St, Houston, TX 77071","Lat":"29.6564126","Long":"-95.5106341","Styrofoam":"TRUE","Plastic":"TRUE","Condiments":"TRUE","Compostable":"TRUE","field9":"Straws, Plates or serving containers, Utensils, Sides containers, Condiments containers, Containers for left overs or take out, Bags for left overs or take out, Utensils for left overs or take out"}
]
// const seedData = require('./data/data.json');
// for (let row in rows)
// const seedDatabase = async () => {
//   for (let row in rows) {
//     await Place.create();
//   }
//   await Place.create({
//     name: 'Merida Mexican Restaurant',
//     address: '2509 Navigation Blvd, Houston, TX 77003',
//     lat: 29.7582547,
//     long: 95.34373,
//     styrofoam: true,
//     plastic: false,
//     icondiments: true,
//     compostable: false
//   });
// };


// const data = rawData.map(place => ({
//   lat: parseFloat(place.Latitude),
//   long: parseFloat(place.Longitude),
//   address: place.Address,
//   name: place['Restaurant Name'],
//   styrofoam: getRandomBool(),
//   plastic: getRandomBool(),
//   icondiments: getRandomBool(),
//   compostable: getRandomBool()
// }));

module.exports = seedData;


