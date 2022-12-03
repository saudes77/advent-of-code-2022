interface Snack {
  calories: number
}

interface SnackElf {
  snacks: Array<Snack>
  caloriesAvailable: () => number
}

export { Snack, SnackElf }