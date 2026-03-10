// sanity/schemaTypes/index.js
import property   from './property'
import article    from './article'
import developer  from './developer'
import heroSlide  from './heroSlide'
import area       from './area'
import siteSettings from './siteSettings'
import navLink    from './types/navLink'
import cdnImage   from './types/cdnImage'
import seo        from './types/seo'

export const schemaTypes = [
  // Documents
  property,
  article,
  developer,
  area,
  siteSettings,
  // Reusable objects
  heroSlide,
  navLink,
  cdnImage,
  seo,
]