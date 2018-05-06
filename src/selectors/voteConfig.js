export const isVoteConfigShown = state => state.voteConfig.showVoteConfig

export const getStartTime = state => state.voteConfig.startTime

export const getEndTime = state => state.voteConfig.endTime

export const getNumberStartTime = state => {
  const TIME = state.voteConfig.startTime
  return !Number(TIME[0]) ? Number(TIME.slice(0, 2)) : Number(TIME.slice(0, 3))
}

export const getNumberEndTime = state => {
  const TIME = state.voteConfig.endTime
  return !Number(TIME[0]) ? Number(TIME.slice(0, 2)) : Number(TIME.slice(0, 3))
}

export const getVoteStarting = state => state.voteConfig.voteStarting

export const getVoteEnding = state => state.voteConfig.voteEnding
