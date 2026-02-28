// src/data/regionProjectsIndex.js
/* eslint-disable @next/next/no-assign-module-variable */
/* eslint-disable no-console */

// ---------------------------------------------------------------------------
// Imports - Sobha
// ---------------------------------------------------------------------------
import { aquaCrestData } from "@/data/properties/apartments/sobha/aqua-crest/aqua-crest";
import { aquamontData } from "@/data/properties/apartments/sobha/aquamont/aquamont";
import { centralData } from "@/data/properties/apartments/sobha/central/central";
import { skyParksData } from "@/data/properties/apartments/sobha/skyparks/skyparks";
import { orbisData } from "@/data/properties/apartments/sobha/orbis/orbis";
import { sobhaSolisData } from "@/data/properties/apartments/sobha/solis/solis";
import { sobhaOneData } from "@/data/properties/apartments/sobha/one/one";
import { theElementData } from "@/data/properties/apartments/sobha/the-element/the-element";
import { seahavenPenthouseData } from "@/data/properties/penthouses/sobha/seahaven-penthouse/seahaven-penthouse";
import { alSinniyyahIslandData } from "@/data/properties/villas/sobha/al-sinniyyah-island/al-sinniyyah-island";
import { sobhaEstates } from "@/data/properties/villas/sobha/sobha-estates/sobha-estates";
import { elwoodData } from "@/data/properties/villas/sobha/elwood/elwood";
import { reserveData } from "@/data/properties/villas/sobha/reserve/reserve";
import { verdeData } from "@/data/properties/villas/sobha/verde/verde";
import { sobhaSanctuaryData } from "@/data/properties/villas/sobha/sobha-sanctuary/sobha-sanctuary";
import { riversideCrescent310Data } from "@/data/properties/apartments/sobha/riverside-crescent/riverside-crescent";
import { skyscapeSobhaData } from "@/data/properties/apartments/sobha/skyscape/skyscape";
import { skyvueSobhaData } from "@/data/properties/apartments/sobha/skyvue/skyvue";
import { beachResidencesSiniyaData } from "@/data/properties/apartments/sobha/beach-residences/beach-residences";
import { siniyaIslandSecondaryData } from "@/data/properties/villas/sobha/siniya-island-secondary/siniya-island-secondary";
import { sobhaElwoodSecondaryData } from "@/data/properties/apartments/sobha/sobha-elwood-secondary/sobha-elwood-secondary";

// ---------------------------------------------------------------------------
// Imports - Azizi
// ---------------------------------------------------------------------------
import { rivieraRetailsData } from "@/data/properties/commercial-retail/azizi/riviera-retails/riviera-retails";
import { aziziMilanData } from "@/data/properties/apartments/azizi/milan/milan";
import { aziziAmirData } from "@/data/properties/apartments/azizi/amir/amir";
import { aziziCreekViews1Data } from "@/data/properties/apartments/azizi/creek-views-1/creek-views-1";
import { aziziCreekViews2Data } from "@/data/properties/apartments/azizi/creek-views-2/creek-views-2";
import { aziziCreekViews3Data } from "@/data/properties/apartments/azizi/creek-views-3/creek-views-3";
import { aziziDavidData } from "@/data/properties/apartments/azizi/david/david";
import { aziziEmeraldData } from "@/data/properties/commercial-retail/azizi/emerald/emerald";
import { aziziFarishta2Data } from "@/data/properties/apartments/azizi/farishta-2/farishta-2";
import { aziziGabrielData } from "@/data/properties/apartments/azizi/gabriel/gabriel";
import { aziziLinaData } from "@/data/properties/apartments/azizi/lina/lina";
import { aziziNouraData } from "@/data/properties/apartments/azizi/noura/noura";
import { aziziRaffiData } from "@/data/properties/apartments/azizi/raffi/raffi";
import { aziziSikanderData } from "@/data/properties/apartments/azizi/sikander/sikander";
import { aziziWaresData } from "@/data/properties/apartments/azizi/wares/wares";
import { aziziAryanData } from "@/data/properties/apartments/azizi/aryan/aryan";
import { aziziMonacoData } from "@/data/properties/villas/azizi/monaco/monaco";
import aziziAbraham from "@/data/properties/apartments/azizi/abraham/abraham";
import aziziVenice from "@/data/properties/apartments/azizi/venice/venice";
import { aziziLeilyData } from "@/data/properties/apartments/azizi/leily/leily";
import { beachOasisData } from "@/data/properties/apartments/azizi/beach-oasis/beach-oasis";
import { aziziGrandData } from "@/data/properties/apartments/azizi/azizi-grand/azizi-grand";
import burjAziziData from "@/data/properties/apartments/azizi/burj-azizi/burj-azizi";
import { aziziMinaData } from "@/data/properties/apartments/azizi/mina/mina";
import { rivieraAzureData } from "@/data/properties/apartments/azizi/riviera-azure/riviera-azure";
import { aziziRubyData } from "@/data/properties/apartments/azizi/ruby/ruby";
import { aziziJewelData } from "@/data/properties/apartments/azizi/azizi-jewel/azizi-jewel";

// ---------------------------------------------------------------------------
// Imports - Damac
// ---------------------------------------------------------------------------
import { chelseaResidencesData } from "@/data/properties/apartments/damac/chelsea-residences/chelsea-residences";
import { damacSafaGateData } from "@/data/properties/apartments/damac/safa-gate/safa-gate";
import { damacIslands2Data } from "@/data/properties/villas/damac/damac-islands-2/damac-islands-2";
import damacAltitudeData from "@/data/properties/apartments/damac/altitude/altitude";
import damacAykonCityData from "@/data/properties/apartments/damac/aykon-city/aykon-city";
import damacCanalCrownData from "@/data/properties/apartments/damac/canal-crown/canal-crown";
import damacCanalHeightsData from "@/data/properties/apartments/damac/canal-heights/canal-heights";
import damacChicTowerData from "@/data/properties/apartments/damac/chic-tower/chic-tower";
import cavalliCoutureData from "@/data/properties/apartments/damac/cavalli-couture/cavalli-couture";
import damacCasaData from "@/data/properties/apartments/damac/damac-casa/damac-casa";
import damacLagoonViewsData from "@/data/properties/apartments/damac/lagoon-views/lagoon-views";
import damacRiversideViewsData from "@/data/properties/apartments/damac/riverside-views/riverside-views";
import damacHills2Elo2Data from "@/data/properties/apartments/damac/damac-hills-elo-2/damac-hills-elo-2";
import damacBayData from "@/data/properties/apartments/damac/damac-bay/damac-bay";
import golfGreensData from "@/data/properties/apartments/damac/golf-greens/golf-greens";
import damacVoltaData from "@/data/properties/apartments/damac/volta/volta";
import damacDistrictData from "@/data/properties/apartments/damac/damac-district/damac-district";
import golfTownData from "@/data/properties/apartments/damac/golf-town/golf-town";
import cavalliTowerData from "@/data/properties/apartments/damac/cavalli-tower/cavalli-tower";

