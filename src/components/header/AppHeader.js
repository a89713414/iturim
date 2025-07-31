import React, { useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CRow,
  CCol,
  CListGroup,
  CListGroupItem,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cifIl, cifUs, cilContrast, cilGlobeAlt, cilMenu, cilMoon, cilSun, cilPhone, cilEnvelopeOpen } from '@coreui/icons'
import { setLanguage, setSidebarShow } from '../../redux/reducers/appSlice'
import { isMobile } from 'react-device-detect';
import Logo from "../../assets/images/logo.png"
import Symbol from "../../assets/images/symbol.png"

const AppHeader = ({ routes, texts, language }) => {
  const direction = language === 'he' ? 'end' : 'start'
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const sidebarShow = useSelector((state) => state.app.sidebarShow)
  const location = useLocation();

  const headerRef = useRef()
  const dispatch = useDispatch()



  return (
    <CHeader position="sticky" className="mb-0 p-0 header_main" ref={headerRef}>
      <CContainer className="navbar_wrapper_top d-flex justify-content-center align-items-center" fluid >

        <CListGroup className="d-flex flex-column flex-lg-row">
          <CListGroupItem className="border-0">
            <a href="tel:+972555076614" className="d-flex align-items-center">
              <CIcon icon={cilPhone} size="lg" className="me-2" />
              055-5076614
            </a>
          </CListGroupItem>
          <CListGroupItem className="border-0">
            <a href="mailto:support@iturimglobal.com" className="d-flex align-items-center">
              <CIcon icon={cilEnvelopeOpen} size="lg" className="me-2" />
              support@iturimglobal.com
            </a>
          </CListGroupItem>
        </CListGroup>

      </CContainer>



      <CContainer className="px-4 navbar_wrapper_bottom" fluid >
        {isMobile && (
          <CHeaderToggler
            onClick={() => dispatch(setSidebarShow(!sidebarShow))}
            style={{ marginInlineStart: '-14px', color: "black" }}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
        )}

        <CHeaderNav className="d-none d-md-flex ms-auto align-items-center gap-xxl-5">
          <CNavItem>
            <img src={Symbol} />
          </CNavItem>
          {texts.header.routes.map((route) => (
            <CNavItem key={route.title}>
              <CNavLink to={route.to} as={NavLink} className={location.pathname === route.to ? 'active' : ''}>
                {route.title}
              </CNavLink>
            </CNavItem>
          ))}


          <CNavItem>
            <CNavLink to="/home" as={NavLink}>
              <img src={Logo} />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>


      {/* <CHeaderNav >
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              <CIcon icon={cilGlobeAlt} size="lg" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={language === 'en'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => dispatch(setLanguage('en'))}
              >
                <CIcon className="me-2" icon={cifUs} size="lg" /> {texts.header.language.english}
              </CDropdownItem>
              <CDropdownItem
                active={language === 'he'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => dispatch(setLanguage('he'))}
              >
                <CIcon className="me-2" icon={cifIl} size="lg" /> {texts.header.language.hebrew}
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CHeaderNav> */}

      {/* <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> {texts.header.theme.light}
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> {texts.header.theme.dark}
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> {texts.header.theme.auto}
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
        </CHeaderNav> */}


      {/* 
      <CContainer className={`px-4 d-flex justify-content-${direction}`} fluid>
        <AppBreadcrumb routes={routes} language={language} />
      </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
