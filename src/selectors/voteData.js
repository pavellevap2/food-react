import moment from 'moment'
import { getTimeRange } from './voteConfig'

export const getVotesFromDb = state => state.voteData.votesTableData

export const getVotesTableData = state =>
  getVotesFromDb(state).map(x => ({ ...x, vote: x.vote.length }))

export const getVoteEndingTime = state => {
  const timeRange = getTimeRange(state)
  return moment().unix() + timeRange * 60
}

export const getVoteEnding = state => {
  const endTime = state.voteData.timeRange
  return endTime <= moment().unix() ? true : false
}

export const getVotePrams = state => state.voteData.voteParams
