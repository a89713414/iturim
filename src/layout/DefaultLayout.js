import React from 'react'
import { AppSidebar, AppFooter, AppHeader } from '../components/index'
import useDataFetching from '../hooks/useDataFetching'
import { convertAndUpdateNavItems } from '../utils/convertAndUpdateNavItems'
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect'
import AppContent from '../components/content/AppContent'

const DefaultLayout = () => {
  const { routesData: routes, navsData, textsData } = useDataFetching()
  const language = useSelector((state) => state.app.language)

  const formattedNavs = convertAndUpdateNavItems(navsData)
  const selectedLanguageTexts = textsData[language]

  return (
    <div>
      {isMobile && <AppSidebar navigation={formattedNavs} language={language} />}
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader routes={routes} texts={selectedLanguageTexts} language={language} />
        <div className="body flex-grow-1">
          <AppContent routes={routes} texts={selectedLanguageTexts} language={language} />
        </div>
        <AppFooter texts={selectedLanguageTexts} />
      </div>
    </div>
  )
}

export default DefaultLayout