// ---------------------------------------------------------------------------
// Imports - Binghatti (ALL PROJECTS)
// ---------------------------------------------------------------------------
import { aquariseData } from "@/data/properties/apartments/binghatti/aquarise/aquarise";
import { bugattiResidencesData } from "@/data/properties/penthouses/binghatti/bugatti/bugatti";
import mercedesBenzPlacesBinghattiData from "@/data/properties/apartments/binghatti/mercedes-benz-places/mercedes-benz-places";
import apexData from "@/data/properties/apartments/binghatti/apex/apex";
import cullinanData from "@/data/properties/apartments/binghatti/cullinan/cullinan";
import eliteData from "@/data/properties/apartments/binghatti/elite/elite";
import ghostData from "@/data/properties/apartments/binghatti/ghost/ghost";
import hillcrestData from "@/data/properties/apartments/binghatti/hillcrest/hillcrest";
import hillsData from "@/data/properties/apartments/binghatti/hills/hills";
import hillviewsData from "@/data/properties/apartments/binghatti/hillviews/hillviews";
import hillsideData from "@/data/properties/apartments/binghatti/hillside/hillside";
import vintageData from "@/data/properties/apartments/binghatti/vintage/vintage";
import twilightData from "@/data/properties/apartments/binghatti/twilight/twilight";
import titaniaData from "@/data/properties/apartments/binghatti/titania/titania";
import starlightData from "@/data/properties/apartments/binghatti/starlight/starlight";
import skyriseData from "@/data/properties/apartments/binghatti/skyrise/skyrise";
import skyhallData from "@/data/properties/apartments/binghatti/skyhall/skyhall";
import skybladeData from "@/data/properties/apartments/binghatti/skyblade/skyblade";
import pinnacleData from "@/data/properties/apartments/binghatti/pinnacle/pinnacle";
import binghattiOneData from "@/data/properties/apartments/binghatti/binghatti-one/binghatti-one";
import moonlightData from "@/data/properties/apartments/binghatti/moonlight/moonlight";
import mercedesBenzPlacesBinghattiCityData from "@/data/properties/apartments/binghatti/mercedes-benz-places-binghatti-city/mercedes-benz-places-binghatti-city";
import skyterracesData from "@/data/properties/apartments/binghatti/skyterraces/skyterraces";
import havenData from "@/data/properties/apartments/binghatti/haven/haven";

// ---------------------------------------------------------------------------
// Imports - Omniyat
// ---------------------------------------------------------------------------
import { omniyatAlbaResidencesData } from "@/data/properties/apartments/omniyat/the-alba-residences/the-alba-residences";
import omniyatOpusData from "@/data/properties/apartments/omniyat/opus-tower/opus-tower";
import omniyatVelaDorchesterData from "@/data/properties/apartments/omniyat/vela-dorchester/vela-dorchester";
import omniyatOrlaDorchesterData from "@/data/properties/apartments/omniyat/orla-dorchester/orla-dorchester";
import omniyatVelaVientoData from "@/data/properties/apartments/omniyat/vela-viento/vela-viento";
import { lumenaAltaData } from "@/data/properties/commercial-retail/omniyat/lumenaalta/lumenaalta";

// ---------------------------------------------------------------------------
// Imports - Arada
// ---------------------------------------------------------------------------
import { massar3Data } from "@/data/properties/villas/arada/massar/massar";
import { armaniBeachResidencesData } from "@/data/properties/apartments/arada/armani/armani";
import akalaResidencesData from "@/data/properties/apartments/arada/akala/akala";
import anantaraSharjahResidencesData from "@/data/properties/apartments/arada/anantara/anantara";
import ilTeatroData from "@/data/properties/apartments/arada/il-teatro/il-teatro";
import inauraData from "@/data/properties/apartments/arada/inaura/inaura";
import masaarAzaleaData from "@/data/properties/apartments/arada/masaar-azalea/masaar-azalea";
import nesba3Data from "@/data/properties/apartments/arada/nesba-3/nebsa-3";
import safa1Data from "@/data/properties/apartments/arada/safa-1/safa-1";
import safaParkViewData from "@/data/properties/apartments/arada/safa-park-view/safa-park-view";
import sequoiaData from "@/data/properties/villas/arada/sequoia/sequoia";
import theGate3Data from "@/data/properties/apartments/arada/the-gate-3/the-gate-3";
import theGate4Data from "@/data/properties/apartments/arada/the-gate-4/the-gate-4";
import wResidencesData from "@/data/properties/apartments/arada/w-residences/w-residences";

// ---------------------------------------------------------------------------
// Imports - Danube
// ---------------------------------------------------------------------------
import { aspirzDanubeData } from "@/data/properties/commercial-retail/danube/aspirz/aspirz";
import { shahrukhzDanubeData } from "@/data/properties/apartments/danube/shahrukhz/shahrukhz";
import fashionzDanubeData from "@/data/properties/apartments/danube/fashionz/fashionz";
import bayz101Data from "@/data/properties/apartments/danube/bayz101/bayz101";
import bayz102Data from "@/data/properties/apartments/danube/bayz102/bayz102";
import breezData from "@/data/properties/apartments/danube/breez/breez";
import diamondzData from "@/data/properties/apartments/danube/diamondz/diamondz";
import eleganzData from "@/data/properties/apartments/danube/eleganz/eleganz";

// ---------------------------------------------------------------------------
// Imports - Imtiaz
// ---------------------------------------------------------------------------
import { wynwoodData } from "@/data/properties/apartments/imtiaz/wynwood/wynwood";
import { beachWalk4Data } from "@/data/properties/apartments/imtiaz/beach-walk-4/beach-walk-4";
import { coveEdition6Data } from "@/data/properties/apartments/imtiaz/cove-edition-6/cove-edition-6";
import { coveGrandData } from "@/data/properties/apartments/imtiaz/cove-grand/cove-grand";
import { sunsetBayGrandData } from "@/data/properties/apartments/imtiaz/sunset-bay-grand/sunset-bay-grand";
import { pearlHouse4Data } from "@/data/properties/apartments/imtiaz/pearl-house-4/pearl-house-4";
import { theSymphonyData } from "@/data/properties/apartments/imtiaz/the-symphony/the-symphony";
import { wynwoodHorizonData } from "@/data/properties/apartments/imtiaz/wynwood-horizon/wynwood-horizon";

// ---------------------------------------------------------------------------
// Imports - Tiger Properties
// ---------------------------------------------------------------------------
import { orchidTigerData } from "@/data/properties/apartments/tiger/orchid/orchid";
import { altaiTowerTigerData } from "@/data/properties/apartments/tiger/altai-tower/altai-tower";
import anandaTigerData from "@/data/properties/apartments/tiger/ananda-tower/ananda-tower";
import aurestaTigerData from "@/data/properties/apartments/tiger/auresta-tower/auresta-tower";
import elbrusTigerData from "@/data/properties/apartments/tiger/elbrus-tower/elbrus-tower";
import guzelTigerData from "@/data/properties/apartments/tiger/guzel-tower/guzel-tower";
import jadeTigerData from "@/data/properties/apartments/tiger/jade-tower/jade-tower";
import liliumTigerData from "@/data/properties/apartments/tiger/lilium-tower/lilium-tower";
import redSquareTigerData from "@/data/properties/apartments/tiger/red-square-tower/red-square-tower";
import tigerSkyTigerData from "@/data/properties/apartments/tiger/sky-tower/sky-tower";
import volgaTigerData from "@/data/properties/apartments/tiger/volga-tower/volga-tower";

// ---------------------------------------------------------------------------
// Imports - Beyond
// ---------------------------------------------------------------------------
import { beyond31AboveData } from "@/data/properties/commercial-retail/beyond/31-above/31-above";
import { kanyonData } from "@/data/properties/apartments/beyond/kanyon/kanyon";

// ---------------------------------------------------------------------------
// Developer slug -> name mapping (only specified developers)
// ---------------------------------------------------------------------------
const DEVELOPER_SLUG_TO_NAME = {
  sobha: "Sobha Realty",
  damac: "Damac Properties",
  azizi: "Azizi Developments",
  arada: "Arada",
  omniyat: "Omniyat",
  binghatti: "Binghatti Developers",
  beyond: "Beyond Properties",
  imtiaz: "Imtiaz Developments",
  tiger: "Tiger Properties",
  danube: "Danube Properties",
};

