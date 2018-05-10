import { getVotesFromDb } from './voteData'

export const getRestauraunts = state => state.restaurauntsData.restauraunts

export const getRestaurauntsWidthVotes = state => {
  const restaraunts = getRestauraunts(state)
  const votes = getVotesFromDb(state)
  const email = localStorage.getItem('email')

  const currRestarauntsData = () => {
    if (votes.length) {
      return restaraunts.map(x => ({
        ...x,
        voteStatus: votes
          .find(y => x.key === y.key)
          .vote.some(z => z === email),
      }))
    } else {
      return []
    }
  }

  return currRestarauntsData()
}

export const getPreloader = state => state.restaurauntsData.preloader
