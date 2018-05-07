import mometnt from 'moment'

export const isVoteConfigShown = state => state.voteConfig.showVoteConfig

export const getStartTime = state => state.voteConfig.startTime

export const getEndTime = state => state.voteConfig.endTime

export const getNumberStartTime = state => {
  const time = state.voteConfig.startTime
  return mometnt(time, 'HH:mm').hours()
}

export const getNumberEndTime = state => {
  const time = state.voteConfig.endTime
  return mometnt(time, 'HH:mm').hours()
}

const currTime = new Date().getHours()

export const getVoteStarting = state => {
  const startTime = getNumberStartTime(state)
  const endTime = getNumberEndTime(state)
  return startTime < endTime ? true : false
}

export const getVoteEnding = state => {
  const endTime = getNumberEndTime(state)
  return endTime <= currTime ? true : false
}