// ---------------------------------------------------------------------------
// Project to Developer mapping (ensures every project is connected to its developer)
// ---------------------------------------------------------------------------
const PROJECT_TO_DEVELOPER = {
  // Sobha projects
  skyparks: "sobha",
  aquamont: "sobha",
  "aqua-crest": "sobha",
  central: "sobha",
  orbis: "sobha",
  solis: "sobha",
  one: "sobha",
  "the-element": "sobha",
  "seahaven-penthouse": "sobha",
  "sobha-estates": "sobha",
  "siniya-island": "sobha",
  "siniya-island-secondary": "sobha",
  "siniya-elwood-secondary": "sobha",
  "sobha-elwood": "sobha",
  reserve: "sobha",
  verde: "sobha",
  "sobha-sanctuary": "sobha",
  "riverside-crescent": "sobha",
  skyscape: "sobha",
  skyvue: "sobha",
  "beach-residences": "sobha",

  // Omniyat projects
  lumenaalta: "omniyat",
  "the-alba-residences": "omniyat",
  "opus-tower": "omniyat",
  "vela-dorchester": "omniyat",
  "orla-dorchester": "omniyat",
  "vela-viento": "omniyat",

  // Azizi projects
  "riviera-retails": "azizi",
  milan: "azizi",
  amir: "azizi",
  "creek-views-1": "azizi",
  "creek-views-2": "azizi",
  "creek-views-3": "azizi",
  david: "azizi",
  emerald: "azizi",
  "farishta-2": "azizi",
  gabriel: "azizi",
  lina: "azizi",
  noura: "azizi",
  raffi: "azizi",
  sikander: "azizi",
  wares: "azizi",
  aryan: "azizi",
  venice: "azizi",
  abraham: "azizi",
  leily: "azizi",
  monaco: "azizi",
  "beach-oasis": "azizi",
  "azizi-grand": "azizi",
  "burj-azizi": "azizi",
  mina: "azizi",
  "riviera-azure": "azizi",
  ruby: "azizi",
  "azizi-jewel": "azizi",

  // Damac projects
  "chelsea-residences": "damac",
  "safa-gate": "damac",
  "damac-islands-2": "damac",
  altitude: "damac",
  "aykon-city": "damac",
  "canal-crown": "damac",
  "canal-heights": "damac",
  "chic-tower": "damac",
  "cavalli-couture": "damac",
  "damac-casa": "damac",
  "lagoon-views": "damac",
  "riverside-views": "damac",
  "damac-hills-elo-2": "damac",
  "damac-bay": "damac",
  "golf-greens": "damac",
  volta: "damac",
  "damac-district": "damac",
  "golf-town": "damac",
  "cavalli-tower": "damac",

  // Binghatti projects
  aquarise: "binghatti",
  bugatti: "binghatti",
  apex: "binghatti",
  cullinan: "binghatti",
  elite: "binghatti",
  ghost: "binghatti",
  hillcrest: "binghatti",
  hills: "binghatti",
  hillviews: "binghatti",
  hillside: "binghatti",
  vintage: "binghatti",
  twilight: "binghatti",
  titania: "binghatti",
  starlight: "binghatti",
  skyrise: "binghatti",
  skyhall: "binghatti",
  skyblade: "binghatti",
  pinnacle: "binghatti",
  "binghatti-one": "binghatti",
  moonlight: "binghatti",
  haven: "binghatti",
  "mercedes-benz-places": "binghatti",
  "mercedes-benz-places-binghatti-city": "binghatti",
  skyterraces: "binghatti",

  // Arada projects
  massar: "arada",
  armani: "arada",
  akala: "arada",
  anantara: "arada",
  "il-teatro": "arada",
  inaura: "arada",
  "masaar-azalea": "arada",
  "nesba-3": "arada",
  "safa-1": "arada",
  "safa-park-view": "arada",
  sequoia: "arada",
  "the-gate-3": "arada",
  "the-gate-4": "arada",
  "w-residences": "arada",

  // Danube projects
  aspirz: "danube",
  shahrukhz: "danube",
  fashionz: "danube",
  bayz101: "danube",
  bayz102: "danube",
  breez: "danube",
  diamondz: "danube",
  eleganz: "danube",

  // Imtiaz projects
  wynwood: "imtiaz",
  "beach-walk-4": "imtiaz",
  "cove-edition-6": "imtiaz",
  "cove-grand": "imtiaz",
  "sunset-bay-grand": "imtiaz",
  "pearl-house-4": "imtiaz",
  "the-symphony": "imtiaz",
  "wynwood-horizon": "imtiaz",

  // Tiger projects
  orchid: "tiger",
  "altai-tower": "tiger",
  "ananda-tower": "tiger",
  "auresta-tower": "tiger",
  "elbrus-tower": "tiger",
  "guzel-tower": "tiger",
  "jade-tower": "tiger",
  "lilium-tower": "tiger",
  "red-square-tower": "tiger",
  "sky-tower": "tiger",
  "volga-tower": "tiger",

  // Beyond projects
  "31-above": "beyond",
  kanyon: "beyond",
};

// ---------------------------------------------------------------------------
// Project Data Map (only specified developers)
// ---------------------------------------------------------------------------
const PROJECT_DATA_MAP = {
  // Sobha
  skyparks: skyParksData,
  aquamont: aquamontData,
  "aqua-crest": aquaCrestData,
  central: centralData,
  orbis: orbisData,
  solis: sobhaSolisData,
  one: sobhaOneData,
  "the-element": theElementData,
  "seahaven-penthouse": seahavenPenthouseData,
  "sobha-estates": sobhaEstates,
  "siniya-island": alSinniyyahIslandData,
  "siniya-island-secondary": siniyaIslandSecondaryData,
  "siniya-elwood-secondary": sobhaElwoodSecondaryData,
  "sobha-elwood": elwoodData,
  reserve: reserveData,
  verde: verdeData,
  "sobha-sanctuary": sobhaSanctuaryData,
  "riverside-crescent": riversideCrescent310Data,
  skyscape: skyscapeSobhaData,
  skyvue: skyvueSobhaData,
  "beach-residences": beachResidencesSiniyaData,

  // Omniyat
  lumenaalta: lumenaAltaData,
  "the-alba-residences": omniyatAlbaResidencesData,
  "opus-tower": omniyatOpusData,
  "vela-dorchester": omniyatVelaDorchesterData,
  "orla-dorchester": omniyatOrlaDorchesterData,
  "vela-viento": omniyatVelaVientoData,

  // Azizi
  "riviera-retails": rivieraRetailsData,
  milan: aziziMilanData,
  amir: aziziAmirData,
  "creek-views-1": aziziCreekViews1Data,
  "creek-views-2": aziziCreekViews2Data,
  "creek-views-3": aziziCreekViews3Data,
  david: aziziDavidData,
  emerald: aziziEmeraldData,
  "farishta-2": aziziFarishta2Data,
  gabriel: aziziGabrielData,
  lina: aziziLinaData,
  noura: aziziNouraData,
  raffi: aziziRaffiData,
  sikander: aziziSikanderData,
  wares: aziziWaresData,
  aryan: aziziAryanData,
  venice: aziziVenice,
  abraham: aziziAbraham,
  leily: aziziLeilyData,
  monaco: aziziMonacoData,
  "beach-oasis": beachOasisData,
  "azizi-grand": aziziGrandData,
  "burj-azizi": burjAziziData,
  mina: aziziMinaData,
  "riviera-azure": rivieraAzureData,
  ruby: aziziRubyData,
  "azizi-jewel": aziziJewelData,

  // Damac
  "chelsea-residences": chelseaResidencesData,
  "safa-gate": damacSafaGateData,
  "damac-islands-2": damacIslands2Data,
  altitude: damacAltitudeData,
  "aykon-city": damacAykonCityData,
  "canal-crown": damacCanalCrownData,
  "canal-heights": damacCanalHeightsData,
  "chic-tower": damacChicTowerData,
  "cavalli-couture": cavalliCoutureData,
  "damac-casa": damacCasaData,
  "lagoon-views": damacLagoonViewsData,
  "riverside-views": damacRiversideViewsData,
  "damac-hills-elo-2": damacHills2Elo2Data,
  "damac-bay": damacBayData,
  "golf-greens": golfGreensData,
  volta: damacVoltaData,
  "damac-district": damacDistrictData,
  "golf-town": golfTownData,
  "cavalli-tower": cavalliTowerData,

  // Binghatti (ALL PROJECTS)
  aquarise: aquariseData,
  bugatti: bugattiResidencesData,
  apex: apexData,
  cullinan: cullinanData,
  elite: eliteData,
  ghost: ghostData,
  hillcrest: hillcrestData,
  hills: hillsData,
  hillviews: hillviewsData,
  hillside: hillsideData,
  vintage: vintageData,
  twilight: twilightData,
  titania: titaniaData,
  starlight: starlightData,
  skyrise: skyriseData,
  skyhall: skyhallData,
  skyblade: skybladeData,
  pinnacle: pinnacleData,
  "binghatti-one": binghattiOneData,
  moonlight: moonlightData,
  haven: havenData,
  "mercedes-benz-places": mercedesBenzPlacesBinghattiData,
  "mercedes-benz-places-binghatti-city": mercedesBenzPlacesBinghattiCityData,
  skyterraces: skyterracesData,

  // Arada
  massar: massar3Data,
  armani: armaniBeachResidencesData,
  akala: akalaResidencesData,
  anantara: anantaraSharjahResidencesData,
  "il-teatro": ilTeatroData,
  inaura: inauraData,
  "masaar-azalea": masaarAzaleaData,
  "nesba-3": nesba3Data,
  "safa-1": safa1Data,
  "safa-park-view": safaParkViewData,
  sequoia: sequoiaData,
  "the-gate-3": theGate3Data,
  "the-gate-4": theGate4Data,
  "w-residences": wResidencesData,

  // Danube
  aspirz: aspirzDanubeData,
  shahrukhz: shahrukhzDanubeData,
  fashionz: fashionzDanubeData,
  bayz101: bayz101Data,
  bayz102: bayz102Data,
  breez: breezData,
  diamondz: diamondzData,
  eleganz: eleganzData,

  // Imtiaz
  wynwood: wynwoodData,
  "beach-walk-4": beachWalk4Data,
  "cove-edition-6": coveEdition6Data,
  "cove-grand": coveGrandData,
  "sunset-bay-grand": sunsetBayGrandData,
  "pearl-house-4": pearlHouse4Data,
  "the-symphony": theSymphonyData,
  "wynwood-horizon": wynwoodHorizonData,

  // Tiger
  orchid: orchidTigerData,
  "altai-tower": altaiTowerTigerData,
  "ananda-tower": anandaTigerData,
  "auresta-tower": aurestaTigerData,
  "elbrus-tower": elbrusTigerData,
  "guzel-tower": guzelTigerData,
  "jade-tower": jadeTigerData,
  "lilium-tower": liliumTigerData,
  "red-square-tower": redSquareTigerData,
  "sky-tower": tigerSkyTigerData,
  "volga-tower": volgaTigerData,

  // Beyond
  "31-above": beyond31AboveData,
  kanyon: kanyonData,
};

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------
function isBadValue(v) {
  if (v === null || v === undefined) return true;
  const s = String(v).trim();
  if (!s) return true;
  return (
    /^n\/a$/i.test(s) ||
    /^na$/i.test(s) ||
    /^tbd$/i.test(s) ||
    /^tba$/i.test(s) ||
    /on request/i.test(s) ||
    /to be announced/i.test(s) ||
    /coming soon/i.test(s) ||
    /to be confirmed/i.test(s)
  );
}

