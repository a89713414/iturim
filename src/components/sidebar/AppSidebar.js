import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { AppSidebarNav } from './AppSidebarNav'
import Logo from "../../assets/images/logo.png"
import { setSidebarShow, setSidebarUnfoldable } from '../../redux/reducers/appSlice'

const AppSidebar = ({ navigation, language }) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.app.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.app.sidebarShow)

  return (
    <CSidebar
      className="border-end transition-sidebar"
      colorScheme="light"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => dispatch(setSidebarShow(visible))}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
        <img src={Logo} alt="Logo" className="sidebar-brand-full" height={100} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          onClick={() => dispatch(setSidebarShow(!sidebarShow))}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} language={language} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler onClick={() => dispatch(setSidebarUnfoldable(!unfoldable))} />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
