import defaultSettings from '@/settings'

const title = defaultSettings.title || '社团联合会'

export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}