export type Populations = {
  result: {
    data: {
      label: string
      data: {
        year: number
        value: number
      }[]
    }[]
  }
}

export type FormatedPopulationsForLinegraph = {
  labels: string[]
  datasets: {
    label: string
    data: number[]
  }[]
}
