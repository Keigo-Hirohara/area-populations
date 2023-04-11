export type AgeGroup = '年少人口' | '生産年齢人口' | '総人口' | '老年人口'
export type formatedAgegroup =
  | 'youngPopulation'
  | 'workingPopulation'
  | 'totalPopulation'
  | 'agingPopulation'

export const formatAgegroup = (ageGroup: AgeGroup) => {
  switch (ageGroup) {
    case '年少人口':
      return 'youngPopulation'
    case '生産年齢人口':
      return 'workingPopulation'
    case '老年人口':
      return 'agingPopulation'
    default:
      return 'totalPopulation'
  }
}
