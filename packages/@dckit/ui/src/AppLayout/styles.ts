import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => {
  const contentPadding = 0
  const drawerWidth = 240
  const drawerMinWidth = 56
  const appBarHeight = 48
  const pageBarHeight = 32
  const barsHeight = appBarHeight + pageBarHeight
  const gray = '#f0f0f0'

  const transition = {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }
  const transitionBar = theme.transitions.create(
    ['width', 'margin'],
    transition
  )
  const transitionContent = theme.transitions.create(
    ['width', 'left'],
    transition
  )

  return {
    appBar: {
      position: 'absolute',
      height: appBarHeight,
      zIndex: theme.zIndex.drawer + 1,
      transition: transitionBar,
    },
    appBarMobile: {
      position: 'absolute',
      height: appBarHeight,
      zIndex: theme.zIndex.drawer - 1,
    },
    appBarShift: {
      zIndex: theme.zIndex.drawer - 1,
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitionBar,
    },
    toolBar: {
      display: 'flex',
      padding: 0,
      margin: 0,
      minHeight: appBarHeight,
    },
    menuButton: {
      marginLeft: 8,
      marginRight: 8,
    },
    pageBar: {
      position: 'absolute',
      left: 0,
      top: appBarHeight,
      height: pageBarHeight,
      width: `calc(100% - ${drawerMinWidth}px)`,
      marginLeft: drawerMinWidth,
      zIndex: theme.zIndex.drawer - 2,
      background: 'rgba(0,0,0,0.01)',
      boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.2)',
      transition: transitionBar,
      display: 'flex',
      alignItems: 'center',
    },
    pageBarMobile: {
      position: 'absolute',
      top: appBarHeight,
      height: pageBarHeight,
      width: '100%',
      marginLeft: 0,
      zIndex: theme.zIndex.drawer - 2,
      background: 'rgba(0,0,0,0.01)',
      boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
    },
    pageBarShift: {
      left: 0,
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitionBar,
    },
    content: {
      background: gray,
      position: 'fixed',
      padding: contentPadding,
      overflow: 'auto',
    },
    contentDesktop: {
      left: drawerMinWidth,
      width: `calc(100% - ${drawerMinWidth}px)`,
      transition: transitionContent,
    },
    contentMobile: {
      left: 0,
      width: '100vw',
    },
    contentOneBar: {
      top: appBarHeight,
      height: `calc(100vh - ${appBarHeight}px)`,
    },
    contentTwoBars: {
      top: barsHeight,
      height: `calc(100vh - ${barsHeight}px)`,
    },
    contentShift: {
      left: `calc(${drawerWidth}px)`,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitionContent,
    },
  }
})