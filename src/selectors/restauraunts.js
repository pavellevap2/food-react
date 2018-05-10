import { getVotesFromDb } from './voteData'

export const getRestauraunts = state => state.restaurauntsData.restauraunts

export const getRestaurauntsWidthVotes = state => {
  const restaraunts = getRestauraunts(state)
  const votes = getVotesFromDb(state)
  const userId = localStorage.getItem('userId')

  const currRestarauntsData = () => {
    if (votes.length && votes !== undefined) {
      return restaraunts.map(x => ({
        ...x,
        voteStatus: votes
          .find(y => x.key === y.key)
          .vote.some(z => z === userId),
      }))
    } else {
      return []
    }
  }
  console.log('rest-', currRestarauntsData())
  return currRestarauntsData()
}

export const getPreloader = state => state.restaurauntsData.preloader