function cleanText(v) {
  return isBadValue(v) ? null : String(v).trim();
}

function getCanonicalHref(data) {
  const d = data?.en?.seo?.canonical || data?.ar?.seo?.canonical;
  return typeof d === "string" && d.trim() ? d.trim() : null;
}

function normalizeLocation(loc) {
  const s = cleanText(loc);
  if (!s) return null;

  if (/(\buae\b|united arab emirates)/i.test(s)) return s;

  if (
    /(dubai|sharjah|ajman|umm al quwain|umm al-quwain|abu dhabi|ras al khaimah)/i.test(
      s,
    )
  ) {
    return `${s}, UAE`;
  }

  return s;
}

function inferProjectLocation(data) {
  const address =
    data?.en?.location?.address ||
    data?.ar?.location?.address ||
    data?.en?.project?.location ||
    data?.ar?.project?.location ||
    data?.en?.project?.address ||
    data?.ar?.project?.address ||
    null;

  return normalizeLocation(address) || "";
}

function parseHrefMeta(href) {
  const raw = String(href || "").trim();
  if (!raw.startsWith("/")) return { category: null, developerSlug: null };

  const parts = raw.split("?")[0].split("#")[0].split("/").filter(Boolean);

  const root = parts[0]; // properties | projects
  if (root !== "properties" && root !== "projects")
    return { category: null, developerSlug: null };

  const category = parts[1] || null;
  const developerSlug = parts[2] || null;

  return { category, developerSlug };
}

function normalizeRegionSlug(regionSlug) {
  const s = String(regionSlug || "")
    .trim()
    .toLowerCase();

  // Region normalization mapping
  const regionMap = {
    // JVC/Jumeirah Village Circle
    "jumeirah village circle": "jvc",
    "jvc dubai": "jvc",
    jvc: "jvc",

    // Business Bay
    "business bay": "business-bay",
    "business-bay dubai": "business-bay",

    // Al Jaddaf
    "al jaddaf": "al-jaddaf",
    "al-jaddaf waterfront": "al-jaddaf",
    jaddaf: "al-jaddaf",

    // Dubai Production City/IMPZ
    "dubai production city": "dubai-production-city",
    impz: "dubai-production-city",
    "international media production zone": "dubai-production-city",

    // Arjan
    arjan: "arjan",
    "arjan dubai": "arjan",

    // Al Barsha
    "al barsha": "al-barsha",
    "al-barsha dubai": "al-barsha",

    // Dubai Science Park
    "dubai science park": "dubai-science-park",
    "dubai science park dubai": "dubai-science-park",

    // Dubai Sports City
    "dubai sports city": "dubai-sports-city",
    "sports city": "dubai-sports-city",

    // Downtown Dubai
    "downtown dubai": "downtown-dubai",
    downtown: "downtown-dubai",

    // Motor City
    "dubai motor city": "motor-city",
    "motor city": "motor-city",

    // Majan
    majan: "majan",
    "majan dubai": "majan",

    // Wadi Al Safa
    "wadi al safa 3": "wadi-al-safa",
    "wadi al safa": "wadi-al-safa",

    // Umm Al Quwain
    "umm al quwain": "umm-al-quwain",
    uaq: "umm-al-quwain",
    "downtown umm al quwain": "downtown-umm-al-quwain",

    // Sinniya Island
    "siniya island": "sinniya-island",
    "al sinniyyah island": "sinniya-island",

    // Sharjah/Ajman
    sharjah: "sharjah",
    "masaar tilal city": "masaar-tilal-city",
    ajman: "ajman",
    "al aaliah ajman": "al-aaliah-ajman",
  };

  return regionMap[s] || s;
}

