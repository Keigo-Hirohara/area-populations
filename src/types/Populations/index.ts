import { AgeGroup } from '../../utils/format'

export type Populations = {
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
  populations: {
    demographic: AgeGroup
    populationChange: number[]
    color: string
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
