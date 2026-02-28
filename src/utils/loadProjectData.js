// src/utils/loadProjectData.js
export async function loadProjectData(projectPath, locale = "en") {
  try {
    if (locale === "ar") {
      const arabicData = await import(`@/data/projects/${projectPath}.ar.js`);
      // Return the first export (assuming it's the main export)
      return arabicData[Object.keys(arabicData)[0]];
    } else {
      const englishData = await import(`@/data/projects/${projectPath}.js`);
      return englishData[Object.keys(englishData)[0]];
    }
  } catch (error) {
    console.error(
      `Error loading project data for ${projectPath} in ${locale}:`,
      error
    );

    // Fallback to English
    try {
      const englishData = await import(`@/data/projects/${projectPath}.js`);
      return englishData[Object.keys(englishData)[0]];
    } catch (fallbackError) {
      console.error(`Fallback also failed for ${projectPath}:`, fallbackError);
      return null;
    }
  }
}