function inferRegionFromLocation(locationText = "", href = "", slug = "") {
  const s = `${locationText} ${href} ${slug}`.toLowerCase();

  // UAQ
  if (/(siniya|sinniya|al\s*sinniyyah|siniya\s*island)/i.test(s))
    return "sinniya-island";
  if (/(downtown\s*umm\s*al\s*quwain|downtown\s*uaq|downtown-uaq)/i.test(s))
    return "downtown-umm-al-quwain";
  if (/(umm\s*al\s*quwain|\buaq\b)/i.test(s)) return "umm-al-quwain";

  // Ajman
  if (/al\s*aaliah/i.test(s)) return "al-aaliah-ajman";
  if (/ajman/i.test(s)) return "ajman";

  // Sharjah
  if (/sharjah\s*waterfront\s*city|al\s*hamriyah/i.test(s))
    return "sharjah-waterfront-city";
  if (/masaar|tilal\s*city/i.test(s)) return "masaar-tilal-city";
  if (/sharjah/i.test(s)) return "sharjah";

  // New Dubai regions
  if (/(downtown\s*dubai|burj\s*khalifa|opera\s*district)/i.test(s))
    return "downtown-dubai";
  if (/(jlt|jumeirah\s*lake\s*towers)/i.test(s)) return "jumeirah-lake-towers";
  if (/(dubai\s*islands|deira\s*islands)/i.test(s)) return "dubai-islands";
  if (/(al\s*sufouh|dubai\s*media\s*city|dubai\s*internet\s*city)/i.test(s))
    return "al-sufouh";

  // Jebel Ali / Furjan
  if (/al\s*furjan/i.test(s)) return "al-furjan";
  if (/downtown\s*jebel\s*ali/i.test(s)) return "downtown-jebel-ali";
  if (/jebel\s*ali/i.test(s)) return "jebel-ali";

  // Dubai
  if (/business\s*bay/i.test(s)) return "business-bay";
  if (/(sheikh\s*zayed|szr)/i.test(s)) return "sheikh-zayed-road";
  if (/(dubai\s*harbour|harbour)/i.test(s)) return "dubai-harbour";
  if (/palm\s*jumeirah/i.test(s)) return "palm-jumeirah";
  if (/(nad\s*al\s*sheba|meydan)/i.test(s)) return "nad-al-sheba";
  if (/jumeirah\s*islands/i.test(s)) return "jumeirah-islands";
  if (/jumeirah\s*golf/i.test(s)) return "jumeirah-golf-estates";
  if (/industrial\s*city/i.test(s)) return "dubai-industrial-city";
  if (/maritime\s*city/i.test(s)) return "dubai-maritime-city";
  if (/healthcare\s*city/i.test(s)) return "dubai-healthcare-city";
  if (/al\s*jaddaf/i.test(s)) return "al-jaddaf";
  if (/(creek\s*harbour|dubai\s*creek\s*harbour)/i.test(s))
    return "creek-harbour";
  if (/dubai\s*south|dwc|al\s*maktoum\s*airport/i.test(s)) return "dubai-south";

  // Binghatti specific locations
  if (/(jumeirah\s*village\s*circle|jvc)/i.test(s)) return "jvc";
  if (/dubai\s*production\s*city|impz/i.test(s)) return "dubai-production-city";
  if (/arjan/i.test(s)) return "arjan";
  if (/al\s*barsha/i.test(s)) return "al-barsha";
  if (/dubai\s*science\s*park/i.test(s)) return "dubai-science-park";
  if (/dubai\s*sports\s*city/i.test(s)) return "dubai-sports-city";
  if (/motor\s*city/i.test(s)) return "motor-city";
  if (/majan/i.test(s)) return "majan";
  if (/wadi\s*al\s*safa/i.test(s)) return "wadi-al-safa";

  // Damac communities
  if (/damac\s*hills\s*2|akoya\s*oxygen/i.test(s)) return "damac-hills-2";
  if (/damac\s*lagoons/i.test(s)) return "damac-lagoons";
  if (/damac\s*hills|akoya/i.test(s)) return "damac-hills";

  if (
    /mohammed\s*bin\s*rashid|\bmbr\b|ras\s*al\s*khor/i.test(s) ||
    /\/mohammed-bin-rashid-city\b/i.test(s)
  )
    return "mohammed-bin-rashid-city";

  if (
    /dubailand|arjan|majan|motor\s*city|dlrc|dubai\s*land\s*residence|dubai\s*sports\s*city|city\s*of\s*arabia/i.test(
      s,
    )
  )
    return "dubailand";

  return "dubailand";
}

// ---------------------------------------------------------------------------
// Media helper
// ---------------------------------------------------------------------------
export const getProjectCardMedia = (data) => {
  if (!data) return { type: "none", url: null };

  const node = data?.hero ? data : data?.en || data?.ar || {};
  const hero = node?.hero || {};
  const gallery = node?.gallery || {};

  const bg = hero?.backgroundUrl || "";
  const poster = hero?.posterUrl || hero?.poster || hero?.image || null;

  const isVideoUrl = (url) => {
    if (!url || typeof url !== "string") return false;
    const clean = url.split("?")[0].toLowerCase();
    return (
      clean.endsWith(".mp4") ||
      clean.endsWith(".webm") ||
      clean.endsWith(".mov") ||
      clean.endsWith(".m4v") ||
      clean.endsWith(".ogg")
    );
  };

  if (bg && !isVideoUrl(bg)) return { type: "image", url: bg };

  if (bg && isVideoUrl(bg)) {
    if (poster) return { type: "image", url: poster };
    return { type: "image", url: gallery?.slides?.[0] || null };
  }

  return {
    type: "image",
    url: gallery?.slides?.[0] || hero?.image || null,
  };
};

export const getProjectCardImage = (data) => getProjectCardMedia(data).url;

// ---------------------------------------------------------------------------
// Parsing helpers
// ---------------------------------------------------------------------------
function parsePriceAED(value) {
  if (isBadValue(value)) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;

  const str = String(value).trim();
  const match = str.match(/([\d,.]+)\s*([KMB])?/i);
  if (!match) return null;

  const numRaw = match[1].replace(/,/g, "");
  const suffix = (match[2] || "").toUpperCase();

  const num = Number(numRaw);

  if (!Number.isFinite(num)) return null;

  const mult =
    suffix === "K"
      ? 1_000
      : suffix === "M"
        ? 1_000_000
        : suffix === "B"
          ? 1_000_000_000
          : 1;

  return Math.round(num * mult);
}

function extractCompletionYear(value) {
  if (isBadValue(value)) return null;
  const years = String(value).match(/\b(19|20)\d{2}\b/g);
  if (!years?.length) return null;
  return Math.max(...years.map((y) => Number(y)));
}

function parseSqftNumber(value) {
  if (isBadValue(value)) return null;
  const s = String(value).toLowerCase().replace(/,/g, "");
  const m = s.match(/(\d+(\.\d+)?)\s*(sq\.?\s*ft|sqft)\b/i);
  if (!m) return null;
  const num = Number(m[1]);
  return Number.isFinite(num) ? Math.round(num) : null;
}

function parseSqftRange(value) {
  if (isBadValue(value)) return null;
  const s = String(value).toLowerCase().replace(/,/g, "");
  const m = s.match(
    /(\d+(\.\d+)?)\s*[-–]\s*(\d+(\.\d+)?)\s*(sq\.?\s*ft|sqft)\b/i,
  );
  if (!m) return null;

  const a = Number(m[1]);
  const b = Number(m[3]);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;

  return [Math.round(Math.min(a, b)), Math.round(Math.max(a, b))];
}

function extractBedroomsFromPlans(data) {
  const plans = data?.en?.floorPlans?.plans || [];
  const nums = [];

  for (const p of plans) {
    if (Number.isFinite(p?.bedrooms)) nums.push(p.bedrooms);

    const title = String(p?.title || "").toLowerCase();
    if (title.includes("studio")) nums.push(0);

    const match = title.match(/\b(\d+(\.\d+)?)\s*bed/i);
    if (match) {
      const n = Number(match[1]);
      if (Number.isFinite(n)) {
        if (Number.isInteger(n)) nums.push(n);
        else {
          nums.push(Math.floor(n));
          nums.push(Math.ceil(n));
        }
      }
    }
  }

  if (!nums.length) return { minBedrooms: null, maxBedrooms: null };

  return {
    minBedrooms: Math.min(...nums),
    maxBedrooms: Math.max(...nums),
  };
}

