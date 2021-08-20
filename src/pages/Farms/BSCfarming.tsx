import React, { useEffect, useState } from 'react'
import Farming from '../../components/Farming'
// import { getQueryParam } from '../../utils'
import config from '../../config'
// import {VERSION} from '../../config/constant'
import Title from '../../components/Title'
import AppBody from '../AppBody'

import {getPrice} from '../../utils/tools/getPrice'

import farmlist from '../../config/farmlist'

const FARM_KEY = 'BSC'
export default function FarmingComponent() {
  const [price, setPrice] = useState()
  const [LPprice, setLPPrice] = useState()
  useEffect(() => {
    getPrice('DEP').then((res:any) => {
      console.log(res)
      setPrice(res)
    })
    getPrice('ANY').then((res:any) => {
      console.log(res)
      setLPPrice(res)
    })
  }, [])
  return (
    <>
      <AppBody>
        <Title title='Stake ANY tokens to earn DEP'></Title>
        <Farming
          CHAINID = {farmlist[FARM_KEY].chainId}
          FARMTOKEN = {farmlist[FARM_KEY].farmToken}
          FARMURL = {config.farmUrl + 'farm/bsc'}
          // initPairs = {['ANY', 'anyBTC', 'anyETH', 'anyUSDT', 'anyBNB', 'anyFSN']}
          poolCoin = 'DEP'
          poolCoinLogoUrl={'https://assets.coingecko.com/coins/images/10970/small/DEAPcoin_01.png'}
          blockNumber = {farmlist[FARM_KEY].blockNumber}
          price={price}
          initLpList={farmlist[FARM_KEY].lpTokenIno}
          LPprice={LPprice}
        />
      </AppBody>
    </>
  )
}
