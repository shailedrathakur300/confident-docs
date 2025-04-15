import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import ComparisonTable from './components/ComparisonTable'
import VideoDisplayer from './components/VideoDisplayer'
 
// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ComparisonTable,
    VideoDisplayer,
    ...components
  }
}