function extractSizeRangeSqft(data) {
  const plans = data?.en?.floorPlans?.plans || [];
  let min = null;
  let max = null;

  for (const p of plans) {
    const specs = p?.specs || {};

    const preferredKeys = [
      "Total Area",
      "Total area",
      "Total",
      "Total Range",
      "Suite Area",
      "Suite area",
      "Suite",
      "Area",
      "Option A total area",
      "Option B total area",
      "Option A suite area",
      "Option B suite area",
    ];

    const values = [];

    for (const k of preferredKeys) {
      if (specs[k]) values.push(specs[k]);
    }

    for (const v of Object.values(specs)) {
      if (typeof v === "string" && /sq\.?\s*ft|sqft/i.test(v)) values.push(v);
    }

    for (const v of values) {
      const r = parseSqftRange(v);
      if (r) {
        const [a, b] = r;
        min = min === null ? a : Math.min(min, a);
        max = max === null ? b : Math.max(max, b);
        continue;
      }

      const n = parseSqftNumber(v);
      if (Number.isFinite(n)) {
        min = min === null ? n : Math.min(min, n);
        max = max === null ? n : Math.max(max, n);
      }
    }
  }

  return { sizeSqftMin: min, sizeSqftMax: max };
}

function extractBestStartingPriceAED(data) {
  const p1 = parsePriceAED(data?.en?.project?.startingPrice);

  const plans = data?.en?.floorPlans?.plans || [];
  const planPrices = plans
    .map((p) =>
      parsePriceAED(
        p?.specs?.["Starting Price"] ||
          p?.specs?.["Starting price"] ||
          p?.specs?.["Starting Price (AED)"] ||
          null,
      ),
    )
    .filter((n) => Number.isFinite(n));

  const p2 = planPrices.length ? Math.min(...planPrices) : null;

  const candidates = [p1, p2].filter((n) => Number.isFinite(n));
  return candidates.length ? Math.min(...candidates) : null;
}

function extractProjectStatus(data) {
  const statusEn = data?.en?.project?.status;
  if (statusEn && typeof statusEn === "string") return statusEn.trim();

  const statusAr = data?.ar?.project?.status;
  if (statusAr && typeof statusAr === "string") return statusAr.trim();

  const projectData = data?.en?.project || data?.ar?.project || data?.project;
  if (projectData?.status) return String(projectData.status).trim();

  const completionDate = projectData?.completionDate;
  if (completionDate) {
    if (/(ready|completed|handover)/i.test(String(completionDate)))
      return "Ready";
    if (
      /(off plan|off-plan|under construction|construction)/i.test(
        String(completionDate),
      )
    )
      return "Off Plan";
  }

  return "Available";
}

// ---------------------------------------------------------------------------
// Project entry overrides for specific projects (only specified developers)
// ---------------------------------------------------------------------------
const PROJECT_ENTRY_OVERRIDES = {
  lumenaalta: {
    bedroomsLabelOverride: "Office Spaces",
    unitTypeOverride: "Office Spaces",
    developerOverride: "Omniyat",
  },
  "riviera-retails": {
    bedroomsLabelOverride: "Retail Units",
    unitTypeOverride: "Retail Spaces",
    developerOverride: "Azizi Developments",
  },
  aspirz: {
    bedroomsLabelOverride: "Apartments + Offices",
    unitTypeOverride: "Mixed Use",
    developerOverride: "Danube Properties",
  },
  emerald: {
    bedroomsLabelOverride: "Commercial",
    unitTypeOverride: "Commercial",
    developerOverride: "Azizi Developments",
  },
  "31-above": {
    bedroomsLabelOverride: "Commercial",
    unitTypeOverride: "Commercial",
    developerOverride: "Beyond Properties",
  },

  // Binghatti tweaks
  bugatti: { unitTypeOverride: "Penthouse" },
  "seahaven-penthouse": { unitTypeOverride: "Penthouse" },

  // Villas
  "sobha-estates": { unitTypeOverride: "Luxury Villas" },
  "sobha-elwood": { unitTypeOverride: "Luxury Villas" },
  "sobha-sanctuary": { unitTypeOverride: "Luxury Villas" },
  reserve: { unitTypeOverride: "Luxury Villas" },
  "damac-islands-2": { unitTypeOverride: "Townhouses & Villas" },
  massar: { unitTypeOverride: "Villas & Townhouses" },
  sequoia: { unitTypeOverride: "Villa" },

  // Omniyat luxury projects
  "the-alba-residences": { unitTypeOverride: "Luxury Beachfront Residences" },
  "opus-tower": { unitTypeOverride: "Iconic Residences" },
  "vela-dorchester": { unitTypeOverride: "Ultra-Luxury Residences" },
  "orla-dorchester": { unitTypeOverride: "Ultra-Luxury Residences" },
  "vela-viento": { unitTypeOverride: "Luxury Waterfront Residences" },

  // New project overrides
  "cavalli-tower": { unitTypeOverride: "Luxury Residences" },
  "azizi-grand": { unitTypeOverride: "Premium Apartments" },
  "burj-azizi": { unitTypeOverride: "Tower Residences" },
  "the-symphony": { unitTypeOverride: "Harmony Residences" },
};

// ---------------------------------------------------------------------------
// Region overrides for specific projects (only specified developers)
// ---------------------------------------------------------------------------
const REGION_OVERRIDES = {
  // UAQ
  "aqua-crest": "downtown-umm-al-quwain",
  aquamont: "downtown-umm-al-quwain",
  "siniya-island": "sinniya-island",
  "siniya-island-secondary": "sinniya-island",
  "sobha-sanctuary": "downtown-umm-al-quwain",
  "beach-residences": "sinniya-island",
  "riverside-crescent": "downtown-umm-al-quwain",

  // Sharjah
  massar: "masaar-tilal-city",
  sequoia: "masaar-tilal-city",
  "masaar-azalea": "masaar-tilal-city",
  anantara: "sharjah",
  "nesba-3": "sharjah",
  "safa-1": "sharjah",
  "safa-park-view": "sharjah",
  "the-gate-3": "sharjah",
  "the-gate-4": "sharjah",
  "il-teatro": "sharjah",
  inaura: "sharjah",

  // Ajman
  orchid: "al-aaliah-ajman",
  "altai-tower": "al-aaliah-ajman",
  "ananda-tower": "al-aaliah-ajman",
  "auresta-tower": "al-aaliah-ajman",
  "elbrus-tower": "al-aaliah-ajman",
  "guzel-tower": "al-aaliah-ajman",
  "jade-tower": "al-aaliah-ajman",
  "lilium-tower": "al-aaliah-ajman",
  "red-square-tower": "al-aaliah-ajman",
  "sky-tower": "al-aaliah-ajman",
  "volga-tower": "al-aaliah-ajman",

  // Binghatti projects by location
  apex: "jvc",
  aquarise: "business-bay",
  "binghatti-one": "business-bay",
  cullinan: "al-jaddaf",
  elite: "dubai-production-city",
  ghost: "al-jaddaf",
  haven: "dubai-sports-city",
  hillcrest: "arjan",
  hills: "al-barsha",
  hillside: "al-barsha",
  hillviews: "dubai-science-park",
  moonlight: "al-jaddaf",
  pinnacle: "al-jaddaf",
  skyrise: "business-bay",
  skyhall: "business-bay",
  skyblade: "downtown-dubai",
  skyterraces: "motor-city",
  starlight: "al-jaddaf",
  titania: "majan",
  twilight: "al-jaddaf",
  vintage: "wadi-al-safa",

  // Mercedes-Benz Places
  "mercedes-benz-places": "downtown-dubai",
  "mercedes-benz-places-binghatti-city": "downtown-dubai",

  // Dubai - Business Bay
  lumenaalta: "business-bay",
  bugatti: "business-bay",
  altitude: "business-bay",
  "canal-crown": "business-bay",
  "canal-heights": "business-bay",
  "chic-tower": "business-bay",
  "opus-tower": "business-bay",
  "vela-dorchester": "business-bay",
  "vela-viento": "business-bay",
  "azizi-grand": "business-bay",
  "burj-azizi": "business-bay",

  // Dubai - Sheikh Zayed Road
  skyparks: "sheikh-zayed-road",
  central: "sheikh-zayed-road",
  "safa-gate": "sheikh-zayed-road",
  volta: "sheikh-zayed-road",
  "aykon-city": "sheikh-zayed-road",
  "cavalli-couture": "sheikh-zayed-road",

  // Dubai - Dubai Harbour
  "seahaven-penthouse": "dubai-harbour",
  "damac-bay": "dubai-harbour",

  // Dubai - Palm Jumeirah
  armani: "palm-jumeirah",
  "the-alba-residences": "palm-jumeirah",
  "orla-dorchester": "palm-jumeirah",
  "beach-oasis": "palm-jumeirah",

  // Dubai - Jumeirah Islands
  "eltiera-views": "jumeirah-islands",

  // Dubai - Dubai Maritime City
  "chelsea-residences": "dubai-maritime-city",
  kanyon: "dubai-maritime-city",
  "31-above": "dubai-maritime-city",

  // Dubai - MBR City
  one: "mohammed-bin-rashid-city",
  "the-element": "mohammed-bin-rashid-city",
  "sobha-estates": "mohammed-bin-rashid-city",
  "riviera-retails": "mohammed-bin-rashid-city",

  // Dubai - Dubailand
  orbis: "dubailand",
  solis: "dubailand",
  milan: "dubailand",
  aspirz: "dubailand",
  "sobha-elwood": "dubailand",
  "damac-islands-2": "dubailand",
  reserve: "dubailand",
  verde: "dubailand",
  monaco: "dubailand",
  venice: "dubailand",

  // Dubai - Al Jaddaf
  shahrukhz: "al-jaddaf",
  "creek-views-1": "al-jaddaf",
  "creek-views-2": "al-jaddaf",
  "creek-views-3": "al-jaddaf",
  fashionz: "al-jaddaf",
  bayz101: "al-jaddaf",
  bayz102: "al-jaddaf",
  breez: "al-jaddaf",
  diamondz: "al-jaddaf",
  eleganz: "al-jaddaf",

  // Dubai - Healthcare City
  emerald: "dubai-healthcare-city",

  // Dubai South
  venice: "dubai-south",
  monaco: "dubai-south",

  // Dubai - Creek Harbour
  "riviera-azure": "creek-harbour",

  // Damac Communities
  "damac-hills-elo-2": "damac-hills-2",
  "lagoon-views": "damac-lagoons",
  "riverside-views": "dubailand",
  "golf-greens": "damac-hills",
  "golf-town": "damac-hills",
  "damac-district": "damac-hills",

  // Dubai Islands
  wynwood: "dubai-islands",
  "beach-walk-4": "dubai-islands",
  "cove-edition-6": "dubai-islands",
  "cove-grand": "dubai-islands",
  "sunset-bay-grand": "dubai-islands",
  "pearl-house-4": "dubai-islands",
  "the-symphony": "dubai-islands",
  "wynwood-horizon": "dubai-islands",

  // Al Sufouh
  "damac-casa": "al-sufouh",

  // Dubai - Al Furjan
  skyscape: "al-furjan",
  skyvue: "al-furjan",

  // Dubai - Dubai Marina
  "cavalli-tower": "dubai-marina",
  mina: "dubai-marina",
  ruby: "dubai-marina",
  "azizi-jewel": "dubai-marina",

  // Dubai - Sports City
  haven: "dubai-sports-city",
};

