import { useQuery } from 'react-query'
import API from '../api/API'

import routesData from '../mocks/routes.json'
import navsData from '../mocks/_nav.json'
import textsData from '../mocks/texts.json'

const useDataFetching = () => {
  return {
    routesData,
    navsData,
    textsData,
  }
}

export default useDataFetching
