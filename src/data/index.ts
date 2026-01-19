// This file exports all data modules for easy importing
export { projects, getFeaturedProjects, getProjectBySlug, getProjectsByCategory, getAllProjectSlugs } from './projects';
export { technicalSkills, getSkillsByCategory, getSkillsByProficiency, getTopSkills, getSkillsForProject, getAllCategories } from './skills';
export { workExperience, getCurrentPosition, getExperienceByCompany, getExperienceByRole, getRecentExperience, getTotalYearsOfExperience, getExperienceByTechnology, getTimeline } from './experience';