// ---------------------------------------------------------------------------
// Core builder function (UPDATED to use PROJECT_TO_DEVELOPER mapping)
// ---------------------------------------------------------------------------
function buildProjectEntry({
  slug,
  href = null,
  regionSlug,
  data,
  bedroomsLabelOverride = null,
  unitTypeOverride = null,
  locationOverride = null,
  developerOverride = null,
}) {
  const projectEn = data?.en?.project || {};
  const projectAr = data?.ar?.project || {};

  const canonicalHref = getCanonicalHref(data);
  const safeHref = canonicalHref || href || "";

  // Get developer slug from mapping first, then fallback to href parsing
  const developerSlug = PROJECT_TO_DEVELOPER[slug] || null;

  // Get category from href or infer from slug
  const { category: hrefCategory } = parseHrefMeta(safeHref);

  // Infer category from slug if needed
  let inferredCategory = "apartments";
  if (
    slug.includes("villa") ||
    slug.includes("estates") ||
    slug.includes("reserve") ||
    slug.includes("verde") ||
    slug.includes("elwood") ||
    slug.includes("sanctuary") ||
    slug.includes("island") ||
    slug.includes("massar") ||
    slug.includes("sequoia") ||
    slug.includes("monaco")
  ) {
    inferredCategory = "villas";
  } else if (slug.includes("penthouse") || slug.includes("bugatti")) {
    inferredCategory = "penthouses";
  } else if (
    slug.includes("retail") ||
    slug.includes("commercial") ||
    slug.includes("aspirz") ||
    slug.includes("emerald") ||
    slug.includes("31-above") ||
    slug.includes("lumena")
  ) {
    inferredCategory = "commercial-retail";
  }

  const category = hrefCategory || inferredCategory;

  const nameEn = cleanText(projectEn?.name) || "";
  const nameAr = cleanText(projectAr?.name) || "";

  const developerName =
    cleanText(developerOverride) ||
    cleanText(projectEn?.developer) ||
    (developerSlug ? DEVELOPER_SLUG_TO_NAME[developerSlug] : "") ||
    "";

  const image = getProjectCardImage(data);

  const unitType =
    cleanText(unitTypeOverride) || cleanText(projectEn?.type) || "";

  const status = extractProjectStatus(data);

  let { minBedrooms, maxBedrooms } = extractBedroomsFromPlans(data);
  const isNonResidential =
    unitType && /office|retail|commercial/i.test(unitType);
  if (isNonResidential) {
    minBedrooms = null;
    maxBedrooms = null;
  }

  const bedrooms = cleanText(bedroomsLabelOverride)
    ? bedroomsLabelOverride
    : null;

  const { sizeSqftMin, sizeSqftMax } = extractSizeRangeSqft(data);
  const startingPriceAED = extractBestStartingPriceAED(data);

  const completionDate = cleanText(projectEn?.completionDate);
  const completionYear = extractCompletionYear(completionDate);

  const location =
    normalizeLocation(locationOverride) ||
    inferProjectLocation(data) ||
    normalizeLocation(projectEn?.location) ||
    "";

  return {
    slug,
    href: safeHref,
    data,
    regionSlug: normalizeRegionSlug(regionSlug),
    category,
    developerSlug,
    developer: developerName,

    nameEn,
    nameAr,
    name: nameEn || nameAr || "",

    type: cleanText(projectEn?.type) || "",
    unitType,
    status,
    location,
    image,

    bedrooms,

    priceAED: startingPriceAED,
    startingPriceAED,
    completionDate: completionDate || "",
    completionYear,

    sizeSqftMin,
    sizeSqftMax,

    minBedrooms,
    maxBedrooms,

    devStatus: status,
    saleStatus: "",
    hasPostHandover: null,
    postHandoverMonths: null,
  };
}

// ---------------------------------------------------------------------------
// Build the main index (only specified developers)
// ---------------------------------------------------------------------------
export const regionProjectsIndex = Object.entries(PROJECT_DATA_MAP)
  .filter(([slug, data]) => slug && data)
  .map(([slug, data]) => {
    const href = getCanonicalHref(data) || "";
    const location = inferProjectLocation(data);

    const forcedRegion = REGION_OVERRIDES[slug];
    const inferredRegion = inferRegionFromLocation(location, href, slug);

    const regionSlug = forcedRegion || inferredRegion || "dubailand";
    const overrides = PROJECT_ENTRY_OVERRIDES[slug] || {};

    return buildProjectEntry({
      slug,
      href,
      regionSlug,
      data,
      ...overrides,
    });
  });

// ---------------------------------------------------------------------------
// Public helper functions
// ---------------------------------------------------------------------------
export function getProjectsForRegion(regionSlug) {
  const k = normalizeRegionSlug(String(regionSlug || "").trim());
  if (!k) return [];
  return regionProjectsIndex.filter((project) => project.regionSlug === k);
}

