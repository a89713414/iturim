import React, { Suspense, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import componentMapping from '../../utils/componentMapping'


const AppContent = ({ routes, texts, language }) => {
  const direction = language === 'he' ? 'rtl' : 'ltr'
  const location = useLocation()

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0)
  }, [location])


  return (
    <CContainer fluid className={`p-0 content_wrapper_${direction}`}>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            const Component = componentMapping[route.element]
            return (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.element}
                element={<Component texts={texts} direction={direction} />}
              />
            )
          })}
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </CContainer >
  )
}

export default React.memo(AppContent)
