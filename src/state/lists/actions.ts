import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit'
import { TokenList, Version } from '@uniswap/token-lists'

export const fetchTokenList: Readonly<{
  pending: ActionCreatorWithPayload<{ url: string; requestId: string }>
  fulfilled: ActionCreatorWithPayload<{ url: string; tokenList: TokenList; requestId: string }>
  rejected: ActionCreatorWithPayload<{ url: string; errorMessage: string; requestId: string }>
}> = {
  pending: createAction('lists/fetchTokenList/pending'),
  fulfilled: createAction('lists/fetchTokenList/fulfilled'),
  rejected: createAction('lists/fetchTokenList/rejected')
}

export const getBridgeTokenList = createAction<{chainId: any, tokenList:any}>('lists/getBridgeTokenList')
export const acceptListUpdate = createAction<string>('lists/acceptListUpdate')
export const addList = createAction<string>('lists/addList')
export const removeList = createAction<string>('lists/removeList')
export const selectList = createAction<string>('lists/selectList')
export const rejectVersionUpdate = createAction<Version>('lists/rejectVersionUpdate')
export const mergeTokenList = createAction<{chainId: any, tokenList:any}>('lists/mergeTokenList')
export const updateTokenlistTime = createAction<{}>('lists/updateTokenlistTime')
export const userSelectCurrency = createAction<{chainId: any, token?:any, toChainId?:any}>('lists/userSelectCurrency')
