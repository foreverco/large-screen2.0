import config from '~/config'


export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${config.project_name}`
  }
  return `${config.project_name}`
}
