import moment from 'moment'
import { getTimeRange } from './voteConfig'

export const getVotesTableData = state => state.voteData.votesTableData

export const getVoteEndingTime = state => {
  const timeRange = getTimeRange(state)
  return moment().unix() + timeRange * 60
}

export const getVoteEnding = state => {
  const endTime = state.voteData.timeRange
  return endTime <= moment().unix() ? true : false
}
