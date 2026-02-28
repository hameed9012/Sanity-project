/* eslint-disable @next/next/no-assign-module-variable */

import { getSanityPropertyBySlug } from "./sanityQueries";

// Import all project data directly - ONLY SPECIFIED DEVELOPERS
import { aquaCrestData } from "@/data/properties/apartments/sobha/aqua-crest/aqua-crest";
import { aquamontData } from "@/data/properties/apartments/sobha/aquamont/aquamont";
import { centralData } from "@/data/properties/apartments/sobha/central/central";
import { skyParksData } from "@/data/properties/apartments/sobha/skyparks/skyparks";
import { rivieraRetailsData } from "@/data/properties/commercial-retail/azizi/riviera-retails/riviera-retails";
import { lumenaAltaData } from "@/data/properties/commercial-retail/omniyat/lumenaalta/lumenaalta";
import { seahavenPenthouseData } from "@/data/properties/penthouses/sobha/seahaven-penthouse/seahaven-penthouse";
import { massar3Data } from "@/data/properties/villas/arada/massar/massar";
import { alSinniyyahIslandData } from "@/data/properties/villas/sobha/al-sinniyyah-island/al-sinniyyah-island";
import { sobhaEstates } from "@/data/properties/villas/sobha/sobha-estates/sobha-estates";
import { orbisData } from "@/data/properties/apartments/sobha/orbis/orbis";
import { sobhaSolisData } from "@/data/properties/apartments/sobha/solis/solis";
import { sobhaOneData } from "@/data/properties/apartments/sobha/one/one";
import { theElementData } from "@/data/properties/apartments/sobha/the-element/the-element";
import { aspirzDanubeData } from "@/data/properties/commercial-retail/danube/aspirz/aspirz";
import { shahrukhzDanubeData } from "@/data/properties/apartments/danube/shahrukhz/shahrukhz";
import { beyond31AboveData } from "@/data/properties/commercial-retail/beyond/31-above/31-above";
import { kanyonData } from "@/data/properties/apartments/beyond/kanyon/kanyon";
import { aquariseData } from "@/data/properties/apartments/binghatti/aquarise/aquarise";
import { chelseaResidencesData } from "@/data/properties/apartments/damac/chelsea-residences/chelsea-residences";
import { bugattiResidencesData } from "@/data/properties/penthouses/binghatti/bugatti/bugatti";
import { armaniBeachResidencesData } from "@/data/properties/apartments/arada/armani/armani";
import { aziziMilanData } from "@/data/properties/apartments/azizi/milan/milan";
import { coventryCurve2Data } from "@/data/properties/apartments/gfs/coventry-curve-2/coventry-curve-2";
import { wynwoodData } from "@/data/properties/apartments/imtiaz/wynwood/wynwood";
import { damacSafaGateData } from "@/data/properties/apartments/damac/safa-gate/safa-gate";
import { orchidTigerData } from "@/data/properties/apartments/tiger/orchid/orchid";
import { damacIslands2Data } from "@/data/properties/villas/damac/damac-islands-2/damac-islands-2";
import { elwoodData } from "@/data/properties/villas/sobha/elwood/elwood";
import { aziziAmirData } from "@/data/properties/apartments/azizi/amir/amir";
import { aziziCreekViews1Data } from "@/data/properties/apartments/azizi/creek-views-1/creek-views-1";
import { aziziCreekViews2Data } from "@/data/properties/apartments/azizi/creek-views-2/creek-views-2";
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
import aziziVenice from "@/data/properties/apartments/azizi/venice/venice";
import aziziAbraham from "@/data/properties/apartments/azizi/abraham/abraham";
import { aziziCreekViews3Data } from "@/data/properties/apartments/azizi/creek-views-3/creek-views-3";
import { aziziMonacoData } from "@/data/properties/villas/azizi/monaco/monaco";
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
import { reserveData } from "@/data/properties/villas/sobha/reserve/reserve";
import { verdeData } from "@/data/properties/villas/sobha/verde/verde";
import mercedesBenzPlacesBinghattiData from "@/data/properties/apartments/binghatti/mercedes-benz-places/mercedes-benz-places";
import { aziziLeilyData } from "@/data/properties/apartments/azizi/leily/leily";
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
import { omniyatAlbaResidencesData } from "@/data/properties/apartments/omniyat/the-alba-residences/the-alba-residences";
import omniyatOpusData from "@/data/properties/apartments/omniyat/opus-tower/opus-tower";
import omniyatVelaDorchesterData from "@/data/properties/apartments/omniyat/vela-dorchester/vela-dorchester";
import omniyatOrlaDorchesterData from "@/data/properties/apartments/omniyat/orla-dorchester/orla-dorchester";
import omniyatVelaVientoData from "@/data/properties/apartments/omniyat/vela-viento/vela-viento";
import siniyaIslandSecondaryData from "@/data/properties/villas/sobha/siniya-island-secondary/siniya-island-secondary";
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
import sobhaElwoodSecondaryData from "@/data/properties/apartments/sobha/sobha-elwood-secondary/sobha-elwood-secondary";
import havenData from "@/data/properties/apartments/binghatti/haven/haven";
import fashionzDanubeData from "@/data/properties/apartments/danube/fashionz/fashionz";
import bayz101Data from "@/data/properties/apartments/danube/bayz101/bayz101";
import bayz102Data from "@/data/properties/apartments/danube/bayz102/bayz102";
import breezData from "@/data/properties/apartments/danube/breez/breez";
import diamondzData from "@/data/properties/apartments/danube/diamondz/diamondz";
import eleganzData from "@/data/properties/apartments/danube/eleganz/eleganz";
import riversideCrescent310Data from "@/data/properties/apartments/sobha/riverside-crescent/riverside-crescent";
import skyscapeSobhaData from "@/data/properties/apartments/sobha/skyscape/skyscape";
import skyvueSobhaData from "@/data/properties/apartments/sobha/skyvue/skyvue";
import beachResidencesSiniyaData from "@/data/properties/apartments/sobha/beach-residences/beach-residences";
import { aziziGrandData } from "@/data/properties/apartments/azizi/azizi-grand/azizi-grand";
import burjAziziData from "@/data/properties/apartments/azizi/burj-azizi/burj-azizi";
import aziziMinaData from "@/data/properties/apartments/azizi/mina/mina";
import rivieraAzureData from "@/data/properties/apartments/azizi/riviera-azure/riviera-azure";
import aziziRubyData from "@/data/properties/apartments/azizi/ruby/ruby";
import aziziJewelData from "@/data/properties/apartments/azizi/azizi-jewel/azizi-jewel";
import beachWalk4Data from "@/data/properties/apartments/imtiaz/beach-walk-4/beach-walk-4";
import coveEdition6Data from "@/data/properties/apartments/imtiaz/cove-edition-6/cove-edition-6";
import coveGrandData from "@/data/properties/apartments/imtiaz/cove-grand/cove-grand";
import sunsetBayGrandData from "@/data/properties/apartments/imtiaz/sunset-bay-grand/sunset-bay-grand";
import pearlHouse4Data from "@/data/properties/apartments/imtiaz/pearl-house-4/pearl-house-4";
import theSymphonyData from "@/data/properties/apartments/imtiaz/the-symphony/the-symphony";
import wynwoodHorizonData from "@/data/properties/apartments/imtiaz/wynwood-horizon/wynwood-horizon";
import cavalliTowerData from "@/data/properties/apartments/damac/cavalli-tower/cavalli-tower";
import sobhaSanctuaryData from "@/data/properties/villas/sobha/sobha-sanctuary/sobha-sanctuary";
import beachOasisData from "@/data/properties/apartments/azizi/beach-oasis/beach-oasis";

