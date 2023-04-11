import { AgeGroup, formatedAgegroup } from '../../utils/format'

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

export type PopulationsForContext = {
  ageGroup: formatedAgegroup
  populationChange: {
    label: string
    data: number[]
  }
}[]

export type FormatedPopulationsForLinegraph = {
  labels: string[]
  datasets: {
    label: string
    data: number[]
  }[]
}
