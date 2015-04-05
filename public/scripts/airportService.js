'use strict';

var app = angular.module('travelApp');
	app.service('airportService', function airportService() {
		this.getCode = function(){
			var list = [{"name":"Aalborg, Denmark","code":"AAL"},{"city":
"Aalesund, Norway","code":"AES"},{"city":
"Aarhus, Denmark - Bus service","code":"ZID"},{"city":
"Aarhus, Denmark - Tirstrup","code":"AAR"},{"city":
"Aasiaat, Greenland","code":"JEG"},{"city":
"Abadan, Iran","code":"ABD"},{"city":
"Abakan, Russia","code":"ABA"},{"city":
"Abbotsford, BC","code":"YXX"},{"city":
"Aberdeen, SD","code":"ABR"},{"city":
"Aberdeen, United Kingdom","code":"ABZ"},{"city":
"Abha, Saudi Arabia","code":"AHB"},{"city":
"Abidjan, Cote d'Ivoire","code":"ABJ"},{"city":
"Abilene, TX","code":"ABI"},{"city":
"Abu Dhabi, United Arab Emirates","code":"AUH"},{"city":
"Abu Simbel, Egypt","code":"ABS"},{"city":
"Abuja, Nigeria","code":"ABV"},{"city":
"Acapulco, Mexico","code":"ACA"},{"city":
"Acarigua, Venezuela","code":"AGV"},{"city":
"Accra, Ghana","code":"ACC"},{"city":
"Adak Island, AK","code":"ADK"},{"city":
"Adana, Turkey","code":"ADA"},{"city":
"Addis Ababa, Ethopia","code":"ADD"},{"city":
"Adelaide, Australia","code":"ADL"},{"city":
"Aden, Yemen","code":"ADE"},{"city":
"Adler/Sochi, Russia","code":"AER"},{"city":
"Adrar, Algeria","code":"AZR"},{"city":
"Afutara, Soloman Islands","code":"AFT"},{"city":
"Agadir, Morocco","code":"AGA"},{"city":
"Agartala, India","code":"IXA"},{"city":
"Agaun, Papua New Guinea","code":"AUP"},{"city":
"Agen, France","code":"AGF"},{"city":
"Agra, India","code":"AGR"},{"city":
"Agri, Turkey","code":"AJI"},{"city":
"Aguadilla, Puerto Rico","code":"BQN"},{"city":
"Aguascalientes, Mexico","code":"AGU"},{"city":
"Aguni, Japan","code":"AGJ"},{"city":
"Ahmedabad, India","code":"AMD"},{"city":
"Ahwaz, Iran","code":"AWZ"},{"city":
"Ailuk Island, Marshall Islands","code":"AIM"},{"city":
"Aioun El Atrouss, Mauritania","code":"AEO"},{"city":
"Airok, Marshall Islands","code":"AIC"},{"city":
"Aitutaki, Cook Islands","code":"AIT"},{"city":
"Aizawl, India","code":"AJL"},{"city":
"Ajaccio, France","code":"AJA"},{"city":
"Akiachak, AK","code":"KKI"},{"city":
"Akiak, AK","code":"AKI"},{"city":
"Akita, Japan","code":"AXT"},{"city":
"Akron/Canton, OH","code":"CAK"},{"city":
"Aksu, China","code":"AKU"},{"city":
"Aktyubinsk, Kazakhstan","code":"AKX"},{"city":
"Akulivik, QC","code":"AKV"},{"city":
"Akureyri, Iceland","code":"AEY"},{"city":
"Akuton, AK","code":"KQA"},{"city":
"Al Ain, United Arab Emirates","code":"AAN"},{"city":
"Al Arish, Egypt","code":"AAC"},{"city":
"Al Ghaydah, Yemen","code":"AAY"},{"city":
"Al Hoceima, Morocco","code":"AHU"},{"city":
"Alakanuk, AK","code":"AUK"},{"city":
"Alamogordo, NM","code":"ALM"},{"city":
"Alamosa, CO","code":"ALS"},{"city":
"Al-Baha, Saudi Arabia","code":"ABT"},{"city":
"Albany, NY","code":"ALB"},{"city":
"Albany, OR - Bus service","code":"CVO"},{"city":
"Albany, OR - Bus service","code":"QWY"},{"city":
"Albuquerque, NM","code":"ABQ"},{"city":
"Albury, Australia","code":"ABX"},{"city":
"Alderney, United Kingdom","code":"ACI"},{"city":
"Aldershot, ON - Rail service","code":"XLY"},{"city":
"Aleknagik, AK","code":"WKK"},{"city":
"Aleppo, Syrian Arab Republic","code":"ALP"},{"city":
"Alexander Bay, South Africa","code":"ALJ"},{"city":
"Alexandria, Egypt","code":"ALY"},{"city":
"Alexandria, LA","code":"AEX"},{"city":
"Alexandria,ON - Rail service","code":"XFS"},{"city":
"Alexandroupolis, Greece","code":"AXD"},{"city":
"Al-Fujairah, United Arab Emirates","code":"FJR"},{"city":
"Alghero, Italy","code":"AHO"},{"city":
"Algiers, Algeria","code":"ALG"},{"city":
"Alicante, Spain","code":"ALC"},{"city":
"Alice Springs, Australia","code":"ASP"},{"city":
"Allakaket, AK","code":"AET"},{"city":
"Allentown, PA","code":"ABE"},{"city":
"Alliance, NE","code":"AIA"},{"city":
"Alma, QC","code":"YTF"},{"city":
"Almaty, Kazakhstan","code":"AKX"},{"city":
"Almeria, Spain","code":"LEI"},{"city":
"Alor Island, Indonesia","code":"ARD"},{"city":
"Alorsetar, Malaysia","code":"AOR"},{"city":
"Alotau, Papua New Guinea","code":"GUR"},{"city":
"Alpena, MI","code":"APN"},{"city":
"Alta, Norway","code":"ALF"},{"city":
"Altamira, Brazil","code":"ATM"},{"city":
"Altay, China","code":"AAT"},{"city":
"Altenrhein, Switzerland","code":"ACH"},{"city":
"Alto Rio Senguerr, Argentina","code":"ARR"},{"city":
"Altoona, PA","code":"AOO"},{"city":
"Amami O Shima, Japan","code":"ASJ"},{"city":
"Amarillo, TX","code":"AMA"},{"city":
"Amazon Bay, Papua New Guinea","code":"AZB"},{"city":
"Ambanja, Madagascar","code":"IVA"},{"city":
"Ambatomainty, Madagascar","code":"AMY"},{"city":
"Ambatondrazaka, Madagascar","code":"WAM"},{"city":
"Ambler, AK","code":"ABL"},{"city":
"Ambon, Indonesia","code":"AMQ"},{"city":
"Amboseli, Kenya","code":"ASV"},{"city":
"Amderma, Russia","code":"AMV"},{"city":
"Amman, Jordan - Civil/Marka Airport","code":"ADJ"},{"city":
"Amman, Jordan - Queen Alia International","code":"AMM"},{"city":
"Amritsar, India","code":"ATQ"},{"city":
"Amsterdam, Netherlands","code":"AMS"},{"city":
"Anadyr, Russia","code":"DYR"},{"city":
"Anahim Lake, BC","code":"YAA"},{"city":
"Anaktueuk, AK","code":"AKP"},{"city":
"Analalava, Madagascar","code":"HVA"},{"city":
"Anapa, Russia","code":"AAQ"},{"city":
"Anchorage, AK","code":"ANC"},{"city":
"Ancona, Italy","code":"AOI"},{"city":
"Andenes, Norway","code":"ANX"},{"city":
"Andizhan, Uzbekistan","code":"AZN"},{"city":
"Aneityum, Vanuatu","code":"AUY"},{"city":
"Angelholm/Helsingborg, Sweden","code":"JHE"},{"city":
"Angers, France - Marce","code":"ANE"},{"city":
"Angers, France - Rail service","code":"QXG"},{"city":
"Anggi, Indonesia","code":"AGD"},{"city":
"Anging, China","code":"AQG"},{"city":
"Angling Lake, ON","code":"YAX"},{"city":
"Angoon, AK","code":"AGN"},{"city":
"Angouleme, France","code":"ANG"},{"city":
"Anguilla, Anguilla","code":"AXA"},{"city":
"Aniak, AK","code":"ANI"},{"city":
"Aniwa, Vanuatu","code":"AWD"},{"city":
"Ankang, China","code":"AKA"},{"city":
"Ankara, Turkey - Esenboga","code":"ESB"},{"city":
"Ankara, Turkey - Etimesqut","code":"ANK"},{"city":
"Ankavandra, Madagascar","code":"JVA"},{"city":
"Annaba, Algeria","code":"AAE"},{"city":
"Annecy, France","code":"NCY"},{"city":
"Antalaha, Madagascar","code":"ANM"},{"city":
"Antalya, Turkey","code":"AYT"},{"city":
"Antaninvarivo, Madgascar","code":"TNR"},{"city":
"Antigua, Antigua and Barbuda","code":"ANU"},{"city":
"Antofagasta, Chile","code":"ANF"},{"city":
"Antsalova, Madagascar","code":"WAQ"},{"city":
"Antsiranana, Madagascar","code":"DIE"},{"city":
"Antsohihy, Madagascar","code":"WAI"},{"city":
"Antwerp, Belgium - Bus service","code":"ZAY"},{"city":
"Antwerp, Belgium - Deurne Airport","code":"ANR"},{"city":
"Anvik, AK","code":"ANV"},{"city":
"Aomori, Japan","code":"AOJ"},{"city":
"Aosta, Italy","code":"AOT"},{"city":
"Apartado, Colombia","code":"APO"},{"city":
"Apia, Western Samoa","code":"APW"},{"city":
"Apia, Western Samoa","code":"FGI"},{"city":
"Appleton, WI","code":"ATW"},{"city":
"Aqaba, Jordan","code":"AQJ"},{"city":
"Araca, Brazil","code":"AJU"},{"city":
"Aracatuba, Brazil","code":"ARU"},{"city":
"Arad, Romania","code":"ARW"},{"city":
"Aragip, Papua New Guinea","code":"ARP"},{"city":
"Araguaina, Brazil","code":"AUX"},{"city":
"Arapoti, Brazil","code":"AAG"},{"city":
"Arar, Saudi Arabia","code":"RAE"},{"city":
"Arauca, Colombia","code":"AUC"},{"city":
"Arba Mintch, Ethiopia","code":"AMH"},{"city":
"Arcata, CA","code":"ACV"},{"city":
"Arctic Bay, NU","code":"YAB"},{"city":
"Arctic Village, AK","code":"ARC"},{"city":
"Ardabil, Iran","code":"ADU"},{"city":
"Arequipa, Peru","code":"AQP"},{"city":
"Argelholm/Helsingborg, Sweden","code":"AGH"},{"city":
"Argyle, Australia","code":"GYL"},{"city":
"Arica, Chile","code":"ARI"},{"city":
"Arkangelsk, Russia","code":"ARH"},{"city":
"Armenia, Colombia","code":"AXM"},{"city":
"Armidale, Australia","code":"ARM"},{"city":
"Arthur's Town, Bahamas","code":"ATC"},{"city":
"Arua, Uganda","code":"RUA"},{"city":
"Aruba, Aruba","code":"AUA"},{"city":
"Arusha, Tanzania","code":"ARK"},{"city":
"Arviat, NU","code":"YEK"},{"city":
"Arvidsjaur, Sweden","code":"AJR"},{"city":
"Asahikawa, Japan","code":"AKJ"},{"city":
"Asheville, NC","code":"AVL"},{"city":
"Ashgabat, Turkmenistan","code":"ASB"},{"city":
"Ashland, KY/Huntington, WV","code":"HTS"},{"city":
"Asmara, Eritrea","code":"ASM"},{"city":
"Asosa, Ethopia","code":"ASO"},{"city":
"Aspen, CO","code":"ASE"},{"city":
"Assiut, Egypt","code":"ATZ"},{"city":
"Astana, Kazakhstan","code":"TSE"},{"city":
"Astrakhan, Russia","code":"ASF"},{"city":
"Asturias, Spain and Canary Islands","code":"OVD"},{"city":
"Asuncion, Paraguay","code":"ASU"},{"city":
"Aswan, Egypt","code":"ASW"},{"city":
"Ataq, Yemen","code":"AXK"},{"city":
"Athens, GA","code":"AHN"},{"city":
"Athens, Greece","code":"ATH"},{"city":
"Atiu Island, Cook Islands","code":"AIU"},{"city":
"Atka, AK","code":"AKB"},{"city":
"Atlanta, GA","code":"ATL"},{"city":
"Atlantic City, NJ","code":"AIY"},{"city":
"Atoifi, Solomon Islands","code":"ATD"},{"city":
"Atqasuk, AK","code":"ATK"},{"city":
"Attawapiskat, ON","code":"YAT"},{"city":
"Atuona, French Polynesia","code":"AUQ"},{"city":
"Atyrau, Kazakhstan","code":"GUW"},{"city":
"Auckland, New Zealand","code":"AKL"},{"city":
"Augsburg/Munich, Germany","code":"AGB"},{"city":
"Augusta, GA","code":"AGS"},{"city":
"Augusta, ME","code":"AUG"},{"city":
"Auki, Solomon Islands","code":"AKS"},{"city":
"Aupaluk, QC","code":"YPJ"},{"city":
"Aur Island, Marshall Islands","code":"AUL"},{"city":
"Aurangabad, India","code":"IXU"},{"city":
"Aurillac, France","code":"AUR"},{"city":
"Aurukun, Australia","code":"AUU"},{"city":
"Austin, TX","code":"AUS"},{"city":
"Avignon, France","code":"AVN"},{"city":
"Ayawaki, Indonesia","code":"AYW"},{"city":
"Ayers Rock, Australia","code":"AYQ"},{"city":
"Babo, Indonesia","code":"BXB"},{"city":
"Bacolod, Philippines","code":"BCD"},{"city":
"Badajcz, Spain","code":"BJZ"},{"city":
"Bade, Indonesia","code":"BXD"},{"city":
"Badu Island, Australia","code":"BDD"},{"city":
"Bagdogra, India","code":"IXB"},{"city":
"Bagotville, QC","code":"YBG"},{"city":
"Baharpar, Ethiopia","code":"BJR"},{"city":
"Bahawalpur, Pakistan","code":"BHV"},{"city":
"Bahia Blanca, Argentina","code":"BHI"},{"city":
"Bahia Pinas, Panama","code":"BFQ"},{"city":
"Bahia Solano, Colombia","code":"BSC"},{"city":
"Bahrain, Bahrain","code":"BAH"},{"city":
"Baia Mare, Romania","code":"BAY"},{"city":
"Baie Comeau, QC","code":"YBC"},{"city":
"Baimuru, Papua New Guinea","code":"VMU"},{"city":
"Baker Lake, NU","code":"YBK"},{"city":
"Bakersfield, CA","code":"BFL"},{"city":
"Baku, Azerbaijan","code":"GYD"},{"city":
"Balalae, Solomon Islands","code":"BAS"},{"city":
"Balikesir, Turkey","code":"BZI"},{"city":
"Balikpapan, Indonesia","code":"BPN"},{"city":
"Balimo, Papua New Guinea","code":"OPU"},{"city":
"Ballina, Australia","code":"BNK"},{"city":
"Balmaceda, Chile","code":"BBA"},{"city":
"Baltimore, MD","code":"BWI"},{"city":
"Bam, Iran","code":"BXR"},{"city":
"Bamaga, Australia","code":"ABM"},{"city":
"Bamako, Mali","code":"BKO"},{"city":
"Banda Aceh, Indonesia","code":"BTJ"},{"city":
"Bandar Abbas, Iran","code":"BND"},{"city":
"Bandar Lampung, Indonesia - Branti","code":"TKG"},{"city":
"Bandar Lengeh, Iran","code":"BDH"},{"city":
"Bandar Seri Begawan, Brunei","code":"BWN"},{"city":
"Bandung, Indonesia","code":"BDO"},{"city":
"Bangalore, India","code":"BLR"},{"city":
"Bangda, China","code":"BPX"},{"city":
"Bangkok, Thailand","code":"BKK"},{"city":
"Bangor, ME","code":"BGR"},{"city":
"Banja Luka, Bosnia Herzegovina","code":"BNX"},{"city":
"Banjarmasin, Indonesia","code":"BDJ"},{"city":
"Banjul, Gambia","code":"BJL"},{"city":
"Banmethuot, Viet Nam - Phung-Doc","code":"BMV"},{"city":
"Bannu, Pakistan","code":"BNP"},{"city":
"Banqui, Central African Republic","code":"BGF"},{"city":
"Baoshan, China","code":"BSD"},{"city":
"Baotou, China","code":"BAV"},{"city":
"Bar Harbour, ME","code":"BHB"},{"city":
"Baracoa, Cuba","code":"BCA"},{"city":
"Barcaldine, Australia","code":"BCI"},{"city":
"Barcelona, Spain","code":"BCN"},{"city":
"Barcelona, Venezuela","code":"BLA"},{"city":
"Bardufoss, Norway","code":"BDU"},{"city":
"Bari, Italy","code":"BRI"},{"city":
"Barinas, Venezuela","code":"BNS"},{"city":
"Bario, Malaysia","code":"BBN"},{"city":
"Barisal, Bangladesh","code":"BZL"},{"city":
"Barnaul, Russia","code":"BAX"},{"city":
"Barquisimeto, Venezuela","code":"BRM"},{"city":
"Barra Colorado, Costa Rica","code":"BCL"},{"city":
"Barra, United Kingdom","code":"BRR"},{"city":
"Barran Cabermeja, Colombia","code":"EJA"},{"city":
"Barranquilla, Colombia","code":"BAQ"},{"city":
"Barreiras, Brazil","code":"BRA"},{"city":
"Barrow, AK","code":"BRW"},{"city":
"Barter Island, AK","code":"BTI"},{"city":
"Basco, Philippines","code":"BSO"},{"city":
"Basel, Switzerland","code":"BSL"},{"city":
"Basel/Mulhouse Railway Station, Switzerland","code":"ZDH"},{"city":
"Bashehr, Iran","code":"BUZ"},{"city":
"Bastia, France","code":"BIA"},{"city":
"Batam, Indonesia","code":"BTH"},{"city":
"Bathhurst, NB","code":"ZBF"},{"city":
"Bathurst Island, Australia","code":"BRT"},{"city":
"Bathurst, Australia","code":"BHS"},{"city":
"Batman, Turkey","code":"BAL"},{"city":
"Batna, Algeria","code":"BLJ"},{"city":
"Batom, Indonesia","code":"BXM"},{"city":
"Baton Rouge, LA","code":"BTR"},{"city":
"Batsfijord, Norway","code":"BJF"},{"city":
"Battambang, Cambodia","code":"BBM"},{"city":
"Batumi, Georgia","code":"BUS"},{"city":
"Batuna, Solomon Islands","code":"BPF"},{"city":
"Bauru, Brazil","code":"BAU"},{"city":
"Bay City, MI","code":"MBS"},{"city":
"Bayamo, Cuba","code":"BYM"},{"city":
"Bayreuth, Germany","code":"BYU"},{"city":
"Bearskin Lake, ON","code":"XBE"},{"city":
"Beaumont/Port Arthur, TX","code":"BPT"},{"city":
"Beaver Creek, CO - Van service","code":"ZBV"},{"city":
"Beaver, AK","code":"WBQ"},{"city":
"Bechar, Algeria","code":"CBH"},{"city":
"Beckley, WV","code":"BKW"},{"city":
"Bedford, MA","code":"BED"},{"city":
"Bedourie, Australia","code":"BEU"},{"city":
"Beef Island, British Virgin Islands","code":"EIS"},{"city":
"Beica, Ethiopia","code":"BEI"},{"city":
"Beida, Libya - La Braq","code":"LAQ"},{"city":
"Beihai, China","code":"BHY"},{"city":
"Beijing, China","code":"PEK"},{"city":
"Beira, Mozambique","code":"BEW"},{"city":
"Beirut, Lebanon","code":"BEY"},{"city":
"Bejaia, Algeria","code":"BJA"},{"city":
"Belaga, Mozambique","code":"BLG"},{"city":
"Belem, Brazil","code":"BEL"},{"city":
"Belep Island, New Caledonia","code":"BMY"},{"city":
"Belfast, Northern Ireland, United Kingdom","code":"BFS"},{"city":
"Belfast, United Kingdom","code":"BHD"},{"city":
"Belgorod, Russia","code":"EGO"},{"city":
"Belgrade, Serbia and Montenegro - Beograd","code":"BEG"},{"city":
"Belize City, Belize - International","code":"BZE"},{"city":
"Belize City, Belize - Municipal","code":"TZA"},{"city":
"Bella Bella, BC","code":"ZEL"},{"city":
"Bella Coola, BC","code":"QBC"},{"city":
"Belleville, IL","code":"BLV"},{"city":
"Belleville, ON - Rail service","code":"XVV"},{"city":
"Bellingham, WA","code":"BLI"},{"city":
"Bellona, Solomon Islands","code":"BNY"},{"city":
"Belo Horizonte, Brazil - Pampulha","code":"PLU"},{"city":
"Belo Horizonte, Brazil - Tancredo Neves Intl.","code":"CNF"},{"city":
"Belo, Madagascar","code":"BMD"},{"city":
"Bemidji, MN","code":"BJI"},{"city":
"Benbecula, United Kingdom","code":"BEB"},{"city":
"Benghazi, Libya","code":"BEN"},{"city":
"Bengkulu, Indonesia","code":"BKS"},{"city":
"Benton Harbor, MI","code":"BEH"},{"city":
"Berau, Indonesia","code":"BEJ"},{"city":
"Berbera, Somalia","code":"BBO"},{"city":
"Berens River, MB","code":"YBV"},{"city":
"Bergen, Norway","code":"BGO"},{"city":
"Bergerac, France","code":"EGC"},{"city":
"Berlevag, Norway","code":"BVG"},{"city":
"Berlin, Germany - All airports","code":"BER"},{"city":
"Berlin, Germany - Schoenefeld","code":"SXF"},{"city":
"Berlin, Germany - Tegel","code":"TXL"},{"city":
"Berlin, Germany - Tempelhof","code":"THF"},{"city":
"Bermuda, Bermuda","code":"BDA"},{"city":
"Berne, Switzerland - Belp Airport","code":"BRN"},{"city":
"Berne, Switzerland - Rail service","code":"ZDJ"},{"city":
"Besalampy, Madagascar","code":"BPY"},{"city":
"Bethel, AK","code":"BET"},{"city":
"Bethlehem, PA","code":"ABE"},{"city":
"Bettles, AK","code":"BTT"},{"city":
"Beziers, France","code":"BZR"},{"city":
"Bhadrapur, Nepal","code":"BDP"},{"city":
"Bhairawa, Nepal","code":"BWA"},{"city":
"Bhamo, Myanmar","code":"BMO"},{"city":
"Bharatpur, Nepal","code":"BHR"},{"city":
"Bhavnagar, India","code":"BHU"},{"city":
"Bhopal, India","code":"BHO"},{"city":
"Bhubaneswar, India","code":"BBI"},{"city":
"Bhuj, India","code":"BHJ"},{"city":
"Biak, Indonesia","code":"BIK"},{"city":
"Biarritz, France","code":"BIQ"},{"city":
"Big Trout, ON","code":"YTL"},{"city":
"Bikini Atoll, Marshall Islands","code":"BII"},{"city":
"Bilbao, Spain","code":"BIO"},{"city":
"Billings, MT","code":"BIL"},{"city":
"Billund, Denmark","code":"BLL"},{"city":
"Biloxi/Gulfport, MS","code":"GPT"},{"city":
"Bima, Indonesia","code":"BMU"},{"city":
"Bimini, Bahamas","code":"BIM"},{"city":
"Bimini, Bahamas","code":"NSB"},{"city":
"Binghamton, NY","code":"BGM"},{"city":
"Bintulu, Malaysia","code":"BTU"},{"city":
"Bintuni, Indonesia","code":"NTI"},{"city":
"Biratragar, Nepal","code":"BIR"},{"city":
"Birch Creek, AK","code":"KBC"},{"city":
"Birdsville, Australia","code":"BVI"},{"city":
"Birmingham, AL","code":"BHM"},{"city":
"Birmingham, United Kingdom","code":"BHX"},{"city":
"Bisha, Saudi Arabia","code":"BHH"},{"city":
"Bishkek, Kyrgyzstan","code":"FRU"},{"city":
"Biskra, Algeria","code":"BSK"},{"city":
"Bismarck, ND","code":"BIS"},{"city":
"Bissau, Guinea-Bissau","code":"OXB"},{"city":
"Black Tickle, NL","code":"YBI"},{"city":
"Blackall, Australia","code":"BKQ"},{"city":
"Blackpool, United Kingdom","code":"BLK"},{"city":
"Blackwater, Australia","code":"BLT"},{"city":
"Blagoveschensk, Russia","code":"BQS"},{"city":
"Blanc Sablon, QC","code":"YBX"},{"city":
"Blantyre, Malawi","code":"BLZ"},{"city":
"Blenheim, New Zealand","code":"BHE"},{"city":
"Blo Horizonte, Brazil","code":"CNF"},{"city":
"Block Island, RI","code":"BID"},{"city":
"Bloemfontein, South Africa","code":"BFN"},{"city":
"Bloomington, IL","code":"BMI"},{"city":
"Bluefield, WV","code":"BLF"},{"city":
"Boa Vista, Cape Verde","code":"BVC"},{"city":
"Boang, Papua New Guinea","code":"BOV"},{"city":
"Boavista, Brazil","code":"BVB"},{"city":
"Bocas Del Toro, Panama","code":"BOC"},{"city":
"Bodo, Norway","code":"BOO"},{"city":
"Bodrum, Turkey","code":"BJV"},{"city":
"Bogota, Colombia","code":"BOG"},{"city":
"Boiju Island, Australia","code":"GIC"},{"city":
"Boise, ID","code":"BOI"},{"city":
"Bojnord, Iran","code":"BJB"},{"city":
"Bokondini, Indonesia","code":"BUI"},{"city":
"Bol, Croatia","code":"BWK"},{"city":
"Bolzano, Italy","code":"BZO"},{"city":
"Boma, Congo","code":"BOA"},{"city":
"Bombay, India","code":"BOM"},{"city":
"Bonaire, Netherlands Antilles","code":"BON"},{"city":
"Bonaventure, QC","code":"YVB"},{"city":
"Bonn, Germany","code":"BNJ"},{"city":
"Bora Bora, French Polynesia","code":"BOB"},{"city":
"Bordeaux, France","code":"BOD"},{"city":
"Borg El Arab, Egypt","code":"HBE"},{"city":
"Borkum, Germany","code":"BMK"},{"city":
"Borlange, Sweden","code":"BLE"},{"city":
"Bornholm, Denmark","code":"RNN"},{"city":
"Borroloola, Australia","code":"BOX"},{"city":
"Bossaro, Somalia","code":"BSA"},{"city":
"Boston, MA","code":"BOS"},{"city":
"Boulder, CO - Bus service","code":"XHH"},{"city":
"Boulder, CO - Hiltons Har H","code":"WHH"},{"city":
"Boulder, CO - Municipal Airport","code":"WBU"},{"city":
"Boulia, Australia","code":"BQL"},{"city":
"Boundary, AK","code":"BYA"},{"city":
"Bourgas, Bulgaria","code":"BOJ"},{"city":
"Bourke, Australia","code":"BRK"},{"city":
"Bournemouth, United Kingdom","code":"BOH"},{"city":
"Bowling Green, KY","code":"BWG"},{"city":
"Bozeman, MT","code":"BZN"},{"city":
"Brack, Libya","code":"BCQ"},{"city":
"Bradford, PA","code":"BFD"},{"city":
"Brainerd, MN","code":"BRD"},{"city":
"Brampton Island, Australia","code":"BMP"},{"city":
"Brampton, ON - Rail service","code":"XPN"},{"city":
"Brandon, MB","code":"YBR"},{"city":
"Brantford, ON - Rail service","code":"XFV"},{"city":
"Brasilia, DF, Brazil","code":"BSB"},{"city":
"Bratislava, Slovakia","code":"BTS"},{"city":
"Bratsk, Russia","code":"BTK"},{"city":
"Braunschweig, Denmark","code":"BWE"},{"city":
"Brawnwood, TX","code":"BWD"},{"city":
"Brazzaville, Congo","code":"BZV"},{"city":
"Breckenridge, CO - Van service","code":"QKB"},{"city":
"Bremen, Germany","code":"BRE"},{"city":
"Brest, France","code":"BES"},{"city":
"Brewarrina, Australia","code":"BWQ"},{"city":
"Bridgetown, Barbados","code":"BGI"},{"city":
"Brindisi, Italy","code":"BDS"},{"city":
"Brisbane, Queensland, Australia","code":"BNE"},{"city":
"Bristol, United Kingdom","code":"BRS"},{"city":
"Bristol, VA","code":"TRI"},{"city":
"Brive-La-Gaillarde, France - Laroche","code":"BVE"},{"city":
"Brno, Czech Republic - Bus service","code":"ZDN"},{"city":
"Brno, Czech Republic - Turany","code":"BRQ"},{"city":
"Brochet, MB","code":"YBT"},{"city":
"Brockville, ON","code":"XBR"},{"city":
"Broken Hill, Australia","code":"BHQ"},{"city":
"Bronnoysund, Norway","code":"BNN"},{"city":
"Brookings, SD","code":"BKX"},{"city":
"Brooks Lodge, AK","code":"RBH"},{"city":
"Broome, Australia","code":"BME"},{"city":
"Brownsville, TX","code":"BRO"},{"city":
"Brunswick, GA","code":"BQK"},{"city":
"Brus Laguna, Honduras","code":"BHG"},{"city":
"Brussels, Belgium - National","code":"BRU"},{"city":
"Brussels, Belgium - Rail service","code":"ZYR"},{"city":
"Brussels, Belguim - Charleroi","code":"CRL"},{"city":
"Bucaramanga, Colombia","code":"BGA"},{"city":
"Bucharest, Romania - Baneasa","code":"BBU"},{"city":
"Bucharest, Romania - Otopeni International","code":"OTP"},{"city":
"Buckland, AK","code":"BKC"},{"city":
"Budapest, Hungary","code":"BUD"},{"city":
"Buenos Aires, Argentina - Jorge Newbery","code":"AEP"},{"city":
"Buenos Aires, Argentina - Ministro Pistarini","code":"EZE"},{"city":
"Buffalo, NY","code":"BUF"},{"city":
"Bugulma, Russia","code":"UUA"},{"city":
"Bujumbura, Burundi","code":"BJM"},{"city":
"Buka, Papua New Guinea","code":"BUA"},{"city":
"Bukhara, Uzbekistan","code":"BHK"},{"city":
"Bukoba, Malaysia","code":"BKZ"},{"city":
"Bulawayo, Zimbabwe","code":"BUQ"},{"city":
"Bulgulma, Russia","code":"UUA"},{"city":
"Bullhead City/Laughlin, AZ","code":"IFP"},{"city":
"Bundaberg, Australia","code":"BDB"},{"city":
"Bunsil, Papua New Guinea","code":"BXZ"},{"city":
"Burao, Somalia","code":"BUO"},{"city":
"Burbank, CA","code":"BUR"},{"city":
"Bureta, Fiji","code":"LEV"},{"city":
"Buri Ram, Thailand","code":"BFV"},{"city":
"Burketown, Australia","code":"BUC"},{"city":
"Burlington, IA","code":"BRL"},{"city":
"Burlington, VT","code":"BTV"},{"city":
"Burnie, Australia","code":"BWT"},{"city":
"Burns Lake, BC","code":"YPZ"},{"city":
"Busan, South Korea - Gimhae","code":"PUS"},{"city":
"Butte, MT","code":"BTM"},{"city":
"Butuan, Philippines","code":"BXU"},{"city":
"Bydgoszcz, Poland","code":"BZG"},{"city":
"Cabo San Lucas, 'Los Cabos', Mexico","code":"SJD"},{"city":
"Caen, France","code":"CFR"},{"city":
"Cagayan De Oro, Philippines - Lumbia","code":"CGY"},{"city":
"Cagliari, Italy","code":"CAG"},{"city":
"Cairns, Australia","code":"CNS"},{"city":
"Cairo, Egypt","code":"CAI"},{"city":
"Cajamarca, Peru","code":"CJA"},{"city":
"Calabar, Nigeria","code":"CBQ"},{"city":
"Calama, Chile","code":"CJC"},{"city":
"Calcutta, India","code":"CCU"},{"city":
"Calgary, AB","code":"YYC"},{"city":
"Cali, Colombia","code":"CLO"},{"city":
"Calvi, France","code":"CLY"},{"city":
"Camaguey, Cuba","code":"CMW"},{"city":
"Cambridge Bay, NU","code":"YCB"},{"city":
"Cambridge, United Kingdom","code":"CBG"},{"city":
"Camodoro, Argentina","code":"CRD"},{"city":
"Campbell River, BC","code":"YBL"},{"city":
"Campbellton, NB - Rail service","code":"XAZ"},{"city":
"Campbeltown, United Kingdom","code":"CAL"},{"city":
"Campeche, Mexico","code":"CPE"},{"city":
"Campina Grande, Brazil","code":"CPV"},{"city":
"Campinas, Brazil","code":"CPQ"},{"city":
"Campo Grande, Brazil","code":"CGR"},{"city":
"Campos, Brazil","code":"CAW"},{"city":
"Canaima, Venezuela","code":"CAS"},{"city":
"Canberra, Australia","code":"CBR"},{"city":
"Cancun, Mexico","code":"CUN"},{"city":
"Cannes, France - Coisette Heliport","code":"JCA"},{"city":
"Cannes, France - Mandelieu","code":"CEQ"},{"city":
"Cannes, France - Vieux Port","code":"QYW"},{"city":
"Canouan, Saint Vincent and the Grenadines","code":"CIW"},{"city":
"Canton/Akron, OH","code":"CAK"},{"city":
"Cap Haitien, Haiti","code":"CAP"},{"city":
"Cape Dorset, NU","code":"YTE"},{"city":
"Cape Girardeau, MO","code":"CGI"},{"city":
"Cape Lisburne, AK","code":"LUR"},{"city":
"Cape Newenham, AK","code":"EHM"},{"city":
"Cape Orford, Papua New Guinea","code":"CPI"},{"city":
"Cape Town, South Africa","code":"CPT"},{"city":
"Cape Vogel, Papua New Guinea","code":"CVL"},{"city":
"Capreol, ON - Rail service","code":"XAW"},{"city":
"Caracas, Venezuela","code":"CCS"},{"city":
"Carajas, Brazil","code":"CKS"},{"city":
"Carbondale, IL","code":"MDH"},{"city":
"Carcassonne, France","code":"CCF"},{"city":
"Cardiff, United Kingdom","code":"CWL"},{"city":
"Carlsbad, CA","code":"CLD"},{"city":
"Carlsbad, NM","code":"CNM"},{"city":
"Carmel, CA","code":"MRY"},{"city":
"Carnarvon, Australia","code":"CVQ"},{"city":
"Carrillo, Costa Rica","code":"RIK"},{"city":
"Cartagena, Colombia","code":"CTG"},{"city":
"Cartwright, NL","code":"YRF"},{"city":
"Carupani, Venezuela","code":"CUP"},{"city":
"Casablanca, Morocco - Anfa","code":"CAS"},{"city":
"Casablanca, Morocco - Mohamed V","code":"CMN"},{"city":
"Cascavel, Brazil","code":"CAC"},{"city":
"Casino, Australia","code":"CSI"},{"city":
"Casper, WY","code":"CPR"},{"city":
"Casselman, ON - Rail service","code":"XZB"},{"city":
"Castaway, Fiji","code":"CST"},{"city":
"Castlegar, BC","code":"YCG"},{"city":
"Castres, France","code":"DCM"},{"city":
"Cat Lake, ON","code":"YAC"},{"city":
"Catamarca, Argentina","code":"CTC"},{"city":
"Catania, Italy","code":"CTA"},{"city":
"Caucasia, Colombia","code":"CAQ"},{"city":
"Caxias Do Sul, Brazil","code":"CXJ"},{"city":
"Cayenne, French Guiana","code":"CAY"},{"city":
"Cayman Brac Is, Cambodia","code":"CYB"},{"city":
"Cayo Largo Del Sur, Cuba","code":"CYO"},{"city":
"Cebu, Philippines - Matan International","code":"CEB"},{"city":
"Cedar City, UT","code":"CDC"},{"city":
"Cedar Rapids, IA","code":"CID"},{"city":
"Cedun, Australia","code":"CED"},{"city":
"Central, AK","code":"CEM"},{"city":
"Ceuta, Spain and Canary Islands","code":"JCU"},{"city":
"Chadron, NE","code":"CDR"},{"city":
"Chah-Bahar, Iran","code":"ZBR"},{"city":
"Chalkyitsik, AK","code":"CIK"},{"city":
"Chambery, France","code":"CMF"},{"city":
"Chambord, QC - Rail service","code":"XCI"},{"city":
"Champaign/Urbana, IL","code":"CMI"},{"city":
"Chandigarh, India","code":"IXC"},{"city":
"Chandler, QC - Rail service","code":"XDL"},{"city":
"Changchun, China","code":"CGQ"},{"city":
"Changde, China","code":"CGD"},{"city":
"Changuinda, Panama","code":"CHX"},{"city":
"Changzhou, China","code":"CZX"},{"city":
"Chania, Greece","code":"CHQ"},{"city":
"Chaoyang, China","code":"CHG"},{"city":
"Chapeco, Brazil","code":"XAP"},{"city":
"Chapleau, ON","code":"YLD"},{"city":
"Charleston, SC","code":"CHS"},{"city":
"Charleston, WV","code":"CRW"},{"city":
"Charleville, Australia","code":"CTL"},{"city":
"Charlotte, NC","code":"CLT"},{"city":
"Charlottesville, VA","code":"CHO"},{"city":
"Charlottetown, NL","code":"YHG"},{"city":
"Charlottetown, PE","code":"YYG"},{"city":
"Chatham Island, New Zealand","code":"CHT"},{"city":
"Chatham, ON","code":"XCM"},{"city":
"Chattanooga, TN","code":"CHA"},{"city":
"Cheboksary, Russia","code":"CSY"},{"city":
"Chefornak, AK","code":"CYF"},{"city":
"Chelybinsk, Russia","code":"CEK"},{"city":
"Chemainus, BC - Rail service","code":"XHS"},{"city":
"Chennai, India","code":"MAA"},{"city":
"Cheongju, South Korea","code":"CJJ"},{"city":
"Cherepovets, Russia","code":"CEE"},{"city":
"Chergdu, China","code":"CTU"},{"city":
"Chester, United Kingdom","code":"CEG"},{"city":
"Chesterfield Inlet, NU","code":"YCS"},{"city":
"Chetumal, Mexico","code":"CTM"},{"city":
"Chevak, AK","code":"VAK"},{"city":
"Chevepovets, Russia","code":"CEE"},{"city":
"Chevery, QC","code":"YHR"},{"city":
"Cheyenne, WY","code":"CYS"},{"city":
"Chi Mei, Taiwan","code":"CMJ"},{"city":
"Chiang Mai, Thailand","code":"CNX"},{"city":
"Chiang Rai, Thailand","code":"CEI"},{"city":
"Chiayi, Taiwan","code":"CYI"},{"city":
"Chibougamau, QC","code":"YMT"},{"city":
"Chicago, IL - All airports","code":"CHI"},{"city":
"Chicago, IL - Midway","code":"MDW"},{"city":
"Chicago, IL - O'Hare","code":"ORD"},{"city":
"Chicayo, Peru","code":"CIX"},{"city":
"Chicken, AK","code":"CKX"},{"city":
"Chico, CA","code":"CIC"},{"city":
"Chifeng, China","code":"CIF"},{"city":
"Chignik, AK -","code":"KCQ"},{"city":
"Chignik, AK - Fisheries","code":"KCG"},{"city":
"Chignik, AK - Lagoon","code":"KCL"},{"city":
"Chihuahua, Mexico","code":"CUU"},{"city":
"Chillan, Chile","code":"YAI"},{"city":
"Chipata, Zambia","code":"CIP"},{"city":
"Chisana, AK","code":"CZN"},{"city":
"Chisasibi, QC","code":"YKU"},{"city":
"Chisholm/Hibbing, MN","code":"HIB"},{"city":
"Chisinau, Republic of Moldova","code":"KIV"},{"city":
"Chita, Russia","code":"HTA"},{"city":
"Chitral, Pakistan","code":"CJL"},{"city":
"Chitre, Panama","code":"CTD"},{"city":
"Chittagong, Bangladesh","code":"CGP"},{"city":
"Choiseul Bay, Solomon Islands","code":"CHY"},{"city":
"Chongqing, China","code":"CKG"},{"city":
"Christchurch, New Zealand","code":"CHC"},{"city":
"Christmas Island, Christmas Island","code":"XCH"},{"city":
"Chuathbaluk, AK","code":"CHU"},{"city":
"Churchill Falls, NL","code":"ZUM"},{"city":
"Churchill, MB","code":"YYQ"},{"city":
"Churchill, MB - Rail service","code":"XAD"},{"city":
"Cicia, Fiji","code":"ICI"},{"city":
"Ciego De Avila, Cuba","code":"AVI"},{"city":
"Cincinnati, OH","code":"CVG"},{"city":
"Circle Hot Springs, AK","code":"CHP"},{"city":
"Circle, AK","code":"IRC"},{"city":
"Ciudad Bolivar, Venezuela","code":"CBL"},{"city":
"Ciudad Del Carmen, Mexico","code":"CME"},{"city":
"Ciudad del Este, Paraguay","code":"AGT"},{"city":
"Ciudad Juarez, Mexico","code":"CJS"},{"city":
"Ciudad Obregon, Mexico","code":"CEN"},{"city":
"Ciudad Victoria, Mexico","code":"CVM"},{"city":
"Clarks Point, AK","code":"CLP"},{"city":
"Clarksburg, WV","code":"CKB"},{"city":
"Clearwater/St Petersburg, FL","code":"PIE"},{"city":
"Clermont-ferrand, France","code":"CFE"},{"city":
"Cleve, Australia","code":"CVC"},{"city":
"Cleveland, OH","code":"CLE"},{"city":
"Cloncurry, Australia","code":"CNJ"},{"city":
"Clovis, NM","code":"CVN"},{"city":
"Club Makokola, Malawi","code":"CMK"},{"city":
"Cluj, Romania","code":"CLJ"},{"city":
"Clyde River, NU","code":"YCY"},{"city":
"Cobar, Australia","code":"CAZ"},{"city":
"Cobija, Bolivia","code":"CIJ"},{"city":
"Cobourg, ON - Rail service","code":"XGJ"},{"city":
"Cochabamba, Bolivia","code":"CBB"},{"city":
"Cochin, India","code":"COK"},{"city":
"Coconut Island, Australia","code":"CNC"},{"city":
"Cocos Islands, Cocos","code":"Keeling"},{"city":
"Cody/Yellowstone, WY","code":"COD"},{"city":
"Coen, Australia","code":"CUQ"},{"city":
"Coffee Point, AK","code":"CFA"},{"city":
"Coffman Cove, AK","code":"KCC"},{"city":
"Coffs Harbor, Australia","code":"CFS"},{"city":
"Coimbatore, India","code":"CJB"},{"city":
"Cold Bay, AK","code":"CDB"},{"city":
"Colima, Mexico","code":"CLQ"},{"city":
"College Station, TX","code":"CLL"},{"city":
"Cologne, Germany - Cologne/Bonn","code":"CGN"},{"city":
"Cologne, Germany - Rail service","code":"QKL"},{"city":
"Colombo, Sri Lanka","code":"CMB"},{"city":
"Colon, Panama","code":"ONX"},{"city":
"Colorado Springs, CO","code":"COS"},{"city":
"Columbia, MO","code":"COU"},{"city":
"Columbia, SC","code":"CAE"},{"city":
"Columbus, GA","code":"CSG"},{"city":
"Columbus, MS","code":"GTR"},{"city":
"Columbus, OH","code":"CMH"},{"city":
"Colville Lake, NT","code":"YCK"},{"city":
"Comox, BC","code":"YQQ"},{"city":
"Conakry, Guinea","code":"CKY"},{"city":
"Concepcion, Chile","code":"CCP"},{"city":
"Concord, CA","code":"CCR"},{"city":
"Concordia, Argentina","code":"COC"},{"city":
"Concordia, KS","code":"CNK"},{"city":
"Condoto, Colombia","code":"COG"},{"city":
"Constanta, Romania","code":"CND"},{"city":
"Constantine, Algeria","code":"CZL"},{"city":
"Contadora, Panama","code":"OTD"},{"city":
"Coober Pedy, Australia","code":"CPD"},{"city":
"Cooktown, Australia","code":"CTN"},{"city":
"Cooma, NS, Australia","code":"OOM"},{"city":
"Coonamble, Australia","code":"CNB"},{"city":
"Copenhagen, Denmark","code":"CPH"},{"city":
"Copiapo, Chile","code":"CPO"},{"city":
"Copper Mountain, CO - Van service","code":"QCE"},{"city":
"Coral Harbour, NU","code":"YZS"},{"city":
"Cordoba, Argentina","code":"COR"},{"city":
"Cordova, AK","code":"CDV"},{"city":
"Cork, Ireland","code":"ORK"},{"city":
"Cornwall, ON","code":"YCC"},{"city":
"Coro, Venezuela","code":"CZE"},{"city":
"Corozal, Belize","code":"CZH"},{"city":
"Corpus Christi, TX","code":"CRP"},{"city":
"Corrientes, Argentina","code":"CNQ"},{"city":
"Cortez, CO","code":"CEZ"},{"city":
"Corumba, Brazil","code":"CMG"},{"city":
"Corvo Island, Portugal","code":"CVU"},{"city":
"Cotabato, Philippines","code":"CBO"},{"city":
"Cotarou, Benin","code":"COC"},{"city":
"Coteau, QC - Rail service","code":"XGK"},{"city":
"Courtenay, BC","code":"YCA"},{"city":
"Cox's Bazar, Bangladesh","code":"CXB"},{"city":
"Cozumel, Mexico","code":"CZM"},{"city":
"Craig Cove, Vanuatu","code":"CCV"},{"city":
"Craig, AK","code":"CGA"},{"city":
"Cranbrook, BC","code":"YXC"},{"city":
"Crescent City, CA","code":"CEC"},{"city":
"Criciuma, Brazil","code":"CCM"},{"city":
"Croker Island, Australia","code":"CKI"},{"city":
"Crooked Creek, AK","code":"CKO"},{"city":
"Crooked Island, Bahamas","code":"CRI"},{"city":
"Cross Lake, MB","code":"YCR"},{"city":
"Crotone, Italy","code":"CRV"},{"city":
"Cruzeiro Do Sul, Brazil","code":"CZS"},{"city":
"Cube Cove, AK","code":"CUW"},{"city":
"Cucata, Colombia","code":"CUC"},{"city":
"Cuenca, Ecuador","code":"CUE"},{"city":
"Cuernavaca, Mexico","code":"CVJ"},{"city":
"Cuiaba, Brazil","code":"CGB"},{"city":
"Culiacan, Mexico","code":"CUL"},{"city":
"Cumana, Venezuela","code":"CUM"},{"city":
"Cumberland, MD","code":"CBE"},{"city":
"Cunnamulla, Australia","code":"CMA"},{"city":
"Curacao, Netherlands Antilles","code":"CUR"},{"city":
"Curitiba, Brazil","code":"CWB"},{"city":
"Cuzco, Peru","code":"CUZ"},{"city":
"Da Nang, Viet Nam","code":"DAD"},{"city":
"Dabra, Indonesia","code":"DRH"},{"city":
"Daegu, South Korea","code":"TAE"},{"city":
"Dakar, Senegal","code":"DKR"},{"city":
"Dakhla, Morocco","code":"VIL"},{"city":
"Dalaman, Turkey","code":"DLM"},{"city":
"Dalat, Viet Nam - Lienkhang DLI)","code":""},{"city":
"Dali City, China","code":"DLU"},{"city":
"Dalian, China","code":"DLC"},{"city":
"Dallas, TX - Dallas/Ft Worth Intl.","code":"DFW"},{"city":
"Dallas, TX - Love Field","code":"DAL"},{"city":
"Damascus, Syrian Arab Republic","code":"DAM"},{"city":
"Dammam, Saudi Arabia","code":"DMM"},{"city":
"Dangriga, Belize","code":"DGA"},{"city":
"Dar Es Salaam, Tanzania","code":"DAR"},{"city":
"Darnley Island, QL, Australia","code":"NLF"},{"city":
"Daru, Papua New Guinea","code":"DAU"},{"city":
"Darwin, Northern Territory, Australia","code":"DRW"},{"city":
"Datadawai, Indonesia","code":"DTD"},{"city":
"Dauphin, MB","code":"YDN"},{"city":
"Davao, Philipines - Mati","code":"DVO"},{"city":
"David, Panama","code":"DAV"},{"city":
"Davis Inlet, NL","code":"YDI"},{"city":
"Dawe, Myanmar","code":"TVY"},{"city":
"Dawson City, YT","code":"YDA"},{"city":
"Dawson Creek, BC","code":"YDQ"},{"city":
"Daxian, China","code":"DAX"},{"city":
"Dayang, China","code":"DYG"},{"city":
"Daydream Is, Australia","code":"DDI"},{"city":
"Dayton, OH","code":"DAY"},{"city":
"Daytona Beach, FL","code":"DAB"},{"city":
"Deauville, France","code":"DOL"},{"city":
"Debra Marcos, Ethiopia","code":"DBM"},{"city":
"Debra Tabor, Ethiopia","code":"DBT"},{"city":
"Decatur, IL","code":"DEC"},{"city":
"Deer Lake, NL","code":"YDF"},{"city":
"Deer Lake, ON","code":"YVZ"},{"city":
"Deering, AK","code":"DRG"},{"city":
"Deirezzor, Syria - Al Jafrah","code":"DEZ"},{"city":
"Del Reo, TX","code":"DRT"},{"city":
"Delhi, India","code":"DEL"},{"city":
"Deline, NT","code":"YWJ"},{"city":
"Delta Junction, AK","code":"DJN"},{"city":
"Dembidollo, Ethiopia","code":"DEM"},{"city":
"Denham, Australia","code":"DNM"},{"city":
"Denizli, Turkey","code":"DNZ"},{"city":
"Denpasar Bali, Indonesia","code":"DPS"},{"city":
"Denver, CO - International","code":"DEN"},{"city":
"Denver, CO - Longmont Bus service","code":"QWM"},{"city":
"Dera Ghazi, Pakistan","code":"DEA"},{"city":
"Dera Ismail Khan, Pakistan","code":"DSK"},{"city":
"Derby, Australia","code":"DRB"},{"city":
"Derim, Papua New Guinea","code":"DER"},{"city":
"Des Moines, IA","code":"DSM"},{"city":
"Dessie, Ethiopia","code":"DSE"},{"city":
"Detroit, MI - All airports","code":"DTT"},{"city":
"Detroit, MI - Metro/Wayne County","code":"DTW"},{"city":
"Devil's Lake, ND","code":"DVL"},{"city":
"Devonport, Australia","code":"DPO"},{"city":
"Dhaka, Bangledesh - Zia International","code":"DAC"},{"city":
"Dibrugarn, India","code":"DIB"},{"city":
"Dickinson, ND","code":"DIK"},{"city":
"Dien Bien Phu, Viet Nam - Gialam","code":"DIN"},{"city":
"Dijon, France","code":"DIJ"},{"city":
"Dili, Indonesia","code":"DIL"},{"city":
"Dillingham, AK","code":"DLG"},{"city":
"Dillons Bay, Vanuata","code":"DLY"},{"city":
"Dimapur, India","code":"DMU"},{"city":
"Dinard, France","code":"DNR"},{"city":
"Dipolog, Philippines","code":"DPL"},{"city":
"Dire Dawa, Ethiopia","code":"DIR"},{"city":
"Div, India","code":"DIU"},{"city":
"Diyarbakir, Turkey","code":"DIY"},{"city":
"Djanet, Algeria","code":"DJG"},{"city":
"Djerba, Tunisia","code":"DJE"},{"city":
"Djibouti, Djibouti","code":"JIB"},{"city":
"Dnepropetrovsk, Ukraine","code":"DNK"},{"city":
"Dobo, Indonesia","code":"DOB"},{"city":
"Dodge City, KS","code":"DDC"},{"city":
"Dodoima, Papua New Guinea","code":"DDM"},{"city":
"Dodoma, Tanzania","code":"DOD"},{"city":
"Doha, Qatar","code":"DOH"},{"city":
"Dominica, Dominica - Cane Field","code":"DCF"},{"city":
"Dominica, Dominica - Melville Hall","code":"DOM"},{"city":
"Donegal, Ireland","code":"CFN"},{"city":
"Donetsk, Ukraine","code":"DOK"},{"city":
"Dongola, Sudan","code":"DOG"},{"city":
"Doomadgee, Australia","code":"DMD"},{"city":
"Dortmund, Germany","code":"DTM"},{"city":
"Dothan, AL","code":"DHN"},{"city":
"Dourados, Brazil","code":"DOU"},{"city":
"Dovala, Cameroon","code":"DLA"},{"city":
"Dresden, Germany","code":"DRS"},{"city":
"Drummondville, QC - Rail service","code":"XDM"},{"city":
"Dryden, ON","code":"YHD"},{"city":
"Dubai, United Arab Emirates - Bus Station","code":"XNB"},{"city":
"Dubai, United Arab Emirates - International","code":"DXB"},{"city":
"Dubbo, Australia","code":"DBO"},{"city":
"Dublin, Ireland","code":"DUB"},{"city":
"Dubois, PA","code":"DUJ"},{"city":
"Dubrovnik, Croatia","code":"DBV"},{"city":
"Dubuque, IA","code":"DBQ"},{"city":
"Duluth, MN","code":"DLH"},{"city":
"Dumaguete, Philippines","code":"DGT"},{"city":
"Dumai, Indonesia","code":"DUM"},{"city":
"Duncan/Quam, BC","code":"DUQ"},{"city":
"Dundee, United Kingdom","code":"DND"},{"city":
"Dunedin, New Zealand","code":"DUD"},{"city":
"Dunhuang, China","code":"DNH"},{"city":
"Dunk Island, Australia","code":"DKI"},{"city":
"Durango, CO","code":"DRO"},{"city":
"Durango, Mexico","code":"DGO"},{"city":
"Durban, South Africa","code":"DUR"},{"city":
"Durham, NC","code":"RDU"},{"city":
"Durham/Raleigh, NC","code":"RDU"},{"city":
"Dushanbe, Tajikistan","code":"DYU"},{"city":
"Dusseldorf, Germany - International","code":"DUS"},{"city":
"Dusseldorf, Germany - Moenchen-Gl.","code":"MGL"},{"city":
"Dusseldorf, Germany - Rail service","code":"QDU"},{"city":
"Dutch Harbor, AK","code":"DUT"},{"city":
"Dzaoudzi, Mayotte","code":"DZA"},{"city":
"East London, South Africa","code":"ELS"},{"city":
"East Main, QC","code":"ZEM"},{"city":
"Easton, PA","code":"ABE"},{"city":
"Eau Claire, WI","code":"EAU"},{"city":
"Ebon, Marshall Islands","code":"EBO"},{"city":
"Eday, United Kingdom","code":"EOI"},{"city":
"Edinburgh, United Kingdom","code":"EDI"},{"city":
"Edmonton, AB - International","code":"YEG"},{"city":
"Edmonton, AB - Rail service","code":"XZL"},{"city":
"Edna Bay, AK","code":"EDA"},{"city":
"Edremit, Turkey","code":"EDO"},{"city":
"Edward River, Australia","code":"EDR"},{"city":
"Eek, AK","code":"EEK"},{"city":
"Egilsstadir, Iceland","code":"EGS"},{"city":
"Eindhoven, Netherlands","code":"EIN"},{"city":
"Eisenach, Germany","code":"EIB"},{"city":
"Ekaterinburg, Russia","code":"SVX"},{"city":
"Ekuk, AK","code":"KKU"},{"city":
"Ekwok, AK","code":"KEK"},{"city":
"El Bolsan, Argentina","code":"EHL"},{"city":
"El Centro, CA","code":"IPL"},{"city":
"El Dorado, AR","code":"ELD"},{"city":
"El Fasher, Sudan","code":"ELF"},{"city":
"El Maiten, Argentina","code":"EMX"},{"city":
"El Obeid, Sudan","code":"EBD"},{"city":
"El Oved, Algeria","code":"ELU"},{"city":
"El Paso, TX","code":"ELP"},{"city":
"El Portillo/Samana, Dominician Republic - El Portillo","code":"EPS"},{"city":
"El Real, Panama","code":"ELE"},{"city":
"El Salvador, Chile","code":"ESR"},{"city":
"El Vigia, Venezuela","code":"VIG"},{"city":
"El Yopal, Colombia","code":"EYP"},{"city":
"Elat, Italy","code":"ETH"},{"city":
"Elazig, Turkey","code":"EZS"},{"city":
"Elba Island, Italy","code":"EBA"},{"city":
"Elcho Island, Australia","code":"ELC"},{"city":
"Eldoret, Kenya","code":"EDL"},{"city":
"Eleuthera Island, Bahamas","code":"ELH"},{"city":
"Elfin Cove, AK","code":"ELV"},{"city":
"Elim, AK","code":"ELI"},{"city":
"Elista, Russia","code":"ESL"},{"city":
"Elko, NV","code":"EKO"},{"city":
"Elmira, NY","code":"ELM"},{"city":
"Ely, MN","code":"LYU"},{"city":
"Emae, Vanuata","code":"EAE"},{"city":
"Embessa, Papua New Guinea","code":"EMS"},{"city":
"Emerald, Australia","code":"EMD"},{"city":
"Emmonak, AK","code":"EMK"},{"city":
"Emo, Papua New Guinea","code":"EMO"},{"city":
"Enarotali, Indonesia","code":"EWI"},{"city":
"Ende, Indonesia","code":"ENE"},{"city":
"Endicott, NY","code":"BGM"},{"city":
"Enewetak Island, Marshall Islands","code":"ENT"},{"city":
"Enid, OK","code":"WDG"},{"city":
"Enontekio, Finland","code":"ENF"},{"city":
"Enshi, China","code":"ENH"},{"city":
"Entebbe, Uganda","code":"EBB"},{"city":
"Enugu, Nigeria","code":"ENU"},{"city":
"Epinal, France","code":"EPL"},{"city":
"Ercan, Cyprus","code":"ECN"},{"city":
"Erfurt, Germany","code":"ERF"},{"city":
"Erie, PA","code":"ERI"},{"city":
"Erzincan, Turkey","code":"ERC"},{"city":
"Erzurum, Turkey","code":"ERZ"},{"city":
"Esbjerg, Denmark - Esbjerg Airport","code":"EBJ"},{"city":
"Esbjerg, Denmark - Rail service","code":"ZBB"},{"city":
"Escanaba, MI","code":"ESC"},{"city":
"Esmeraldas, Ecuador","code":"ESM"},{"city":
"Esperance, Australia","code":"EPR"},{"city":
"Espiritu Santo, Vanuatu","code":"SON"},{"city":
"Esquel, Argentina","code":"EQS"},{"city":
"Esquimalt, BC","code":"YPF"},{"city":
"Eugene, OR","code":"EUG"},{"city":
"Eureka, NV","code":"EUE"},{"city":
"Eureka/Arcata, CA","code":"ACV"},{"city":
"Evansville, IN","code":"EVV"},{"city":
"Eveter, United Kingdom","code":"EXT"},{"city":
"Ewer, Indonesia","code":"EWE"},{"city":
"Exmouth Gulf, Australia","code":"EXM"},{"city":
"Fagernes, Norway","code":"VDB"},{"city":
"Fair Isle, United Kingdom","code":"FIE"},{"city":
"Fairbanks, AK","code":"FAI"},{"city":
"Faisalabad, Pakistan","code":"LYP"},{"city":
"Fajard, Puerto Rico","code":"FAJ"},{"city":
"Fak Fak, Indonesia","code":"FKQ"},{"city":
"Fakarava, French Polynesia","code":"FAV"},{"city":
"Farafangana, Madagascar","code":"RVA"},{"city":
"Fargo, ND","code":"FAR"},{"city":
"Farmington, NM","code":"FMN"},{"city":
"Faro, Portugal","code":"FAO"},{"city":
"Faroe Islands, Faroe Islands","code":"FAE"},{"city":
"Fayetteville, AR - Municipal/Drake","code":"FYV"},{"city":
"Fayetteville, AR - Northwest Arkansas Regional","code":"XNA"},{"city":
"Fayetteville, NC","code":"FAY"},{"city":
"Fera Island, Solomon Islands","code":"FRE"},{"city":
"Fergana, Uzbekistan","code":"FEG"},{"city":
"Fernando De Noronha, Brazil","code":"FEN"},{"city":
"Fez, Morocco","code":"FEZ"},{"city":
"Fianarantsoa, Madagascar","code":"WFI"},{"city":
"Figari, France","code":"FSC"},{"city":
"Filton, United Kingdom","code":"FZO"},{"city":
"Finkenwerder, Germany","code":"XFW"},{"city":
"Fitzroy Crossing, Australia","code":"FIZ"},{"city":
"Flagstaff, AZ","code":"FLG"},{"city":
"Flensburg, Germany","code":"FLF"},{"city":
"Flin Flon, MB","code":"YFO"},{"city":
"Flint, MI","code":"FNT"},{"city":
"Florence, Italy - Gal Galilei","code":"PSA"},{"city":
"Florence, Italy - Peretola","code":"FLR"},{"city":
"Florence, SC","code":"FLO"},{"city":
"Florence/Muscle Shoals/Sheffield, AL","code":"MSL"},{"city":
"Florencia, Colombia","code":"FLA"},{"city":
"Flores Island, Portugal","code":"FLW"},{"city":
"Flores, Guatemala","code":"FRS"},{"city":
"Florianopolis, Brazil","code":"FLN"},{"city":
"Floro, Norway","code":"FRO"},{"city":
"Foggia, Italy","code":"FOG"},{"city":
"Fond du Lac, SK","code":"ZFD"},{"city":
"Forde, Norway","code":"FDE"},{"city":
"Formosa, Argentina","code":"FMA"},{"city":
"Fort Albany, ON","code":"YFA"},{"city":
"Fort Chipewyan, AB","code":"YPY"},{"city":
"Fort Collins/Loveland, CO - Bus service","code":"QWF"},{"city":
"Fort Collins/Loveland, CO - Municipal Airport","code":"FNL"},{"city":
"Fort Dauphin, Madagascar","code":"FTU"},{"city":
"Fort De France, Martinique","code":"FDF"},{"city":
"Fort Dodge, IA","code":"FOD"},{"city":
"Fort Frances, ON","code":"YAG"},{"city":
"Fort Good Hope, NT","code":"YGH"},{"city":
"Fort Hope, ON","code":"YFH"},{"city":
"Fort Lauderdale, FL","code":"FLL"},{"city":
"Fort Leonard Wood, MO","code":"TBN"},{"city":
"Fort Mcmurray, AB","code":"YMM"},{"city":
"Fort Myers, FL","code":"RSW"},{"city":
"Fort Nelson, BC","code":"YYE"},{"city":
"Fort Severn, ON","code":"YER"},{"city":
"Fort Simpson, NT","code":"YFS"},{"city":
"Fort Smith, AR","code":"FSM"},{"city":
"Fort Smith, NT","code":"YSM"},{"city":
"Fort St John, BC","code":"YXJ"},{"city":
"Fort Walton Beach, FL","code":"VPS"},{"city":
"Fort Wayne, IN","code":"FWA"},{"city":
"Fort Worth/Dallas, TX","code":"DFW"},{"city":
"Fortaleza, Brazil","code":"FOR"},{"city":
"Fox Harbour/St Lewis, NL","code":"YFX"},{"city":
"Franca, Brazil","code":"FRC"},{"city":
"Franceville, Gabon","code":"MVB"},{"city":
"Francistown, Botswana","code":"FRW"},{"city":
"Frankfurt, Germany - Hahn","code":"HHN"},{"city":
"Frankfurt, Germany - International","code":"FRA"},{"city":
"Franklin, PA","code":"FKL"},{"city":
"Fredericia, Denmark","code":"ZBJ"},{"city":
"Fredericton Junction, NB - Rail service","code":"XFC"},{"city":
"Fredericton, NB","code":"YFC"},{"city":
"Freeport, Bahamas","code":"FPO"},{"city":
"Freetown, Sierra Leone - Lungi Intl","code":"FNA"},{"city":
"Fresno, CA","code":"FAT"},{"city":
"Friedrichshafer, Germany","code":"FDH"},{"city":
"Fuerteventura, Spain","code":"FUE"},{"city":
"Fukue, Japan","code":"FUJ"},{"city":
"Fukuoka, Japan","code":"FUK"},{"city":
"Fukushima, Japan","code":"FKS"},{"city":
"Funafuti Atol, Tuvalu","code":"FUN"},{"city":
"Funchal, Portugal","code":"FNC"},{"city":
"Futuna Island, Vanuatu","code":"FTA"},{"city":
"Futuna Island, Wallis and Futuna Islands","code":"FUT"},{"city":
"Fuyang, China","code":"FUG"},{"city":
"Fuzhou, China","code":"FOC"},{"city":
"Gaborone, Botswana","code":"GBE"},{"city":
"Gafsa, Tunisia","code":"GAF"},{"city":
"Gagnoa, Cote D'Ivoire","code":"GGN"},{"city":
"Gainesville, FL","code":"GNV"},{"city":
"Galapagos, Ecuador","code":"GPS"},{"city":
"Gallivare, Sweden","code":"GEV"},{"city":
"Gallup, NM","code":"GUP"},{"city":
"Galway, Ireland","code":"GWY"},{"city":
"Gamba, Gabon","code":"GAX"},{"city":
"Gambela, Ethiopia","code":"GMB"},{"city":
"Gan Island, Maldives","code":"GAN"},{"city":
"Gander, NL","code":"YQX"},{"city":
"Gangneung, South Korea","code":"KAG"},{"city":
"Garachine, Panama","code":"GHE"},{"city":
"Garaina, Papua New Guinea","code":"GAR"},{"city":
"Garasa, Papua New Guinea","code":"GRL"},{"city":
"Garden City, KS","code":"GCK"},{"city":
"Garden Point, Australia","code":"GPN"},{"city":
"Garoua, Cameroon","code":"GOV"},{"city":
"Gary, IN","code":"GYY"},{"city":
"Gaspe, QC","code":"YGP"},{"city":
"Gaspe, QC - Rail service","code":"XDD"},{"city":
"Gassim, Saudi Arabia","code":"ELQ"},{"city":
"Gaua, Vanuatu","code":"ZGU"},{"city":
"Gawahati, India","code":"GAU"},{"city":
"Gaza City, Occupied Palestinian Territory","code":"GZA"},{"city":
"Gaziatep, Turkey","code":"GZT"},{"city":
"Gdansk, Poland","code":"GDN"},{"city":
"Gebe, Indonesia","code":"GEB"},{"city":
"Gelendzik, Russia","code":"GDZ"},{"city":
"Geneina, Sudan","code":"EGN"},{"city":
"General Santos, Philippines","code":"GES"},{"city":
"Geneva, Switzerland","code":"GVA"},{"city":
"Genoa, Italy","code":"GOA"},{"city":
"George Town, Bahamas","code":"GGT"},{"city":
"George, South Africa","code":"GRJ"},{"city":
"Georgetown, Guyana","code":"GEO"},{"city":
"Georgetown, ON - Rail service","code":"XHM"},{"city":
"Geraldton, Australia,","code":"GET"},{"city":
"Gerona, Spain","code":"GRO"},{"city":
"Gethsemani, QC","code":"ZGS"},{"city":
"Ghadames, Libya","code":"LTD"},{"city":
"Ghardala, Algeria","code":"GHA"},{"city":
"Ghat, Libya","code":"GHT"},{"city":
"Gibraltar, Gibraltar","code":"GIB"},{"city":
"Gilgit, Pakistan","code":"GIL"},{"city":
"Gillam, MB","code":"YGX"},{"city":
"Gillette, WY","code":"GCC"},{"city":
"Gillies Bay, BC","code":"YGB"},{"city":
"Gisborne, New Zealand","code":"GIS"},{"city":
"Gizan, Saudi Arabia","code":"GIZ"},{"city":
"Gizo, Solomon Islands","code":"GZO"},{"city":
"Gjoa Haven, NU","code":"YHK"},{"city":
"Gladewater/Kilgore, TX","code":"GGG"},{"city":
"Gladstone, Australia","code":"GLT"},{"city":
"Glasgow, MT","code":"GGW"},{"city":
"Glasgow, United Kingdom - Glasgow International","code":"GLA"},{"city":
"Glasgow, United Kingdom - Prestwick","code":"PIK"},{"city":
"Glen Innes, Australia","code":"GLI"},{"city":
"Glencoe, ON - Rail service","code":"XZC"},{"city":
"Glendive, MT","code":"GDV"},{"city":
"Goa, India","code":"GOI"},{"city":
"Goba, Ethiopia","code":"GOB"},{"city":
"Gobernador Gregores, Argentina","code":"GGS"},{"city":
"Gode/Iddidole, Ethopia","code":"GDE"},{"city":
"Gods Narrows, MB","code":"YGO"},{"city":
"Gods River, MB","code":"ZGI"},{"city":
"Goiania, Brazil","code":"GYN"},{"city":
"Gold Coast, QL, Australia","code":"OOL"},{"city":
"Golfito, Costa Rica","code":"GLF"},{"city":
"Golmud, China","code":"GOQ"},{"city":
"Golovin, AK","code":"GLV"},{"city":
"Gonalia, Papua New Guinea","code":"GOE"},{"city":
"Gondari, Ethiopia","code":"GDQ"},{"city":
"Goodnews Bay, AK","code":"GNU"},{"city":
"Goose Bay, NL","code":"YYR"},{"city":
"Gore, Ethiopia","code":"GOR"},{"city":
"Goroka, Papua New Guinea","code":"GKA"},{"city":
"Gorontalo, Indonesia","code":"GTO"},{"city":
"Gothenburg, Sweden - Landvetter","code":"GOT"},{"city":
"Gothenburg, Sweden - Saeve","code":"GSE"},{"city":
"Goulburn Island, Australia","code":"GBL"},{"city":
"Goundam, Mali","code":"GUD"},{"city":
"Gove, Australia","code":"GOV"},{"city":
"Governador Valadares, Brazil","code":"GVR"},{"city":
"Governors Harbour, Bahamas","code":"GHB"},{"city":
"Goya, CR, Argentina","code":"OYA"},{"city":
"Gozo, Malta","code":"GZM"},{"city":
"Graciosa Island, Portugal","code":"GRW"},{"city":
"Grafton, Australia","code":"GFN"},{"city":
"Granada, Spain","code":"GRX"},{"city":
"Grand Canyon, AZ - Heliport","code":"JGC"},{"city":
"Grand Canyon, AZ - National Park","code":"GCN"},{"city":
"Grand Cayman, Cayman Islands","code":"GCM"},{"city":
"Grand Forks, ND","code":"GFK"},{"city":
"Grand Island, NE","code":"GRI"},{"city":
"Grand Junction, CO","code":"GJT"},{"city":
"Grand Rapids, MI","code":"GRR"},{"city":
"Grand Rapids, MN","code":"GPZ"},{"city":
"Grand Turk Island, Turks and Caicos Islands","code":"GDT"},{"city":
"Grande Prairie, AB","code":"YQU"},{"city":
"Grayling, AK","code":"KGX"},{"city":
"Graz, Austria","code":"GRZ"},{"city":
"Great Falls, MT","code":"GTF"},{"city":
"Green Bay, WI","code":"GRB"},{"city":
"Greensboro, NC","code":"GSO"},{"city":
"Greenville, MS","code":"GLH"},{"city":
"Greenville, NC","code":"PGV"},{"city":
"Greenville/Spartanburg, SC","code":"GSP"},{"city":
"Grenada, Grenada,","code":"GND"},{"city":
"Grenoble, France","code":"GNB"},{"city":
"Griffith, Australia","code":"GFF"},{"city":
"Grimsby, ON","code":"XGY"},{"city":
"Grimsey, Iceland","code":"GRY"},{"city":
"Grise Fiord, NU","code":"YGZ"},{"city":
"Groennedal, Greenland","code":"JGR"},{"city":
"Groningen, Netherlands","code":"GRQ"},{"city":
"Groofe Eylandt, Australia","code":"GTE"},{"city":
"Groton/New London, CT","code":"GON"},{"city":
"Guadalajara, Mexico","code":"GDL"},{"city":
"Guam","code":"GUM"},{"city":
"Guanaja, Honduras","code":"GJA"},{"city":
"Guanajuato, Mexico","code":"BJX"},{"city":
"Guangzhou, China","code":"CAN"},{"city":
"Guantanamo, Cuba","code":"GAO"},{"city":
"Guatemala City, Guatemala","code":"GUA"},{"city":
"Guayaquil, Ecuador","code":"GYE"},{"city":
"Guayaramerin, Bolivia","code":"GYA"},{"city":
"Guaymas, Mexico","code":"GYM"},{"city":
"Guelph, ON - Rail service","code":"XIA"},{"city":
"Guernsey, United Kingdom","code":"GCI"},{"city":
"Guerrero Negro, Mexico","code":"GUB"},{"city":
"Guilin, China","code":"KWL"},{"city":
"Guiria, Venezuela","code":"GUI"},{"city":
"Gulfport, MS","code":"GPT"},{"city":
"Gulu, Uganda","code":"ULU"},{"city":
"Gulyang, China","code":"KWE"},{"city":
"Gunnison, CO","code":"GUC"},{"city":
"Gunsan, South Korea","code":"KUV"},{"city":
"Gurayat, Saudi Arabia","code":"URY"},{"city":
"Gustavus, AK","code":"GST"},{"city":
"Gwadar, Pakistan","code":"GWD"},{"city":
"Gwalior, India","code":"GWL"},{"city":
"Gwangju, South Korea","code":"KWJ"},{"city":
"Gyandzha, Azerbaijan","code":"KVD"},{"city":
"Gyourmri, Armenia","code":"LWN"},{"city":
"HaApa, Tonga","code":"HPA"},{"city":
"Hachijo Jima, Japan","code":"HAC"},{"city":
"Hagerstown, MD","code":"HGR"},{"city":
"Hagfors, Sweden","code":"HFS"},{"city":
"Haifa, Israel","code":"HFA"},{"city":
"Haikou, China","code":"HAK"},{"city":
"Hail, Saudi Arabia","code":"HAS"},{"city":
"Hailar, China","code":"HLD"},{"city":
"Hailey, ID","code":"SUN"},{"city":
"Haines, AK","code":"HNS"},{"city":
"Haiphong, Viet Nam - Catbi","code":"HPH"},{"city":
"Hakodate, Japan","code":"HKD"},{"city":
"Halberstadt, Germany","code":"ZHQ"},{"city":
"Halifax, NS - International","code":"YHZ"},{"city":
"Halifax, NS - Rail service","code":"XDG"},{"city":
"Hall Beach, NU","code":"YUX"},{"city":
"Halls Creek, Australia","code":"HCQ"},{"city":
"Halmstad, Sweden","code":"HAD"},{"city":
"Hamburg, Germany - Fuhisbuettel","code":"HAM"},{"city":
"Hamburg, Germany - Luebeck","code":"LBC"},{"city":
"Hamilton Island, Australia","code":"HTI"},{"city":
"Hamilton, Bermuda","code":"BDA"},{"city":
"Hamilton, New Zealand","code":"HLZ"},{"city":
"Hamilton, ON","code":"YHM"},{"city":
"Hammerfest, Norway","code":"HFT"},{"city":
"Hampton, VA","code":"PHF"},{"city":
"Hana, HI - Island of Maui","code":"HNM"},{"city":
"Hanapepe, HI","code":"PAK"},{"city":
"Hancock, MI","code":"CMX"},{"city":
"Hangzhou, China","code":"HGH"},{"city":
"Hanimaadhoo, Maldives","code":"HAQ"},{"city":
"Hanoi, Viet Nam - Noibai","code":"HAN"},{"city":
"Hanover, Germany","code":"HAJ"},{"city":
"Hanover, NH","code":"LEB"},{"city":
"Hanzhang, China","code":"HZG"},{"city":
"Harare, Zimbabwe","code":"HRE"},{"city":
"Harbin, China","code":"HRB"},{"city":
"Hargeisa, Somolia","code":"HGA"},{"city":
"Harlingen, TX","code":"HRL"},{"city":
"Harrisburg, PA","code":"MDT"},{"city":
"Harrison, AR","code":"HRO"},{"city":
"Harstad-Narvik, Norway","code":"EVE"},{"city":
"Hartford, CT","code":"BDL"},{"city":
"Hassi Messaoud, Algeria","code":"HME"},{"city":
"Hasvik, Norway","code":"HAA"},{"city":
"Hat Yai, Thailand","code":"HDY"},{"city":
"Hateruma, Japan","code":"HTR"},{"city":
"Haugesund, Norway","code":"HAU"},{"city":
"Havana, Cuba","code":"HAV"},{"city":
"Havasupai, AZ","code":"HAE"},{"city":
"Havre St Pierre, QC","code":"YGV"},{"city":
"Havre, MT","code":"HVR"},{"city":
"Hay River, NT","code":"YHY"},{"city":
"Hayden, CO","code":"HDN"},{"city":
"Hayman Island, Australia","code":"HIS"},{"city":
"Hays, KS","code":"HYS"},{"city":
"Healy Lake, AK","code":"HKB"},{"city":
"Hefei, China","code":"HFE"},{"city":
"Heidelberg, Germany","code":"HDB"},{"city":
"Helena, MT","code":"HLN"},{"city":
"Helgoland, Germany","code":"HGL"},{"city":
"Helsinki, Finland","code":"HEL"},{"city":
"Hendersonville, NC","code":"AVL"},{"city":
"Heno, Myanmar","code":"HEH"},{"city":
"Heraklian, Greece","code":"HER"},{"city":
"Heringsdorf, Germany","code":"HDF"},{"city":
"Hermavan, Sweden","code":"HMV"},{"city":
"Hermosillo, Mexico","code":"HMO"},{"city":
"Herning, Denmark","code":"XAK"},{"city":
"Hervey Bay, Australia","code":"HVB"},{"city":
"Hervey, QC - Rail service","code":"XDU"},{"city":
"Hibbing/Chisholm, MN","code":"HIB"},{"city":
"Hickory, NC","code":"HKY"},{"city":
"High Level, AB","code":"YOJ"},{"city":
"High Point, NC","code":"GSO"},{"city":
"Hilo, HI - Island of Hawaii","code":"ITO"},{"city":
"Hilton Head, SC","code":"HHH"},{"city":
"Hiroshima, Japan - Hiroshima West","code":"HIW"},{"city":
"Hiroshima, Japan - International","code":"HIJ"},{"city":
"Hivaro, Papua New Guinea","code":"HIT"},{"city":
"Ho Chi Minh City, Viet Nam","code":"SGN"},{"city":
"Hobart, Australia","code":"HBA"},{"city":
"Hobbs, NM","code":"HBB"},{"city":
"Hodeidah, Yemen","code":"HOD"},{"city":
"Hoedspruit, South Africa","code":"HDS"},{"city":
"Hof, Germany","code":"HOQ"},{"city":
"Hofuf, Saudi Arabia","code":"HOF"},{"city":
"Hohhot, China","code":"HET"},{"city":
"Hokitika, New Zealand","code":"HKK"},{"city":
"Holguin, Cuba","code":"HOG"},{"city":
"Hollis, AK","code":"HYL"},{"city":
"Holman, NT","code":"YHI"},{"city":
"Holy Cross, AK","code":"HCR"},{"city":
"Homer, AK","code":"HOM"},{"city":
"Hong Kong, Hong Kong","code":"HKG"},{"city":
"Honiara, Solomon Islands","code":"HIR"},{"city":
"Honningsvag, Norway","code":"HVG"},{"city":
"Honolulu, HI - Island of Oahu","code":"HNL"},{"city":
"Hooker, Australia","code":"HOK"},{"city":
"Hoolehua, HI - Island of Molokai","code":"MKK"},{"city":
"Hoonah, AK","code":"HNH"},{"city":
"Hooper Bay, AK","code":"HPB"},{"city":
"Hopedale, NL","code":"YHO"},{"city":
"Horn Island Australia","code":"HID"},{"city":
"Hornafjordur, Iceland","code":"HFN"},{"city":
"Horta, Portugal","code":"HOR"},{"city":
"Hoskins, Papua New Guinea","code":"HKN"},{"city":
"Hot Springs, AR","code":"HOT"},{"city":
"Hotan, China","code":"HTN"},{"city":
"Houeisay, Laos","code":"HOE"},{"city":
"Houn, Libya","code":"HUQ"},{"city":
"Houston, BC - Bus station","code":"ZHO"},{"city":
"Houston, TX - All airports","code":"HOU"},{"city":
"Houston, TX - Hobby","code":"HOU"},{"city":
"Houston, TX - Intercontinental","code":"IAH"},{"city":
"Huahine, French Polynesia","code":"HUH"},{"city":
"Hualien, Taiwan - Phi Bai","code":"HUN"},{"city":
"Hualtin, Thailand","code":"HHQ"},{"city":
"Huanuco, French Polynesia","code":"HUU"},{"city":
"Huargyan, China","code":"HYN"},{"city":
"Huatulco, Mexico","code":"HUX"},{"city":
"Hudiksvall, Sweden","code":"HUV"},{"city":
"Hudson Bay, SK","code":"YHB"},{"city":
"Hue, Viet Nam","code":"HUI"},{"city":
"Hughenden, Australia","code":"HGD"},{"city":
"Hughes, AK","code":"HUS"},{"city":
"Hultsfred, Sweden","code":"HLF"},{"city":
"Humberside, United Kingdom","code":"HUY"},{"city":
"Huntington, WV/Ashland, KY","code":"HTS"},{"city":
"Huntsville, AL","code":"HSV"},{"city":
"Hurghada, Egypt","code":"HRG"},{"city":
"Huron, SD","code":"HON"},{"city":
"Huslia, AK","code":"HSL"},{"city":
"Hwange Nat Park, Zimbabwe","code":"HWN"},{"city":
"Hyannis, MA","code":"HYA"},{"city":
"Hydaburg, AK","code":"HYG"},{"city":
"Hyderabad, India","code":"HYD"},{"city":
"Iasi, Romania","code":"IAS"},{"city":
"Ibague, Colombia","code":"IBE"},{"city":
"Ibiza, Spain","code":"IBZ"},{"city":
"Idaho Falls, ID","code":"IDA"},{"city":
"Igarka, Russia","code":"IAA"},{"city":
"Igiugig, AK","code":"IGG"},{"city":
"Igloolik, NU","code":"YGT"},{"city":
"Iguassu Falls, PR, Brazil","code":"IGU"},{"city":
"Iguazu, Argentina","code":"IGR"},{"city":
"Ihu, Papua New Guinea","code":"IHU"},{"city":
"Ile Des Pins, New Caledonia","code":"ILP"},{"city":
"Iles De La Madeleine, QC","code":"YGR"},{"city":
"Ilford, MB","code":"ILF"},{"city":
"Ilheus, Brazil","code":"IOS"},{"city":
"Iliamna, AK","code":"ILI"},{"city":
"Illaga, Indonesia","code":"ILA"},{"city":
"Iloilo, Philippines - Mandurriao","code":"ILO"},{"city":
"Ilu, Indonesia","code":"IUL"},{"city":
"Ilulissat, Greenland","code":"JAV"},{"city":
"Imperatriz, Brazil","code":"IMP"},{"city":
"Imperial, CA","code":"IPL"},{"city":
"Imphal, India","code":"IMF"},{"city":
"In Amenas, Algeria","code":"IAM"},{"city":
"Inagua, Bahamas","code":"IGA"},{"city":
"Inanwatan, Indonesia","code":"INX"},{"city":
"Indagen, Papua New Guinea","code":"IDN"},{"city":
"Indianapolis, IN","code":"IND"},{"city":
"Indore, India","code":"IDR"},{"city":
"Ingersoll, ON - Rail service","code":"XIB"},{"city":
"Innsbruck, Austria","code":"INN"},{"city":
"Inta, Russia","code":"INA"},{"city":
"International Falls, MN","code":"INL"},{"city":
"Inukjuak, QC","code":"YPH"},{"city":
"Inuvik, NT","code":"YEV"},{"city":
"Invercargill, New Zealand","code":"IVC"},{"city":
"Inverell, Australia","code":"IVR"},{"city":
"Inverness, United Kingdom","code":"INV"},{"city":
"Inyokern, CA","code":"IYK"},{"city":
"Ioannina, Greece","code":"IOA"},{"city":
"Ioma, Papua New Guinea","code":"IOP"},{"city":
"Ipatinga, Brazil","code":"IPN"},{"city":
"Ipiales, Colombia","code":"IPI"},{"city":
"Ipil, Philippines","code":"IPE"},{"city":
"Ipoh, Malaysia","code":"IPH"},{"city":
"Ipota, Vanuatu","code":"IPA"},{"city":
"Iqaluit, NU","code":"YFB"},{"city":
"Iquique, Chile","code":"IQQ"},{"city":
"Iquitos, Peru","code":"IQT"},{"city":
"Irkutsk, Russia","code":"IKT"},{"city":
"Iron Mountain, MI","code":"IMT"},{"city":
"Ironwood, MI","code":"IWD"},{"city":
"Isafjordur, Iceland","code":"IFJ"},{"city":
"Isfahan, Iran","code":"IFN"},{"city":
"Ishigakij, Japan","code":"ISG"},{"city":
"Islamabad, Pakistan","code":"ISB"},{"city":
"Island Lake/Garden Hill","code":"YIV"},{"city":
"Island Lake/Garden Hill, Canada","code":"YIV"},{"city":
"Islay, United Kingdom","code":"ILY"},{"city":
"Isle of Man, United Kingdom","code":"IOM"},{"city":
"Isles of Scilly, United Kingdom - St Marys","code":"ISC"},{"city":
"Isles of Scilly, United Kingdom - Tresco","code":"TSO"},{"city":
"Islip, NY","code":"ISP"},{"city":
"Istanbul, Turkey","code":"IST"},{"city":
"Itaituba, Brazil","code":"ITB"},{"city":
"Ithaca, NY","code":"ITH"},{"city":
"Itokama, Papua New Guinea","code":"ITK"},{"city":
"Ivalo, Finland","code":"IVL"},{"city":
"Ivano-Frankovsk, Ukraine","code":"IFO"},{"city":
"Ivujivik, QC","code":"YIK"},{"city":
"Iwami, Japan","code":"IWJ"},{"city":
"Ixtapa, Mexico","code":"ZIH"},{"city":
"Ixtepec, Mexico","code":"IZT"},{"city":
"Izmir, Turkey","code":"ADB"},{"city":
"Izumo, Japan","code":"IZO"},{"city":
"Jabor, Marshall Islands","code":"JAT"},{"city":
"Jacareacanga, Brazil","code":"JCR"},{"city":
"Jackson Hole, WY","code":"JAC"},{"city":
"Jackson, MS","code":"JAN"},{"city":
"Jackson, TN","code":"MKL"},{"city":
"Jacksonville, FL","code":"JAX"},{"city":
"Jacksonville, NC","code":"OAJ"},{"city":
"Jacobabad, Pakistan","code":"JAG"},{"city":
"Jacquinot Bay, Papua New Guinea","code":"JAQ"},{"city":
"Jaipur, India","code":"JAI"},{"city":
"Jakarta, Indonesia","code":"CGK"},{"city":
"Jalapa, Mexico","code":"JAL"},{"city":
"Jaluit Island, Marshall Islands","code":"UIT"},{"city":
"Jambi. Indonesia","code":"DJB"},{"city":
"Jamestown, ND","code":"JMS"},{"city":
"Jamestown, NY","code":"JHW"},{"city":
"Jamnagar, India","code":"JGA"},{"city":
"Janakpur, Nepal","code":"JKR"},{"city":
"Janesville, WI","code":"JVL"},{"city":
"Jaque, Panama","code":"JQE"},{"city":
"Jasper, AB - Rail service","code":"XDH"},{"city":
"Jayapura, Indonesia","code":"DJJ"},{"city":
"Jeddah, Saudi Arabia","code":"JED"},{"city":
"Jeh, Marshall Islands","code":"JEJ"},{"city":
"Jeju, South Korea - Jeju Airport, metro area","code":"CJU"},{"city":
"Jerez De La Frontere, Spain","code":"XRY"},{"city":
"Jersey, United Kingdom","code":"JER"},{"city":
"Jessore, Bangladesh","code":"JSR"},{"city":
"Jiamusi, China","code":"JMU"},{"city":
"Jiayuguan, China","code":"JGN"},{"city":
"Jijel, Algeria","code":"GJL"},{"city":
"Jijiga, Ethiopia","code":"JIJ"},{"city":
"Jimma, Ethiopia","code":"JIM"},{"city":
"Jinan, China","code":"TNA"},{"city":
"Jingdezhen, China","code":"JDZ"},{"city":
"Jinghong, China","code":"JHG"},{"city":
"Jinja, Uganda","code":"JIN"},{"city":
"Jinjiang, China","code":"JJN"},{"city":
"Jinju, South Korea - Sancheon","code":"HIN"},{"city":
"Jinka, Ethiopia","code":"BCO"},{"city":
"Jinzhou, China","code":"JNZ"},{"city":
"Ji-Parana, Brazil","code":"JPR"},{"city":
"Jiwani, Pakistan","code":"JIW"},{"city":
"Joao Pessoa, Brazil","code":"JPA"},{"city":
"Jodhpur, India","code":"JDH"},{"city":
"Joensuu, Finland","code":"JOE"},{"city":
"Johannesburg, South Africa","code":"JNB"},{"city":
"Johnson City, NY","code":"BGM"},{"city":
"Johnson City, TN","code":"TRI"},{"city":
"Johnston Island, US Minor Outlying Islands","code":"JON"},{"city":
"Johnstown, PA","code":"JST"},{"city":
"Johor, Malaysia","code":"JHB"},{"city":
"Joinville, Brazil","code":"JOI"},{"city":
"Joliette, QC - Rail service","code":"XJL"},{"city":
"Jommu, India","code":"IXJ"},{"city":
"Jomsom, Nepal","code":"JMO"},{"city":
"Jonesboro, AR","code":"JBR"},{"city":
"Jonkoping, Sweden","code":"JKG"},{"city":
"Jonquiere, QC - Rail service","code":"XJQ"},{"city":
"Joplin, MO","code":"JLN"},{"city":
"Jorhat, India","code":"JRH"},{"city":
"Jose De San Martin, Argentina","code":"JSM"},{"city":
"Jouf, Saudi Arabia","code":"AJF"},{"city":
"Juazeiro Do Norte, Brazil","code":"JDO"},{"city":
"Juist, Germany","code":"JUI"},{"city":
"Juiz De Fora, Brazil","code":"JDF"},{"city":
"Jujuy, Argentina","code":"JUJ"},{"city":
"Julia Creek, Australia","code":"JCK"},{"city":
"Juliaca, Peru","code":"JUL"},{"city":
"Juneau, AK","code":"JNU"},{"city":
"Juzha, China","code":"JUZ"},{"city":
"Jyvaskyla, Finland","code":"JYV"},{"city":
"Kaadedhdhoo, Maldives","code":"KDM"},{"city":
"Kaben, Marshall Islands","code":"KBT"},{"city":
"Kabri Dar, Ethiopia","code":"ABK"},{"city":
"Kabul, Afghanistan","code":"KBL"},{"city":
"Kabwun, Papua New Guinea","code":"KBM"},{"city":
"Kadanwari, Pakistan","code":"KCF"},{"city":
"Kadhonoo, Maldives","code":"KDO"},{"city":
"Kahramanmaras, Turkey","code":"KCM"},{"city":
"Kahului, HI - Island of Maui,","code":"OGG"},{"city":
"Kaintiba, Papua New Guinea","code":"KZF"},{"city":
"Kaitaia, New Zealand","code":"KAT"},{"city":
"Kajaani, Finland","code":"KAJ"},{"city":
"Kake, AK","code":"KAE"},{"city":
"Kakhonak, AK","code":"KNK"},{"city":
"Kalamazoo, MI","code":"AZO"},{"city":
"Kalaupapa, HI - Island of Molokai,","code":"LUP"},{"city":
"Kalbarri, Australia","code":"KAX"},{"city":
"Kaliningrad, Russia","code":"KGD"},{"city":
"Kalskag, AK","code":"KLG"},{"city":
"Kaltag, AK","code":"KAL"},{"city":
"Kambuaya, Indonesia","code":"KBX"},{"city":
"Kameshli, Syrian Arab Republic","code":"KAC"},{"city":
"Kamloops, BC","code":"YKA"},{"city":
"Kamuela, HI - Island of Hawaii,","code":"MUE"},{"city":
"Kamur, Indonesia","code":"KCD"},{"city":
"Kamusi, Papua New Guinea","code":"KUY"},{"city":
"Kangiqsualujjuaq, QC","code":"XGR"},{"city":
"Kangiqsujuaq, QC","code":"YWB"},{"city":
"Kangirsuk, QC","code":"YKG"},{"city":
"Kano, Nigeria","code":"KAN"},{"city":
"Kansas City, MO","code":"MCI"},{"city":
"Kapalua, HI - Island of Maui,","code":"JHM"},{"city":
"Kapuskasing, ON","code":"YYU"},{"city":
"Karachi, Pakistan - Quaid-E-Azam International","code":"KHI"},{"city":
"Kardia, Estonia","code":"KDL"},{"city":
"Kariba, Zimbabwe","code":"KAB"},{"city":
"Karlsruhe/Badern Baden, Germany","code":"FKB"},{"city":
"Karpathos, Greece","code":"AOK"},{"city":
"Karubaga, Indonesia","code":"KBF"},{"city":
"Kasaan, AK","code":"KXA"},{"city":
"Kasaba Bay, Zambia","code":"ZKB"},{"city":
"Kasabonika, ON","code":"XKS"},{"city":
"Kasama, Zambia","code":"KAA"},{"city":
"Kasane, Botswana","code":"BBK"},{"city":
"Kaschechewan, ON","code":"ZKE"},{"city":
"Kasigluk, AK","code":"KUK"},{"city":
"Katherine, NT, Australia","code":"KTR"},{"city":
"Kathmandu, Nepal","code":"KTM"},{"city":
"Katowice, Poland","code":"KTW"},{"city":
"Kauai Island/Lihue, HI","code":"LIH"},{"city":
"Kaunas, Lithuania","code":"KUN"},{"city":
"Kavala, Greece","code":"KVA"},{"city":
"Kavieng, Papua New Guinea","code":"KVG"},{"city":
"Kawthaung, Myanmar","code":"KAW"},{"city":
"Kayseri, Turkey","code":"ASR"},{"city":
"Kazan,, Russia","code":"KZN"},{"city":
"Kearney, NE","code":"EAR"},{"city":
"Keene, NH","code":"EEN"},{"city":
"Keewaywin, ON","code":"KEW"},{"city":
"Kefallinia, Greece","code":"EFL"},{"city":
"Kegaska, QC","code":"ZKG"},{"city":
"Kelowna, BC","code":"YLW"},{"city":
"Kenai, AK","code":"ENA"},{"city":
"Kendari, Indonesia","code":"KDI"},{"city":
"Kenora, ON","code":"YQK"},{"city":
"Kerkyra, Greece","code":"CFU"},{"city":
"Ketchikan, AK","code":"KTN"},{"city":
"Key West, FL","code":"EYW"},{"city":
"Keystone, CO - Van service","code":"QKS"},{"city":
"Khajuraho, India","code":"HJR"},{"city":
"Kharga, Egypt","code":"UVL"},{"city":
"Kharkov, Ukraine","code":"HRK"},{"city":
"Khudzhand, Tajikistan","code":"LBD"},{"city":
"Khuzdar, Pakistan","code":"KDD"},{"city":
"Kiana, AK","code":"IAN"},{"city":
"Kiev, Ukraine - Borispol","code":"KBP"},{"city":
"Kiev, Ukraine - Zhulhany","code":"IEV"},{"city":
"Kigali, Rwanda","code":"KGL"},{"city":
"Kigoma, Tanzania","code":"TKQ"},{"city":
"Kilgore/Gladewater, TX","code":"GGG"},{"city":
"Kilimanjaro, Tanzania","code":"JRO"},{"city":
"Killeen, TX","code":"ILE"},{"city":
"Kimmirut/Lake Harbour NU","code":"YLC"},{"city":
"Kimmirut/Lake Harbour, Canada","code":"YLC"},{"city":
"King Cove, AK","code":"KVC"},{"city":
"King Salmon, AK","code":"AKN"},{"city":
"Kingfisher Lake, ON","code":"KIF"},{"city":
"Kingman, AZ","code":"IGM"},{"city":
"Kingsport, TN","code":"TRI"},{"city":
"Kingston, Jamaica - Norman Manley","code":"KIN"},{"city":
"Kingston, Jamaica - Tinson","code":"KTP"},{"city":
"Kingston, ON - Norman Rogers Airport","code":"YGK"},{"city":
"Kingston, ON - Rail service","code":"XEG"},{"city":
"Kinshasa, Congo","code":"FIH"},{"city":
"Kipnuk, AK","code":"KPN"},{"city":
"Kirakira, Solomon Islands","code":"IRA"},{"city":
"Kirksville, MO","code":"IRK"},{"city":
"Kitadaito, Japan","code":"KTD"},{"city":
"Kitchener, ON","code":"YKF"},{"city":
"Kittila, Finland","code":"KTT"},{"city":
"Kiunga, Papua New Guinea","code":"UNG"},{"city":
"Kivalina, AK","code":"KVL"},{"city":
"Kiwayu, Kenya","code":"KWY"},{"city":
"Klamath Falls, OR","code":"LMT"},{"city":
"Klawock, AK","code":"KLW"},{"city":
"Klemtu, BC","code":"YKT"},{"city":
"Knock, Ireland","code":"NOC"},{"city":
"Knoxville, TN","code":"TYS"},{"city":
"Kobuk, AK","code":"OBU"},{"city":
"Kochi, Japan","code":"KCZ"},{"city":
"Kodiak, AK","code":"ADQ"},{"city":
"Koh Samui, Thailand","code":"USM"},{"city":
"Kolkata, India","code":"CCU"},{"city":
"Kolobrzeg, Poland","code":"QJY"},{"city":
"Komsomolsk Na Amure, Russia","code":"KXK"},{"city":
"Kona, HI - Island of Hawaii","code":"KOA"},{"city":
"Kongiganak, AK","code":"KKH"},{"city":
"Konya, Turkey","code":"KYA"},{"city":
"Koror, Palau","code":"ROR"},{"city":
"Koszalin, Poland","code":"OSZ"},{"city":
"Kota Bharu, Malaysia","code":"KBR"},{"city":
"Kota Kinabalu, Malaysia","code":"BKI"},{"city":
"Kotlik, AK","code":"KOT"},{"city":
"Kotzebue, AK","code":"OTZ"},{"city":
"Kowanyama, QL, Australia","code":"KWM"},{"city":
"Koyukuk, AK","code":"KYU"},{"city":
"Kozhikode, India","code":"CCJ"},{"city":
"Krabi, Thailand","code":"KBV"},{"city":
"Krakow, Poland","code":"KRK"},{"city":
"Krivoy Rog, Ukraine","code":"KWG"},{"city":
"Kuala Lumpur, Malaysia","code":"KUL"},{"city":
"Kuala Terengganu, Malaysia","code":"TGG"},{"city":
"Kuantan, Malaysia","code":"KUA"},{"city":
"Kubin Island, QL, Australia","code":"KUG"},{"city":
"Kuching, Malaysia","code":"KCH"},{"city":
"Kudat, Malaysia","code":"KUD"},{"city":
"Kufrah, Libya","code":"AKF"},{"city":
"Kugaaruk, NU","code":"YBB"},{"city":
"Kugluktuk/Coppermine, NU","code":"YCO"},{"city":
"Kulusuk, Greenland","code":"KUS"},{"city":
"Kumejima, Japan","code":"UEO"},{"city":
"Kundiawa, Papau New Guinea","code":"CMU"},{"city":
"Kuopio, Finland","code":"KUO"},{"city":
"Kuri, Papua New Guinea","code":"KUQ"},{"city":
"Kushiro, Japan","code":"KUH"},{"city":
"Kutaisi, Georgia","code":"KUT"},{"city":
"Kuujjuaq, QC","code":"YVP"},{"city":
"Kuujjuarapik, QC","code":"YGW"},{"city":
"Kuusamo, Finland","code":"KAO"},{"city":
"Kuwait, Kuwait","code":"KWI"},{"city":
"Kwajalein, Marshall Islands","code":"KWA"},{"city":
"Kwethluk, AK","code":"KWT"},{"city":
"Kwigillingok, AK","code":"KWK"},{"city":
"Kyzyl, Russia","code":"KYZ"},{"city":
"La Ceiba, Honduras","code":"LCE"},{"city":
"La Coruna, Spain","code":"LCG"},{"city":
"La Crosse, WI","code":"LSE"},{"city":
"La Grande, QC","code":"YGL"},{"city":
"La Palma, Panama","code":"PLP"},{"city":
"La Paz, Bolivia","code":"LPB"},{"city":
"La Paz, Mexico","code":"LAP"},{"city":
"La Rioja, Argentina","code":"IRJ"},{"city":
"La Romana, Dominican Republic","code":"LRM"},{"city":
"La Ronge, SK","code":"YVC"},{"city":
"La Serena, Chile","code":"LSC"},{"city":
"La Tabatiere, QC","code":"ZLT"},{"city":
"La Tuque, QC","code":"YLQ"},{"city":
"Laayoune, Morocco","code":"EUN"},{"city":
"Labasa, Fiji","code":"LBS"},{"city":
"Lablab, Papua New Guinea","code":"LAB"},{"city":
"Labuan Bajo, Indonesia","code":"LBJ"},{"city":
"Labuan, Malaysia","code":"LBU"},{"city":
"Lac Brochet, MB","code":"XLB"},{"city":
"Lac Edouard, QC - Rail service","code":"XEE"},{"city":
"Ladysmith, BC - Rail service","code":"XEH"},{"city":
"Lae Island, Marshall Islands","code":"LML"},{"city":
"Lae, Papua New Guinea","code":"LAE"},{"city":
"Lafayette, IN","code":"LAF"},{"city":
"Lafayette, LA","code":"LFT"},{"city":
"Lages, SC, Brazil","code":"LAJ"},{"city":
"Lago Agrio, Ecuador","code":"LGQ"},{"city":
"Lago Argentina, Argentina","code":"ING"},{"city":
"Lagos, Nigeria","code":"LOS"},{"city":
"Lahadbatu, Malaysia","code":"LDU"},{"city":
"Lahore, Pakistan","code":"LHE"},{"city":
"Lake Charles, LA","code":"LCH"},{"city":
"Lake Havasu City, AZ","code":"HII"},{"city":
"Lake Minchumina, AK","code":"LMA"},{"city":
"Lakeba, Fiji","code":"LKB"},{"city":
"Lakselv, Norway","code":"LKL"},{"city":
"Lalibela, Ethiopia","code":"LLI"},{"city":
"Lamap, Vanuatu","code":"LPM"},{"city":
"Lamen Bay, Vanuatu","code":"LNB"},{"city":
"Lamezia-Terme, Italy","code":"SUF"},{"city":
"Lampang, Thailand","code":"LPI"},{"city":
"Lampedusa, Italy","code":"LMP"},{"city":
"Lamu, Kenya","code":"LAU"},{"city":
"Lanai City, HI - Island of Lanai","code":"LNY"},{"city":
"Lancaster, PA","code":"LNS"},{"city":
"Lands End, United Kingdom","code":"LEQ"},{"city":
"Langford, BC - Rail service","code":"XEJ"},{"city":
"Langguri, Indonesia","code":"LUV"},{"city":
"Langkawi, Malaysia","code":"LGK"},{"city":
"Lannion, France","code":"LAI"},{"city":
"Lansdowne House, ON","code":"YLH"},{"city":
"Lansing, MI","code":"LAN"},{"city":
"Lanzarote, Spain","code":"ACE"},{"city":
"Lanzhau, Guinea","code":"LHW"},{"city":
"Lanzhou, China","code":"ZGC"},{"city":
"Laoag, Philippines","code":"LAO"},{"city":
"Lappeenranta, Finland","code":"LPP"},{"city":
"Laramie, WY","code":"LAR"},{"city":
"Larantuka, Indonesia","code":"LKA"},{"city":
"Laredo, TX","code":"LRD"},{"city":
"Larnaca, Cyprus","code":"LCA"},{"city":
"Larochelle, France","code":"LRH"},{"city":
"Las Palmas, Spain","code":"LPA"},{"city":
"Las Piedras, Venezuela","code":"LSP"},{"city":
"Las Vegas, NV","code":"LAS"},{"city":
"Latakia, Syria","code":"LTK"},{"city":
"Latrobe, PA","code":"LBE"},{"city":
"Laucala Island, Fiji","code":"LUC"},{"city":
"Launceston, TS, Australia","code":"LST"},{"city":
"Laurel, MS","code":"PIB"},{"city":
"Laverton, WA, Australia","code":"LVO"},{"city":
"Lawas, Malaysia","code":"LWY"},{"city":
"Lawton, OK","code":"LAW"},{"city":
"Le Havre, France","code":"LEH"},{"city":
"Le Mans, France","code":"ZLN"},{"city":
"Le Puy, France","code":"LPY"},{"city":
"Le Touquet, France","code":"LTQ"},{"city":
"Leaf Rapids, MB","code":"YLR"},{"city":
"Learmonth, WA, Australia","code":"LEA"},{"city":
"Lebanon, NH","code":"LEB"},{"city":
"Leeds, United Kingdom","code":"LBA"},{"city":
"Legaspi, Philippines","code":"LGP"},{"city":
"Leh, India","code":"IXL"},{"city":
"Leinster, WA, Australia","code":"LER"},{"city":
"Leipzig, Germany","code":"LEJ"},{"city":
"Leknes, Norway","code":"LKN"},{"city":
"Lemnos, Greece","code":"LXS"},{"city":
"Leon, Mexico","code":"BJX"},{"city":
"Leonora, WA, Australia","code":"LNO"},{"city":
"Lethbridge, AB","code":"YQL"},{"city":
"Leticia, Colombia","code":"LET"},{"city":
"Levelock, AK","code":"KLL"},{"city":
"Lewisburg, WV","code":"LWB"},{"city":
"Lewiston, ID","code":"LWS"},{"city":
"Lewistown, MT","code":"LWT"},{"city":
"Lexington, KY","code":"LEX"},{"city":
"Lhasa, China","code":"LXA"},{"city":
"Lianyungang, China","code":"LYG"},{"city":
"Liberal, KS","code":"LBL"},{"city":
"Liberia, Costa Rica","code":"LIR"},{"city":
"Libreville, Gabon","code":"LBV"},{"city":
"Lichinga, Mozambique","code":"VXC"},{"city":
"Liege, Belgium","code":"LGG"},{"city":
"Lifa, New Caledonia","code":"LIF"},{"city":
"Lightning Ridge, NS, Australia","code":"LHG"},{"city":
"Lihir Island, Papua New Guinea","code":"LNV"},{"city":
"Lihue, HI - Island of Kaui","code":"LIH"},{"city":
"Lijiang City, China","code":"LJG"},{"city":
"Likiep Island, Marshall Islands","code":"LIK"},{"city":
"Lille, France - Lesquin","code":"LIL"},{"city":
"Lille, France - Rail service","code":"XDB"},{"city":
"Lilongwe, Malawi","code":"LLW"},{"city":
"Lima, Peru","code":"LIM"},{"city":
"Limbang, Malaysia","code":"LMN"},{"city":
"Limoges, France","code":"LIG"},{"city":
"Lincoln, NE","code":"LNK"},{"city":
"Lindeman Island, QL, Australia","code":"LDC"},{"city":
"Lindi, Tanzania","code":"LDI"},{"city":
"Linkoping, Sweden","code":"LPI"},{"city":
"Linyi, China","code":"LYI"},{"city":
"Linz, Austria","code":"LNZ"},{"city":
"Lisbon, Portugal","code":"LIS"},{"city":
"Lismore, NS, Australia","code":"LSY"},{"city":
"Little Rock, AR","code":"LIT"},{"city":
"Liuzhou, China","code":"LZH"},{"city":
"Liverpool, United Kingdom","code":"LPL"},{"city":
"Livingstone, Zambia","code":"LVI"},{"city":
"Lizard Island, QL, Australia","code":"LZR"},{"city":
"Ljubliana, Slovenia","code":"LJU"},{"city":
"Lloydminister, AB","code":"YLL"},{"city":
"Lockhart River, Australia","code":"IRG"},{"city":
"Loen, Marshall Islands","code":"LOF"},{"city":
"Loja, Ecuador","code":"LOH"},{"city":
"Lome, Togo","code":"LFW"},{"city":
"London, ON - Municipal Airport","code":"YXU"},{"city":
"London, ON - Rail service","code":"XDQ"},{"city":
"London, United Kingdom - All airports","code":"LON"},{"city":
"London, United Kingdom - Biggin Hill","code":"BQH"},{"city":
"London, United Kingdom - Gatwick","code":"LGW"},{"city":
"London, United Kingdom - Heathrow","code":"LHR"},{"city":
"London, United Kingdom - London City","code":"LCY"},{"city":
"London, United Kingdom - Luton","code":"LTN"},{"city":
"London, United Kingdom - Stansted","code":"STN"},{"city":
"Londonderry, United Kingdom","code":"LDY"},{"city":
"London-Paddington, United Kingdom - Rail service","code":"QQP"},{"city":
"Londrina, PR, Brazil","code":"LDB"},{"city":
"Long Apung, Indonesia","code":"LPU"},{"city":
"Long Banga, Malaysia","code":"LBP"},{"city":
"Long Bawan, Indonesia","code":"LBW"},{"city":
"Long Beach, CA","code":"LGB"},{"city":
"Long Island, Australia","code":"HAP"},{"city":
"Long Island/Deadmans Cay, Bahamas","code":"LGI"},{"city":
"Long Lellang, Malaysia","code":"LGL"},{"city":
"Long Seridan, Malaysia","code":"ODN"},{"city":
"Longana, Vanuatu","code":"LOD"},{"city":
"Longreach, QL, Australia","code":"LRE"},{"city":
"Longview, TX","code":"GGG"},{"city":
"Longyearbyen, Svalbard & Jan Mayen Island","code":"LYR"},{"city":
"Lonorore, Vanuatu","code":"LNE"},{"city":
"Lopez Island, WA","code":"LPS"},{"city":
"Lord Howe Island, NS, Australia","code":"LDH"},{"city":
"Loreto, Mexico","code":"LTO"},{"city":
"Lorient, France","code":"LRT"},{"city":
"Los Angeles, CA","code":"LAX"},{"city":
"Los Cabos, Mexico","code":"SJD"},{"city":
"Los Mochis, Mexico","code":"LMM"},{"city":
"Losuia, Papua New Guinea","code":"LSA"},{"city":
"Louisville, KY","code":"SDF"},{"city":
"Lourdes/Tarbes, France","code":"LDE"},{"city":
"Loveland/Fort Collins, CO - Bus service","code":"QWF"},{"city":
"Loveland/Fort Collins, CO - Municipal Airport","code":"FNL"},{"city":
"Lozaro Cardenas, Mexico","code":"LZC"},{"city":
"Luanda, Angola","code":"LAD"},{"city":
"Luanda, Angola","code":"LAD"},{"city":
"Luang Namtha, Laos","code":"LXG"},{"city":
"Luang Prabang, Laos","code":"LPQ"},{"city":
"Lubbock, TX","code":"LBB"},{"city":
"Lucknow, India","code":"LKO"},{"city":
"Luderitz, Namibia","code":"LUD"},{"city":
"Lugano, Switzerland","code":"LUG"},{"city":
"Lugansk, Uganda","code":"VSG"},{"city":
"Lukla, Nepal","code":"LUA"},{"city":
"Lulea, Sweden","code":"LLA"},{"city":
"Lumbashi, Congo","code":"FBM"},{"city":
"Luoyang, China","code":"LYA"},{"city":
"Lusaka, Zambia","code":"LUN"},{"city":
"Lutselke/Snowdrift, NT","code":"YSG"},{"city":
"Luwuk, Indonesia","code":"LUW"},{"city":
"Luxembourg, Luxembourg","code":"LUX"},{"city":
"Luxi, China","code":"LUM"},{"city":
"Luxor, Egypt","code":"LXR"},{"city":
"Luzhou, China","code":"LZO"},{"city":
"Lvov, Ukraine","code":"LWO"},{"city":
"Lyoksele, Sweden","code":"LYC"},{"city":
"Lyon, France - Lyon Part-Dieu Rail service","code":"XYD"},{"city":
"Lyon, France - Satolas","code":"LYS"},{"city":
"Maastricht, Netherlands","code":"MST"},{"city":
"Mabuiag Island, QL, Australia","code":"UBB"},{"city":
"Macapa, AP, Brazil","code":"MCP"},{"city":
"Macas, Ecuador","code":"XMS"},{"city":
"Macau, China","code":"MFM"},{"city":
"Maceio, AL, Brazil","code":"MCZ"},{"city":
"Machala, Ecuador","code":"MCH"},{"city":
"Mackay, QL, Australia","code":"MKY"},{"city":
"Macon, GA","code":"MCN"},{"city":
"Madang, Papua New Guinea","code":"MAG"},{"city":
"Madinah, Saudi Arabia","code":"MED"},{"city":
"Madison, WI","code":"MSN"},{"city":
"Madras, OR","code":"MDJ"},{"city":
"Madrid, Spain","code":"MAD"},{"city":
"Madurai, India","code":"IXM"},{"city":
"Mae Hong Son, Thailand","code":"HGN"},{"city":
"Mae Sot, Thailand","code":"MAQ"},{"city":
"Maewo, Vanuatu","code":"MWF"},{"city":
"Mafia, Tanzania","code":"MFA"},{"city":
"Magadan, Russia","code":"GDX"},{"city":
"Magnitogorsk, Russia","code":"MQF"},{"city":
"Mahanoro, Madagascar","code":"VVB"},{"city":
"Mahe Island, Seychelles","code":"SEZ"},{"city":
"Maintirano, Madagascar","code":"MXT"},{"city":
"Maio, Cape Verde","code":"MMO"},{"city":
"Majkin, Marshall Islands","code":"MJE"},{"city":
"Majunga, Madagascar","code":"MJN"},{"city":
"Majuro, Marshall Islands","code":"MAJ"},{"city":
"Makale, Ethiopia","code":"MQX"},{"city":
"Makhachkala, Russia","code":"MCX"},{"city":
"Makokou, Gabon","code":"MKU"},{"city":
"Makung, Taiwan","code":"MZG"},{"city":
"Malabo, Equatorial Guinea","code":"SSG"},{"city":
"Malacca, Malaysia","code":"MKZ"},{"city":
"Malaga, Spain","code":"AGP"},{"city":
"Malakai, Sudan","code":"MAK"},{"city":
"Malargue, MD, Argentina","code":"LGS"},{"city":
"Malatya, Turkey","code":"MLX"},{"city":
"Male, Maldives","code":"MLE"},{"city":
"Malindi, Kenya","code":"MYD"},{"city":
"Malmo, Sweden","code":"MMX"},{"city":
"Maloelap Island, Marshall Islands","code":"MAV"},{"city":
"Malololailai, Fiji","code":"PTF"},{"city":
"Malta, Malta","code":"MLA"},{"city":
"Mampikony, Madagascar","code":"WMP"},{"city":
"Mana Island, Fiji","code":"MNF"},{"city":
"Manado, Indonesia","code":"MDC"},{"city":
"Managua, Nicaragua","code":"MGA"},{"city":
"Manakara, Madagascar","code":"WVK"},{"city":
"Mananara, Madagascar","code":"WMR"},{"city":
"Manang, Nepal","code":"NGX"},{"city":
"Mananjary, Madagascar","code":"MNJ"},{"city":
"Manaus, AM, Brazil","code":"MAO"},{"city":
"Manchester, NH","code":"MHT"},{"city":
"Manchester, United Kingdom","code":"MAN"},{"city":
"Mandalay, Myanmar","code":"MDL"},{"city":
"Mandritsara, Madagascar","code":"WMA"},{"city":
"Mangaia Island, Cook Islands","code":"MGS"},{"city":
"Mangalore, India","code":"IXE"},{"city":
"Mangrove Cay, Bahamas","code":"MAY"},{"city":
"Mangu, Zambia","code":"MNR"},{"city":
"Manguna, Papua New Guinea","code":"MFO"},{"city":
"Manhattan, KS","code":"MHK"},{"city":
"Manihi, French Polynesia","code":"XMH"},{"city":
"Manihiki Island, Cook Islands","code":"MHX"},{"city":
"Manila, Philippines","code":"MNL"},{"city":
"Maningrioa, NT, Australia","code":"MNG"},{"city":
"Manistee, MI","code":"MBL"},{"city":
"Manizales, Colombia","code":"MZL"},{"city":
"Manja, Madagascar","code":"MJA"},{"city":
"Mankato, MN","code":"MKT"},{"city":
"Manley Hot Springs, AK","code":"MLY"},{"city":
"Mannheim, Germany","code":"MHG"},{"city":
"Manokotak, AK","code":"KMO"},{"city":
"Manokwari, Indonesia","code":"MKW"},{"city":
"Manston, United Kingdom","code":"MSE"},{"city":
"Manta, Ecuador","code":"MEC"},{"city":
"Manus Island, Papua New Guinea","code":"MAS"},{"city":
"Manzanillo, Cuba","code":"MZO"},{"city":
"Manzanillo, Mexico","code":"ZLO"},{"city":
"Manzini, Swaziland","code":"MTS"},{"city":
"Mao, Chad","code":"AMO"},{"city":
"Maota Savaii Is, Western Samoa","code":"MXS"},{"city":
"Maputo, Mozambique","code":"MPM"},{"city":
"Mar Del Plata, BA, Argentina","code":"MDQ"},{"city":
"Mara Lodges, Kenya","code":"MRE"},{"city":
"Maraba, PA, Brazil","code":"MAB"},{"city":
"Maracaibo, Venezuela","code":"MAR"},{"city":
"Maracay, Venezuela","code":"MYC"},{"city":
"Mare, New Caledonia","code":"MEE"},{"city":
"Margate, South Africa","code":"MGH"},{"city":
"Maribor, Slovenia","code":"MBX"},{"city":
"Mariehamn, Finland","code":"MHQ"},{"city":
"Marietta, OH/Parkersburg, WV","code":"PKB"},{"city":
"Mariitsoq, Greenland","code":"JSU"},{"city":
"Marilia, SP, Brazil","code":"MII"},{"city":
"Maringa, PR, Brazil","code":"MGF"},{"city":
"Marion, IL","code":"MWA"},{"city":
"Mariupol, Ukraine","code":"MPW"},{"city":
"Maroantsetra, Madagascar","code":"WMN"},{"city":
"Marova, Cameroon","code":"MVR"},{"city":
"Marquette, MI","code":"MQT"},{"city":
"Marseille, France","code":"MRS"},{"city":
"Marsh Harbour, Bahamas","code":"MHH"},{"city":
"Marshall, AK","code":"MLL"},{"city":
"Martha's Vineyard, MA","code":"MVY"},{"city":
"Martinsburg, PA","code":"AOO"},{"city":
"Marudi, Malaysia","code":"MUR"},{"city":
"Maryborough, QL, Australia","code":"MBH"},{"city":
"Mary's Harbour, NL","code":"YMH"},{"city":
"Masbate, Philippines","code":"MBT"},{"city":
"Maseru, Lesotho","code":"MSU"},{"city":
"Mashad, Iran","code":"MHD"},{"city":
"Mason City, IA","code":"MCW"},{"city":
"Massena, NY","code":"MSS"},{"city":
"Matamoros, Mexico","code":"MAM"},{"city":
"Mataram, Indonesia","code":"AMI"},{"city":
"Matsumoto, Japan","code":"MMJ"},{"city":
"Matsuyama, Japan","code":"MYJ"},{"city":
"Maturin, Venezuela","code":"MUN"},{"city":
"Maui, HI","code":"OGG"},{"city":
"Mauke Island, Cook Islands","code":"MUK"},{"city":
"Maulmyine, Myanmar","code":"MNU"},{"city":
"Maumere, Indonesia","code":"MOF"},{"city":
"Maun, Botswana","code":"MUB"},{"city":
"Maupiti, French Polynesia","code":"MAU"},{"city":
"Mauritius, Mauritius","code":"MRU"},{"city":
"Maxville, ON - Rail service","code":"XID"},{"city":
"Mayaguana, Bahamas","code":"MYG"},{"city":
"Mayaguez, Puerto Rico","code":"MAZ"},{"city":
"Mazatlan, Mexico","code":"MZT"},{"city":
"Mbandaka, Congo","code":"MDK"},{"city":
"Mbuji Mayi, Congo","code":"MJM"},{"city":
"Mcallen, TX","code":"MFE"},{"city":
"Mcarthur River, NT, Australia","code":"MCV"},{"city":
"Mccook, NE","code":"MCK"},{"city":
"Mcgrath, AK","code":"MCG"},{"city":
"Medan, Indonesia","code":"MES"},{"city":
"Medellin, Colombia - Enrique Olaya Herrera","code":"EOH"},{"city":
"Medellin, Colombia - Jose Marie Cordova","code":"MDE"},{"city":
"Medford, OR","code":"MFR"},{"city":
"Medicine Hat, AB","code":"YXH"},{"city":
"Meekatharra, WA, Australia","code":"MKR"},{"city":
"Mehamn, Norway","code":"MEH"},{"city":
"Meixian, China","code":"MXZ"},{"city":
"Mejit Island, Marshall Islands","code":"MJB"},{"city":
"Mekane Selam, Ethiopia","code":"MKS"},{"city":
"Mekoryuk, AK","code":"MYU"},{"city":
"Melbourne, FL","code":"MLB"},{"city":
"Melbourne, Victoria, Australia","code":"MEL"},{"city":
"Melilla, Spain","code":"MLN"},{"city":
"Melville, SK - Rail service","code":"XEK"},{"city":
"Memanbetsu, Japan","code":"MMB"},{"city":
"Memphis, TN","code":"MEM"},{"city":
"Mendi, Ethiopia","code":"NDM"},{"city":
"Mendi, Papua New Guinea","code":"MDU"},{"city":
"Mendoza, MD, Argentina","code":"MDZ"},{"city":
"Menorca, Spain","code":"MAH"},{"city":
"Menyamya, Papua New Guinea","code":"MYX"},{"city":
"Merauke, Indonesia","code":"MKQ"},{"city":
"Merave, Sudan","code":"MWE"},{"city":
"Merced, CA","code":"MCE"},{"city":
"Merdey, Indonesia","code":"RDE"},{"city":
"Merida, Mexico","code":"MID"},{"city":
"Merida, Venezuela","code":"MRD"},{"city":
"Meridian, MS","code":"MEI"},{"city":
"Merimbula, NS, Australia","code":"MIM"},{"city":
"Mersa Matruh, Egypt","code":"MUH"},{"city":
"Metlakatla, AK","code":"MTM"},{"city":
"Metz/Nancy, France","code":"ETZ"},{"city":
"Mexicali, Mexico","code":"MXL"},{"city":
"Mexico City, Mexico","code":"MEX"},{"city":
"Meyers Chuck, AK","code":"WMK"},{"city":
"Mfume, Zambia","code":"MFU"},{"city":
"Miami, FL - International","code":"MIA"},{"city":
"Miami, FL - Sea Plane Base","code":"MPB"},{"city":
"Miandrivazo, Madagascar","code":"ZVA"},{"city":
"Middle Caicos, Turks and Caicos","code":"MDS"},{"city":
"Midland, MI","code":"MBS"},{"city":
"Midland/Odessa, TX","code":"MAF"},{"city":
"Midway Island, US Minor Outlying Islands","code":"MDY"},{"city":
"Mikkeli, Finland","code":"MIK"},{"city":
"Mikonos, Greece","code":"JMK"},{"city":
"Milan, Italy - Linate","code":"LIN"},{"city":
"Milan, Italy - Malpensa","code":"MXP"},{"city":
"Milan, Italy - Orio Al Serio","code":"BGY"},{"city":
"Milan, Italy - Parma","code":"PMF"},{"city":
"Mildura, VI, Australia","code":"MQL"},{"city":
"Miles City, MT","code":"MLS"},{"city":
"Mili Island, Marshall Islands","code":"MIJ"},{"city":
"Milingimbi, NT, Australia","code":"MGT"},{"city":
"Milwaukee, WI","code":"MKE"},{"city":
"Minami Daito, Japan","code":"MMD"},{"city":
"Minatitla, Mexico","code":"MTT"},{"city":
"Mindiptana, Indonesia","code":"MDP"},{"city":
"Mineralnye Vody, Russia","code":"MRV"},{"city":
"Minneapolis, MN","code":"MSP"},{"city":
"Minot, ND","code":"MOT"},{"city":
"Minsk, Belarus - Minsk International 1","code":"MHP"},{"city":
"Minsk, Belarus - Minsk International 2","code":"MSQ"},{"city":
"Minto, AK","code":"MNT"},{"city":
"Miramichi, NB - Rail service","code":"XEY"},{"city":
"Miri, Malaysia","code":"MYY"},{"city":
"Mirnyj, Russia","code":"MJZ"},{"city":
"Misawa, Japan","code":"MSJ"},{"city":
"Misima Island, Papua New Guinea","code":"MIS"},{"city":
"Mission, TX","code":"MFE"},{"city":
"Missoula, MT","code":"MSO"},{"city":
"Misurata, Libya","code":"MRA"},{"city":
"Mitiaro Island, Cook Islands","code":"MOI"},{"city":
"MiyakeJima, Japan","code":"MYE"},{"city":
"Miyako Jima, Japan","code":"MMY"},{"city":
"Mizan Teferi, Ethiopia","code":"MTF"},{"city":
"Mo I Rana, Norway","code":"MQN"},{"city":
"Moa, Cuba","code":"MOA"},{"city":
"Moab, UT","code":"CNY"},{"city":
"Moala, Fiji","code":"MFJ"},{"city":
"Moanamani, Indonesia","code":"ONI"},{"city":
"Moanda, Congo","code":"MNB"},{"city":
"Moanda, Gabon","code":"MFF"},{"city":
"Mobile, AL","code":"MOB"},{"city":
"Modesto, CA","code":"MOD"},{"city":
"Mogadishu, Somalia","code":"MGQ"},{"city":
"Mohenjodaro, Denmark","code":"MJD"},{"city":
"Mokpo, South Korea","code":"MPK"},{"city":
"Mokuti Lodge, Namibia","code":"OKU"},{"city":
"Molde, Norway","code":"MOL"},{"city":
"Moline, IL","code":"MLI"},{"city":
"Mombasa, Kenya","code":"MBA"},{"city":
"Monastir, Tunisia","code":"MIR"},{"city":
"Monbetsu, Japan","code":"MBE"},{"city":
"Monclova, Mexico","code":"LOV"},{"city":
"Moncton, NB - Airport","code":"YQM"},{"city":
"Moncton, NB - Rail service","code":"XDP"},{"city":
"Monkey Mia, WA, Australia","code":"MJK"},{"city":
"Mono, Solomon Islands","code":"MNY"},{"city":
"Monroe, LA","code":"MLU"},{"city":
"Monrovia, Liberia","code":"ROB"},{"city":
"Mont Joli, QC","code":"YYY"},{"city":
"Monte Carlo, Monaco","code":"MCM"},{"city":
"Monte Dourado, PA, Brazil","code":"MEU"},{"city":
"Montego Bay, Jamaica","code":"MBJ"},{"city":
"Monterey, CA","code":"MRY"},{"city":
"Monteria, Colombia","code":"MTR"},{"city":
"Monterrey, Mexico","code":"MTY"},{"city":
"Montes Claros, MG, Brazil","code":"MOC"},{"city":
"Montevideo, Uruguay","code":"MVD"},{"city":
"Montgomery, AL","code":"MGM"},{"city":
"Montpellier, France","code":"MPL"},{"city":
"Montreal, QC - all airports","code":"YMQ"},{"city":
"Montreal, QC - Dorval","code":"YUL"},{"city":
"Montreal, QC - Dorval Rail service","code":"XAX"},{"city":
"Montreal, QC - Downtown Rail service","code":"YMY"},{"city":
"Montreal, QC - Mirabel","code":"YMX"},{"city":
"Montreal, QC - St Lambert Rail service","code":"XLM"},{"city":
"Montrose, CO","code":"MTJ"},{"city":
"Montserrat, Montserrat","code":"MNI"},{"city":
"Moorea, French Polynesia","code":"MOZ"},{"city":
"Moosonee, ON","code":"YMO"},{"city":
"Mopti, Mali","code":"MZI"},{"city":
"Mora, Sweden","code":"MXX"},{"city":
"Morafenobe, Madagascar","code":"TVA"},{"city":
"Morambe, Madagascar","code":"MXM"},{"city":
"Moranbah, QL, Australia","code":"MOV"},{"city":
"Moree, NS, Australia","code":"MRZ"},{"city":
"Morelia, Mexico","code":"MLM"},{"city":
"Morgantown, WV","code":"MGW"},{"city":
"Morioka, Japan","code":"HNA"},{"city":
"Mornington, QL, Australia","code":"ONG"},{"city":
"Moro, Papua New Guinea","code":"MXH"},{"city":
"Morondava, Madagascar","code":"MOQ"},{"city":
"Moroni, Comoros","code":"HAH"},{"city":
"Moruya, NS, Australia","code":"MYA"},{"city":
"Moscow, Russia - all locations","code":"MOW"},{"city":
"Moscow, Russia - Bykovo","code":"BKA"},{"city":
"Moscow, Russia - Domodedovo","code":"DME"},{"city":
"Moscow, Russia - Sheremetyevo","code":"SVO"},{"city":
"Moscow, Russia - Vnukovo","code":"VKO"},{"city":
"Moses Lake, WA","code":"MWH"},{"city":
"Mosjoen, Norway","code":"MJF"},{"city":
"Mostar, Bosnia and Herzegovina","code":"OMO"},{"city":
"Mota Lava, Vanuatu","code":"MTV"},{"city":
"Mouila, Gabon","code":"MJL"},{"city":
"Mount Cook, New Zealand","code":"MON"},{"city":
"Mount Gambier, SA, Australia","code":"MGB"},{"city":
"Mount Hagen, Papua New Guinea","code":"HGU"},{"city":
"Mount Hotham, VI, Australia","code":"MHU"},{"city":
"Mount Isa, Australia","code":"ISA"},{"city":
"Mount Keith, WA, Australia","code":"WME"},{"city":
"Mount Magnet, WA, Australia","code":"MMG"},{"city":
"Mount Pleasant, Falkland Islands","code":"MPN"},{"city":
"Mountain Home, AR","code":"WMH"},{"city":
"Mountain Village, AK","code":"MOU"},{"city":
"Mpacha, Namibia","code":"MPA"},{"city":
"Mtwara, Tanzania","code":"MYW"},{"city":
"Mucuri, BA, Brazil","code":"MVS"},{"city":
"Mudanjiang, China","code":"MDG"},{"city":
"Mudgee, Australia","code":"DGE"},{"city":
"Muenster, Germany","code":"FMO"},{"city":
"Mukan, Malaysia","code":"MKM"},{"city":
"Mulhouse, France","code":"MLH"},{"city":
"Mulia, Indonesia","code":"LII"},{"city":
"Multan, Pakistan","code":"MUX"},{"city":
"Mulu, Malaysia","code":"MZV"},{"city":
"Mumbai, India","code":"BOM"},{"city":
"Munda, Solomon Islands","code":"MUA"},{"city":
"Munich, Germany","code":"MUC"},{"city":
"Murcia, Spain","code":"MJV"},{"city":
"Murmansk, Russia","code":"MMK"},{"city":
"Murray Island, QL, Australia","code":"MYI"},{"city":
"Mus, Turkey","code":"MSR"},{"city":
"Muscat, Oman","code":"MCT"},{"city":
"Muscle Shoals, AL","code":"MSL"},{"city":
"Muskegon, MI","code":"MKG"},{"city":
"Muskrat Dam, ON","code":"MSA"},{"city":
"Musoma, Tanzania","code":"MUZ"},{"city":
"Muzaffarabad, Pakistan","code":"MFG"},{"city":
"Mwanza, Tanzania","code":"MWZ"},{"city":
"Myeik, Myanmar","code":"MGZ"},{"city":
"Myitkyina, Myanmar","code":"MYT"},{"city":
"Myrtle Beach, SC","code":"MYR"},{"city":
"Mytilene, Greece","code":"MJT"},{"city":
"Mzuzu, Malawi","code":"ZZU"},{"city":
"Nabire, Indonesia","code":"NBX"},{"city":
"Nacala, Mozambique","code":"MNC"},{"city":
"Nadar, Morocco","code":"NDR"},{"city":
"Nadi, Fiji","code":"NAN"},{"city":
"Nadym, Russia","code":"NYM"},{"city":
"Naga, Philippines","code":"WNP"},{"city":
"Nagasaki, Japan","code":"NGS"},{"city":
"Nagoya, Japan - Chubu CentrAir Intl","code":"NGO"},{"city":
"Nagoya, Japan - Nagoya Komaki APT","code":"NGO"},{"city":
"Nagpur, India","code":"NAG"},{"city":
"Nain, NL","code":"YDP"},{"city":
"Nairobi, Kenya - Jomo Kenyatta Intl","code":"NBO"},{"city":
"Nairobi, Kenya - Wilson","code":"WIL"},{"city":
"Nakhichevan, Azerbaijan","code":"NAJ"},{"city":
"Nakhon Ratchosima, Thailand","code":"NAK"},{"city":
"Nakhon Si Thammarat, Thailand","code":"NST"},{"city":
"Nakina, ON","code":"YQN"},{"city":
"Nalchik, Russia","code":"NAL"},{"city":
"Namangan, Uzbekistan","code":"NMA"},{"city":
"Namatana, Papua New Guinea","code":"ATN"},{"city":
"Namorik Island, Marshall Islands","code":"NDK"},{"city":
"Nampula, Mozambique","code":"APL"},{"city":
"Namsos, Norway","code":"OSY"},{"city":
"Namudi, Papua New Guinea","code":"NDI"},{"city":
"Nan, Thailand","code":"NNT"},{"city":
"Nanaimo, BC - Cassidy Airport","code":"YCD"},{"city":
"Nanaimo, BC - Harbour Airport","code":"ZNA"},{"city":
"Nanchong, China","code":"NAO"},{"city":
"Nanisivik, NU","code":"YSR"},{"city":
"Nanking/Nanjing, China","code":"NKG"},{"city":
"Nanning, China","code":"NNG"},{"city":
"Nanortalik, Greenland","code":"JNN"},{"city":
"Nantes, France - Nantes Atlantique","code":"NTE"},{"city":
"Nantes, France - Rail service","code":"QJZ"},{"city":
"Nantong, China","code":"NTG"},{"city":
"Nantucket, MA","code":"ACK"},{"city":
"Nanyang, China","code":"NNY"},{"city":
"Nanyuki, Kenya","code":"NYK"},{"city":
"Napakiak, AK","code":"WNA"},{"city":
"Napanee, ON - Rail service","code":"XIF"},{"city":
"Napaskiak, AK","code":"PKA"},{"city":
"Napier-Hastings, New Zealand","code":"NPE"},{"city":
"Naples, FL","code":"APF"},{"city":
"Naples, Italy","code":"NAP"},{"city":
"Narathiwat, Thailand","code":"NAW"},{"city":
"Narrabri, NS, Australia","code":"NAA"},{"city":
"Narsaq, Greenland","code":"JNS"},{"city":
"Narsarsuaq, Greenland","code":"UAK"},{"city":
"Narvik, Norway","code":"NVK"},{"city":
"Naryan-Mar, Russia","code":"NNM"},{"city":
"Nashville, TN","code":"BNA"},{"city":
"Nassau, Bahamas - Paradise Island","code":"NAS"},{"city":
"Natadi, Congo","code":"MAT"},{"city":
"Natal, RN, Brazil","code":"NAT"},{"city":
"Natashquan, QC","code":"YNA"},{"city":
"Naukiti, AK","code":"NKI"},{"city":
"Nauru Island, Nauru","code":"INU"},{"city":
"Navegantes, SC, Brazil","code":"NVT"},{"city":
"Nawabshah, Pakistan","code":"WNS"},{"city":
"NayUrengoy, Russia","code":"NUX"},{"city":
"Ndjamena, Chad","code":"NDJ"},{"city":
"Ndola, Zambia","code":"NLA"},{"city":
"Neerlerit Inaat, Greenland","code":"CNP"},{"city":
"Nefteyugansk, Russia","code":"NFG"},{"city":
"Neghelli, Ethiopia","code":"EGL"},{"city":
"Negril, Jamaica","code":"NEG"},{"city":
"Neiva, Colombia","code":"NVA"},{"city":
"Nejran, Saudi Arabia","code":"EAM"},{"city":
"Nelso, New Zealand","code":"NSN"},{"city":
"Nelson Lagoon, AK","code":"NLG"},{"city":
"Nelspruit, South Africa","code":"NLP"},{"city":
"Nema, Mauritania","code":"EMN"},{"city":
"Nemiscau, QC","code":"YNS"},{"city":
"Neryjungri, Russia","code":"NER"},{"city":
"Neuquen, NE, Argentina","code":"NQN"},{"city":
"Nevis, St. Kitts and Nevis","code":"NEV"},{"city":
"New Carlisle, QC - Rail service","code":"XEL"},{"city":
"New Chenega, AK","code":"NCN"},{"city":
"New Haven, CT","code":"HVN"},{"city":
"New Koliganek, AK","code":"KGK"},{"city":
"New London/Groton","code":"GON"},{"city":
"New London/Groton","code":"GON"},{"city":
"New Orleans, LA","code":"MSY"},{"city":
"New Plymouth, New Zealand","code":"NPL"},{"city":
"New Richmond, QC - Rail service","code":"XEM"},{"city":
"New Stuyahok, AK","code":"KNW"},{"city":
"New York, NY - All airports","code":"NYC"},{"city":
"New York, NY - Kennedy","code":"JFK"},{"city":
"New York, NY - La Guardia","code":"LGA"},{"city":
"Newark, NJ","code":"EWR"},{"city":
"Newburgh/Stewart Field, NY","code":"SWF"},{"city":
"Newcastle, New South Wales, Australia","code":"NTL"},{"city":
"Newcastle, New South Wales, Australia - Belmont","code":"BEO"},{"city":
"Newcastle, United Kingdom","code":"NCL"},{"city":
"Newman, WA, Australia","code":"ZNE"},{"city":
"Newport News, VA","code":"PHF"},{"city":
"Newquay, United Kingdom","code":"NQY"},{"city":
"Newtok, AK","code":"WWT"},{"city":
"Ngaoundere, Cameroon","code":"NGE"},{"city":
"Ngau Island, Fiji","code":"NGI"},{"city":
"Ngukurr, NT, Australia","code":"RPM"},{"city":
"Nha Trang, Viet Nam","code":"NHA"},{"city":
"Niagara Falls, ON - Rail service","code":"XLV"},{"city":
"Niamey, Niger","code":"NIM"},{"city":
"Nice, France","code":"NCE"},{"city":
"Nicosia, Cyprus","code":"NIC"},{"city":
"Nightmute, AK","code":"NME"},{"city":
"Nikolai, AK","code":"NIB"},{"city":
"Nikolski, AK","code":"IKO"},{"city":
"Nimes, France","code":"FNI"},{"city":
"Ningbo, China","code":"NGB"},{"city":
"Nioko, Congo","code":"NIX"},{"city":
"Niuafo'ou, Tonga","code":"NFO"},{"city":
"Niuatoputapu, Tonga","code":"NTT"},{"city":
"Niue Island, Niue","code":"IUE"},{"city":
"Nizhnevartovsk, Russia","code":"NJC"},{"city":
"Nizhniy Novgorod, Russia","code":"GOJ"},{"city":
"Noatak, AK","code":"WTK"},{"city":
"Nojabrxsk, Russia","code":"NOJ"},{"city":
"Nome, AK","code":"OME"},{"city":
"Nondalton, AK","code":"NNL"},{"city":
"Noorvik, AK","code":"ORV"},{"city":
"Noranda/Rouyn, QC","code":"YUY"},{"city":
"Norderney, Germany","code":"NRD"},{"city":
"Nordholz-Speika, Germany","code":"NDZ"},{"city":
"Norfolk Island, Norfolk Island","code":"NLK"},{"city":
"Norfolk, NE","code":"OFK"},{"city":
"Norfolk, VA","code":"ORF"},{"city":
"Noril'sk, Russia","code":"NSK"},{"city":
"Norman Wells, NT","code":"YVQ"},{"city":
"Normanton, QL, Australia","code":"NTN"},{"city":
"Norrkoping, Sweden","code":"NRK"},{"city":
"Norsup, Vanuatu","code":"NUS"},{"city":
"North Bay, ON","code":"YYB"},{"city":
"North Bend, OR","code":"OTH"},{"city":
"North Caicos, Turks and Caicos Islands","code":"NCA"},{"city":
"North Eleuthera, Bahamas","code":"ELH"},{"city":
"North Platte, NE","code":"LBF"},{"city":
"North Ronaldsay, United Kingdom","code":"NRL"},{"city":
"North Spirit Lake, ON","code":"YNO"},{"city":
"Northway, AK","code":"ORT"},{"city":
"Norway House, MB","code":"YNE"},{"city":
"Norwich, United Kingdom","code":"NWI"},{"city":
"Nosara Beach, Costa Rica","code":"NOB"},{"city":
"Nossi-be, Madagascar","code":"NOS"},{"city":
"Nottingham, United Kingdom","code":"EMA"},{"city":
"Nouadhiba, Mauritania","code":"NDB"},{"city":
"Nouakchott, Mauritania","code":"NKC"},{"city":
"Noumea, New Caledonia - Magenta","code":"GEA"},{"city":
"Noumea, New Caledonia - Tontouta","code":"NOU"},{"city":
"Novgorod, Russia","code":"NVR"},{"city":
"Novokuznetsk, Russia","code":"NOZ"},{"city":
"Novosibirsk, Russia - Tolmachevo","code":"OVB"},{"city":
"Nueva Gerona, Cuba","code":"GER"},{"city":
"Nuevo Laredo, Mexico","code":"NLD"},{"city":
"Nuiqsut, AK","code":"NUI"},{"city":
"Nuku Hiva, French Polynesia","code":"NHV"},{"city":
"Nuku'Alofa, Tonga","code":"TBU"},{"city":
"Nukus, Uzbekistan","code":"NCU"},{"city":
"Nulato, AK","code":"NUL"},{"city":
"Numbulwar, NT, Australia","code":"NUB"},{"city":
"Nunapitchuk, AK","code":"NUP"},{"city":
"Nunukan, Indonesia","code":"NNX"},{"city":
"Nuremberg, Germany","code":"NUE"},{"city":
"Nuremberg, Germany - Rail service","code":"ZAQ"},{"city":
"Nuuk, Greenland","code":"GOH"},{"city":
"Nyala, Sudan","code":"UYL"},{"city":
"Nyaung, Myanmar","code":"NYU"},{"city":
"Nyngan, NS, Australia","code":"NYN"},{"city":
"Oakland, CA","code":"OAK"},{"city":
"Oaxaca, Mexico","code":"OAX"},{"city":
"Obano, Indonesia","code":"OBD"},{"city":
"Obihiro, Japan","code":"OBO"},{"city":
"Ocho Rios, Jamaica","code":"OCJ"},{"city":
"Odense, Denmark","code":"ZBQ"},{"city":
"Odessa, Ukraine","code":"ODS"},{"city":
"Odessa/Midland, TX","code":"MAF"},{"city":
"Ogdensburg, NY","code":"OGS"},{"city":
"Ogoki, ON","code":"YOG"},{"city":
"Ohrid, Macedonia","code":"OHD"},{"city":
"Oita, Japan","code":"OIT"},{"city":
"Okaba, Indonedia","code":"OKQ"},{"city":
"Okayama, Japan","code":"OKJ"},{"city":
"Okhotsk, Russia","code":"OHO"},{"city":
"Okinawa, Japan","code":"OKA"},{"city":
"Oklahoma City, OK","code":"OKC"},{"city":
"Okoshiri, Japan","code":"OIR"},{"city":
"Oksibil, Indonesia","code":"OKL"},{"city":
"Olbia, Italy","code":"OLB"},{"city":
"Old Crow, YT","code":"YOC"},{"city":
"Olpoi, Vanuatu","code":"OLJ"},{"city":
"Olympic Dam, SA, Australia","code":"OLP"},{"city":
"Omaha, NE","code":"OMA"},{"city":
"Omboue, Gabon","code":"OMB"},{"city":
"Omsk, Russia","code":"OMS"},{"city":
"Ondangwa, Namibia","code":"OND"},{"city":
"Ontario, CA","code":"ONT"},{"city":
"Opapamiska Lake, ON","code":"YBS"},{"city":
"Oradea, Romania","code":"OMR"},{"city":
"Oran, Algeria","code":"ORN"},{"city":
"Orange County, CA","code":"SNA"},{"city":
"Orange, New South Wales, Australia","code":"OAG"},{"city":
"Oranjemund, Namibia","code":"OMD"},{"city":
"Orebro, Sweeden - Obrebro-Bofors","code":"ORB"},{"city":
"Orenburg, Russia","code":"REN"},{"city":
"Orlando, FL - Herndon","code":"ORL"},{"city":
"Orlando, FL - International","code":"MCO"},{"city":
"Ormara, Pakistan","code":"ORW"},{"city":
"Ornskoldsvik, Sweden","code":"OER"},{"city":
"Orsk, Russia","code":"OSW"},{"city":
"Orsta-Volda, Norway","code":"HOV"},{"city":
"Osaka, Japan - all airports","code":"OSA"},{"city":
"Osaka, Japan - Itami","code":"ITM"},{"city":
"Osaka, Japan - Kansai Intl","code":"KIX"},{"city":
"Oshawa, ON","code":"YOO"},{"city":
"Oshima, Japan","code":"OIM"},{"city":
"Oshkosh, WI","code":"OSH"},{"city":
"Osijek, Croatia","code":"OSI"},{"city":
"Oskarshamn, Sweden","code":"OSK"},{"city":
"Oslo, Norway","code":"OSL"},{"city":
"Ostersund, Sweden","code":"OSD"},{"city":
"Ostrava, Czech Republic","code":"OSR"},{"city":
"Ottawa, ON - International","code":"YOW"},{"city":
"Ottawa, ON - Rail service","code":"XDS"},{"city":
"Ottumwa, IA","code":"OTM"},{"city":
"Otu, Colombia","code":"OTU"},{"city":
"Ouagadougou, Burkina Faso","code":"OUA"},{"city":
"Ouargla, Algeria","code":"OGX"},{"city":
"Ouarzazate, Morocco","code":"OZZ"},{"city":
"Oudomxay, Laos","code":"ODY"},{"city":
"Oujda, Morocco","code":"OUD"},{"city":
"Oulu, Finland","code":"OUL"},{"city":
"Ouvea, New Caledonia","code":"UVE"},{"city":
"Ovda, Israel","code":"VDA"},{"city":
"Owensboro, KY","code":"OWB"},{"city":
"Oxford House, MB","code":"YOH"},{"city":
"Oxnard/Ventura, CA","code":"OXR"},{"city":
"Oyem, Gabon","code":"OYE"},{"city":
"Paama, Vanuatu","code":"PBJ"},{"city":
"Paamiut, Greenland","code":"JFR"},{"city":
"Padang, Indonesia","code":"PDG"},{"city":
"Paderborn, Germany","code":"PAD"},{"city":
"Paducah, KY","code":"PAH"},{"city":
"Page, AZ","code":"PGA"},{"city":
"Pago Pago, American Samoa","code":"PPG"},{"city":
"Pakse, Laos","code":"PKZ"},{"city":
"Pakuashipi, QC","code":"YIF"},{"city":
"Pakuba, Uganda","code":"PAF"},{"city":
"Palacios, Honduras","code":"PCH"},{"city":
"Palang Karaya, Indonesia","code":"PKY"},{"city":
"Palanga, Lithuania","code":"PLQ"},{"city":
"Palembang, Indonesia","code":"PLM"},{"city":
"Palenque, Mexico","code":"PQM"},{"city":
"Palermo, Sicily, Italy","code":"PMO"},{"city":
"Palm Springs, CA","code":"PSP"},{"city":
"Palma Mallorca, Spain and Canary Islands","code":"PMI"},{"city":
"Palmar, Costa Rica","code":"PMZ"},{"city":
"Palmas, TO, Brazil","code":"PMW"},{"city":
"Palmerston North, New Zealand","code":"PMR"},{"city":
"Palu, Indonesia","code":"PLW"},{"city":
"Pamplona, Spain","code":"PNA"},{"city":
"Panama City, FL","code":"PFN"},{"city":
"Panama City, Panama - Paitilla","code":"PAC"},{"city":
"Panama City, Panama - Tocumen Intl","code":"PTY"},{"city":
"Pangkalanboun, Indonesia","code":"PKN"},{"city":
"Pangkalpinang, Indonesia","code":"PGK"},{"city":
"Pangnirtung, NU","code":"YXP"},{"city":
"Panjger, Pakistan","code":"PJG"},{"city":
"Pantelleria, Italy","code":"PNL"},{"city":
"Papa Westray, United Kingdom","code":"PPW"},{"city":
"Papeete, French Polynesia","code":"PPT"},{"city":
"Paphos, Cyprus","code":"PFO"},{"city":
"Para Chinar, Pakistan","code":"PAJ"},{"city":
"Paraburdoo, WA, Australia","code":"PBO"},{"city":
"Paradise Island, Bahamas","code":"PID"},{"city":
"Paramaribo, Suriname - Zanderij Intl","code":"PBM"},{"city":
"Paramaribo, Suriname - Zorg En Hoop","code":"ORG"},{"city":
"Parana, ER, Argentina","code":"PRA"},{"city":
"Parasi, Solomon Islands","code":"PRS"},{"city":
"Parent, QC - Rail service","code":"XFE"},{"city":
"Paris, France - All airports","code":"PAR"},{"city":
"Paris, France - Beauvais-Tille","code":"BVA"},{"city":
"Paris, France - Charles Degaulle","code":"CDG"},{"city":
"Paris, France - Orly","code":"ORY"},{"city":
"Parkersburg, WV/Marietta, OH","code":"PKB"},{"city":
"Parksville, BC - Rail service","code":"XPB"},{"city":
"Parma/Milan, Italy","code":"PMF"},{"city":
"Parnaiba, PI, Brazil","code":"PHB"},{"city":
"Paro, Bhutan","code":"PBH"},{"city":
"Pasco, WA","code":"PSC"},{"city":
"Pasni, Pakistan","code":"PSI"},{"city":
"Paso de Los Libres, Argentina","code":"AOL"},{"city":
"Passo Fundo, RS, Brazil","code":"PFB"},{"city":
"Pasto, Colombia","code":"PSO"},{"city":
"Patna, India","code":"PAT"},{"city":
"Patras, Greece","code":"GPA"},{"city":
"Pau, France","code":"PUF"},{"city":
"Paulatuk, NT","code":"YPC"},{"city":
"Pavlodar, Kazakhstan","code":"PWQ"},{"city":
"Peace River, AB","code":"YPE"},{"city":
"Peawanuck, ON","code":"YPO"},{"city":
"Pechora, Russia","code":"PEX"},{"city":
"Pedro Bay, AK","code":"PDB"},{"city":
"Pekanbaru, Indonesia","code":"PKU"},{"city":
"Pelican, AK","code":"PEC"},{"city":
"Pellston, MI","code":"PLN"},{"city":
"Pelotas, RS, Brazil","code":"PET"},{"city":
"Pemba, Mozambique","code":"POL"},{"city":
"Pemba, Tanzania - Wawi","code":"PMA"},{"city":
"Pembroke, ON","code":"YTA"},{"city":
"Penang, Malaysia","code":"PEN"},{"city":
"Pendleton, OR","code":"PDT"},{"city":
"Penrhyn Island, Cook Islands","code":"PYE"},{"city":
"Pensacola, FL","code":"PNS"},{"city":
"Penticton, BC","code":"YYF"},{"city":
"Penzance, United Kingdom","code":"PZE"},{"city":
"Peoria, IL","code":"PIA"},{"city":
"Perce, QC - Rail service","code":"XFG"},{"city":
"Pereira, Colombia","code":"PEI"},{"city":
"Perigueux, France","code":"PGX"},{"city":
"Perito Moreno, SC, Argentina","code":"PMQ"},{"city":
"Perm, Russia","code":"PEE"},{"city":
"Perpignan, France","code":"PGF"},{"city":
"Perryville, AK","code":"KPV"},{"city":
"Perth, Western Australia, Australia","code":"PER"},{"city":
"Perugia, Italy","code":"PEG"},{"city":
"Pescara, Italy","code":"PSR"},{"city":
"Peshawar, Pakistan","code":"PEW"},{"city":
"Petersburg, AK","code":"PSG"},{"city":
"Petrolina, PE, Brazil","code":"PNZ"},{"city":
"Petropaulousk-Kamchats, Russia","code":"PKC"},{"city":
"Petrozavodsk, Russia","code":"PES"},{"city":
"Phalaborwa, South Africa","code":"PHW"},{"city":
"Philadelphia, PA - International","code":"PHL"},{"city":
"Philadelphia, PA - Trenton/Mercer NJ","code":"TTN"},{"city":
"Phitsanulok, Thailand","code":"PHS"},{"city":
"Phnom Penh, Cambodia","code":"PNH"},{"city":
"Phoenix, AZ","code":"PHX"},{"city":
"Phrae, Thailand","code":"PRH"},{"city":
"Phu Quoc, Viet Nam - Duong Dang","code":"PQC"},{"city":
"Phuket, Thailand","code":"HKT"},{"city":
"Pickle Lake, ON","code":"YPL"},{"city":
"Pico Island, Portugal","code":"PIX"},{"city":
"Piedras Negras, Mexico","code":"PDS"},{"city":
"Pierre, SD","code":"PIR"},{"city":
"Pietermaritzburg, South Africa","code":"PZB"},{"city":
"Pietersburb, South Africa","code":"PTG"},{"city":
"Pikangikum, ON","code":"YPM"},{"city":
"Pilot Point, AK","code":"PIP"},{"city":
"Pilot Point, AK - Ugashnik Bay","code":"UGB"},{"city":
"Pilot Station, AK","code":"PQS"},{"city":
"Pingtung, Taiwan","code":"PIF"},{"city":
"Pisa, Italy - Gal Galilei","code":"PSA"},{"city":
"Pittsburgh, PA","code":"PIT"},{"city":
"Pituffik, Greenland","code":"THU"},{"city":
"Piura, Peru","code":"PIU"},{"city":
"Placencia, Belize","code":"PLJ"},{"city":
"Platinum, AK","code":"PTU"},{"city":
"Plattsburgh, NY","code":"PLB"},{"city":
"Pleiku, Viet Nam","code":"PXU"},{"city":
"Plettenburg Bay, South Africa","code":"PBZ"},{"city":
"Plymouth, United Kingdom","code":"PLH"},{"city":
"Pocatello, ID","code":"PIH"},{"city":
"Podgoriea, Serbia and Montenegro - Golubovci","code":"TGD"},{"city":
"Pohnpei, Micronesia","code":"PNI"},{"city":
"Point Baker, AK","code":"KPB"},{"city":
"Point Hope, AK","code":"PHO"},{"city":
"Point Lay, AK","code":"PIZ"},{"city":
"Pointe Noire, Congo","code":"PNR"},{"city":
"Pointe-a-Pitre, Guadeloupe","code":"PTP"},{"city":
"Pointe-aux-Trembles, QC - Rail service","code":"XPX"},{"city":
"Points North Landing, SK","code":"YNL"},{"city":
"Poitiers, France - Biard","code":"PIS"},{"city":
"Poitiers, France - Rail service","code":"XOP"},{"city":
"Pokhara, Nepal","code":"PKR"},{"city":
"Poltava, Ukraine","code":"PLV"},{"city":
"Polyarnyj, Russia","code":"PYJ"},{"city":
"Ponca City, OK","code":"PNC"},{"city":
"Ponce, Puerto Rico","code":"PSE"},{"city":
"Ponce, Puerto Rico","code":"PSE"},{"city":
"Pond Inlet, NU","code":"YIO"},{"city":
"Ponta Delgada, Portugal","code":"PDL"},{"city":
"Ponta Pora, MS, Brazil","code":"PMG"},{"city":
"Pontianak, Indonesia","code":"PNK"},{"city":
"Poplar Hill, ON","code":"YHP"},{"city":
"Popondetta, Papua New Guinea","code":"PNP"},{"city":
"Popraol/Tatry, Slovakia","code":"TAT"},{"city":
"Porbandar, India","code":"PBD"},{"city":
"Pori, Finland","code":"POR"},{"city":
"Porlamar, Venezuela","code":"PMV"},{"city":
"Port Alberni, BC","code":"YPB"},{"city":
"Port Alsworth, AK","code":"PTA"},{"city":
"Port Angeles, WA","code":"CLM"},{"city":
"Port Antonio, Jamaica","code":"POT"},{"city":
"Port Arthur/Beaumont, TX","code":"BPT"},{"city":
"Port Au Prince, Haiti","code":"PAP"},{"city":
"Port Augusta, SA, Australia","code":"PUG"},{"city":
"Port Berge, Madagascar","code":"WPB"},{"city":
"Port Blair, India","code":"IXZ"},{"city":
"Port Clarence, AK","code":"KPC"},{"city":
"Port Elizabeth, South Africa","code":"PLZ"},{"city":
"Port Gentil, Gabon","code":"POG"},{"city":
"Port Harcourt, Nigeria","code":"PHC"},{"city":
"Port Hardy, BC","code":"YZT"},{"city":
"Port Headland, WA, Australia","code":"PHE"},{"city":
"Port Heiden, AK","code":"PTH"},{"city":
"Port Hope Simpson, NL","code":"YHA"},{"city":
"Port Lincoln, SA, Australia","code":"PLO"},{"city":
"Port Macquarie, NS, Australia","code":"PQQ"},{"city":
"Port Meiner, QC","code":"YPN"},{"city":
"Port Moller, AK","code":"PML"},{"city":
"Port Moresby, Papua New Guinea","code":"POM"},{"city":
"Port of Spain, Trinidad","code":"POS"},{"city":
"Port Protection, AK","code":"PPV"},{"city":
"Port Stanley, Falkland Islands","code":"PSY"},{"city":
"Port Sudan, Sudan","code":"PZU"},{"city":
"Port Vila, Vanuatu","code":"VLI"},{"city":
"Portage Creek, AK","code":"PCA"},{"city":
"Portland, ME","code":"PWM"},{"city":
"Portland, OR","code":"PDX"},{"city":
"Portland, VI, Australia","code":"PTJ"},{"city":
"Porto Alegre, RS, Brazil","code":"POA"},{"city":
"Porto Santo, Portugal","code":"PXO"},{"city":
"Porto Seguro, Brazil","code":"BPS"},{"city":
"Porto Velho, RO, Brazil","code":"PVH"},{"city":
"Porto, Portugal","code":"OPO"},{"city":
"Portoviejo, Ecuador","code":"PVO"},{"city":
"Portsmouth, NH","code":"PSM"},{"city":
"Posadas, MI, Argentina","code":"PSS"},{"city":
"Postville, NL","code":"YSO"},{"city":
"Poughkeepsie, NY","code":"POU"},{"city":
"Povungnituk, QC","code":"YPX"},{"city":
"Powell River, BC","code":"YPW"},{"city":
"Poza Rico, Mexico","code":"PAZ"},{"city":
"Poznan, Poland","code":"POZ"},{"city":
"Prague, Czech Republic","code":"PRG"},{"city":
"Praia, Cape Verde","code":"RAI"},{"city":
"Pres. Roque Saenz Pena, CH, Argentina","code":"PRQ"},{"city":
"Prescott, AZ","code":"PRC"},{"city":
"Prescott, ON - Rail service","code":"XII"},{"city":
"Presidente Prudente, SP, Brazil","code":"PPB"},{"city":
"Presque Isle, ME","code":"PQI"},{"city":
"Preveza/Lefkas, Greece","code":"PVK"},{"city":
"Prince Albert, SK","code":"YPA"},{"city":
"Prince George, BC","code":"YXS"},{"city":
"Prince George, BC - Rail service","code":"XDV"},{"city":
"Prince Rupert, BC - Digby Island Airport","code":"YPR"},{"city":
"Prince Rupert, BC - Rail service","code":"XDW"},{"city":
"Princeton, WV","code":"BLF"},{"city":
"Pristina, Serbia and Montenegro","code":"PRN"},{"city":
"Proserpine, QL, Australia","code":"PPP"},{"city":
"Providence, RI","code":"PVD"},{"city":
"Providenciales, Turks and Caicos Islands","code":"PLS"},{"city":
"Provincetown, MA","code":"PVC"},{"city":
"Prudhoe Bay/Deadhorse, AK","code":"SCC"},{"city":
"Pucallpa, Peru","code":"PCL"},{"city":
"Puebla, Mexico","code":"PBC"},{"city":
"Pueblo, CO","code":"PUB"},{"city":
"Puerto Ayacucha, Venezuela","code":"PYH"},{"city":
"Puerto Berria, Colombia","code":"PBE"},{"city":
"Puerto del Rosario, Spain","code":"FUE"},{"city":
"Puerto Deseado, SC, Argentina","code":"PUD"},{"city":
"Puerto Escondido, Mexico","code":"PXM"},{"city":
"Puerto Jimenez, Costa Rica","code":"PJM"},{"city":
"Puerto Lempira, Honduras","code":"PEU"},{"city":
"Puerto Madryn, CB, Argentina","code":"PMY"},{"city":
"Puerto Maldonado, Peru","code":"PEM"},{"city":
"Puerto Montt, Chile","code":"PMC"},{"city":
"Puerto Ordaz, Venezuela","code":"PZO"},{"city":
"Puerto Plata, Dominican Republic","code":"POP"},{"city":
"Puerto Princesa, Philippines","code":"PPS"},{"city":
"Puerto Suarez, Bolivia","code":"PSZ"},{"city":
"Puerto Vallarta, Mexico","code":"PVR"},{"city":
"Pukatawagan, MB -","code":"XPK"},{"city":
"Pula, Croatia","code":"PUY"},{"city":
"Pullman, WA","code":"PUW"},{"city":
"Pune, India","code":"PNQ"},{"city":
"Punta Arenas, Chile","code":"PUQ"},{"city":
"Punta Cana, Dominican Republic","code":"PUJ"},{"city":
"Punta Del Este, Uruguay","code":"PDP"},{"city":
"Punta Gorda, Belize","code":"PND"},{"city":
"Punta Islita, Costa Rica","code":"PBP"},{"city":
"Puttaparthi, India","code":"PUT"},{"city":
"Putussibau, Indonesia","code":"PSU"},{"city":
"Pyongyang, North Korea","code":"FNJ"},{"city":
"Qaisumah, Saudi Arabia","code":"AQI"},{"city":
"Qaqortoq, Greenland","code":"JJU"},{"city":
"Qiemo, China","code":"IQM"},{"city":
"Qikiqtarjuaq, NU","code":"YVM"},{"city":
"Qingdao, China","code":"TAO"},{"city":
"Qiqihar, China","code":"NDG"},{"city":
"Qualicum, BC","code":"XQU"},{"city":
"Quaqtaq, QC","code":"YQC"},{"city":
"Quebec, QC - Charny Rail service","code":"YFZ"},{"city":
"Quebec, QC - International Airport","code":"YQB"},{"city":
"Quebec, QC - Levis Rail service","code":"XLK"},{"city":
"Quebec, QC - Quebec Station Rail service","code":"XLJ"},{"city":
"Quebec, QC - Sainte-Foy Rail service","code":"XFY"},{"city":
"Queenstown, New Zealand","code":"ZQN"},{"city":
"Quelimane, Mozambique","code":"UEL"},{"city":
"Quepos, Costa Rica","code":"XQP"},{"city":
"Queretaro, Mexico","code":"QRO"},{"city":
"Quesnel, BC","code":"YQZ"},{"city":
"Quetta, Pakistan","code":"UET"},{"city":
"Qui Nhon, Viet Nam","code":"UIH"},{"city":
"Quibdo, Colombia","code":"UIB"},{"city":
"Quimper, France","code":"UIP"},{"city":
"Quincy, IL","code":"UIN"},{"city":
"Quinhagak, AK","code":"KWN"},{"city":
"Quipi, QL, Australia","code":"ULP"},{"city":
"Quito, Ecuador","code":"UIO"},{"city":
"Rabaraba, Papua New Guinea","code":"RBP"},{"city":
"Rabat, Morocco","code":"RBA"},{"city":
"Rabaul, Papua New Guinea","code":"RAB"},{"city":
"Rach Gia, Viet Nam","code":"VKG"},{"city":
"Raduzhnyi, Russia","code":"RAT"},{"city":
"Rae Lakes, NT","code":"YRA"},{"city":
"Rafha, Saudi Arabia","code":"RAH"},{"city":
"Rafsanjan, Iran","code":"RJN"},{"city":
"Raiatea, French Polynesia","code":"RFP"},{"city":
"Rainbow Lake, AB","code":"YOP"},{"city":
"Rajkot, India","code":"RAJ"},{"city":
"Rajshahi, Bangladesh","code":"RJH"},{"city":
"Raleigh/Durham, NC","code":"RDU"},{"city":
"Ramato, Solomon Islands","code":"RBV"},{"city":
"Ramingining, NT, Australia","code":"RAM"},{"city":
"Rampart, AK","code":"RMP"},{"city":
"Ranchi, India","code":"IXR"},{"city":
"Rankin Inlet, NU","code":"YRT"},{"city":
"Ranong, Thailand","code":"UNN"},{"city":
"Rapid City, SD","code":"RAP"},{"city":
"Rarotonga, Cook Islands","code":"RAR"},{"city":
"Ras Al Khaimah, United Arab Emirates","code":"RKT"},{"city":
"Rasht, Iran","code":"RAS"},{"city":
"Ratanakiri, Cambodia","code":"RBE"},{"city":
"Rawala Kot, Pakistan","code":"RAZ"},{"city":
"Reading, PA","code":"RDG"},{"city":
"Rebun, Japan","code":"RBJ"},{"city":
"Recife, PE, Brazil","code":"REC"},{"city":
"Reconquista, SF, Argentina","code":"RCQ"},{"city":
"Red Devil, AK","code":"RDV"},{"city":
"Red Lake, ON","code":"YRL"},{"city":
"Red Sucker Lake, MB","code":"YRS"},{"city":
"Redding, CA","code":"RDD"},{"city":
"Redmond, OR","code":"RDM"},{"city":
"Reggio Calabria, Italy","code":"REG"},{"city":
"Regina, SK","code":"YQR"},{"city":
"Rennell, Solomon Islands","code":"RNL"},{"city":
"Rennes, France","code":"RNS"},{"city":
"Reno, NV","code":"RNO"},{"city":
"Repulse Bay, NU","code":"YUT"},{"city":
"Resistencia, CW, Argentina","code":"RES"},{"city":
"Resolute, NU","code":"YRB"},{"city":
"Reus, Spain and Canary Islands","code":"REU"},{"city":
"Reykjavik, Iceland","code":"KEF"},{"city":
"Reynossa, Mexico","code":"REX"},{"city":
"Rhinelander, WI,","code":"RHI"},{"city":
"Rhodes, Gabon","code":"RHO"},{"city":
"Ribeirao Preto, SP, Brazil","code":"RAO"},{"city":
"Riberalta, Bolivia","code":"RIB"},{"city":
"Richards Bay, South Africa","code":"RCB"},{"city":
"Richmond, QL, Australia","code":"RCM"},{"city":
"Richmond, VA","code":"RIC"},{"city":
"Riga, Latvia","code":"RIX"},{"city":
"Rigolet, NL","code":"YRG"},{"city":
"Rijeka, Croatia","code":"RJK"},{"city":
"Rimini, Italy","code":"RMI"},{"city":
"Rimouski, QC","code":"YXK"},{"city":
"Rio Branco, AC, Brazil","code":"RBR"},{"city":
"Rio Cuarto, CD, Argentina","code":"RCU"},{"city":
"Rio De Janeiro, RJ, Brazil","code":"GIG"},{"city":
"Rio Gallegos, Argentina - Internacional","code":"RGL"},{"city":
"Rio Grande, RS, Brazil","code":"RIG"},{"city":
"Rio Grande, TF, Argentina","code":"RGA"},{"city":
"Rio Mayo, CB, Argentina","code":"ROY"},{"city":
"Rio Verde, GO, Brazil","code":"RVD"},{"city":
"Riohacha, Colombia","code":"RCH"},{"city":
"Rishiri, Japan","code":"RIS"},{"city":
"Riverton, WY","code":"RIW"},{"city":
"Riviere-a-Pierre, QC - Rail service","code":"XRP"},{"city":
"Riyadh, Saudi Arabia","code":"RUH"},{"city":
"Riyan Mukalla, Yemen","code":"RIY"},{"city":
"Roane, France","code":"RNE"},{"city":
"Roanoke, VA","code":"ROA"},{"city":
"Roatan, Honduras","code":"RTB"},{"city":
"Roberval, QC","code":"YRJ"},{"city":
"Roch Gia, Viet Nam","code":"VKG"},{"city":
"Roche Harbor, WA","code":"RCE"},{"city":
"Rochester, MN","code":"RST"},{"city":
"Rochester, NY","code":"ROC"},{"city":
"Rock Sound, Bahamas","code":"RSD"},{"city":
"Rock Springs, WY","code":"RKS"},{"city":
"Rockford, IL - Park&Ride Bus","code":"ZRF"},{"city":
"Rockford, IL - Van Galder Bus","code":"ZRK"},{"city":
"Rockhampton, QL, Australia","code":"ROK"},{"city":
"Rockland, ME","code":"RKD"},{"city":
"Rodez, France","code":"RDZ"},{"city":
"Rodrigues Island, Mauritius","code":"RRG"},{"city":
"Roervik, Norway","code":"RVK"},{"city":
"Rognan, Norway","code":"ZXM"},{"city":
"Roma, QL, Australia","code":"RMA"},{"city":
"Rome, Italy - All airports","code":"ROM"},{"city":
"Rome, Italy - Ciampino","code":"CIA"},{"city":
"Rome, Italy - Leonardo Da Vinci/Fiumicino","code":"FCO"},{"city":
"Rongelap Island, Marshall Islands","code":"RNP"},{"city":
"Ronneby, Sweden","code":"RNB"},{"city":
"Roros, Norway","code":"RRS"},{"city":
"Rorutu, French Polynesia","code":"RUR"},{"city":
"Rosario, SF, Argentina","code":"ROS"},{"city":
"Rosario, WA","code":"RSJ"},{"city":
"Rosh Pina, Iceland","code":"RPN"},{"city":
"Rost, Norway","code":"RET"},{"city":
"Rostock-Laage, Germany","code":"RLG"},{"city":
"Rostov, Russia","code":"ROV"},{"city":
"Roswell, NM","code":"ROW"},{"city":
"Rota, Northern Mariana Islands","code":"ROP"},{"city":
"Rotorua, New Zealand","code":"ROT"},{"city":
"Rotterdam, Netherlands","code":"RTM"},{"city":
"Rouen, France","code":"URO"},{"city":
"Round Lake, ON","code":"ZRJ"},{"city":
"Rouyn/Noranda, QC","code":"YUY"},{"city":
"Rovaniemi, Finland","code":"RVN"},{"city":
"Ruby, AK","code":"RBY"},{"city":
"Russian Mission, AK","code":"RSH"},{"city":
"Rutland, VT","code":"RUT"},{"city":
"S. Cristobal del Casas, Mexico","code":"SZT"},{"city":
"Saarbruecken, Germany","code":"QFZ"},{"city":
"Sachigo Lake, ON","code":"ZPB"},{"city":
"Sachs Harbour, NT","code":"YSY"},{"city":
"Sackville, NB - Rail service","code":"XKV"},{"city":
"Sacramento, CA","code":"SMF"},{"city":
"Saginaw, MI","code":"MBS"},{"city":
"Saint Cloud, MN","code":"STC"},{"city":
"Saint Croix, U.S. Virgin Islands","code":"STX"},{"city":
"Saint George Island, AK","code":"STG"},{"city":
"Saint George, UT","code":"SGU"},{"city":
"Saint Hyacinthe, QC - Rail service","code":"XIM"},{"city":
"Saint John, NB","code":"YSJ"},{"city":
"Saint Johns, NL","code":"YYT"},{"city":
"Saint Leonard, NB","code":"YSL"},{"city":
"Saint Louis, MO","code":"STL"},{"city":
"Saint Lucia, ST. LUCIA","code":"SLU"},{"city":
"Saint Maarten, Netherlands Antilles","code":"SXM"},{"city":
"Saint Mary's, AK","code":"KSM"},{"city":
"Saint Michael, AK","code":"SMK"},{"city":
"Saint Paul Island, AK","code":"SNP"},{"city":
"Saint Petersburg, Russia - Pulkovo","code":"LED"},{"city":
"Saint Thomas, U.S. Virgin Islands","code":"STT"},{"city":
"Saint Tropez, France","code":"XPZ"},{"city":
"Saint Tropez, France - La Mole","code":"LTT"},{"city":
"Saipan, Northern Mariana Islands","code":"SPN"},{"city":
"Sakon Nakhon, Thailand","code":"SNO"},{"city":
"Salehard, Russia","code":"SLY"},{"city":
"Salem, OR","code":"SLE"},{"city":
"Salina, KS","code":"SLN"},{"city":
"Salisbury-Ocean City, MD","code":"SBY"},{"city":
"Salluit, QC","code":"YZG"},{"city":
"Salt Cay, Turks and Caicos Islands","code":"SLX"},{"city":
"Salt Lake City, UT","code":"SLC"},{"city":
"Saltillo, Mexico","code":"SLW"},{"city":
"Salvadore, BA, Brazil","code":"SSA"},{"city":
"Salzburg, Austria","code":"SZG"},{"city":
"Samara, Russia","code":"KUF"},{"city":
"Sambaua, Madagascar","code":"SVB"},{"city":
"Samburu, Kenya","code":"UAS"},{"city":
"Samos, Greece","code":"SMI"},{"city":
"San Andres Island, Colombia","code":"ADZ"},{"city":
"San Angelo, TX","code":"SJT"},{"city":
"San Antonio Oesta, RN, Argentina","code":"OES"},{"city":
"San Antonio, TX","code":"SAT"},{"city":
"San Antonio, Venezuela","code":"SVZ"},{"city":
"San Carlos, Argentina","code":"BRC"},{"city":
"San Diego, CA","code":"SAN"},{"city":
"San Francisco, CA","code":"SFO"},{"city":
"San Jose, CA","code":"SJC"},{"city":
"San Jose, Costa Rica - Juan Santa Maria","code":"SJO"},{"city":
"San Jose, Costa Rica - Tobias Bolanos Int'l","code":"SYQ"},{"city":
"San Juan, Puerto Rico","code":"SJU"},{"city":
"San Juan, Puerto Rico","code":"SJU"},{"city":
"San Juan, SJ, Argentina","code":"UAQ"},{"city":
"San Julian, SC, Argentina","code":"ULA"},{"city":
"San Luis Obispo, CA","code":"SBP"},{"city":
"San Luis Potosi, Mexico","code":"SLP"},{"city":
"San Luis, SL, Argentina","code":"LUQ"},{"city":
"San Marino, San Marino","code":"SAI"},{"city":
"San Martin De Los Andes, Argentina","code":"CPC"},{"city":
"San Miguel, Panama","code":"NMG"},{"city":
"San Pedro Sula, Honduras","code":"SAP"},{"city":
"San Rafael, Argentina","code":"AFA"},{"city":
"San Salvador, Bahamas","code":"ZSA"},{"city":
"San Salvador, El Salvador","code":"SAL"},{"city":
"San Sebastian, Spain","code":"EAS"},{"city":
"Sana'a, Yemen","code":"SAH"},{"city":
"Sand Point, AK","code":"SDP"},{"city":
"Sanday, United Kingdom","code":"NDY"},{"city":
"Sandy Lake, ON","code":"ZSJ"},{"city":
"Sanford, FL","code":"SFB"},{"city":
"Sanikiluaq, NU","code":"YSK"},{"city":
"Santa Ana, CA","code":"SNA"},{"city":
"Santa Ana, Solomon Islands","code":"NNB"},{"city":
"Santa Barbara, CA","code":"SBA"},{"city":
"Santa Barbara, Ed, Venezuela","code":"STB"},{"city":
"Santa Cruz De La Palma, Spain and Canary Islands - La Palma","code":"SPC"},{"city":
"Santa Cruz, Bolivia","code":"VVI"},{"city":
"Santa Fe, NM","code":"SAF"},{"city":
"Santa Maria, Brazil","code":"RIA"},{"city":
"Santa Maria, CA","code":"SMX"},{"city":
"Santa Maria, Portugal","code":"SMA"},{"city":
"Santa Marta, Colombia","code":"SMR"},{"city":
"Santa Rosa, CA","code":"STS"},{"city":
"Santa Rosa, LP, Argentina","code":"RSA"},{"city":
"Santarem, PA, Brazil","code":"STM"},{"city":
"Sante Marie, Madagascar","code":"SMS"},{"city":
"Santiago, Chile","code":"SCL"},{"city":
"Santiago, Dominican Republic","code":"STI"},{"city":
"Santo Angelo, Brazil","code":"GEL"},{"city":
"Santo Antao, Cape Verde","code":"NTO"},{"city":
"Santo Domingo, Dominican Republic - Herrera","code":"HEX"},{"city":
"Santo Domingo, Dominican Republic - Las Americas","code":"SDQ"},{"city":
"Santo Domingo, Venezuela","code":"STD"},{"city":
"Sanya, China","code":"SYX"},{"city":
"Sao Nicolau, Cape Verde","code":"SNE"},{"city":
"Sao Paulo, Brazil - Congonhas","code":"CGH"},{"city":
"Sao Paulo, Brazil - Guarulhos Intl","code":"GRU"},{"city":
"Sao Paulo, Brazil - Viracopos","code":"VCP"},{"city":
"Sao Tome Is., Sao Tome and Principe","code":"TMS"},{"city":
"Sao Vicente, Cape Verde","code":"VXE"},{"city":
"Sapporo, Japan - Chitose","code":"CTS"},{"city":
"Sapporo, Japan - Okadama","code":"OKD"},{"city":
"Sara, Vanuatu","code":"SSR"},{"city":
"Saranac Lake, NY","code":"SLK"},{"city":
"Sarasota, FL","code":"SRQ"},{"city":
"Saratov, Russia","code":"RTW"},{"city":
"Sarmi, Indonesia","code":"ZRM"},{"city":
"Sarnia, ON","code":"YZR"},{"city":
"Sarnia, ON - Rail service","code":"XDX"},{"city":
"Saskatoon, SK","code":"YXE"},{"city":
"Satu Mare, Romania","code":"SUJ"},{"city":
"Satwag, Papua New Guinea","code":"SWG"},{"city":
"Sau Luiz, MA, Brazil","code":"SLZ"},{"city":
"Sault Ste Marie, MI,","code":"CIU"},{"city":
"Sault Ste-Marie, ON","code":"YAM"},{"city":
"Saumlaki, Indonesia","code":"SXK"},{"city":
"Savannah, GA","code":"SAV"},{"city":
"Savannakhet, Laos","code":"ZVK"},{"city":
"Savonlinna, Finland","code":"SVL"},{"city":
"Savoonga, AK","code":"SVA"},{"city":
"Savusavu, Fiji","code":"SVU"},{"city":
"Sayaboury, Laos","code":"ZBY"},{"city":
"Scammon Bay, AK","code":"SCM"},{"city":
"Schefferville, QC","code":"YKL"},{"city":
"Scottsbluff, NE","code":"BFF"},{"city":
"Scranton, PA","code":"AVP"},{"city":
"Seattle, WA - Lake Union SPB","code":"LKE"},{"city":
"Seattle, WA - Seattle/Tacoma International","code":"SEA"},{"city":
"Sege, Solomon Islands","code":"EGM"},{"city":
"Seiyun, Yemen","code":"GXF"},{"city":
"Selawik, AK","code":"WLK"},{"city":
"Selje, Norway","code":"QFK"},{"city":
"Semarang, Indonesia","code":"SRG"},{"city":
"Senggo, Indonesia","code":"ZEG"},{"city":
"Senneterre, QC - Rail service","code":"XFK"},{"city":
"Seoul, South Korea - All Airports","code":"SEL"},{"city":
"Seoul, South Korea - Gimpo International","code":"GMP"},{"city":
"Seoul, South Korea - Incheon International","code":"ICN"},{"city":
"Sept-Iles, QC","code":"YZV"},{"city":
"Servi, Indonesia","code":"ZRI"},{"city":
"Sesriem, Namibia","code":"SZM"},{"city":
"Sevilla, Spain and Canary Islands","code":"SVQ"},{"city":
"Seward, AK","code":"SWD"},{"city":
"Shageluk, AK","code":"SHX"},{"city":
"Shaktoolik, AK","code":"SKK"},{"city":
"Shamattawa, MB","code":"ZTM"},{"city":
"Shanghai, China","code":"PVG"},{"city":
"Shannon, Ireland","code":"SNN"},{"city":
"Shantou, China","code":"SWA"},{"city":
"Sharm El Sheikh, Egypt","code":"SSH"},{"city":
"Shawinigan, QC - Rail service","code":"XFL"},{"city":
"Shawnigan, BC - Rail service","code":"XFM"},{"city":
"Sheffield, United Kingdom","code":"SZD"},{"city":
"Sheffield/Florence/Muscle Shoals, AL","code":"MSL"},{"city":
"Sheldon Point, AK","code":"SXP"},{"city":
"Shenzhen, China","code":"SZX"},{"city":
"Sheridan, WY","code":"SHR"},{"city":
"Shetland Islands, United Kingdom - Lerwick/Tingwall","code":"LWK"},{"city":
"Shetland Islands, United Kingdom - Sumburgh","code":"LSI"},{"city":
"Shillavo, Ethiopia","code":"HIL"},{"city":
"Shimkent, Kazakhstan","code":"CIT"},{"city":
"Shiraz, Iran","code":"SYZ"},{"city":
"Shishmaref, AK","code":"SHH"},{"city":
"Shonai, Japan","code":"SYO"},{"city":
"Shreveport, LA","code":"SHV"},{"city":
"Shungnak, AK","code":"SHG"},{"city":
"Shute Harbor, Australia","code":"JHQ"},{"city":
"Siem Reap, Cambodia","code":"REP"},{"city":
"Silchar, India","code":"IXS"},{"city":
"Silver City, NM","code":"SVC"},{"city":
"Simao, China","code":"SYM"},{"city":
"Sinak, Indonesia","code":"NKD"},{"city":
"Singapore, Singapore - Changi","code":"SIN"},{"city":
"Singapore, Singapore - Seletar","code":"XSP"},{"city":
"Sintang, Indonesia","code":"SQG"},{"city":
"Sioux City, IA","code":"SUX"},{"city":
"Sioux Falls, SD","code":"FSD"},{"city":
"Sioux Lookout, ON","code":"YXL"},{"city":
"Sisimiut, Greenland","code":"JHS"},{"city":
"Sitka, AK","code":"SIT"},{"city":
"Sittwe, Myanmar","code":"AKY"},{"city":
"Sivas, Turkey","code":"VAS"},{"city":
"Skagway, AK","code":"SGY"},{"city":
"Skiathos, Greece","code":"JSI"},{"city":
"Skopie, Macedonia","code":"FYROM"},{"city":
"Skovde, Sweden","code":"KVB"},{"city":
"Skukuza, South Africa","code":"SZK"},{"city":
"Sleetmore, AK","code":"SLQ"},{"city":
"Sligo, Ireland","code":"SXL"},{"city":
"Smith Falls, ON","code":"YSH"},{"city":
"Smithers, BC","code":"YYD"},{"city":
"Snare Lake, NT","code":"YFJ"},{"city":
"Soalala, Madagascar","code":"DWB"},{"city":
"Soderham, Sweden","code":"SOO"},{"city":
"Sofia, Bulgaria","code":"SOF"},{"city":
"Sognolal, Norway","code":"SOG"},{"city":
"Solo City, Indonesia","code":"SOC"},{"city":
"Son-La, Viet Nam - Na-San","code":"SQH"},{"city":
"Sorkjosen, Norway","code":"SOJ"},{"city":
"Sorocaba, Brazil","code":"SOD"},{"city":
"South Andros, Bahamas","code":"TZN"},{"city":
"South Bend, IN","code":"SBN"},{"city":
"South Caicos, Turks and Caicos Islands","code":"XSC"},{"city":
"South Hampton, United Kingdom","code":"SOU"},{"city":
"South Indian Lake, MB","code":"XSI"},{"city":
"South Molle Island, QL, Australia","code":"SOI"},{"city":
"South Naknek, AK","code":"WSN"},{"city":
"Southern Pines, NC","code":"SOP"},{"city":
"Spartanburg/Greenville, SC","code":"GSP"},{"city":
"Split, Croatia","code":"SPU"},{"city":
"Spokane, WA","code":"GEG"},{"city":
"Spring Point, Bahamas","code":"AXP"},{"city":
"Springfield, IL","code":"SPI"},{"city":
"Springfield, MO","code":"SGF"},{"city":
"Srinagar, India","code":"SXR"},{"city":
"St Anthony, NL","code":"YAY"},{"city":
"St Catharines, ON","code":"YCM"},{"city":
"St Denis de la Reunion, Reunion","code":"RUN"},{"city":
"St Kitts, St Kitts and Nevis","code":"SKB"},{"city":
"St Marys, ON - Rail service","code":"XIO"},{"city":
"St Petersburg/Clearwater, FL","code":"PIE"},{"city":
"St Pierre, St Pierre and Miquelon","code":"FSP"},{"city":
"St Vincent, Saint Vincent and the Grenadines","code":"SVD"},{"city":
"St. Croix Island, U.S. Virgin Islands","code":"STX"},{"city":
"St. Etienne, France","code":"EBU"},{"city":
"St. Eustatius, Netherlands Antilles","code":"EUX"},{"city":
"St. Lucia, St. Lucia","code":"UVF"},{"city":
"St. Lucia, St. Lucia - Hawnorra","code":"UVF"},{"city":
"St. Petersburg, Russia","code":"LED"},{"city":
"St. Pierre de la Reunion, Reunion","code":"ZSE"},{"city":
"St. Thomas Island, U.S. Virgin Islands","code":"STT"},{"city":
"State College/University Park, PA","code":"SCE"},{"city":
"Staunton, VA","code":"SHD"},{"city":
"Stavanger, Norway","code":"SVG"},{"city":
"Stavropol, Russia","code":"STW"},{"city":
"Ste Therese Point, MB","code":"YST"},{"city":
"Steamboat Springs, CO","code":"SBS"},{"city":
"Stebbins, AK","code":"WBB"},{"city":
"Stella Maris, Bahamas","code":"SML"},{"city":
"Stephenville, NL","code":"YJT"},{"city":
"Stevens Point/Wausau, WI","code":"CWA"},{"city":
"Stevens Village, AK","code":"SVS"},{"city":
"Stewart Field/Newburgh, NY","code":"SWF"},{"city":
"Stockholm, Sweden - All airports","code":"STO"},{"city":
"Stockholm, Sweden - Arlanda","code":"ARN"},{"city":
"Stockholm, Sweden - Bromma","code":"BMA"},{"city":
"Stockton, CA","code":"SCK"},{"city":
"Stony Rapids, SK","code":"YSF"},{"city":
"Stony River, AK","code":"SRV"},{"city":
"Stornoway, United Kingdom","code":"SYY"},{"city":
"Storuman, Sweden","code":"SQO"},{"city":
"Strasbourg, France - Bus service","code":"XER"},{"city":
"Strasbourg, France - Entzheim","code":"SXB"},{"city":
"Strathroy, ON - Rail service","code":"XTY"},{"city":
"Stronsay, United Kingdom","code":"SOY"},{"city":
"Stung Treng, Cambodia","code":"TNX"},{"city":
"Stuttgart, Germany - Echterdingen","code":"STR"},{"city":
"Stuttgart, Germany - Rail service","code":"ZWS"},{"city":
"Suavanao, Solomon Islands","code":"VAO"},{"city":
"Sucre, Bolivia","code":"SRE"},{"city":
"Sudbury, ON","code":"YSB"},{"city":
"Sudbury, ON - Rail service","code":"XDY"},{"city":
"Sue Island, QL, Australia","code":"SYU"},{"city":
"Sui, Pakistan","code":"SUL"},{"city":
"Sukhotthai, Thailand","code":"THS"},{"city":
"Summer Beaver, ON","code":"SUR"},{"city":
"Sun City, South Africa","code":"NTY"},{"city":
"Sun Valley, ID","code":"SUN"},{"city":
"Sunshine Coast, QL, Australia","code":"MCY"},{"city":
"Surabaya, Indonesia","code":"SUB"},{"city":
"Surat Thani, Thailand","code":"URT"},{"city":
"Suva, Fiji","code":"SUV"},{"city":
"Sveg, Sweden","code":"EVG"},{"city":
"Svolvaer, Norway","code":"SVJ"},{"city":
"Swan River, MB","code":"ZJN"},{"city":
"Sydney, New South Wales, Australia","code":"SYD"},{"city":
"Sydney, NS","code":"YQY"},{"city":
"Sylhet, Bangladesh","code":"ZYL"},{"city":
"Syracuse, NY","code":"SYR"},{"city":
"Szczecin, Poland","code":"SZZ"},{"city":
"Taba, Egypt","code":"TCP"},{"city":
"Tabarka, Tunisia","code":"TBJ"},{"city":
"Tabatinga, AM, Brazil","code":"TBT"},{"city":
"Tabora, Tanzania","code":"TBO"},{"city":
"Tabriz, Iran","code":"TBZ"},{"city":
"Tabubil, Papua New Guinea","code":"TBG"},{"city":
"Tabuk, Saudi Arabia","code":"TUU"},{"city":
"Tacheng, China","code":"TCG"},{"city":
"Tachilek, Myanmar","code":"THL"},{"city":
"Tacloban, Philippines","code":"TAC"},{"city":
"Tacna, Peru","code":"TCQ"},{"city":
"Tadoule Lake, MB","code":"XTL"},{"city":
"Taichung, Taiwan","code":"TXG"},{"city":
"Taif, Saudi Arabia","code":"TIF"},{"city":
"Tainan, Taiwan","code":"TNN"},{"city":
"Taipei, Taiwan - Chiang Kai Shek","code":"TPE"},{"city":
"Taipei, Taiwan - Sung Shan","code":"TSA"},{"city":
"Taitung, Taiwan","code":"TTT"},{"city":
"Taiyuan, China","code":"TYN"},{"city":
"Taiz, Yemen","code":"TAI"},{"city":
"Takotna, AK","code":"TCT"},{"city":
"Talkeetna, AK","code":"TKA"},{"city":
"Tallahassee, FL","code":"TLH"},{"city":
"Tallinn, Estonia","code":"TLL"},{"city":
"Taloyoak, NU","code":"YYH"},{"city":
"Tamanrasset, Algeria","code":"TMR"},{"city":
"Tamarindo, Costa Rica","code":"TNO"},{"city":
"Tamatave, Madagascar","code":"TMM"},{"city":
"Tambohorano, Madagascar","code":"WTA"},{"city":
"Tambolaka, Indonesia","code":"TMC"},{"city":
"Tambor, Costa Rica","code":"TMU"},{"city":
"Tampa, FL","code":"TPA"},{"city":
"Tampere, Finland","code":"TMP"},{"city":
"Tampico, Mexico","code":"TAM"},{"city":
"Tamworth, NS, Australia","code":"TMW"},{"city":
"Tanahmerah, Indonesia","code":"TMH"},{"city":
"Tanana, AK","code":"TAL"},{"city":
"Tangier, Morocco","code":"TNG"},{"city":
"Tanjung Pandan, Indonesia","code":"TJQ"},{"city":
"Tanjung Selor, Indonesia","code":"TJS"},{"city":
"Tanna, Vanuatu","code":"TAH"},{"city":
"Taos, NM","code":"TSM"},{"city":
"Tapachula, Mexico","code":"TAP"},{"city":
"Tarakan, Indonesia","code":"TRK"},{"city":
"Taramajma, Japan","code":"TRA"},{"city":
"Taranto, Italy","code":"TAR"},{"city":
"Tarapoto, Peru","code":"TPP"},{"city":
"Tarawa, Kiribati","code":"TRW"},{"city":
"Taree, NS, Australia","code":"TRO"},{"city":
"Tari, Papua New Guinea","code":"TIZ"},{"city":
"Tarija, Bolivia","code":"TJA"},{"city":
"Tashkent, Uzbekistan","code":"TAS"},{"city":
"Tasiujuaq, QC","code":"YTQ"},{"city":
"Tatitlek, AK","code":"TEK"},{"city":
"Taupo, New Zealand","code":"TUO"},{"city":
"Tauranga, New Zealand","code":"TRG"},{"city":
"Taveuni, Fiji","code":"TVU"},{"city":
"Tawau, Malaysia","code":"TWU"},{"city":
"Tbessa, Algeria","code":"TEE"},{"city":
"Tbilisi, Georgia","code":"TBS"},{"city":
"Tchibanga, Gabon","code":"TCH"},{"city":
"Te Anau, New Zealand","code":"TEU"},{"city":
"Teesside, United Kingdom","code":"MME"},{"city":
"Tefe, AM, Brazil","code":"TFF"},{"city":
"Tegucigalpa, Honduras","code":"TGU"},{"city":
"Tehran, Iran - Mehrabad","code":"THR"},{"city":
"Tekadu, Papua New Guinea","code":"TKB"},{"city":
"Tel Aviv, Israel","code":"TLV"},{"city":
"Teller Mission, AK","code":"KTS"},{"city":
"Telluride, CO","code":"TEX"},{"city":
"Tembagapura, Indonesia","code":"TIM"},{"city":
"Teminabuan, Indonesia","code":"TXM"},{"city":
"Temuco, Chile","code":"ZCO"},{"city":
"Tenakee Springs, AK","code":"TKE"},{"city":
"Tenerife, Spain and Canary Islands - Norte Los Rodeos","code":"TFN"},{"city":
"Tenerife, Spain and the Canary Islands - Sur Reina Sofia","code":"TFS"},{"city":
"Tennant Creek, NT, Australia","code":"TCA"},{"city":
"Tepic, Mexico","code":"TPQ"},{"city":
"Terceira Island, Portugal","code":"TER"},{"city":
"Teresina, PI, Brazil","code":"THE"},{"city":
"Termez, Uzbekistan","code":"TMJ"},{"city":
"Ternate, Indonesia","code":"TTE"},{"city":
"Terrace, BC","code":"YXT"},{"city":
"Terre Haute, IN","code":"HUF"},{"city":
"Tetabedi, Papua New Guinea","code":"TDB"},{"city":
"Tete, Mozambique","code":"TET"},{"city":
"Tete-a-La Baleine, QC","code":"ZTB"},{"city":
"Tetlin, AK","code":"TEH"},{"city":
"Tetuan, Morocco","code":"TTU"},{"city":
"Texarkana, AR","code":"TXK"},{"city":
"Tezpur, India","code":"TEZ"},{"city":
"Thandwe, Myanmar","code":"SNW"},{"city":
"Thangool, QL, Australia","code":"THG"},{"city":
"Thargomindah, QL, Australia","code":"XTG"},{"city":
"The Bight, Bahamas","code":"TBI"},{"city":
"The Pas, MB","code":"YQD"},{"city":
"The Pas, MB - Rail service","code":"XDZ"},{"city":
"Thessaloniki, Greece","code":"SKG"},{"city":
"Thicket Portage, MB","code":"YTD"},{"city":
"Thief River Falls, MN","code":"TVF"},{"city":
"Thira, Greece","code":"JTR"},{"city":
"Thiruvananthapuram, India","code":"TRV"},{"city":
"Thompson, MB","code":"YTH"},{"city":
"Thorne Bay, AK","code":"KTB"},{"city":
"Thorshofn, Iceland","code":"THO"},{"city":
"Thunder Bay, ON","code":"YQT"},{"city":
"Thursday Island, QL, Australia","code":"TIS"},{"city":
"Tianjn, China","code":"TSN"},{"city":
"Tiaret, Algeria","code":"TID"},{"city":
"Tiga, New Caledonia","code":"TGJ"},{"city":
"Tijuana, Mexico","code":"TIJ"},{"city":
"Tikehau Atoll, French Polynesia","code":"TIH"},{"city":
"Tiksi, Russia","code":"IKS"},{"city":
"Timaru, New Zealand","code":"TIU"},{"city":
"Timimoun, Algeria","code":"TMX"},{"city":
"Timmins, ON","code":"YTS"},{"city":
"Timosoara, Romania","code":"TSR"},{"city":
"Tin City, AK","code":"TNC"},{"city":
"Tindouf, Algeria","code":"TIN"},{"city":
"Tinian, Northern Mariana Islands","code":"TIQ"},{"city":
"Tioljikja, Mauritania","code":"TIY"},{"city":
"Tioman, Malaysia","code":"TOD"},{"city":
"Tippi, Ethiopia","code":"TIE"},{"city":
"Tirana, Albania","code":"TIA"},{"city":
"Tiree, United Kingdom","code":"TRE"},{"city":
"Tirgu Mures, Romania","code":"TGM"},{"city":
"Tiruchirapally, India","code":"TRZ"},{"city":
"Tirupati, India","code":"TIR"},{"city":
"Tivat, Serbia and Montenegro","code":"TIV"},{"city":
"Tlemcen, Algeria","code":"TLM"},{"city":
"Tobago, Trinidad and Tobago","code":"TAB"},{"city":
"Tobruk, Libya","code":"TOB"},{"city":
"Tofino, BC,","code":"YAZ"},{"city":
"Togiak Village, AK","code":"TOG"},{"city":
"Tok, AK","code":"TKJ"},{"city":
"Toksook Bay, AK","code":"OOK"},{"city":
"Tokunoshima, Japan","code":"TKN"},{"city":
"Tokushima, Japan","code":"TKS"},{"city":
"Tokyo, Japan - All airports","code":"TYO"},{"city":
"Tokyo, Japan - Haneda","code":"HND"},{"city":
"Tokyo, Japan - Narita","code":"NRT"},{"city":
"Toledo, OH","code":"TOL"},{"city":
"Toledo, PR, Brazil","code":"TOW"},{"city":
"Toluco, Mexico","code":"TLC"},{"city":
"Tom Price, WA, Australia","code":"TPR"},{"city":
"Tomanggong, Malaysia","code":"TMG"},{"city":
"Tombouctou, Mali","code":"TOM"},{"city":
"Tomsk, Russia","code":"TOF"},{"city":
"Tongliao, China","code":"TGO"},{"city":
"Tongoa, Vanuatu","code":"TGH"},{"city":
"Toowoomba, QL, Australia","code":"TWB"},{"city":
"Topeka, KS","code":"FOE"},{"city":
"Toronto, ON - Downtown Rail service","code":"YBZ"},{"city":
"Toronto, ON - Guildwood Rail service","code":"XLQ"},{"city":
"Toronto, ON - International","code":"YYZ"},{"city":
"Toronto, ON - Toronto Island Airport","code":"YTZ"},{"city":
"Torp Airport Oslo, Norway - Sandefjord","code":"TRF"},{"city":
"Torreon, Mexico","code":"TRC"},{"city":
"Torres, Vanuatu","code":"TOH"},{"city":
"Torsby, Sweden","code":"TYF"},{"city":
"Tortola, British Virgin Islands","code":"TOV"},{"city":
"Tortoli, Italy","code":"TTB"},{"city":
"Tortuquero, Costa Rica","code":"TTQ"},{"city":
"Tottori, Japan","code":"TTJ"},{"city":
"Touho, New Caledonia","code":"TOU"},{"city":
"Toulon, France","code":"TLN"},{"city":
"Toulouse, France","code":"TLS"},{"city":
"Tours, France","code":"TUF"},{"city":
"Tours, France - Rail service","code":"XSH"},{"city":
"Townsville, QL, Australia","code":"TSV"},{"city":
"Toyama, Japan","code":"TOY"},{"city":
"Tozeur, Tunisia","code":"TOE"},{"city":
"Trabzon, Turkey","code":"TZX"},{"city":
"Trang, Thailand","code":"TST"},{"city":
"Trapani, Italy","code":"TPS"},{"city":
"Traralgon, VI, Australia","code":"TGN"},{"city":
"Traverse City, MI","code":"TVC"},{"city":
"Treasure Cay, Bahamas","code":"TCB"},{"city":
"Trelew, CB, Argentina","code":"REL"},{"city":
"Trenton/Mercer, NJ","code":"TTN"},{"city":
"Trieste, Italy","code":"TRS"},{"city":
"Trinidad, Bolivia","code":"TDD"},{"city":
"Trinidad, Trinidad and Tobago","code":"POS"},{"city":
"Tripoli, Libya","code":"TIP"},{"city":
"Trollhattan, Sweden","code":"THN"},{"city":
"Trombetas, PA, Brazil","code":"TMT"},{"city":
"Tromso, Norway","code":"TOS"},{"city":
"Trondheim, Norway","code":"TRD"},{"city":
"Trujillo, Honduras","code":"TJI"},{"city":
"Trujillo, Peru","code":"TRU"},{"city":
"Truk, Micronesia","code":"TKK"},{"city":
"Truro, NS - Rail service","code":"XLZ"},{"city":
"Tsaratanana, Madagascar","code":"TTS"},{"city":
"Tsiroanomandidy, Madagascar","code":"WTS"},{"city":
"Tsumeb, Namibia","code":"TSB"},{"city":
"Tsushima, Japan","code":"TSJ"},{"city":
"Tubuai, French Polynesia","code":"TUB"},{"city":
"Tucson, AZ","code":"TUS"},{"city":
"Tucuman, TU, Argentina","code":"TUC"},{"city":
"Tucupita, Venezuela","code":"TUV"},{"city":
"Tucurui, PA, Brazil","code":"TUR"},{"city":
"Tufi, Papua New Guinea","code":"TFI"},{"city":
"Tuguegarao, Philippines","code":"TUG"},{"city":
"Tuktoyaktuk, NT","code":"YUB"},{"city":
"Tulcan, Ecuador","code":"TUA"},{"city":
"Tulear, Madagascar","code":"TLE"},{"city":
"Tulita/Fort Norman, NT","code":"ZFN"},{"city":
"Tulsa, OK","code":"TUL"},{"city":
"Tuluksak, AK","code":"TLT"},{"city":
"Tum, Ethiopia","code":"TUJ"},{"city":
"Tumaco, Colombia","code":"TCO"},{"city":
"Tumbes, Peru","code":"TBP"},{"city":
"Tunis, Tunisia","code":"TUN"},{"city":
"Tuntutuliak, AK","code":"WTL"},{"city":
"Tununak, AK","code":"TNK"},{"city":
"Tunxi, China","code":"TXN"},{"city":
"Tupelo, MS","code":"TUP"},{"city":
"Turaif, Saudi Arabia","code":"TUI"},{"city":
"Turbat, Pakistan","code":"TUK"},{"city":
"Turin, Italy","code":"TRN"},{"city":
"Turku, Finland","code":"TKU"},{"city":
"Tuscaloosa, AL","code":"TCL"},{"city":
"Tuxtla Gutierrez, Mexico","code":"TGZ"},{"city":
"Twin Falls, ID","code":"TWF"},{"city":
"Twin Hills, AK","code":"TWA"},{"city":
"Tyler, TX","code":"TYR"},{"city":
"Tyumen, Russia","code":"TJM"},{"city":
"Ube, Japan","code":"UBJ"},{"city":
"Uberaba, MG, Brazil","code":"UBA"},{"city":
"Uberlandia, MG, Brazil","code":"UDI"},{"city":
"Ubon Ratchathani, Thailand","code":"UBP"},{"city":
"Udaipur, India","code":"UDR"},{"city":
"Udon Thani, Thailand","code":"UTH"},{"city":
"Ufa, Russia","code":"UFA"},{"city":
"Ujae Island, Marshall Islands","code":"UJE"},{"city":
"Ujung Pandang, Indonesia","code":"UPG"},{"city":
"Ukhta, Russia","code":"UCT"},{"city":
"Ulaanbaatar, Mongolia","code":"ULN"},{"city":
"Ulanhot, China","code":"HLH"},{"city":
"Ulan-Ude, Russia","code":"UUD"},{"city":
"Ulei, Vanuatu","code":"ULB"},{"city":
"Uliastai, Mongolia","code":"ULY"},{"city":
"Ulithi, Micronesia","code":"ULI"},{"city":
"Ulsan, South Korea","code":"USN"},{"city":
"Ulundi, South Africa","code":"ULD"},{"city":
"Umea, Sweden","code":"UME"},{"city":
"Umiujag, QC","code":"YUD"},{"city":
"Umtata, South Africa","code":"UTT"},{"city":
"Unalakleet, AK","code":"UNK"},{"city":
"Upernavik, Greenland","code":"JUV"},{"city":
"Upington, South Africa","code":"UTN"},{"city":
"Uraj, Russia","code":"URJ"},{"city":
"Uralsk, Kazakhstan","code":"URA"},{"city":
"Uranium City, SK","code":"YBE"},{"city":
"Urbana/Champaign, IL","code":"CMI"},{"city":
"Urgench, Uzbekistan","code":"UGC"},{"city":
"Urmieh, Iran","code":"OMH"},{"city":
"Uroubi, Papua New Guinea","code":"URU"},{"city":
"Uruapan, Mexico","code":"UPN"},{"city":
"Uruguaiana, RS, Brazil","code":"URG"},{"city":
"Urumqi, China","code":"URC"},{"city":
"Useless Loop, WA, Australia","code":"USL"},{"city":
"Ushuaia, TF, Argentina","code":"USH"},{"city":
"Usinsk, Russia","code":"USK"},{"city":
"Ust-Ilimsk, Russia","code":"UIK"},{"city":
"Ust-Kamenogorsk, Kazakhstan","code":"UKK"},{"city":
"Utapao, Thailand","code":"UTP"},{"city":
"Utica, NY","code":"UCA"},{"city":
"Utila, Honduras","code":"UII"},{"city":
"Utirik Island, Marshall Islands","code":"UTK"},{"city":
"Utopia Creek, AK","code":"UTO"},{"city":
"Uummannaq, Greeland","code":"UMD"},{"city":
"Uzhgorod, Ukraine","code":"UDJ"},{"city":
"V.C. Bird International, Antigua & Barbuda","code":"ANU"},{"city":
"Vaasa, Finland","code":"VAA"},{"city":
"Vadodara, India","code":"BDQ"},{"city":
"Vadso, Norway","code":"VDS"},{"city":
"Vail, CO - Eagle County Airport","code":"EGE"},{"city":
"Vail, CO - Van service","code":"QBF"},{"city":
"Valdez, AK","code":"VDZ"},{"city":
"Valdivia, Chile","code":"ZAL"},{"city":
"Val-d'Or, QC","code":"YVO"},{"city":
"Valdosta, GA","code":"VLD"},{"city":
"Valencia, Spain","code":"VLC"},{"city":
"Valencia, Venezuela","code":"VLN"},{"city":
"Valenciennes, France","code":"XVS"},{"city":
"Valera, Venezuela","code":"VLV"},{"city":
"Valesdir, Vanuatu","code":"VLS"},{"city":
"Valladolid, Spain and Canary Islands","code":"VLL"},{"city":
"Valledupar, Colombia","code":"VUP"},{"city":
"Valparaiso, FL","code":"VPS"},{"city":
"Valverde, Spain and Canary Islands - Hierro","code":"VDE"},{"city":
"Van, Turkey","code":"VAN"},{"city":
"Vancouver, BC","code":"YVR"},{"city":
"Vancouver, BC - Coal Harbour","code":"CXH"},{"city":
"Vancouver, BC - International","code":"YVR"},{"city":
"Vancouver, BC - Rail service","code":"XEA"},{"city":
"Vanimo, Papua New Guinea","code":"VAI"},{"city":
"Vanuabalavu, Fiji","code":"VBV"},{"city":
"Varadero, Cuba","code":"VRA"},{"city":
"Varanasi, India","code":"VNS"},{"city":
"Vardoe, Norway","code":"VAW"},{"city":
"Varginha, MG, Brazil","code":"VAG"},{"city":
"Varkaus, Finland","code":"VRK"},{"city":
"Varna, Bulgaria","code":"VAR"},{"city":
"Vasteras, Sweden","code":"VST"},{"city":
"Vatomatry, Madagascar","code":"VAT"},{"city":
"Vava'u, Tonga","code":"VAV"},{"city":
"Vaxjo, Sweden","code":"VXO"},{"city":
"Venetie, AK","code":"VEE"},{"city":
"Venice, Italy - Marco Polo","code":"VCE"},{"city":
"Venice, Italy - Treviso","code":"TSF"},{"city":
"Ventura/Oxnard, CA","code":"OXR"},{"city":
"Veracruz, Mexico","code":"VER"},{"city":
"Vernal, UT","code":"VEL"},{"city":
"Verona, Italy","code":"VRN"},{"city":
"Vestmannaeyjar, Iceland","code":"VEY"},{"city":
"Victoria Falls, Zimbabwe","code":"VFA"},{"city":
"Victoria River Downs, NT, Australia","code":"VCD"},{"city":
"Victoria, BC - Inner Harbor","code":"YWH"},{"city":
"Victoria, BC - International","code":"YYJ"},{"city":
"Victoria, TX","code":"VCT"},{"city":
"Viedma, RN, Argentina","code":"VDM"},{"city":
"Vienna, Austria","code":"VIE"},{"city":
"Vientiane, Laos - Wattay","code":"VTE"},{"city":
"Vieques, Puerto Rico","code":"VQS"},{"city":
"Vigo, Spain","code":"VGO"},{"city":
"Vilanculos, Mozambique","code":"VNX"},{"city":
"Vilhelmina, Sweden","code":"VHM"},{"city":
"Vilhena, Brazil","code":"BVH"},{"city":
"Villa Gesell, BA, Argentina","code":"VLG"},{"city":
"Villa Mercedes, SL, Argentina","code":"VME"},{"city":
"Villahermosa, Mexico","code":"VSA"},{"city":
"Vilnius, Lithuania","code":"VNO"},{"city":
"Vinh City, Viet Nam","code":"VII"},{"city":
"Virgin Gorda, British Virgin Islands","code":"VIJ"},{"city":
"Visalia, CA","code":"VIS"},{"city":
"Visby, Sweden","code":"VBY"},{"city":
"Vishakhapatnam, India","code":"VTZ"},{"city":
"Vitebsk, Belarus","code":"VTB"},{"city":
"Vitoria da Conquista, BA, Brazil","code":"VDC"},{"city":
"Vitoria, Spain and Canary Islands","code":"VIT"},{"city":
"Vivigani, Papua New Guinea","code":"VIV"},{"city":
"Vladikavkaz, Russia","code":"OGZ"},{"city":
"Vladivostok, Russia","code":"VVO"},{"city":
"Vohemar, Madagascar","code":"VOH"},{"city":
"Volgodonsk, Russia","code":"VLK"},{"city":
"Volgograd, Russia","code":"VOG"},{"city":
"Vopnafjordur, Iceland","code":"VPN"},{"city":
"Vorkuta, Russia","code":"VKT"},{"city":
"Voronezh, Russia","code":"VOZ"},{"city":
"Wabush, NL","code":"YWK"},{"city":
"Waco, TX","code":"ACT"},{"city":
"Wadi Ad Dawasir, Saudi Arabia","code":"WAE"},{"city":
"Wadi Halfa, Sudan","code":"WHF"},{"city":
"Wagethe, Indonesia","code":"WET"},{"city":
"Wagga Wagga, NS, Australia","code":"WGA"},{"city":
"Wahai, Indonesia","code":"WBA"},{"city":
"Waingapo, Indonesia","code":"WGP"},{"city":
"Wainwright, AK","code":"AIN"},{"city":
"Wakkanai, Japan","code":"WKJ"},{"city":
"Walaha, Vanuatu","code":"WLH"},{"city":
"Wales, AK","code":"WAA"},{"city":
"Walgett, NS, Australia","code":"WGE"},{"city":
"Walla Walla, WA","code":"ALW"},{"city":
"Wallis Island, Wallis and Futuna Islands","code":"WLS"},{"city":
"Walvis Bay, Namibia","code":"WVB"},{"city":
"Wamena, Indonesia","code":"WMX"},{"city":
"Wanaka, New Zealand","code":"WKA"},{"city":
"Wanganui, New Zealand","code":"WAG"},{"city":
"Wangerooge, Germany","code":"AGE"},{"city":
"Wanigela, Papua New Guinea","code":"AGL"},{"city":
"Wanxian, China","code":"WXN"},{"city":
"Warsaw, Poland","code":"WAW"},{"city":
"Washington DC - All airports","code":"WAS"},{"city":
"Washington DC - Dulles","code":"IAD"},{"city":
"Washington DC - National","code":"DCA"},{"city":
"Wasior, Indonesia","code":"WSR"},{"city":
"Waskaganish, QC","code":"YKQ"},{"city":
"Wasu, Papua New Guinea","code":"WSU"},{"city":
"Waterfall, AK","code":"KWF"},{"city":
"Waterford, Ireland","code":"WAT"},{"city":
"Waterloo, IA","code":"ALO"},{"city":
"Watertown, NY","code":"ART"},{"city":
"Watertown, SD","code":"ATY"},{"city":
"Watford, ON - Rail service","code":"XWA"},{"city":
"Wau, Papua New Guinea","code":"WUG"},{"city":
"Wau, Sudan","code":"WUU"},{"city":
"Wausau/Stevens Point, WI","code":"CWA"},{"city":
"Webequie, ON","code":"YWP"},{"city":
"Wedau, Papua New Guinea","code":"WED"},{"city":
"Wedjh, Saudi Arabia","code":"EJH"},{"city":
"Weihai, China","code":"WEH"},{"city":
"Weipa, QL, Australia","code":"WEI"},{"city":
"Wellington, New Zealand","code":"WLG"},{"city":
"Wemindji, QC","code":"YNC"},{"city":
"Wenatchee, WA","code":"EAT"},{"city":
"Wenzhou, China","code":"WNZ"},{"city":
"West Palm Beach, FL","code":"PBI"},{"city":
"West Yellowstone, MT","code":"WYS"},{"city":
"Westchester County, NY","code":"HPN"},{"city":
"Westerland, Germany","code":"GWT"},{"city":
"Westerly, RI","code":"WST"},{"city":
"Westport, New Zealand","code":"WSZ"},{"city":
"Westray, United Kingdom","code":"WRY"},{"city":
"Westsound, WA","code":"WSX"},{"city":
"Wewak, Papua New Guinea","code":"WWK"},{"city":
"Weymont, QC - Rail service","code":"XFQ"},{"city":
"Wha Ti/Lac La Martre, NT","code":"YLE"},{"city":
"Whakatane, New Zealand","code":"WHK"},{"city":
"Whale Cove, NU","code":"YXN"},{"city":
"Whale Pass, AK","code":"WWP"},{"city":
"Whangarei, New Zealand","code":"WRE"},{"city":
"White Mountain, AK","code":"WMO"},{"city":
"White River, ON","code":"YWR"},{"city":
"White River, VT","code":"LEB"},{"city":
"Whitehorse, YT","code":"YXY"},{"city":
"Whyalla, SA, Australia","code":"WYA"},{"city":
"Wichita Falls, TX","code":"SPS"},{"city":
"Wichita, KS","code":"ICT"},{"city":
"Wick, United Kingdom","code":"WIC"},{"city":
"Wilhelmshaven, Germany","code":"WVN"},{"city":
"Wilkes Barre, PA","code":"AVP"},{"city":
"Williams Harbour, NL","code":"YWM"},{"city":
"Williams Lake, BC","code":"YWL"},{"city":
"Williamsburg, VA","code":"PHF"},{"city":
"Williamsport, PA","code":"IPT"},{"city":
"Williston, ND","code":"ISN"},{"city":
"Wilmington, NC","code":"ILM"},{"city":
"Wiluna, WA, Australia","code":"WUN"},{"city":
"Windarra, QL, Australia","code":"WNR"},{"city":
"Windsor Locks, CT","code":"BDL"},{"city":
"Windsor, ON","code":"YQG"},{"city":
"Windsor, ON - Rail service","code":"XEC"},{"city":
"Winnipeg, MB - International","code":"YWG"},{"city":
"Winnipeg, MB - Rail service","code":"XEF"},{"city":
"Winton, QL, Australia","code":"WIN"},{"city":
"Woja, Marshall Islands","code":"WJA"},{"city":
"Wollaston Lake, SK","code":"ZWL"},{"city":
"Wonan, Taiwan","code":"WOT"},{"city":
"WonJu, South Korea","code":"WJU"},{"city":
"Woodstock, ON - Rail service","code":"XIP"},{"city":
"Worcester, MA","code":"ORH"},{"city":
"Worland, WY","code":"WRL"},{"city":
"Wotho Island, Marshall Islands","code":"WTO"},{"city":
"Wotje Island, Marshall Islands","code":"WTE"},{"city":
"Wrangell, AK","code":"WRG"},{"city":
"Wroclaw, Poland","code":"WRO"},{"city":
"Wudinna, SA, Australia","code":"WUD"},{"city":
"Wuhan, China","code":"WUH"},{"city":
"Wunnummin Lake, ON","code":"WNN"},{"city":
"Wuyishan, China","code":"WUS"},{"city":
"Wyndham, WA, Australia","code":"WYN"},{"city":
"Wyoming, ON - Rail service","code":"XWY"},{"city":
"Xi An, China - Xianyang","code":"XIY"},{"city":
"Xiamen, China","code":"XMN"},{"city":
"Xiangfan, China","code":"XFN"},{"city":
"Xichang, China","code":"XIC"},{"city":
"Xieng Khouang, Laos","code":"XKH"},{"city":
"Xilinhot, China","code":"XIL"},{"city":
"Xining, China","code":"XNN"},{"city":
"Xuzhou, China","code":"XUZ"},{"city":
"Yakima, WA","code":"YKM"},{"city":
"Yakutat, AK","code":"YAK"},{"city":
"Yakutsk, Russia","code":"YKS"},{"city":
"Yalumet, Papua New Guinea","code":"KYX"},{"city":
"Yam Island, QL, Australia","code":"XMY"},{"city":
"Yamagata, Japan","code":"GAJ"},{"city":
"Yan'an, China","code":"ENY"},{"city":
"Yanbu, Saudi Arabia","code":"YNB"},{"city":
"Yancheng, China","code":"YNZ"},{"city":
"Yandina, Solomon Islands","code":"XYA"},{"city":
"Yangon, Myanmar","code":"RGN"},{"city":
"Yanji, China","code":"YNJ"},{"city":
"Yantai, China","code":"YNT"},{"city":
"Yaounde, Cameroon","code":"YAO"},{"city":
"Yap, Micronesia","code":"YAP"},{"city":
"Yarmouth, NS","code":"YQI"},{"city":
"Yaroslavl, Russia","code":"IAR"},{"city":
"Yazd, Iran","code":"AZD"},{"city":
"Yelimane, Mali","code":"EYL"},{"city":
"Yellowknife, NT","code":"YZF"},{"city":
"Yellowstone/Cody, WY","code":"COD"},{"city":
"Yeosu, South Korea","code":"RSU"},{"city":
"Yerevan, Armenia","code":"EVN"},{"city":
"Yibin, China","code":"YBP"},{"city":
"Yichang, China","code":"YIH"},{"city":
"Yinchuan, China","code":"INC"},{"city":
"Yining, China","code":"YIN"},{"city":
"Yiwu, China","code":"YIW"},{"city":
"Yogyakarta, Indonesia","code":"JOG"},{"city":
"Yonago, Japan","code":"YGJ"},{"city":
"Yonaguni Jima, Japan","code":"OGN"},{"city":
"York Landing, MB","code":"ZAC"},{"city":
"Yorke Island, QL, Australia","code":"OKR"},{"city":
"Yoronjima, Japan","code":"RNJ"},{"city":
"Youngstown, OH","code":"YNG"},{"city":
"Yulin, China","code":"UYN"},{"city":
"Yuma, AZ","code":"YUM"},{"city":
"Yuzhno-Sakhalinsk, Russia","code":"UUS"},{"city":
"Zadar, Croatia","code":"ZAD"},{"city":
"Zagreb, Croatia","code":"ZAG"},{"city":
"Zahedan, Iran","code":"ZAH"},{"city":
"Zakinthos Island, Greece","code":"ZTH"},{"city":
"Zamboanga, Philippines","code":"ZAM"},{"city":
"Zanzibar, Tanzania - Kisauni","code":"ZNZ"},{"city":
"Zaporozhye, Ukraine","code":"OZH"},{"city":
"Zaragoza, Spain and Canary Islands","code":"ZAZ"},{"city":
"Zhanjiang, China","code":"ZHA"},{"city":
"Zhaotong, China","code":"ZAT"},{"city":
"Zhengzha, China","code":"CGO"},{"city":
"Zhob, Pakistan","code":"PZH"},{"city":
"Zhoushan, China","code":"HSN"},{"city":
"Zhuhai, China","code":"ZUH"},{"city":
"Zielana, Poland","code":"IEG"},{"city":
"Zihuatanejo/Ixtapa, Mexico","code":"ZIH"},{"city":
"Zouerate, Mauritania","code":"OUZ"},{"city":
"Zugapa, Indonesia","code":"UGU"},{"city":
"Zurich, Switzerland","code":"ZRH"}]
			return list;
		};
	});