/**
 * ✅ PROJECT DATA MAP - Direct access to your data
 * Only including projects from specified developers: Damac, Sobha, Azizi, Binghatti, Arada, Imtiaz, Tiger, Beyond, Omniyat, Danube
 **/
export const PROJECT_DATA_MAP = {
  // Apartments - Sobha
  skyparks: skyParksData,
  aquamont: aquamontData,
  "aqua-crest": aquaCrestData,
  central: centralData,
  orbis: orbisData,
  "sobha-solis": sobhaSolisData,
  "sobha-one": sobhaOneData,
  reserve: reserveData,
  verde: verdeData,
  "riverside-crescent": riversideCrescent310Data,
  skyscape: skyscapeSobhaData,
  skyvue: skyvueSobhaData,
  "beach-residences": beachResidencesSiniyaData,
  "sobha-elwood-secondary": sobhaElwoodSecondaryData,
  "sobha-sanctuary": sobhaSanctuaryData,

  // Apartments - Damac
  "chelsea-residences": chelseaResidencesData,
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

  // Apartments - Binghatti
  aquarise: aquariseData,
  apex: apexData,
  cullinan: cullinanData,
  elite: eliteData,
  ghost: ghostData,
  hillcrest: hillcrestData,
  hills: hillsData,
  hillviews: hillviewsData,
  haven: havenData,
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
  skyterraces: skyterracesData,
  "mercedes-benz-places": mercedesBenzPlacesBinghattiData,
  "mercedes-benz-places-binghatti-city": mercedesBenzPlacesBinghattiCityData,

  // Apartments - Arada
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

  // Apartments - Azizi
  milan: aziziMilanData,
  amir: aziziAmirData,
  "creek-views-1": aziziCreekViews1Data,
  "creek-views-2": aziziCreekViews2Data,
  "creek-views-3": aziziCreekViews3Data,
  david: aziziDavidData,
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
  "beach-oasis": beachOasisData,
  "azizi-grand": aziziGrandData,
  "burj-azizi": burjAziziData,
  mina: aziziMinaData,
  "riviera-azure": rivieraAzureData,
  ruby: aziziRubyData,
  "azizi-jewel": aziziJewelData,

  // Apartments - Imtiaz
  wynwood: wynwoodData,
  "beach-walk-4": beachWalk4Data,
  "cove-edition-6": coveEdition6Data,
  "cove-grand": coveGrandData,
  "sunset-bay-grand": sunsetBayGrandData,
  "pearl-house-4": pearlHouse4Data,
  "the-symphony": theSymphonyData,
  "wynwood-horizon": wynwoodHorizonData,

  // Apartments - Tiger
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

  // Apartments - Beyond
  kanyon: kanyonData,

  // Apartments - Omniyat
  "the-alba-residences": omniyatAlbaResidencesData,
  "opus-tower": omniyatOpusData,
  "vela-dorchester": omniyatVelaDorchesterData,
  "orla-dorchester": omniyatOrlaDorchesterData,
  "vela-viento": omniyatVelaVientoData,

  // Apartments - Danube
  "danube-shahrukhz": shahrukhzDanubeData,
  bayz101: bayz101Data,
  bayz102: bayz102Data,
  breez: breezData,
  diamondz: diamondzData,
  eleganz: eleganzData,
  fashionz: fashionzDanubeData,

  // Villas - Sobha
  "sobha-estates": sobhaEstates,
  "siniya-island": alSinniyyahIslandData,
  "siniya-island-secondary": siniyaIslandSecondaryData,
  "sobha-elwood": elwoodData,
  "the-element": theElementData,

  // Villas - Arada
  massar: massar3Data,

  // Villas - Damac
  "damac-islands-2": damacIslands2Data,

  // Villas - Azizi
  monaco: aziziMonacoData,

  // Commercial - Azizi
  "riviera-retails": rivieraRetailsData,
  emerald: aziziEmeraldData,

  // Commercial - Omniyat
  lumenaalta: lumenaAltaData,

  // Commercial - Beyond
  "31-above": beyond31AboveData,

  // Commercial - Danube
  "danube-aspirz": aspirzDanubeData,

  // Penthouses - Sobha
  "seahaven-penthouse": seahavenPenthouseData,

  // Penthouses - Binghatti
  bugatti: bugattiResidencesData,
};

