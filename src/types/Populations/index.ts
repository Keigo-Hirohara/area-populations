export type AgeGroup = '年少人口' | '生産年齢人口' | '総人口' | '老年人口'

export type formatedAgegroup =
  | 'youngPopulation'
  | 'workingPopulation'
  | 'totalPopulation'
  | 'agingPopulation'

export type FetchResultOfPopulations = {
  result: {
    data: {
      label: AgeGroup
      data: {
        year: number
        value: number
      }[]
    }[]
  }
}

export type PopulationsForContextItem = {
  prefecture: string
  color: string
  populations: {
    demographic: AgeGroup
    populationChange: number[]
  }[]
}

export type PopulationsForContext = {
  years: string[]
  data: PopulationsForContextItem[]
}

export type FormatedPopulationsForLinegraph = {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    borderColor: string
  }[]
}