export function getRegionsWithProjects() {
  return [
    ...new Set(regionProjectsIndex.map((p) => p.regionSlug).filter(Boolean)),
  ];
}

export function getProjectBySlug(projectSlug) {
  return regionProjectsIndex.find((project) => project.slug === projectSlug);
}

export function getProjectsByDeveloper(developerKey) {
  const key = cleanText(developerKey);
  if (!key) return [];
  const k = key.toLowerCase();

  return regionProjectsIndex.filter((p) => {
    const byName = (p.developer || "").toLowerCase() === k;
    const bySlug = (p.developerSlug || "").toLowerCase() === k;

    const developerFromMapping = DEVELOPER_SLUG_TO_NAME[k];
    const byMapping =
      developerFromMapping &&
      (p.developer || "").toLowerCase() === developerFromMapping.toLowerCase();

    const partialMatch = p.developer && p.developer.toLowerCase().includes(k);

    return byName || bySlug || byMapping || partialMatch;
  });
}

export function getProjectsByType(propertyType) {
  const t = cleanText(propertyType);
  if (!t) return [];
  const k = t.toLowerCase();

  return regionProjectsIndex.filter((p) => {
    const a = (p.type || "").toLowerCase();
    const b = (p.unitType || "").toLowerCase();
    return a === k || b === k;
  });
}

export function getProjectsOutsideDubai() {
  return regionProjectsIndex.filter((project) =>
    [
      "umm-al-quwain",
      "sinniya-island",
      "downtown-umm-al-quwain",
      "masaar-tilal-city",
      "sharjah-waterfront-city",
      "sharjah",
      "al-aaliah-ajman",
      "ajman",
    ].includes(project.regionSlug),
  );
}

export function getProjectsInDubai() {
  const dubaiRegions = [
    // Main Dubai regions
    "business-bay",
    "sheikh-zayed-road",
    "mohammed-bin-rashid-city",
    "dubai-harbour",
    "palm-jumeirah",
    "jumeirah-islands",
    "dubailand",
    "dubai-maritime-city",
    "dubai-healthcare-city",
    "creek-harbour",
    "dubai-south",
    "damac-hills",
    "al-jaddaf",
    "downtown-dubai",
    "jumeirah-lake-towers",
    "dubai-islands",
    "al-sufouh",
    "al-furjan",
    "damac-hills-2",
    "damac-lagoons",
    "dubai-marina",

    // Binghatti specific Dubai regions
    "jvc",
    "dubai-production-city",
    "arjan",
    "al-barsha",
    "dubai-science-park",
    "dubai-sports-city",
    "motor-city",
    "majan",
    "wadi-al-safa",
  ];

  return regionProjectsIndex.filter((project) =>
    dubaiRegions.includes(project.regionSlug),
  );
}

export function getProjectsByCategory(categorySlug) {
  const slug = cleanText(categorySlug);
  if (!slug) return [];

  return regionProjectsIndex.filter(
    (project) => (project.category || "").toLowerCase() === slug.toLowerCase(),
  );
}

export function getRegionStats() {
  const stats = {};

  regionProjectsIndex.forEach((project) => {
    const region = project.regionSlug;
    if (!region) return;

    if (!stats[region]) {
      stats[region] = {
        count: 0,
        projects: [],
        developers: new Set(),
      };
    }

    stats[region].count++;
    stats[region].projects.push(project.slug);
    stats[region].developers.add(project.developer);
  });

  Object.keys(stats).forEach((region) => {
    stats[region].developers = Array.from(stats[region].developers);
  });

  return stats;
}

export function getProjectsByStatus(statusFilter) {
  if (!statusFilter) return regionProjectsIndex;

  const filter = String(statusFilter).toLowerCase();
  return regionProjectsIndex.filter((project) => {
    const projectStatus = (project.status || "").toLowerCase();

    if (filter === "all") return true;

    if (filter === "off-plan") {
      return (
        projectStatus.includes("off-plan") ||
        projectStatus.includes("off plan") ||
        projectStatus.includes("under construction") ||
        projectStatus.includes("construction")
      );
    }

    if (filter === "ready") {
      return (
        projectStatus.includes("ready") ||
        projectStatus.includes("completed") ||
        projectStatus.includes("secondary")
      );
    }

    return projectStatus === filter;
  });
}

export function getAllProjectSlugs() {
  return regionProjectsIndex.map((project) => project.slug);
}

export function getProjectCountByRegion() {
  const counts = {};
  regionProjectsIndex.forEach((project) => {
    const region = project.regionSlug;
    counts[region] = (counts[region] || 0) + 1;
  });
  return counts;
}

export function searchProjects(searchTerm) {
  const term = String(searchTerm || "").toLowerCase();
  if (!term) return regionProjectsIndex;

  return regionProjectsIndex.filter((project) => {
    return (
      (project.name && project.name.toLowerCase().includes(term)) ||
      (project.nameEn && project.nameEn.toLowerCase().includes(term)) ||
      (project.nameAr && project.nameAr.toLowerCase().includes(term)) ||
      (project.slug && project.slug.toLowerCase().includes(term)) ||
      (project.developer && project.developer.toLowerCase().includes(term))
    );
  });
}

export function getDevelopersWithStats() {
  const developers = {};

  regionProjectsIndex.forEach((project) => {
    const devName = project.developer;
    if (!devName) return;

    if (!developers[devName]) {
      developers[devName] = {
        name: devName,
        slug:
          project.developerSlug || devName.toLowerCase().replace(/\s+/g, "-"),
        projectCount: 0,
        projects: [],
      };
    }

    developers[devName].projectCount++;
    developers[devName].projects.push(project.slug);
  });

  return Object.values(developers).sort(
    (a, b) => b.projectCount - a.projectCount,
  );
}

export function getAllDevelopers() {
  const developers = new Set();
  regionProjectsIndex.forEach((project) => {
    if (project.developer) developers.add(project.developer);
  });
  return Array.from(developers).sort();
}

// ---------------------------------------------------------------------------
// Region grouping functions
// ---------------------------------------------------------------------------
export function getRegionGroups() {
  const groups = {
    dubai: [
      "business-bay",
      "sheikh-zayed-road",
      "downtown-dubai",
      "jvc",
      "al-jaddaf",
      "dubai-production-city",
      "arjan",
      "al-barsha",
      "dubai-science-park",
      "dubai-sports-city",
      "motor-city",
      "majan",
      "wadi-al-safa",
      "mohammed-bin-rashid-city",
      "dubai-harbour",
      "palm-jumeirah",
      "jumeirah-lake-towers",
      "dubai-marina",
      "dubai-islands",
      "al-sufouh",
      "al-furjan",
      "dubailand",
    ],
    "northern-emirates": [
      "umm-al-quwain",
      "downtown-umm-al-quwain",
      "sinniya-island",
      "sharjah",
      "masaar-tilal-city",
      "sharjah-waterfront-city",
      "ajman",
      "al-aaliah-ajman",
    ],
    "damac-communities": ["damac-hills", "damac-hills-2", "damac-lagoons"],
  };

  return groups;
}

export function getProjectsByRegionGroup(groupName) {
  const groups = getRegionGroups();
  const groupRegions = groups[groupName] || [];

  if (!groupRegions.length) return [];

  return regionProjectsIndex.filter((project) =>
    groupRegions.includes(project.regionSlug),
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
export default {
  regionProjectsIndex,
  getProjectsForRegion,
  getRegionsWithProjects,
  getProjectBySlug,
  getProjectsByDeveloper,
  getProjectsByType,
  getProjectsOutsideDubai,
  getProjectsInDubai,
  getProjectsByCategory,
  getRegionStats,
  getProjectsByStatus,
  getAllProjectSlugs,
  getProjectCountByRegion,
  searchProjects,
  getDevelopersWithStats,
  getAllDevelopers,
  getRegionGroups,
  getProjectsByRegionGroup,
};