/**
 * 🎯 Get project data with locale support
 */
export async function getProjectData(category, developer, project, locale = "en") {
  console.log("🔄 Getting project:", { project, locale });

  // ─── 1. Try Sanity first ─────────────────────────────────
  try {
    const sanityData = await getSanityPropertyBySlug(project);

    if (sanityData) {
      console.log("✅ Loaded from Sanity:", project);
      const data = sanityData[locale] || sanityData.en;
      if (data) return data;
    }
  } catch (err) {
    console.warn("⚠️ Sanity fetch failed, falling back to static:", err.message);
  }

  // ─── 2. Fall back to static data ────────────────────────
  const projectData = PROJECT_DATA_MAP[project];

  if (!projectData) {
    console.warn(`❌ Project "${project}" not found anywhere`);
    return FALLBACK_PROJECT_DATA;
  }

  const data = projectData[locale] || projectData.en;

  if (!data) {
    console.warn(`❌ No data for "${project}" in "${locale}"`);
    return FALLBACK_PROJECT_DATA;
  }

  console.log("✅ Loaded from static files:", project);
  return data;
}

/**
 * ✅ Static project routes
 */
export function getAllProjectSlugs() {
  return Object.keys(PROJECT_DATA_MAP).map((project) => {
    let category = "apartments";
    let developer = "sobha";

    // Category detection
    if (
      project.includes("estates") ||
      project.includes("siniya") ||
      project.includes("island") ||
      project.includes("massar") ||
      project.includes("monaco") ||
      project.includes("elwood") ||
      project.includes("element") ||
      project.includes("sanctuary") ||
      project === "damac-islands-2"
    ) {
      category = "villas";
    } else if (
      project.includes("riviera-retails") ||
      project.includes("lumena") ||
      project.includes("31-above") ||
      project.includes("aspirz") ||
      project.includes("emerald")
    ) {
      category = "commercial-retail";
    } else if (
      project.includes("seahaven-penthouse") ||
      project.includes("bugatti")
    ) {
      category = "penthouses";
    }

    // Developer detection
    if (
      project.includes("damac") ||
      project === "altitude" ||
      project === "aykon-city" ||
      project === "canal-crown" ||
      project === "canal-heights" ||
      project === "chic-tower" ||
      project === "cavalli-couture" ||
      project === "damac-casa" ||
      project === "lagoon-views" ||
      project === "riverside-views" ||
      project === "damac-hills-elo-2" ||
      project === "damac-bay" ||
      project === "golf-greens" ||
      project === "volta" ||
      project === "damac-district" ||
      project === "golf-town" ||
      project === "cavalli-tower" ||
      project === "chelsea-residences"
    ) {
      developer = "damac";
    } else if (
      project.includes("azizi") ||
      project === "milan" ||
      project === "amir" ||
      project === "creek-views-1" ||
      project === "creek-views-2" ||
      project === "creek-views-3" ||
      project === "david" ||
      project === "farishta-2" ||
      project === "gabriel" ||
      project === "lina" ||
      project === "noura" ||
      project === "raffi" ||
      project === "sikander" ||
      project === "wares" ||
      project === "aryan" ||
      project === "venice" ||
      project === "abraham" ||
      project === "leily" ||
      project === "beach-oasis" ||
      project === "azizi-grand" ||
      project === "burj-azizi" ||
      project === "mina" ||
      project === "riviera-azure" ||
      project === "ruby" ||
      project === "azizi-jewel" ||
      project === "monaco" ||
      project === "riviera-retails" ||
      project === "emerald"
    ) {
      developer = "azizi";
    } else if (
      project.includes("binghatti") ||
      project === "aquarise" ||
      project === "apex" ||
      project === "cullinan" ||
      project === "elite" ||
      project === "ghost" ||
      project === "hillcrest" ||
      project === "hills" ||
      project === "hillviews" ||
      project === "haven" ||
      project === "hillside" ||
      project === "vintage" ||
      project === "twilight" ||
      project === "titania" ||
      project === "starlight" ||
      project === "skyrise" ||
      project === "skyhall" ||
      project === "skyblade" ||
      project === "pinnacle" ||
      project === "binghatti-one" ||
      project === "moonlight" ||
      project === "skyterraces" ||
      project === "mercedes-benz-places" ||
      project === "mercedes-benz-places-binghatti-city" ||
      project === "bugatti"
    ) {
      developer = "binghatti";
    } else if (
      project.includes("arada") ||
      project === "armani" ||
      project === "akala" ||
      project === "anantara" ||
      project === "il-teatro" ||
      project === "inaura" ||
      project === "masaar-azalea" ||
      project === "nesba-3" ||
      project === "safa-1" ||
      project === "safa-park-view" ||
      project === "sequoia" ||
      project === "the-gate-3" ||
      project === "the-gate-4" ||
      project === "w-residences" ||
      project === "massar"
    ) {
      developer = "arada";
    } else if (
      project.includes("imtiaz") ||
      project === "wynwood" ||
      project === "beach-walk-4" ||
      project === "cove-edition-6" ||
      project === "cove-grand" ||
      project === "sunset-bay-grand" ||
      project === "pearl-house-4" ||
      project === "the-symphony" ||
      project === "wynwood-horizon"
    ) {
      developer = "imtiaz";
    } else if (
      project.includes("tiger") ||
      project === "orchid" ||
      project === "altai-tower" ||
      project === "ananda-tower" ||
      project === "auresta-tower" ||
      project === "elbrus-tower" ||
      project === "guzel-tower" ||
      project === "jade-tower" ||
      project === "lilium-tower" ||
      project === "red-square-tower" ||
      project === "sky-tower" ||
      project === "volga-tower"
    ) {
      developer = "tiger";
    } else if (
      project.includes("beyond") ||
      project === "kanyon" ||
      project === "31-above"
    ) {
      developer = "beyond";
    } else if (
      project.includes("omniyat") ||
      project === "the-alba-residences" ||
      project === "opus-tower" ||
      project === "vela-dorchester" ||
      project === "orla-dorchester" ||
      project === "vela-viento" ||
      project === "lumenaalta"
    ) {
      developer = "omniyat";
    } else if (
      project.includes("danube") ||
      project === "danube-shahrukhz" ||
      project === "danube-aspirz" ||
      project === "bayz101" ||
      project === "bayz102" ||
      project === "breez" ||
      project === "diamondz" ||
      project === "eleganz" ||
      project === "fashionz"
    ) {
      developer = "danube";
    }

    return { category, developer, project };
  });
}

