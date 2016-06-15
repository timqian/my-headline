export const dataUrl = 'https://raw.githubusercontent.com/timqian/my-headline-crawler/master/data'
export const serverBase = 'http://localhost:8080'

export const apis = {
  getGithubAccessToken: `${serverBase}/githubAccessToken`
}

export const siteColor = {
  HN: '#FF6600',
  github: '#F5F5F5',
  v2ex: '#FFFFFF',
  reddit: '#CEE3F8',
  medium: '#19AA6E'
}

export const timeTypes = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly'
}