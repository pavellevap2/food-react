import moment from 'moment'
import { getTimeRange } from './voteConfig'

export const getVotesFromDb = state => state.voteData.votesTableData

export const getVotesTableData = state => {
  const votedData = getVotesFromDb(state).map(x => ({
    ...x,
    vote: x.vote.length,
  }))
  function filtersData(a, b) {
    if (a.vote < b.vote) return +1
    if (a.vote > b.vote) return -1
    return 0
  }
  return votedData.sort(filtersData)
}

export const getVoteEndingTime = state => {
  const timeRange = getTimeRange(state)
  return moment().unix() + timeRange * 60
}

export const getVoteEnding = state => {
  const endTime = state.voteData.timeRange
  return endTime <= moment().unix() ? true : false
}

export const getEndHoursTime = state =>
  moment.unix(state.voteData.timeRange).format('HH.mm')

export const getVotePrams = state => state.voteData.voteParams

export const getVotesPrelodaerStatus = state => state.voteData.votesPreloader

export const getLikePreloaderStatus = state => state.voteData.likePreloader