// Keep your FALLBACK_PROJECT_DATA the same
export const FALLBACK_PROJECT_DATA = {
  seo: {
    title: {
      en: "Project Not Found | Nextis",
      ar: "المشروع غير موجود | نيكستس",
    },
    description: {
      en: "The requested project could not be found.",
      ar: "لم يتم العثور على المشروع المطلوب.",
    },
    canonical: "/projects",
  },
  project: {
    name: {
      en: "Unknown Project",
      ar: "مشروع غير معروف",
    },
    developer: {
      en: "Unknown",
      ar: "غير معروف",
    },
    location: {
      en: "N/A",
      ar: "غير متوفر",
    },
    status: {
      en: "Unavailable",
      ar: "غير متوفر",
    },
    startingPrice: {
      en: "N/A",
      ar: "غير متوفر",
    },
    completionDate: {
      en: "N/A",
      ar: "غير متوفر",
    },
    type: {
      en: "N/A",
      ar: "غير متوفر",
    },
  },
  hero: {
    backgroundUrl: "/images/fallback-hero.jpg",
    squareImageUrl: "/images/fallback-square.jpg",
    companyName: {
      en: "Unknown Developer",
      ar: "مطور غير معروف",
    },
    rating: 0,
  },
  intro: {
    title: {
      en: "Project Not Found",
      ar: "المشروع غير موجود",
    },
    paragraphs: [
      {
        en: "We couldn't find the project you're looking for.",
        ar: "لم نتمكن من العثور على المشروع الذي تبحث عنه.",
      },
      {
        en: "Please check the URL or explore other listings.",
        ar: "يرجى التحقق من الرابط أو استكشاف المشاريع الأخرى.",
      },
    ],
  },
  gallery: {
    slides: ["/images/fallback-gallery.jpg"],
  },
  floorPlans: { plans: [] },
  amenities: { amenities: [] },
  location: { lat: 25.2048, lng: 55.2708 },
  cta: {
    title: {
      en: "Need Assistance?",
      ar: "هل تحتاج إلى مساعدة؟",
    },
    description: {
      en: "Get in touch with our experts today.",
      ar: "تواصل مع خبرائنا اليوم.",
    },
    buttons: [
      {
        text: {
          en: "Contact Us",
          ar: "اتصل بنا",
        },
        type: "primary",
        url: "/contact",
      },
    ],
  },
  images: ["/images/fallback-gallery.jpg"],
};
